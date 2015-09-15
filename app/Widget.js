import React from "react";
import Slide from "./Slide";

export default React.createClass({
	getInitialState: function() {
		return {
			currentSlide: 0,
			collapsed: false,
			lastSlide: this.props.slides.length-1
		};
	},
	handleClickPrev: function(){
		var slide = (this.state.currentSlide==0)?
			0 : --this.state.currentSlide;
		this.setState({ currentSlide: slide });
	},
	handleClickCollapse: function(){
		this.setState({ collapsed: !this.state.collapsed });
	},
	handleClickNext: function(){
		var slide = (this.state.currentSlide==this.state.lastSlide)?
			this.state.lastSlide : ++this.state.currentSlide;
		this.setState({ currentSlide: slide });
	},
	render: function() {
		return (
			<div className="widget"
				data-slide={this.state.currentSlide}
				data-collapsed={this.state.collapsed}>

				<header>
					<h1><img className="icon_doc" src="assets/doc.svg" /> <span className="icon_alignedlabel">{this.props.title}</span></h1>
					<button className="collapse" onClick={this.handleClickCollapse}><img className="icon_collapse" src="assets/collapse.svg" /></button>
				</header>

				<section>
					<ul>
						{this.props.slides.map(function(slide) {
							return <Slide title={slide.title}
								thumbnail={slide.thumbnail}
								description={slide.description} />;
						})}
					</ul>
					<footer>
						<span className="button_wrapper">
							{this.state.currentSlide == 0 ? null : <button className="prev" onClick={this.handleClickPrev}><img className="icon_left" src="assets/left.svg" /> <span className="icon_alignedlabel">Prev</span></button> }
						</span>
						<span className="button_wrapper">
							{this.state.currentSlide == this.state.lastSlide ? null : <button className="next" onClick={this.handleClickNext}><span className="icon_alignedlabel">{this.props.slides[this.state.currentSlide+1].title}</span> <img className="icon_right" src="assets/right.svg" /></button> }
						</span>
					</footer>
				</section>

				

			</div>
		);
	},
});