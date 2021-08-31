"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[73600,17007],{73600:(i,t,e)=>{e.r(t),e.d(t,{amcReady:()=>h,amcType:()=>l,interactifReady:()=>u,interactifType:()=>c,titre:()=>m,default:()=>b});var s=e(17007),n=e(66170),o=e(30169),a=e(92329),r=e(75664);const h=!0,l="qcmMono",u=!0,c="qcm",m="Mesurer un angle";function b(){s.default.call(this),this.consigne="",this.nbQuestions=2,this.nbQuestionsModifiable=!0,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.video="TEzu9uky56M",this.nouvelleVersion=function(i){let t,e,s,h,l,u,c,m,b,d,x,C,g,p;this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];const f=[];let $,M,y,Q,q,A,k,D,F;for(let R=0;R<this.nbQuestions;R++)f.push((0,o.q$q)([-1,1])),t=1===this.sup?10*(0,o.nSR)(2,16,9):2===this.sup?5*(0,o.nSR)(4,32,18):(0,o.nSR)(20,160,90),e=(0,o.nSR)(-180,180),t=f[R]*t,u=[(0,o.q$q)(["x","y","z","t"]),(0,o.Gag)((0,o.nSR)(1,16)),(0,o.q$q)(["s","u","v","w"])],c=this.interactif?`Estime la mesure de l'angle $\\widehat{${u[0]+u[1]+u[2]}}$ sans instrument.<br>`:`Mesure l'angle $\\widehat{${u[0]+u[1]+u[2]}}$.<br>`,b=(0,a.xmu)(0,0),d=(0,a.xmu)(6,0),d=(0,a.Wnp)(d,b,e),h=(0,a.QNZ)(u[0],(0,a.$7o)(b,(0,a.xcw)(d,b,.95),90*f[R],.1),"milieu","black",1,"middle",!0),g=(0,a.H2X)(b,d),x=(0,a.Wnp)(d,b,t),p=(0,a.Wnp)(d,b,t/2),s=(0,a.QNZ)(u[1],(0,a.T2s)(b,p,-.5),"milieu","black",1,"middle",!0),l=(0,a.QNZ)(u[2],(0,a.$7o)(b,(0,a.xcw)(x,b,.95),90*-f[R],.1),"milieu","black",1,"middle",!0),C=(0,a.H2X)(b,x),$=(0,a.BD1)(b,d,x),M=(0,a.DQC)(d,b,x),F=(0,a.DQC)(d,b,x,"black",1.5," "),m="",y=Math.min(b.x,x.x,d.x)-1,Q=Math.max(b.x,x.x,d.x)+1,q=Math.min(b.y,x.y,d.y)-1,A=Math.max(b.y,x.y,d.y)+1,n.Do.fenetreMathalea2d=[y,q,Q,A],k=[g,C,$,s,h,l,F],D=[g,C,$,s,h,l,M],c+=(0,a.iR9)({xmin:y,ymin:q,xmax:Q,ymax:A,pixelsParCm:20,scale:.8},k),m+=(0,a.iR9)({xmin:y,ymin:q,xmax:Q,ymax:A,pixelsParCm:20,scale:.7},D),this.autoCorrection[R]={},this.autoCorrection[R].enonce=`${c}\n`,this.autoCorrection[R].propositions=[{texte:`$${Math.abs(t)}\\degree$`,statut:!0},{texte:`$${Math.abs(180-t)}\\degree$`,statut:!1},{texte:`$${Math.abs(t/2)}\\degree$`,statut:!1},{texte:`$${Math.abs(Math.round((180+t)/2))}\\degree$`,statut:!1},{texte:"$180\\degree$",statut:!1},{texte:"$90\\degree$",statut:!1}],this.autoCorrection[R].options={ordered:!1,lastChoice:6},this.interactif&&(c+="<br>"+(0,r.l3)(this,R).texte),this.listeQuestions.push(c),this.listeCorrections.push(m);(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Précision de l'angle",3,"1 : Angle à 10°\n2 : Angle à 5°\n3 : Angle à 1°"]}},17007:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=73600.2430b176ca21788bf098.js.map