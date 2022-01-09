"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[34395,25523],{34395:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>o,interactifReady:()=>u,interactifType:()=>l,default:()=>h});var t=s(25523),n=s(25482),r=s(71250),a=s(11945);const o="Résoudre des problèmes de proportionnalité dans un tableau avec la linéarité",u=!0,l="mathLive";function h(){t.default.call(this),this.consigne="On considère que les situations suivantes, sauf cas flagrant, sont des situations de proportionnalité. <br>On demande de les résoudre à l'aide d'un tableau.",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=4,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],1===this.sup?e=[1,1,1,1,4]:2===this.sup?e=[2,2,2,2,4]:3===this.sup?e=[3,3,3,3,4]:4===this.sup&&(e=[1,2,3,2,4]);const i=(0,n.SRM)(e,this.nbQuestions);let s,t,o,u,l,h,c,$,b,p;const d=[["pêches",.24],["noix",.29],["cerises",.31],["pommes",.12],["framboises",.75],["fraises",.37],["citrons",.08],["bananes",.09]],m=[["billes",.1],["bonbons",.1],["bougies",1.2],["crayons",.5],["gâteaux",1.3],["gommes",.4],["stickers",.2],["cahiers",1.4]];for(let g,f,R,x=0,S=0;x<this.nbQuestions&&S<50;){switch(p=(0,n.q$q)([1,2,3]),i[x]){case 1:1===p?(b=(0,n.nSR)(0,7),s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*(0,n.nSR)(8,9)*[m[b][1]]/10,h=t*l,u=(0,n.q$q)([m[b][0]]),g=`${(0,n.rV2)()} achète ${s} ${u} pour ${(0,n.i6h)(l)} €. Combien faudrait-il payer pour en acheter ${o} ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:[`\\text{Nombre de ${u}}`,s,o],ligne2:["\\text{Prix (en euros)}",`${(0,n.i6h)(l)}`,`${(0,n.b1)((0,n.i6h)(h))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\times"+t)}`]]}),(0,a.Iq)(this,x,(0,n.i6h)(h))):2===p?(b=(0,n.nSR)(0,7),s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*d[b][1],h=t*l,u=(0,n.q$q)([d[b][0]]),g=`${(0,n.rV2)()} achète ${(0,n._cF)(l)} kg de ${u} pour ${(0,n.i6h)(s)} €. Quelle masse pourrait être achetée avec ${o} € ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:[`\\text{Prix des ${u} (en euros)}`,s,o],ligne2:[`\\text{Masse des ${u} (en kg)}`,`${(0,n._cF)(l)}`,`${(0,n.b1)((0,n._cF)(h))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\times"+t)}`]]}),(0,a.Iq)(this,x,(0,n._cF)(h))):3===p&&(b=(0,n.nSR)(0,7),s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*(0,n.nSR)(11,48)/10,h=t*l,g=`${s} objets occupent un volume de ${(0,n.euh)(l)} cm³. Quel volume serait occupé par ${o} de ces objets ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:["\\text{Nombre d'objets}",s,o],ligne2:["\\text{Volume des objets (en cm³)}",`${(0,n.euh)(l)}`,`${(0,n.b1)((0,n.k$K)(h))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\times"+t)}`]]}),(0,a.Iq)(this,x,(0,n.k$K)(h))),f=(0,r.iR9)({xmin:-1,xmax:16,ymin:0,ymax:7.5,style:"display: block"},R);break;case 2:1===p?(b=(0,n.nSR)(0,7),s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*(0,n.nSR)(8,9)/10,h=t*l,u=(0,n.q$q)([m[b][0]]),g=`${(0,n.rV2)()} achète ${o} ${u} pour ${(0,n.i6h)(h)} €. Combien faudrait-il payer pour en acheter ${s} ? `,R=(0,r.JLP)({ligne1:[`\\text{Nombre de ${u}}`,o,s],ligne2:["\\text{Prix (en euros)}",`${(0,n.i6h)(h)}`,`${(0,n.b1)((0,n.i6h)(l))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+t)}`]],largeurTitre:9}),(0,a.Iq)(this,x,(0,n.i6h)(l))):2===p?(s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*(0,n.nSR)(40,60),h=t*l,g=`${(0,n.rV2)()} peint une surface de ${h} m² en ${o} jours. Quelle surface serait peinte en ${s} jours ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:["\\text{Durée (en jours)}",o,s],ligne2:["\\text{Surface peinte (en m²)}",`${(0,n.euh)(h)}`,`${(0,n.b1)((0,n.euh)(l))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+t)}`]]}),(0,a.Iq)(this,x,(0,n.euh)(l))):3===p&&(b=(0,n.nSR)(0,7),s=(0,n.nSR)(1,10),t=(0,n.nSR)(2,7),o=s*t,l=s*d[b][1],h=t*l,u=(0,n.q$q)([d[b][0]]),g=`${(0,n.rV2)()} achète ${(0,n._cF)(h)} kg de ${u} pour ${(0,n.i6h)(o)} €. Quelle masse pourrait être achetée avec ${s} € ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:[`\\text{Prix des ${u} (en euros)}`,o,s],ligne2:[`\\text{Masse des ${u} (en kg)}`,`${(0,n._cF)(h)}`,`${(0,n.b1)((0,n._cF)(l))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+t)}`]]}),(0,a.Iq)(this,x,(0,n._cF)(l))),f=(0,r.iR9)({xmin:-1,xmax:16,ymin:0,ymax:7.5,style:"display: block"},R);break;case 3:1===p?(b=(0,n.nSR)(0,7),c=(0,n.nSR)(1,19)*[m[b][1]]/10,s=(0,n.nSR)(2,10),l=c*s,o=(0,n.nSR)(2,10,s),h=c*o,u=(0,n.q$q)([m[b][0]]),g=`${(0,n.rV2)()} achète ${s} ${u} pour ${(0,n.i6h)(l)} €. Combien faudrait-il payer pour en acheter ${o} ? `,R=(0,r.JLP)({ligne1:[`\\text{Nombre de ${u}}`,s,1,o],ligne2:["\\text{Prix (en euros)}",`${(0,n.i6h)(l)}`,`${(0,n.b1)((0,n.i6h)(c))}`,`${(0,n.b1)((0,n.i6h)(h))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+s)}`],[2,3,`${(0,n.b1)("\\times"+o)}`]],largeurTitre:9}),(0,a.Iq)(this,x,(0,n.i6h)(h))):2===p?(c=(0,n.nSR)(40,60),s=(0,n.nSR)(2,10),l=c*s,o=(0,n.nSR)(2,10,s),h=c*o,g=`${(0,n.rV2)()} peint une surface de ${l} m² en ${s} jours. Quelle surface serait peinte en ${o} jours ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:["\\text{Durée (en jours)}",s,1,o],ligne2:["\\text{Surface peinte (en m²)}",`${l}`,`${(0,n.b1)(c)}`,`${(0,n.b1)(h)}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+s)}`],[2,3,`${(0,n.b1)("\\times"+o)}`]]}),(0,a.Iq)(this,x,h)):3===p&&(b=(0,n.nSR)(0,7),c=(0,n.nSR)(8,12)*d[b][1]/10,s=(0,n.nSR)(2,10),l=c*s,o=(0,n.nSR)(2,10,s),h=c*o,u=(0,n.q$q)([d[b][0]]),g=`${(0,n.rV2)()} achète ${(0,n._cF)(l)} kg de ${u} pour ${(0,n.i6h)(s)} €. Quelle masse pourrait être achetée avec ${o} € ? `,R=(0,r.JLP)({largeurTitre:10,ligne1:[`\\text{Prix des ${u} (en euros)}`,s,1,o],ligne2:[`\\text{Masse des ${u} (en kg)}`,`${(0,n._cF)(l)}`,`${(0,n.b1)((0,n._cF)(c))}`,`${(0,n.b1)((0,n._cF)(h))}`],flecheHaut:[[1,2,`${(0,n.b1)("\\div"+s)}`],[2,3,`${(0,n.b1)("\\times"+o)}`]]}),(0,a.Iq)(this,x,(0,n._cF)(h))),f=(0,r.iR9)({xmin:-1,xmax:19,ymin:0,ymax:7.5,style:"display: block"},R);break;case 4:1===p?($=(0,n.nSR)(120,165)/100,s=(0,n.nSR)(10,14),t=(0,n.nSR)(2,4),o=s*t,g=`${(0,n.rV2)()} mesure ${(0,n.euh)($)} m à ${s} ans. Quelle sera sa taille à ${o} ans ?`,f="On ne peut pas savoir car la taille n'est pas proportionnelle à l'âge."):2===p?($=(0,n.nSR)(30,45),s=(0,n.nSR)(10,13),t=(0,n.nSR)(2,5),o=s*t,g=`${(0,n.rV2)()} pèse ${(0,n.euh)($)} kg à ${s} ans. Quelle sera son poids à ${o} ans ?`,f="On ne peut pas savoir car le poids (plus précisément la masse) n'est pas proportionnel à l'âge."):3===p&&($=(0,n.nSR)(35,39),s=(0,n.nSR)(10,13),t=(0,n.nSR)(2,5),o=s*t,g=`${(0,n.rV2)()} chausse du ${(0,n.euh)($)} à ${s} ans. Quelle sera sa pointure à ${o} ans ?`,f="On ne peut pas savoir car la pointure n'est pas proportionnelle à l'âge."),(0,a.Iq)(this,x,"non")}this.interactif?this.consigne="On considère que les situations suivantes, sauf cas flagrant, sont des situations de proportionnalité. <br>Attention à donner le résultat avec le bon format : deux chiffres après la virgule si c'est un prix, trois si c'est une masse; écrire \"non\" si ce n'est pas une situation de proportionnalité.":this.consigne="On considère que les situations suivantes, sauf cas flagrant, sont des situations de proportionnalité. <br>On demande de les résoudre à l'aide d'un tableau.",g+=(0,a.G5)(this,x),-1===this.listeQuestions.indexOf(g)&&(this.listeQuestions.push(g),this.listeCorrections.push(f),x++),S++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Multiplication\n2 : Division\n3 : Passage par l'unité\n4 : Mélange"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=34395.20e4392a5444a8286053.js.map