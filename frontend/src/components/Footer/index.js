import React from 'react';
import github from '../../assets/GitHub-Mark.png'
import linkedIn from '../../assets/linkedin.png'
import angel from '../../assets/angellist-icon.png'

const Footer = () => {

    return (
        <div className='footer-container'>
                <a href='https://github.com/robert-debug'>
                    <img className='github-icon' src={github}  />
                </a>
                <a href='https://www.linkedin.com/in/robert-george-b5568b28/'>
                    <img className='linkedin-icon' src={linkedIn}  />
                </a>
                <a href='https://angel.co/u/robert-george-11'>
                    <img className='angel-icon' src={angel}  />
                </a>
        </div>
            
        
    )
}

export default Footer;