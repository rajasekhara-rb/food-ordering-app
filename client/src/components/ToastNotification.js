import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = async (res) => {
    if (res.status && res.data) {
        const { status } = res;
        const { message } = res.data
        if (status >= 200 && status<299) {
            toast.success(message)
        } else if (status >= 400 && status <= 500) {
            toast.error(message)
        }
    } else if (res.response)
        toast.error(res.message)
    else {
        toast.warn(res)
    }
}

const ToastNotification = () => {

    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'>
                {/* <toast>{message}</toast> */}
            </ToastContainer>
        </>
    )
}

export {
    ToastNotification,
    notify
}