import React from "react";
import Widget from "./Widget";
var content = require("../content.json");


React.render(
	<Widget title={content.title} slides={content.content}/>,
	document.body
);