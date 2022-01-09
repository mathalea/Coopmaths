"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[58403,25523],{58403:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>o,default:()=>h});var t=s(25523),n=s(25482),a=s(77074);const r={simplify:a.og,parse:a.Qc,derivative:a.o5},o="Calculs de dérivées";function h(){t.default.call(this),this.titre=o,this.consigne="Pour chacune des fonctions suivantes, dire sur quel ensemble elle est dérivable, puis déterminer l'expression de sa fonction dérivée.",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=2,this.sup=1;const e=r.simplify.rules.slice();e.splice(e.findIndex((e=>"n1*n2 + n2"===e.l)),1),e.splice(e.findIndex((e=>"n1*n3 + n2*n3"===e.l)),1),this.nouvelleVersion=function(){let i;this.sup=Number(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.liste_valeurs=[],i=1===this.sup?["ax+b","a","ax2+bx+c","xn","xn+xm","1/x","xn+1/x","1/xn","xn+1/xm","racine(x)"]:(this.sup,["ax+b","axn","a/x","a/xn","racine(ax)"]);const s=(0,n.SRM)(i,this.nbQuestions);for(let t,a,o,h,l,c,u,b,x,m=0,f=0;m<this.nbQuestions&&f<50;){switch(s[m]){case"a":o=(0,n.nSR)(-10,10,0),b=`${o}`,x="\\mathbb{R}";break;case"ax+b":o=(0,n.nSR)(-10,10,0),h=(0,n.nSR)(-10,10,0),b=`${o}x  ${(0,n.tPu)(h)}`,x="\\mathbb{R}";break;case"ax2+bx+c":o=(0,n.nSR)(-10,10,0),h=(0,n.nSR)(-10,10,0),l=(0,n.nSR)(-10,10,0),b=`${(0,n.wO4)(o)} x^2  ${(0,n.Zvy)(h)} x  ${(0,n.tPu)(l)}`,x="\\mathbb{R}";break;case"xn":c=(0,n.nSR)(2,10),b=`x^${c}`,x="\\mathbb{R}";break;case"xn+1/x":c=(0,n.nSR)(2,10),b=`x^${c}+1/x`,x="\\mathbb{R}^{\\text{*}}";break;case"xn+1/xm":c=(0,n.nSR)(2,10),u=(0,n.nSR)(2,10,u),b=`x^${c}+1/x^${u}`,x="\\mathbb{R}^{\\text{*}}";break;case"xn+xm":c=(0,n.nSR)(2,10),u=(0,n.nSR)(2,10,u),b=`x^${c}+x^${u}`,x="\\mathbb{R}";break;case"axn":o=(0,n.nSR)(-10,10,[0,1,-1]),c=(0,n.nSR)(2,10),b=`${o}x^${c}`,x="\\mathbb{R}";break;case"1/x":b="1/x",x="\\mathbb{R}^{\\text{*}}";break;case"a/x":o=(0,n.nSR)(-10,10,[0,1]),b=`${o}/x`,x="\\mathbb{R}^{\\text{*}}";break;case"1/xn":c=(0,n.nSR)(2,10),b=`1/x^${c}`,x="\\mathbb{R}^{\\text{*}}";break;case"a/xn":o=(0,n.nSR)(-10,10,[1,0]),c=(0,n.nSR)(2,10),b=`${o}/x^${c}`,x="\\mathbb{R}^{\\text{*}}";break;case"racine(x)":b="sqrt(x)",x="[0,+\\infin[";break;case"racine(ax)":o=(0,n.nSR)(2,10,[4,9]),b=`sqrt(${(0,n.wO4)(o)}x)`,x="[0,+\\infin["}t=`$${(0,n.ff2)(m+6)}:x\\longmapsto ${r.parse(b).toTex({implicit:"hide"}).replaceAll("\\cdot","")}$`,a=`$${(0,n.ff2)(m+6)}$ est dérivable sur $${x}$ et $ ${(0,n.ff2)(m+6)}':x\\longmapsto ${r.simplify(r.derivative(b,"x"),e).toTex({implicit:"hide"}).replaceAll("\\cdot","")}$`,t=t.replaceAll("frac","dfrac"),a=a.replaceAll("frac","dfrac"),-1===this.liste_valeurs.indexOf(b)&&(this.liste_valeurs.push(b),this.listeQuestions.push(t),this.listeCorrections.push(a),m++),f++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Fonctions de base \n2 : ku"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=58403.30bd55c7276dff38f5da.js.map