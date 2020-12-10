import {gsap} from "gsap";

const tempTL = gsap.timeline();
export function tempAnimation(){

    tempTL.from("#coldDot", {duration:1, alpha:0});
    tempTL.from("#coolDot", {duration:1, alpha:0});
    tempTL.from("#warmDot", {duration:1, alpha:0});

    return tempTL;
}

const tempSecondTL = gsap.timeline();
export function tempSecondAnimation(){

    tempSecondTL.from("#hotDot", {duration:1, alpha:0});

    return tempSecondTL;
}

const tempLastTL = gsap.timeline();
export function tempLastAnimation(){

    tempLastTL.to("#hotDot", {duration:1, alpha:0});
    tempLastTL.to("#warmDot", {duration:1, alpha:0});
    tempLastTL.to("#coolDot", {duration:1, alpha:0});
    tempLastTL.to("#coldDot", {duration:1, alpha:0});

    return tempLastTL;
}