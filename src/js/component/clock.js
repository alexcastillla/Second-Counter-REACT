import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	let [timer, setTimer] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTimer(timer => timer + 1);
		}, props.miliseconds);
	}, []);

	timer == 10 ? setTimer(0) : timer;

	return (
		<div>
			<p>{timer}</p>
		</div>
	);
}

SecondsCounter.propTypes = {
	miliseconds: PropTypes.number
};
