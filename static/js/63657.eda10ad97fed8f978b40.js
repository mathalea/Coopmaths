"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[63657,25523],{63657:(e,s,i)=>{i.r(s),i.d(s,{amcReady:()=>$,amcType:()=>r,interactifReady:()=>u,interactifType:()=>a,titre:()=>l,dateDeModifImportante:()=>q,default:()=>c});var t=i(25523),o=i(22380),n=i(25482),h=i(11945);const $=!0,r="AMCNum",u=!0,a="numerique",l="Multiplier un nombre décimal par 10, 100 ou 1 000",q="12/12/2021";function c(){t.default.call(this),this.titre=l,this.consigne="Calculer.",this.sup=3,this.sup2=!1,this.sup3=!0,this.sup4=!1,this.spacing=2,this.spacingCorr=2,this.nbQuestions=8,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let e,s,i=[];1!==this.sup||this.sup2||(i=[1,2]),1===this.sup&&this.sup2&&(i=[1,2,5,6]),2!==this.sup||this.sup2||(i=[3,4]),2===this.sup&&this.sup2&&(i=[3,4,3,4,7,8,9,10]),3!==this.sup||this.sup2||(i=[1,2,3,4]),3===this.sup&&this.sup2&&(i=[1,2,3,4,5,6,7,8,9,10]),this.sup2&&(this.consigne="Calculer et compléter.");const t=(0,n.SRM)(i,this.nbQuestions),$=(0,n.SRM)([10,100,1e3],this.nbQuestions);for(let r,u,a,l,q,c=0,m=0;c<this.nbQuestions&&m<50;){switch(e=t[c],e){case 1:a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999)]),this.sup4||(a=this.sup3?(0,n.n0o)(a/(0,n.q$q)([10,100,1e3])):(0,n.n0o)(a/(0,n.q$q)([10,100,1e3,1e4]))),l=$[c],r=`$${(0,n.euh)(a)}\\times${(0,n.euh)(l)}=\\ldots$`,u=`$${(0,n.euh)(a)} \\times ${(0,n.euh)(l)} = ${(0,n.b1)((0,n.k$K)(a*l))}$`,s=(0,n.n0o)(a*l);break;case 2:a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999)]),this.sup4||(a=this.sup3?(0,n.n0o)(a/(0,n.q$q)([10,100,1e3])):(0,n.n0o)(a/(0,n.q$q)([10,100,1e3,1e4]))),l=$[c],r=`$${(0,n.euh)(l)}\\times${(0,n.euh)(a)}=\\ldots$`,u=`$${(0,n.euh)(l)} \\times ${(0,n.euh)(a)} = ${(0,n.b1)((0,n.k$K)(a*l))}$`,s=(0,n.n0o)(a*l);break;case 3:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$${(0,n.qaf)(a,q)}\\times${(0,n.euh)(l)}=\\ldots$`,u=`$${(0,n.qaf)(a,q)} \\times ${(0,n.euh)(l)} = ${(0,n.qaf)(a*l,q)} = ${(0,n.b1)((0,n.k$K)(a/q*l))}$`,s=(0,n.n0o)(a*l/q);break;case 4:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$${(0,n.euh)(l)}\\times${(0,n.qaf)(a,q)}=\\ldots$`,u=`$${(0,n.euh)(l)} \\times ${(0,n.qaf)(a,q)} = ${(0,n.qaf)(a*l,q)} = ${(0,n.b1)((0,n.k$K)(a/q*l))}$`,s=(0,n.n0o)(a*l/q);break;case 5:a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999)]),this.sup4||(a=this.sup3?(0,n.n0o)(a/(0,n.q$q)([10,100,1e3])):(0,n.n0o)(a/(0,n.q$q)([10,100,1e3,1e4]))),l=$[c],r=`$\\ldots \\times${(0,n.euh)(l)} = ${(0,n.k$K)(a*l)}$`,u=`$${(0,n.b1)((0,n.euh)(a))} \\times ${(0,n.euh)(l)} = ${(0,n.k$K)(a*l)}$`,s=a;break;case 6:a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999)]),this.sup4||(a=this.sup3?(0,n.n0o)(a/(0,n.q$q)([10,100,1e3])):(0,n.n0o)(a/(0,n.q$q)([10,100,1e3,1e4]))),l=$[c],r=`$${(0,n.euh)(l)} \\times \\ldots = ${(0,n.k$K)(a*l)}$`,u=`$${(0,n.euh)(l)} \\times ${(0,n.b1)((0,n.euh)(a))}  = ${(0,n.k$K)(a*l)}$`,s=l;break;case 7:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$${(0,n.qaf)(a,q)}\\times \\ldots = ${(0,n.k$K)(a/q*l)}$`,u=`$${(0,n.qaf)(a,q)} \\times ${(0,n.b1)((0,n.euh)(l))} = ${(0,n.qaf)(a*l,q)} = ${(0,n.k$K)(a/q*l)}$`,s=l;break;case 8:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$ \\ldots \\times${(0,n.qaf)(a,q)}= ${(0,n.k$K)(a/q*l)}$`,u=`$${(0,n.b1)((0,n.euh)(l))} \\times ${(0,n.qaf)(a,q)} = ${(0,n.qaf)(a*l,q)} = ${(0,n.k$K)(a/q*l)}$`,s=l;break;case 9:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$${(0,n.qaf)(a,"\\ldots")}\\times${(0,n.euh)(l)} = ${(0,n.k$K)(a/q*l)}$`,u=`$${(0,n.qaf)(a,(0,n.b1)((0,n.euh)(q)))} \\times ${(0,n.euh)(l)} = ${(0,n.qaf)(a*l,q)} = ${(0,n.k$K)(a/q*l)}$`,s=q;break;case 10:if(a=(0,n.q$q)([(0,n.nSR)(11,99),(0,n.nSR)(100,999),(0,n.nSR)(2,9)]),l=$[c],this.sup4)for(q=(0,n.q$q)([10,100,1e3]);q>l;)q=(0,n.q$q)([10,100,1e3]);else q=(0,n.q$q)([10,100,1e3]);r=`$${(0,n.euh)(l)}\\times${(0,n.qaf)(a,"\\ldots")} = ${(0,n.k$K)(a/q*l)}$`,u=`$${(0,n.euh)(l)} \\times ${(0,n.qaf)(a,(0,n.b1)((0,n.euh)(q)))} = ${(0,n.qaf)(a*l,q)} = ${(0,n.k$K)(a/q*l)}$`,s=q}o.Do.isHtml&&this.interactif&&(r+="$~=$"+(0,h.te)(this,c)),(0,h.Iq)(this,c,s),o.Do.isAmc&&(this.autoCorrection[c].enonce=r,this.autoCorrection[c].propositions=[{texte:u,statut:""}],this.autoCorrection[c].reponse.param={digits:(0,n.WW7)(s)+(0,n.D4$)(s)+2,decimals:(0,n.D4$)(s)+1,signe:!1,exposantNbChiffres:0}),-1===this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(u),c++),m++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type de calculs",3,"1 : Écriture décimale\n2 : Écriture fractionnaire\n3 : Mélange"],this.besoinFormulaire2CaseACocher=["Avec des calculs à trous"],this.besoinFormulaire3CaseACocher=["Trois décimales maximum",!0],this.besoinFormulaire4CaseACocher=["Que des nombres entiers",!0]}},25523:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=63657.eda10ad97fed8f978b40.js.map