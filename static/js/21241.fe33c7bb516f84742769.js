"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[21241,25523],{21241:($,e,i)=>{i.r(e),i.d(e,{titre:()=>s,default:()=>o});var n=i(25523),r=i(22380),t=i(25482);const s="Trouver l’erreur dans une résolution d’équation du premier degré";function o(){let $;n.default.call(this),this.debug=!1,this.sup=1,this.debug?this.nbQuestions=5:this.nbQuestions=3,this.titre=s,this.consigne="Trouver l'erreur dans les résolutions suivantes.<br>On ne demande pas de résoudre l'équation.",r.Do.isHtml||(this.consigne=this.consigne.replace("<br>","")),this.nbCols=1,this.nbColsCorr=1,r.Do.isHtml?this.spacing=3:this.spacing=2,r.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){$=this.debug?[1,2,3,4,5]:(0,t.TVQ)([(0,t.q$q)([1,3]),(0,t.q$q)([2,4]),5]),this.listeQuestions=[],this.listeCorrections=[];const e=(0,t.bqK)($,this.nbQuestions);for(let $,i,n=0,r=0;n<this.nbQuestions&&r<50;){const s=["x","t","u","v","w","y","z"],o=s[(0,t.nSR)(0,s.length-1)],a=(0,t.nSR)(-9,9,[-1,0,1]),b=(0,t.nSR)(-9,9,[-1,0,1]),u=(0,t.nSR)(-9,9,[-1,0,1,a,-a]),c=(0,t.nSR)(-9,9,[-1,0,1]);function g($){return $>0?{signe:"+",operation:"soustraire",chgt_signe:$}:{signe:"",operation:"ajouter",chgt_signe:-1*$}}function p($,e){return(0,t.OlJ)($,e)[0]!==$}function l($,e){return p($,e)?1===(0,t.OlJ)($,e)[1]?`$= ${(0,t.OlJ)($,e)[0]}$`:0===(0,t.OlJ)($,e)[0]?"$ = 0":`$= \\dfrac{${(0,t.OlJ)($,e)[0]}}{${(0,t.OlJ)($,e)[1]}}$`:1===(0,t.OlJ)($,e)[1]?`$= ${(0,t.OlJ)($,e)[0]}$`:0===(0,t.OlJ)($,e)[0]?"$ = 0$":" "}const d=0===(0,t.nSR)(0,1)?{prenom:(0,t.nHh)(),pronom:"il"}:{prenom:(0,t.sTI)(),pronom:"elle"},m=[{pronom:d.pronom,prenom:d.prenom,a,b,c:u,d:c,inc:o,eq:`$${a}${o} ${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o}$`,et1:`${(0,t.HzX)("Étape 1 :")} $${a}${o} ${g(u).signe} ${u}${o} ${g(b).signe} ${b} = ${c} $`,et2:`${(0,t.HzX)("Étape 2 :")} $${a}${o} ${g(u).signe} ${u}${o} = ${c} ${g(-b).signe} ${-b} $`,et3:`${(0,t.HzX)("Étape 3 :")} $${a+u}${o} = ${c} ${g(-b).signe} ${-b} $`,et4:`${(0,t.HzX)("Étape 4 :")} $${o} = \\dfrac{${c} ${g(-b).signe} ${-b}}{${a+u}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${o} = \\dfrac{${c-b}}{${a+u}}$ ${l(c-b,a+u)}`,err:`L'erreur se situe à l'étape 1.\n            <br>${d.prenom} "a fait passer" le terme $${g(u).signe} ${u}${o}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${g(u).operation} $${g(u).chgt_signe}${o}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${a}${o} ${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o}$`,eq_corr_et1:`${(0,t.HzX)("Étape 1 : ")} $${(0,t.b1)(g(u).operation)}$ $${(0,t.b1)(g(u).chgt_signe)}$${(0,t.pRK)(`$${o}$`)} aux deux membres. \n          <br> $${a}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} $${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} \n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${a-u}${o} ${g(b).signe} ${b} = ${c}$\n          `,eq_corr_et2:`${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(g(b).operation)}$ $${(0,t.b1)(g(b).chgt_signe)}$ aux deux membres. \n          <br> $${a-u}${o} ${g(b).signe} ${b} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)} = ${c} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${a-u}${o} = ${c-b}$\n          `,eq_corr_et3:`${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(a-u)}$ les deux membres.\n          <br> $\\dfrac{${a-u}${o}}{${(0,t.b1)(a-u)}} = \\dfrac{${c-b}}{${(0,t.b1)(a-u)}}$\n          <br>$${o} = \\dfrac{${c-b}}{${a-u}}$ ${l(c-b,a-u)}\n          `},{pronom:d.pronom,prenom:d.prenom,a,b,c:u,d:c,inc:o,eq:`$${a}${o} ${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o}$`,et1:`${(0,t.HzX)("Étape 1 :")} $${a}${o} ${g(-u).signe} ${-u}${o} ${g(b).signe} ${b} = ${c}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${a}${o} ${g(-u).signe} ${-u}${o} = ${c} ${g(b).signe} ${b}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${a-u}${o} = ${c} ${g(b).signe} ${b}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${o} = \\dfrac{${c} ${g(b).signe} ${b}}{${a-u}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${o} = \\dfrac{${c+b}}{${a-u}}$ ${l(c+b,a-u)}`,err:`L'erreur se situe à l'étape 2.\n            <br>${d.prenom} "a fait passer" le terme $${g(b).signe} ${b}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${g(b).operation} $${g(b).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${a}${o} ${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o}$`,eq_corr_et1:`${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(g(u).operation)}$ $${(0,t.b1)(g(u).chgt_signe)}$${(0,t.pRK)(`$${o}$`)} aux deux membres \n          <br> $${a}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} $ ${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} \n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${a-u}${o} ${g(b).signe} ${b} = ${c}$\n          `,eq_corr_et2:`${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(g(b).operation)}$ $${(0,t.b1)(g(b).chgt_signe)}$ aux deux membres \n          <br> $${a-u}${o} ${g(b).signe} ${b} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)} = ${c} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${a-u}${o} = ${c-b}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(a-u)}$ les deux membres\n          <br> $\\dfrac{${a-u}${o}}{${(0,t.b1)(a-u)}} = \\dfrac{${c-b}}{${(0,t.b1)(a-u)}}$\n          <br>$${o} = \\dfrac{${c-b}}{${a-u}}$ ${l(c-b,a-u)}\n          `},{pronom:d.pronom,prenom:d.prenom,a,b,c:u,d:c,inc:o,eq:`$${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${a}${o} = ${u}${o} ${g(c).signe} ${c} ${g(-b).signe} ${-b}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${a}${o} ${g(u).signe} ${u}${o} = ${c} ${g(-b).signe} ${-b}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${a+u}${o} = ${c} ${g(-b).signe} ${-b}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${o} = \\dfrac{${c} ${g(-b).signe} ${-b}}{${a+u}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${o} = \\dfrac{${c-b}}{${a+u}}$ ${l(c-b,a+u)}`,err:`            L'erreur se situe à l'étape 2.\n            <br>${d.prenom} "a fait passer" le terme $${g(u).signe} ${u}${o}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${g(u).operation} $${g(u).chgt_signe}${o}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(g(u).operation)}$ $${(0,t.b1)(g(u).chgt_signe)}$${(0,t.pRK)(`$${o}$`)} aux deux membres \n          <br> $${a}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} $${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${a-u}${o} ${g(b).signe} ${b} = ${c}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(g(b).operation)}$ $${(0,t.b1)(g(b).chgt_signe)}$ aux deux membres \n          <br> $${a-u}${o} ${g(b).signe} ${b} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)} = ${c} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${a-u}${o} = ${c-b}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(a-u)}$ les deux membres\n          <br> $\\dfrac{${a-u}${o}}{${(0,t.b1)(a-u)}} = \\dfrac{${c-b}}{${(0,t.b1)(a-u)}}$\n          <br>$${o} = \\dfrac{${c-b}}{${a-u}}$ ${l(c-b,a-u)}\n          `},{pronom:d.pronom,prenom:d.prenom,a,b,c:u,d:c,inc:o,eq:`$${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${a}${o} = ${u}${o} ${g(c).signe} ${c} ${g(b).signe} ${b}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${a}${o} ${g(-u).signe} ${-u}${o} = ${c} ${g(b).signe} ${b}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${a-u}${o} = ${c} ${g(b).signe} ${b}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${o} = \\dfrac{${c} ${g(b).signe} ${b}}{${a-u}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${o} = \\dfrac{${c+b}}{${a-u}}$ ${l(c+b,a-u)}`,err:`            L'erreur se situe à l'étape 1.\n            <br>${d.prenom} "a fait passer" le terme $${g(b).signe} ${b}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${g(b).operation} $${g(b).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(g(u).operation)}$ $${(0,t.b1)(g(u).chgt_signe)}$${(0,t.pRK)(`$${o}$`)} aux deux membres \n          <br> $${a}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} $${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${a-u}${o} ${g(b).signe} ${b} = ${c}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(g(b).operation)}$ $${(0,t.b1)(g(b).chgt_signe)}$ aux deux membres \n          <br> $${a-u}${o} ${g(b).signe} ${b} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)} = ${c} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${a-u}${o} = ${c-b}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(a-u)}$ les deux membres\n          <br> $\\dfrac{${a-u}${o}}{${(0,t.b1)(a-u)}} = \\dfrac{${c-b}}{${(0,t.b1)(a-u)}}$\n          <br>$${o} = \\dfrac{${c-b}}{${a-u}}$ ${l(c-b,a-u)}\n          `},{pronom:d.pronom,prenom:d.prenom,a,b,c:u,d:c,inc:o,eq:`$${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${a}${o} = ${u}${o} ${g(c).signe} ${c} ${g(-b).signe} ${-b}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${a}${o} ${g(-u).signe} ${-u}${o} = ${c} ${g(-b).signe} ${-b}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${a-u}${o} = ${c} ${g(-b).signe} ${-b}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${o} = ${c} ${g(-b).signe} ${-b} - ${(0,t.PMY)(a-u)} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${o} = ${c-b-a+u}$`,err:`            L'erreur se situe à l'étape 4.\n            <br>${d.prenom} soustrait le coefficient de ${o} au lieu de diviser par ce coefficient.\n            <br>Or $${a-u}${o}$ représente la multiplication $${a-u}\\times ${o}$, et l'opération inverse de la multiplication c'est la division et non la soustraction.\n            <br>Ici il faut diviser les deux membres par $${a-u}$.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${a}${o} ${g(b).signe} ${b} = ${u}${o} ${g(c).signe} ${c} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(g(u).operation)}$ $${(0,t.b1)(g(u).chgt_signe)}$${(0,t.pRK)(`$${o}$`)} aux deux membres \n          <br> $${a}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)} $${g(b).signe} ${b} = ${c} ${g(u).signe} ${u}${o} ${(0,t.b1)(g(-u).signe)} ${(0,t.b1)(-u)}$${(0,t.pRK)(`$${o}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${a-u}${o} ${g(b).signe} ${b} = ${c}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(g(b).operation)}$ $${(0,t.b1)(g(b).chgt_signe)}$ aux deux membres \n          <br> $${a-u}${o} ${g(b).signe} ${b} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)} = ${c} ${(0,t.b1)(g(-b).signe)} ${(0,t.b1)(-b)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${a-u}${o} = ${c-b}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(a-u)}$ les deux membres\n          <br> $\\dfrac{${a-u}${o}}{${(0,t.b1)(a-u)}} = \\dfrac{${c-b}}{${(0,t.b1)(a-u)}}$\n          <br>$${o} = \\dfrac{${c-b}}{${a-u}}$ ${l(c-b,a-u)}\n          `}],h=[];for(let $=0;$<5;$++)h.push({enonce:`          ${m[$].prenom} doit résoudre l'équation suivante : ${m[$].eq}.\n          <br> Voilà ce qu'${m[$].pronom} écrit :\n          <br>${m[$].et1}\n          <br>${m[$].et2}\n          <br>${m[$].et3}\n          <br>${m[$].et4}\n          <br>${m[$].et_fin}\n        `,question:"",correction:`\n        ${m[$].err}\n        ${(0,t.HzX)("=== Voici une proposition de résolution détaillée : ===")}         \n        ${m[$].eq_corr}\n        ${m[$].eq_corr_et1}\n        ${m[$].eq_corr_et2}\n        ${m[$].eq_corr_et3}\n        `});switch(e[n]){case 1:$=`${h[0].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[0].correction}`,$+="\n             ",i=""):i=`${h[0].correction}`;break;case 2:$=`${h[1].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[1].correction}`,i=""):i=`${h[1].correction}`;break;case 3:$=`${h[2].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[2].correction}`,i=""):i=`${h[2].correction}`;break;case 4:$=`${h[3].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[3].correction}`,i=""):i=`${h[3].correction}`;break;case 5:$=`${h[4].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[4].correction}`,i=""):i=`${h[4].correction}`}-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(i),n++),r++}(0,t.K1R)(this)}}},25523:($,e,i)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function($){},this.questionJamaisPosee=function($,...e){0===$&&(this.listeArguments=[]);let i="";for(const n of e)void 0!==n&&(i+=n.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>n})}}]);
//# sourceMappingURL=21241.fe33c7bb516f84742769.js.map