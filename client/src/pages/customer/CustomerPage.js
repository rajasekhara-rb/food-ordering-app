import React from "react";
import CustomerSideBar from "./CustomerSideBar";
import { Outlet } from "react-router-dom";

const CustomerPage = () => {

    return (
        <>
            <div className="flex w-100 h-80vh">
                <div className="w-1/5 relative"
                // style={{ position: "absolute" }}
                >
                    <CustomerSideBar />
                </div>
                <div className="w-4/5 mx-2 overflow-y-scroll abolute"
                // style={{ overflowY: "scroll", position: "relative" }}
                >
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default CustomerPage;