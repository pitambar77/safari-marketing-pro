
import "./TabContentAdd.css";
import Button from "../../components/Button";
import { useState } from "react";

const TabContentAdd = () => {
    const [activeTab, setActiveTab] = useState("tabone");

    return (
        <div className="row tab_details_con">
            {/* LEFT SIDE TABS */}
            <div className="col-md-4">
                <div className="tab-list">
                    <button
                        className={activeTab === "tabone" ? "active" : ""}
                        onClick={() => setActiveTab("tabone")}
                    >
                        Google Search Advertising
                    </button>

                    <button
                        className={activeTab === "tabtwo" ? "active" : ""}
                        onClick={() => setActiveTab("tabtwo")}
                    >
                        Google Display Network
                    </button>

                    <button
                        className={activeTab === "tabthree" ? "active" : ""}
                        onClick={() => setActiveTab("tabthree")}
                    >
                        Youtube Advertising
                    </button>

                    <button
                        className={activeTab === "tabfour" ? "active" : ""}
                        onClick={() => setActiveTab("tabfour")}
                    >
                        Google Remarketing
                    </button>

                    <button
                        className={activeTab === "tabfive" ? "active" : ""}
                        onClick={() => setActiveTab("tabfive")}
                    >
                       Gmail Advertising
                    </button>

                    <button
                        className={activeTab === "tabsix" ? "active" : ""}
                        onClick={() => setActiveTab("tabsix")}
                    >
                      Google Shopping
                    </button>

                </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-md-8">
                {activeTab === "tabone" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Google Search Advertising</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Google Search Advertising" title="Google Search Advertising" className="w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "tabtwo" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Google Display Network</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Google Display Network" title="Google Display Network" className="w-100"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                  {activeTab === "tabthree" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Youtube Advertising</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Youtube Advertising" title="Youtube Advertising" className="w-100"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                   {activeTab === "tabfour" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Google Remarketing</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Google Remarketing" title="Google Remarketing" className="w-100"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                     {activeTab === "tabfive" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Gmail Advertising</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Gmail Advertising" title="Gmail Advertising" className="w-100"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                     {activeTab === "tabsix" && (
                    <div className="tab_content">
                        <div className="row conte_details">
                            <div className="col-md-6">
                                <div className="conte_details-para">
                                    <h3>Google Shopping</h3>
                                    <p>We run Google Ads search campaigns targeting high‑value keywords your customers use when they’re ready to buy. Our Google Ads services focus on precise keyword bidding, ad copy testing, and conversion‑driven landing page design to maximise lead quality.</p>
                                    <div className="datata_btn">
                                        <Button  text="Get Proposal" link="./"  target="_self" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="conte_details-pico">
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Google-Search-Advertising.webp" alt="Google Shopping" title="Google Shopping" className="w-100"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default TabContentAdd;

