"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[38987,17007],{38987:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,default:()=>l});var s=t(17007),n=t(66170),r=t(30169),o=t(92329);const a="Résoudre un problème de proportionnalité à l’aide d’un graphique";function l(){let e;s.default.call(this),this.debug=!1,this.debug?this.nbQuestions=2:this.nbQuestions=1,this.titre=a,this.consigne="",this.nbCols=1,this.nbColsCorr=1,n.Do.isHtml?this.spacing=2:this.spacing=1,this.nouvelleVersion=function(){e=(this.debug,[1]),this.listeQuestions=[],this.listeCorrections=[];let i=(0,r.bqK)(e,this.nbQuestions);for(let e,t,s=0,n=0;s<this.nbQuestions&&n<50;){let a,l,u=(0,r.q$q)([1.2,1.4,1.6,1.8]),h=(0,r.q$q)([.6,.8,1.2]),c=[{lieu:"l'épicerie",prenom:(0,r.rV2)(),articles:"oranges",art_articles:"d'oranges",prix_unitaire:u,qte:"poids",qte_max:10,qte2:3,unite:"kg d'",legendeX:"poids en kg",legendeY:"prix en €",fig:{},fig_corr:{}},{lieu:"la boulangerie",prenom:(0,r.rV2)(),articles:"baguettes",art_articles:"de baguettes",prix_unitaire:h,qte:"nombre",qte_max:10,qte2:3,unite:"",legendeX:"quantité",legendeY:"prix en €",fig:{},fig_corr:{}}],p=c[(0,r.nSR)(0,c.length-1)],m=1,$=(0,r.q$q)([1,2,5]);1==$&&(l=(0,r.q$q)([.5,.2,.25]));let b=[a=(0,o.X4z)({xmin:0,ymin:0,ymax:p.qte_max*p.prix_unitaire+4,xmax:p.qte_max,xscale:m,yscale:$,legendeX:p.legendeX,legendeY:p.legendeY,grilleSecondaireVisible:!0,grilleSecondaireDistance:l,positionLegendeY:[.3,p.qte_max*p.prix_unitaire+4+.4]})],x=e=>(0,r.n0o)(p.prix_unitaire*e);b.push(x,(0,o.hhm)(x,0,p.qte_max,"black",1.5,a));let d=(0,o.iR9)({xmin:-m,ymin:-$,xmax:p.qte_max/m+3,ymax:(p.qte_max*p.prix_unitaire+4)/2+1,pixelsParCm:40},b);p.fig=d;let q=b,g=(0,o.xmu)(p.qte_max,0),_=(0,o.xmu)(p.qte_max,(0,r.n0o)(p.qte_max*p.prix_unitaire/$)),f=(0,o.EXn)(g,_,"red");f.epaisseur=2,f.pointilles=!0,f.styleExtremites="->";let C=(0,o.xmu)(0,(0,r.n0o)(p.qte_max*p.prix_unitaire/$)),k=(0,o.EXn)(_,C,"red");k.epaisseur=2,k.pointilles=!0,k.styleExtremites="->";let Q=(0,o.xmu)(p.qte2,0),y=(0,o.xmu)(p.qte2,(0,r.n0o)(p.qte2*p.prix_unitaire/$)),X=(0,o.EXn)(Q,y,"blue");X.epaisseur=2,X.pointilles=!0,X.styleExtremites="->";let E=(0,o.xmu)(0,(0,r.n0o)(p.qte2*p.prix_unitaire/$)),R=(0,o.EXn)(y,E,"blue");R.epaisseur=2,R.pointilles=!0,R.styleExtremites="->",q.push(f,k,X,R);let F=(0,o.iR9)({xmin:-m,ymin:-$,xmax:p.qte_max/m+3,ymax:(p.qte_max*p.prix_unitaire+4)/2+1,pixelsParCm:40},q);p.fig_corr=F;let A=0,D=0,P=[];switch(P.push({enonce:`\n          À ${p.lieu}, ${p.prenom} utilise le graphique ci-dessous pour indiquer le prix de ses ${p.articles} en fonction du ${p.qte} ${p.art_articles}.\n          <br>${p.fig}\n          <br> ${(0,r.bk1)(A++)} Justifier que c'est une situation de proportionnalité à l'aide du graphique.\n          <br> ${(0,r.bk1)(A++)} Quel est le prix de $${p.qte_max}$ ${p.unite}  ${p.articles}?\n          <br> ${(0,r.bk1)(A++)} Quel est le prix de $${p.qte2}$ ${p.unite}  ${p.articles}?\n          `,correction:`\n        <br> ${(0,r.bk1)(D++)} Ce graphique est une droite qui passe par l'origine.\n        <br> ${(0,r.pRK)("C'est donc bien le graphique d'une situation de proportionnalité.")}\n\n        <br> ${(0,r.bk1)(D++)} Par lecture graphique, en utilisant les pointillés rouges du graphe ci-dessous, ${(0,r.pRK)(`$${p.qte_max}$ ${p.unite}  ${p.articles} coûtent $${(0,r.i6h)((0,r.n0o)(p.qte_max*p.prix_unitaire))}$ €.`)}\n        <br> ${p.fig_corr}\n        <br> ${(0,r.bk1)(D++)} Pour $${p.qte2}$ ${p.unite}  ${p.articles}, la lecture graphique est moins facile, nous allons détailler deux méthodes.\n        <br><br> ${(0,r.HzX)("Première méthode par lecture graphique :")} \n        <br> Il faut prendre en compte que chaque petit carreau représente $${(0,r.i6h)(l*$)}$ € et utiliser les pointillés bleus.\n        <br><br> ${(0,r.HzX)("Seconde méthode en calculant une quatrième proportionnelle :")}\n        <br> $${p.qte_max}$ ${p.unite}  ${p.articles} coûtent $${(0,r.i6h)((0,r.n0o)(p.qte_max*p.prix_unitaire))}$ €\n        donc $${p.qte2}$ ${p.unite}  ${p.articles} coûtent : <br> $(${(0,r.i6h)((0,r.n0o)(p.qte_max*p.prix_unitaire))}$ € $\\div ${p.qte_max}$ ${p.articles} $)\\times (${p.qte2}$ ${p.articles})  $= ${(0,r.i6h)((0,r.n0o)(p.qte2*p.prix_unitaire))}$ €\n        <br><br>${(0,r.pRK)(`Quelle que soit la méthode utilisée, ${p.qte2} ${p.unite}  ${p.articles} coûtent $${(0,r.i6h)((0,r.n0o)(p.qte2*p.prix_unitaire))}$ €.`)}\n        `}),i[s]){case 1:e=`${P[0].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${P[0].correction}`,t=""):t=`${P[0].correction}`}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),s++),n++}(0,r.K1R)(this)}}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=38987.a694654d2c1f2ff8a1f2.js.map