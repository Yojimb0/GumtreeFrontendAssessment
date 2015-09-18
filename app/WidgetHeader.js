import React from "react";

export default React.createClass({
	render: function() {
		return (
			<header>
				<h1>
					<img className="icon_doc" src="assets/doc.svg" /> 
					<span className="icon_alignedlabel">{this.props.title}</span>
				</h1>
				<button className="collapse" onClick={this.props.collapseClick}>
					<img className="icon_collapse" src="assets/collapse.svg" />
				</button>
			</header>
		);
	}
});