import React from "react";
import Slide from "./Slide";
import WidgetHeader from "./WidgetHeader";
import WidgetFooter from "./WidgetFooter";

export default React.createClass({
	getInitialState: function() {
		return {
			currentSlide: 0,
			collapsed: false,
			lastSlide: this.props.slides.length-1,
			buttonLabels: {prev: false, next: this.props.slides[0].title}
		};
	},
	handleClickPrev: function(){
		var slide = (this.state.currentSlide==0)?
			0 : --this.state.currentSlide;
		this.setState({ currentSlide: slide });
		this.updateButtonLabels(this.state.currentSlide);
	},
	handleClickCollapse: function(){
		this.setState({ collapsed: !this.state.collapsed });
	},
	handleClickNext: function(){
		var slide = (this.state.currentSlide==this.state.lastSlide)?
			this.state.lastSlide : ++this.state.currentSlide;
		this.setState({ currentSlide: slide });
		this.updateButtonLabels(this.state.currentSlide);
	},
	updateButtonLabels: function(currentSlide){
		this.setState({
			buttonLabels: {
				prev: currentSlide == 0 ? false : 'Prev',
				next: currentSlide == this.state.lastSlide ? false : this.props.slides[currentSlide+1].title
			}
		});
	},
	render: function() {
		return (
			<div className="widget"
				data-slide={this.state.currentSlide}
				data-collapsed={this.state.collapsed}>

				<WidgetHeader collapseClick={this.handleClickCollapse} title={this.props.title}/>

				<section>
					<ul>
						{this.props.slides.map(function(slide) {
							return <Slide title={slide.title}
								thumbnail={slide.thumbnail}
								description={slide.description} />;
						})}
					</ul>

					<WidgetFooter prevClick={this.handleClickPrev} nextClick={this.handleClickNext} buttons={this.state.buttonLabels} />

				</section>

			</div>
		);
	}
});