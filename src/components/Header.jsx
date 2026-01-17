import {Link} from "react-router-dom";

import { useEffect, useState } from "react";
import logo from "../assets/images/smp-logo.png";
import Button from "../components/Button";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_section ${isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="row header_smp align-items-center">
          <div className="col-md-2">
            <div className="smp_header_logo">
              <Link to="/">
                <img src={logo}  alt="Safari Marketing Pro" title="Safari Marketing Pro" className="w-100"/>
              </Link>
            </div>
          </div>

          <div className="col-md-8">
            <nav className="smp_nav_menu">
              <ul className="nav_menu_list">
                <li><Link to="/social-media-marketing">About Us</Link></li>
                <li><Link to="/web-designing">Services</Link></li>
                <li><Link to="#">Case Studies</Link></li>
                <li><Link to="#">Resources</Link></li>
                <li><Link to="#">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-md-2 text-end">
            <div className="smp_header_btn">
              <Button text="Get A Proposal" link="./" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
