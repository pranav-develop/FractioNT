import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_TYPES } from "../utils/RouteTypes";

function FactionalizeMinted() {
    return (
        <section>
            <div className="container py-5">
                <div className="w-50 m-auto">
                    <div className="section-head fs-1 fw-bold ">Fractionalize Minted NFT</div>
                    <div className="section-content pt-4">
                        <div className="fs-7 pb-5">
                            <span className="fw-bold ">
                                Already have an Minted NFT.{" "}
                                <Link to={ROUTE_TYPES.FRAC_MINTED_ROUTE}>Click here to Fractionlize minted NFT. </Link>
                            </span>
                        </div>
                        <div className="fs-7">
                            <span className="color-red pe-1 fw-bolder">*</span>
                            <span className="color-light ls-1">Fields are required</span>
                        </div>
                        <div className="pt-4">
                            <div className="fw-bold ls-1 fs-5 pb-2">
                                Token Uri <span className="color-red">*</span>
                            </div>
                            <div>
                                <TextField className="form-control rounded-3" label="Url of Token" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="fw-bold ls-1 fs-5 pb-2">Supply</div>
                            <p className="color-light">The number of items that can be minted. No gas cost to you!</p>
                            <div>
                                <TextField
                                    className="form-control rounded-3"
                                    type={"number"}
                                    label="No of Items"
                                    defaultValue={1}
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="fw-bold ls-1 fs-5 pb-2">
                                Owner Address <span className="color-red">*</span>
                            </div>
                            <div>
                                <TextField className="form-control rounded-3" label="Address of Owner" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="fw-bold ls-1 fs-5 pb-2">
                                Contract Address <span className="color-red">*</span>
                            </div>
                            <div>
                                <TextField className="form-control rounded-3" label="Address of Contact" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="image-preview-box"></div>
                        </div>
                        <div className="pt-4">
                            <Button variant="outlined" className="me-4">
                                Preview
                            </Button>
                            <Button variant="contained">Transfer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FactionalizeMinted;
