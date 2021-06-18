(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[18186,71129],{18186:(t,i,s)=>{"use strict";s.r(i),s.d(i,{titre:()=>m,amcType:()=>l,amcReady:()=>c,interactifReady:()=>$,interactifType:()=>u,default:()=>b});var o=s(71129),n=s(62259),e=s(63861),r=s(55802),h=s(10229),a=s(62733);const m="Calculer une longueur avec le théorème de Pythagore",l=5,c=!0,$=!0,u="mathLive";function b(){o.default.call(this),this.titre=m,this.amcReady=c,this.amcType=l,this.interactifReady=$,this.interactif=!0,this.interactifType=u,this.nbQuestions=3,this.nbCols=3,this.nbColsCorr=1,this.typeExercice="Calculer",this.video="M9sceJ8gzNc",this.nouvelleVersion=function(){this.sup&&(this.sup=parseInt(this.sup)),this.listeQuestions=[],this.listeCorrections=[];let t=[];const i=[];let s;1===this.sup?this.consigne="Dans chaque cas, donner l'égalité de Pythagore.":2===this.sup?this.consigne="Dans chaque cas, compléter l'égalité en utilisant le théorème de Pythagore.":this.consigne="Dans chaque cas, calculer la longueur manquante (si nécessaire, l'arrondir au millimètre près).",2!==this.sup&&"Calculer"!==this.typeExercice||(t=(0,e.SRM)(["AB","BC","AC"],this.nbQuestions));for(let o,m,l=0,c=0;l<this.nbQuestions&&c<50;){o="",m="";const $=(0,r.xmu)(0,0),u=(0,r.xmu)((0,e.n0o)((0,e.nSR)(22,50)/10),0),b=(0,r.$7o)(u,$,90,(0,e.n0o)((0,e.nSR)(22,50)/10)/(0,r.InT)($,u)),p=(0,r.R_h)($,u,b);p.isVisible=!1;const f=(0,r.Wnp)(p,$,(0,e.nSR)(0,360)),C=f.listePoints[0],d=f.listePoints[1],g=f.listePoints[2],q=(0,r.lvA)(d,C,g),x=Math.min(C.x,d.x,g.x)-1,y=Math.min(C.y,d.y,g.y)-1,M=Math.max(C.x,d.x,g.x)+1,D=Math.max(C.y,d.y,g.y)+1,A=(0,e.wnJ)(3,i);i.push(A);const I=(0,r.NVL)(f,A),k=(0,r.Y2F)(d,C),v=(0,r.Y2F)(C,g),F=(0,r.Y2F)(g,d),Q=(0,r.InT)(C,d,1),H=(0,r.InT)(C,g,1),R=(0,r.InT)(d,g,1),T=[q,f,I];if("Calculer"===this.typeExercice&&"AB"===t[l]&&T.push(v,F),"Calculer"===this.typeExercice&&"BC"===t[l]&&T.push(v,k),"Calculer"===this.typeExercice&&"AC"===t[l]&&T.push(k,F),n.Do.isHtml||(o="~\\\\"),o+=(0,r.iR9)({xmin:x,xmax:M,ymin:y,ymax:D,scale:.6,style:"display: block"},T),2===this.sup&&("AB"===t[l]&&this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+d.nom}^2=\\ldots$`),"BC"===t[l]&&this.interactif&&n.Do.isHtml&&(o+=`<br>$${d.nom+g.nom}^2=\\ldots$`),"AC"===t[l]&&this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+g.nom}^2=\\ldots$`)),n.Do.isHtml||n.Do.isAmc||l===this.nbQuestions-1||(o+="\\columnbreak"),m=`Le triangle $${A}$ est rectangle en $${C.nom}$ donc d'après le théorème de Pythagore, on a : `,m+=`$${d.nom+g.nom}^2=${C.nom+d.nom}^2+${C.nom+g.nom}^2$`,2===this.sup&&("AB"===t[l]&&(m+=` d'où $${C.nom+d.nom}^2=${d.nom+g.nom}^2-${C.nom+g.nom}^2$.`),"BC"===t[l]&&(m+="."),"AC"===t[l]&&(m+=` d'où $${C.nom+g.nom}^2=${d.nom+g.nom}^2-${C.nom+d.nom}^2$.`)),"Calculer"===this.typeExercice){if("AB"===t[l]){let t;m+=` donc $${C.nom+d.nom}^2=${d.nom+g.nom}^2-${C.nom+g.nom}^2$`,m+=`<br> $${C.nom+d.nom}^2=${(0,e.euh)(R)}^2-${(0,e.euh)(H)}^2=${(0,e.k$K)(R**2-H**2)}$`,m+=`<br> $${C.nom+d.nom}=\\sqrt{${(0,e.k$K)(R**2-H**2)}}$`,(0,e.n0o)(Math.sqrt(R**2-H**2),1)===(0,e.n0o)(Math.sqrt(R**2-H**2),5)?(t=(0,e.euh)((0,e.n0o)(Math.sqrt(R**2-H**2),1)),s=(0,e.vbX)(Math.sqrt(R**2-H**2),1),m+=`<br> $${C.nom+d.nom}=${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+d.nom}=$`+(0,h.G5)(this,l,"longueur"))):(t=(0,e.euh)((0,e.n0o)(Math.sqrt(R**2-H**2),1)),s=(0,e.vbX)(Math.sqrt(R**2-H**2),1),m+=`<br> $${C.nom+d.nom}\\approx${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+d.nom}\\approx$`+(0,h.G5)(this,l,"longueur"))),n.Do.isAmc?(0,h.Iq)(this,l,s):(0,h.Iq)(this,l,new a.Z(s,"cm"),{formatInteractif:"longueur"})}if("BC"===t[l]){const t=(0,e.euh)((0,e.n0o)(Math.sqrt(Q**2+H**2),1));s=(0,e.vbX)(Math.sqrt(Q**2+H**2),1),m+=`<br> $${d.nom+g.nom}^2=${(0,e.euh)(Q)}^2+${(0,e.euh)(H)}^2=${(0,e.k$K)(Q**2+H**2)}$`,m+=`<br> $${d.nom+g.nom}=\\sqrt{${(0,e.k$K)(Q**2+H**2)}}$`,(0,e.n0o)(Math.sqrt(Q**2+H**2),1)===(0,e.n0o)(Math.sqrt(Q**2+H**2),5)?(m+=`<br> $${d.nom+g.nom}=${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${d.nom+g.nom}=$`+(0,h.G5)(this,l,"longueur"))):(m+=`<br> $${d.nom+g.nom}\\approx${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${d.nom+g.nom}\\approx$`+(0,h.G5)(this,l,"longueur"))),n.Do.isAmc?(0,h.Iq)(this,l,s):(0,h.Iq)(this,l,new a.Z(s,"cm"),{formatInteractif:"longueur"})}if("AC"===t[l]){const t=(0,e.euh)((0,e.n0o)(Math.sqrt(R**2-Q**2),1));s=(0,e.vbX)(Math.sqrt(R**2-Q**2),1),m+=` donc $${C.nom+g.nom}^2=${d.nom+g.nom}^2-${C.nom+d.nom}^2$`,m+=`<br> $${C.nom+g.nom}^2=${(0,e.euh)(R)}^2-${(0,e.euh)(Q)}^2=${(0,e.k$K)(R**2-Q**2)}$`,m+=`<br> $${C.nom+g.nom}=\\sqrt{${(0,e.k$K)(R**2-Q**2)}}$`,(0,e.n0o)(Math.sqrt(R**2-Q**2),1)===(0,e.n0o)(Math.sqrt(R**2-Q**2),5)?(m+=`<br> $${C.nom+g.nom}=${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+g.nom}=$`+(0,h.G5)(this,l,"longueur"))):(m+=`<br> $${C.nom+g.nom}\\approx${t}$ cm.`,this.interactif&&n.Do.isHtml&&(o+=`<br>$${C.nom+g.nom}\\approx$`+(0,h.G5)(this,l,"longueur"))),n.Do.isAmc?(0,h.Iq)(this,l,s):(0,h.Iq)(this,l,new a.Z(s,"cm"),{formatInteractif:"longueur"})}}-1===this.listeQuestions.indexOf(o)&&(this.listeQuestions.push(o),this.listeCorrections.push(m),l++),c++}(0,e.K1R)(this)}}},71129:(t,i,s)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}s.r(i),s.d(i,{default:()=>o})}}]);
//# sourceMappingURL=18186.ae202bda806332feb770.js.map