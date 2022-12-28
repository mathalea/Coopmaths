"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[33828,25523],{33828:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>b,interactifReady:()=>a,interactifType:()=>u,amcReady:()=>l,amcType:()=>d,default:()=>m});var r=i(25523),t=i(25482),o=i(11945),n=i(22380);const b="Résoudre des problèmes avec recherche de diviseurs communs",a=!0,u="mathLive",l=!0,d="AMCHybride";function m(){r.default.call(this),this.consigne="",this.nbQuestionsModifiable=!0,this.nbQuestions=3,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.interactifType="mathLive",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let e=[],s=[];if(this.sup)if("number"==typeof this.sup)e[0]=this.sup;else{e=this.sup.split("-");for(let s=0;s<e.length;s++)e[s]=(0,t.QmD)(1,3,parseInt(e[s]))}else e=[1,2,3];s=(0,t.bqK)(e,this.nbQuestions);const i=[2,3,5,7,11];for(let r,b,a=0,u=0;a<this.nbQuestions&&u<50;){const e=(0,t.nSR)(30,39),l=(0,t.nSR)(0,4),d=i[l],m=i[(0,t.nSR)(0,4,[l])];switch(s[a]){case 1:this.interactif&&!n.Do.isAmc?(r=`Un fleuriste dispose de ${d*e} iris et de ${m*e} roses. <br>`,r+="Il veut, en utilisant toutes ses fleurs, réaliser un maximum de bouquets ",r+="contenant tous le même nombre d’iris et le même nombre de roses. <br>",r+="Donner le nombre maximal de bouquets que le fleuriste peut réaliser ",r+="et la composition du bouquet.<br><br>",r+=(0,t.bk1)(0)+`Nombre maximal de bouquets :${(0,t.sp)(20)}`,r+=(0,o.G5)(this,3*a,"inline largeur25")+"<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)}- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de bouquets est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",(0,o.Iq)(this,3*a,e),r+=(0,t.bk1)(1)+`Nombre d’iris dans chaque bouquet :${(0,t.sp)(8)}`,r+=(0,o.G5)(this,3*a+1,"inline largeur25")+"<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre d’iris dans chaque bouquet est :"+(0,t.PH8)(` ${d}`)+".<br><br>",(0,o.Iq)(this,3*a+1,d),r+=(0,t.bk1)(2)+" Nombre de roses dans chaque bouquet :",r+=(0,o.G5)(this,3*a+2,"inline largeur25")+"<br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de roses dans chaque bouquet est :"+(0,t.PH8)(` ${m}`)+".<br><br>",(0,o.Iq)(this,3*a+2,m)):(r=`Un fleuriste dispose de ${d*e} iris et de ${m*e} roses. <br>`,r+="Il veut, en utilisant toutes ses fleurs, réaliser un maximum de bouquets ",r+="contenant tous le même nombre d’iris et le même nombre de roses. <br><br>",r+=(0,t.bk1)(0)+"Quel est le nombre maximal de bouquets ?<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)}- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de bouquets est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",r+=(0,t.bk1)(1)+"Quel est le nombre d’iris dans chaque bouquet ?<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre d’iris dans chaque bouquet est :"+(0,t.PH8)(` ${d}`)+".<br><br>",r+=(0,t.bk1)(2)+"Quel est le nombre de roses dans chaque bouquet ?<br><br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de roses dans chaque bouquet est :"+(0,t.PH8)(` ${m}`)+".<br><br>");break;case 2:this.interactif&&!n.Do.isAmc?(r=`Un professeur organise une sortie pédagogique au Futuroscope pour ses élèves de 3ème. Il est accompagné de ${d*e} garçons et de ${m*e} filles. <br>`,r+="Il souhaite répartir tous les élèves en réalisant un maximum de groupes ",r+="contenant tous le même nombre de garçons et le même nombre de filles. <br>",r+="Donner le nombre maximal de groupes que le professeurs peut réaliser ",r+="et la composition de chaque groupe.<br><br>",r+=(0,t.bk1)(0)+`Nombre maximal de groupes :${(0,t.sp)(26)}`,r+=(0,o.G5)(this,3*a,"inline largeur25")+"<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)}- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de groupes est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",(0,o.Iq)(this,3*a,e),r+=(0,t.bk1)(1)+"Nombre de garçons dans chaque groupe :",r+=(0,o.G5)(this,3*a+1,"inline largeur25")+"<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre de garçons dans chaque groupe est :"+(0,t.PH8)(` ${d}`)+".<br><br>",(0,o.Iq)(this,3*a+1,d),r+=(0,t.bk1)(2)+` Nombre de filles dans chaque groupe :${(0,t.sp)(6)}`,r+=(0,o.G5)(this,3*a+2,"inline largeur25")+"<br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de filles dans chaque groupe est :"+(0,t.PH8)(` ${m}`)+".<br><br>",(0,o.Iq)(this,3*a+2,m)):(r=`Un professeur organise une sortie pédagogique au Futuroscope pour ses élèves de 3ème. Il est accompagné de ${d*e} garçons et de ${m*e} filles. <br>`,r+="Il souhaite répartir tous les élèves en réalisant un maximum de groupes ",r+="contenant tous le même nombre de garçons et le même nombre de filles. <br><br>",r+=(0,t.bk1)(0)+"Quel est le nombre maximal de groupes ?<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)}- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de groupes est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",r+=(0,t.bk1)(1)+"Quel est le nombre de garçons dans chaque groupe ?<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre de garçons dans chaque groupe est :"+(0,t.PH8)(` ${d}`)+".<br><br>",r+=(0,t.bk1)(2)+"Quel est le nombre de filles dans chaque groupe ?<br><br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de filles dans chaque groupe est :"+(0,t.PH8)(` ${m}`)+".<br><br>");break;default:this.interactif&&!n.Do.isAmc?(r=`Un boulanger dispose de ${d*e} croissants et de ${m*e} brioches. <br>`,r+="Il veut, en utilisant toutes ses viennoiseries, réaliser un maximum de corbeilles ",r+="contenant toutes le même nombre de croissants et le même nombre de brioches. <br>",r+="Donner le nombre maximal de corbeilles que le boulanger peut réaliser ",r+="et la composition de chaque corbeille.<br><br>",r+=(0,t.bk1)(0)+"Nombre maximal de corbeilles :"+`${(0,t.sp)(30)}`,r+=(0,o.G5)(this,3*a,"inline largeur25")+"<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)};- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de corbeilles est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",(0,o.Iq)(this,3*a,e),r+=(0,t.bk1)(1)+"Nombre de croissants dans chaque corbeille :",r+=(0,o.G5)(this,3*a+1,"inline largeur25")+"<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre de croissants dans chaque corbeille est :"+(0,t.PH8)(` ${d}`)+".<br><br>",(0,o.Iq)(this,3*a+1,d),r+=(0,t.bk1)(2)+` Nombre de brioches dans chaque corbeille :${(0,t.sp)(2)}`,r+=(0,o.G5)(this,3*a+2,"inline largeur25")+"<br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de brioches dans chaque corbeille est :"+(0,t.PH8)(` ${m}`)+".<br><br>",(0,o.Iq)(this,3*a+2,m)):(r=`Un boulanger dispose de ${d*e} croissants et de ${m*e} brioches. <br>`,r+="Il veut, en utilisant toutes ses viennoiseries, réaliser un maximum de corbeilles ",r+="contenant toutes le même nombre de croissants et le même nombre de brioches. <br>",r+=(0,t.bk1)(0)+"Quel est le nombre maximal de corbeilles ?<br><br>",b=(0,t.bk1)(0),b+=`- Les diviseurs de ${d*e} sont : ${(0,t.CzH)(d*e).join(", ")}.<br>`,b+=`${(0,t.sp)(2)}- Les diviseurs de ${m*e} sont : ${(0,t.CzH)(m*e).join(", ")}.<br>`,b+=`${e} est le plus grand nombre qui divise à la fois ${d*e} et ${m*e}.<br>`,b+=" Le nombre maximal de corbeilles est donc : "+(0,t.PH8)(`${e}`)+".<br><br>",r+=(0,t.bk1)(1)+"Quel est le nombre de croissants dans chaque corbeille ?<br><br>",b+=(0,t.bk1)(1)+` $${d*e} \\div ${e} = ${d}$<br>`,b+="Le nombre de croissants dans chaque corbeille est :"+(0,t.PH8)(` ${d}`)+".<br><br>",r+=(0,t.bk1)(2)+"Quel est le nombre de brioches dans chaque corbeille ?<br><br>",b+=(0,t.bk1)(2)+` $${m*e} \\div ${e} = ${m}$<br>`,b+="Le nombre de brioches dans chaque corbeille est :"+(0,t.PH8)(` ${m}`)+".<br><br>")}this.questionJamaisPosee(a,d,m,e)&&(n.Do.isAmc&&(this.autoCorrection[a]={enonce:r,propositions:[{type:"AMCNum",propositions:[{texte:b,statut:"",reponse:{texte:"a) ",valeur:e,param:{digits:2,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"b) ",valeur:d,param:{digits:2,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"c) ",valeur:m,param:{digits:2,decimals:0,signe:!1,approx:0}}}]}]}),this.listeQuestions.push(r),this.listeCorrections.push(b),a++),u++}(0,t.K1R)(this)},this.besoinFormulaireTexte=["Choix des problèmes","Nombres séparés par des tirets\n1 : Fleuriste\n2 : Professeur\n3 : Boulanger\n"]}},25523:(e,s,i)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const r of s)void 0!==r&&(i+=r.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>r})}}]);
//# sourceMappingURL=33828.ea0149bac7cf9f691a10.js.map