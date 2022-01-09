"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[85288,25523],{85288:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>$,amcReady:()=>o,amcType:()=>a,dateDeModifImportante:()=>h,default:()=>m});var r=i(25523),n=i(25482),s=i(22380);const $="Calculer des durées ou déterminer un horaire",o=!0,a="AMCHybride",h="02/01/2022";function m(){r.default.call(this),this.titre=$,this.consigne="",this.sup=4,this.spacing=2,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.spacingCorr=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const e=(0,n.SRM)([1,2,3,4,5],this.nbQuestions);let t;t=this.sup<4?(0,n.SRM)([this.sup],this.nbQuestions):(0,n.SRM)([1,2,3],this.nbQuestions);for(let i,r,$,o,a,h,m,l,u,c,x,d=0,b=0;d<this.nbQuestions&&b<50;){if(1===e[d]&&(r=(0,n.nSR)(20,22),$=(0,n.nSR)(35,58),i=60*r+$,a=r+2,h=(0,n.nSR)(1,$),o=60*a+h,m=o-i,i=(0,n.ymn)(i),o=(0,n.ymn)(o),l=parseInt(m/60),u=m%60,m=(0,n.agp)(m),1===t[d]&&(c=`La diffusion d'un film commence à ${i} et se termine à ${o}. Combien de temps a duré ce film ?`,x=`${i}$\\xrightarrow{+${60-$}~\\text{min}}${(r+1)%24}~\\text{h} \\xrightarrow{+${(a-r-1)%24}~\\text{h}~${h}~\\min}${a%24}~\\text{h}~${h}~\\text{min}$`,x+=`<br>${o} $-$ ${i} = ${m}`,x+="<br>",x+=`Le film dure ${m}.`),2===t[d]&&(c=`Un film dure ${m} et commence à ${i}. À quelle heure se terminera-t-il ?`,x=`${i} + ${m} = ${r+l} h ${$+u} min`,$+u>59&&(x+=`= ${o}`),x+="<br>",x+=`Le film terminera à ${o}.`),3===t[d]&&(c=`Un film de ${m} termine à ${o}. À quelle heure a-t-il commencé ?`,x=`$${a%24}~\\text{h}~${h}~\\text{min}`,l>0&&(x+=`\\xrightarrow{-${l}~\\text{h}} ${a-l}~\\text{h}~${h}~\\text{min}`),x+=`\\xrightarrow{-${h}~\\text{min}} ${(a-l)%24}~\\text{h} \\xrightarrow{-${Math.abs(u-h)}~\\text{min}} ${r}~\\text{h}~${$}~\\text{min}$`,x+=`<br>${o} $-$ ${m} = ${i}`,x+="<br>",x+=`Le film a commencé à ${i}.`)),2===e[d]){for(r=(0,n.nSR)(20,23),$=(0,n.nSR)(35,58),i=60*r+$,a=r+1,h=(0,n.nSR)(1,$),o=60*a+h,m=o-i;m<27||m>75||60===m;)r=(0,n.nSR)(20,23),$=(0,n.nSR)(35,58),i=60*r+$,a=r+2,h=(0,n.nSR)(1,$),o=60*a+h,m=o-i;i=(0,n.ymn)(i),o=(0,n.ymn)(o),l=parseInt(m/60),u=m%60,m=(0,n.agp)(m),1===t[d]&&(c=`Sur son service de streaming favori, ${(0,n.rV2)()} commence à regarder une série à ${i} et celle-ci se termine à ${o}. Combien de temps a duré l'épisode ?`,x=`${i}$\\xrightarrow{+${60-$}~\\text{min}}${(r+1)%24}~\\text{h} \\xrightarrow{+${a-r-1>0?(a-r-1)%24+"~\\text{h}":""}~${h}~\\min}${a%24}~\\text{h}~${h}~\\text{min}$`,x+=`<br>${o} $-$ ${i} = ${m}`,x+="<br>",x+=`La série a duré ${m}.`),2===t[d]&&(c=`${(0,n.rV2)()} allume son ordinateur à ${i} pour regarder une série de ${m}. À quelle heure la série s'achèvera-t-elle ?`,x=`${i} + ${m} = ${r+l} h ${$+u} min`,$+u>59&&(x+=`= ${o}`),x+="<br>",x+=`La série s'achèvera à ${o}.`),3===t[d]&&(c=`${(0,n.rV2)()} termine de regarder une série de ${m} à ${o}. À quelle heure la série a-t-elle commencé ?`,x=`$${a%24}~\\text{h}~${h}~\\text{min}`,l>0&&(x+=`\\xrightarrow{-${l}~\\text{h}} ${a-l}~\\text{h}~${h}~\\text{min}`),x+=`\\xrightarrow{-${h}~\\text{min}} ${(a-l)%24}~\\text{h} \\xrightarrow{-${Math.abs(u-h)}~\\text{min}} ${r}~\\text{h}~${$}~\\text{min}$`,x+=`<br>${o} $-$ ${m} = ${i}`,x+="<br>",x+=`Elle a commencé à ${i}.`)}if(3===e[d]&&(r=(0,n.nSR)(8,21),$=(0,n.nSR)(1,58),i=60*r+$,a=r+(0,n.nSR)(1,2),h=(0,n.nSR)(1,59),o=60*a+h,m=o-i,i=(0,n.ymn)(i),o=(0,n.ymn)(o),l=parseInt(m/60),u=m%60,m=(0,n.agp)(m),1===t[d]&&(c=`Une émission télévisée est diffusée de ${i} à ${o}. Combien de temps dure-t-elle ?`,x=`${i}$\\xrightarrow{+${60-$}~\\text{min}}${(r+1)%24}~\\text{h} \\xrightarrow{+${a-r-1>0?(a-r-1)%24+"~\\text{h}":""}~${h}~\\min}${a%24}~\\text{h}~${h}~\\text{min}$`,x+=`<br>${o} $-$ ${i} = ${m}`,x+="<br>",x+=`L'émission dure ${m}.`),2===t[d]&&(c=`Une émission télévisée de ${m} commence à ${i}. À quelle heure s'achèvera-t-elle ?`,x=`${i} + ${m} = ${r+l} h ${$+u} min`,$+u>59&&(x+=`= ${o}`),x+="<br>",x+=`L'émission s'achèvera à ${o}.`),3===t[d]&&(c=`À ${o}, ${(0,n.rV2)()} termine de regarder une émission de ${m}. À quelle heure l'émission a-t-elle commencé ?`,x=`$${a%24}~\\text{h}~${h}~\\text{min}`,l>0&&(x+=`\\xrightarrow{-${l}~\\text{h}} ${a-l}~\\text{h}~${h}~\\text{min}`),x+=`\\xrightarrow{-${h}~\\text{min}} ${(a-l)%24}~\\text{h} \\xrightarrow{-${Math.abs(u-h)}~\\text{min}} ${r}~\\text{h}~${$}~\\text{min}$`,x+=`<br>${o} $-$ ${m} = ${i}`,x+="<br>",x+=`L'émission a commencé à ${i}.`)),4===e[d]){for(r=(0,n.nSR)(13,16),$=(0,n.nSR)(1,58),i=60*r+$,a=r+(0,n.nSR)(1,2),h=(0,n.nSR)(1,58),o=60*a+h,m=o-i;m<27||m>75||60===m;)r=(0,n.nSR)(13,16),$=(0,n.nSR)(35,58),i=60*r+$,a=r+(0,n.nSR)(1,2),h=(0,n.nSR)(1,$),o=60*a+h,m=o-i;i=(0,n.ymn)(i),o=(0,n.ymn)(o),l=parseInt(m/60),u=m%60,m=(0,n.agp)(m),1===t[d]&&(c=`Un papa regarde la compétition de gymnastique de sa fille  de ${i} à ${o}. Quelle est la durée de cette compétition ?`,x=`${i}$\\xrightarrow{+${60-$}~\\text{min}}${(r+1)%24}~\\text{h} \\xrightarrow{+${a-r-1>0?(a-r-1)%24+"~\\text{h}":""}~${h}~\\min}${a%24}~\\text{h}~${h}~\\text{min}$`,x+=`<br>${o} $-$ ${i} = ${m}`,x+="<br>",x+=`La compétition dure ${m}.`),2===t[d]&&(c=`Une compétition de gymnastique commence à ${i} et dure ${m}. À quelle heure sera-t-elle terminée ?`,x=`${i} + ${m} = ${r+l} h ${$+u} min`,$+u>59&&(x+=`= ${o}`),x+="<br>",x+=`La compétition terminera à ${o}.`),3===t[d]&&(c=`Une compétition de gymnastique qui se termine à ${o} a duré ${m}. À quelle heure a-t-elle commencé ?`,x=`$${a%24}~\\text{h}~${h}~\\text{min}`,l>0&&(x+=`\\xrightarrow{-${l}~\\text{h}} ${a-l}~\\text{h}~${h}~\\text{min}`),x+=`\\xrightarrow{-${h}~\\text{min}} ${(a-l)%24}~\\text{h} \\xrightarrow{-${Math.abs(u-h)}~\\text{min}} ${r}~\\text{h}~${$}~\\text{min}$`,x+=`<br>${o} $-$ ${m} = ${i}`,x+="<br>",x+=`La compétition a commencé à ${i}.`)}if(5===e[d]){for(r=(0,n.nSR)(8,15),$=(0,n.nSR)(25,58),i=60*r+$,a=r+(0,n.nSR)(2,5),h=(0,n.nSR)(1,$),o=60*a+h,m=o-i;m<27||m>75||60===m;)r=(0,n.nSR)(20,23),$=(0,n.nSR)(35,58),i=60*r+$,a=r+2,h=(0,n.nSR)(1,$),o=60*a+h,m=o-i;i=(0,n.ymn)(i),o=(0,n.ymn)(o),l=parseInt(m/60),u=m%60,m=(0,n.agp)(m),1===t[d]&&(c=`Un train part à ${i} et arrive à destination à ${o}. Quelle est la durée du trajet ?`,x=`${i}$\\xrightarrow{+${60-$}~\\text{min}}${(r+1)%24}~\\text{h} \\xrightarrow{+${a-r-1>0?(a-r-1)%24+"~\\text{h}":""}~${h}~\\min}${a%24}~\\text{h}~${h}~\\text{min}$`,x+=`<br>${o} $-$ ${i} = ${m}`,x+="<br>",x+=`Le trajet dure ${m}.`),2===t[d]&&(c=`${(0,n.sTI)()} monte dans le train à ${i} pour un trajet qui doit durer ${m}. À quelle heure arrivera-t-elle ?`,x=`${i} + ${m} = ${r+l} h ${$+u} min`,$+u>59&&(x+=`= ${o}`),x+="<br>",x+=`Elle arrivera à ${o}.`),3===t[d]&&(c=`Un train arrive en gare à ${o} après un trajet de ${m}. À quelle heure le voyage a-t-il commencé ?`,x=`$${a%24}~\\text{h}~${h}~\\text{min}`,l>0&&(x+=`\\xrightarrow{-${l}~\\text{h}} ${a-l}~\\text{h}~${h}~\\text{min}`),x+=`\\xrightarrow{-${h}~\\text{min}} ${(a-l)%24}~\\text{h} \\xrightarrow{-${Math.abs(u-h)}~\\text{min}} ${r}~\\text{h}~${$}~\\text{min}$`,x+=`<br>${o} $-$ ${m} = ${i}`,x+="<br>",x+=`Le voyage a commencé à ${i}.`)}s.Do.isAmc&&(this.autoCorrection[d]={enonce:"Dans chacun des encadrés, montrer une démarche ou un calcul et répondre par une phrase.<br>",enonceAvant:!1,enonceAvantUneFois:!0,melange:!1,propositions:[{type:"AMCOpen",propositions:[{texte:" ",statut:3,feedback:"",enonce:c+"<br>",sanscadre:!1}]}]}),-1===this.listeQuestions.indexOf(c)&&(this.listeQuestions.push(c),this.listeCorrections.push(x),d++),b++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Calcul de durées\n2 : Calcul de l'horaire de fin\n3 : Calcul de l'horaire de début\n4 : Mélange"]}},25523:(e,t,i)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const r of t)void 0!==r&&(i+=r.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>r})}}]);
//# sourceMappingURL=85288.ef0bb6f691e5fc291372.js.map