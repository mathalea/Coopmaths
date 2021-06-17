(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[891,5216],{70891:($,t,b)=>{"use strict";b.r(t),b.d(t,{titre:()=>a,default:()=>r});var e=b(75216),u=b(89459),x=b(55339);const a="Factoriser une expression complexe";function r(){e.default.call(this),this.titre=a,this.consigne="Factoriser les expressions suivantes.",this.nbQuestions=8,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,u.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$=1===parseInt(this.sup)?["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)"]:2===parseInt(this.sup)?["(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"]:["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)","(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"];const t=(0,x.SRM)($,this.nbQuestions);for(let b,e,u,a,r,i,s,P,n=0,o=0;n<this.nbQuestions&&o<50;){switch(u=(0,x.nSR)(1,3),a=(0,x.nSR)(1,5)*(0,x.q$q)([-1,1]),r=(0,x.nSR)(2,5),i=(0,x.nSR)(2,5,r)*(0,x.q$q)([-1,1]),s=(0,x.nSR)(1,6,r),P=(0,x.nSR)(1,5,Math.abs(i))*(0,x.q$q)([-1,1]),t[n]){case"c(ax+b)+x(ax+b)":b=`$${(0,x.Gag)(n+1)} = ${r}(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})+x(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`${(0,x.sp)(2)}On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)(r,"blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}+${(0,x.b1)("x","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"+x)","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}+x)$<br>`;break;case"c(ax+b)-x(ax+b)":b=`$${(0,x.Gag)(n+1)} = ${r}(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})-x(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`${(0,x.sp)(2)}On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)(r,"blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}-${(0,x.b1)("x","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"-x)","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}-x)$<br>`;break;case"x(ax+b)+c(ax+b)":b=`$${(0,x.Gag)(n+1)} = x(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})+${r}(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`${(0,x.sp)(2)}On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("x","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}+${(0,x.b1)(r,"blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("(x+"+r+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(x+${r})$<br>`;break;case"x(ax+b)-c(ax+b)":b=`$${(0,x.Gag)(n+1)} = x(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})-${r}(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`${(0,x.sp)(2)}On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("x","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}-${(0,x.b1)(r,"blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$\\phantom{ABC}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("(x-"+r+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(x-${r})$<br>`;break;case"(ax+b)(cx+d)+(ax+b)(ex+f)":b=`$${(0,x.Gag)(n+1)}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}x${(0,x.tPu)(i)})+(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}+${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"+"+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r+s)+"x"+(0,x.tPu)(i+P)+")","blue")}$<br>`):e+=`<br>$${(0,x.Gag)(n+1)}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r+s}x${(0,x.tPu)(i+P)})$<br>`;break;case"(ax+b)(cx+d)-(ax+b)(ex+f)":b=`$${(0,x.Gag)(n+1)}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}x${(0,x.tPu)(i)})-(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}-${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+"))","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-"+(0,x.wO4)(s)+"x"+(0,x.tPu)(-P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r-s)+"x"+(0,x.tPu)(i-P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(r-s)}x${(0,x.tPu)(i-P)})$<br>`;break;case"(cx+d)(ax+b)+(ax+b)(ex+f)":b=`$${(0,x.Gag)(n+1)}=(${r}x${(0,x.tPu)(i)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})+(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}+${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"+"+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r+s)+"x"+(0,x.tPu)(i+P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r+s}x${(0,x.tPu)(i+P)})$<br>`;break;case"(cx+d)(ax+b)-(ax+b)(ex+f)":b=`$${(0,x.Gag)(n+1)}=(${r}x${(0,x.tPu)(i)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})-(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}-${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+"))","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-"+(0,x.wO4)(s)+"x"+(0,x.tPu)(-P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r-s)+"x"+(0,x.tPu)(i-P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(r-s)}x${(0,x.tPu)(i-P)})$<br>`;break;case"(ax+b)(cx+d)+(ex+f)(ax+b)":b=`$${(0,x.Gag)(n+1)}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}x${(0,x.tPu)(i)})+(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}+${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"+"+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r+s)+"x"+(0,x.tPu)(i+P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r+s}x${(0,x.tPu)(i+P)})$<br>`;break;case"(ax+b)(cx+d)-(ex+f)(ax+b)":b=`$${(0,x.Gag)(n+1)}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r}x${(0,x.tPu)(i)})-(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}-${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+"))","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-"+(0,x.wO4)(s)+"x"+(0,x.tPu)(-P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r-s)+"x"+(0,x.tPu)(i-P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(r-s)}x${(0,x.tPu)(i-P)})$<br>`;break;case"(cx+d)(ax+b)+(ex+f)(ax+b)":b=`$${(0,x.Gag)(n+1)}=(${r}x${(0,x.tPu)(i)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})+(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}+${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"+"+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r+s)+"x"+(0,x.tPu)(i+P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${r+s}x${(0,x.tPu)(i+P)})$<br>`;break;case"(cx+d)(ax+b)-(ex+f)(ax+b)":b=`$${(0,x.Gag)(n+1)}=(${r}x${(0,x.tPu)(i)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})-(${(0,x.wO4)(s)}x${(0,x.tPu)(P)})(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$`,e=b,this.correctionDetaillee?(e+=`<br>On remarque que $(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})$ est un facteur commun.`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}-${(0,x.b1)("("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+")","blue")}${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-("+(0,x.wO4)(s)+"x"+(0,x.tPu)(P)+"))","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+r+"x"+(0,x.tPu)(i)+"-"+(0,x.wO4)(s)+"x"+(0,x.tPu)(-P)+")","blue")}$`,e+=`<br>$${(0,x.Gag)(n+1)}=${(0,x.b1)("("+(0,x.wO4)(u)+"x"+(0,x.tPu)(a)+")")}${(0,x.b1)("("+(0,x.wO4)(r-s)+"x"+(0,x.tPu)(i-P)+")","blue")}$<br>`):e+=`<br>$\\phantom{ABC}=(${(0,x.wO4)(u)}x${(0,x.tPu)(a)})(${(0,x.wO4)(r-s)}x${(0,x.tPu)(i-P)})$<br>`}-1===this.listeQuestions.indexOf(b)&&(this.listeQuestions.push(b),this.listeCorrections.push(e),n++),o++}(0,x.FRy)(this)},this.besoinFormulaireNumerique=["Type de facteur commun",3,"1 : Facteurs non communs simples\n2 : Facteurs non communs de la forme ax + b\n3 : Mélange"]}},75216:($,t,b)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}b.r(t),b.d(t,{default:()=>e})}}]);
//# sourceMappingURL=891.249093fbccaa57bf597e.js.map