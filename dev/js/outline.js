import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

var brightGreen1 = "#00FF7F";
var brightGreen2 = "#89FF00";
var brightOrange = "#FFB000";
var brightYellow = "#FFF800";

gsap.set("#speedFill", {transformOrigin: "center"});
gsap.set("#tachFill", {transformOrigin: "center"});
gsap.set("#fuelFill", {transformOrigin: "center"});
gsap.set("#tempFill", {transformOrigin: "center"});
gsap.set("#musicFill", {transformOrigin: "center"});
gsap.set("#musicInnerRing1", {transformOrigin: "center"});
gsap.set("#musicInnerRing2", {transformOrigin: "center"});
gsap.set("#rightTurnFill", {transformOrigin: "center"});
gsap.set("#leftTurnFill", {transformOrigin: "center"});
gsap.set("#pShift", {transformOrigin: "center"});
gsap.set("#rShift", {transformOrigin: "center"});
gsap.set("#nShift", {transformOrigin: "center"});
gsap.set("#dShift", {transformOrigin: "center"});
gsap.set(".rings", {transformOrigin: "center"});
gsap.set("#bottomLiquid", {transformOrigin: "center"});


const primaryOutlineTL = gsap.timeline();
export function primaryOutlineAnimation(){

    primaryOutlineTL.from("#speedOuterRing", {duration:1, drawSVG: "0%", ease: "none"});
    primaryOutlineTL.from("#speedInnerRing", {duration:1, drawSVG: "0%", ease: "none"});
    primaryOutlineTL.from("#speedFill", {duration:0.25, alpha:0, scale: 0, ease: "none"});

    primaryOutlineTL.to("#speedOuterRing", {duration:0.25, stroke: brightGreen1}, "lightUp1");
    primaryOutlineTL.to("#speedInnerRing", {duration:0.25, stroke: brightGreen2}, "lightUp1");

    return primaryOutlineTL;
}

const secondaryOutlineTL = gsap.timeline();
export function secondaryOutlineAnimation(){

    secondaryOutlineTL.from("#tachOuterRing", {duration:1, drawSVG: "0%", ease: "none"}, "outer");
    secondaryOutlineTL.from("#tachInnerRing1", {duration:1, drawSVG: "0%", ease: "none"}, "inner1");
    secondaryOutlineTL.from("#tachInnerRing2", {duration:0.25, drawSVG: "0%", ease: "none"}, "inner2");
    secondaryOutlineTL.from("#tachFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillSecond");

    secondaryOutlineTL.from("#fuelOuterRing", {duration:1, drawSVG: "0%", ease: "none"}, "outer");
    secondaryOutlineTL.from("#fuelInnerRing1", {duration:1, drawSVG: "0%", ease: "none"}, "inner1");
    secondaryOutlineTL.from("#fuelInnerRing2", {duration:0.25, drawSVG: "0%", ease: "none"}, "inner2");
    secondaryOutlineTL.from("#fuelFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillSecond");

    secondaryOutlineTL.to("#tachOuterRing", {duration:0.25, stroke: brightGreen1}, "lightUp2");
    secondaryOutlineTL.to("#tachInnerRing1", {duration:0.25, stroke: brightGreen2}, "lightUp2");
    secondaryOutlineTL.to("#tachInnerRing2", {duration:0.25, stroke: brightGreen2}, "lightUp2");

    secondaryOutlineTL.to("#fuelOuterRing", {duration:0.25, stroke: brightGreen1}, "lightUp2");
    secondaryOutlineTL.to("#fuelInnerRing1", {duration:0.25, stroke: brightGreen2}, "lightUp2");
    secondaryOutlineTL.to("#fuelInnerRing2", {duration:0.25, stroke: brightGreen2}, "lightUp2");

    return secondaryOutlineTL;
}

