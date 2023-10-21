import React from "react";
// import CustomerSideBar from "./CustomerSideBar";
import { Outlet } from "react-router-dom";

const CustomerPage = () => {

    return (
        <>
            <div className="flex flex-col w-100 h-80vh">
                {/* <div className="w-5/5 relative"
                style={{ position: "absolute" }}
                >
                    <CustomerSideBar />
                </div> */}
                <div className="w-5/5 mx-2 overflow-y-scroll abolute"
                // style={{ overflowY: "scroll", position: "relative" }}
                >
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default CustomerPage;