import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="social-icons">
                <a href="#" className="social-icon" title="Facebook"><FaFacebook /></a>
                <a href="#" className="social-icon" title="Instagram"><FaInstagram /></a>
                <a href="#" className="social-icon" title="TikTok"><FaTiktok /></a>
            </div>
        </div>
    )
}

export default Footer
