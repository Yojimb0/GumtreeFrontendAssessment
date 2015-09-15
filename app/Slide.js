import React from "react";

export default React.createClass({
	createMarkup: function(){
		return {__html: this.props.description};
	},
	render: function() {
		return (
			<li>
				{this.props.thumbnail ?
					<figure>
						<img src={'assets/'+this.props.thumbnail} alt={this.props.title}/>
					</figure>
				: null }
				<p dangerouslySetInnerHTML={this.createMarkup()}></p>
			</li>
		);
	},
});