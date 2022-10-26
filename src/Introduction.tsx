import React from "react";
import { css } from "@emotion/css"

const Introduction = () => {
    return (
        <>
        <div className={css`
            text-align: center;
        `}>
        <h2>Introduction</h2>
        <p className={css`
            margin-top: 40px;
        `}>TargetShootingは輪ゴム銃で紙コップを倒す簡単なゲームです。<br />
            倒す的によって点数が変わり，点数によって景品がもらえます。<br></br>
            最高得点目指して，豪華景品をGETしよう!!!
        </p>
        </div>
        </>
    )
}

export default Introduction;