import React from "react";
import { css } from "@emotion/css"
import { Button } from "react-bootstrap";

const Footer = () => {
    const returnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
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
                <div className={css`
					margin-left: 15px;
                    scale: 75%;
				`}>
				<Button variant="outline-light" onClick={returnTop}>Top</Button>{' '}
				</div>
            </div>
        </>
    )
}

export default Footer;