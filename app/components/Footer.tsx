import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </Link>
          <ul className="footer-menu"> 
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
