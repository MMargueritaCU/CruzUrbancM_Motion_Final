import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.set("#musicOuterRing", {morphSVG:"#musicOuterRing"});
gsap.set("#musicInnerRing1", {morphSVG:"#musicInnerRing1"});
gsap.set("#musicInnerRing2", {morphSVG:"#musicInnerRing2"});

const musicBoardTL = gsap.timeline();
export function musicBoardAnimation(){

    musicBoardTL.to("#musicOuterRing", {duration:1, morphSVG:"#musicOuterRing-large", x:-345, y:-485}, "musicRings");
    musicBoardTL.from("#musicOuterRing-large", {duration:0.01, alpha:0}, "musicRings, +=0.0001");
    musicBoardTL.from("#main-music-fill", {duration:0.01, alpha:0, scale:0}, "musicRings, +=0.0001");

    return musicBoardTL;
}