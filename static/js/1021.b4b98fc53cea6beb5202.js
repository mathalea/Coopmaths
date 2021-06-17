(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1021,2006],{21021:($,e,n)=>{"use strict";n.r(e),n.d(e,{titre:()=>s,default:()=>o});var i=n(2006),r=n(89846),t=n(91030);const s="Trouver l’erreur dans une résolution d’équation du premier degré";function o(){let $;i.default.call(this),this.debug=!1,this.sup=1,this.debug?this.nbQuestions=5:this.nbQuestions=3,this.titre=s,this.consigne="Trouver l'erreur dans les résolutions suivantes.<br>On ne demande pas de résoudre l'équation.",r.Do.isHtml||(this.consigne=this.consigne.replace("<br>","")),this.nbCols=1,this.nbColsCorr=1,r.Do.isHtml?this.spacing=3:this.spacing=2,r.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){$=this.debug?[1,2,3,4,5]:(0,t.TVQ)([(0,t.q$q)([1,3]),(0,t.q$q)([2,4]),5]),this.listeQuestions=[],this.listeCorrections=[];const e=(0,t.bqK)($,this.nbQuestions);for(let $,s,o=0,a=0;o<this.nbQuestions&&a<50;){const b=["x","t","u","v","w","y","z"],u=b[(0,t.nSR)(0,b.length-1)],c=(0,t.nSR)(-9,9,[-1,0,1]),g=(0,t.nSR)(-9,9,[-1,0,1]),p=(0,t.nSR)(-9,9,[-1,0,1,c,-c]),l=(0,t.nSR)(-9,9,[-1,0,1]);function n($){return $>0?{signe:"+",operation:"soustraire",chgt_signe:$}:{signe:"",operation:"ajouter",chgt_signe:-1*$}}function i($,e){return(0,t.OlJ)($,e)[0]!==$}function r($,e){return i($,e)?1===(0,t.OlJ)($,e)[1]?`$= ${(0,t.OlJ)($,e)[0]}$`:0===(0,t.OlJ)($,e)[0]?"$ = 0":`$= \\dfrac{${(0,t.OlJ)($,e)[0]}}{${(0,t.OlJ)($,e)[1]}}$`:1===(0,t.OlJ)($,e)[1]?`$= ${(0,t.OlJ)($,e)[0]}$`:0===(0,t.OlJ)($,e)[0]?"$ = 0$":" "}const d=0===(0,t.nSR)(0,1)?{prenom:(0,t.nHh)(),pronom:"il"}:{prenom:(0,t.sTI)(),pronom:"elle"},m=[{pronom:d.pronom,prenom:d.prenom,a:c,b:g,c:p,d:l,inc:u,eq:`$${c}${u} ${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u}$`,et1:`${(0,t.HzX)("Étape 1 :")} $${c}${u} ${n(p).signe} ${p}${u} ${n(g).signe} ${g} = ${l} $`,et2:`${(0,t.HzX)("Étape 2 :")} $${c}${u} ${n(p).signe} ${p}${u} = ${l} ${n(-g).signe} ${-g} $`,et3:`${(0,t.HzX)("Étape 3 :")} $${c+p}${u} = ${l} ${n(-g).signe} ${-g} $`,et4:`${(0,t.HzX)("Étape 4 :")} $${u} = \\dfrac{${l} ${n(-g).signe} ${-g}}{${c+p}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${u} = \\dfrac{${l-g}}{${c+p}}$ ${r(l-g,c+p)}`,err:`L'erreur se situe à l'étape 1.\n            <br>${d.prenom} "a fait passer" le terme $${n(p).signe} ${p}${u}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${n(p).operation} $${n(p).chgt_signe}${u}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${c}${u} ${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u}$`,eq_corr_et1:`${(0,t.HzX)("Étape 1 : ")} $${(0,t.b1)(n(p).operation)}$ $${(0,t.b1)(n(p).chgt_signe)}$${(0,t.pRK)(`$${u}$`)} aux deux membres. \n          <br> $${c}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} $${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} \n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${c-p}${u} ${n(g).signe} ${g} = ${l}$\n          `,eq_corr_et2:`${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(n(g).operation)}$ $${(0,t.b1)(n(g).chgt_signe)}$ aux deux membres. \n          <br> $${c-p}${u} ${n(g).signe} ${g} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)} = ${l} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${c-p}${u} = ${l-g}$\n          `,eq_corr_et3:`${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(c-p)}$ les deux membres.\n          <br> $\\dfrac{${c-p}${u}}{${(0,t.b1)(c-p)}} = \\dfrac{${l-g}}{${(0,t.b1)(c-p)}}$\n          <br>$${u} = \\dfrac{${l-g}}{${c-p}}$ ${r(l-g,c-p)}\n          `},{pronom:d.pronom,prenom:d.prenom,a:c,b:g,c:p,d:l,inc:u,eq:`$${c}${u} ${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u}$`,et1:`${(0,t.HzX)("Étape 1 :")} $${c}${u} ${n(-p).signe} ${-p}${u} ${n(g).signe} ${g} = ${l}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${c}${u} ${n(-p).signe} ${-p}${u} = ${l} ${n(g).signe} ${g}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${c-p}${u} = ${l} ${n(g).signe} ${g}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${u} = \\dfrac{${l} ${n(g).signe} ${g}}{${c-p}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${u} = \\dfrac{${l+g}}{${c-p}}$ ${r(l+g,c-p)}`,err:`L'erreur se situe à l'étape 2.\n            <br>${d.prenom} "a fait passer" le terme $${n(g).signe} ${g}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${n(g).operation} $${n(g).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${c}${u} ${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u}$`,eq_corr_et1:`${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(n(p).operation)}$ $${(0,t.b1)(n(p).chgt_signe)}$${(0,t.pRK)(`$${u}$`)} aux deux membres \n          <br> $${c}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} $ ${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} \n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${c-p}${u} ${n(g).signe} ${g} = ${l}$\n          `,eq_corr_et2:`${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(n(g).operation)}$ $${(0,t.b1)(n(g).chgt_signe)}$ aux deux membres \n          <br> $${c-p}${u} ${n(g).signe} ${g} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)} = ${l} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${c-p}${u} = ${l-g}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(c-p)}$ les deux membres\n          <br> $\\dfrac{${c-p}${u}}{${(0,t.b1)(c-p)}} = \\dfrac{${l-g}}{${(0,t.b1)(c-p)}}$\n          <br>$${u} = \\dfrac{${l-g}}{${c-p}}$ ${r(l-g,c-p)}\n          `},{pronom:d.pronom,prenom:d.prenom,a:c,b:g,c:p,d:l,inc:u,eq:`$${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${c}${u} = ${p}${u} ${n(l).signe} ${l} ${n(-g).signe} ${-g}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${c}${u} ${n(p).signe} ${p}${u} = ${l} ${n(-g).signe} ${-g}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${c+p}${u} = ${l} ${n(-g).signe} ${-g}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${u} = \\dfrac{${l} ${n(-g).signe} ${-g}}{${c+p}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${u} = \\dfrac{${l-g}}{${c+p}}$ ${r(l-g,c+p)}`,err:`            L'erreur se situe à l'étape 2.\n            <br>${d.prenom} "a fait passer" le terme $${n(p).signe} ${p}${u}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${n(p).operation} $${n(p).chgt_signe}${u}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(n(p).operation)}$ $${(0,t.b1)(n(p).chgt_signe)}$${(0,t.pRK)(`$${u}$`)} aux deux membres \n          <br> $${c}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} $${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${c-p}${u} ${n(g).signe} ${g} = ${l}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(n(g).operation)}$ $${(0,t.b1)(n(g).chgt_signe)}$ aux deux membres \n          <br> $${c-p}${u} ${n(g).signe} ${g} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)} = ${l} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${c-p}${u} = ${l-g}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(c-p)}$ les deux membres\n          <br> $\\dfrac{${c-p}${u}}{${(0,t.b1)(c-p)}} = \\dfrac{${l-g}}{${(0,t.b1)(c-p)}}$\n          <br>$${u} = \\dfrac{${l-g}}{${c-p}}$ ${r(l-g,c-p)}\n          `},{pronom:d.pronom,prenom:d.prenom,a:c,b:g,c:p,d:l,inc:u,eq:`$${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${c}${u} = ${p}${u} ${n(l).signe} ${l} ${n(g).signe} ${g}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${c}${u} ${n(-p).signe} ${-p}${u} = ${l} ${n(g).signe} ${g}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${c-p}${u} = ${l} ${n(g).signe} ${g}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${u} = \\dfrac{${l} ${n(g).signe} ${g}}{${c-p}} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${u} = \\dfrac{${l+g}}{${c-p}}$ ${r(l+g,c-p)}`,err:`            L'erreur se situe à l'étape 1.\n            <br>${d.prenom} "a fait passer" le terme $${n(g).signe} ${g}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${n(g).operation} $${n(g).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(n(p).operation)}$ $${(0,t.b1)(n(p).chgt_signe)}$${(0,t.pRK)(`$${u}$`)} aux deux membres \n          <br> $${c}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} $${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${c-p}${u} ${n(g).signe} ${g} = ${l}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(n(g).operation)}$ $${(0,t.b1)(n(g).chgt_signe)}$ aux deux membres \n          <br> $${c-p}${u} ${n(g).signe} ${g} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)} = ${l} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${c-p}${u} = ${l-g}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(c-p)}$ les deux membres\n          <br> $\\dfrac{${c-p}${u}}{${(0,t.b1)(c-p)}} = \\dfrac{${l-g}}{${(0,t.b1)(c-p)}}$\n          <br>$${u} = \\dfrac{${l-g}}{${c-p}}$ ${r(l-g,c-p)}\n          `},{pronom:d.pronom,prenom:d.prenom,a:c,b:g,c:p,d:l,inc:u,eq:`$${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,et1:`${(0,t.HzX)("Étape 1 :")} $${c}${u} = ${p}${u} ${n(l).signe} ${l} ${n(-g).signe} ${-g}$`,et2:`${(0,t.HzX)("Étape 2 :")} $${c}${u} ${n(-p).signe} ${-p}${u} = ${l} ${n(-g).signe} ${-g}$`,et3:`${(0,t.HzX)("Étape 3 :")} $${c-p}${u} = ${l} ${n(-g).signe} ${-g}$`,et4:`${(0,t.HzX)("Étape 4 :")} $${u} = ${l} ${n(-g).signe} ${-g} - ${(0,t.PMY)(c-p)} $`,et_fin:`${(0,t.HzX)("Étape 5 :")} $${u} = ${l-g-c+p}$`,err:`            L'erreur se situe à l'étape 4.\n            <br>${d.prenom} soustrait le coefficient de ${u} au lieu de diviser par ce coefficient.\n            <br>Or $${c-p}${u}$ représente la multiplication $${c-p}\\times ${u}$, et l'opération inverse de la multiplication c'est la division et non la soustraction.\n            <br>Ici il faut diviser les deux membres par $${c-p}$.            \n            `,eq_corr:`${(0,t.HzX)("Équation d'origine : ")} $${c}${u} ${n(g).signe} ${g} = ${p}${u} ${n(l).signe} ${l} $`,eq_corr_et1:`          ${(0,t.HzX)("Étape 1 :")} $${(0,t.b1)(n(p).operation)}$ $${(0,t.b1)(n(p).chgt_signe)}$${(0,t.pRK)(`$${u}$`)} aux deux membres \n          <br> $${c}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)} $${n(g).signe} ${g} = ${l} ${n(p).signe} ${p}${u} ${(0,t.b1)(n(-p).signe)} ${(0,t.b1)(-p)}$${(0,t.pRK)(`$${u}$`)}\n          <br>${(0,t.HzX)("Étape 2 : ")} On réduit.\n          <br> $${c-p}${u} ${n(g).signe} ${g} = ${l}$\n          `,eq_corr_et2:`          ${(0,t.HzX)("Étape 3 :")} $${(0,t.b1)(n(g).operation)}$ $${(0,t.b1)(n(g).chgt_signe)}$ aux deux membres \n          <br> $${c-p}${u} ${n(g).signe} ${g} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)} = ${l} ${(0,t.b1)(n(-g).signe)} ${(0,t.b1)(-g)}$\n          <br>${(0,t.HzX)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${c-p}${u} = ${l-g}$\n          `,eq_corr_et3:`          ${(0,t.HzX)("Étape 5 :")} $${(0,t.b1)("\\textbf{diviser par}")}$ $${(0,t.b1)(c-p)}$ les deux membres\n          <br> $\\dfrac{${c-p}${u}}{${(0,t.b1)(c-p)}} = \\dfrac{${l-g}}{${(0,t.b1)(c-p)}}$\n          <br>$${u} = \\dfrac{${l-g}}{${c-p}}$ ${r(l-g,c-p)}\n          `}],h=[];for(let $=0;$<5;$++)h.push({enonce:`          ${m[$].prenom} doit résoudre l'équation suivante : ${m[$].eq}.\n          <br> Voilà ce qu'${m[$].pronom} écrit :\n          <br>${m[$].et1}\n          <br>${m[$].et2}\n          <br>${m[$].et3}\n          <br>${m[$].et4}\n          <br>${m[$].et_fin}\n        `,question:"",correction:`\n        ${m[$].err}\n        ${(0,t.HzX)("=== Voici une proposition de résolution détaillée : ===")}         \n        ${m[$].eq_corr}\n        ${m[$].eq_corr_et1}\n        ${m[$].eq_corr_et2}\n        ${m[$].eq_corr_et3}\n        `});switch(e[o]){case 1:$=`${h[0].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[0].correction}`,$+="\n             ",s=""):s=`${h[0].correction}`;break;case 2:$=`${h[1].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[1].correction}`,s=""):s=`${h[1].correction}`;break;case 3:$=`${h[2].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[2].correction}`,s=""):s=`${h[2].correction}`;break;case 4:$=`${h[3].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[3].correction}`,s=""):s=`${h[3].correction}`;break;case 5:$=`${h[4].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${h[4].correction}`,s=""):s=`${h[4].correction}`}-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(s),o++),a++}(0,t.K1R)(this)}}},2006:($,e,n)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}n.r(e),n.d(e,{default:()=>i})}}]);
//# sourceMappingURL=1021.b4b98fc53cea6beb5202.js.map