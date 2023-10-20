import React from "react";
import { Bars, ColorRing } from "react-loader-spinner";

const Spinner1 = () => {
    return (
        <>
            <div style={{ margin: "auto", width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>

        </>
    )
}

const Spinner2 = () => {
    return (
        <>
            <div style={{ margin: "auto", width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>

        </>
    )
}

const ButtonSpinner = () => {
    return (
        <>
            <div
            // style={{ margin: "auto", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>

        </>
    )
}

export {
    Spinner1,
    Spinner2,
    ButtonSpinner
}