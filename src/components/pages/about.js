import React from 'react'
import {Link} from 'react-router-dom'

class About extends React.Component{
	render(){
		return(
			<div className="About">
				<section class="contact-img-area">
		            <div class="container">
		                <div class="row">
		                    <div class="col-md-12 text-center">
		                        <div class="con-text">
		                            <h2 class="page-title">About Us</h2>
		                            <p><a href="#">Home <i class="fa fa-angle-right"></i></a>  About Us</p>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section class="design-area home-five" >
				  	<div class="container">
				  		<div className="about-title">
							     		<h1>About Us</h1>
							     	</div>
				    	<div class="row">
							      	
							     	<div class="col-md-7 col-xs-12">       
								       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
							     	</div>
							     	<div class="col-md-5 col-xs-12"> 
							    		<div class="about-img"> <img src="images/about-us.jpg" className="img-fluid"/></div>
							     	</div>
						</div>				   
				  </div>
				</section>
			</div>
			)
	}
}
export default About;