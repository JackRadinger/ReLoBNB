import React from 'react'
import './Footer.css';

function Footer () {
    return(
        <>
            <div className="footer-container">
                <div className="quote">"Channel your dreams"</div>
                <div className="copyright">© 2021 ReLoBNB</div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/jack-radinger-6b5349174/" target="_blank" rel="noreferrer">
                        <div className="connect">
                             Connect with the creator, Jack Radinger
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
