import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import "./AboutUs.css";
import { HeroImg } from "../../../assets/images";
import { useLocation } from 'react-router-dom';

// const cx = classNames.bind(styles);
const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);


  useEffect(() => {
    const cardImages = document.querySelectorAll(".card-image");
    const cardTitles = document.querySelectorAll(".card-title");
    const cardDescriptions = document.querySelectorAll(".card-description");
   
    const cardImgs = document.querySelectorAll(".card-image img");
    const cardTitleSpans = document.querySelectorAll(".card-title span");
    const cardDescSpans = document.querySelectorAll(".card-description span");

    const renderCard = () => {
      // Remove the skeleton loading effect
      cardImages.forEach((cardImage) => {
        cardImage.classList.remove("loading");
      });
      cardTitles.forEach((cardTitle) => {
        cardTitle.classList.remove("loading");
      });
      cardDescriptions.forEach((cardDescription) => {
        cardDescription.classList.remove("loading");
      });

      // Show the hidden html elements
      cardImgs.forEach((cardImg) => {
        cardImg.style.visibility = "visible";
      });
      cardTitleSpans.forEach((cardTitleSpan) => {
        cardTitleSpan.style.visibility = "visible";
      });
      cardDescSpans.forEach((cardDescSpan) => {
        cardDescSpan.style.visibility = "visible";
      });
      setIsLoading(false);
    };

    // Execute renderCard on setTimeout
    setTimeout(() => {
      renderCard();
    }, 1000);
  }, []);
  return (
    <div className="about-us">
      <div className="company">
        <div className="img">
          <img
            src={HeroImg}
            alt=""
          />
        </div>
        <div className="company-info">
          <span>
            B&IBooking  <span className="our">FOR BRAND & INFLUENCER</span>
          </span>
          <p>
            <b>IBooking</b> is a platform to connect Influencers with Brands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem cum minima aperiam aspernatur excepturi beatae praesentium. Molestiae, ea? Eum, quasi incidunt. Quia quae laborum eius aliquid animi maiores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem cum minima aperiam aspernatur excepturi beatae praesentium. Molestiae, ea? Eum, quasi incidunt. Quia quae laborum eius aliquid animi maiores voluptate!!
          </p>
        </div>
      </div>
      <div className="team">
        <span>OUR TEAM</span>
      </div>
      <div className="container-about-us">
        <div className="card">
          <div className="card-image loading">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3 className="card-title loading">
              <span>
                Yash <span className="yellow-surname">Falke</span>
              </span>
            </h3>
            <p className="card-description loading">
              <span className="personal-info">
                <span className="info">Graphic Designing Head</span> <br />
                Pursuing IT Engineering (VIT Mumbai) <br />
                Email:{" "}
                <a href="mailto:'yashfalke77@gmail.com'">
                  yashfalke77@gmail.com
                </a>
              </span>
            </p>
            
          </div>
        </div>
        <div className="card">
          <div className="card-image loading">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="
              alt=""
            />
          </div>
          <div className="card-info">
            <h3 className="card-title loading">
              <span>
                Harsh <span className="yellow-surname">Sunwani</span>
              </span>
            </h3>
            <p className="card-description loading">
              <span className="personal-info">
                <span className="info">Web Developing Head</span> <br />
                Pursuing IT Engineering (VIT Mumbai) <br />
                Email:{" "}
                <a href="mailto:'harshsunwani11@gmail.com'">
                  harshsunwani11@gmail.com
                </a>
              </span>
            </p>
            
          </div>
        </div>
        <div className="card">
          <div className="card-image loading">
            <img
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3 className="card-title loading">
              <span>
                Nikhil <span className="yellow-surname">Jaiswal</span>
              </span>
            </h3>
            <p className="card-description loading">
              <span className="personal-info">
                <span className="info">Marketing and Publicity Head</span>{" "}
                <br />
                Pursuing IT Engineering (VIT Mumbai) <br />
                Email:{" "}
                <a href="mailto:'nikjaiswal21@gmail.com'">
                  nikjaiswal21@gmail.com
                </a>
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
