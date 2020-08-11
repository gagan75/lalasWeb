import React from 'react'
import {Link} from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { MdPhonelink } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import RegisterForm from './../common/form'

class Contact extends React.Component{
	render(){
		return(
			<div className="Contact">
				<section class="contact-img-area">
		            <div class="container">
		                <div class="row">
		                    <div class="col-md-12 text-center">
		                        <div class="con-text">
		                            <h2 class="page-title">Contact us</h2>
		                            <p><a href="#">Home <i class="fa fa-angle-right"></i></a>  About Us</p>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section class="design-area home-five" >
				   <div class="container">
				      <div class="row">
				         <div class="col-md-6 col-xs-12">
				            <div class="row">
				               <div class="col-md-12">
				                  <div class="about">
				                     <h1>Contact Form</h1>
				                  </div>
				               </div>
				               <RegisterForm />
				            </div>
				         </div>
				         <div class="col-md-6 col-xs-12">
				            <div class="row">
				               <div class="col-md-12">
				                  <div class="about">
				                     <h1>Contact Info</h1>
				                  </div>
				                  <div class="row contctinfo">
				                     <div class="col-md-12">
				                        <h1>Rana Abdul Rahim & Partners L.L.C.</h1>
				                        <h2>Lalas Group of Companies</h2>
				                     </div>
				                     <div class="col-md-12">
				                     	<ul>
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
				            </div>
				         </div>
				      </div>
				   </div>
				</section>
			</div>
			)
	}
}
export default Contact;