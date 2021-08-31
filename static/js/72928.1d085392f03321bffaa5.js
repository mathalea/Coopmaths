"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[72928,17007],{72928:(t,e,i)=>{i.r(e),i.d(e,{titre:()=>h,amcReady:()=>o,amcType:()=>u,interactifReady:()=>d,interactifType:()=>m,default:()=>c});var $=i(17007),n=i(66170),s=i(30169),a=i(75664),r=i(49565);const h="Calculs de volumes",o=!0,u="qcmMono",d=!0,m=["qcm","mathLive"];function c(){let t;$.default.call(this),this.titre=h,this.consigne="Calculer, en détaillant, le volume des solides donnés. Arrondir à l'unité",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.classe=6,this.amcReady=o,this.amcType=u,this.interactifReady=d,this.interactifType=m,this.sup3=2,this.nouvelleVersion=function(e){this.interactifType=2===parseInt(this.sup3)?"mathLive":"qcm",this.autoCorrection=[],t=6===this.classe?[1,2]:5===this.classe?[1,2,3,4]:4===this.classe?[1,2,3,4,5,6]:[1,2,3,4,5,6,7];const i=(0,s.SRM)(t,this.nbQuestions);this.listeQuestions=[],this.listeCorrections=[];const $=[["~\\text{m}","~\\text{m}^3","m^3"],["~\\text{dm}","~\\text{dm}^3","dm^3"],["~\\text{cm}","~\\text{cm}^3","cm^3"],["~\\text{mm}","~\\text{mm}^3","mm^3"]];let n,h,o;this.sup2?(n=(0,s.n0o)((0,s.nSR)(1,9)/10*(0,s.nSR)(0,1)),h=(0,s.n0o)((0,s.nSR)(1,9)/10*(0,s.nSR)(0,1)),o=(0,s.n0o)((0,s.nSR)(1,9)/10*(0,s.nSR)(0,1))):(n=0,h=0,o=0);for(let t,u,d,m,c,l,p,M,f,b,R,S,C,x=0,g=0;x<this.nbQuestions&&g<50;){switch(this.autoCorrection[x]={},i[x]){case 1:l=(0,s.n0o)((0,s.nSR)(2,10)+n),C=l*l*l,M=(0,s.nSR)(0,3),t=`Un cube de $${(0,s.euh)(l)} ${$[M][0]}$ d'arête en $${$[M][1]}$.`,u=`$\\mathcal{V}= c^3 =c \\times c \\times c = ${(0,s.euh)(l)}${$[M][0]}\\times${(0,s.euh)(l)}${$[M][0]}\\times${(0,s.euh)(l)}${$[M][0]}=${(0,s.k$K)(C)}${$[M][1]}`,C!==Math.round(C)?u+=`\\approx ${Math.round(C)}${$[M][1]}$`:u+="$",f=Math.round(C),b=6!==l?Math.round(6*l*l):Math.round(24*l),R=2!==l?Math.round(4*l):24,S=Math.round(6*l);break;case 2:1===this.sup?(M=(0,s.nSR)(0,3),m=(0,s.n0o)((0,s.nSR)(2,5)+n),c=(0,s.n0o)((0,s.nSR)(3,6)+h),d=(0,s.n0o)((0,s.nSR)(6,10)+o),C=m*d*c,t=`Un pavé droit de $${(0,s.euh)(m)}${$[M][0]}$ de largeur, de $${(0,s.euh)(d)}${$[M][0]}$ de longueur et de $${(0,s.euh)(c)}${$[M][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}= l \\times L \\times h = ${(0,s.euh)(m)}${$[M][0]}\\times${(0,s.euh)(d)}${$[M][0]}\\times${(0,s.euh)(c)}${$[M][0]}=${(0,s.k$K)(C)}${$[M][1]}`,C!==Math.round(C)?u+=`\\approx ${Math.round(C)}${$[M][1]}$`:u+="$",f=Math.round(C),b=Math.round(6*(m+d+c)),R=Math.round(2*m*d+2*d*c+2*m*c),S=Math.round(2*(m+d+c))):(M=(0,s.nSR)(1,2),m=(0,s.n0o)((0,s.nSR)(2,5)+n),c=(0,s.n0o)(10*(0,s.nSR)(3,6)+h),d=(0,s.vbX)((0,s.nSR)(6,10)/10,1),C=m*d*c,t=`Un pavé droit de $${(0,s.euh)(m)}${$[M][0]}$ de largeur, de $${(0,s.euh)(d)}${$[M-1][0]}$ de longueur et de $${(0,s.euh)(c)}${$[M+1][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}= l \\times L \\times h = ${(0,s.euh)(m)}${$[M][0]}\\times${(0,s.euh)(d)}${$[M-1][0]}\\times${(0,s.euh)(c)}${$[M+1][0]}=${m}${$[M][0]}\\times${(0,s.k$K)(10*d)}${$[M][0]}\\times${(0,s.k$K)(c/10)}${$[M][0]}=${(0,s.k$K)(C)}${$[M][1]}`,C!==Math.round(C)?u+=`\\approx ${Math.round(C)}${$[M][1]}$`:u+="$",f=Math.round(C),b=Math.round(6*(m+d+c)),R=Math.round(2*m*d+2*d*c+2*m*c),S=Math.round(2*(m+d+c)));break;case 3:1===this.sup?(M=(0,s.nSR)(0,3),p=(0,s.nSR)(2,10),c=(0,s.nSR)(2,15),C=p*p*c*Math.PI,f=Math.round(C),b=Math.round(4*C),R=Math.round(C/2),S=Math.round(2*C),t=`Un cylindre de $${p}${$[M][0]}$ de rayon et de $${(0,s.euh)(c)}${$[M][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${p}${$[M][0]}\\right)^2\\times${c}${$[M][0]}=${(0,s.k$K)(p*p*c)}\\pi${$[M][1]}\\approx${(0,s.k$K)((0,s.vbX)(C,0))}${$[M][1]}$`):(M=(0,s.nSR)(2,3),p=(0,s.nSR)(2,10),c=(0,s.nSR)(20,150),t=`Un cylindre de $${p}${$[M][0]}$ de rayon et de $${(0,s.k$K)(c/10)}${$[M-1][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${p}${$[M][0]}\\right)^2\\times${(0,s.k$K)(c/10)}${$[M-1][0]}=\\pi\\times${p*p}${$[M][0]}^2\\times${c}${$[M][0]}=${(0,s.k$K)(p*p*c)}\\pi${$[M][1]}\\approx${Math.round(C)}${$[M][1]}$`,f=Math.round(C),b=Math.round(4*C),R=Math.round(C/2),S=Math.round(2*C));break;case 4:1===this.sup?(M=(0,s.nSR)(0,3),l=(0,s.n0o)((0,s.nSR)(2,10)+o),c=(0,s.nSR)(2,5),m=(0,s.nSR)(6,10),C=l*c*m/2,t=`Un prisme droit de hauteur $${(0,s.euh)(m)}${$[M][0]}$ et dont les bases sont des triangles de base $${(0,s.euh)(l)}${$[M][0]}$ et de hauteur correspondante $${c}${$[M][0]}$ en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${(0,s.euh)(l)}${$[M][0]}\\times${(0,s.euh)(c)}${$[M][0]}}{2}\\times${(0,s.euh)(m)}${$[M][0]}=${(0,s.euh)(C)}${$[M][1]}`,C!==Math.round(C)?u+=`\\approx ${Math.round(C)}${$[M][1]}$`:u+="$",f=Math.round(C),b=Math.round(4*C),R=Math.round((l+c)*m),S=Math.round(2*C)):(M=(0,s.nSR)(1,2),l=(0,s.n0o)((0,s.nSR)(2,10)+o),c=(0,s.nSR)(30,50),m=(0,s.vbX)((0,s.nSR)(5,15)/10,1),t=`Un prisme droit de hauteur $${(0,s.euh)(m)}${$[M-1][0]}$ et dont les bases sont des triangles de base $${(0,s.euh)(l)}${$[M][0]}$ et de hauteur correspondante $${c}${$[M+1][0]}$ en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${l}${$[M][0]}\\times${c}${$[M+1][0]}}{2}\\times${(0,s.k$K)(m)}${$[M-1][0]}=\\dfrac{${l}${$[M][0]}\\times${(0,s.k$K)((0,s.n0o)(c/10))}${$[M][0]}}{2}\\times${10*m}${$[M][0]}=${(0,s.euh)(C)}${$[M][1]}`,C!==Math.round(C)?u+=`\\approx ${Math.round(C)}${$[M][1]}$`:u+="$",f=Math.round(C),b=Math.round(4*C),R=Math.round((l+c)*m),S=Math.round(2*C));break;case 5:1===this.sup?(M=(0,s.nSR)(0,3),p=(0,s.nSR)(2,10),c=(0,s.nSR)(2,15),C=p*p*c*Math.PI/3,t=`Un cône de $${p}${$[M][0]}$ de rayon et de $${(0,s.euh)(c)}${$[M][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${p}${$[M][0]}\\right)^2\\times${c}${$[M][0]}=${(0,s.qaf)(p*p*c,3)}\\pi${$[M][1]}\\approx${(0,s.k$K)(Math.round(C))}${$[M][1]}$`,f=Math.round(C),b=Math.round(4*C),R=Math.round(C/2),S=Math.round(2*C)):(M=(0,s.nSR)(2,3),p=(0,s.nSR)(2,10),c=(0,s.nSR)(20,150),C=p*p*c*Math.PI/3,t=`Un cône de $${(0,s.euh)(p)}${$[M][0]}$ de rayon et de $${(0,s.k$K)(c/10)}${$[M-1][0]}$ de hauteur en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${p}${$[M][0]}\\right)^2\\times${(0,s.k$K)((0,s.n0o)(c/10))}${$[M-1][0]}=\\dfrac{1}{3}\\times\\pi\\times\\left(${p}${$[M][0]}\\right)^2\\times${(0,s.k$K)(c)}${$[M][0]}=${(0,s.qaf)(p*p*c,3)}\\pi\\approx${(0,s.euh)(Math.round(C))}${$[M][1]}$`,f=Math.round(C),b=Math.round(4*C),R=Math.round(C/2),S=Math.round(2*C));break;case 6:1===this.sup?(M=(0,s.nSR)(0,3),l=(0,s.n0o)((0,s.nSR)(2,10)+h),c=(0,s.nSR)(2,5),m=(0,s.nSR)(6,10),C=l*l*c/3,t=`Une pyramide de hauteur $${c}${$[M][0]}$ et dont la base  est un carré de $${(0,s.euh)(l)}${$[M][0]}$ de côté en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${(0,s.euh)(l)}${$[M][0]}\\right)^2\\times${c}${$[M][0]}`,(0,s.n0o)(l*l*c/3,!1)===(0,s.vbX)(l*l*c/3,1)?u+=`=${(0,s.k$K)((0,s.vbX)((0,s.n0o)(l*l*c/3),1))}${$[M][1]}$`:u+=`\\approx${(0,s.euh)(Math.round(C))}${$[M][1]}$`,f=Math.round(C),b=Math.round(3*C),R=Math.round(3*C/4),S=Math.round(C/2)):(M=(0,s.nSR)(1,2),l=(0,s.n0o)((0,s.nSR)(2,10)+h),c=(0,s.nSR)(30,50),m=(0,s.vbX)((0,s.nSR)(5,15)/10,1),C=l*l*c/3,t=`Une pyramide de hauteur $${(0,s.k$K)(c/10)}${$[M-1][0]}$ et dont la base  est un carré de $${(0,s.euh)(l)}${$[M][0]}$ et de hauteur correspondante $${c}${$[M+1][0]}$ en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${(0,s.euh)(l)}${$[M][0]}\\right)^2\\times${(0,s.k$K)(c/10)}${$[M-1][0]}=\\dfrac{1}{3}\\times${l*l}${$[M][0]}^2\\times${(0,s.k$K)(c)}${$[M][0]}`,C===Math.round(C)?u+=`=${(0,s.euh)(Math.round(C))}${$[M][1]}$`:u+=`\\approx${(0,s.euh)(Math.round(C))}${$[M][1]}$`,f=Math.round(C),b=Math.round(3*C),R=Math.round(3*C/4),S=Math.round(C/2));break;case 7:M=(0,s.nSR)(0,3),p=(0,s.nSR)(2,10),C=4*Math.PI*p*p*p/3,t=`Une boule de $${p}${$[M][0]}$ de rayon en $${$[M][1]}$.`,u=`$\\mathcal{V}=\\dfrac{4}{3} \\times \\pi \\times R^3=\\dfrac{4}{3}\\times\\pi\\times\\left(${p}${$[M][0]}\\right)^3=${(0,s.qaf)((0,s.n0o)(4*p*p*p),3)}\\pi${$[M][1]}\\approx${(0,s.euh)(Math.round(C))}${$[M][1]}$`,f=Math.round(C),b=Math.round(3*C),R=Math.round(4*p*p*p/3),S=Math.round(3*C/4)}this.autoCorrection[x].enonce=`${t}\n`,this.autoCorrection[x].propositions=[{texte:`$${(0,s.euh)(f)}$`,statut:!0},{texte:`$${(0,s.euh)(b)}$`,statut:!1},{texte:`$${(0,s.euh)(R)}$`,statut:!1},{texte:`$${(0,s.euh)(S)}$`,statut:!1}],this.autoCorrection[x].options={},this.interactif&&"qcm"===this.interactifType?t+=(0,a.l3)(this,x).texte:((0,a.Iq)(this,x,new r.Z(Math.round(C),$[M][2]),{formatInteractif:"longueur"}),t+=(0,a.G5)(this,x,"longueur")),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(u),x++),g++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Sans conversions\n2 : Avec des conversions"],this.besoinFormulaire2CaseACocher=["Avec des décimaux",!1],n.Do.isHtml&&!n.Do.isDiaporama&&(this.besoinFormulaire3Numerique=["Exercice interactif",2,"1 : QCM\n2 : Numérique"])}},17007:(t,e,i)=>{function $(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let i="";for(const $ of e)void 0!==$&&(i+=$.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>$})}}]);
//# sourceMappingURL=72928.1d085392f03321bffaa5.js.map