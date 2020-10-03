import React, { Component } from "react";
import "./footer.css";
import FooterLogo from "../../assets/sat-white.png";

class Footer extends Component {
	render() {
		return (
			//uses MDBootstrap in some parts
			<footer style={{background: 'linear-gradient(90deg, #df4722, #d90b74)', fontFamily: 'Kumbh Sans'}}>
        	<div class="footer-top">
		        <div class="container">
		        	<div class="row">
		        		<div class="col-md-2 footer-about">
		        			<img alt src={FooterLogo}/>	
	                    </div>
						<div class="col-md-4 footer-about" style={{marginBottom: '30px'}}>
						<p style={{color: 'rgb(255,255,255)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
		        		<div class="col-md-4 footer-contact" style={{marginBottom: '30px'}}>
		        			<h3 style={{color: 'rgb(255,255,255)'}}>Contact</h3>
		                	<p><i class="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet</p>
		                	<p><i class="fas fa-phone"></i> Phone: 011 123 45 67</p>
		                	<p><i class="fas fa-envelope"></i> Email: <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a></p>
		                	<p><i class="fab fa-firefox"></i> Mozilla Community: Satriaana</p>
	                    </div>
	                    <div class="col-md-2 footer-links">
	                    	<div class="row">
	                    		<div class="col">
	                    			<h3 style={{color: 'rgb(255,255,255)'}}>Site Map</h3>
	                    		</div>
	                    	</div>
	                    	<div class="row footer-items">
	                    		<div class="col-md-12">
	                    			<p><a href="#">Home</a></p>
	                    			<p><a href="#">Blog</a></p>
	                    			<p><a href="#">Forum</a></p>
									<p><a href="#">About</a></p>
	                    			<p><a href="#">Contact</a></p>
	                    		</div>
	                    	</div>
	                    </div>
		            </div>
		        </div>
	        </div>
			<div class="container">
			<hr style={{marginBottom: '25px'}}/>
			<div class="row">
				<div class="col-md-6 footer-copyright">
					<p style={{fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>&copy; 2020 <b>Satriaana</b>. All Rights Reserved.</p>
				</div>
				<div class="col-md-6 footer-bottom">
	           		<div class="footer-social" style={{float: 'right'}}>
	                    <a href="https://www.facebook.com/Satriaana-108832284248709"><i class="fab fa-facebook-f"></i></a> 
						<a href="https://twitter.com/Satriaana2"><i class="fab fa-twitter"></i></a> 
						<a href="https://www.linkedin.com/in/satriaana-open-script-b9543a1b3"><i class="fab fa-linkedin"></i></a>
						<a href="https://www.instagram.com/satriaanascript/?hl=en"><i class="fab fa-instagram"></i></a>
						<a href="https://medium.com/@openscriptprivacy"><i class="fab fa-medium"></i></a>
						<a href="https://www.reddit.com/user/Satiaana"><i class="fab fa-reddit"></i></a>
						<a href="https://github.com/Satriaana"><i class="fab fa-github"></i></a>
	                </div>
					</div>
	        	</div>
	        </div>
        </footer>
		);
	}
}

export default Footer;
