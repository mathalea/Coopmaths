"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5335],{5335:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>a,interactifReady:()=>Z,interactifType:()=>x,default:()=>r});var t=s(25523),u=s(25482),n=s(53325),h=s(22380),$=s(11945);const a="Trouver des phrases avec les mots : divisible, diviseur et multiple",Z=!0,x="listeDeroulante";function r(){t.default.call(this),this.consigne="",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.listePackages="xlop",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let e=(0,u.nSR)(6,17,[9,10]),i=(0,u.nSR)(11,99),s=(0,u.nSR)(1,e-1),t=e*i,a=e*i+s;for(;i%e==0||i%s==0||e%s==0||a%s==0;)e=(0,u.nSR)(6,17,[9,10]),i=(0,u.nSR)(11,99),s=(0,u.nSR)(1,e-1),t=e*i,a=e*i+s;this.introduction=`À l'aide des calculs suivants, compléter les phrases suivantes avec les nombres $${(0,u.euh)(a)}$, $${(0,u.euh)(t)}$, $${(0,u.euh)(e)}$ ou $${(0,u.euh)(i)}$.<br><br>`,0===(0,u.nSR)(0,1)?(this.introduction+=(0,n.Z)({operande1:t,operande2:e,type:"divisionE"}),h.Do.isHtml||(this.introduction+="\\qquad"),this.introduction+=(0,n.Z)({operande1:a,operande2:e,type:"divisionE"})):(this.introduction+=(0,n.Z)({operande1:a,operande2:e,type:"divisionE"}),h.Do.isHtml||(this.introduction+="\\qquad"),this.introduction+=(0,n.Z)({operande1:t,operande2:e,type:"divisionE"}));const Z=(0,u.SRM)([1,2,3,4,5,6],this.nbQuestions);for(let n,h,x=0,r=0;x<this.nbQuestions&&r<50;){switch(Z[x]){case 1:n="... est divisible par ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"est divisible par"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(t)}$ est divisible par $${(0,u.euh)(e)}$ ou $${(0,u.euh)(t)}$ est divisible par $${(0,u.euh)(i)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(t),(0,u.x9Z)(e)],[(0,u.x9Z)(t),(0,u.x9Z)(i)]]);break;case 2:n="... est un diviseur de ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"est un diviseur de"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(e)}$ est un diviseur de $${(0,u.euh)(t)}$ ou $${(0,u.euh)(i)}$ est un diviseur de $${(0,u.euh)(t)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(e),(0,u.x9Z)(t)],[(0,u.x9Z)(i),(0,u.x9Z)(t)]]);break;case 3:n="... est un multiple de ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"est un multiple de"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(t)}$ est un multiple de $${(0,u.euh)(e)}$ ou $${(0,u.euh)(t)}$ est un multiple de $${(0,u.euh)(i)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(t),(0,u.x9Z)(e)],[(0,u.x9Z)(t),(0,u.x9Z)(i)]]);break;case 4:n="... n'est pas divisible par ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"n'est pas divisible par"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(a)}$ n'est pas divisible par $${(0,u.euh)(e)}$ ou $${(0,u.euh)(a)}$ n'est pas divisible par $${(0,u.euh)(i)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(a),(0,u.x9Z)(e)],[(0,u.x9Z)(a),(0,u.x9Z)(i)]]);break;case 5:n="... n'est pas un diviseur de ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"n'est pas un diviseur de"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(e)}$ n'est pas un diviseur de $${(0,u.euh)(a)}$ ou $${(0,u.euh)(i)}$ n'est pas un diviseur de $${(0,u.euh)(a)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(e),(0,u.x9Z)(a)],[(0,u.x9Z)(i),(0,u.x9Z)(a)]]);break;case 6:n="... n'est pas un multiple de ...",this.interactif&&(n=(0,$.iC)(this,x,0,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])+"n'est pas un multiple de"+(0,$.iC)(this,x,1,[(0,u.x9Z)(a),(0,u.x9Z)(t),(0,u.x9Z)(e),(0,u.x9Z)(i)])),h=`$${(0,u.euh)(a)}$ n'est pas un multiple de $${(0,u.euh)(e)}$ ou $${(0,u.euh)(a)}$ est n'est pas un multiple de $${(0,u.euh)(i)}$.`,(0,$.Iq)(this,x,[[(0,u.x9Z)(a),(0,u.x9Z)(e)],[(0,u.x9Z)(a),(0,u.x9Z)(i)]])}-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(h),x++),r++}(0,u.K1R)(this)}}}}]);
//# sourceMappingURL=5335.b5e0ac332ab7f30a154d.js.map