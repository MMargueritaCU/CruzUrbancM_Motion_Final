import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const fuelTL = gsap.timeline();
export function fuelAnimation(){

    fuelTL.from("#topLiquid", {duration:0.5, drawSVG: "0%", ease: "none"});
    fuelTL.from("#Percent", {duration:0.25, alpha:0}, "+=0.75");

    return fuelTL;
}

const fuelSecondTL = gsap.timeline();
export function fuelSecondAnimation(){
    
    fuelSecondTL.to("#Percent", {duration:0.25, alpha:0});
    fuelSecondTL.to("#topLiquid", {duration:0.5, drawSVG: "0%", ease: "none"});

    return fuelSecondTL;
}