// console.log('hello d3');

// d3
//   .select('body')
//   .append('p')
//   .text('Hello World!');

// var bodySelection = d3.select('body');

// var svgSelection = bodySelection
//                     .append('svg')
//                     .attr('width', 50)
//                     .attr('height', 50);

// var circleSelection = svgSelection
//                         .append('circle')
//                         .attr('cx', 25)
//                         .attr('cy', 25)
//                         .attr('r', 25)
//                         .style('fill', 'purple');

// var data = [10, 20, 30];

// p = d3.select('body').selectAll('p')
//   .data(data)
//   .enter()
//   .append('p')
//   .text(function (d, i) {return 'i = ' + i + ' d = ' +d;});

// var circleRadii = [250, 150, 50, 25];

// var svgSelection = d3.select('body')
//   .append('svg')
//   .attr('width', 500)
//   .attr('height', 500)
//   .style('border', '1px solid black');

// var circles = svgSelection.selectAll('circles')
//   .data(circleRadii)
//   .enter()
//   .append('circle');

// var circleAttribtues = circles
//   .attr('cx', 50)
//   .attr('cy', 50)
//   .attr('r', function (d) {return d;})
//   .style('fill', function (d) {
//     return 'hsl(240, '+ d/250 +'%, 50%)';
//   });

var circleObjects = [
  { x: 100, y: 120, value: 40},
  { x: 120, y: 140, value: 40},
  { x: 140, y: 160, value: 40},
  { x: 160, y: 180, value: 40},
  { x: 180, y: 200, value: 40},
];

var svgSelection = d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('border', '1px solid black');

var circles = svgSelection.selectAll('circle')
  .data(circleObjects)
  .enter()
  .append('circle');

var circleAttribtues = circles
  .attr('cx', function (d) {return d.x;})
  .attr('cy', function (d) {return d.y;})
  .attr('r', function (d) {return d.value;})
  .style('fill', function (d) {
    return 'hsl('+ d.x +', 50%, 50%)';
  });
