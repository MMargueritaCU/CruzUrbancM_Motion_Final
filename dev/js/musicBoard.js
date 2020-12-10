import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.set("#musicOuterRing", {morphSVG:"#musicOuterRing"});
gsap.set("#musicInnerRing1-large", {transformOrigin:"center"});
gsap.set("#musicInnerRing2-large", {transformOrigin:"center"});
gsap.set("#main-music-fill", {transformOrigin:"bottom"});
gsap.set("#human", {transformOrigin:"center"});

const musicBoardTL = gsap.timeline();
export function musicBoardAnimation(){

    musicBoardTL.to("#musicOuterRing", {duration:1, morphSVG:"#musicOuterRing-large", x:-345, y:-485}, "musicRings");
    musicBoardTL.from("#musicOuterRing-large", {duration:0.01, alpha:0}, "musicRings, +=0.0001");
    musicBoardTL.from("#main-music-fill", {duration:1, alpha:0, scale:0}, "musicRings");

    musicBoardTL.from("#music-background", {duration:0.25, alpha:0});
    musicBoardTL.from("#musicInnerRing1-large", {duration:0.25, alpha:0});
    musicBoardTL.from("#musicInnerRing2-large", {duration:0.25, alpha:0});

    musicBoardTL.from("#musicRing2-long", {duration:0.05, alpha:0}, "musicRings2");
    musicBoardTL.from("#musicRing2-short", {duration:0.05, alpha:0}, "musicRings2");
    musicBoardTL.from("#musicRing3-long", {duration:0.05, alpha:0}, "musicRings3");
    musicBoardTL.from("#musicRing3-short", {duration:0.05, alpha:0}, "musicRings3");
    musicBoardTL.from("#musicRing4", {duration:0.05, alpha:0});
    musicBoardTL.from("#musicRing5", {duration:0.05, alpha:0});

    musicBoardTL.from("#dodie-music", {duration:0.1, alpha:0});
    musicBoardTL.from("#guiltless", {duration:0.1, alpha:0});
    musicBoardTL.from("#monster", {duration:0.1, alpha:0});
    musicBoardTL.from("#burned-out", {duration:0.1, alpha:0});
    musicBoardTL.from("#human", {duration:0.1, alpha:0})
                .to("#human", {duration:0.1, fill:"#FFF800", scale:1.25});
    musicBoardTL.from("#ready-now", {duration:0.1, alpha:0});
    musicBoardTL.from("#cool-girl", {duration:0.1, alpha:0});
    musicBoardTL.from("#boys-like-you", {duration:0.1, alpha:0});
    musicBoardTL.from("#arms-unfolding", {duration:0.1, alpha:0});

    musicBoardTL.to("#guiltless", {duration:0.1, x:425, y:90}, "shift1, +=0.5");
    musicBoardTL.to("#monster", {duration:0.1, x:500, y:165}, "shift1");
    musicBoardTL.to("#burned-out", {duration:0.1, x:525, y:240}, "shift1");
    musicBoardTL.to("#human", {duration:0.1, x:650, y:315}, "shift1")
                .to("#human", {duration:0.1, fill:"#CEC784", scale:1}, "shift1");
    musicBoardTL.to("#ready-now", {duration:0.1, y:390}, "shift1")
                .to("#ready-now", {duration:0.1, fill:"#FFF800", scale:1.25}, "shift1");
    musicBoardTL.to("#cool-girl", {duration:0.1, x:625, y:475}, "shift1");
    musicBoardTL.to("#boys-like-you", {duration:0.1, x:550, y:565}, "shift1");
    musicBoardTL.to("#arms-unfolding", {duration:0.1, x:475, y:650}, "shift1");

    musicBoardTL.to("#guiltless", {duration:0.1, alpha:0}, "shift2, +=0.5");
    musicBoardTL.to("#monster", {duration:0.1, x:400, y:90}, "shift2");
    musicBoardTL.to("#burned-out", {duration:0.1, x:475, y:165}, "shift2");
    musicBoardTL.to("#human", {duration:0.1, x:600, y:240}, "shift2");
    musicBoardTL.to("#ready-now", {duration:0.1, x:600, y:315}, "shift2")
                .to("#ready-now", {duration:0.1, fill:"#CEC784", scale:1}, "shift2");
    musicBoardTL.to("#cool-girl", {duration:0.1, x:600, y:380}, "shift2")
                .to("#cool-girl", {duration:0.1, fill:"#FFF800", scale:1.25}, "shift2");
    musicBoardTL.to("#boys-like-you", {duration:0.1, x:575, y:475}, "shift2");
    musicBoardTL.to("#arms-unfolding", {duration:0.1, x:525, y:565}, "shift2");

    musicBoardTL.to("#musicInnerRing2-large", {duration:0.25, scale:1.05, yoyo:true, repeat:1}, "+=0.5");

    musicBoardTL.to("#monster", {duration:0.1, alpha:0});
    musicBoardTL.to("#burned-out", {duration:0.1, alpha:0});
    musicBoardTL.to("#human", {duration:0.1, alpha:0});
    musicBoardTL.to("#ready-now", {duration:0.1, alpha:0});
    musicBoardTL.to("#boys-like-you", {duration:0.1, alpha:0});
    musicBoardTL.to("#arms-unfolding", {duration:0.1, alpha:0});

    musicBoardTL.to("#musicRing2-long", {duration:0.05, alpha:0});
    musicBoardTL.to("#musicRing2-short", {duration:0.05, alpha:0});
    musicBoardTL.to("#musicRing3-long", {duration:0.05, alpha:0});
    musicBoardTL.to("#musicRing3-short", {duration:0.05, alpha:0});
    musicBoardTL.to("#musicRing4", {duration:0.05, alpha:0});
    musicBoardTL.to("#musicRing5", {duration:0.05, alpha:0});

    musicBoardTL.to("#musicInnerRing1-large", {duration:0.25, alpha:0});
    musicBoardTL.to("#musicInnerRing2-large", {duration:0.25, alpha:0});
    musicBoardTL.to("#dodie-music", {duration:0.25, alpha:0}, "fade");
    musicBoardTL.from("#cool-girl", {duration:0.25, alpha:0}, "fade");
    musicBoardTL.to("#music-background", {duration:0.25, alpha:0});

    musicBoardTL.to("#musicOuterRing", {duration:0.25, morphSVG:"#musicOuterRing", x:0, y:0}, "fade2");
    musicBoardTL.to("#musicOuterRing-large", {duration:0.01, alpha:0}, "fade2");
    musicBoardTL.to("#main-music-fill", {duration:0.01, alpha:0, scale:0}, "fade2");

    return musicBoardTL;
}