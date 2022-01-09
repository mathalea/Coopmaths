"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[62453,25523],{62453:(i,t,e)=>{e.r(t),e.d(t,{amcReady:()=>h,amcType:()=>u,interactifReady:()=>l,interactifType:()=>c,titre:()=>m,default:()=>b});var s=e(25523),o=e(22380),n=e(25482),r=e(71250),a=e(11945);const h=!0,u="qcmMono",l=!0,c="qcm",m="Mesurer un angle";function b(){s.default.call(this),this.consigne="",this.nbQuestions=2,this.nbQuestionsModifiable=!0,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.video="TEzu9uky56M",this.nouvelleVersion=function(i){let t,e,s,h,u,l,c,m,b,d,C,x,p,g;this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const f=[];let $,M,y,Q,q,F,A,k,D;for(let R=0;R<this.nbQuestions;R++)f.push((0,n.q$q)([-1,1])),t=1===this.sup?10*(0,n.nSR)(2,16,9):2===this.sup?5*(0,n.nSR)(4,32,18):(0,n.nSR)(20,160,90),e=(0,n.nSR)(-180,180),t=f[R]*t,l=[(0,n.q$q)(["x","y","z","t"]),(0,n.Gag)((0,n.nSR)(1,16)),(0,n.q$q)(["s","u","v","w"])],c=this.interactif?`Estime la mesure de l'angle $\\widehat{${l[0]+l[1]+l[2]}}$ sans instrument.<br>`:`Mesure l'angle $\\widehat{${l[0]+l[1]+l[2]}}$.<br>`,b=(0,r.xmu)(0,0),d=(0,r.xmu)(6,0),d=(0,r.Wnp)(d,b,e),h=(0,r.QNZ)(l[0],(0,r.$7o)(b,(0,r.xcw)(d,b,.95),90*f[R],.1),"milieu","black",1,"middle",!0),p=(0,r.H2X)(b,d),C=(0,r.Wnp)(d,b,t),g=(0,r.Wnp)(d,b,t/2),s=(0,r.QNZ)(l[1],(0,r.T2s)(b,g,-.5),"milieu","black",1,"middle",!0),u=(0,r.QNZ)(l[2],(0,r.$7o)(b,(0,r.xcw)(C,b,.95),90*-f[R],.1),"milieu","black",1,"middle",!0),x=(0,r.H2X)(b,C),$=(0,r.BD1)(b,d,C),M=(0,r.DQC)(d,b,C),D=(0,r.DQC)(d,b,C,"black",1.5," "),m="",y=Math.min(b.x,C.x,d.x)-1,Q=Math.max(b.x,C.x,d.x)+1,q=Math.min(b.y,C.y,d.y)-1,F=Math.max(b.y,C.y,d.y)+1,o.Do.fenetreMathalea2d=[y,q,Q,F],A=[p,x,$,s,h,u,D],k=[p,x,$,s,h,u,M],c+=(0,r.iR9)({xmin:y,ymin:q,xmax:Q,ymax:F,pixelsParCm:20,scale:.8},A),m+=(0,r.iR9)({xmin:y,ymin:q,xmax:Q,ymax:F,pixelsParCm:20,scale:.7},k),this.autoCorrection[R]={},this.autoCorrection[R].enonce=`${c}\n`,this.autoCorrection[R].propositions=[{texte:`$${Math.abs(t)}\\degree$`,statut:!0},{texte:`$${Math.abs(180-t)}\\degree$`,statut:!1},{texte:`$${Math.abs(t/2)}\\degree$`,statut:!1},{texte:`$${Math.abs(Math.round((180+t)/2))}\\degree$`,statut:!1},{texte:"$180\\degree$",statut:!1},{texte:"$90\\degree$",statut:!1}],this.autoCorrection[R].options={ordered:!1,lastChoice:6},this.interactif&&(c+="<br>"+(0,a.l3)(this,R).texte),this.listeQuestions.push(c),this.listeCorrections.push(m);(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Précision de l'angle",3,"1 : Angle à 10°\n2 : Angle à 5°\n3 : Angle à 1°"]}},25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=62453.6317616eb9a3df834279.js.map