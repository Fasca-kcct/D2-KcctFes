import React from "react";
import { css } from "@emotion/css"
import "./HeaderStyle.css"
import { Button } from "react-bootstrap";


const Header = () => {
	const returnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	
	return (
		<>
			<h1 className={css`
				text-align: center;
				margin-top: 40px;
			`}>Target Shoot</h1>
			<div className={css`
				display: flex;
				justify-content: center;
				margin-top: 80px;
			`}>
				<div className={css`
					margin-right: 15px;
				`}>
				<Button variant="outline-secondary" onClick={returnTop}>Top</Button>{' '}
				</div>
				<div className={css`
					margin-right: 15px;
				`}>
				<Button variant="outline-secondary" href="http://www.kobe-kosen.ac.jp/">KCCT</Button>{' '}
				</div>
				<div className={css`	
					margin-right: 15px;
				`}>
				<Button variant="outline-secondary" href="http://www.kobe-kosen.ac.jp/campus_life/festival2022/index.html">Festival</Button>{' '}
				</div>
				<div className={css`
					margin-right: 15px;
				`}>
				<Button variant="outline-secondary" href="http://www.kobe-kosen.ac.jp/groups/denshi/">電子工学科</Button>{' '}
				</div>
			</div>
		</>
	)
}

export default Header;