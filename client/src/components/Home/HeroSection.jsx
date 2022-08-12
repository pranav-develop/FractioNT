import React from "react";
import NFTCards from "./NFTCards";

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="container h-100">
                <div className="d-flex h-100 justify-content-between align-items-center">
                    <div className="">
                        <div className="fs-1 pb-4 fw-bold">
                            Discover, Collect and Sell <br /> extraordinary NFTs
                        </div>
                        <div className="color-light pb-3 fs-5">World's first Factionalized NFT platform</div>
                        <div className="d-flex">
                            <button className="btn btn-primary py-2 fs-5 px-4 rounded-5 me-4">Explore</button>
                            <button className="btn btn-outline-primary py-2 fs-5 px-4 rounded-5">Create</button>
                        </div>
                    </div>
                    <div className="">
                        <NFTCards />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
