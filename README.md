# GumtreeFrontendAssessment
Technical assessment for a front-end job opportunity at Gumtree (Australia)

## Setup
### Installing

```
npm install
```

### Create the dist folder (static)

```
npm run compile
```

### Run on a python server

```
npm run server
```

And then [http://localhost:8000/dist/](http://localhost:8000/dist/)


## React

React is totally overkill for this little widget, but as jQuery is. I wanted to try my hand on this trendy framework as I didn't have much experience on it.

## CSS

All the animations are done in CSS (Sliding, and collapsing). Wide use of flexbox where I could, because I love it, and it solves responsive concerns in the best way (Everything's fluid, no media queries). Just for fun, and to keep on the no-media-query approach, the font-size is set in VW to be dynamically dependant on the device width.

## Icons

All done in SVG, best way to handle their quality when served on retina devices, and very light. I designed them in Sketch.

## Perf matters

It's obviously overkill to use such a framework for just one item in the page. Pure JS uglified would just have been a few KB... But here, I'm using uglification on the CSS and the bundled JS, so files are very small. I could have inlined the SVG too, it prevent them to be cached, but it could saves 4 requests. It could be also good to inline the CSS as it's very small, and the best practices nowadays suggest to inline the above-the-fold first bits of CSS.

On the subject of reactivity, I used css-transforms to do the sliding, instead of just moving the `left` property, cause it's calculated through the GPU and is much more efficient.