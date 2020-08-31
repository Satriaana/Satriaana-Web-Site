import React, { Component } from "react";
import "./footer.css";
//import { CardFooter, Container } from "reactstrap";
//import styled from "styled-components";
//import LinearGradient from 'react-native-linear-gradient'

class Footer extends Component {
	render() {
		return (
			<div className="main-footer" style={{fontFamily: 'Poppins, sans-serif'}}>
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-12">
							{/*Colum 1 */}
							<div className="col-md-3 col-sm-6">
								{/* satriaana logo*/}
								<div className="logo">
									<img
										src="satriaana.png"
										alt="logo"
										width="450"
										height="Auto"
									></img>
									<div className="text">
										<h1>We Aim</h1>
										<h1>to Protect</h1>
										<h1>Your Privacy</h1>
									</div>
								</div>
							</div>

							<hr class="clearfix w-100 d-md-none pb-3"></hr>

							{/*Colum 2 */}
							<div className="col-md-3 col-sm-6">
								<ul id="footercolum2" className="list-unstyled">
									<li>
										<a href="/" className="link">
											Home
										</a>
									</li>
									<li>
										<a href="/" className="link">
											Blog
										</a>
									</li>
									<li>
										<a href="/" className="link">
											Forum
										</a>
									</li>
									<li>
										<a href="/" className="link">
											About
										</a>
									</li>
									<li>
										<a href="/" className="link">
											Contact
										</a>
									</li>
								</ul>

								<div class="col-md-7 py-5">
									<div id="icon" class="mb-5 flex-center">
										{/*github*/}
										<a class="ins-ic" href="https://github.com/Satriaana">
											<i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>
										{/*Linkedin */}
										<a class="li-ic" href="https://www.linkedin.com/in/satriaana-open-script-b9543a1b3">
											<i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>
										{/* Facebook */}
										<a class="fb-ic" href="https://www.facebook.com/Satriaana-108832284248709">
											<i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>
										{/* Twitter */}
										<a class="tw-ic" href="https://twitter.com/Satriaana2">
											<i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>

										{/*Instagram*/}
										<a class="ins-ic" href="/">
											<i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>

										{/*Reddit*/}
										<a class="ins-ic" href="https://www.reddit.com/user/Satiaana">
											<i class="fab fa-reddit fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>

										{/*Medium*/}
										<a class="ins-ic" href="https://medium.com/@openscriptprivacy">
											<i class="fab fa-medium fa-lg white-text mr-md-5 mr-3 fa-2x">
												{" "}
											</i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* footer bittom */}
					<div className="footer-copyright">
						<p className="text-xs-ceter">
							&copy;{new Date().getFullYear()} Satriaana. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
