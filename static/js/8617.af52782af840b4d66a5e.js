(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8617,7567],{78617:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>o,default:()=>r});var t=i(67567),n=i(24477);const o="Décomposer un nombre décimal (nombre de..., chiffre de...)";function r(){t.default.call(this),this.titre=o,this.consigne="Compléter les phrases suivantes.",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[1,2,(0,n.q$q)([3,4,5]),(0,n.q$q)([6,7,8]),(0,n.q$q)([9,10]),(0,n.q$q)([11,12])],s=(0,n.SRM)(e,this.nbQuestions),i=(0,n.nSR)(1,9),t=(0,n.nSR)(0,9,[i]),o=(0,n.nSR)(0,9,[i,t]),r=(0,n.nSR)(0,9,[i,t,o]),a=(0,n.nSR)(0,9,[i,t,o,r]),c=(0,n.nSR)(0,9,[i,t,o,r,a]),h=(0,n.nSR)(1,9,[i,t,o,r,a,c]),l=i.toString()+""+t.toString()+o.toString()+r.toString()+","+a.toString()+c.toString()+h;this.consigne=`On considère le nombre $${l}$. Compléter les phrases suivantes.`;for(let e,l,b=0,d=0;b<this.nbQuestions&&d<50;){switch(s[b]){case 1:e="La partie entière de ce nombre est : ",l=e+`$${(0,n.k$K)(1e3*i+100*t+10*o+r)}$`;break;case 2:e="La partie décimale de ce nombre est : ",l=e+`$${(0,n.k$K)(a/10+c/100+h/1e3)}$`;break;case 3:e="Le chiffre des dizaines de ce nombre est : ",l=e+`$${o}$`;break;case 4:e="Le chiffre des centaines de ce nombre est : ",l=e+`$${t}$`;break;case 5:e="Le chiffre des miliers de ce nombre est : ",l=e+`$${i}$`;break;case 6:e="Le chiffre des dixièmes de ce nombre est : ",l=e+`$${a}$`;break;case 7:e="Le chiffre des centièmes de ce nombre est : ",l=e+`$${c}$`;break;case 8:e="Le chiffre des millièmes de ce nombre est : ",l=e+`$${h}$`;break;case 9:e="Le nombre de dizaines de ce nombre est : ",l=e+`$${(0,n.k$K)(o+10*t+100*i)}$`;break;case 10:e="Le nombre de centaines de ce nombre est : ",l=e+`$${(0,n.k$K)(t+10*i)}$`;break;case 11:e="Le nombre de dixièmes de ce nombre est : ",l=e+`$${(0,n.k$K)(a+10*r+100*o+1e3*t+1e4*i)}$`;break;case 12:e="Le nombre de centièmes de ce nombre est : ",l=e+`$${(0,n.k$K)(c+10*a+100*r+1e3*o+1e4*t+1e5*i)}$`}l+=".",e+="\\ldots",-1==this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(l),b++),d++}(0,n.K1R)(this)}}},67567:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})}}]);