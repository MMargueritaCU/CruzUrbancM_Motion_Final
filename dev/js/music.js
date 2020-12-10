import {gsap} from "gsap";

gsap.set("#dodieSong", {transformOrigin:"68, -9"});

const musicTL = gsap.timeline();
export function musicAnimation(){

    musicTL.from("#dodieSong", {duration:0.1, alpha:0})
            .to("#dodieSong", {duration:2.5, rotate:360, repeat:5, ease:"none"});

    return musicTL;
}