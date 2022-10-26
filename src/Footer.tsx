import React from "react";
import { css } from "@emotion/css"

const Footer = () => {
    return (
        <>
            <div className={css`
                background-color: #323232;
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 7%;
            `}>
                &copy; D2 Takahashi Hayate
            </div>
        </>
    )
}

export default Footer;