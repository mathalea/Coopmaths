"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[97643,25523],{97643:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>h,interactifReady:()=>l,interactifType:()=>u,amcReady:()=>c,amcType:()=>b,default:()=>m});var s=t(25523),n=t(25482),o=t(71250),r=t(22380),a=t(11945);const h="Lire l’abscisse entière d’un point (grands nombres)",l=!0,u="mathLive",c=!0,b="AMCOpen";function m(){s.default.call(this),this.consigne="Lire l'abscisse de chacun des points suivants.",this.nbQuestions=3,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.sup=4,this.interactif=!1,this.nouvelleVersion=function(i){let e;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.contenu="",this.contenuCorrection="",e=4===parseInt(this.sup)?(0,n.SRM)([1,2,3],this.nbQuestions):(0,n.SRM)([parseInt(this.sup)],this.nbQuestions);const t=[];for(let s,h,l,u,c,b,m,p,C=0,f="",d="",x=0;C<this.nbQuestions&&x<50;){switch(this.autoCorrection[3*C]={propositions:[{statut:4,feedback:""}]},this.autoCorrection[3*C+1]={propositions:[{statut:4,feedback:""}]},this.autoCorrection[3*C+2]={propositions:[{statut:4,feedback:""}]},h=(0,n.Gag)(3*C+1),l=(0,n.Gag)(3*C+2),u=(0,n.Gag)(3*C+3),e[C]){case 1:s=1e3*(0,n.nSR)(1,9),p=.001;break;case 2:s=1e4*(0,n.nSR)(5,15),p=1e-4;break;case 3:s=1e5*(0,n.nSR)(35,85),p=1e-5}c=(0,n.n0o)((0,n.nSR)(0,27)/10),b=(0,n.n0o)((0,n.nSR)(33,47)/10),m=(0,n.n0o)((0,n.nSR)(53,67)/10),t[2*C]=(0,o.oqt)({Unite:4,Min:0,Max:7.1,axeStyle:"->",pointTaille:5,pointStyle:"x",labelsPrincipaux:!1,thickSec:!0,step1:10,labelListe:[[0,`${(0,n.euh)(s)}`],[1,`${(0,n.euh)((0,n.n0o)(s+1/p))}`]],pointListe:[[c,h],[b,l],[m,u]]}),t[2*C+1]=(0,o.oqt)({Unite:4,Min:0,Max:7.1,axeStyle:"->",pointTaille:5,pointStyle:"x",labelsPrincipaux:!1,thickSec:!0,step1:10,labelListe:[[c,(0,n.euh)((0,n.n0o)(c/p+s))],[b,(0,n.euh)((0,n.n0o)(b/p+s))],[m,(0,n.euh)((0,n.n0o)(m/p+s))]],pointListe:[[c,h],[b,l],[m,u]]}),f=(0,o.iR9)({xmin:-2,ymin:-1,xmax:30,ymax:1,pixelsParCm:20,scale:.5},t[2*C]),d=(0,o.iR9)({xmin:-2,ymin:-2,xmax:30,ymax:2,pixelsParCm:20,scale:.5},t[2*C+1]),this.interactif&&r.Do.isHtml?((0,a.Iq)(this,3*C,(0,n.n0o)(c/p+s)),(0,a.Iq)(this,3*C+1,(0,n.n0o)(b/p+s)),(0,a.Iq)(this,3*C+2,(0,n.n0o)(m/p+s)),f+="<br>"+(0,a.G5)(this,3*C,"inline largeur75",{texte:h}),f+="<br>"+(0,a.G5)(this,3*C+1,"inline largeur75",{texte:l}),f+="<br>"+(0,a.G5)(this,3*C+2,"inline largeur75",{texte:u})):r.Do.isAmc&&(this.autoCorrection[C].enonce=f,this.autoCorrection[C].propositions[0].texte=d),-1===this.listeQuestions.indexOf(f)&&(this.listeQuestions.push(f),this.listeCorrections.push(d),C++),x++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Milliers\n2 : Dizaines de mille\n3 : Centaines de mille\n4 : Mélange"]}},25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=97643.08ff136aa23f5c4b413a.js.map