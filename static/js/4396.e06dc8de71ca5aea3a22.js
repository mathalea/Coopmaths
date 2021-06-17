(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4396,6969],{14396:(e,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>o,default:()=>n});var i=s(66969),r=s(55339);const o="Compter/lister les diviseurs d’un entier à partir de sa décomposition en facteurs premiers.";function n(){i.default.call(this),this.sup=1,this.titre=o,this.consigne="Sans la calculatrice, compter/lister les diviseurs d'un entier à partir de sa décomposition en facteurs premiers.",sortieHtml?this.spacing=2:this.spacing=1,sortieHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.nouvelleVersion=function(e){let t;sortieHtml&&(this.boutonAide=(0,r.apm)(e,"assets/pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire"),this.boutonAide+=(0,r.MJ0)("conteMathsNombresPremiers","/videos/LesNombresPremiers.mp4","Petit conte mathématique - Les Nombres Premiers","Intro Vidéo")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let s=(0,r.bqK)([1],this.nbQuestions);for(let i,o,n=0,l=0;n<this.nbQuestions&&l<50;){switch(t=s[n],t){case 1:i="Lister/compter les diviseurs d'un entier à partir de sa décomposition en facteurs premiers";let e=(0,r.nSR)(3,3),t=11,s=(0,r.hmQ)(t).length-1,n=[],l=[];for(let i=0;i<e;i++){for(let e=0;e<i;e++)l.push(n[e]);n[i]=(0,r.nSR)(0,s,l)}let a=[];for(let i=0;i<n.length;i++)a[i]=(0,r.hmQ)(t)[n[i]];a.sort((function(e,t){return e-t}));let u=[];for(let i=0;i<n.length;i++)u[i]=(0,r.nSR)(1,2);i="";let h=1;for(let i=0;i<n.length;i++)for(let e=0;e<u[i];e++)h*=a[i];i+=`La décomposition en facteurs premiers de $${(0,r.euh)(h)}$ est : $`,1==u[0]?i+=`${a[0]}`:i+=`${a[0]}^{${u[0]}}`;for(let r=1;r<a.length;r++)1==u[r]?i+=`\\times ${a[r]}`:i+=`\\times ${a[r]}^{${u[r]}}`;i+="$, <br>",i+=(0,r.bk1)(0)+" Compléter le tableau ci-dessous.",sortieHtml||(i+="$\\medskip$");let $,c=[],m=[],p=["\\times"];for(let i=0;i<u[0]+1;i++)c.push("\\phantom{plusLarge}"+a[0]+"^{"+i+"}\\phantom{plusLarge}");for(let i=0;i<u[1]+1;i++)for(let e=0;e<u[2]+1;e++)p.push(a[1]+"^{"+i+"}\\times"+a[2]+"^{"+e+"}");$=c,p.shift(),c=p,p=["\\times"].concat($);for(let i=0;i<u[0]+1;i++)for(let e=1;e<(u[1]+1)*(u[2]+1)+1;e++)m.push("");i+="<br>",i+=(0,r.DDO)(p,c,m),sortieHtml||(i+="$\\medskip$"),i+="<br>",i+=(0,r.bk1)(1)+` En déduire le nombre de diviseurs de $${(0,r.euh)(h)}$.<br>`,i+=(0,r.bk1)(2)+` Enfin, dresser la liste des diviseurs de $${(0,r.euh)(h)}$.<br>`,o=`Avec la décomposition en facteurs premiers de $${(0,r.euh)(h)}$ qui est : $`,1==u[0]?o+=`${a[0]}`:o+=`${a[0]}^{${u[0]}}`;for(let i=1;i<a.length;i++)1==u[i]?o+=`\\times ${a[i]}`:o+=`\\times ${a[i]}^{${u[i]}}`;o+="$, <br>",o+=(0,r.bk1)(0)+" Le tableau donne :";let d,f,b=[],C=[],g=[],v=["\\times"],k=[1];for(let i=0;i<u[0]+1;i++)b.push(a[0]+"^{"+i+"}"),C.push(a[0]**i);for(let i=0;i<u[1]+1;i++)for(let e=0;e<u[2]+1;e++)v.push(a[1]+"^{"+i+"}\\times"+a[2]+"^{"+e+"}"),k.push(a[1]**i*a[2]**e);d=b,f=C,v.shift(),k.shift(),b=v,C=k,v=["\\times"].concat(d),k=[1].concat(f);for(let i=0;i<(u[1]+1)*(u[2]+1)+1;i++)for(let e=1;e<u[0]+2;e++)g.push(b[i]+"\\times"+v[e]+"="+(0,r.b1)((0,r.euh)(C[i]*k[e])));o+="<br>",o+=(0,r.DDO)(v,b,g),o+="<br>",o+=(0,r.bk1)(1)+` $${(0,r.euh)(h)}$ a donc `,o+=`$(${u[0]}+1)\\times(${u[1]}+1)\\times(${u[2]}+1) = `,o+=`${u[0]+1}\\times${u[1]+1}\\times${u[2]+1} = `,o+=(u[0]+1)*(u[1]+1)*(u[2]+1)+"$ diviseurs.<br>",o+="En effet, dans la décomposition apparait : ",o+=` <br> - Le facteur premier $${a[0]}$ avec la multiplicité $${u[0]}$`,o+=`, le facteur $${a[0]}$ apparait donc sous les formes : `;for(let i=0;i<u[0];i++)o+=`$${a[0]}^{`+i+"}$ ou ";o+=`$${a[0]}^{`+u[0]+`}$ d'où le facteur $(${u[0]}+1)$.`,o+=` <br> - Le facteur premier $${a[1]}$ avec la multiplicité $${u[1]}$`,o+=`, le facteur $${a[1]}$ apparait donc sous les formes : `;for(let i=0;i<u[1];i++)o+=`$${a[1]}^{`+i+"}$ ou ";o+=`$${a[1]}^{`+u[1]+`}$ d'où le facteur $(${u[1]}+1)$.`,o+=` <br> - Le facteur premier $${a[2]}$ avec la multiplicité $${u[2]}$`,o+=`, le facteur $${a[2]}$ apparait donc sous les formes : `;for(let i=0;i<u[2];i++)o+=`$${a[2]}^{`+i+"}$ ou ";o+=`$${a[2]}^{`+u[2]+`}$ d'où le facteur $(${u[2]}+1)$.`,o+="<br>",o+=(0,r.bk1)(2)+` Enfin, voici la liste des $${(u[0]+1)*(u[1]+1)*(u[2]+1)}$ diviseurs de $${(0,r.euh)(h)}$ issus du tableau ci-dessus : `,o+="$1";for(let i=1;i<(0,r.coU)(h).length;i++)o+="\\text{ ; }"+(0,r.euh)((0,r.coU)(h)[i]);o+=".$"}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(o),n++),l++}(0,r.K1R)(this)}}},66969:(e,t,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>i})}}]);
//# sourceMappingURL=4396.e06dc8de71ca5aea3a22.js.map