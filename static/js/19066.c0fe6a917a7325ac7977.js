"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[19066,25523],{25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},19066:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>h,dateDePublication:()=>a,interactifReady:()=>l,interactifType:()=>c,amcReady:()=>m,amcType:()=>b,default:()=>p});var t=s(25523),n=s(25482),o=s(71250),r=s(22380),u=s(11945);const h="Compter les points symétriques manquant",a="18/12/2021",l=!0,c="mathLive",m=!0,b="AMCNum";function p(){t.default.call(this),this.consigne="",this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.nouvelleVersion=function(){this.sup=(0,n.nSR)(1,2),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const i=[];let e;const s=[],t=[],h=[],a=["quad","quad","hexa","equi"];for(let l,c,m,b,p,d,f,C,x,g,q=0,y=0;q<this.nbQuestions&&y<50;){switch(a[0]=a[1+q%3],C=[],g=[],s.length=0,t.length=0,h.length=0,i.length=0,l=(0,o.Xuy)({xmin:0,ymin:0,xmax:6,ymax:6,type:"quad"}),C.push(l),(0,n.nSR)(1,2)){case 1:m=(0,o.VTK)((0,o.xmu)(3,0),(0,o.xmu)(3,6));break;case 2:m=(0,o.VTK)((0,o.xmu)(0,3),(0,o.xmu)(6,3))}for(m.epaisseur=2,m.color=r.Do.isHtml?"blue":"black",C.push(m),e=l.listeCoords.slice();e.length>1;){for(c=(0,o.Vj7)((0,o.xmu)(e[0][0],e[0][1]),m),b=1,p=!1;b<e.length&&!p;)(0,o.InT)(c,(0,o.xmu)(e[b][0],e[b][1]))<.5?p=!0:b++;p?(i.push((0,n.q$q)([!0,!1])?[e[0],e[b]]:[e[b],e[0]]),e.splice(b,1),e.splice(0,1)):e.splice(0,1)}const F=(0,n.nSR)(4,7),Q=(0,n.TVQ)(i).splice(0,F);for(let i=0;i<Q.length;i++)s.push(Q[i][0],Q[i][1]);x=(0,n.nSR)(1,3);for(let i=0;i<s.length;i+=2)i<x?(t.push((0,o.xmu)(s[i][0],s[i][1])),t.push((0,o.xmu)(s[i+1][0],s[i+1][1]))):(t.push((0,o.xmu)(s[i][0],s[i][1])),h.push((0,o.xmu)(s[i+1][0],s[i+1][1])));for(let i=0;i<t.length;i++)C.push((0,o.L6P)(t[i]));for(let i=0;i<h.length;i++)g.push((0,o.L6P)(h[i],"red"));d=r.Do.isAmc?"Voici une grille contenant des points et un axe de symétrie.<br>Quel nombre minimum de points faut-il ajouter pour que chacun ait son symétrique ?<br>Écrire le nombre de points ajoutés dans le cadre. Coder ensuite ce nombre de points.<br>":"Voici une grille contenant des points et un axe de symétrie.<br>Quel nombre minimum de points faut-il ajouter pour que chacun ait son symétrique ?<br>",f="",d+=(0,o.iR9)({xmin:-.5,ymin:-.5,xmax:6.5,ymax:6.5,scale:.7},...C),this.interactif&&r.Do.isHtml&&(d+=(0,u.G5)(this,q,"largeur10 inline")),f+=(0,o.iR9)({xmin:-.5,ymin:-.5,xmax:6.5,ymax:6.5,scale:.5},...C,...g),(0,u.Iq)(this,q,h.length),this.questionJamaisPosee(q,F,x,s[0][0],s[0][1])&&(this.listeQuestions.push(d),this.listeCorrections.push(f),q++),y++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=19066.c0fe6a917a7325ac7977.js.map