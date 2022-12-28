"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[20078,25523],{20078:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>o,default:()=>c});var t=s(25523),n=s(22380),r=s(25482);const o="Equations résolvantes pour le théorème de Thalès";function c(){let e;t.default.call(this),this.titre=o,this.debug=!1,this.debug?this.nbQuestions=4:this.nbQuestions=2,this.sup=1,this.consigne="Résoudre les équations suivantes.",this.nbCols=1,this.nbColsCorr=1,n.Do.isHtml?this.spacing=3:this.spacing=2,n.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.listePackages="bclogo",this.nouvelleVersion=function(){function i(e,i,s,t,n){let o,c="";return e?(s===t&&(c=`Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${n}=${i}$ !`,o=(0,r.KUN)(c,"nombres","Keep Cool Guy !")),t===i&&(c=`Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${n}=${s}$ !`,o=(0,r.KUN)(c,"nombres","Keep Cool Guy !"))):o="",o}e=this.debug?[0,1,2,3]:(0,r.TVQ)([(0,r.q$q)([0,1]),(0,r.q$q)([2,3])]),this.listeQuestions=[],this.listeCorrections=[];const s=(0,r.bqK)(e,this.nbQuestions);for(let e,t,n=0,o=0;n<this.nbQuestions&&o<50;){let c,a,u,h,b=[1,1,1];for(;u%2!=0||u%5!=0;)u=(0,r.nSR)(11,99);switch(this.sup=Number(this.sup),this.sup){case 1:c=[1,1,1],b[0]=(0,r.nSR)(2,9),b[1]=(0,r.nSR)(2,9,b[0]),b[2]=(0,r.q$q)([2,4,5,8],[b[0],b[1]]);break;case 2:c=[(0,r.q$q)([1,-1]),(0,r.q$q)([1,-1]),(0,r.q$q)([1,-1])],b[0]=(0,r.nSR)(2,9),b[1]=(0,r.nSR)(2,9,b[0]),b[2]=(0,r.q$q)([2,4,5,8],[b[0],b[1]]);break;case 3:c=[.1,.1,.1],b[0]=(0,r.nSR)(2,9),b[1]=(0,r.nSR)(2,9,b[0]),b[2]=u;break;case 4:b[0]=(0,r.nSR)(2,9),b[1]=(0,r.nSR)(2,9,b[0]),b[2]=(0,r.q$q)([2,4,5,8],[b[0],b[1]]),a=(0,r.q$q)([{c:[1,1,1],na:[b[0],b[1],b[2]]},{c:[(0,r.q$q)([1,-1]),(0,r.q$q)([1,-1]),(0,r.q$q)([1,-1])],na:[b[0],b[1],b[2]]},{c:[.1,.1,.1],na:[(0,r.nSR)(11,99),(0,r.nSR)(11,99),u]}]),c=a.c,b=a.na}h="4L15-1"===this.exo?(0,r.q$q)(["r","s","t","u","v","w","x","y","z"]):"4P10-2"===this.exo?["?"]:(0,r.q$q)(["x","y","GO","AB","z","GA","BU","ZO","ME"]);const l={a:(0,r.n0o)(b[0]*c[0]),b:(0,r.n0o)(b[1]*c[1]),c:(0,r.n0o)(b[2]*c[2]),inc:h},$=[{eq:`\\dfrac{${l.inc}}{${(0,r.euh)(l.b)}}=\\dfrac{${(0,r.euh)(l.a)}}{${(0,r.euh)(l.c)}}`,tab:(0,r.DDO)([l.inc,l.a],[l.b],[l.c]),a:l.a,b:l.b,c:l.c,inc:l.inc,trivial:l.b===l.c||l.c===l.a},{eq:`\\dfrac{${(0,r.euh)(l.a)}}{${(0,r.euh)(l.c)}}=\\dfrac{${l.inc}}{${(0,r.euh)(l.b)}}`,tab:(0,r.DDO)([l.a,l.inc],[l.c],[l.b]),a:l.a,b:l.b,c:l.c,inc:l.inc,trivial:l.b===l.c||l.c===l.a},{eq:`\\dfrac{${(0,r.euh)(l.b)}}{${l.inc}}=\\dfrac{${(0,r.euh)(l.c)}}{${(0,r.euh)(l.a)}}`,tab:(0,r.DDO)([l.b,l.c],[l.inc],[l.a]),a:l.a,b:l.b,c:l.c,inc:l.inc,trivial:l.b===l.c||l.c===l.a},{eq:`\\dfrac{${(0,r.euh)(l.c)}}{${(0,r.euh)(l.a)}}=\\dfrac{${(0,r.euh)(l.b)}}{${l.inc}}`,tab:(0,r.DDO)([l.c,l.b],[l.a],[l.inc]),a:l.a,b:l.b,c:l.c,inc:l.inc,trivial:l.b===l.c||l.c===l.a}];let d,m;const q=[];for(let e=0;e<$.length;e++)"4P10-2"===this.exo?(d=`${$[e].tab}`,m=`${$[e].tab} <br> Le tableau ci-dessus est un tableau de proportionnalité, pour déterminer la quatrième proportionnelle il suffit par exemple de résoudre l'équation suivante : <br>`):(d=`$${$[e].eq}$`,m=""),q.push({enonce:d,question:"",correction:`${m}\n$${$[e].eq}$<br>\n${(0,r.PH8)("Les produits en croix sont égaux.")}<br>\n$${(0,r.euh)($[e].c)}\\times ${$[e].inc} = ${(0,r.euh)($[e].a)}\\times ${(0,r.euh)($[e].b)}$<br>\n${(0,r.PH8)(`On divise les deux membres par ${(0,r.euh)($[e].c)}`)}.<br>\n$\\dfrac{${(0,r.euh)($[e].c)}\\times ${$[e].inc}}{${(0,r.euh)($[e].c)}}= \\dfrac{${(0,r.euh)($[e].a)}\\times ${(0,r.euh)($[e].b)}}{${(0,r.euh)($[e].c)}}$<br>\n${(0,r.PH8)("On simplifie et on calcule.")}<br>\n$${$[e].inc}=${(0,r.euh)((0,r.n0o)(Number($[e].b)*Number($[e].a)/Number($[e].c)))}$\n${i($[e].trivial,(0,r.euh)($[e].a),(0,r.euh)($[e].b),(0,r.euh)($[e].c),$[e].inc)}\n`});switch(s[n]){case 0:e=`${q[0].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${q[0].correction}`,e+="             ",t=""):t=`${q[0].correction}`;break;case 1:e=`${q[1].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${q[1].correction}`,t=""):t=`${q[1].correction}`;break;case 2:e=`${q[2].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${q[2].correction}`,t=""):t=`${q[2].correction}`;break;case 3:e=`${q[3].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${q[3].correction}`,t=""):t=`${q[3].correction}`}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),n++),o++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Type de nombres",4,"1 : Entiers naturels\n2 : Entiers relatifs\n3 : Décimaux\n4 : Mélange"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=20078.0b4ebfbd9527dd71414d.js.map