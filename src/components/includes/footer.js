import React from 'react'
import {Link} from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { MdPhonelink } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { MdWifiTethering } from 'react-icons/md';

class Footer extends React.Component{
	render(){
		return(
			<div className="Footer">
			<footer className="footer-area">
			  <div className="footer-top">
			    <div className="container">
			      <div className="row">
				      <div className="col-md-12 footer-column">
				       	<div className="inner-footer">
				       		 <div className="footy">
				          <div className="first-footer rspn">
				            <h3 className="wg-title">Contact Us</h3>
				            <div className="textwidget">
				              <ul>
				                <div className="company">Rana Abdul Rahim & Partners L.L.C.
				                  <p>Lalas Group of Companies</p>
				                </div>
				                <li className="address-foot"> <span className="footer-first-icon"><MdLocationOn /></span>
				                  <p>P.O. Box 1031, Postal Code 114 Muscat, Sultanate of Oman</p>
				                </li>
				                <li> <span className="footer-first-icon"><FaPhoneAlt /></span><span className="footer-no"> +968 24562576 </span> </li>
				                <li> <span className="footer-first-icon"><MdPhoneAndroid /></span><span className="footer-no"> +968 99336576 </span> </li>
				                <li> <span className="footer-first-icon"><MdPhonelink /></span> <span className="footer-no"> +968 24562551 </span> </li>
				                <li> <span className="footer-first-icon"><FaEnvelope /></span><span className="footer-no"><Link to="mailto:imranhl@yahoo.co.in"> imranhl@yahoo.co.in</Link></span> </li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="footy">
				          <div className="first-footer rspn">
				            <h3 className="wg-title">Information</h3>
				            <div className="textwidget">
				              <ul className="f-none">
				                <li><Link to="index.html">Home</Link></li>
				                <li><Link to="about.html">About Us</Link></li>
				                <li><Link to="#">FAQ</Link></li>
				                <li><Link to="contact.html">Contact us</Link></li>
				                <li><Link to="#">Partner with us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="footy">
				          <div className="first-footer rspn">
				            <h3 className="wg-title">Our Offers</h3>
				            <div className="textwidget">
				              <ul className="f-none">
				                <li><Link to="#">New Collection</Link></li>
				                <li><Link to="#">Best Sellers</Link></li>
				                <li><Link to="#">Manufacturers</Link></li>
				                <li><Link to="#">New Products</Link></li>
				                <li><Link to="#">Suppliers</Link></li>
				                <li><Link to="#">Delivery & Returns</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="footy">
				          <div className="first-footer res-mrg-top-md rspn">
				            <h3 className="wg-title">Our Policy</h3>
				            <div className="textwidget">
				              <ul className="f-none">
				                <li><Link to="#">My Account</Link></li>
				                <li><Link to="#">Order History</Link></li>
				                <li><Link to="#">Wish List</Link></li>
				                <li><Link to="#">Newsletter</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="footy">
				          <div className="last-footer res-mrg-top-md">
				            <h3 className="wg-title">Get Newsletters</h3>
				            <div className="newsletter">
				              <form action="#">
				                <p>
				                  <input className="newsletter-email" type="email" placeholder="Email" required />
				                </p>
				                <p>
				                  <input className="newsletter-submit" type="submit" value="Subscribe" />
				                </p>
				              </form>
				            </div>
				            <div className="widget_text">
				              <h3 className="wg-title">Connect Us</h3>
				              <div className="textwid">
				                <ul className="socials">
				                  <li><Link to="#"><span><FaFacebookF /></span></Link></li>
				                  <li><Link to="#"><span><AiOutlineTwitter  /></span></Link></li>
				                  <li><Link to="#"><span><FaLinkedinIn /></span></Link></li>
				                  <li><Link to="#"><span><IoIosWifi /></span></Link></li>
				                  <li><Link to="#"><span><MdWifiTethering /></span></Link></li> 
				                </ul>
				              </div>
				            </div>
				          </div>
				        </div>
				       	</div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="footer-bottom">
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-4 col-md-4 col-12">
			          <div className="footer-address">
			            <address>
			            Copyright © <Link to="#">lalasweb.com </Link> | All Rights Reserved
			            </address>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-4 col-12">
			          <div className="foot-icon">
			            <ul>
			              <li><Link to="#"><img src="images/icon-img/payment-1.jpg" alt="" /></Link></li>
			              <li><Link to="#"><img src="images/icon-img/payment-2.jpg" alt="" /></Link></li>
			              <li><Link to="#"><img src="images/icon-img/payment-3.jpg" alt="" /></Link></li>
			              <li><Link to="#"><img src="images/icon-img/payment-4.jpg" alt="" /></Link></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-4 col-12">
			          <div className="foot-icon">
			            <ul>
			              <li><Link to="http://akswebsoft.com/" target="_blank"><img src="images/powerdby.png" alt="" /></Link></li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</footer>
			</div>

			)
	}
}
export default Footer;