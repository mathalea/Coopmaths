"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[97951,17007],{97951:(i,e,s)=>{s.r(e),s.d(e,{amcReady:()=>$,amcType:()=>r,interactifReady:()=>a,interactifType:()=>u,titre:()=>h,default:()=>c});var t=s(17007),o=s(30169),n=s(75664);const $=!0,r="qcmMono",a=!0,u="qcm",h="Critères de divisibilité";function c(){t.default.call(this),this.sup=4,this.consigne="Répondre aux questions suivantes en justifiant.",this.spacing=2,this.spacingCorr=1,this.nbQuestions=5,this.nouvelleVersion=function(){let i;this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],1===this.sup&&(i=[2,5,10]),2===this.sup&&(i=[3,9]),3===this.sup&&(i=[2,3,5,9,10]),this.sup>3&&(i=[2,3,5,9,10,"autre"]);const e=(0,o.SRM)(i,this.nbQuestions);for(let s,t,$,r,a,u=0,h=0;u<this.nbQuestions&&h<50;){switch(this.autoCorrection[u]={},this.autoCorrection[u].propositions=[{texte:"Oui",statut:!1},{texte:"Non",statut:!1},{texte:"Je ne sais pas",statut:!1}],this.autoCorrection[u].options={ordered:!0},e[u]){case 2:t=(0,o.nSR)(1,2),s=10*(0,o.nSR)(10,999)+t,$=`$${(0,o.euh)(s)}$ est-il divisible par $2$ ?`,t%2==0?(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ est divisible par $2$.`,this.autoCorrection[u].propositions[0].statut=!0):(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ n'est pas divisible par $2$.`,this.autoCorrection[u].propositions[1].statut=!0);break;case 3:s=(0,o.q$q)([(0,o.nSR)(100,999),(0,o.nSR)(1e4,99999)]).toString(),a=(0,o.UtT)(s),$=`$${(0,o.euh)(s)}$ est-il divisible par $3$ ?`,(0,o.n0o)(a)%3==0?(r=`$${a}=${(0,o.n0o)(a)}=3\\times${(0,o.n0o)(a)/3}$<br>`,r+=`La somme des chiffres de $${(0,o.euh)(s)}$ est divisible par $3$ donc $${(0,o.euh)(s)}$ est divisible par $3$.`,this.autoCorrection[u].propositions[0].statut=!0):(r=`$${a}=${(0,o.n0o)(a)}=3\\times${((0,o.n0o)(a)-(0,o.n0o)(a)%3)/3}+${(0,o.n0o)(a)%3}$<br>`,r+=`La somme des chiffres de $${(0,o.euh)(s)}$ n'est pas divisible par $3$ donc $${(0,o.euh)(s)}$ n'est pas divisible par $3$.`,this.autoCorrection[u].propositions[1].statut=!0);break;case 9:s=(0,o.q$q)([(0,o.nSR)(100,999),(0,o.nSR)(1e4,99999)]).toString(),a=(0,o.UtT)(s),$=`$${(0,o.euh)(s)}$ est-il divisible par $9$ ?`,(0,o.n0o)(a)%9==0?(r=`$${a}=${(0,o.n0o)(a)}=9\\times${(0,o.n0o)(a)/9}$<br>`,r+=`La somme des chiffres de $${(0,o.euh)(s)}$ est divisible par $9$ donc $${(0,o.euh)(s)}$ est divisible par $9$.`,this.autoCorrection[u].propositions[0].statut=!0):(r=`$${a}=${(0,o.n0o)(a)}=9\\times${((0,o.n0o)(a)-(0,o.n0o)(a)%9)/9}+${(0,o.n0o)(a)%9}$<br>`,r+=`La somme des chiffres de $${(0,o.euh)(s)}$ n'est pas divisible par $9$ donc $${(0,o.euh)(s)}$ n'est pas divisible par $9$.`,this.autoCorrection[u].propositions[1].statut=!0);break;case 5:t=(0,o.q$q)([(0,o.nSR)(1,9,[0,5]),(0,o.nSR)(1,9,[0,5]),5,0]),s=10*(0,o.nSR)(10,9999)+t,$=`$${(0,o.euh)(s)}$ est-il divisible par $5$ ?`,t%5==0?(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ est divisible par $5$.`,this.autoCorrection[u].propositions[0].statut=!0):(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ n'est pas divisible par $5$.`,this.autoCorrection[u].propositions[1].statut=!0);break;case 10:t=(0,o.q$q)([(0,o.nSR)(1,9),0]),s=10*(0,o.nSR)(10,9999)+t,$=`$${(0,o.euh)(s)}$ est-il divisible par $10$ ?`,0===t?(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ est divisible par $10$.`,this.autoCorrection[u].propositions[0].statut=!0):(r=`Le chiffre des unités de $${(0,o.euh)(s)}$ est $${t}$ donc $${(0,o.euh)(s)}$ n'est pas divisible par $10$.`,this.autoCorrection[u].propositions[1].statut=!0);break;case"autre":s=(0,o.nSR)(100,999),t=(0,o.q$q)([7,7,7,7,13,17,19]),s=7===t?(0,o.q$q)([10*(0,o.nSR)(10,99)+7],7*(0,o.nSR)(11,99),(0,o.nSR)(100,999)):(0,o.q$q)([100*(0,o.nSR)(10,99)+t],t*(0,o.nSR)(11,99),(0,o.nSR)(100,999)),$=`$${(0,o.euh)(s)}$ est-il divisible par $${t}$ ?`,r=`On ne connait pas de critère de divisibilité par $${t}$, on calcule donc la division euclidienne de $${(0,o.euh)(s)}$ par $${t}$.<br>`,s%t==0?(r+=`$${(0,o.euh)(s)}=${t}\\times${(0,o.euh)(s/t)}$<br>`,r+=`Le reste de la division euclidienne est nul donc $${(0,o.euh)(s)}$ est divisible par $${t}$.`,this.autoCorrection[u].propositions[0].statut=!0):(r+=`$${(0,o.euh)(s)}=${t}\\times${(s-s%t)/t}+${s%t}$<br>`,r+=`Le reste de la division euclidienne n'est pas nul donc $${(0,o.euh)(s)}$ n'est pas divisible par $${t}$.`,this.autoCorrection[u].propositions[1].statut=!0)}this.autoCorrection[u].enonce=`${$}\n`,this.interactif&&($+="<br>"+(0,n.l3)(this,u).texte),-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(r),u++),h++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Choix des questions",4,"1 : Critères de divisibilité par 2, 5, 10\n2 : Critères de divisibilité par 3,9\n3 : Critères de divisibilité par 2, 3, 5, 9, 10\n4 : Avec ou sans critère de divisibilité"]}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=97951.48905303bfecb875b88c.js.map