const tertiaryOutlineTL = gsap.timeline();
export function tertiaryOutlineAnimation(){

    tertiaryOutlineTL.from("#tempOutline", {duration:0.5, drawSVG:"0%", ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#tempFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillThird");

    tertiaryOutlineTL.from("#musicOuterRing", {duration:0.5, drawSVG:"0%", ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#musicInnerRing1", {duration:0.5, drawSVG:"0%", rotate:90, ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#musicInnerRing2", {duration:0.5, drawSVG:"0%", rotate:-90,ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#musicFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillThird");
    tertiaryOutlineTL.from("#connector", {duration:0.25, drawSVG:"0%", ease: "none"}, "fillThird");

    tertiaryOutlineTL.from("#pShift", {duration:0.25, rotate:360, scale:0, ease:"none"}, "fillThird, -=0.125");
    tertiaryOutlineTL.from("#rShift", {duration:0.25, rotate:360, scale:0, ease:"none"});
    tertiaryOutlineTL.from("#nShift", {duration:0.25, rotate:360, scale:0, ease:"none"});
    tertiaryOutlineTL.from("#dShift", {duration:0.25, rotate:360, scale:0, ease:"none"});
    tertiaryOutlineTL.from("#kmh", {duration:0.25, alpha: 0, ease:"none"}, "labels");
    tertiaryOutlineTL.from("#rpm", {duration:0.25, alpha: 0, ease:"none"}, "labels");
    tertiaryOutlineTL.from("#fuel", {duration:0.25, alpha: 0, ease:"none"}, "labels");

    tertiaryOutlineTL.from("#rightTurnOutline", {duration:0.5, drawSVG:"0%", ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#rightTurnFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillThird");
    tertiaryOutlineTL.from("#leftTurnOutline", {duration:0.5, drawSVG:"0%", ease: "none"}, "secondOutline");
    tertiaryOutlineTL.from("#leftTurnFill", {duration:0.25, alpha:0, scale:0, ease: "none"}, "fillThird");

    tertiaryOutlineTL.to("#tempOutline", {duration:0.25, stroke: brightGreen1}, "lightUp3");

    tertiaryOutlineTL.to("#musicOuterRing", {duration:0.25, stroke: brightOrange}, "lightUp3");
    tertiaryOutlineTL.to("#musicInnerRing1", {duration:0.25, stroke: brightOrange}, "lightUp3");
    tertiaryOutlineTL.to("#musicInnerRing2", {duration:0.25, stroke: brightYellow}, "lightUp3");

    tertiaryOutlineTL.to("#connector", {duration:0.25, stroke: brightOrange}, "lightUp3");

    tertiaryOutlineTL.to("#rightTurnOutline", {duration:0.25, stroke: brightGreen1}, "lightUp3");
    tertiaryOutlineTL.to("#leftTurnOutline", {duration:0.25, stroke: brightGreen1}, "lightUp3");

    tertiaryOutlineTL.to("#kmh", {duration:0.25, fill:brightGreen1, ease:"none"}, "lightUp4");
    tertiaryOutlineTL.to("#rpm", {duration:0.25, fill:brightGreen1, ease:"none"}, "lightUp4");
    tertiaryOutlineTL.to("#fuel", {duration:0.25, fill:brightGreen1, ease:"none"}, "lightUp4");

    tertiaryOutlineTL.to("#pShift", {duration:0.25, fill:brightOrange, ease:"none"}, "lightUp4");

    return tertiaryOutlineTL;
}

const indicatorsTL = gsap.timeline();
export function indicatorsAnimation(){

    indicatorsTL.from(".indicator", {duration:0.05, alpha:0, ease:"none", stagger:0.1}, "indicators");
    indicatorsTL.from(".number", {duration:0.05, alpha:0, ease:"none", stagger:0.1}, "indicators");

    indicatorsTL.from(".rings", {duration:0.25, alpha:0, rotate: 360, ease:"none", stagger:0.1}, "indicators");
    indicatorsTL.from(".tach-number", {duration:0.05, alpha:0, ease:"none", stagger:0.1}, "indicators2");

    indicatorsTL.from("#bottomLiquid", {duration:0.25, alpha:0, scale:0, rotate:360}, "indicators");

    return indicatorsTL;
}