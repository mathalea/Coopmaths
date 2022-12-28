"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[41654,25523],{25523:(i,e,t)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const n of e)void 0!==n&&(t+=n.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>n})},41654:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>$,default:()=>r});var n=t(25523),s=t(22380),o=t(25482);const $="Déterminer un antécédent";function r(){n.default.call(this),this.titre=$,this.consigne="Répondre aux questions suivantes avec une valeur exacte simplifiée. ",this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.spacingCorr=s.Do.isHtml?3:1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=(0,o.SRM)([1,2,3,4],this.nbQuestions);for(let e,t,n=0,s=0;n<this.nbQuestions&&s<50;){e="",t="";let $=0,r=0,a=0,u=0,h=0,l=0,c="";switch(i[n]){case 1:$=(0,o.nSR)(-20,20,[-1,0,1]),r=(0,o.nSR)(-20,20),l=(0,o.nSR)(-20,20),c=`$f(x)=${$}x ${(0,o.tPu)(r)}$`,e+=`Déterminer l'antécédent de $${l}$ par la fonction $f$ définie par ${c}. `,t+=`On cherche un nombre $x$ tel que $f(x) = ${l}$. `,t+=`On résout donc l'équation : $f(x) = ${l}$. <br>`,t+="$\\begin{aligned} ",t+=`${$}x ${(0,o.tPu)(r)} &= ${l} \\\\ `,t+=`${$}x &= ${l} ${(0,o.tPu)(-r)} \\\\ `,1===(0,o.Md9)(l-r,$)&&l-r>0&&$>0?t+=`x &= ${(0,o.qaf)(l-r,$)} \\\\`:t+=`x &= ${(0,o.qaf)(l-r,$)} = ${(0,o.xau)(l-r,$)}\\\\ `,t+="\\end{aligned}$";break;case 2:$=(0,o.nSR)(-999,999,[-1,0,1]),r=(0,o.nSR)(-999,999,[0]),l=(0,o.nSR)(-999,999,[0]),c=`$f(x)=${$}x ${(0,o.tPu)(r)}$`,e+=`Déterminer l'antécédent de $${l}$ par la fonction $f$ définie par ${c}. `,t+=`On cherche un nombre $x$ tel que $f(x) = ${l}$. `,t+=`On résout donc l'équation : $f(x) = ${l}$. <br>`,t+="$\\begin{aligned} ",t+=` ${$}x ${(0,o.tPu)(r)}&= ${l} \\\\ `,t+=` ${$}x &= ${l} ${(0,o.tPu)(-r)}\\\\ `,1===(0,o.Md9)(l-r,$)&&l-r>0&&$>0?t+=`x &= ${(0,o.qaf)(l-r,$)}\\\\`:t+=`x &= ${(0,o.qaf)(l-r,$)} = ${(0,o.xau)(l-r,$)}\\\\`,t+="\\end{aligned}$";break;case 3:$=(0,o.nSR)(-20,20,[-1,0,1]),r=(0,o.nSR)(-20,20,[0]),a=(0,o.nSR)(-20,20,[0]),l=(0,o.nSR)(-20,20),c=`$f(x)=${$}(x ${(0,o.tPu)(r)})${(0,o.tPu)(a)}$`,e+=`Déterminer l'antécédent de $${l}$ par la fonction $f$ définie par ${c}. `,t+=`On cherche un nombre $x$ tel que $f(x) = ${l}$. `,t+=`On résout donc l'équation : $f(x) = ${l}$. <br>`,t+="$\\begin{aligned} ",t+=`${$}(x ${(0,o.tPu)(r)})${(0,o.tPu)(a)} &= ${l}\\\\`,t+=`${$}x ${(0,o.tPu)($*r)}${(0,o.tPu)(a)} &= ${l}\\\\`,t+=`${$}x ${(0,o.tPu)($*r+a)} &= ${l}\\\\`,t+=`${$}x &= ${l} ${(0,o.tPu)(-$*r-a)}\\\\`,1===(0,o.Md9)(l-$*r-a,$)&&l-$*r-a>0&&$>0?t+=`x &= ${(0,o.qaf)(l-$*r-a,$)}\\\\`:t+=`x &= ${(0,o.qaf)(l-$*r-a,$)} = ${(0,o.xau)(l-$*r-a,$)}\\\\`,t+="\\end{aligned}$";break;case 4:$=(0,o.nSR)(-20,20,[-1,0,1]),r=(0,o.nSR)(-20,20,[-1,0,1]),a=(0,o.nSR)(-20,20,[0]),u=(0,o.nSR)(-20,20,[-1,0,1,-$*r]),h=(0,o.nSR)(-20,20,[0]),l=(0,o.nSR)(-20,20),c=`$f(x)=${$}(${r}x ${(0,o.tPu)(a)})${(0,o.tPu)(u)}x${(0,o.tPu)(h)}$`,e+=`Déterminer l'antécédent de $${l}$ par la fonction $f$ définie par ${c}. `,t+=`On cherche un nombre $x$ tel que $f(x) = ${l}$. `,t+=`On résout donc l'équation : $f(x) = ${l}$. <br>`,t+="$\\begin{aligned} ",t+=`${$}(${r}x ${(0,o.tPu)(a)})${(0,o.tPu)(u)}x${(0,o.tPu)(h)} &= ${l}\\\\`,t+=`${$*r}x ${(0,o.tPu)($*a)}${(0,o.tPu)(u)}x${(0,o.tPu)(h)} &= ${l}\\\\`,t+=`${$*r+u}x ${(0,o.tPu)($*a+h)} &= ${l}\\\\`,t+=`${$*r+u}x  &= ${l}${(0,o.tPu)(-$*a-h)}\\\\`,t+=`${$*r+u}x &= ${l-$*a-h}\\\\`,1===(0,o.Md9)(l-$*a-h,$*r+u)&&l-$*a-h>0&&$*r+u>0?t+=`x &= ${(0,o.qaf)(l-$*a-h,$*r+u)}\\\\`:t+=`x &= ${(0,o.qaf)(l-$*a-h,$*r+u)} = ${(0,o.xau)(l-$*a-h,$*r+u)}\\\\`,t+="\\end{aligned}$"}this.questionJamaisPosee(n,$,r,a,u,l,h)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),n++),s++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=41654.73cde2710f32eda59e41.js.map