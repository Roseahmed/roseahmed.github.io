/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import campus from "./assets/img/campus.jpg";
import courses from "./assets/img/courses.png";
import c1 from "./assets/img/c1.jpg";
import c2 from "./assets/img/c2.jpg";
import c3 from "./assets/img/c3.jpg";
import c4 from "./assets/img/c4.jpg";
import c5 from "./assets/img/c5.webp";
import { FaWhatsapp } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "./components/Accordion";
import { CustomCard } from "./components/CustomCard";
import { coursesData, accordionItems } from "./data/data";
import { MdMenu } from "react-icons/md";
import logo from "./assets/logo-black.svg";

const App = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Change 768 to your desired breakpoint
        setMenu(false); // Close the sidebar if window width is greater than 768px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className="top-0 z-50 bg-white flex items-center justify-between px-10 py-4 border-b relative">
        {/* TODO: Center this div (Mobile view) -> done */}
        <div className="left flex items-center justify-start ">
          <img src={logo} alt="logo" className="w-10 " />
          <h1 className="text-2xl font-semibold head tracking-wide">
            EDUCONNECT
          </h1>
        </div>
        {/* TODO: Make this responsive (Mobile view), Uncomment in (Web view) -> done*/}
        <div className=" right text-2xl">
          <ul className="hidden md:flex items-center gap-4 font-medium">
            <a href="#courses">Courses</a>
            <a href="#campus">Campus</a>
            <a href="#questions">Services</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
        <MdMenu size={24} className="md:hidden" onClick={handleMenu} />
        {/* Mobile view */}

        {menu && (
          <ul className="md:hidden flex flex-col items-center gap-4 font-medium  text-2xl bg-gray-100 shadow-lg absolute right-0 top-16 px-10 h-screen w-52 z-50">
            <a href="#courses" onClick={() => setMenu(false)}>
              Courses
            </a>
            <a href="#campus" onClick={() => setMenu(false)}>
              Campus
            </a>
            <a href="#questions" onClick={() => setMenu(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setMenu(false)}>
              Contact
            </a>
          </ul>
        )}
      </header>

      {/* hero section */}
      <section className="banner h-[33rem] w-full relative flex items-center justify-center ">
        <div className="data bg-gray-50/80 p-4 rounded  max-w-[27rem] ">
          <div className="content text-center flex flex-col gap-3">
            <h1 className="text-3xl font-semibold uppercase">
              Empowering the Next Generation
            </h1>
            <p>
              We provide innovative educational services to transform learning
              experiences.
            </p>
            {/* <button className="bg-slate-900 text-white px-5 py-2 rounded uppercase font-semibold">
              Get Started
            </button> */}
          </div>
        </div>
      </section>

      {/* courses */}
      {/* TODO: Show one cards and card should be of same size in (Mobile view) -> done */}
      <section id="courses" className="courses mt-20 mb-10">
        <h1 className="text-center font-semibold text-2xl">COURSES</h1>
        <div className="p-10 grid md:grid-cols-3 gap-3">
          {coursesData.map((ele, i) => (
            <div key={i} className="courseList">
              <CustomCard items={ele} />
            </div>
          ))}
        </div>
      </section>

      {/* campus section */}
      <section id="campus" className="welcome my-8 w-full ">
        <h1 className="text-center text-2xl font-semibold">OUR CAMPUS</h1>

        {/* images section */}
        <div className="imagesSection mt-10 flex px-10 gap-5 flex-col md:flex-row">
          <div className="left w-full">
            <img src={campus} alt="campus" className="flex-1" />
          </div>
          <div className="right max-h-[30rem]">
            <img src={courses} alt="courses" className="h-full w-full flex-1" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="questions" className="bg-[#f6f6f6]  p-10">
        <h1 className="text-2xl text-center font-semibold">WHY CHOOSE US</h1>
        <div className="questions max-w-[35rem] mx-auto">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* gallery? */}
      <section className="gallery bg-[#f6f6f6] p-10">
        <h1 className="text-2xl font-semibold text-center">
          A VISUAL JOURNEY THROUGH EDUCATION
        </h1>
        <div className="mt-10">
          <Carousel dynamicHeight emulateTouch infiniteLoop swipeable>
            <div>
              <img src={c1} alt="c1" />
            </div>
            <div>
              <img src={c2} alt="c1" />
            </div>
            <div>
              <img src={c3} alt="c1" />
            </div>
            <div>
              <img src={c4} alt="c1" />
            </div>
            <div>
              <img src={c5} alt="c1" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* contact us */}
      <section
        id="contact"
        className=" p-10 text-center max-w-[50rem] mx-auto space-y-6 "
      >
        <h1 className="text-2xl text-center font-semibold">CONTACT US</h1>
        <p className="text-xl">Let us help!</p>
        <p>
          {" "}
          If you&apos;re unsure about what type of college will be best for you,
          just tell us a little more about your needs. We will get back to you
          as soon as possible with the answers you need!
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=918123821588&text=Can you please find the best college in Bengaluru for the course"
          target="_blank"
        >
          <button className="px-4 py-2 mt-5 bg-[#455a64] text-white text-xl rounded  mx-auto">
            <div className="flex items-center gap-2">
              <p>
                {" "}
                <FaWhatsapp />
              </p>
              <p>Connect Us</p>
            </div>
          </button>
        </a>
      </section>

      {/* address */}
      <section className="p-10">
        <h1 className="text-center text-xl font-medium">Address</h1>
        <p className="text-center pt-3">
          #68 1st Floor, 1st Cross Road, Anugraha Layout, Ramanashree Enclave,
          Bilekahalli, Bengaluru, Karnataka, India
        </p>
        <p className="text-center pt-3">
          {" "}
          <h1 className="text-center text-xl font-medium">Email</h1>
          support@educonnect.org.in
        </p>
      </section>

      {/* hours */}
      <section className="p-10">
        <h1 className="text-center text-xl font-medium">Office Hours</h1>
        <p className="text-center pt-3 font-medium">
          Monday to Sunday 09:00 AM - 06:00 PM
        </p>
      </section>

      {/* map */}
      {/* TODO: Show the location indicator in map */}
      <section className="map">
        <iframe
          width="100%"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4125.100895032733!2d77.60925876874816!3d12.902513662226546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155f4525230d%3A0xf0cff9a026d38b52!2sS%20I%20Secure!5e0!3m2!1sen!2sin!4v1715850104955!5m2!1sen!2sin"
          // frameBorder="0"
          // scrolling="no"
          // marginHeight="0"
          // marginWidth="0"
        ></iframe>
        <br />
      </section>

      <footer className="p-10 text-center">
        <p>Copyright © 2024 EduConnect - All Rights Reserved.</p>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=918123821588&text=Can you please find the best college in Bengaluru for the course"
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default App;
