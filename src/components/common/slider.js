import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="slider">
            <div className="container">
              <div className="inner-slider">
                <p className="banner-text">new collection</p>
                <h1>lalas products</h1>
                <p className="banner-subtext">save upto 50 % off</p>
                <Link to="/">shop now</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slider1">
            <div className="container">
              <div className="inner-slider">
                <p className="banner-text">new collection</p>
                <h1>lalas products</h1>
                <p className="banner-subtext">save upto 50 % off</p>
                <Link to="/">shop now</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slider2">
            <div className="container">
              <div className="inner-slider">
                <p className="banner-text">new collection</p>
                <h1>lalas products</h1>
                <p className="banner-subtext">save upto 50 % off</p>
                <Link to="/">shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;