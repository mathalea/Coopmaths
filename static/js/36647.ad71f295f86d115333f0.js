/*! For license information please see 36647.ad71f295f86d115333f0.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36647,76492,25523],{76492:(i,s,t)=>{t.r(s),t.d(s,{interactifReady:()=>n,interactifType:()=>h,titre:()=>u,default:()=>a});var e=t(25523),o=t(25482),r=t(11945);const n=!0,h="mathLive",u="Décomposition en facteurs premiers";function a(){e.default.call(this),this.consigne="Écrire les nombres suivants sous la forme d'un produit de facteurs premiers rangés dans l'ordre croissant.",this.spacing=2,this.nbQuestions=6,this.sup=2,this.sup2=!1,this.sup3=!1,this.sup4=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nouvelleVersion=function(){let i,s,t;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup3?(s=[2,3,5,7,11],t=[2,3,7,13,17]):(s=[2,3,5],t=[2,5,7,11]),i=this.sup2&&this.sup3?(0,o.SRM)([!0,!0,!1,!0],this.nbQuestions):this.sup2?(0,o.SRM)([!1,!1,!1,!0],this.nbQuestions):(0,o.SRM)([!1,!1,!1,!1],this.nbQuestions),this.sup=parseInt(this.sup);for(let e,n,h,u,a,l=0,c=[],p=0;l<this.nbQuestions&&p<50;){c=[],n=this.sup+2;for(let i=0;i<n;i++)i<n-1?n>3&&0===i||n>4&&1===i?this.sup3?c.push((0,o.q$q)([2,3])):c.push(2):this.sup3?c.push((0,o.q$q)(s.concat(7))):c.push((0,o.q$q)(s)):this.sup3?c.push((0,o.q$q)(t.concat([3,13]))):c.push((0,o.q$q)(t));this.sup2&&i[l]&&(this.sup3?c.push(2,2,3,5):c.push(2,2,5,5)),e=1;for(let i=0;i<c.length;i++)e*=c[i];h="$ "+(0,o.euh)(e)+" = \\dotfill $",a=this.correctionDetaillee?"":"$ "+(0,o.euh)(e)+" = ",u="",c.sort(o.eVm);let f=new Set(c);f=[...f];let m="";for(let i=0;i<f.length;i++){const s=f[i];let t=0;for(let i=0;i<c.length;i++)c[i]===s&&t++;m+=t>1?`${s}^${t}`:`${s}`,i!==f.length-1&&(m+=" \\times ")}let b=1,d="",C="";for(let i=0;i<c.length-1;i++){if(!this.sup3&&!this.sup4)if(this.correctionDetaillee){d+=c[i]+" \\times  ";for(let s=i+1;s<c.length;s++)b*=c[s];a+="$"+(0,o.euh)(e)+" = "+d+b+"$<br>",C=d+b,b=1}else a+=c[i]+" \\times  ";u+=c[i]+"\\times"}this.sup3||this.sup4?a+=(0,o.j6R)(e,!0):this.correctionDetaillee||(a+=c[c.length-1]),this.correctionDetaillee?a+=(0,o.PH8)(`Donc la décomposition en produit de facteurs premiers de $\\mathbf{${(0,o.euh)(e)}}$ vaut $\\mathbf{${C}}$`):a+=" $",u+=c[c.length-1],h+=(0,r.G5)(this,l),(0,r.Iq)(this,l,[u,m]),this.questionJamaisPosee(l,...c)&&(this.listeQuestions.push(h),this.listeCorrections.push(a),l++),p++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : 3 facteurs\n2 : 4 facteurs\n3 : 5 facteurs"],this.besoinFormulaire2CaseACocher=["Grands nombres (une fois sur quatre)"]}},25523:(i,s,t)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...s){0===i&&(this.listeArguments=[]);let t="";for(const e of s)void 0!==e&&(t+=e.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(s),t.d(s,{default:()=>e})},36647:(i,s,t)=>{t.r(s),t.d(s,{interactifReady:()=>e.interactifReady,interactifType:()=>e.interactifType,titre:()=>o,default:()=>r});var e=t(76492);const o="Décomposer en produit de facteurs premiers";function r(){e.default.call(this),this.nbQuestions=1,this.sup2=!1,this.sup=1,this.tailleDiaporama=2,this.formatChampTexte="largeur15 inline",this.consigne="Décomposer en produit de facteurs premiers :<br>\n  (facteurs dans l’ordre croissant)"}}}]);
//# sourceMappingURL=36647.ad71f295f86d115333f0.js.map