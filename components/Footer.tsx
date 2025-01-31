import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="./footer/logo.svg" width="2%"/>
        <h3>Ignition Hacks</h3>
      </div>

      <div className="icons">'
        <img src="./footer/ig.svg" width="2%"/>
        <img src="./footer/linkedin.svg" width="2%"/>
        <img src="./footer/mail.svg" width="2%"/>
      </div>
      <div className="copyright-text">
        <p>© 2025 Ignition Hacks. All Rights Reserved</p>
      </div>
    </footer>
  );
}
