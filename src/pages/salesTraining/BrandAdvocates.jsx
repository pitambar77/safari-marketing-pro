import { useState } from "react";
import {
  FaUser,
  FaBullseye,
  FaUsers,
  FaChartLine,
  FaCreditCard,
  FaBullhorn
} from "react-icons/fa";

import "./BrandAdvocates.css";

export default function BrandAdvocates() {
  const [active, setActive] = useState("stranger");

  return (
    <div className="brand-advocates">

      <div className="steps-with-desc">

        {/* STEPS */}
        <div className="steps">

          <div
            className={`step ${active === "stranger" ? "active" : ""}`}
            onMouseEnter={() => setActive("stranger")}
          >
            <FaUser />
            <span>Stranger</span>
          </div>

          <span className="arrow">»»</span>

          <div
            className={`step ${active === "target" ? "active" : ""}`}
            onMouseEnter={() => setActive("target")}
          >
            <FaBullseye />
            <span>Target</span>
          </div>

          <span className="arrow">»»</span>

          <div
            className={`step ${active === "visitor" ? "active" : ""}`}
            onMouseEnter={() => setActive("visitor")}
          >
            <FaUsers />
            <span>Visitor</span>
          </div>

          <span className="arrow">»»</span>

          <div
            className={`step ${active === "lead" ? "active" : ""}`}
            onMouseEnter={() => setActive("lead")}
          >
            <FaChartLine />
            <span>Lead</span>
          </div>

          <span className="arrow">»»</span>

          <div
            className={`step ${active === "customer" ? "active" : ""}`}
            onMouseEnter={() => setActive("customer")}
          >
            <FaCreditCard />
            <span>Customer</span>
          </div>

          <span className="arrow">»»</span>

          <div
            className={`step ${active === "promoter" ? "active" : ""}`}
            onMouseEnter={() => setActive("promoter")}
          >
            <FaBullhorn />
            <span>Promoter</span>
          </div>

        </div>

        {/* CENTER DESCRIPTION */}
        <div className="center-desc active">

          {active === "stranger" && (
            <div className="desc">
            <div className="curve-icon">
              <FaUser />
              </div>
              <p>
                Strangers The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          {active === "target" && (
            <div className="desc">
            <div className="curve-icon">
              <FaBullseye />
              </div>
              <p>
                Target The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          {active === "visitor" && (
            <div className="desc">
            <div className="curve-icon">
              <FaUsers />
              </div>
              <p>
                Visitors The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          {active === "lead" && (
            <div className="desc">
            <div className="curve-icon">
              <FaChartLine />
              </div>
              <p>
                Leads The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          {active === "customer" && (
            <div className="desc">
            <div className="curve-icon">
              <FaCreditCard />
              </div>
              <p>
                Customers The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          {active === "promoter" && (
            <div className="desc">
            <div className="curve-icon">
              <FaBullhorn />
              </div>
              <p>
                Promoters The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
