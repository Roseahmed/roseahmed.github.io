/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(itemIndex => itemIndex !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const isOpen = (index) => {
    return openItems.includes(index);
  };

  return (
    <div className='my-5 space-y-3'>
      {items.map((ele, index) => (
        <div key={index} className='border-b py-4 cursor-pointer' onClick={() => handleToggle(index)}>
          <div className="title flex items-center justify-between" >
            <p className='text-xl font-semibold text-slate-600'>
              {ele.title}
            </p>
            <p className='text-xl'>
              {isOpen(index) ? <IoIosArrowUp size={17} />
                : <IoIosArrowDown size={17} />
              }
            </p>
          </div>
          <div className={`${isOpen(index) ? "block" : 'hidden'} description pb-2 text-slate-700/50`}>
            {ele.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
