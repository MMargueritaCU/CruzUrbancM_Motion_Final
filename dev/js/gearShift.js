import {gsap} from "gsap";

var brightOrange = "#FFB000";
var dullOrange = "#5C4D35";

const gearShiftTL = gsap.timeline();
export function gearShiftAnimation(){

    gearShiftTL.to("#pShift", {duration:0.25, fill:dullOrange, ease:"none"});

    gearShiftTL.to("#rShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftTL.to("#rShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.25");

    gearShiftTL.to("#nShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftTL.to("#nShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.25");

    gearShiftTL.to("#dShift", {duration:0.25, fill:brightOrange, ease:"none"});


    return gearShiftTL;
}

const gearShiftSecondTL = gsap.timeline();
export function gearShiftSecondAnimation(){

    gearShiftSecondTL.to("#dShift", {duration:0.25, fill:dullOrange, ease:"none"});

    gearShiftSecondTL.to("#nShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftSecondTL.to("#nShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.25");

    gearShiftSecondTL.to("#rShift", {duration:0.25, fill:brightOrange, ease:"none"});
    gearShiftSecondTL.to("#rShift", {duration:0.25, fill:dullOrange, ease:"none"}, "+=0.25");

    gearShiftSecondTL.to("#pShift", {duration:0.25, fill:brightOrange, ease:"none"});


    return gearShiftSecondTL;
}