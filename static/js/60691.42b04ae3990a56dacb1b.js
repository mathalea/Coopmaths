"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[60691,25523],{60691:(e,s,r)=>{r.r(s),r.d(s,{titre:()=>o,dateDePublication:()=>t,default:()=>a});var n=r(25523),$=r(25482);const o="Utiliser les variations des fonctions de référence pour comparer des images",t="07/01/2022";function i(e,s=15){const r=Intl.NumberFormat("fr-FR",{maximumFractionDigits:s}).format(e).replace(",","{,}");return e<0?`(${r})`:r}function a(){n.default.call(this),this.consigne="",this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.spacingCorr=2,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],1===this.sup?e=["carré"]:2===this.sup?e=["inverse"]:3===this.sup?e=["cube"]:4===this.sup?e=["racine carrée"]:5===this.sup&&(e=["carré","carré","inverse","cube","racine carrée"]);const s=[[1,2],[2,3],[3,4],[2,5],[4,5],[5,6],[2,7],[4,7],[6,7],[3,8],[7,8],[2,9],[5,9],[8,9],[1,11],[3,11],[5,11],[7,11],[9,11],[10,11],[3,13],[7,13]],r=[[1,3],[1,4],[1,5],[3,5],[1,6],[1,7],[3,7],[5,7],[1,8],[5,8],[1,9],[4,9],[7,9],[2,11],[4,11],[6,11],[8,11],[9,11],[1,13],[5,13]],n=(0,$.SRM)(e,this.nbQuestions);for(let o,t,a,l,b,c,u,m,d,f,h,q,k=0,g=[],K=[],p=0;k<this.nbQuestions&&p<50;){switch(n[k]){case"carré":a=(0,$.nSR)(1,3),1===a&&(o=(0,$.n0o)((0,$.nSR)(0,5)+(0,$.nSR)(5,9)/10+(0,$.nSR)(5,9)/100+(0,$.nSR)(0,2)/1e3),t=(0,$.n0o)(o+2*(0,$.nSR)(1,9)/1e3*(0,$.q$q)([1,-1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $${(0,$.k$K)(o)}^2$ et $${(0,$.k$K)(t)}^2$.`,b="On doit comparer les carrés de deux nombres. On utilise donc la fonction carré.<br>\n            La fonction carré étant strictement croissante sur $[0;+\\infty[$, elle conserve l'ordre. Cela signifie que deux nombres positifs sont rangés dans le même ordre que leurs carrés.   <br>\n            Autrement dit, si $a$ et $b$ sont deux nombres  positifs et si $a < b$, alors $a^2 < b^2$.",b+=o<t?`<br>Comme $${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}$, \n          alors  $${(0,$.k$K)(o)}^2${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}^2$.`:`<br>Comme $${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}$, \n          alors  $${(0,$.k$K)(t)}^2${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}^2$.`),2===a&&(g=(0,$.q$q)(s),K=(0,$.q$q)(r),c=g[0],u=g[1],m=K[0],d=K[1],f=(0,$.n0o)(u*d),h=(0,$.n0o)(c*d),q=(0,$.n0o)(m*u),l=`En utilisant le sens de variation d'une fonction de référence, comparer $\\left(${(0,$.qaf)(c,u)}\\right)^2$ et $\\left(${(0,$.qaf)(m,d)}\\right)^2$.`,b="On doit comparer les carrés de deux nombres. On utilise donc la fonction carré.<br>\n            La fonction carré étant strictement croissante sur $[0;+\\infty[$, elle conserve l'ordre. Cela signifie que deux nombres positifs sont rangés dans le même ordre que leurs carrés.<br>\n            Autrement dit, si $a$ et $b$ sont deux nombres  positifs et si $a < b$, alors $a^2 < b^2$.",c===m&&(b+=`<br>On commence par comparer les fractions $${(0,$.qaf)(c,u)}$ et $${(0,$.qaf)(m,d)}$. <br>\n            Les fractions ont le même numérateur. La plus grande est celle qui a le plus petit dénominateur. <br>\n            `,b+=u<d?`On a $${u}<${d}$, donc $${(0,$.qaf)(m,d)}<${(0,$.qaf)(c,u)}$.<br>\n                <br>Comme $${(0,$.qaf)(m,d)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(c,u)}$, alors $\\left(${(0,$.qaf)(m,d)}\\right)^2${(0,$.b1)("\\boldsymbol{<}","blue")}\\left(${(0,$.qaf)(c,u)}\\right)^2$`:`On a $${d}<${u}$, donc $${(0,$.qaf)(c,u)}<${(0,$.qaf)(m,d)}$.<br>\n                <br> Comme,  $${(0,$.qaf)(c,u)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(m,d)}$, alors $\\left(${(0,$.qaf)(c,u)}\\right)^2${(0,$.b1)("\\boldsymbol{<}","blue")}\\left(${(0,$.qaf)(m,d)}\\right)^2$`),u===d&&(b+=`<br>On commence par comparer les fractions $${(0,$.qaf)(c,u)}$ et $${(0,$.qaf)(m,d)}$. <br>\n            Les fractions ont le même dénomérateur. La plus grande est celle qui a le plus grand numérateur. <br>\n            `,b+=m<c?`On a $${m}<${c}$, donc $${(0,$.qaf)(m,d)}<${(0,$.qaf)(c,u)}$.<br>\n                <br>Comme $${(0,$.qaf)(m,d)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(c,u)}$, alors $\\left(${(0,$.qaf)(m,d)}\\right)^2${(0,$.b1)("<","blue")}\\left(${(0,$.qaf)(c,u)}\\right)^2$`:`On a $${c}<${m}$, donc $${(0,$.qaf)(c,u)}<${(0,$.qaf)(m,d)}$.<br>\n                <br>Comme,  $${(0,$.qaf)(c,u)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(m,d)}$, alors $\\left(${(0,$.qaf)(c,u)}\\right)^2${(0,$.b1)("\\boldsymbol{<}","blue")}\\left(${(0,$.qaf)(m,d)}\\right)^2$`),c!==m&&u!==d&&(b+=`<br>On commence par comparer les fractions $${(0,$.qaf)(c,u)}$ et $${(0,$.qaf)(m,d)}$. <br>\n          Pour cela on les met au même dénominateur : $${(0,$.qaf)(c,u)}= ${(0,$.qaf)(h,f)}$ et $${(0,$.qaf)(m,d)}= ${(0,$.qaf)(q,f)}$<br>\n          `,b+=h<q?`On a $${h}<${q}$, donc $${(0,$.qaf)(h,f)}<${(0,$.qaf)(q,f)}$, soit $${(0,$.qaf)(c,u)}<${(0,$.qaf)(m,d)}$.<br>\n                <br>Comme $${(0,$.qaf)(c,u)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(m,d)}$, alors $\\left(${(0,$.qaf)(c,u)}\\right)^2${(0,$.b1)("\\boldsymbol{<}","blue")}\\left(${(0,$.qaf)(m,d)}\\right)^2$`:`On a $${q}<${h}$, donc $${(0,$.qaf)(q,f)}<${(0,$.qaf)(h,f)}$ , soit $${(0,$.qaf)(m,d)}<${(0,$.qaf)(c,u)}$.<br>\n                <br>Comme,  $${(0,$.qaf)(m,d)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.qaf)(c,u)}$, alors $\\left(${(0,$.qaf)(m,d)}\\right)^2${(0,$.b1)("\\boldsymbol{<}","blue")}\\left(${(0,$.qaf)(c,u)}\\right)^2$`)),3===a&&(o=(0,$.n0o)(-1*((0,$.nSR)(0,5)+(0,$.nSR)(5,9)/10+(0,$.nSR)(5,9)/100+(0,$.nSR)(0,2)/1e3)),t=(0,$.n0o)(o+2*(0,$.nSR)(1,9)/1e3*(0,$.q$q)([1,-1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $(${(0,$.k$K)(o)})^2$ et $(${(0,$.k$K)(t)})^2$.`,b="On doit comparer les carrés de deux nombres. On utilise donc la fonction carré.<br>\n            La fonction carré étant strictement décroissante sur $]-\\infty;0]$, elle change l'ordre. <br>\n            Cela signifie que deux nombres négatifs sont rangés dans l'ordre inverse de leurs carrés.<br>\n            Autrement dit, si $a$ et $b$ sont deux nombres  négatifs et si $a < b$, alors $a^2 > b^2$.",b+=o<t?`<br>Comme $${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}$, alors  $(${(0,$.k$K)(o)})^2${(0,$.b1)("\\boldsymbol{>}","blue")}(${(0,$.k$K)(t)})^2$`:`<br>Comme $${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}$, alors  $(${(0,$.k$K)(t)})^2${(0,$.b1)("\\boldsymbol{<}","blue")}(${(0,$.k$K)(o)})^2$`);break;case"inverse":a=(0,$.nSR)(1,2),1===a&&(o=(0,$.n0o)((0,$.nSR)(1,9)+(0,$.nSR)(5,9)/10),t=(0,$.n0o)(o+(0,$.nSR)(1,9)/10*(0,$.q$q)([1,-1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $\\dfrac{1}{${(0,$.k$K)(o)}}$ et $\\dfrac{1}{${(0,$.k$K)(t)}}$.`,b="On doit comparer les inverses de deux nombres. On utilise donc la fonction inverse.<br>\n              La fonction inverse étant strictement décroissante sur $]0;+\\infty[$, elle change l'ordre. \n              Cela signifie que deux nombres strictement positifs  sont rangés dans l'ordre inverse de leurs inverses.<br>\n              Autrement dit, si $a$ et $b$ sont deux nombres strictement positifs et si $a < b$, alors $\\dfrac{1}{a} > \\dfrac{1}{b}$.<br>",b+=o<t?`Comme $${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}$, alors  $\\dfrac{1}{${(0,$.k$K)(o)}}${(0,$.b1)("\\boldsymbol{>}","blue")}\\dfrac{1}{${(0,$.k$K)(t)}}$`:`Comme $${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}$, alors  $\\dfrac{1}{${(0,$.k$K)(t)}}${(0,$.b1)("\\boldsymbol{>}","blue")}\\dfrac{1}{${(0,$.k$K)(o)}}$`),2===a&&(o=(0,$.n0o)((0,$.nSR)(1,9)+(0,$.nSR)(5,9)/10),t=(0,$.n0o)(o+(0,$.nSR)(1,9)/10*(0,$.q$q)([1,-1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $-\\dfrac{1}{${(0,$.k$K)(o)}}$ et $-\\dfrac{1}{${(0,$.k$K)(t)}}$.`,b=`On doit comparer $-\\dfrac{1}{${(0,$.k$K)(o)}}$ et $-\\dfrac{1}{${(0,$.k$K)(t)}}$ soit $\\dfrac{1}{-${(0,$.k$K)(o)}}$ et $\\dfrac{1}{-${(0,$.k$K)(t)}}$, c'est-à-dire \n                les inverses de deux nombres (négatifs). On utilise donc la fonction inverse.<br>\n                La fonction inverse étant strictement décroissante sur $]-\\infty;0[$, elle change l'ordre. \n                Cela signifie que deux nombres strictement négatifs  sont rangés dans l'ordre inverse de leurs inverses.<br>\n                Autrement dit, si $a$ et $b$ sont deux nombres strictement négatifs et si $a < b$, alors $\\dfrac{1}{a} > \\dfrac{1}{b}$.<br>`,b+=o>t?` Comme $-${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}-${(0,$.k$K)(t)}$, alors  $\\dfrac{1}{-${(0,$.k$K)(o)}}${(0,$.b1)("\\boldsymbol{>}","blue")}\\dfrac{1}{-${(0,$.k$K)(t)}}$`:`Comme $-${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}-${(0,$.k$K)(o)}$, alors  $\\dfrac{1}{-${(0,$.k$K)(t)}}${(0,$.b1)("\\boldsymbol{>}","blue")}\\dfrac{1}{-${(0,$.k$K)(o)}}$`);break;case"cube":o=(0,$.n0o)((0,$.nSR)(-10,10)+(0,$.nSR)(-9,9,0)/10*(0,$.q$q)([-1,1])),t=(0,$.n0o)((o+(0,$.nSR)(1,9)/10)*(0,$.q$q)([-1,1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $${i(o)}^3$ \n          et $${i(t)}^3$.`,b="On doit comparer les cubes de deux nombres. On utilise donc la fonction cube.<br>\n          La fonction cube étant strictement croissante sur $\\mathbb{R}$, elle conserve l'ordre. \n          Cela signifie que deux nombres réels  sont rangés dans le même ordre que leurs cubes.<br>\n          Autrement dit, si $a$ et $b$ sont deux nombres réels et si $a < b$, alors $a^3 < b^3$.<br>",b+=o<t?`Comme $${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}$, alors $${i(o)}^3${(0,$.b1)("\\boldsymbol{<}","blue")}${i(t)}^3$.`:`Comme $${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}$, alors $${i(t)}^3${(0,$.b1)("\\boldsymbol{<}","blue")}${i(o)}^3$.`;break;case"racine carrée":o=(0,$.n0o)((0,$.nSR)(0,10)+(0,$.nSR)(6,9)/10),t=(0,$.n0o)(o+(0,$.nSR)(1,5,0)/10*(0,$.q$q)([-1,1])),l=`En utilisant le sens de variation d'une fonction de référence, comparer $\\sqrt{${(0,$.k$K)(o)}}$  et $\\sqrt{${(0,$.k$K)(t)}}$.`,b="On doit comparer les racines carrées de deux nombres. On utilise donc la fonction racine carrée.<br>\n          La fonction racine carrée étant strictement croissante sur $[0;+\\infty[$, elle conserve l'ordre. \n          Cela signifie que deux nombres réels positifs sont rangés dans le même ordre que leurs racines carrées.<br>\n          Autrement dit, si $a$ et $b$ sont deux nombres réels positifs et si $a < b$, alors $\\sqrt{a} < \\sqrt{b}$.<br>",b+=o<t?` Comme $${(0,$.k$K)(o)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(t)}$, alors \n          $\\sqrt{${(0,$.k$K)(o)}}${(0,$.b1)("\\boldsymbol{<}","blue")}\\sqrt{${(0,$.k$K)(t)}}$.`:` Comme $${(0,$.k$K)(t)}${(0,$.b1)("\\boldsymbol{<}","blue")}${(0,$.k$K)(o)}$, \n          alors $\\sqrt{${(0,$.k$K)(t)}}${(0,$.b1)("\\boldsymbol{<}","blue")}\\sqrt{${(0,$.k$K)(o)}}$.`}-1===this.listeQuestions.indexOf(l)&&(this.listeQuestions.push(l),this.listeCorrections.push(b),k++),p++}(0,$.K1R)(this)},this.besoinFormulaireNumerique=["Choix des questions",3,"1 : carré\n2 : inverse\n3 : cube\n4 : racine carrée\n5 : mélange"]}},25523:(e,s,r)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let r="";for(const n of s)void 0!==n&&(r+=n.toString());return!(this.listeArguments.indexOf(r)>-1)&&(this.listeArguments.push(r),!0)}}r.r(s),r.d(s,{default:()=>n})}}]);
//# sourceMappingURL=60691.42b04ae3990a56dacb1b.js.map