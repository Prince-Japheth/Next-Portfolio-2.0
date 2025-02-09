import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" legacyBehavior>
            <a className="logo">
              <img src="./assets/images/logo.svg" alt="Logo" />
            </a>
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <p className="copyright">
            © All rights reserved by <span>Japheth</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
