import React from "react";

function NFTCards() {
    return (
        <div className="nft-card overflow-hidden box-hover-shadow">
            <div
                className="nft-card-image bg-image-box"
                style={{
                    backgroundImage:
                        "url(https://lh3.googleusercontent.com/5HIrzWoRZZ4ZF5hS3eOYh9EBJ5mJHj8ig0yLN2PpulrcdyCKmns19TeU60AE4arIqqgBCRhprxbw8gBCi8IhGHav_kgKFmN4cPaX=s550)",
                }}
            ></div>
            <div className="nft-card-desc">
                <div className="d-flex align-items-center h-100 w-100 px-4">
                    <div
                        className="rounded-circle user-img overflow-hidden me-4 bg-image-box"
                        style={{
                            backgroundImage:
                                "url(https://lh3.googleusercontent.com/Czf-5XMCxAh6-PRA_Me1UtT5_Qv8X4zKQuVoATKXC54FkZYFnhgZcMFJgzMHZpd3POC792Wbe50tqXzbwzTemcankbE1sqKBKB1O=s80)",
                        }}
                    ></div>
                    <div>
                        <div className="fw-bold">MIMI Basic #9</div>
                        <div className="color-primary">Otograf</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTCards;
