"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[88354,25523],{88354:(i,s,e)=>{e.r(s),e.d(s,{titre:()=>r,amcReady:()=>a,interactifReady:()=>h,interactifType:()=>m,amcType:()=>c,default:()=>b});var t=e(25523),$=e(22380),n=e(25482),o=e(11945);const r="Calculer en utilisant les priorités opératoires",a=!0,h=!0,m="numerique",c="AMCNum";function b(){t.default.call(this),this.titre=r,this.consigne="Calculer :",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=1,this.sup=3,this.sup2=!1,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let i=[];i=1===parseInt(this.sup)?(0,n.NaF)(12):2===parseInt(this.sup)?(0,n.NaF)(22,(0,n.NaF)(12)):(0,n.NaF)(22);const s=(0,n.SRM)(i,this.nbQuestions);for(let e,t,r,a,h,m,c,b,u=0,l=0;u<this.nbQuestions&&l<50;){switch(s[u]){case 1:h=(0,n.nSR)(2,11),m=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),e=`$${h}+${m}\\times${c}$`,t=`$${h}+${(0,n.b1)(m+"\\times"+c)}=${h}+${m*c}=${h+m*c}$`,(0,o.Iq)(this,u,h+m*c);break;case 2:h=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),m=c*(0,n.nSR)(2,11),e=`$${h}+${m}\\div${c}$`,t=`$${h}+${(0,n.b1)(m+"\\div"+c)}=${h}+${m/c}=${h+m/c}$`,(0,o.Iq)(this,u,h+m/c);break;case 3:m=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),h=m*(0,n.nSR)(2,11),e=`$${h}\\div${m}\\times${c}$`,t=`$${(0,n.b1)(h+"\\div"+m)}\\times${c}=${h/m}\\times${c}=${h/m*c}$`,(0,o.Iq)(this,u,h/m*c);break;case 4:m=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),h=m*c+(0,n.nSR)(2,11),e=`$${h}-${m}\\times${c}$`,t=`$${h}-${(0,n.b1)(m+"\\times"+c)}=${h}-${m*c}=${h-m*c}$`,(0,o.Iq)(this,u,h-m*c);break;case 5:(0,n.q$q)([!0,!1])?(c=(0,n.nSR)(2,6),h=c*(0,n.nSR)(2,5),m=(0,n.nSR)(2,6)):(c=(0,n.nSR)(2,6),m=c*(0,n.nSR)(2,5),h=(0,n.nSR)(2,6)),e=`$${h}\\times${m}\\div${c}$`,t=`$${(0,n.b1)(h+"\\times"+m)}\\div${c}=${h*m}\\div${c}=${h*m/c}$`,(0,o.Iq)(this,u,h*m/c);break;case 6:h=(0,n.nSR)(2,11),m=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),e=`$${h}\\times${m}+${c}$`,t=`$${(0,n.b1)(h+"\\times"+m)}+${c}=${h*m}+${c}=${h*m+c}$`,(0,o.Iq)(this,u,h*m+c);break;case 7:m=(0,n.nSR)(20,59),h=m+(0,n.nSR)(11,29),c=(0,n.nSR)(11,29),e=`$${h}-${m}+${c}$`,t=`$${(0,n.b1)(h+"-"+m)}+${c}=${h-m}+${c}=${h-m+c}$`,(0,o.Iq)(this,u,h-m+c);break;case 8:h=(0,n.nSR)(2,20),m=(0,n.nSR)(2,20),c=(0,n.nSR)(2,11),b=(0,n.nSR)(2,11),e=`$${h}+${m}+${c}\\times${b}$`,t=`$${h}+${m}+${(0,n.b1)(c+"\\times"+b)}=${h}+${m}+${c*b}=${h+m+c*b}$`,(0,o.Iq)(this,u,h+m+c*b);break;case 9:h=(0,n.nSR)(2,11),m=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),b=(0,n.nSR)(2,11),e=`$${h}\\times${m}+${c}\\times${b}$`,t=`$${(0,n.b1)(h+"\\times"+m)}+${(0,n.b1)(c+"\\times"+b)}=${h*m}+${c*b}=${h*m+c*b}$`,(0,o.Iq)(this,u,h*m+c*b);break;case 10:h=(0,n.nSR)(2,5),m=(0,n.nSR)(2,5),c=(0,n.nSR)(2,5),b=(0,n.nSR)(2,h*m*c-1),e=`$${h}\\times${m}\\times${c}-${b}$`,t=`$${(0,n.b1)(h+"\\times"+m)}\\times${c}-${b}=${(0,n.b1)(h*m+"\\times"+c)}-${b}=${h*m*c-b}$`,(0,o.Iq)(this,u,h*m*c-b);break;case 11:h=(0,n.nSR)(3,11),m=(0,n.nSR)(3,11),b=(0,n.nSR)(2,11),c=b*(0,n.nSR)(2,8),e=`$${h}\\times${m}-${c}\\div${b}$`,t=`$${(0,n.b1)(h+"\\times"+m)}-${(0,n.b1)(c+"\\div"+b)}=${h*m}-${c/b}=${h*m-c/b}$`,(0,o.Iq)(this,u,h*m-c/b);break;case 12:h=(0,n.nSR)(2,11),m=(0,n.nSR)(2,11),b=(0,n.nSR)(2,11),c=b*(0,n.nSR)(2,8),e=`$${h}\\times${m}+${c}\\div${b}$`,t=`$${(0,n.b1)(h+"\\times"+m)}+${(0,n.b1)(c+"\\div"+b)}=${h*m}+${c/b}=${h*m+c/b}$`,(0,o.Iq)(this,u,h*m+c/b);break;case 13:h=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),m=c+(0,n.nSR)(2,11),e=`$${h}\\times(${m}-${c})$`,t=`$${h}\\times(${(0,n.b1)(m+"-"+c)})=${h}\\times${m-c}=${h*(m-c)}$`,(0,o.Iq)(this,u,h*(m-c));break;case 14:m=(0,n.nSR)(11,39),h=m+(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),e=`$(${h}-${m})\\times${c}$`,t=`$(${(0,n.b1)(h+"-"+m)})\\times${c}=${h-m}\\times${c}=${(h-m)*c}$`,(0,o.Iq)(this,u,(h-m)*c);break;case 15:case 17:c=(0,n.nSR)(2,11),m=(0,n.nSR)(11,39),h=m+c*(0,n.nSR)(2,9),e=`$(${h}-${m})\\div${c}$`,t=`$(${(0,n.b1)(h+"-"+m)})\\div${c}=${h-m}\\div${c}=${(h-m)/c}$`,(0,o.Iq)(this,u,(h-m)/c);break;case 16:m=(0,n.nSR)(2,5),c=(0,n.nSR)(2,6),h=(m+c)*(0,n.nSR)(2,9),e=`$${h}\\div(${m}+${c})$`,t=`$${h}\\div(${(0,n.b1)(m+"+"+c)})=${h}\\div${m+c}=${h/(m+c)}$`,(0,o.Iq)(this,u,h/(m+c));break;case 18:c=(0,n.nSR)(11,39),m=c+(0,n.nSR)(2,5),h=(0,n.nSR)(2,5),b=(0,n.nSR)(2,5),e=`$${h}\\times(${m}-${c})\\times${b}$`,t=`$${h}\\times(${(0,n.b1)(m+"-"+c)})\\times${b}=${h}\\times${m-c}\\times${b}=${h*(m-c)*b}$`,(0,o.Iq)(this,u,h*(m-c)*b);break;case 19:b=(0,n.nSR)(11,39),c=b+(0,n.nSR)(2,5),h=(0,n.nSR)(2,5),m=(0,n.nSR)(2,5),e=`$${h}\\times${m}\\times(${c}-${b})$`,t=`$${h}\\times${m}\\times(${(0,n.b1)(c+"-"+b)})=${h}\\times${m}\\times${c-b}=${h*m*(c-b)}$`,(0,o.Iq)(this,u,h*m*(c-b));break;case 20:h=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),b=(0,n.nSR)(2,11),m=c*b+(0,n.nSR)(2,11),e=`$${h}\\times(${m}-${c}\\times${b})$`,t=`$${h}\\times(${m}-${(0,n.b1)(c+"\\times"+b)})=${h}\\times(${(0,n.b1)(m+"-"+c*b)})=${h}\\times${m-c*b}=${h*(m-c*b)}$`,(0,o.Iq)(this,u,h*(m-c*b));break;case 21:h=(0,n.nSR)(2,11),m=(0,n.nSR)(2,11),r=(0,n.CzH)(h*m),r.length>2&&r.pop(),r.length>2&&(0,n.XzT)(r,r[1]),a=(0,n.q$q)(r,[1]),c=(0,n.nSR)(1,a-1),b=a-c,e=`$${h}\\times${m}\\div(${c}+${b})$`,t=`$${h}\\times${m}\\div(${(0,n.b1)(c+"+"+b)})=${(0,n.b1)(h+"\\times"+m)}\\div${c+b}=${h*m}\\div${c+b}=${h*m/(c+b)}$`,(0,o.Iq)(this,u,h*m/(c+b));break;case 22:h=(0,n.nSR)(2,11),c=(0,n.nSR)(2,11),m=c*(0,n.nSR)(2,5),b=(0,n.nSR)(2,6),e=`$${h}\\times(${m}\\div${c}+${b})$`,t=`$${h}\\times(${(0,n.b1)(m+"\\div"+c)}+${b})=${h}\\times(${(0,n.b1)(m/c+"+"+b)})=${h}\\times${m/c+b}=${h*(m/c+b)}$`,(0,o.Iq)(this,u,h*(m/c+b))}if(this.sup2){e=`${(0,n.Gag)(u+1)} = ${e}`;const i=t.split("=");t="",i.forEach((function(i){i=i.replace("$",""),$.Do.isHtml&&(t+="<br>"),t+=`${(0,n.Gag)(u+1)} = $${i}$ <br>`}))}this.interactif&&$.Do.isHtml&&(e=e.substring(0,e.length-1)+"~=$"+(0,o.te)(this,u)),-1===this.listeQuestions.indexOf(e)&&($.Do.isAmc&&(this.autoCorrection[u].enonce=e.substring(0,e.length-1)+"~=$",this.autoCorrection[u].propositions=[{texte:t,statut:""}],this.autoCorrection[u].reponse.param.digits=(0,n.WW7)(this.autoCorrection[u].reponse.valeur[0])+1,this.autoCorrection[u].reponse.param.decimals=0),this.listeQuestions.push(e),this.listeCorrections.push(t),u++),l++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type de calculs",3,"1 : Sans parenthèses\n2 : Avec parenthèses\n3 : Mélange"],this.besoinFormulaire2CaseACocher=["Présentation des corrections en colonnes",!1]}},25523:(i,s,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...s){0===i&&(this.listeArguments=[]);let e="";for(const t of s)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(s),e.d(s,{default:()=>t})}}]);
//# sourceMappingURL=88354.a40348c17db9447c2da8.js.map