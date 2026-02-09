import {Link} from "react-router-dom";

import { useEffect, useState } from "react";
import logo from "../assets/images/smp-logo.png";
import Button from "../components/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
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
                <li><Link to="about-us">About Us <MdKeyboardArrowDown /></Link>
                <ul className="smp-sub-menu-list">
                  <li><Link to="/awards">Awards</Link></li>
                  <li><Link to="/reviews">Our Review</Link></li>
                  <li><Link to="/company-values">Company Value</Link></li>
                  <li><Link to="/community-impact">Community Impact</Link></li>
                  <li><Link to="/careers">Career</Link></li>
                </ul>
                </li>
                <li><Link>Services <MdKeyboardArrowDown /></Link>
                <ul className="smp-sub-menu-list">
                  <li><Link to="/google-ads">Google Ads</Link></li>
                  <li><Link to="/organic-marketing">Organic Marketing</Link></li>
                  <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                  <li><Link to="/web-designing">Web Designing</Link></li>
                  <li><Link to="/content-marketing">Content Marketing</Link></li>
                  <li><Link to="/crm">CRM</Link></li>
                  <li><Link to="/marketing-360">360 Marketing</Link></li>
                  <li><Link to="/sales-training">Sales Training</Link></li>
                </ul>
                </li>
                <li><Link to="#">Case Studies</Link></li>
                <li><Link>Resources <MdKeyboardArrowDown /></Link>
                <ul className="smp-sub-menu-list">
                  <li><Link to="/blog-details">Blog Details</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                </ul>
                </li>
                <li><Link>Contact Us <MdKeyboardArrowDown /></Link>
                <ul className="smp-sub-menu-list">
                  <li><Link to="/tanzania">Tanzania</Link></li>
                  <li><Link to="/kenya">Kenya</Link></li>
                </ul>
                </li>
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
