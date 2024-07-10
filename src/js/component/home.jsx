import React, { useState } from "react";
import List from "./list";
//include images into your bundle


//create your first component
const Home = () => {
	const [user, setUser] = useState();


	//crear ususario
	
	return (
		<div className="d-flex justify-content-center align-items-center p-5">
			<List />
		</div>
	);
};

export default Home;
