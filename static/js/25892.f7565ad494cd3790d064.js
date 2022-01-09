"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[25892,25523],{25892:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>h,interactifReady:()=>l,interactifType:()=>c,amcReady:()=>u,amcType:()=>m,default:()=>b});var s=e(71250),n=e(25482),o=e(25523),r=e(22380),a=e(11945);const h="Calculer l'aire de triangles",l=!0,c="mathLive",u=!0,m="AMCNum";function b(){o.default.call(this),this.interactifReady=l,this.interactifType=c,this.amcReady=u,this.amcType=m,this.titre=h,this.consigne="Calculer l'aire des 3 triangles suivants.",this.spacing=2,r.Do.isHtml?this.spacingCorr=3:this.spacingCorr=2,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.nbQuestionsModifiable=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nouvelleVersion=function(i){this.listeCorrections=[],this.listeQuestions=[],this.autoCorrection=[];const t=(0,n.TVQ)([5,6,7,8,9]),e=(0,n.TVQ)([3,4,5,6]),o=(0,n.bqK)(t,this.nbQuestions),r=(0,n.bqK)(e,this.nbQuestions);let h;const l=(0,s.xmu)(0,0);let c,u,m,b,C,x,f;const p=[],d=[];let g,y,F,Q,A="",v="";const M=(0,n.wnJ)(4*this.nbQuestions,"Q");for(let T=0;T<this.nbQuestions;T++)p.length=0,d.length=0,l.nom=M[4*T],c=(0,s.Wnp)((0,s.xmu)(o[T],0),l,(0,n.nSR)(-60,60),M[4*T+1]),f=T%3==2?(0,s.InT)(l,c)+(0,n.nSR)(6,9)/3:(0,n.n0o)((0,n.nSR)(6,10*(0,s.InT)(l,c)-6)/10),h=(0,s.G2v)(l,c,r[T],f,2),m=h.pied,m.nom=M[4*T+3],b=h.triangle,u=b.listePoints[2],u.nom=M[4*T+2],C=(0,s.uGk)(l,m,c,u),x=(0,s.EXn)(u,m),x.pointilles=2,g=Math.min(l.x,c.x,u.x,m.x)-1.5,y=Math.max(l.x,c.x,u.x,m.x)+1.5,F=Math.min(l.y,c.y,u.y,m.y)-2,Q=Math.max(l.y,c.y,u.y,m.y)+1.5,p.push(C[0],C[1],x,(0,s.gI5)((0,s.EXn)(c,l),"",1),(0,s.Y2F)(l,u,"black",.5),(0,s.Y2F)(u,c,"black",.5),(0,s.Y2F)(u,m,"black",.3),(0,s.lvA)(l,m,u)),d.push(C[0],C[1],x,(0,s.gI5)((0,s.EXn)(c,l),"",1),(0,s.Y2F)(u,m,"black",.3),(0,s.lvA)(l,m,u)),A=(0,s.iR9)({xmin:g,xmax:y,ymin:F,ymax:Q,pixelsParCm:20,scale:.5,mainlevee:!1},p)+"<br>",v=this.correctionDetaillee?(0,s.iR9)({xmin:g,xmax:y,ymin:F,ymax:Q,pixelsParCm:20,scale:.5,mainlevee:!1},d)+"<br>":"",v+=`$\\mathcal{A}_{${l.nom}${c.nom}${u.nom}}=\\dfrac{1}{2}\\times ${l.nom}${c.nom}\\times ${m.nom}${u.nom}=\\dfrac{1}{2}\\times${o[T]}~\\text{cm}\\times ${r[T]}~\\text{cm}=${(0,n.euh)((0,n.n0o)(o[T]*r[T]/2))}~\\text{cm}^2$`,(0,a.Iq)(this,T,(0,n.n0o)(o[T]*r[T]/2)),A+=(0,a.G5)(this,T),this.listeQuestions.push(A),this.listeCorrections.push(v);(0,n.K1R)(this)}}},25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=25892.f7565ad494cd3790d064.js.map