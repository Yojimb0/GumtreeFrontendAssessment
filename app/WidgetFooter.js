import React from "react";

export default React.createClass({
	render: function() {
		var prev = '';
		var next = '';
		if(this.props.buttons.prev){
			prev = <button className="prev" onClick={this.props.prevClick}>
				<img className="icon_left" src="assets/left.svg" /> 
				<span className="icon_alignedlabel">Prev</span>
			</button>
		}
		if(this.props.buttons.next){
			next = <button className="next" onClick={this.props.nextClick}>
				<span className="icon_alignedlabel">{this.props.buttons.next}</span> 
				<img className="icon_right" src="assets/right.svg" />
			</button>
		}
		return (
			<footer>
				<span className="button_wrapper">{prev}</span>
				<span className="button_wrapper">{next}</span>
			</footer>
		);
	}
});