import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const primaryOutlineTL = gsap.timeline();
export function primaryOutlineAnimation(){

    return primaryOutlineTL;
}

const secondaryOutlineTL = gsap.timeline();
export function secondaryOutlineAnimation(){

    return secondaryOutlineTL;
}

const tertiaryOutlineTL = gsap.timeline();
export function tertiaryOutlineAnimation(){

    return tertiaryOutlineTL;
}