import { useState } from "react";
import "./FunnelCompare.css";

const FunnelCompare = () => {
    const [position, setPosition] = useState(50);

    return (
        <div className="funnel-container">
            <div className="funnel-wrapper">

                {/* BASE IMAGE (height reference only) */}
                <img  src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/funnel-slider-module/funnel-after.webp"   alt=""  className="base-image" />

                {/* LEFT IMAGE */}
                <div className="image-layer left"  style={{ width: `${position}%` }}>
                    <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/funnel-slider-module/funnel-before.webp"  alt="Left Funnel" />
                </div>

                {/* RIGHT IMAGE */}
                <div  className="image-layer right"  style={{ width: `${100 - position}%` }}>
                    <img  src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/funnel-slider-module/funnel-after.webp"   alt="Right Funnel" />
                </div>

                {/* RANGE SLIDER */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="funnel-slider"
                />

                {/* SVG HANDLE */}
                <div className="divider"  style={{ left: `${position}%` }}>
                    <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/funnel-slider-module/slider-handle.svg"  alt="Handle" />
                </div>

            </div>
        </div>
    );
};

export default FunnelCompare;
