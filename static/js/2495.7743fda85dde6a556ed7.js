(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2495,6969],{22495:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>o,default:()=>n});var s=i(66969),r=i(55339);const o="Décomposition en facteurs premiers d’un entier";function n(){s.default.call(this),this.sup=1,this.titre=o,this.consigne="À l'aide de la calculatrice, décomposer pas à pas les nombres entiers en produit de facteurs premiers.",sortieHtml?this.spacing=3:this.spacing=2,sortieHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.listePackages="bclogo",this.nouvelleVersion=function(e){let t;sortieHtml&&(this.boutonAide=(0,r.apm)(e,"assets/pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire"),this.boutonAide+=(0,r.MJ0)("conteMathsNombresPremiers","/videos/LesNombresPremiers.mp4","Petit conte mathématique - Les Nombres Premiers","Intro Vidéo")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let i=[1,2,3];i=(0,r.TVQ)(i);let s=(0,r.bqK)(i,this.nbQuestions),o="Cette liste des nombres premiers inférieurs à 100 pourra être utile : <br>"+(0,r.hmQ)(100)[0];for(let h=1;h<(0,r.hmQ)(100).length;h++)o+=", "+(0,r.hmQ)(100)[h];o+=".",this.introduction=(0,r.KUN)(o,"nombres","Coup de pouce");for(let h,u,a=0,c=0;a<this.nbQuestions&&c<50;){switch(t=s[a],t){case 1:let e=(0,r.nSR)(3,5),t=11,i=(0,r.hmQ)(t).length-1,s=[],o=[];for(let n=0;n<e;n++){for(let e=0;e<n;e++)o.push(s[e]);s[n]=(0,r.nSR)(0,i,o)}let a=[];for(let n=0;n<s.length;n++)a[n]=(0,r.hmQ)(t)[s[n]];a.sort((function(e,t){return e-t}));let c=[];for(let n=0;n<s.length;n++)c[n]=(0,r.nSR)(1,2);h="À l'aide de la calculatrice, décomposer ";let m=1;for(let r=0;r<s.length;r++)for(let e=0;e<c[r];e++)m*=a[r];let $=Math.trunc(Math.sqrt(m));h+=`$${(0,r.euh)(m)}$ en produit de facteurs premiers.`,u=`Nous allons successivement tester la divisibilité de $${(0,r.euh)(m)}$ par tous les nombres premiers inférieurs à `,u+=`$${(0,r.euh)(m)}$ en commençant par 2, 3, 5, 7, ...<br>`,u=`Il est suffisant de tester la divisibilité de $${(0,r.euh)(m)}$ par tous les nombres premiers inférieurs ou égaux à $\\sqrt{${(0,r.euh)(m)}}$ c'est à dire inférieurs à $${(0,r.euh)($)}$.<br>`,u+="Ce sont les nombres de la liste : <br>",u+=(0,r.hmQ)($)[0]+" ; ";for(let n=1;n<(0,r.hmQ)($).length;n++)u+=(0,r.hmQ)($)[n],n!=(0,r.hmQ)($).length-1?u+=" ; ":u+=".",n%15==0&&(u+="<br>");u+="<br>";var n=(0,r.AeM)(m),l=m;for(let h=0;h<n.length;h++)u+=`$${(0,r.euh)(l)}\\div${(0,r.b1)(n[h])} = ${(0,r.euh)(l/n[h])}$<br>`,l/=n[h];u+=`Finalement on obtient la décomposition suivante : $ ${(0,r.euh)(m)} = `,1==c[0]?u+=`${a[0]}`:u+=`${a[0]}^{${c[0]}}`;for(let r=1;r<a.length;r++)1==c[r]?u+=`\\times ${a[r]}`:u+=`\\times ${a[r]}^{${c[r]}}`;u+="$";break;case 2:let d=(0,r.nSR)(0,(0,r.MFT)(30,100).length-1),b=(0,r.nSR)(0,(0,r.MFT)(30,100).length-1,d),p=(0,r.MFT)(30,100)[d],f=(0,r.MFT)(30,100)[b];if(p>f){let e=p;p=f,f=e}h=`À l'aide de la calculatrice, décomposer $${(0,r.euh)(p*f)}$ en produit de facteurs premiers.`;let g=Math.trunc(Math.sqrt(p*f));u=`Il est suffisant de tester la divisibilité de $${(0,r.euh)(p*f)}$ par tous les nombres premiers inférieurs ou égaux à $\\sqrt{${(0,r.euh)(p*f)}}$ c'est à dire inférieurs à $${(0,r.euh)(g)}$.<br>`,u+="Ce sont les nombres de la liste suivante : <br>$",u+=(0,r.hmQ)(g)[0];for(let n=1;n<(0,r.hmQ)(g).length;n++)u+="; "+(0,r.hmQ)(g)[n];u+=".$<br>",n=(0,r.AeM)(p*f),l=p*f;for(let h=0;h<n.length;h++)u+=`$${(0,r.euh)(l)}\\div${(0,r.b1)(n[h])} = ${(0,r.euh)(l/n[h])}$<br>`,l/=n[h];u+=` D'où $${(0,r.euh)(p*f)} = ${(0,r.euh)(p)}\\times${(0,r.euh)(f)}$.`;break;case 3:let C=(0,r.nSR)(0,(0,r.MFT)(1e3,2e3).length-1),Q=(0,r.MFT)(1e3,2e3)[C],M=Math.trunc(Math.sqrt(Q));h=`À l'aide de la calculatrice, décomposer $${(0,r.euh)(Q)}$ en produit de facteurs premiers.`,u=`En testant la divisibilité de $${(0,r.euh)(Q)}$ par tous les nombres premiers inférieurs ou égaux à $${M}$`,u+=" c'est à dire les nombre de la liste $",u+=(0,r.hmQ)(M)[0];for(let n=1;n<(0,r.hmQ)(M).length;n++)u+="; "+(0,r.hmQ)(M)[n];u+="$, ",u+=`on se rend compte que $${(0,r.euh)(Q)}$ est un nombre premier donc `,u+=`$${(0,r.euh)(Q)} = ${(0,r.euh)(Q)}$.`}-1==this.listeQuestions.indexOf(h)&&(this.listeQuestions.push(h),this.listeCorrections.push(u),a++),c++}(0,r.K1R)(this)}}},66969:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=2495.7743fda85dde6a556ed7.js.map