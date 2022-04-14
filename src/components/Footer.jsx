import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="container footer-content">
            <div className="logo_footer">
                <img src="/images/logo-footer.svg" alt="logo" />
            </div>

            <div className="footer-menu">
                <div className="links">
                    <p>Features</p>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div className="links">
                    <p>Resources</p>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="links">
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <ol>
                <li><img src="/images/icon-twitter.svg" alt="twitter" /></li>
                <li><img src="/images/icon-facebook.svg" alt="facebook" /></li>
                <li><img src="/images/icon-instagram.svg" alt="instagram" /></li>
                <li><img src="/images/icon-pinterest.svg" alt="pinterest" /></li>
            </ol>
        </div>
    </footer>
  )
}