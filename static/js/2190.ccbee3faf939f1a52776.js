(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2190],{82190:(e,n,t)=>{"use strict";t.r(n),t.d(n,{amcReady:()=>u,amcType:()=>h,interactifReady:()=>R,interactifType:()=>S,titre:()=>c,default:()=>d});var s=t(84311),i=t(75216),o=t(89459),a=t(55339),r=t(32964);const u=!0,h=4,R=!0,S=" ",c="Additions et soustractions de nombres décimaux";function d(){i.default.call(this),this.titre=c,this.amcReady=u,this.interactifReady=R,this.amcType=h,this.consigne="Poser et effectuer les calculs suivants.",this.spacing=2,o.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=4,this.sup=3,this.tailleDiaporama=100,this.nouvelleVersion=function(){let e,n;this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];const t=(0,a.SRM)([5,6,7,8],this.nbQuestions),i=(0,a.SRM)([1,2,3,4],this.nbQuestions);let u=[];if(1===this.sup)u=(0,a.SRM)([5,6,7,8],this.nbQuestions);else if(2===this.sup)u=(0,a.SRM)([1,2,3,4],this.nbQuestions);else for(let s=0;s<this.nbQuestions;s++)this.autoCorrection[s]={},s+1<=this.nbQuestions/2?u.push(t[s]):u.push(i[s]);for(let h,R,S,c,d=0,p=0;d<this.nbQuestions&&p<50;){switch(e=u[d],e){case 1:S=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9),c=(0,a.n0o)(10*(0,a.nSR)(5,9)+(0,a.nSR)(6,9)+(0,a.nSR)(1,9)/10),h=`$${(0,a.euh)(S)}-${(0,a.euh)(c)}$`,n=(0,a.n0o)(S-c),R=(0,s.Z)({operande1:S,operande2:c,type:"soustraction"});break;case 2:S=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9),c=(0,a.n0o)(10*(0,a.nSR)(5,9)+(0,a.nSR)(6,9)+(0,a.nSR)(1,9)/10+(0,a.nSR)(1,9)/100),h=`$${(0,a.euh)(S)}-${(0,a.euh)(c)}$`,n=(0,a.n0o)(S-c),R=(0,s.Z)({operande1:S,operande2:c,type:"soustraction"});break;case 3:S=(0,a.n0o)(100*(0,a.nSR)(5,9)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9)+(0,a.nSR)(1,9)/10),c=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(6,9)+(0,a.nSR)(1,9),h=`$${(0,a.euh)(S)}-${(0,a.euh)(c)}$`,n=(0,a.n0o)(S-c),R=(0,s.Z)({operande1:S,operande2:c,type:"soustraction"});break;case 4:S=(0,a.n0o)(100*(0,a.nSR)(5,9)+(0,a.nSR)(1,5)),c=(0,a.n0o)(100*(0,a.nSR)(1,4)+10*(0,a.nSR)(1,9)+9+(0,a.nSR)(1,9)/10),h=`$${(0,a.euh)(S)}-${(0,a.euh)(c)}$`,n=(0,a.n0o)(S-c),R=(0,s.Z)({operande1:S,operande2:c,type:"soustraction"});break;case 5:S=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9),c=(0,a.n0o)(10*(0,a.nSR)(5,9)+(0,a.nSR)(6,9)+(0,a.nSR)(1,9)/10),h=`$${(0,a.euh)(S)}+${(0,a.euh)(c)}$`,n=(0,a.n0o)(S+c),R=(0,s.Z)({operande1:S,operande2:c,type:"addition"});break;case 6:S=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9),c=(0,a.n0o)(10*(0,a.nSR)(5,9)+(0,a.nSR)(6,9)+(0,a.nSR)(1,9)/10+(0,a.nSR)(1,9)/100),h=`$${(0,a.euh)(S)}+${(0,a.euh)(c)}$`,n=(0,a.n0o)(S+c),R=(0,s.Z)({operande1:S,operande2:c,type:"addition"});break;case 7:S=(0,a.n0o)(100*(0,a.nSR)(5,9)+10*(0,a.nSR)(2,5)+(0,a.nSR)(1,9)+(0,a.nSR)(1,9)/10),c=100*(0,a.nSR)(1,4)+10*(0,a.nSR)(6,9)+(0,a.nSR)(1,9),h=`$${(0,a.euh)(S)}+${(0,a.euh)(c)}$`,n=(0,a.n0o)(S+c),R=(0,s.Z)({operande1:S,operande2:c,type:"addition"});break;case 8:S=(0,a.n0o)(100*(0,a.nSR)(5,9)+(0,a.nSR)(1,5)),c=(0,a.n0o)(100*(0,a.nSR)(1,4)+10*(0,a.nSR)(1,9)+9+(0,a.nSR)(1,9)/10),h=`$${(0,a.euh)(S)}+${(0,a.euh)(c)}$`,n=(0,a.n0o)(S+c),R=(0,s.Z)({operande1:S,operande2:c,type:"addition"})}(0,r.Iq)(this,d,n),this.interactif&&o.Do.isHtml&&(h+="$~=$"+(0,r.te)(this,d)),o.Do.isAmc&&(this.autoCorrection[d].enonce=h,this.autoCorrection[d].propositions=[{texte:R,statut:""}],this.autoCorrection[d].reponse={valeur:n,param:{digits:(0,a.WW7)(n)+(0,a.D4$)(n)+2,decimals:(0,a.D4$)(n)+1,signe:!1,exposantNbChiffres:0}}),-1===this.listeQuestions.indexOf(h)&&(this.listeQuestions.push(h),this.listeCorrections.push(R),d++),p++}(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Additions de décimaux\n2: Soustraction de décimaux\n3 : Additions et soustraction de décimaux"]}}}]);
//# sourceMappingURL=2190.ccbee3faf939f1a52776.js.map