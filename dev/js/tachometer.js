import {gsap} from "gsap";

const tachometerTL = gsap.timeline();
export function tachometerAnimation(){

    tachometerTL.to("#ringOne", {duration:0.25, rotate:360, repeat:20}, "startRings");
    tachometerTL.to("#ringTwo", {duration:0.25, rotate:360, repeat:18}, "startRings, -=4.75");
                // .to("#ringTwo", {duration:0.25, rotate:360, repeat:10}, "+=0.5");

    return tachometerTL;
}

const tachometerSecondTL = gsap.timeline();
export function tachometerSecondAnimation(){
    
    tachometerSecondTL.to("#ringThree", {duration:0.5, rotate:360, repeat:18}, "startRings2");
    tachometerSecondTL.to("#ringFour", {duration:0.5, rotate:360, repeat:16}, "startRings2");
    // tachometerSecondTL.to("#ringOne", {duration:0.25, rotate:360, repeat:20}, "startRings2");
    // tachometerSecondTL.to("#ringTwo", {duration:0.25, rotate:360, repeat:20}, "startRings2");
    
    return tachometerSecondTL;
}