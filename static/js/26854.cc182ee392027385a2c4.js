"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[26854,17007],{26854:(i,e,t)=>{t.r(e),t.d(e,{amcReady:()=>n,amcType:()=>a,interactifReady:()=>u,interactifType:()=>l,titre:()=>$,default:()=>h});var s=t(17007),r=t(30169),o=t(75664);const n=!0,a="qcmMono",u=!0,l="qcm",$="Diviseur, multiple, divisible - Vrai ou faux";function h(){function i(i,e,t){let s;return!0===t&&(s=2===i?", car son chiffre des unités est $0$, $2$, $4$, $6$ ou $8$.":5===i?", car son chiffre des unités est $0$, ou $5$.":3===i||9===i?`, car la somme de ses chiffres est $${(0,r.UtT)(e.toString())}=${(0,r.n0o)((0,r.UtT)(e.toString()))}$ qui est divisible par $${i}$.`:`, car $${(0,r.euh)(e)} = ${i}\\times ${(0,r.n0o)(e/i)}$.`),!1===t&&(s=2===i?", car son chiffre des unités n'est pas $0$, $2$, $4$, $6$ ou $8$.":5===i?", car son chiffre des unités n'est pas $0$, ou $5$.":3===i||9===i?`, car la somme de ses chiffres est $${(0,r.UtT)(e.toString())}=${(0,r.n0o)((0,r.UtT)(e.toString()))}$ qui n'est pas divisible par $${i}$.`:`, car $${(0,r.euh)(e)} = ${i}\\times ${Math.floor(e/i)}+ ${e%i}$.`),s}s.default.call(this),this.consigne="Pour chaque affirmation, indiquer si elle est vraie ou fausse.",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.sup2=parseInt(this.sup2),this.listeQuestions=[],this.listeCorrections=[];let e=["Ndiviseur","divisibleParN","multipleDeN","NdiviseurF","divisibleParNF","multipleDeNF","NdiviseurEnvers","divisibleParNEnvers","multipleDeNEnvers"];this.nbQuestions<8&&(e=[(0,r.q$q)(["Ndiviseur","divisibleParN"]),"multipleDeN",(0,r.q$q)(["NdiviseurF","divisibleParNF"]),"multipleDeNF",(0,r.q$q)(["NdiviseurEnvers","divisibleParNEnvers","multipleDeNEnvers"])]);const t=(0,r.SRM)(e,this.nbQuestions);let s;1===this.sup&&(s=[2,5]),2===this.sup&&(s=[2,3,5,9]),3===this.sup&&(s=[7,11,13,20,30,25]);const n=(0,r.SRM)(s,this.nbQuestions);for(let a,u,l,$,h=0,c=0;h<this.nbQuestions&&c<50;){switch(l=n[h],$=(0,r.nSR)(199,999)*l,this.autoCorrection[h]={},this.autoCorrection[h].enonce=`${a}\n`,this.autoCorrection[h].propositions=[{texte:"Oui",statut:!1},{texte:"Non",statut:!1},{texte:"Je ne sais pas",statut:!1}],this.autoCorrection[h].options={ordered:!0},t[h]){case"Ndiviseur":a=`$${l}$ est un diviseur de $${(0,r.euh)($)}$.`,u=a.replace("."," ")+" : Vrai",u+=i(l,$,!0),this.autoCorrection[h].propositions[0].statut=!0;break;case"divisibleParN":a=`$${(0,r.euh)($)}$ est divisible par $${l}$.`,u=a.replace("."," ")+" : Vrai",u+=i(l,$,!0),this.autoCorrection[h].propositions[0].statut=!0;break;case"multipleDeN":a=`$${(0,r.euh)($)}$ est un multiple de $${l}$.`,u=a.replace("."," ")+" : Vrai",u+=i(l,$,!0),this.autoCorrection[h].propositions[0].statut=!0;break;case"NdiviseurF":$+=(0,r.nSR)(1,l-1),a=`$${l}$ est un diviseur de $${(0,r.euh)($)}$.`,u=a.replace("."," ")+" : Faux",u+=i(l,$,!1),this.autoCorrection[h].propositions[1].statut=!0;break;case"divisibleParNF":$+=(0,r.nSR)(1,l-1),a=`$${(0,r.euh)($)}$ est divisible par $${l}$.`,u=a.replace("."," ")+" : Faux",u+=i(l,$,!1),this.autoCorrection[h].propositions[1].statut=!0;break;case"multipleDeNF":$+=(0,r.nSR)(1,l-1),a=`$${(0,r.euh)($)}$ est un multiple de $${l}$.`,u=a.replace("."," ")+" : Faux",u+=i(l,$,!1),this.autoCorrection[h].propositions[1].statut=!0;break;case"NdiviseurEnvers":a=`$${(0,r.euh)($)}$ est un diviseur de $${l}$.`,u=a.replace("."," ")+" : Faux",u+=`, il faudrait plutôt dire $${l}$ est un diviseur de $${(0,r.euh)($)}$`,u+=i(l,$,!0),this.autoCorrection[h].propositions[1].statut=!0;break;case"divisibleParNEnvers":a=`$${l}$ est divisible par $${(0,r.euh)($)}$.`,u=a.replace("."," ")+" : Faux",u+=`, il faudrait plutôt dire $${(0,r.euh)($)}$ est divisible par $${l}$`,u+=i(l,$,!0),this.autoCorrection[h].propositions[1].statut=!0;break;case"multipleDeNEnvers":a=`$${l}$ est un multiple de $${(0,r.euh)($)}$.`,u=a.replace("."," ")+" : Faux",u+=`, il faudrait plutôt dire $${$}$ est un multiple de $${l}$`,u+=i(l,$,!0),this.autoCorrection[h].propositions[1].statut=!0}this.interactif&&(a+="<br>"+(0,o.l3)(this,h).texte),-1===this.listeQuestions.indexOf(a)&&(this.autoCorrection[h].enonce=`${a}\n`,this.listeQuestions.push(a),this.listeCorrections.push(u),h++),c++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Critères de divisibilité par 2 et 5\n2 : Critères de divisibilité par 2, 3, 5 et 9\n3 : Sans critères de divisibilité"]}},17007:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=26854.cc182ee392027385a2c4.js.map