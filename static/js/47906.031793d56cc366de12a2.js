"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[47906,17007],{47906:(n,i,e)=>{e.r(i),e.d(i,{titre:()=>a,interactifReady:()=>$,interactifType:()=>u,amcReady:()=>p,amcType:()=>h,default:()=>l});var t=e(17007),o=e(66170),s=e(30169),r=e(75664);const a="Résoudre un problème relevant de la proportionnalité avec les propriétés de linéarité.",$=!0,u="mathLive",p=!0,h="AMCHybride";function l(){let n;t.default.call(this),this.beta=!1,this.beta?this.nbQuestions=3:this.nbQuestions=1,this.consigne="",o.Do.isHtml?this.spacing=2:this.spacing=1,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){const i=[];n=(this.beta,[1]),this.listeQuestions=[],this.listeCorrections=[],n=[1];const e=(0,s.SRM)(n,this.nbQuestions);for(let n,$,u=0,p=0;u<this.nbQuestions&&p<50;){function h(n,i){return n>1?i.achat_plur:i.achat_sing}let l,c,b,m,d,C,x=0,g=0;do{l=(0,s.nSR)(1,9),c=(0,s.nSR)(1,9,[l]),b=l+c,m=(t=l)>(a=c)?(0,s.n0o)(t-a):t<a?(0,s.n0o)(a-t):0,d=(0,s.nSR)(10,19,[b])}while(1===m);l<c&&(C=l,l=c,c=C);const f=[{lieu:"la boulangerie",achat_sing:"pain au chocolat",achat_plur:"pains au chocolat",prenom1:(0,s.rV2)(),prenom2:(0,s.rV2)(),prenom3:(0,s.rV2)(),prenom4:(0,s.rV2)(),prenom_max:(0,s.rV2)(),n1:l,n2:c,n3:b,n4:m,nMax:d,pu:.9}],v=[],M=f[(0,s.nSR)(0,f.length-1)];switch(v.push({enonce:`\n          À ${M.lieu}, ${M.prenom1} achète $${M.n1}$ ${h(M.n1,M)} et paie $${(0,s.i6h)(M.pu*M.n1)}$ €.\n          <br>${M.prenom2} achète $${M.n2}$ ${h(M.n2,M)} et paie $${(0,s.i6h)(M.pu*M.n2)}$ €.\n          <br>\n          <br>${(0,s.bk1)(x++)} Combien paiera ${M.prenom3} pour $${M.n3}$ ${h(M.n3,M)} ? ${(0,r.G5)(this,3*u,"largeur25 inline")}\n          <br>${(0,s.bk1)(x++)} Combien paiera ${M.prenom4} pour $${M.n4}$ ${h(M.n4,M)} ? ${(0,r.G5)(this,3*u+1,"largeur25 inline")}\n          <br>${(0,s.bk1)(x++)} Quel est le nombre maximum de ${M.achat_plur} que ${M.prenom_max} peut acheter avec $${(0,s.i6h)(M.pu*M.nMax)}$ € ? ${(0,r.G5)(this,3*u+2,"largeur25 inline")}\n          `,question:"",correction:`\n        C'est une situation de proportionnalité. Nous pouvons donc utiliser les propriétés de linéarité de la proportionnalité.\n        <br>C'est ce que nous allons faire pour les deux premières questions.\n        <br>\n        <br>${(0,s.bk1)(g++)} Pour $${M.n1}$ ${h(M.n1,M)}, on paie $${(0,s.i6h)(M.pu*M.n1)}$ €.\n        <br> Pour $${M.n2}$ ${h(M.n2,M)}, on paie $${(0,s.i6h)(M.pu*M.n2)}$ €.\n        <br> Donc pour $${M.n1}+${M.n2}$ ${h(M.n3,M)}, on paie $${(0,s.i6h)(M.pu*M.n1)}$ € + $${(0,s.i6h)(M.pu*M.n2)}$ €.\n        <br> ${(0,s.pRK)(`${M.prenom3} paiera donc $${(0,s.i6h)(M.pu*M.n3)}$ € pour $${M.n3}$ ${h(M.n3,M)}.`)}\n        <br>\n        <br>${(0,s.bk1)(g++)} Pour $${M.n1}$ ${h(M.n1,M)}, on paie $${(0,s.i6h)(M.pu*M.n1)}$ €.\n        <br> Pour $${M.n2}$ ${h(M.n2,M)}, on paie $${(0,s.i6h)(M.pu*M.n2)}$ €.\n        <br> Donc pour $${M.n1}-${M.n2}$ ${h(M.n4,M)}, on paie $${(0,s.i6h)(M.pu*M.n1)}$ € - $${(0,s.i6h)(M.pu*M.n2)}$ €.\n        <br> ${(0,s.pRK)(`${M.prenom4} paiera donc $${(0,s.i6h)(M.pu*M.n4)}$ € pour $${M.n4}$ ${h(M.n4,M)}.`)}\n        <br>\n        <br>${(0,s.bk1)(g++)} On peut utiliser l'une ou l'autre des informations de l'énoncé pour répondre en revenant à l'unité.\n        <br> Par exemple pour $${M.n1}$ ${h(M.n1,M)}, on paie $${(0,s.i6h)(M.pu*M.n1)}$ €.\n        <br> Donc $1$ ${M.achat_sing} coûte $${(0,s.i6h)(M.pu*M.n1)}\\div ${M.n1} = ${(0,s.i6h)(M.pu)}$ €.\n        <br> Pour $${(0,s.i6h)(M.pu*M.nMax)}$ € nous aurons donc $${(0,s.i6h)(M.pu*M.nMax)}\\div ${(0,s.i6h)(M.pu)}$ € $= ${M.nMax}$ ${h(M.nMax,M)}.\n        <br> ${(0,s.pRK)(`Avec $${(0,s.i6h)(M.pu*M.nMax)}$ €, ${M.prenom_max} pourra donc acheter $${M.nMax}$ ${h(M.nMax,M)}.`)}\n        `}),e[u]){case 1:n=`${v[0].enonce}`,this.beta?(n+="<br>",n+=`<br> =====CORRECTION======<br>${v[0].correction}`,$=""):$=`${v[0].correction}`}-1===i.indexOf((0,s.NVf)(M.prenom4,M.n3,M.n2,M.nMax))&&(i.push((0,s.NVf)(M.prenom4,M.n3,M.n2,M.nMax)),o.Do.isAmc?this.autoCorrection[u]={enonce:n,propositions:[{type:"AMCNum",propositions:[{texte:$,statut:"",reponse:{texte:"a) ",valeur:(0,s.vbX)(M.pu*M.n3,2),param:{digits:(0,s.HV7)((0,s.vbX)(M.pu*M.n3,2)),decimals:(0,s.D4$)((0,s.vbX)(M.pu*M.n3,2)),signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"b) ",valeur:(0,s.vbX)(M.pu*M.n4,2),param:{digits:(0,s.HV7)((0,s.vbX)(M.pu*M.n4,2)),decimals:(0,s.D4$)((0,s.vbX)(M.pu*M.n4,2)),signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"c) ",valeur:M.nMax,param:{digits:2,decimals:0,signe:!1,approx:0}}}]}]}:((0,r.Iq)(this,3*u,(0,s.vbX)(M.pu*M.n3,2)),(0,r.Iq)(this,3*u+1,(0,s.vbX)(M.pu*M.n4,2)),(0,r.Iq)(this,3*u+2,M.nMax)),this.listeQuestions.push(n),this.listeCorrections.push($),u++),p++}var t,a;(0,s.K1R)(this)}}},17007:(n,i,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(n){},this.questionJamaisPosee=function(n,...i){0===n&&(this.listeArguments=[]);let e="";for(const t of i)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=47906.031793d56cc366de12a2.js.map