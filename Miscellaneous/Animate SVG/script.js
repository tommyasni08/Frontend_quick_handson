// // // --------------- Convert into function ---------------
// function animateSVG(
//   svg,
//   timeCompletion = 1000,
//   distancePerPoint = 0.5,
//   borderColor = "#FFF"
// ) {
//   let paths = [];
//   let totalLength = 0;
//   let pathIndex = 0; // The starting stroke

//   // Get all the paths within the svg
//   for (let path of svg.children) {
//     paths.push(path);
//   }

//   // Get total svg paths length
//   for (let path of paths) {
//     totalLength += path.getTotalLength();
//   }

//   // Calculate stroke draw speed
//   let drawFPS = (timeCompletion * distancePerPoint) / totalLength;

//   let timer = setInterval(animation, drawFPS);

//   function animation() {
//     // Loop over all paths inside the "paths" array
//     if (paths[pathIndex]) {
//       // Get the total length of the path
//       let pathLength = paths[pathIndex].getTotalLength();
//       // Next stroke (Starting + distance)
//       length += distancePerPoint;
//       // Stroke color
//       paths[pathIndex].style.stroke = borderColor;
//       paths[pathIndex].style.strokeDasharray = [length + 1, pathLength].join(
//         " "
//       );
//       // console.log(paths[pathIndex].style.strokeDasharray);
//       // Run the next path within the array (recursion)
//       if (length >= pathLength) {
//         clearInterval(timer);
//         setTimeout(() => {
//           length = 0;
//           timer = setInterval(animation, drawFPS);
//           pathIndex++;
//         }, 300);
//       }
//     }
//   }
// }

// // // --------------- Third Version - Multiple SVG Trial ---------------
// let svg1 = document.querySelector(".svg1"); // Get svg
// let svg2 = document.querySelector(".svg2"); // Get svg
// let svg3 = document.querySelector(".svg3"); // Get svg
// let svg4 = document.querySelector(".svg4"); // Get svg
// animateSVG(svg1, 3000);
// animateSVG(svg2, 3000);
// animateSVG(svg3, 3000);
// animateSVG(svg4, 3000);

// // --------------- Second Version Ext ---------------
// let svg = document.querySelector("svg"); // Get svg
// let timeCompletion = 1000; // Total completion time
// let distancePerPoint = 0.5; // Distance of each stroke draw
// let borderColor = "#fff"; // Stroke color

// animateSVG(svg, timeCompletion, distancePerPoint, borderColor);

// // --------------- Second version - Complete the animation in 3 seconds ---------------
// let timeCompletion = 1000; // Total completion time
// let distancePerPoint = 0.5; // Distance of each stroke draw
// let svg = document.querySelector("svg"); // Get svg
// let paths = [];
// let totalLength = 0;
// let pathIndex = 0; // The starting stroke
// let borderColor = "#fff"; // Stroke color

// // Get all the paths within the svg
// for (let path of svg.children) {
//   paths.push(path);
// }

// // Get total svg paths length
// for (let path of paths) {
//   totalLength += path.getTotalLength();
// }

// // Calculate stroke draw speed
// let drawFPS = (timeCompletion * distancePerPoint) / totalLength;

// let timer = setInterval(animation, drawFPS);

// function animation() {
//   // Loop over all paths inside the "paths" array
//   if (paths[pathIndex]) {
//     // Get the total length of the path
//     let pathLength = paths[pathIndex].getTotalLength();
//     // Next stroke (Starting + distance)
//     length += distancePerPoint;
//     // Stroke color
//     paths[pathIndex].style.stroke = borderColor;
//     paths[pathIndex].style.strokeDasharray = [length + 1, pathLength].join(" ");
//     // console.log(paths[pathIndex].style.strokeDasharray);
//     // Run the next path within the array (recursion)
//     if (length >= pathLength) {
//       clearInterval(timer);
//       setTimeout(() => {
//         length = 0;
//         timer = setInterval(animation, drawFPS);
//         pathIndex++;
//       }, 300);
//     }
//   }
// }

// --------------- initial Version ---------------
let paths = [];
let drawFPs = 700; // Speed of stroke draw
let distancePerPoint = 0.5; // Distance of each stroke draw

let borderColor = "#FFF"; // Stroke color
let length = 0; // The starting distance before animation
let pathIndex = 0; // The starting stroke
let timer = setInterval(animation, 1000 / drawFPs);

// collect every path of all SVG and store in the array
document.querySelectorAll("svg").forEach((item) => {
  for (let path of item.children) {
    paths.push(path);
  }
});

function animation() {
  // Loop over all paths inside the "paths" array
  if (paths[pathIndex]) {
    // Get the total length of the path
    let pathLength = paths[pathIndex].getTotalLength();
    // Next stroke (Starting + distance)
    length += distancePerPoint;
    // Stroke color
    paths[pathIndex].style.stroke = borderColor;
    paths[pathIndex].style.strokeDasharray = [length + 1, pathLength].join(" ");
    // console.log(paths[pathIndex].style.strokeDasharray);
    // Run the next path within the array (recursion)
    if (length >= pathLength) {
      clearInterval(timer);
      setTimeout(() => {
        length = 0;
        timer = setInterval(animation, 1000 / drawFPs);
        pathIndex++;
      }, 300);
    }
  }
}
