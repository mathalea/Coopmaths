"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[98479,17007],{98479:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,interactifReady:()=>u,interactifType:()=>m,amcReady:()=>l,amcType:()=>h,default:()=>c});var s=t(17007),r=t(66170),n=t(30169),o=t(75664);const a="Primalité ou pas - Variante avec les critères de divisibilité par 7 et par 11",u=!0,m="qcm",l=!0,h="qcmMono";function c(){s.default.call(this),this.titre=a,this.consigne="Justifier que les nombres suivants sont premiers ou pas. Penser aux critères de divisibilité.",r.Do.isHtml?this.spacing=3:this.spacing=2,r.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=7,this.nbCols=2,this.nbColsCorr=1,this.listePackages="bclogo";const e=(0,n.hmQ)(529);this.nouvelleVersion=function(i){let t;r.Do.isHtml&&(this.boutonAide=(0,n.apm)(i,"assets/pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire"),this.boutonAide+=(0,n.MJ0)("conteMathsNombresPremiers","/videos/LesNombresPremiers.mp4","Petit conte mathématique - Les Nombres Premiers","Intro Vidéo")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let s=[1,2,3,4,5,6,7];s=(0,n.TVQ)(s);const a=(0,n.bqK)(s,this.nbQuestions);let u="Ces critères de divisibilité pourront être utiles :";r.Do.isHtml?(u+="<br>",u+="- Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.<br>",u+="- Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11.",u+="<br> <br>"):(u+=(0,n.NpW)(["Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.","Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11."]),u+="\\par\\vspace{0.5cm}"),u+="Ainsi que cette liste des nombres premiers inférieurs à 100 : ",r.Do.isHtml?u+="<br>":u+="\\par\\vspace{0.25cm}",u+=e[0];for(let r=1;r<25;r++)u+=", "+e[r];u+=".",this.introduction=(0,n.KUN)(u,"nombres","Coup de pouce");for(let m,l,h,c,d,b,g,p,f,S,A,$,C,v,x,N,q,Z=0,P=0;Z<this.nbQuestions&&P<50;){switch(t=a[Z],t){case 1:h=2*(0,n.nSR)(51,4999),m=(0,n.x9Z)(h),l=`Comme ${(0,n.x9Z)(h)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(h)+" n'est donc pas premier."),d="non";break;case 2:for(c=0,h=3*(0,n.nSR)(34,3333);h%2==0||h%5==0;)h=3*(0,n.nSR)(34,3333);m=(0,n.x9Z)(h),l="Comme "+h.toString().charAt(0),c=Number(h.toString().charAt(0));for(let e=1;e<h.toString().length;e++)l+=" + "+h.toString().charAt(e),c+=Number(h.toString().charAt(e));l+=` = ${c} est un multiple de 3 donc ${(0,n.x9Z)(h)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(h)+" n'est donc pas premier."),d="non";break;case 3:h=5*(0,n.nSR)(20,1999),m=(0,n.x9Z)(h),l=`Comme le dernier chiffre de ${(0,n.x9Z)(h)} est un ${h.toString().charAt(h.toString().length-1)} alors ${(0,n.x9Z)(h)} est divisible par 5, `,l+="il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même, ",l+=(0,n.PH8)((0,n.x9Z)(h)+" n'est donc pas premier."),d="non";break;case 4:for(h=7*(0,n.nSR)(15,1428),m=(0,n.x9Z)(h),v=h.toString().length,l=` 7 divise ${(0,n.x9Z)(h)}, en effet : `,l+="<br>",N=h,x=v,q=Number(N.toString().substring(0,x-1))+5*Number(N.toString().charAt(x-1));q>=56;)l+=`${N.toString().substring(0,x-1)} + 5$\\times$${N.toString().charAt(x-1)}`,l+=` = ${Number(N.toString().substring(0,x-1))+5*Number(N.toString().charAt(x-1))}`,l+="<br>",N=q,x=N.toString().length,q=Number(N.toString().substring(0,x-1))+5*Number(N.toString().charAt(x-1));l+=`Comme ${N.toString().substring(0,x-1)} + 5$\\times$${N.toString().charAt(x-1)} = ${q} est un multiple de 7 alors 7 divise ${h} aussi `,l+="qui admet donc au moins trois diviseurs : 1, 7 et lui-même, ",l+=(0,n.PH8)((0,n.x9Z)(h)+" n'est donc pas premier."),d="non";break;case 5:if(h=11*(0,n.nSR)(10,909),m=(0,n.x9Z)(h),l=`D'une part, la somme des chiffres de rang impair de ${(0,n.x9Z)(h)} vaut `,Number(h.toString().length)%2==0){b=Number(h.toString().charAt(1)),l+=h.toString().charAt(1);for(let e=3;e<h.toString().length;e++)e%2==1&&(l+=" + "+h.toString().charAt(e),b+=Number(h.toString().charAt(e)));l+=" = "+b+" <br> "}else{b=Number(h.toString().charAt(0)),l+=h.toString().charAt(0);for(let e=1;e<h.toString().length;e++)e%2==0&&(l+=" + "+h.toString().charAt(e),b+=Number(h.toString().charAt(e)));l+=" = "+b+"<br> "}if(l+=`d'autre part, la somme des chiffres de rang pair de ${(0,n.x9Z)(h)} vaut `,Number(h.toString().length)%2==0){g=Number(h.toString().charAt(0)),l+=h.toString().charAt(0);for(let e=1;e<h.toString().length;e++)e%2==0&&(l+=" + "+h.toString().charAt(e),g+=Number(h.toString().charAt(e)));l+=" = "+g+" <br> "}else{g=Number(h.toString().charAt(1)),l+=h.toString().charAt(1);for(let e=3;e<h.toString().length;e++)e%2==1&&(l+=" + "+h.toString().charAt(e),g+=Number(h.toString().charAt(e)));l+=" = "+g+"<br> "}l+="la différence entre la somme des chiffres de rangs pairs et celle des chiffres de rangs impairs vaut ",l+=g-b==0?g-b+", ":`${Math.abs(g-b)} qui est un multiple de 11, `,l+="<br>",l+=` cela signifie que ${(0,n.x9Z)(h)} est divisible par 11, il admet donc au moins trois diviseurs qui sont 1, 11 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(h)+" n'est donc pas premier."),d="non";break;case 6:f=(0,n.nSR)(0,24),S=(0,n.nSR)(0,24),$=e[f],C=e[S],h=$+"$\\times$"+C,m=h,l=`${h} est le produit de ${$} et de ${C}, il admet donc au moins `,l+=$===C?`trois divisieurs qui sont 1, ${$} et lui-même ${h}=${(0,n.x9Z)($*C)}, `:`quatre diviseurs qui sont 1, ${$}, ${C} et lui-même ${h}=${(0,n.x9Z)($*C)}, `,l+=(0,n.PH8)(`${h} = `+(0,n.x9Z)($*C)+" n'est donc pas premier."),d="non";break;case 7:for(p=(0,n.nSR)(0,e.length-1),h=e[p],m=h+"",p=0,A=[];e[p]**2<h;)A.push(e[p]),p++;l=`Testons la divisibilité de ${h} par tous les nombres premiers inférieurs à $\\sqrt{${h}}$, c'est à dire par les nombres `,l+=A[0];for(let e=1;e<A.length;e++)l+=", "+A[e];l+=".",l+=`<br> Aucun de ces nombres premiers ne divise ${h}, `,d="oui"}(this.interactif||r.Do.isAmc)&&(this.autoCorrection[Z]={},this.autoCorrection[Z].options={ordered:!0},this.autoCorrection[Z].enonce=`${m}\n`,this.autoCorrection[Z].propositions=[{texte:"est premier",statut:"non"!==d},{texte:"n'est pas premier",statut:"oui"!==d}],this.interactif&&(m+=(0,o.l3)(this,Z).texte)),-1===this.listeQuestions.indexOf(m)&&(this.listeQuestions.push(m),this.listeCorrections.push(l),Z++),P++}(0,n.K1R)(this)}}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=98479.c9f380d28e0b09ac3c74.js.map