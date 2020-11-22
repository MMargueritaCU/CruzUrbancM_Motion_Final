import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

gsap.set("#outerCircle", {transformOrigin: "center"});
gsap.set("#innerCircle", {transformOrigin: "center"});

const logoTL = gsap.timeline();
export function logoAnimation(){

    logoTL.fromTo("#outerCircle", {drawSVG: "0% 10%"},{duration:2, ease:"none", rotate: 90, drawSVG: "90% 100%"}, "circleDraw")
        .to("#outerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#outerCircle", {duration:0.125, stroke: "#00ff7f"}, "lightUp");

    logoTL.fromTo("#innerCircle", {drawSVG: "90% 100%"},{duration:2, ease:"none", rotate: -90, drawSVG: "0% 10%"}, "circleDraw")
        .to("#innerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#innerCircle", {duration:0.125, stroke: "#89ff00"}, "lightUp");

    logoTL.from("#morphCircle1", {duration:2, y:-300, ease: "none"}, "circleDraw2")
            .to("#morphCircle1", {duration:2, morphSVG:"#topV", ease: "bounce.out"});

    logoTL.from("#morphCircle2", {duration:2, y:300, ease:"none"}, "circleDraw2")
            .to("#morphCircle2", {duration:2, morphSVG:"#bottomW", ease:"bounce.out"});

    // logoTL.to("#morphCircle1", {duration:2, morphSVG:"#topV"});
    // logoTL.to("#morphCircle2", {duration:2, morphSVG:"#bottomW"});

    // logoTL.from("#topV", {duration:0.125, alpha:0}, "lightUp");
    // logoTL.from("#bottomW", {duration:0.125, alpha:0}, "lightUp");



    return logoTL;
}