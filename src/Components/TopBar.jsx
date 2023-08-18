import React, { Component } from 'react'
import {TfiYoutube,TfiFacebook,TfiTwitter,TfiLinkedin,TfiInstagram} from 'react-icons/tfi'
import {BiLogoTiktok} from 'react-icons/bi'
class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <>
                <div className="topbar md:flex w-full md:px-10  md:justify-between items-center grid grid-cols-1 transition-all duration-300">
                    <div className='topItems order-1 w-full'>
                        <ul className='flex md:justify-start justify-center items-center listItems'>
                            <li className=''>
                                <a href="#" className=''>
                                    <TfiYoutube/>
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    <TfiFacebook/>
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    <TfiTwitter/>
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    <TfiLinkedin/>
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    <TfiInstagram/>
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    <BiLogoTiktok/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[100%] order-2'>
                        <ul className='flex items-center linkItems justify-center'>
                            <li className=''>
                                <a href="#" className=''>
                                    Students
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    Staff
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    Alumni
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    Downloads
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default TopBar
