import React from "react";
import List from "./list";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center p-5">
			<List />
		</div>
	);
};

export default Home;
