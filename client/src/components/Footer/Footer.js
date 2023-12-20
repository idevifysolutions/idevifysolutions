import React from 'react'
import idevifyLogo from "./../../assests/idevifysolutions.png"
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='container-fluid p-2 my-3 bg-white'>
            <div className='row'>
                <div className='col col-md-6 text-start text-primary'>
                    <div>
                        <img src={idevifyLogo} alt='idevifylogo' className='idevifylogo  mx-5' />
                        
                    </div>

                </div>

                <div className='col col-md-3 text-start text-primary'>
                    <h4>Quick Links</h4>
                    <div className='unorderlist mx-1 my-3'>
                        <li className='text-primary'><Link to="" className='list'>Home</Link></li>
                        <li className='text-primary'><Link to="" className='list'>Sevices</Link></li>
                        <li className='text-primary'><Link to="" className='list'>Career</Link></li>
                        <li className='text-primary'><Link to="" className='list'>About</Link></li>
                        <li className='text-primary'><Link to="" className='list'>Contact</Link></li>
                    </div>
                    <h5>Follow Us On</h5>
                    <div className='my-3'>

                        <Link to={"https://www.linkedin.com/company/devtech-solutions-llp/"}><i class="fa-brands fa-linkedin text-primary fs-3 me-2 socialmediaicons" ></i></Link>
                        <Link to={"https://www.instagram.com/idevify_solutions/"}> <i class="fa-brands fa-square-instagram text-primary fs-3 me-2 socialmediaicons"></i></Link>
                        <Link to={""}> <i class="fa-brands fa-square-facebook text-primary fs-3 me-2 socialmediaicons"></i></Link>

                    </div>

                </div>

                <div className='col col-md-3 text-start text-primary '>
                    <h4>Subscribe to Our Newsletter</h4>
                    <div>
                        <label><b className='text-primary'>Email *</b></label><br />
                        <input type='email' className='p-1 footerEmailInput my-2' />
                        <button className='btn btn-primary p-2 px-4 my-3'>Submit</button><br />
                        <label><b className='text-primary'>Address *</b></label><br />
                        <p className='text-primary'>C BUILDING SAI RES BESA VELAHARI Nagpur,  440037<p className='text-primary my-2'>info@devtechsolutionsllp.in</p>
                            <p className='text-primary'>+91 8669307988</p></p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer