import React from 'react'
import {Link} from 'react-router-dom'
import SimpleSlider from './../common/slider'
import ProductSlider from './../common/latest-product-slider'
import TestimonialSlider from './../common/testimonial'
import Product from './../common/prodcut'
import $ from 'jquery';
import Video from './../common/video'
import MapContainer  from './../common/google-map'
class Home extends React.Component{

	componentDidMount = () => {

		
	} 
	render(){
		return(
			<div className="Home">
				<div className="lalas-slider">
					<SimpleSlider />
				</div>
				<div className="product-slider">
					<div className="container">
						<div className="product-tile">
							<h2>latest products</h2>
							<img src="images/underline-style-2.png" />
						</div>
						<ProductSlider />
					</div>
				</div>
				 <section className="lala-return">
		          <div className="container">
		            <div className="row align-items-center">
		              <div className="col-md-6">
		                <div className="lalas-return-content">
		                	<h4>the lalas return</h4>
			                <p>Lorem Ipsum is simply dummy text of the printing and 
			                typesetting industry. Lorem Ipsum has
			                 been the industry's standard dummy text ever 
			                 since the 1500s,</p>
			                 <Link to="/" className="btn-link btn-link2">shop now</Link>
		                </div>
		              </div>
		              <div className="col-md-6">
		              <img src="images/lalas-1.jpg" className="img-fluid" alt="lalas-return"/>
		              </div>
		            </div>
		          </div>
		        </section>
		        <section>
		          <div className="shawls-section">
		            <div className="inner-shawls">
		              <div className="left-content-1">
		              <img src="images/001.jpg" className="img-fluid" alt="dsfds" />
		              <h4>new shawls</h4>
		              </div>
		            </div>
		            <div className="inner-shawls">
		            <div className="left-content-2">
		              <img src="images/002.jpg" className="img-fluid" alt="dsfds" />
		             <div>
		             	<h4>new shawls</h4>
		            	<p>Lorem Ipsum is simply dummy text of the..</p>
		             </div>
		              </div>
		            </div>
		            <div className="inner-shawls">
		           	<div className="left-content-3">
		              <img src="images/003.jpg" className="img-fluid" alt="dsfds" />
		             <div>
		             	<h4>new <span>shawls</span></h4>
		            	<p>Lorem Ipsum is simply dummy text of the..</p>
		             </div>
		              </div>
		            </div>
		          </div>
        		</section>
        		<section className="product-section">
        			<div className="container">
						<div className="product-tile">
							<h2> products</h2>
							<img src="images/underline-style-2.png" />
						</div>
						<Product />
					</div>
        		</section>
        		<section className="lalas-video">
                    <div className="left-box">
                        <div>
                            <h3>New Lalas Company Video</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, 
                            </p>
                            <Link to="/" className="btn-link btn-link2">shop now</Link>
                        </div>
                    </div>
                    <div className="right-box">
                      <Video />
                    </div>
                </section>
        		<section className="testimonial-section">
        			<div className="container">
        				<div className="product-tile">
							<h2> customer love</h2>
							<img src="images/underline-style-2.png" />
							<p>we take pride in our quality and service</p>
						</div>
						<TestimonialSlider />
        			</div>
        		</section>
        		<section className="explore">
				    <div className="container">
				        <div className="inner-explore">
			            	<div>
				            	<h2>explore our workshop</h2>
					            <p>Lorem Ipsum is simply dummy text of the
					            printing and typesetting industry.
					            </p>
					            <Link to="/" className="btn-link btn-link3" >shop now</Link>
			            	</div>
			          	</div>
			        </div>
			    </section>
			    <section className="lalas-box">
			        <div className="container">
			            <div className="product-tile">
							<h2> blog section</h2>
							<img src="images/underline-style-2.png" />
							<p>New product releases and expert tips and tricks added weekly</p>
						</div>
			            <div className="row">
			                <div className="col-md-4">
			                	<Link to="/" className="blog-link">
			                		<div className="inner-blog">
			                		<div className="blog-content1">
			                			<img src="images/c1.jpg" className="img-fluid" alt="lalas instagram" />
			                			<div className="blog-change"></div>
			                		</div>
			                		<div className="blog-content">
			                			<span>dec 02, 2020</span>
			                			<p className="up-text">Lorem Ipsum is simply dummy text printing and typesetting</p>
			                			<p className="down-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
			                		</div>
			                	</div>
			                	</Link>
			                </div>
			                <div className="col-md-4">
			                	<Link to="/" className="blog-link">
			                		<div className="inner-blog">
			                		<div className="blog-content1">
			                			<img src="images/c1.jpg" className="img-fluid" alt="lalas instagram" />
			                			<div className="blog-change"></div>
			                		</div>
			                		<div className="blog-content">
			                			<span>dec 02, 2020</span>
			                			<p className="up-text">Lorem Ipsum is simply dummy text printing and typesetting</p>
			                			<p className="down-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
			                		</div>
			                	</div>
			                	</Link>
			                </div>
			                <div className="col-md-4">
			                	<Link to="/" className="blog-link">
			                		<div className="inner-blog">
			                		<div className="blog-content1">
			                			<img src="images/c1.jpg" className="img-fluid" alt="lalas instagram" />
			                			<div className="blog-change"></div>
			                		</div>
			                		<div className="blog-content">
			                			<span>dec 02, 2020</span>
			                			<p className="up-text">Lorem Ipsum is simply dummy text printing and typesetting</p>
			                			<p className="down-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
			                		</div>
			                	</div>
			                	</Link>
			                </div>
			            </div>
			        </div>
			    </section>
			    <section className="lalas-map">
			       	<MapContainer  />
			    </section>
			</div>
			)
	}
}
export default Home;