(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5842,5216],{35842:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>r,default:()=>a});var s=i(75216),n=i(89459),o=i(55339);const r="Déterminer si un triangle est rectangle ou pas.";function a(){s.default.call(this),this.titre=r,this.consigne="",this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.sup=3,n.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[];e=1==this.sup?(0,o.SRM)(["rectangle"],this.nbQuestions):2==this.sup?(0,o.SRM)(["pas_rectangle"],this.nbQuestions):(0,o.SRM)(["rectangle","pas_rectangle"],this.nbQuestions);let t=[[3,4,5],[5,12,13],[6,8,10],[7,24,25],[8,15,17],[9,12,15],[9,40,41],[10,24,26],[11,60,61],[12,16,20],[12,35,37],[13,84,85],[14,48,50],[15,20,25],[15,36,39],[16,30,34],[16,63,65],[18,24,30],[18,80,82],[20,21,29],[20,48,52],[21,28,35],[21,72,75],[24,32,40],[24,45,51],[24,70,74],[25,60,65],[27,36,45],[28,45,53],[28,96,100],[30,40,50],[30,72,78],[32,60,68],[33,44,55],[33,56,65],[35,84,91],[36,48,60],[36,77,85],[39,52,65],[39,80,89],[40,42,58],[40,75,85],[42,56,70],[45,60,75],[48,55,73],[48,64,80],[51,68,85],[54,72,90],[57,76,95],[60,63,87],[60,80,100],[65,72,97]],i=[];for(let s,n,r,a,h,l,$,u,c,g,b,m=0,p=0;m<this.nbQuestions&&p<50;){if(c=(0,o.wnJ)(3,i),i.push(c),l=c[0],$=c[1],u=c[2],g=(0,o.q$q)(t),(0,o.XzT)(t,g),r=g[0],a=g[1],h=g[2],"pas_rectangle"==e[m])for(h=(0,o.nSR)(Math.max(h-3,a+1),h+3);r**2+a**2==h**2;)h=(0,o.nSR)(Math.max(h-3,a+1),h+3);switch(r>9&&(0,o.q$q)([!0,!0,!0,!1])&&(r=(0,o.n0o)(r/10),a=(0,o.n0o)(a/10),h=(0,o.n0o)(h/10)),b=(0,o.nSR)(1,3),b){case 1:s=`Le triangle $${c}$ est tel que $${l+$}=${(0,o.euh)(h)}$ cm, $${l+u}=${(0,o.euh)(a)}$ cm et $${$+u}=${(0,o.euh)(r)}$ cm.`;break;case 2:s=`Le triangle $${c}$ est tel que  $${$+u}=${(0,o.euh)(r)}$ cm, $${l+u}=${(0,o.euh)(a)}$ cm et $${l+$}=${(0,o.euh)(h)}$ cm.`;break;case 3:s=`Le triangle $${c}$ est tel que $${l+u}=${(0,o.euh)(a)}$ cm, $${l+$}=${(0,o.euh)(h)}$ cm,  et $${$+u}=${(0,o.euh)(r)}$ cm.`}s+="<br>Ce triangle est-il rectangle ?",n=`Dans le triangle $${c}$, le plus grand côté est $[${l+$}]$.`,n+=`<br>$${l+$}^2=${(0,o.euh)(h)}^2=${(0,o.k$K)(h**2)}$`,n+=`<br>$${l+u}^2+${$+u}^2=${(0,o.euh)(a)}^2+${(0,o.euh)(r)}^2=${(0,o.k$K)(a**2+r**2)}$`,"rectangle"==e[m]?n+=`<br>On constate que $${l+$}^2=${l+u}^2+${$+u}^2$, l'égalité de Pythagore est vérifiée donc $${c}$ est rectangle en $${u}$.`:n+=`<br>On constate que $${l+$}^2\\not=${l+u}^2+${$+u}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${c}$ n'est pas rectangle.`,-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(n),m++),p++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Type de questions",3,"1 : Démontrer qu'un triangle est rectangle\n2 : Démontrer qu'un triangle n'est pas rectangle\n3 : Déterminer si un triangle est rectangle ou pas "]}},75216:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=5842.55918f351e077952f774.js.map