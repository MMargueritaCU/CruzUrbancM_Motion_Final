import {gsap} from "gsap";

const speedometerTL = gsap.timeline();
export function speedometerAnimation(){

    speedometerTL.from(".slow-bars", {duration:0.05, alpha:0, ease:"none", stagger:0.1});
    speedometerTL.from(".medium-bars", {duration:0.05, alpha:0, ease:"none", stagger:0.1}, "+=1")
                .to(".medium-bars", {duration:0.05, alpha:0, reversed:true, ease:"none", stagger:0.1}, "+=1")
                .to(".medium-bars", {duration:0.05, alpha:1, ease: "none", stagger:0.1}, "+=1");

    return speedometerTL;
}

const speedometerSecondTL = gsap.timeline();
export function speedometerSecondAnimation(){

    speedometerSecondTL.from(".fast-bars", {duration:0.05, alpha:0, ease:"none", stagger:0.1})
                        .to(".fast-bars", {duration:0.05, alpha:0, reversed:true, ease:"none", stagger:0.1}, "+=3");
    speedometerSecondTL.to(".medium-bars", {duration:0.05, alpha:0, reversed:true, ease:"none", stagger:0.1}, "+=2");
    speedometerSecondTL.to(".slow-bars", {duration:0.05, alpha:0, reversed:true, ease:"none", stagger:0.1}, "+=2");

    return speedometerSecondTL;
}