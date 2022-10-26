import React from "react";
import { css } from "@emotion/css"
import "./bodyStyle.css"

const Title = () => {
    return (
        <>
        <div className={css`
            position: relative;
            margin-top: 30px;
        `}>
            <div className={css`
            color: #000000;
            font-size: 24px;
            left: 25%;
            right: 25%;
            text-align: center;
            margin-top: 40px;
            `}>
            <h2 className={css`
                font-size: 40px;
            `}>クラス展示</h2>
            <h2 className={css`
                font-size:  40px;
            `}
            >射的</h2>
            </div>
            
        </div>
        </>
    )
}

export default Title;