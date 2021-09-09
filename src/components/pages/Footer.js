import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
        <div className="container-fluid bg-dark text-white">
            <div className="row">
                <div className="col-12 col-md-6 order-1 p-5">
                    123 apple road<br/>
                    AZ, United States<br/>
                    99999-4444<br/>
                    <div className="row">
                        <div className="col-8 pt-5 d-flex justify-content-between">
                            <a class="btn btn-social-icon btn-twitter">
                                <span class="fa fa-twitter"></span>
                            </a> 
                            <a class="btn btn-social-icon btn-facebook">
                                <span class="fa fa-facebook"></span>
                            </a>
                            <a class="btn btn-social-icon btn-tumblr">
                                <span class="fa fa-tumblr"></span>
                            </a>
                            <a class="btn btn-social-icon btn-google">
                                <span class="fa fa-google"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-5">
                    <h5>Links</h5>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <ul className="text-white">
                                <li><Link className="footer-link" to="/">Home</Link></li>
                                <li><Link className="footer-link" to="/about">About</Link></li>
                                <li><Link className="footer-link" to="/search">Search</Link></li>
                                <li><Link className="footer-link" to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="text-white">
                                <li><Link className="footer-link" to="/account/login">Sign in</Link></li>
                                <li><Link className="footer-link" to="/account/register">Sign up</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </footer>
    );
}
export default Footer;