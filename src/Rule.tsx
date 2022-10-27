import React from "react";
import { css } from "@emotion/css"

const Rule = () => {
	return (
			<>
				<div className={css`
					text-align: center;
					margin-top: 40px;
				`}>
					<h2>Rules</h2>
					<p>
						輪ゴム鉄砲で紙コップを狙おう! <br/>
						紙コップの点数は手前から10点，20点，30点になっています。<br/>
						指定された位置から出ないようにしてください。 <br/>
						1回50円で5発打つことができます。
					</p>
				</div>
			</>
		)
}

export default Rule;