(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4678,2006],{34678:($,t,x)=>{"use strict";x.r(t),x.d(t,{titre:()=>r,interactifReady:()=>i,interactifType:()=>P,default:()=>s});var u=x(2006),e=x(89846),b=x(91030),a=x(82284);const r="Factoriser une expression complexe",i=!0,P="mathLive";function s(){u.default.call(this),this.titre=r,this.interactifReady=i,this.interactifType=P,this.consigne="Factoriser les expressions suivantes.",this.nbQuestions=8,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,e.Do.isHtml?(this.spacingCorr=2,this.spacing=2):this.spacingCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$=1===parseInt(this.sup)?["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)"]:2===parseInt(this.sup)?["(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"]:["c(ax+b)+x(ax+b)","c(ax+b)-x(ax+b)","x(ax+b)+c(ax+b)","x(ax+b)-c(ax+b)","(ax+b)(cx+d)+(ax+b)(ex+f)","(ax+b)(cx+d)-(ax+b)(ex+f)","(cx+d)(ax+b)+(ax+b)(ex+f)","(cx+d)(ax+b)-(ax+b)(ex+f)","(ax+b)(cx+d)+(ex+f)(ax+b)","(ax+b)(cx+d)-(ex+f)(ax+b)","(cx+d)(ax+b)+(ex+f)(ax+b)","(cx+d)(ax+b)-(ex+f)(ax+b)"];const t=(0,b.SRM)($,this.nbQuestions);for(let x,u,e,r,i,P,s,O,n,w=0,c=0;w<this.nbQuestions&&c<50;){switch(r=(0,b.nSR)(1,3),i=(0,b.nSR)(1,5)*(0,b.q$q)([-1,1]),P=(0,b.nSR)(2,5),s=(0,b.nSR)(2,5,P)*(0,b.q$q)([-1,1]),O=(0,b.nSR)(1,6,P),n=(0,b.nSR)(1,5,Math.abs(s))*(0,b.q$q)([-1,1]),t[w]){case"c(ax+b)+x(ax+b)":x=`$${(0,b.Gag)(w+1)} = ${P}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)(P,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"+x)","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}+x)$<br>`,e=[`(${P}+x)(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}+x)`];break;case"c(ax+b)-x(ax+b)":x=`$${(0,b.Gag)(w+1)} = ${P}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)(P,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"-x)","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}-x)$<br>`,e=[`(${P}-x)(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}-x)`];break;case"x(ax+b)+c(ax+b)":x=`$${(0,b.Gag)(w+1)} = x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+${P}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)(P,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("(x+"+P+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x+${P})$<br>`,e=[`(x+${P})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x+${P})`];break;case"x(ax+b)-c(ax+b)":x=`$${(0,b.Gag)(w+1)} = x(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-${P}(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`${(0,b.sp)(2)}On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("x","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)(P,"blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$\\phantom{ABC}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("(x-"+P+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x-${P})$<br>`,e=[`(x-${P})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(x-${P})`];break;case"(ax+b)(cx+d)+(ax+b)(ex+f)":x=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}x${(0,b.tPu)(s)})+(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}+${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P+O)+"x"+(0,b.tPu)(s+n)+")","blue")}$<br>`):u+=`<br>$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})`,`(${P+O}x${(0,b.tPu)(s+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)-(ax+b)(ex+f)":x=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}x${(0,b.tPu)(s)})-(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}-${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P-O)+"x"+(0,b.tPu)(s-n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})`,`(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)+(ax+b)(ex+f)":x=`$${(0,b.Gag)(w+1)}=(${P}x${(0,b.tPu)(s)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P+O)+"x"+(0,b.tPu)(s+n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})`,`(${P+O}x${(0,b.tPu)(s+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)-(ax+b)(ex+f)":x=`$${(0,b.Gag)(w+1)}=(${P}x${(0,b.tPu)(s)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P-O)+"x"+(0,b.tPu)(s-n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})`,`(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)+(ex+f)(ax+b)":x=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}x${(0,b.tPu)(s)})+(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}+${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P+O)+"x"+(0,b.tPu)(s+n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})`,`(${P+O}x${(0,b.tPu)(s+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(ax+b)(cx+d)-(ex+f)(ax+b)":x=`$${(0,b.Gag)(w+1)}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P}x${(0,b.tPu)(s)})-(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}-${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P-O)+"x"+(0,b.tPu)(s-n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})$<br>`,e=[`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})`,`(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`];break;case"(cx+d)(ax+b)+(ex+f)(ax+b)":x=`$${(0,b.Gag)(w+1)}=(${P}x${(0,b.tPu)(s)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})+(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}+${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"+"+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P+O)+"x"+(0,b.tPu)(s+n)+")","blue")}$<br>`):u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})$<br>`,e=[`(${P+O}x${(0,b.tPu)(s+n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${P+O}x${(0,b.tPu)(s+n)})`];break;case"(cx+d)(ax+b)-(ex+f)(ax+b)":x=`$${(0,b.Gag)(w+1)}=(${P}x${(0,b.tPu)(s)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})-(${(0,b.wO4)(O)}x${(0,b.tPu)(n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$`,u=x,this.correctionDetaillee?(u+=`<br>On remarque que $(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})$ est un facteur commun.`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}-${(0,b.b1)("("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+")","blue")}${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-("+(0,b.wO4)(O)+"x"+(0,b.tPu)(n)+"))","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+P+"x"+(0,b.tPu)(s)+"-"+(0,b.wO4)(O)+"x"+(0,b.tPu)(-n)+")","blue")}$`,u+=`<br>$${(0,b.Gag)(w+1)}=${(0,b.b1)("("+(0,b.wO4)(r)+"x"+(0,b.tPu)(i)+")")}${(0,b.b1)("("+(0,b.wO4)(P-O)+"x"+(0,b.tPu)(s-n)+")","blue")}$<br>`):(e=[`(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})`,`(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})`],u+=`<br>$\\phantom{ABC}=(${(0,b.wO4)(r)}x${(0,b.tPu)(i)})(${(0,b.wO4)(P-O)}x${(0,b.tPu)(s-n)})$<br>`)}x+=(0,a.G5)(this,w),(0,a.Iq)(this,w,e),-1===this.listeQuestions.indexOf(x)&&(this.listeQuestions.push(x),this.listeCorrections.push(u),w++),c++}(0,b.FRy)(this)},this.besoinFormulaireNumerique=["Type de facteur commun",3,"1 : Facteurs non communs simples\n2 : Facteurs non communs de la forme ax + b\n3 : Mélange"]}},2006:($,t,x)=>{"use strict";function u(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}x.r(t),x.d(t,{default:()=>u})}}]);
//# sourceMappingURL=4678.5e078313992765d8abd3.js.map