import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";
import { propTypes } from "react-bootstrap/esm/Image";

export const SecondsCounter = () => {
	let [timer, setTimer] = useState(0);

	useEffect(() => {
		window.setInterval(() => {
			timer > 9 ? setTimer(0) : setTimer(timer++);
		}, 1000);
	}, []);

	return (
		<div className="SecondsCounter">
			<h1>
				Tiempo que llevas perdido en arreglar este ejercicio: {timer}{" "}
				segundos
			</h1>
		</div>
	);
};
