(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5985,2006],{25985:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>r,default:()=>o});var n=t(2006),s=(t(89846),t(91030));const r="Calculer des durées ou déterminer un horaire";function o(){n.default.call(this),this.titre=r,this.consigne="",this.sup=4,this.spacing=2,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,s.SRM)([1,2,3,4,5],this.nbQuestions);let i;i=this.sup<4?(0,s.SRM)([this.sup],this.nbQuestions):(0,s.SRM)([1,2,3],this.nbQuestions);for(let t,n,r,o,a,l,u,m,$,c=0,h=0;c<this.nbQuestions&&h<50;){if(1==e[c]&&(n=(0,s.nSR)(20,22),r=(0,s.nSR)(35,58),t=60*n+r,a=n+2,l=(0,s.nSR)(1,r),o=60*a+l,u=o-t,t=(0,s.ymn)(t),o=(0,s.ymn)(o),u=(0,s.agp)(u),1==i[c]&&(m=`La diffusion d'un film commence à ${t} et se termine à ${o}. Combien de temps a duré ce film ?`,$=`${o} - ${t} = ${u}`,$+="<br>",$+=`Le film dure ${u}.`),2==i[c]&&(m=`Un film dure ${u} et commence à ${t}. À quelle heure se terminera-t-il ?`,$=`${t} + ${u} = ${o}`,$+="<br>",$+=`Le film terminera à ${o}.`),3==i[c]&&(m=`Un film de ${u} termine à ${o}. À quelle heure a-t-il commencé ?`,$=`${o} - ${u} = ${t}`,$+="<br>",$+=`Le film a commencé à ${t}.`)),2==e[c]){for(n=(0,s.nSR)(20,23),r=(0,s.nSR)(35,58),t=60*n+r,a=n+1,l=(0,s.nSR)(1,r),o=60*a+l,u=o-t;u<27||u>75||60==u;)n=(0,s.nSR)(20,23),r=(0,s.nSR)(35,58),t=60*n+r,a=n+2,l=(0,s.nSR)(1,r),o=60*a+l,u=o-t;t=(0,s.ymn)(t),o=(0,s.ymn)(o),u=(0,s.agp)(u),1==i[c]&&(m=`Sur son service de streaming favori, ${(0,s.rV2)()} commence à regarder une série à ${t} et celle-ci se termine à ${o}. Combien de temps a duré l'épisode ?`,$=`${o} - ${t} = ${u}`,$+="<br>",$+=`La série a duré ${u}.`),2==i[c]&&(m=`${(0,s.rV2)()} allume son ordinateur à ${t} pour regarder une série de ${u}. À quelle heure la série s'achèvera-t-elle ?`,$=`${t} + ${u} = ${o}`,$+="<br>",$+=`La série s'achèvera à ${o}.`),3==i[c]&&(m=`${(0,s.rV2)()} termine de regarder une série de ${u} à ${o}. À quelle heure la série a-t-elle commencé ?`,$=`${o} - ${u} = ${t}`,$+="<br>",$+=`Elle a commencé à ${t}.`)}if(3==e[c]&&(n=(0,s.nSR)(8,21),r=(0,s.nSR)(1,58),t=60*n+r,a=n+(0,s.nSR)(1,2),l=(0,s.nSR)(1,59),o=60*a+l,u=o-t,t=(0,s.ymn)(t),o=(0,s.ymn)(o),u=(0,s.agp)(u),1==i[c]&&(m=`Une émission télévisée est diffusée de ${t} à ${o}. Combien de temps dure-t-elle ?`,$=`${o} - ${t} = ${u}`,$+="<br>",$+=`L'émission dure ${u}.`),2==i[c]&&(m=`Une émission télévisée de ${u} commence à ${t}. À quelle heure s'achèvera-t-elle ?`,$=`${t} + ${u} = ${o}`,$+="<br>",$+=`L'émission s'achèvera à ${o}.`),3==i[c]&&(m=`À ${o}, ${(0,s.rV2)()} termine de regarder une émission de ${u}. À quelle heure l'émission a-t-elle commencé ?`,$=`${o} - ${u} = ${t}`,$+="<br>",$+=`L'émission a commencé à ${t}.`)),4==e[c]){for(n=(0,s.nSR)(13,16),r=(0,s.nSR)(1,58),t=60*n+r,a=n+(0,s.nSR)(1,2),l=(0,s.nSR)(1,58),o=60*a+l,u=o-t;u<27||u>75||60==u;)n=(0,s.nSR)(13,16),r=(0,s.nSR)(35,58),t=60*n+r,a=n+(0,s.nSR)(1,2),l=(0,s.nSR)(1,r),o=60*a+l,u=o-t;t=(0,s.ymn)(t),o=(0,s.ymn)(o),u=(0,s.agp)(u),1==i[c]&&(m=`Un papa regarde la compétition de gymnastique de sa fille  de ${t} à ${o}. Calculer la durée de cette compétition.`,$=`${o} - ${t} = ${u}`,$+="<br>",$+=`La compétition dure ${u}.`),2==i[c]&&(m=`Une compétition de gymnastique commence à ${t} et dure ${u}. À quelle heure sera-t-elle terminée ?`,$=`${t} + ${u} = ${o}`,$+="<br>",$+=`La compétition terminera à ${o}.`),3==i[c]&&(m=`Une compétition de gymnastique qui se termine à ${o} a duré ${u}. À quelle heure a-t-elle commencé.`,$=`${o} - ${u} = ${t}`,$+="<br>",$+=`La compétition a commencé à ${t}.`)}if(5==e[c]){for(n=(0,s.nSR)(8,15),r=(0,s.nSR)(25,58),t=60*n+r,a=n+(0,s.nSR)(2,5),l=(0,s.nSR)(1,r),o=60*a+l,u=o-t;u<27||u>75||60==u;)n=(0,s.nSR)(20,23),r=(0,s.nSR)(35,58),t=60*n+r,a=n+2,l=(0,s.nSR)(1,r),o=60*a+l,u=o-t;t=(0,s.ymn)(t),o=(0,s.ymn)(o),u=(0,s.agp)(u),1==i[c]&&(m=`Un train part à ${t} et arrive à destination à ${o}. Calculer la durée du trajet.`,$=`${o} - ${t} = ${u}`,$+="<br>",$+=`Le trajet dure ${u}.`),2==i[c]&&(m=`${(0,s.sTI)()} monte dans le train à ${t} pour un trajet qui doit durer ${u}. À quelle heure arrivera-t-elle ?`,$=`${t} + ${u} = ${o}`,$+="<br>",$+=`Elle arrivera à ${o}.`),3==i[c]&&(m=`Un train arrive en gare à ${o} après un trajet de ${u}. À quelle heure le voyage a-t-il commencé ?`,$=`${o} - ${u} = ${t}`,$+="<br>",$+=`Le voyage a commencé à ${t}.`)}-1===this.listeQuestions.indexOf(m)&&(this.listeQuestions.push(m),this.listeCorrections.push($),c++),h++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Calcul de durée\n2 : Calcul de l'horaire de fin\n3 : Calcul de l'horaire de début\n4 : 3 types de questions"]}},2006:(e,i,t)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>n})}}]);
//# sourceMappingURL=5985.ecdf3bea73af574d0876.js.map