(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[255,6969],{255:(t,n,o)=>{"use strict";o.r(n),o.d(n,{titre:()=>h,default:()=>r});var s=o(66969),e=o(55339),i=o(44393);const h="Calculer une longueur avec le théorème de Pythagore";function r(){s.default.call(this),this.titre=h,this.nbQuestions=3,this.nbCols=3,this.nbColsCorr=1,this.typeExercice="Calculer",this.video="M9sceJ8gzNc",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let t=[],n=[];1==this.sup?this.consigne="Dans chaque cas, donner l'égalité de Pythagore.":2==this.sup?this.consigne="Dans chaque cas, compléter l'égalité en utilisant le théorème de Pythagore.":this.consigne="Dans chaque cas, calculer la longueur manquante.",2!=this.sup&&"Calculer"!=this.typeExercice||(t=(0,e.SRM)(["AB","BC","AC"],this.nbQuestions));for(let o,s,h=0,r=0;h<this.nbQuestions&&r<50;){o="",s="";let $=(0,i.xmu)(0,0),a=(0,i.xmu)((0,e.n0o)((0,e.nSR)(22,50)/10),0),m=(0,i.$7o)(a,$,90,(0,e.n0o)((0,e.nSR)(22,50)/10)/(0,i.InT)($,a)),l=(0,i.R_h)($,a,m);l.isVisible=!1;let c=(0,i.Wnp)(l,$,(0,e.nSR)(0,360)),u=c.listePoints[0],b=c.listePoints[1],C=c.listePoints[2],p=(0,i.lvA)(b,u,C),d=Math.min(u.x,b.x,C.x)-1,x=Math.min(u.y,b.y,C.y)-1,M=Math.max(u.x,b.x,C.x)+1,g=Math.max(u.y,b.y,C.y)+1,q=(0,e.wnJ)(3,n);n.push(q);let y=(0,i.NVL)(c,q),f=(0,i.Y2F)(b,u),A=(0,i.Y2F)(u,C),k=(0,i.Y2F)(C,b),Q=(0,i.InT)(u,b,1),B=(0,i.InT)(u,C,1),D=(0,i.InT)(b,C,1),P=[p,c,y];"Calculer"==this.typeExercice&&"AB"==t[h]&&P.push(A,k),"Calculer"==this.typeExercice&&"BC"==t[h]&&P.push(A,f),"Calculer"==this.typeExercice&&"AC"==t[h]&&P.push(f,k),sortieHtml||(o="~\\\\"),o+=(0,i.iR9)({xmin:d,xmax:M,ymin:x,ymax:g,scale:.6},P),2==this.sup&&("AB"==t[h]&&(o+=`<br>$${u.nom+b.nom}^2=\\ldots$`),"BC"==t[h]&&(o+=`<br>$${b.nom+C.nom}^2=\\ldots$`),"AC"==t[h]&&(o+=`<br>$${u.nom+C.nom}^2=\\ldots$`)),sortieHtml||h==this.nbQuestions-1||(o+="\\columnbreak"),s=`Le triangle $${q}$ est rectangle en $${u.nom}$ donc d'après le théorème de Pythagore, on a : `,s+=`$${b.nom+C.nom}^2=${u.nom+b.nom}^2+${u.nom+C.nom}^2$`,2==this.sup&&("AB"==t[h]&&(s+=` d'où $${u.nom+b.nom}^2=${b.nom+C.nom}^2-${u.nom+C.nom}^2$.`),"BC"==t[h]&&(s+="."),"AC"==t[h]&&(s+=` d'où $${u.nom+C.nom}^2=${b.nom+C.nom}^2-${u.nom+b.nom}^2$.`)),"Calculer"==this.typeExercice&&("AB"==t[h]&&(s+=` donc $${u.nom+b.nom}^2=${b.nom+C.nom}^2-${u.nom+C.nom}^2$`,s+=`<br> $${u.nom+b.nom}^2=${(0,e.euh)(D)}^2-${(0,e.euh)(B)}^2=${(0,e.k$K)(D**2-B**2)}$`,s+=`<br> $${u.nom+b.nom}=\\sqrt{${(0,e.k$K)(D**2-B**2)}}$`,(0,e.n0o)(Math.sqrt(D**2-B**2),1)==(0,e.n0o)(Math.sqrt(D**2-B**2),5)?s+=`<br> $${u.nom+b.nom}=${(0,e.euh)((0,e.n0o)(Math.sqrt(D**2-B**2),1))}$ cm.`:s+=`<br> $${u.nom+b.nom}\\approx${(0,e.euh)((0,e.n0o)(Math.sqrt(D**2-B**2),1))}$ cm.`),"BC"==t[h]&&(s+=`<br> $${b.nom+C.nom}^2=${(0,e.euh)(Q)}^2+${(0,e.euh)(B)}^2=${(0,e.k$K)(Q**2+B**2)}$`,s+=`<br> $${b.nom+C.nom}=\\sqrt{${(0,e.k$K)(Q**2+B**2)}}$`,(0,e.n0o)(Math.sqrt(Q**2+B**2),1)==(0,e.n0o)(Math.sqrt(Q**2+B**2),5)?s+=`<br> $${b.nom+C.nom}=${(0,e.euh)((0,e.n0o)(Math.sqrt(Q**2+B**2),1))}$ cm.`:s+=`<br> $${b.nom+C.nom}\\approx${(0,e.euh)((0,e.n0o)(Math.sqrt(Q**2+B**2),1))}$ cm.`),"AC"==t[h]&&(s+=` donc $${u.nom+C.nom}^2=${b.nom+C.nom}^2-${u.nom+b.nom}^2$`,s+=`<br> $${u.nom+C.nom}^2=${(0,e.euh)(D)}^2-${(0,e.euh)(Q)}^2=${(0,e.k$K)(D**2-Q**2)}$`,s+=`<br> $${u.nom+C.nom}=\\sqrt{${(0,e.k$K)(D**2-Q**2)}}$`,(0,e.n0o)(Math.sqrt(D**2-Q**2),1)==(0,e.n0o)(Math.sqrt(D**2-Q**2),5)?s+=`<br> $${u.nom+C.nom}=${(0,e.euh)((0,e.n0o)(Math.sqrt(D**2-Q**2),1))}$ cm.`:s+=`<br> $${u.nom+C.nom}\\approx${(0,e.euh)((0,e.n0o)(Math.sqrt(D**2-Q**2),1))}$ cm.`)),-1==this.listeQuestions.indexOf(o)&&(this.listeQuestions.push(o),this.listeCorrections.push(s),h++),r++}(0,e.K1R)(this)}}},66969:(t,n,o)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}o.r(n),o.d(n,{default:()=>s})}}]);
//# sourceMappingURL=255.6704eeb5ab8af53ff9d6.js.map