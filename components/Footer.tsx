import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="./footer/logo.svg" width="2%"/>
        <h3>Ignition Hacks</h3>
      </div>

      <div className="icons">
       <a href="https://www.instagram.com/ignitionhacks" target="_blank">
      <img src="/footer/ig.svg" width="2%" alt="Instagram"/>
      </a>
  
      <a href="https://www.linkedin.com/company/ignition-hacks/" target="_blank">
        <img src="/footer/linkedin.svg" width="2%" alt="LinkedIn"/>
      </a>
  
      <a href="mailto:ignitionhacks@gmail.com">
        <img src="/footer/mail.svg" width="2%" alt="Email"/>
      </a>
      </div>

      <div className="copyright-text">
            <p>© 2025 Ignition Hacks. All Rights Reserved</p>
        </div>

    </footer>
  );
}