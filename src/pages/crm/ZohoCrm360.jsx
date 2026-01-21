import "./ZohoCrm360.css";
import CenterLogo from "../../assets/images/smp-logo.png";

const ZohoCrm360 = () => {
  return (
    <div className="crm360-container">
      {/* ===== SVG BACKGROUND ===== */}
      <svg viewBox="0 0 900 600" className="crm360-svg">
        <defs>
          <linearGradient id="sectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6d4ff" />
            <stop offset="60%" stopColor="#e8f0ff" />
            <stop offset="100%" stopColor="#fff4d6" />
          </linearGradient>
        </defs>

        {/* Rotating sector */}
        <g className="rotate-sector">
          <path
            d="
              M450 300
              L760 300
              A310 310 0 0 1 520 560
              Z
            "
            fill="url(#sectorGradient)"
          />
        </g>

        {/* Rings */}
        <g className="rotate-slow">
          <circle cx="450" cy="300" r="300" fill="none" stroke="#0057ff" strokeWidth="2" />
        </g>

        <g className="rotate-medium">
          <circle cx="450" cy="300" r="220" fill="none" stroke="#0057ff" strokeWidth="2" />
        </g>

        <g className="rotate-fast">
          <circle cx="450" cy="300" r="140" fill="none" stroke="#0057ff" strokeWidth="2" />
        </g>

        {/* Center */}
        <circle cx="450" cy="300" r="65" fill="#fff" />
        <image href={CenterLogo} x="405" y="255" width="90" height="90" />
      </svg>

      {/* ===== LABELS (HTML – NORMAL TEXT) ===== */}
      <div className="labels-layer">
        <a className="label" href="#" style={{ top: "220px", left: "50%" }}>Canvas Design Studio</a>
        <a className="label" href="#" style={{ top: "40%", right: "25%" }}>Module 360</a>
        <a className="label" href="#" style={{ top: "350px", right: "12%" }}>Generative AI</a>
        <a className="label" href="#" style={{ bottom: "25%", right: "20%" }}>Advanced Analytics</a>
        <a className="label" href="#" style={{ bottom: "22%", left: "40%" }}>Predictive AI & BI</a>
        <a className="label" href="#" style={{ top: "445px", left: "23%" }}>Kiosk Studio</a>
        <a className="label" href="#" style={{ top: "320px", left: "320px" }}>Journey Orchestration</a>
        <a className="label small" href="#" style={{ top: "265px", left: "45%" }}>CPQ</a>
      </div>
    </div>
  );
};

export default ZohoCrm360;
