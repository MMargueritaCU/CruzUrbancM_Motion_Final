import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// gsap.set("#outerCircle", {transformOrigin: "bottom"});

const drawTL = gsap.timeline();
export function drawAnimation(){

    // drawTL.from("#outerCircle", {duration:2, ease: "none", drawSVG: "50% 50%"});
    drawTL.fromTo("#outerCircle", {drawSVG: "0% 10%"},{duration:2, ease:"none", drawSVG: "90% 100%"}, "circleDraw")
        .to("#outerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#outerCircle", {duration:0.125, stroke: "#00ff7f"}, "lightUp");

    drawTL.fromTo("#innerCircle", {drawSVG: "90% 100%"},{duration:2, ease:"none", drawSVG: "0% 10%"}, "circleDraw")
        .to("#innerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#innerCircle", {duration:0.125, stroke: "#89ff00"}, "lightUp");

    drawTL.from("#topV", {duration:0.125, alpha:0}, "lightUp");
    drawTL.from("#bottomW", {duration:0.125, alpha:0}, "lightUp");



    return drawTL;
}