"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[79133,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},79133:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,interactifReady:()=>a,interactifType:()=>l,amcReady:()=>u,amcType:()=>c,default:()=>h});var s=t(25523),n=t(25482),r=t(71250);const o="Déterminer une longueur avec des triangles semblables",a=!0,l="mathLive",u=!0,c="AMCNum";function h(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.optionsChampTexte={texteApres:" cm"},this.nouvelleVersion=function(){const e=(0,n.q$q)([[6,8,10],[9,12,15],[12,16,20],[15,20,25],[18,24,30],[21,28,35],[24,32,40],[27,36,45],[30,40,50]]),i=(0,n.wnJ)(3,"Q"),[t,s,o]=e,a=(0,r.xmu)(0,0,i[0]),l=(0,r.dJt)(a,s,0,i[1]),u=(0,r.dJt)(l,t,90,i[2]),c=(0,r.uGk)(a,l,u),h=(0,r.Y2F)(l,a),$=(0,r.Y2F)(u,l),m=(0,r.Y2F)(a,u),b=[];switch((0,n.nSR)(0,2)){case 0:b.push(c[0],c[1],$,m,(0,r.QSb)(a,l,u)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>\n        En utilisant cette information, calculer la longueur $${i[0]}${i[1]}$.<br>`,this.question+=(0,r.iR9)({xmin:-s/10,xmax:s+s/10,ymin:-s/10,ymax:u.y+s/10,pixelsParCm:140/s,scale:6/s,style:"margin: auto"},b)+"<br>",this.correction=` $${i[0]}${i[1]}=${s}$ cm.`,this.reponse=s;break;case 1:b.push(c[0],c[1],h,m,(0,r.QSb)(a,l,u)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>\n        En utilisant cette information, calculer la longueur $${i[1]}${i[2]}$.<br>`,this.question+=(0,r.iR9)({xmin:-s/10,xmax:s+s/10,ymin:-s/10,ymax:u.y+s/10,pixelsParCm:140/s,scale:6/s,style:"margin: auto"},b)+"<br>",this.correction=` $${i[1]}${i[2]}=${t}$ cm.`,this.reponse=t;break;case 2:b.push(c[0],c[1],$,h,(0,r.QSb)(a,l,u)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>\n        En utilisant cette information, calculer la longueur $${i[0]}${i[2]}$.<br>`,this.question+=(0,r.iR9)({xmin:-s/10,xmax:s+s/10,ymin:-s/10,ymax:u.y+s/10,pixelsParCm:140/s,scale:6/s,style:"margin: auto"},b)+"<br>",this.correction=` $${i[0]}${i[2]}=${o}$ cm.`,this.reponse=o}this.correction+=(0,n.pRK)(`<br> Mentalement : <br>\n    Les deux valeurs sur le graphique montrent que ce triangle est semblable au triangle rectangle $3$, $4$, $5$ (qui correspond à un triplet pythagoricien bien connu). <br>\n    Pour obtenir ses longueurs, il suffit de multiplier les nombres $3$, $4$, $5$ par $${(0,n.k$K)(e[0]/3)}$.<br>\n    On obtient ainsi les longueurs : <br>\n    $\\bullet$  $${(0,n.k$K)(e[0]/3)}\\times 3= ${(0,n.k$K)(e[0])}$ cm ;<br>\n    $\\bullet$  $${(0,n.k$K)(e[0]/3)}\\times 4= ${(0,n.k$K)(e[1])}$ cm ;<br>\n    $\\bullet$  $${(0,n.k$K)(e[0]/3)}\\times 5= ${(0,n.k$K)(e[2])}$ cm ;<br>\n    On obtient la longueur manquante par déduction.`)}}}}]);
//# sourceMappingURL=79133.c7fc6dccb623968d408b.js.map