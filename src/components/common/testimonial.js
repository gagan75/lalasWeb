import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class TestimonialSlider extends React.Component {
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
        <div className="Proslider1">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user1.png" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user2.jpg" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Proslider1">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user1.png" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user2.jpg" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Proslider1">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user1.png" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="left-test-box">
                      <div className="inner-testimonial">
                        <img src="images/coma.png" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.</p>
                      </div>
                      <div className="test-content">
                        <img src="images/user2.jpg" />
                        <span>john doe</span>
                        <p>technical support -olker</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </Slider>
    );
  }
}
export default TestimonialSlider;