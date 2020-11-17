import {gsap} from "gsap";

var darkBlue = "#4E4C80";
var darkGreen = "#ACA885";
var darkYellow = "#DEB17C";
var darkRed = "#C07675";
var darkPink = "#D9AAA2";

var switchTime = 0.5;

gsap.set("#dayMonster", {transformOrigin: "center"});
gsap.set("#tail", {transformOrigin: "center"});
gsap.set("#sparkle1", {transformOrigin: "center"});
gsap.set("#sparkle2", {transformOrigin: "center"});
gsap.set("#sparkle3", {transformOrigin: "center"});
gsap.set("#rightEye", {transformOrigin: "center"});
gsap.set("#leftEye", {transformOrigin: "center"});
gsap.set("#zSymbols", {alpha: 0});
gsap.set("#smallZ", {transformOrigin: "center"});
gsap.set("#mediumZ", {transformOrigin: "center"});
gsap.set("#bigZ", {transformOrigin: "center"});
gsap.set("#body", {transformOrigin: "center"});
gsap.set("#mouthYawn", {alpha: 0, transformOrigin: "center"});
gsap.set("#bowtie", {transformOrigin: "center"});
gsap.set("#rightLeg", {transformOrigin: "center"});
gsap.set("#leftLeg", {transformOrigin: "center"});

const dayMonsterTL = gsap.timeline();
dayMonsterTL.to("#tail", {duration:switchTime, rotation: -45, y:375, ease: "none"}, "startAnimation")
            .to("#tailTop", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")
            .to("#tailBottom", {duration:switchTime, fill: darkYellow, ease: "none"}, "startAnimation")
            .to("#scale1", {duration:switchTime, fill: darkGreen, ease: "none"}, "startAnimation")
            .to("#scale2", {duration:switchTime, fill: darkGreen, ease: "none"}, "startAnimation")

            .to("#rightToes", {duration:switchTime, fill: darkGreen, ease: "none"}, "startAnimation")
            .to("#leftToes", {duration:switchTime, fill: darkGreen, ease: "none"}, "startAnimation")
            .to("#leftFoot", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")
            .to("#rightFoot", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")

            .to("#rightSide", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")
            .to("#leftSide", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")
            .to("#belly", {duration:switchTime, fill: darkYellow, ease: "none"}, "startAnimation")
            .to("#arms", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")

            .to("#bowtie", {duration:2, rotation:90, y:400, ease: "none"}, "startAnimation")
            .from("#cap", {duration:switchTime, y:-100, ease: "none"}, "startAnimation")
            .to("#capCircle", {duration:0.75, y:5, yoyo:true, repeat:1, ease: "none"}, "startAnimation")
            .to("#dayBackground", {duration:switchTime, fill: darkBlue, ease: "none"}, "startAnimation")
            
            .to("#head", {duration:switchTime, fill: darkRed, ease: "none"}, "startAnimation")
            .to("#mouthYawn", {duration:switchTime, alpha:1, ease: "none"}, "startAnimation")
            .to("#mouth", {duration:switchTime, alpha:0, ease: "none"}, "startAnimation")
            .to("#rightHorn", {duration:switchTime, alpha:0, ease: "none"}, "startAnimation")
            .to("#leftHorn", {duration:switchTime, fill: darkGreen, ease: "none"}, "startAnimation")
            .to("#rightEye", {duration:switchTime, fill: darkPink, rotation: -180, ease: "none"}, "startAnimation")
            .to("#leftEye", {duration:switchTime, fill: darkPink, rotation: 180, ease: "none"}, "startAnimation")

            .to("#body", {duration:1.5, scale:1.025, yoyo:true, repeat:1, ease: "none"}, "startYawn")
            .to("#mouthYawn", {duration:1.5, scale:1.5, yoyo:true, repeat:1, ease: "none"}, "startYawn")
            .to("#rightEye", {duration:1.5, y:-5, yoyo:true, repeat:1, ease: "none"}, "startYawn")
            .to("#leftEye", {duration:1.5, y:-5, yoyo:true, repeat:1, ease: "none"}, "startYawn");

export function dayMonsterAnimation(){
    return dayMonsterTL;
}

const sparkleTL = gsap.timeline();
sparkleTL.to("#sparkle1", {duration:1, rotation: 45, ease: "none", yoyo:true, repeat:3, scale:.5, alpha:0.5}, "startSparkles")
        .to("#sparkle2", {duration:1, rotation: -45, ease: "none", yoyo:true, repeat:3, scale:.25, alpha:0.5}, "startSparkles")
        .to("#sparkle3", {duration:1, rotation: 45, ease: "none", yoyo:true, repeat:3, scale:.75, alpha:0.5}, "startSparkles")
        .to("#bowtie", {duration:1, scaleX:1.5, rotation:5, ease: "none", yoyo:true, repeat:1}, "startSparkles")
        .to("#leftLeg", {duration:1, rotation:-10, ease: "none", yoyo:true, repeat:2}, "startSparkles")
        .to("#rightLeg", {duration:1, rotation:10, ease: "none", yoyo:true, repeat:2}, "startSparkles")
        .to("#sparkle1", {duration:1, ease: "none", scale:0, alpha:0}, "startFade")
        .to("#sparkle2", {duration:1, ease: "none", scale:0, alpha:0}, "startFade")
        .to("#sparkle3", {duration:1, ease: "none", scale:0, alpha:0}, "startFade");

export function sparkleAnimation(){
    return sparkleTL;
}

var zTime = 0.35;

const zSymbolsTL = gsap.timeline();
zSymbolsTL.to("#zSymbols", {duration:zTime, alpha:1})
        .to("#smallZ", {duration:zTime, scale:.5, yoyo:true, repeat:1, ease: "none"}, "startZ")
        .to("#mediumZ", {duration:zTime, scale:.5, yoyo:true, repeat:1, ease: "none"})
        .to("#bigZ", {duration:zTime, scale:.5, yoyo:true, repeat:1, ease: "none"})
        .to("#tail", {duration:0.75, transformOrigin: "right", rotation:-30, yoyo:true, repeat:1, ease: "none"}, "startZ");

export function zSymbolsAnimation(){
    return zSymbolsTL;
}