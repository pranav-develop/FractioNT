import { Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_TYPES } from "../utils/RouteTypes";

function CreateNewMint() {
    return (
        <section>
            <div className="container py-5">
                <div className="w-50 m-auto">
                    <div>
                        <div className="section-head fs-1 fw-bold ">Create new Mint</div>
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
                                    Image, Video, Audio or 3D Model <span className="color-red">*</span>
                                </div>
                                <p className="color-light">All the file types are supported.</p>
                                <div className="image-preview-box"></div>
                            </div>
                            <div className="pt-4">
                                <div className="fw-bold ls-1 fs-5 pb-2">
                                    Name <span className="color-red">*</span>
                                </div>
                                {/* <p className="color-light">All the file types are supported.</p> */}
                                <div>
                                    <TextField className="form-control rounded-3" label="Item Name" />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="fw-bold ls-1 fs-5 pb-2">External Link</div>
                                <p className="color-light">
                                    We will include a link to this URL on this item's detail page, so that the buyers will be able
                                    to know more about it.
                                </p>
                                <div>
                                    <TextField className="form-control rounded-3" label="https://somesite/item/123" />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="fw-bold ls-1 fs-5 pb-2">Description</div>
                                <p className="color-light">This description will be included on the item's detail page.</p>
                                <div>
                                    <TextareaAutosize
                                        maxRows={3}
                                        minRows={3}
                                        className="form-control rounded-3"
                                        label="Please provide a detailed description of your item."
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="fw-bold ls-1 fs-5 pb-2">Collection</div>
                                <p className="color-light">This is the collection where your item will appear.</p>
                                <div>
                                    <div className="pb-2">
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="no"
                                            name="radio-buttons-group"
                                            row
                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className="pb-2">
                                        <Select fullWidth label="Select Collection">
                                            <MenuItem value={"fwe"}>Collection1</MenuItem>
                                            <MenuItem value={"fwe"}>Collection2</MenuItem>
                                            <MenuItem value={"fwe"}>Collection3</MenuItem>
                                        </Select>
                                    </div>
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
                                <div className="fw-bold ls-1 fs-5 pb-2">Blockchain</div>
                                {/* <p className="color-light">This is the collection where your item will appear.</p> */}
                                <div>
                                    <div className="pb-2">
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="no"
                                            name="radio-buttons-group"
                                            row
                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className="pb-2">
                                        <Select fullWidth defaultValue={"tezos"} label="Select Blockchain">
                                            <MenuItem value={"tezos"}>Tezos</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Button variant="contained">Create</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateNewMint;
