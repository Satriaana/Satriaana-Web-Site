import React, { Component } from "react";
import "./footer.css";
import FooterLogo from "../../assets/sat-white.png";

class Footer extends Component {
	render() {
		return (
			//uses MDBootstrap in some parts
			<footer style={{background: 'linear-gradient(90deg, #df4722, #d90b74)', fontFamily: 'Kumbh Sans'}}>

        	<div className="footer-top">
		        <div className="container">
		        	<div className="row">
		        		<div className="col-md-2 footer-about">
		        			<img alt="footer" src={FooterLogo}/>	

	                    </div>
						<div className="col-md-4 footer-about" style={{marginBottom: '30px'}}>
						<p style={{color: 'rgb(255,255,255)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
		        		<div className="col-md-4 footer-contact" style={{marginBottom: '30px'}}>
		        			<h3 style={{color: 'rgb(255,255,255)'}}>Contact</h3>
		                	<p><i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet</p>
		                	<p><i className="fas fa-phone"></i> Phone: 011 123 45 67</p>
		                	<p><i className="fas fa-envelope"></i> Email: <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a></p>
		                	<p><i className="fab fa-firefox"></i> Mozilla Community: Satriaana</p>
	                    </div>
	                    <div className="col-md-2 footer-links">
	                    	<div className="row">
	                    		<div className="col">
	                    			<h3 style={{color: 'rgb(255,255,255)'}}>Site Map</h3>
	                    		</div>
	                    	</div>
	                    	<div className="row footer-items">
	                    		<div className="col-md-12">
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
			<div className="container">
			<hr style={{marginBottom: '25px'}}/>

			<div className="row">
				<div className="col-md-6 footer-copyright">
					<p id="copyright" style={{fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>&copy; 2020 <b>Satriaana</b>. All Rights Reserved.</p>

				</div>
				<div className="col-md-6 footer-bottom">
	           		<div className="footer-social" style={{float: 'right'}}>
	                    <a href="https://www.facebook.com/Satriaana-108832284248709"><i className="fab fa-facebook-f"></i></a> 
						<a href="https://twitter.com/Satriaana2"><i className="fab fa-twitter"></i></a> 
						<a href="https://www.linkedin.com/in/satriaana-open-script-b9543a1b3"><i className="fab fa-linkedin"></i></a>
						<a href="https://www.instagram.com/satriaanascript/?hl=en"><i className="fab fa-instagram"></i></a>
						<a href="https://medium.com/@openscriptprivacy"><i className="fab fa-medium"></i></a>
						<a href="https://www.reddit.com/user/Satiaana"><i className="fab fa-reddit"></i></a>
						<a href="https://github.com/Satriaana"><i className="fab fa-github"></i></a>
	                </div>
					</div>
	        	</div>
	        </div>
        </footer>
		);
	}
}

export default Footer;
