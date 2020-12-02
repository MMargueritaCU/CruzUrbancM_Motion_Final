import {gsap} from "gsap";

// var brightGreen1 = "#00FF7F";
// var brightGreen2 = "#89FF00";
var brightOrange = "#FFB000";
var dullOrange = "#5C4D35";
// var brightYellow = "#FFF800";

const gearShiftTL = gsap.timeline();
export function gearShiftAnimation(){

    gearShiftTL.to("#pShift", {duration:0.25, fill:dullOrange, ease:"none"});

    gearShiftTL.to("#rShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftTL.to("#rShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.5");

    gearShiftTL.to("#nShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftTL.to("#nShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.5");

    gearShiftTL.to("#dShift", {duration:0.25, fill:brightOrange, ease:"none"});


    return gearShiftTL;
}