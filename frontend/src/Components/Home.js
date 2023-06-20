import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Home.css"

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png'

const Home = () => {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
        <main>
            <div className="container-fluid h-100    -container">
                <div className="row    -bar">
                    <div className="col-6 d-flex align-items-center">
                        <img className="    -logo-img" src={logo_black_src} alt="Logo"></img>
                        {/* <Link to="/register" className="p-2    -yellow-link">Register</Link> */}
                    </div>
                    
                    <div className="col-6 d-flex flex-row align-items-center justify-content-end">
                        <Link to="/login" className="    -white-link">Login</Link>
                        <Link to="/register" className="    -yellow-link">Register</Link>
                    </div>
                </div>

                <div className="   -main-container">
                
                    <div className="row    -main">
                        <div className="col-8   -main-left">
                            <div className="    -main-left-header-container">
                                <h1 className="    -main-left-header">Hello.</h1>
                                <h1 className="    -main-left-header">Welcome to <strong className="    -main-left-header-strong">Everydraw</strong>.</h1>
                                {/* <h1 className="    -main-left-header"><strong>Everydraw.</strong></h1> */}
                            </div>
                            
                            <div className="    -main-left-p-container">
                                <p className="    -main-left-p">Everyone wins.</p>
                                <p className="    -main-left-p">Prize for only one.</p>
                            </div>
                        </div>

                        <div className="col-4    -main-right">
                            <img className="    -main-right-trophy-img" src={trophy_src} alt="Trophy"></img>
                        </div>
                    </div>

                    <div className="row    -quote-container">
                        <div className="col-12">
                            <figure className="text-center">
                                <blockquote class="blockquote pb-3">
                                    <p className="    -quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </blockquote>
                                <figcaption class="blockquote-footer    -quote-footer">
                                    <span className="    -quote-footer">Rahul, 2022</span>
                                </figcaption>
                            </figure>
                        </div>

                    </div>
                    
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center     -secondary-container">
                    <img className="    -secondary-prize-img" src={prize_src} alt="Prize"></img>
                    <div className="d-flex flex-column     -secondary-text">
                        <p className="    -main-left-p">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        </p>
                        <p className="    -main-left-p">
                        totam rem aperiam, eaque ipsa quae ab illo inventore.
                        </p>
                        <p className="    -main-left-p">
                        Nemo enim ipsam voluptatem quia voluptas,
                        </p>
                        <p className="    -main-left-p">
                        sed quia consequuntur magni dolores eos qui ratione
                        </p>
                    </div>
                </div>

                

                <div className="    -footer">
                    <div className="row    -footer-above">
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">About</Link></div>
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">Legal Terms</Link></div>
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">Privacy Policy</Link></div>
                    </div>

                    <div className="d-flex flex-column align-items-center    -footer-below">
                        <img className="d-block    -logo-img" src={logo_white_src} alt="Logo"></img>
                        <p className="    -footer-copyright">Copyright EVERYDRAW, Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default Home;
