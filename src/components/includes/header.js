import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import $ from 'jquery';

export default class Header extends React.Component{

		componentDidMount = () => {
				$(".nav-icon").click(function(){
				  $(".nav-bar-list").toggleClass("show-bar");
				});	
		} 

	render(){
		return(
			<div className="Header">
				<div className="container header-contain">
					<div className="row  d-flex justify-content-between ">
						<div className="col-md-2 logo-box">
								<Link to="/"><img src="images/logo.png" alt="lalas logo"  className="img-fluid"/></Link>
							</div>
								<div className="col-md-8 nav-bar">
									<ul className="nav-bar-list">
										<li><Link to="/">Home</Link></li>
										<li className="hovvy"><Link to="/">categories</Link>
											<div className="category">
											   <div className="container">
											      <div class="mega-menu menu-minus">
											         <div class="tas1 tas3">
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											         </div>
											         <div class="tas4">
											            <div class="menu-img im3">
											               <Link  to="/">
											               <img alt="" src="images/bg_menu2.jpg" /></Link> 
											            </div>
											            <div class="menu-img im3">
											               <Link  to="/">
											               <img alt="" src="images/bg_menu2.jpg" /></Link> 
											            </div>
											         </div>
											      </div>
											   </div>
											</div>
										</li>
										<li className="hovvy"><Link to="/">kashmir scarves</Link>
											<div className="category">
											   <div className="container">
											      <div class="mega-menu menu-minus">
											         <div class="tas1 tas3">
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											            <div class="tas">
											               <h3 class="hedding-border">
											                  <Link to="/">
											                  Kashmir Shawls</Link> 
											               </h3>
											               <Link to="/">
											               Secret Garden Collection</Link> 
											               <Link to="/">
											               Très Chic Regal Collection</Link> 
											               <Link to="/">
											               The Sophistique Collection</Link> 
											            </div>
											         </div>
											         <div class="tas4">
											            <div class="menu-img im3">
											               <Link  to="/">
											               <img alt="" src="images/bg_menu2.jpg" /></Link> 
											            </div>
											            <div class="menu-img im3">
											               <Link  to="/">
											               <img alt="" src="images/bg_menu2.jpg" /></Link> 
											            </div>
											         </div>
											      </div>
											   </div>
											</div>
										</li>
										<li><Link to="/collection">collection</Link></li>
										<li><Link to="/about">about us</Link></li>
										<li><Link to="/contact">contact us</Link></li>
									</ul>
								</div>
								<div className="col-md-2 header-right-box">
								<ul className="d-flex justify-content-end header-icon">
								<li className="icon-list"><Link to="/"><FaUserAlt /></Link></li>
								<li className="icon-list"><Link to="/"><FaSearch /></Link></li>
								<li><Link to="/"><IoIosWallet /><span>2</span></Link></li>
								<li className="nav-icon"><Link to="/"><TiThMenu /></Link></li>
								</ul>
								</div>
								</div>
							</div>
								
			</div>
			)
	}
}

class Navlinks extends React.Component{
	render(){
		return(
			<li>
				<Link to={{pathname :  this.props.link.nav_link}}>{this.props.link.nav}</Link>				
			</li>
			)
	}
}