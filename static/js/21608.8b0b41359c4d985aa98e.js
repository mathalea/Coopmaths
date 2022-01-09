"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[21608,25523],{21608:(e,o,t)=>{t.r(o),t.d(o,{titre:()=>s,default:()=>a});var i=t(25523),n=t(22380),r=t(25482);const s="Trouver ordre de grandeur d'opérations sur les décimaux";function a(){let e;i.default.call(this),this.beta=!1,this.beta,this.nbQuestions=1,this.consigne="Pour chaque opération proposée dans la première colonne, cocher la case correspondant à l'ordre de grandeur du résultat.",this.nbCols=1,this.nbColsCorr=1,n.Do.isHtml?this.spacing=3:this.spacing=2,n.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){e=this.beta?[0]:(0,r.TVQ)([0]),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const o=(0,r.bqK)(e,this.nbQuestions);for(let e,i,n=0,s=0;n<this.nbQuestions&&s<50;){const a=["\\text{Opération}","\\phantom{000}"+(0,r.euh)("1")+"\\phantom{000}","\\phantom{00}"+(0,r.euh)("10")+"\\phantom{00}","\\phantom{00}"+(0,r.euh)("100")+"\\phantom{00}","\\phantom{0}"+(0,r.euh)("1000")+"\\phantom{0}",(0,r.euh)("10000"),(0,r.euh)("100000")],h=["\\text{Opération}","\\phantom{000}"+(0,r.euh)("1")+"\\phantom{000}","\\phantom{00}"+(0,r.euh)("10")+"\\phantom{00}","\\phantom{00}"+(0,r.euh)("100")+"\\phantom{00}","\\phantom{0}"+(0,r.euh)("1000")+"\\phantom{0}",(0,r.euh)("10000"),(0,r.euh)("100000")],c=(0,r.nSR)(1,9,[4,5,6]),u=(0,r.nSR)(1,9),p=(0,r.nSR)(1,9),l=(0,r.nSR)(1,9,[4,5,6]),b=(0,r.nSR)(1,4),m=(0,r.nSR)(1,9),_=(0,r.nSR)(1,9),$=(0,r.nSR)(1,9),d=(0,r.nSR)(1,9),C=(0,r.nSR)(1,9),f=(0,r.nSR)(1,9),g=(0,r.nSR)(1,9),q=(0,r.nSR)(1,9);let R,S;do{R=(0,r.nSR)(2,9),S=(0,r.nSR)(2,9)}while(R*S>3&&R*S<7);const X=(0,r.q$q)([10,100]),x=(0,r.q$q)([1,10,100,1e3]),Q=(0,r.q$q)([.1,.01,.001]);function D(e,o){return e*o>=60?["","","","","",(0,r.b1)("X")]:["","","","",(0,r.b1)("X"),""]}function F(e,o){return e+o/10>=600?["","","",(0,r.b1)("X"),"",""]:["","",(0,r.b1)("X"),"","",""]}function v(e,o){let t;switch(e){case.1:t=o>=7?["","","",(0,r.b1)("X"),"",""]:["","",(0,r.b1)("X"),"","",""];break;case.01:t=o>=7?["","",(0,r.b1)("X"),"","",""]:["",(0,r.b1)("X"),"","","",""];break;case.001:t=o>=7?["",(0,r.b1)("X"),"","","",""]:[(0,r.b1)("X"),"","","","",""]}return t}function A(e){switch(e){case 1:return["","","",(0,r.b1)("X"),"",""];case 10:return["","",(0,r.b1)("X"),"","",""];case 100:return["",(0,r.b1)("X"),"","","",""];case 1e3:return[(0,r.b1)("X"),"","","","",""]}}let O=[{operation:`${100*R+10*m+1*C}\\times ${10*S+1*f}`,operation_corr:`${100*R+10*m+1*C}\\times ${10*S+1*f} \\simeq  ${100*R}\\times ${10*S} \\text{ soit } ${(0,r.euh)(100*R*(10*S))}`,operation_coche:D(R,S)},{operation:`${(0,r.euh)((100*p+10*$+1*f)/10)}+${100*u+10*_+1*f}`,operation_corr:`${(0,r.euh)((100*p+10*$+1*f)/10)}+${100*u+10*_+1*f} \\simeq ${100*p/10}+${100*u} \\text{ soit } ${100*p/10+100*u}`,operation_coche:F(100*u,100*p)},{operation:`${100*l+10*d+1*q}-${(0,r.euh)((100*p+10*$+1*g)/X)}`,operation_corr:`${100*l+10*d+1*q}-${(0,r.euh)((100*p+10*$+1*g)/X)} \\simeq ${100*l+10*d}-${(0,r.euh)(100*p/X)} \\text{ soit } ${100*l+10*d-100*p/X}`,operation_coche:(t=l,t>=7?["","","",(0,r.b1)("X"),"",""]:["","",(0,r.b1)("X"),"","",""])},{operation:`${(0,r.euh)(1e3*c+100*l+10*$+1*f)}\\times ${(0,r.euh)(Q)}`,operation_corr:`${(0,r.euh)(1e3*c+100*l+10*$+1*f)}\\times ${(0,r.euh)(Q)} \\simeq ${(0,r.euh)(1e3*c)}\\times ${(0,r.euh)(Q)} \\text{ soit } ${(0,r.euh)(1e3*c*Q)}`,operation_coche:v(Q,c)},{operation:`${(0,r.euh)((1e3*c+100*b+10*d+1*C)/x)}\\div ${c}`,operation_corr:`${(0,r.euh)((1e3*c+100*b+10*d+1*C)/x)}\\div ${c} \\simeq ${(0,r.euh)(1e3*c/x)}\\div ${c} \\text{ soit } ${(0,r.euh)(1e3*c/x/c)}`,operation_coche:A(x)}];O=(0,r.TVQ)(O);const T=[];for(let e=0;e<1;e++)T.push({enonce:`\n          ${(0,r.DDO)(a,[O[0].operation,O[1].operation,O[2].operation,O[3].operation,O[4].operation],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""])}\n          `,question:"",correction:`\n          Commençons par calculer un ordre de grandeur du résultat de chaque opération dans la première colonne du tableau.\n          <br>\n          ${(0,r.DDO)(h,[O[0].operation_corr,O[1].operation_corr,O[2].operation_corr,O[3].operation_corr,O[4].operation_corr],[O[0].operation_coche[0],O[0].operation_coche[1],O[0].operation_coche[2],O[0].operation_coche[3],O[0].operation_coche[4],O[0].operation_coche[5],O[1].operation_coche[0],O[1].operation_coche[1],O[1].operation_coche[2],O[1].operation_coche[3],O[1].operation_coche[4],O[1].operation_coche[5],O[2].operation_coche[0],O[2].operation_coche[1],O[2].operation_coche[2],O[2].operation_coche[3],O[2].operation_coche[4],O[2].operation_coche[5],O[3].operation_coche[0],O[3].operation_coche[1],O[3].operation_coche[2],O[3].operation_coche[3],O[3].operation_coche[4],O[3].operation_coche[5],O[4].operation_coche[0],O[4].operation_coche[1],O[4].operation_coche[2],O[4].operation_coche[3],O[4].operation_coche[4],O[4].operation_coche[5]])}`});if(0===o[n])e=`${T[0].enonce}`,this.beta?(e+="<br>",e+=`<br> =====CORRECTION======<br>${T[0].correction}`,e+="             ",i=""):i=`${T[0].correction}`;-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(i),n++),s++}var t;(0,r.K1R)(this)}}},25523:(e,o,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...o){0===e&&(this.listeArguments=[]);let t="";for(const i of o)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(o),t.d(o,{default:()=>i})}}]);
//# sourceMappingURL=21608.8b0b41359c4d985aa98e.js.map