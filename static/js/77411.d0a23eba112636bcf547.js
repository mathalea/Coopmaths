(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[77411,71129],{77411:($,t,u)=>{"use strict";u.r(t),u.d(t,{titre:()=>r,interactifReady:()=>i,interactifType:()=>s,default:()=>P});var x=u(71129),e=u(62259),b=u(63861),a=u(10229);const r="Factoriser une expression complexe",i=!0,s="mathLive";function P(){x.default.call(this),this.titre=r,this.interactifReady=i,this.interactifType=s,this.consigne="Factoriser les expressions suivantes.",this.nbQuestions=8,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,e.Do.isHtml?(this.spacingCorr=2,this.spacing=2):this.spacingCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$=1===parseInt(this.sup)?["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)"]:2===parseInt(this.sup)?["(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"]:["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)","(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"];const t=(0,b.SRM)($,this.nbQuestions);for(let u,x,e,r,i,s,P,O,n,w=0,o=0;w<this.nbQuestions&&o<50;){switch(r=(0,b.nSR)(1,3),i=(0,b.nSR)(1,5)*(0,b.q$q)([-1,1]),s=(0,b.nSR)(2,5),P=(0,b.nSR)(2,5,s)*(0,b.q$q)([-1,1]),O=(0,b.nSR)(1,6,s),n=(0,b.nSR)(1,5,Math.abs(P))*(0,b.q$q)([-1,1]),t[w]){case"c(ax+b)+x(ax+b)":u=`$${(0,b.Gag)(w+1)} = ${s}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)(s,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"+x)","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}+x)$<br>`,e=[`(${s}+x)(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}+x)`];break;case"c(ax+b)-x(ax+b)":u=`$${(0,b.Gag)(w+1)} = ${s}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)(s,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"-x)","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}-x)$<br>`,e=[`(${s}-x)(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}-x)`];break;case"x(ax+b)+c(ax+b)":u=`$${(0,b.Gag)(w+1)} = x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+${s}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)(s,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("(x+"+s+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x+${s})$<br>`,e=[`(x+${s})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x+${s})`];break;case"x(ax+b)-c(ax+b)":u=`$${(0,b.Gag)(w+1)} = x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-${s}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)(s,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("(x-"+s+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x-${s})$<br>`,e=[`(x-${s})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x-${s})`];break;case"(ax+b)(cx+d)+(ax+b)(ex+f)":u=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}x${(0,b.tPu)(P)})+(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}+${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s+O)+"x"+(0,b.tPu)(P+n)+")","blue")}$<br>`):x+=`<br>$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})`,`(${s+O}x${(0,b.tPu)(P+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)-(ax+b)(ex+f)":u=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}x${(0,b.tPu)(P)})-(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}-${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s-O)+"x"+(0,b.tPu)(P-n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})`,`(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)+(ax+b)(ex+f)":u=`$${(0,b.Gag)(w+1)}=(${s}x${(0,b.tPu)(P)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s+O)+"x"+(0,b.tPu)(P+n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})`,`(${s+O}x${(0,b.tPu)(P+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)-(ax+b)(ex+f)":u=`$${(0,b.Gag)(w+1)}=(${s}x${(0,b.tPu)(P)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s-O)+"x"+(0,b.tPu)(P-n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})`,`(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)+(ex+f)(ax+b)":u=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}x${(0,b.tPu)(P)})+(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}+${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s+O)+"x"+(0,b.tPu)(P+n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})`,`(${s+O}x${(0,b.tPu)(P+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)-(ex+f)(ax+b)":u=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s}x${(0,b.tPu)(P)})-(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}-${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s-O)+"x"+(0,b.tPu)(P-n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})`,`(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)+(ex+f)(ax+b)":u=`$${(0,b.Gag)(w+1)}=(${s}x${(0,b.tPu)(P)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s+O)+"x"+(0,b.tPu)(P+n)+")","blue")}$<br>`):x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})$<br>`,e=[`(${s+O}x${(0,b.tPu)(P+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${s+O}x${(0,b.tPu)(P+n)})`];break;case"(cx+d)(ax+b)-(ex+f)(ax+b)":u=`$${(0,b.Gag)(w+1)}=(${s}x${(0,b.tPu)(P)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,x=u,this.correctionDetaillee?(x+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+s+"x"+(0,b.tPu)(P)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,x+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(s-O)+"x"+(0,b.tPu)(P-n)+")","blue")}$<br>`):(e=[`(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})`],x+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(s-O)}x${(0,b.tPu)(P-n)})$<br>`)}u+=(0,a.G5)(this,w),(0,a.Iq)(this,w,e),-1===this.listeQuestions.indexOf(u)&&(this.listeQuestions.push(u),this.listeCorrections.push(x),w++),o++}(0,b.FRy)(this)},this.besoinFormulaireNumerique=["Type de facteur commun",3,"1 : Facteurs non communs simples\n2 : Facteurs non communs de la forme ax + b\n3 : Mélange"]}},71129:($,t,u)=>{"use strict";function x(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}u.r(t),u.d(t,{default:()=>x})}}]);
//# sourceMappingURL=77411.d0a23eba112636bcf547.js.map