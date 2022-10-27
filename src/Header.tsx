import React from "react";
import { css } from "@emotion/css"
import "./HeaderStyle.css"
import { Button } from "react-bootstrap";


const Header = () => {
	
	
	return (
		<>
			<h1 className={css`
				text-align: center;
				margin-top: 40px;
				font-size: 250%;
			`}>Target Shooting</h1>
			<div className={css`
				display: flex;
				justify-content: center;
				margin-top: 40px;
			`}>
				
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