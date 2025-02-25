import React from "react";
import { useNavigate , NavLink } from "react-router-dom";
import "../../css/EmployeeHead.css";


function SupplyHeader(){

    const navigate = useNavigate();
    
        return (
            <div className="header-container">
    
                <NavLink to="/addsupply" exact activeClassName="active-link">
                <button className="header-button">
                    Add Supply
                </button>
                </NavLink>
    
                <NavLink to="/seedType" exact activeClassName="active-link">
                <button className="header-button" >
                    Seed Types
                </button>
                </NavLink>
                
                <NavLink to ="/allsupplies" exact activeClassName = "active-link">
                <button className="header-button" >
                    All Supplies
                </button>
                </NavLink>
            </div>
        );
}

export default SupplyHeader;