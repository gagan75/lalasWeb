import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class ProductSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p001.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p002.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p003.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p004.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p005.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p006.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p001.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
        <div className="Proslider">
          <div>
            <div className="container">
              <div className="inner-proslider">
                <img src="images/p001.jpg" />
              </div>
              <Link to="/">product name</Link>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
export default ProductSlider;