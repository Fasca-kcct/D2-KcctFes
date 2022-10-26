import React from "react";
import { css } from "@emotion/css"
import "./bodyStyle.css"

const Title = () => {
    return (
        <>
        <div className={css`
            position: relative;
            margin-top: 50px;
        `}>
            <div className={css`
            color: #ffffff;
            font-size: 24px;
            position: absolute;
            left: 25%;
            right: 25%;
            text-align: center;
            margin-top: 80px;
            -webkit-text-stroke: 1px #000;
            `}>
            <h2 className={css`
                font-size: 50px;
            `}>D2 クラス展示</h2>
            <h2 className={css`
                font-size:  50px;
            `}
            >射的</h2>
            </div>
            <img src="../kcct-image.jpg" alt="image" className={css`
                width: 100%;
            `} />
            
        </div>
        </>
    )
}

export default Title;