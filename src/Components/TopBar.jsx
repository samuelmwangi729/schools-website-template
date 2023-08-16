import React, { Component } from 'react'
import {TfiYoutube,TfiFacebook,TfiTwitter,TfiLinkedin,TfiInstagram} from 'react-icons/tfi'
import {BiLogoTiktok} from 'react-icons/bi'
import styles from '../Styles/topbar.styles.module.css'
class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <>
                <div className={styles.topbar}>
                    <div className={styles.socialMedia}>
                        <ul className={styles.socials}>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <TfiYoutube/>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <TfiFacebook/>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <TfiTwitter/>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <TfiLinkedin/>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <TfiInstagram/>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a href="#" className={styles.socialLink}>
                                    <BiLogoTiktok/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.topMenus}>
                        <ul className={styles.MenuLists}>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
                                    Students
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
                                    Staff
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
                                    Alumni
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
                                    Downloads
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
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
