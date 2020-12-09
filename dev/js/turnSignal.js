import {gsap} from "gsap";

const turnTL = gsap.timeline();
export function turnAnimation(){

    turnTL.from("#rightTurnLight", {duration:0.75, alpha:0, repeat:4, ease:"none"})
            .to("#rightTurnLight", {alpha:0});

    return turnTL;
}