import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.set("#outerCircle", {transformOrigin: "center"});
gsap.set("#innerCircle", {transformOrigin: "center"});
gsap.set("#morphCircle1", {morphSVG:"#morphCircle1"});
gsap.set("#morphCircle2", {morphSVG:"#morphCircle2"});

const logoTL = gsap.timeline();
export function logoAnimation(){

    logoTL.fromTo("#outerCircle", {drawSVG: "0% 10%"},{duration:2, ease:"none", rotate: 90, drawSVG: "90% 100%"}, "circleDraw")
        .to("#outerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#outerCircle", {duration:0.125, stroke: "#00ff7f"}, "lightUp");

    logoTL.fromTo("#innerCircle", {drawSVG: "90% 100%"},{duration:2, ease:"none", rotate: -90, drawSVG: "0% 10%"}, "circleDraw")
        .to("#innerCircle", {duration:2, ease:"none", drawSVG: "100%"}, "circleDraw2")
        .to("#innerCircle", {duration:0.125, stroke: "#89ff00"}, "lightUp");


    logoTL.from("#morphCircle1", {duration:2, y:-500, ease: "bounce.out"}, "circleDraw2")
            .to("#morphCircle1", {duration:0.5, morphSVG:"#topV", fill:"#C9FF00"}, "logoMorph");

    logoTL.from("#morphCircle2", {duration:2, y:500, ease: "bounce.out"}, "circleDraw2")
            .to("#morphCircle2", {duration:0.5, morphSVG:"#bottomW", fill:"#C9FF00"}, "logoMorph");


    logoTL.to("#outerCircle", {duration:2, ease:"none", drawSVG: "0%"}, "+=1.5");
    logoTL.to("#innerCircle", {duration:2, ease:"none", drawSVG: "0%"});


   logoTL.to("#morphCircle1", {duration:0.5, morphSVG:"#morphCircle1", ease: "bounce.out", fill:"#C9FF00"})
          .to("#morphCircle1", {duration:0.5, y:-500, ease: "none"});

   logoTL.to("#morphCircle2", {duration:0.5, morphSVG:"#morphCircle2", ease: "bounce.out", fill:"#C9FF00"})
        .to("#morphCircle2", {duration:0.5, y:500, ease: "none"});


    logoTL.to("#volkswagenLogo", {duration:0.125, alpha:0});
    logoTL.to("#blackBackground", {duration:0.125, alpha:0});



    return logoTL;
}