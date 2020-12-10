import {gsap} from "gsap";

const rightTurnTL = gsap.timeline();
export function rightTurnAnimation(){

    rightTurnTL.from("#rightTurnLight", {duration:0.75, alpha:0, repeat:4, ease:"none"})
            .to("#rightTurnLight", {alpha:0});

    return rightTurnTL;
}

const leftTurnTL = gsap.timeline();
export function leftTurnAnimation(){

    leftTurnTL.from("#leftTurnLight", {duration:0.75, alpha:0, repeat:4, ease:"none"})
            .to("#leftTurnLight", {alpha:0});

    return leftTurnTL;
}