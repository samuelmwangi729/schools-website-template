import React, { Component } from 'react'
import '../Styles/navigation.css'
import {BiMenu} from 'react-icons/bi'
import Logo from '../assets/logo.png'
class NavigationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             isMenuOpen:0,
        }
        this.toggleMenus = this.toggleMenus.bind(this)
    }
    toggleMenus = () =>{
        if(this.state.isMenuOpen===0){
            this.setState({
                isMenuOpen:1
            })
        }else{
            this.setState({
                isMenuOpen:0
            })
        }
        console.log(this.state.isMenuOpen)
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-brand">
                       <img src={Logo} alt="" height={70+"px"} />
                       <h2>Utumishi Girls Academy</h2>
                    </div>
                    <div className={this.state.isMenuOpen?"navs":"navsactive"}>
                        <ul className="navbarmenus">
                            <li className="navitem">
                                <a href="#" className="navlink">
                                    Home
                                </a>
                            </li>
                            <li className="navitem">
                                <a href="#" className="navlink">
                                    About Us
                                </a>
                            </li>
                            <li className="navitem">
                                <a href="#" className="navlink">
                                    Students
                                </a>
                            </li>
                            <li className="navitem">
                                <a href="#" className="navlink">
                                    Gallery
                                </a>
                            </li>
                            <li className="navitem">
                                <a href="#" className="navlink">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu">
                        <span>
                            <BiMenu onClick={this.toggleMenus}/>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}

export default NavigationBar
