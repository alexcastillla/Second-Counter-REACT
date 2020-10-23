import React from "react";
import { SecondsCounter } from "./clock.js";
import { RefreshPage } from "./reloadpage.js";
//include images into your bundle

let thousand = 1000;
let tenthousand = 10000;
let onehundredthousand = 100000;

export function Home() {
	return (
		<div className="d-flex flex-column">
			<div className="text-center">
				<p>How much time you have wasted here</p>
			</div>
			<div className="row justify-content-center">
				<SecondsCounter miliseconds={onehundredthousand} />
				<SecondsCounter miliseconds={tenthousand} />
				<SecondsCounter miliseconds={thousand} />
			</div>
			<button onClick={() => window.location.reload(false)}>
				Click to reload!
			</button>
		</div>
	);
}
