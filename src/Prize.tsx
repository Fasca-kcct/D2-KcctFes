import React from "react";
import { css } from "@emotion/css"

const Prize = () => {
    return (
        <>
            <div className={css`
                text-align: center;
                margin-top: 40px;
            `}>
                <h2>Prizes</h2>
                <p>
                    0点~ うまい棒 <br />
                    20点~ あめ掴み取り <br />
                    45点~ チョコ菓子 <br />
                    65点~ ぬいぐるみ <br />
                </p>
                <p className={css`
                        background: linear-gradient(to right,#e60000,#f39800,#fff100,#009944,#0068b7,#1d2088,#920783);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-size: 100%;
                        font-weight: bold;
                        display: inline-block;
                `}>
                80点(理論値) ゲームソフト，ヘッドホン，イヤホン
                </p>
                <img src="../prizes.jpg" alt="prize" className={css`
                    height: 50%;
                    width: 50%;
                    margin-bottom: 50px;
                `}/>
            </div>
        </>
    )
}

export default Prize;