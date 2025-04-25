import React, {useContext} from "react";
import Button from "../../components/Button";
import {Link} from 'react-router'
// import camperImg from "../../assets/images/image 54.png";
import camperImgAlter from '../../assets/images/parker-hilton-YXgkv7clfMI-unsplash.jpg'


function About() {
  


  return (
    <div className="about-container">
      <img src={camperImgAlter} alt="van in the forest" />
      <div className="about-content-container">
        <div className="about-text-container">
          <h2 className="about-header">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="about-text">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-box">
          <h3 className="box-header">
            Your destination is waiting. Your van is ready.
          </h3>
          <Link to='/vans'>
            <Button className="about-button">Explore our vans</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
