import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ROUTE_TYPES } from "../../utils/RouteTypes";

function Navbar() {
    return (
        <div className="navbar position-fixed w-100">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between w-100 py-3 h-100">
                    <div className="navbar-brand">
                        <h3 className="color-primary">My Logo</h3>
                        {/* <img src="" height={"50px"} /> */}
                    </div>
                    <div className="nav-options d-flex align-items-center">
                        <NavLink
                            activeClassName="active"
                            className="nav-link mx-4 ls-1 fs-6  color-black "
                            to={ROUTE_TYPES.HOME_ROUTE}
                        >
                            Explore
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-link mx-4 ls-1 fs-6  color-black"
                            to={ROUTE_TYPES.HOME_ROUTE}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="px-4 py-3 rounded-pill bg-primary text-decoration-none fw-bold color-white"
                            to={ROUTE_TYPES.HOME_ROUTE}
                        >
                            Connect Wallet
                        </NavLink>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Navbar;
