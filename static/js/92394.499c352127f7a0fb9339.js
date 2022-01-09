"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[92394,25523],{92394:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>u,dateDePublication:()=>o,dateDeModifImportante:()=>l,default:()=>b});var t=i(25523),r=i(25482),n=i(71250),a=i(56018);const u="Probabilités conditionnelles",o="25/10/2021",l="24/10/2021";function b(){function e(e,s){return s?(0,a.Pj$)((0,r.vbX)(e,3)).toLatex().replace("frac","dfrac"):(0,a.Rxh)((0,r.vbX)(e,3)).toString().replace(".","{,}")}t.default.call(this),this.consigne="",this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.besoinFormulaireCaseACocher=["Probabilités fractionnaires",!1],this.sup=!1,this.nouvelleVersion=function(){let s,i;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup2=(0,r.QmD)(1,3,this.sup2,3),i=3===this.sup2?(0,r.SRM)(["sujetE3C1","sujetE3C2"],this.nbQuestions):(0,r.SRM)([`sujetE3C${this.sup2}`],this.nbQuestions);for(let t,a,u,o,l,b,p,h,$,c,d,m,C,P,f,g,A,E=0,v=0;E<this.nbQuestions&&v<50;){switch(s=[],i[E]){case"sujetE3C1":t=(0,r.nSR)(30,70),l=(0,r.nSR)(30,70),b=(0,r.nSR)(20,t-5),C=(0,n.xmu)(.6,2.3),p=(0,n.xmu)(5,5),h=(0,n.xmu)(5,1),$=(0,n.xmu)(9,7.5),c=(0,n.xmu)(9,4),d=(0,n.xmu)(9,3),m=(0,n.xmu)(9,0),s.push((0,n.EXn)(C,p,"blue")),s.push((0,n.EXn)(C,h,"blue")),s.push((0,n.EXn)(p,$,"blue")),s.push((0,n.EXn)(p,c,"blue")),s.push((0,n.EXn)(h,d,"blue")),s.push((0,n.EXn)(h,m,"blue")),s.push((0,n.SgA)("A",5,5.2,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar A",5,1.3,"black",20,12,"white",10)),s.push((0,n.SgA)("\\Omega",0,2.3)),s.push((0,n.SgA)(e(t/100,this.sup),2.5,4.1,"black",20,20,"white",6)),s.push((0,n.SgA)(e(1-t/100,this.sup),2.5,2.1,"black",20,20,"white",6)),s.push((0,n.SgA)(e(1-l/100,this.sup),6.8,.9,"black",20,20,"white",6)),s.push((0,n.SgA)(e(l/100,this.sup),6.8,2.7,"black",20,20,"white",6)),s.push((0,n.SgA)(`P(A\\cap V)=${e(b/100,this.sup)}`,10.5,7.8,"red",20,20,"white",10)),s.push((0,n.SgA)("V",9,7.7,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar V",9,4.3,"black",20,12,"white",10)),s.push((0,n.SgA)("V",9,3.1,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar V",9,.2,"black",20,12,"white",10)),g="Une agence de voyage propose deux formules week-end pour se rendre à Londres depuis Paris.",g+="<br> Les clients choisissent leur moyen de transport : train ou avion.",g+="<br> De plus, s'ils le souhaitent, ils peuvent compléter leur formule par l'option \"visites guidées\".",g+="<br> Une étude a produit les données suivantes:",g+=`<br> $\\bullet~~ ${t}$% des clients optent pour l'avion;`,g+=`<br> $\\bullet~~$ Parmi   les clients ayant choisi le train, $${l}$ % choisissent aussi l'option "visites guidées".`,g+=`<br> $\\bullet~~ ${b}$% des clients ont choisi à la fois l'avion et l'option "visites guidées".<br>`,g+="<br> On interroge au hasard un client de l'agence ayant souscrit à une formule week-end à Londres.",g+="<br> On considère les évènements suivants:",g+="<br> $\\bullet~~$ $A$ :  le client a choisi l'avion.",g+='<br> $\\bullet~~$ $V$ : le client a choisi l\'option "visites guidées".<br>',g+="<br> 1. Déterminer $P_A(V)$.",g+=`<br> 2.  Démontrer que la probabilité pour que le client interrogé ait choisi l'option "visites guidées" est environ égale à $${e(b/100+(1-t/100)*l/100,!1)}$.`,g+="<br> 3. Calculer la probabilité pour que le client interrogé ait pris l'avion sachant qu'il n'a pas choisi l'option \"visites guidées\". Arrondir le résultat au centième.",g+="<br> 4. On interroge au hasard deux clients de manière aléatoire et indépendante.",g+="<br> Quelle est la probabilité qu'aucun des deux ne prennent l'option \"visites guidées\" ?",g+="On donnera les résultats sous forme de valeurs approchées à $10^{-3}$ près.",A="1. De l'énoncé on déduit que :",A+=`<br> $P(A)=${e(t/100,this.sup)}$`,A+=`<br> $P_{\\bar{A}}(V)=${e(l/100,this.sup)}$`,A+=`<br> $P(A \\cap V)=${e(b/100,this.sup)}$`,A+=" <br>On peut alors construire cet arbre pondéré : <br>",A+=(0,n.iR9)({xmin:-5,ymin:-1,xmax:18,ymax:10},s),A+=`<br>On a donc $P_{A}(V)=\\dfrac{P(A \\cap V)}{P(A)}=\\dfrac{${e(b/100,this.sup)}}{${e(t/100,this.sup)}}=${(0,r.qaf)(b,t)} $.`,A+="<br><br>2. Comme $A$ et $\\bar A$ forment une partition de l'univers, d'après la loi des probabilités totales :",A+=" <br>$P(V)=P(A \\cap V)+P(\\bar{A} \\cap V) . $",A+=`<br>Or $P(\\bar{A} \\cap V)=P(\\bar{A}) \\times P_{\\bar{A}}(V)=(1-${e(t/100,this.sup)}) \\times ${e(l/100,this.sup)}=${e((1-t/100)*l/100,this.sup)}$.`,A+=`<br>Donc $P(V)=${e(b/100,this.sup)}+${e((1-t/100)*l/100,this.sup)}=${e(b/100+(1-t/100)*l/100,this.sup)}$.`,A+="<br><br>3. On a $P_{\\bar{V}}(A)=\\dfrac{P(\\bar{V} \\cap A)}{P(\\bar{V})}=\\dfrac{P(A \\cap \\bar{V})}{P(\\bar{V})}=\\dfrac{P(A) \\times P_A(\\bar{V})}{P(\\bar{V})}$.",A+=`<br>Or d'après la question précédente: $P(\\bar{V})=1-P(V)=1-${e(b/100+(1-t/100)*l/100,this.sup)}=${e(1-(b/100+(1-t/100)*l/100),this.sup)}$`,A+=`<br>et d'après la question $1: P_{A}(\\bar{V})=1-P_{A}(V)=1-${(0,r.qaf)(b,t)}=${(0,r.qaf)(t-b,t)}$.`,P=(0,r.n0o)((t-b)/t),f=(0,r.n0o)(1-(b/100+(1-t/100)*l/100)),A+=`<br>Donc $P_{\\bar{V}}(A)=\\dfrac{${e(t/100,this.sup)} \\times ${(0,r.qaf)(t-b,t)}}{${e(f,this.sup)}} ${t/100*P/f===(0,r.vbX)(t/100*P/f,3)?"=":"\\approx"}${e(t/100*P/f,!1)}$.`,A+=`<br><br>4. On a vu que $P(\\bar{V})=1-${e(f,this.sup)}=${e(1-f,this.sup)}$.`,A+="<br>Comme les deux événements sont indépendants, en les appelant $\\bar {V_1}$ et $\\bar{V_2}$, on a : $P(\\bar{V_1}\\cap\\bar{V_2})=P(\\bar{V_1})\\times P(\\bar{V_2})$",A+=`<br>La probabilité cherchée est donc égale à $P(\\bar{V_1}\\cap\\bar{V_2})=${e(1-f,this.sup)} \\times ${e(1-f,this.sup)}\\approx${e((1-f)**2,!1)}$.`;break;case"sujetE3C2":a=(0,r.nSR)(30,70),u=(0,r.nSR)(20,95-a),o=(0,r.nSR)(20,95-a),C=(0,n.xmu)(.6,2.3),p=(0,n.xmu)(5,5),h=(0,n.xmu)(5,1),$=(0,n.xmu)(9,7.5),c=(0,n.xmu)(9,4),d=(0,n.xmu)(9,3),m=(0,n.xmu)(9,0),s.push((0,n.EXn)(C,p,"blue")),s.push((0,n.EXn)(C,h,"blue")),s.push((0,n.EXn)(p,$,"blue")),s.push((0,n.EXn)(p,c,"blue")),s.push((0,n.EXn)(h,d,"blue")),s.push((0,n.EXn)(h,m,"blue")),s.push((0,n.SgA)("C",5,5.2,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar C",5,1.3,"black",20,12,"white",10)),s.push((0,n.SgA)("\\Omega",0,2.3)),s.push((0,n.SgA)(e(a/100,this.sup),2.5,4.1,"black",20,20,"white",6)),s.push((0,n.SgA)(e(1-a/100,this.sup),2.5,2.1,"black",20,20,"white",6)),s.push((0,n.SgA)(e(1-u/100,this.sup),6.8,.9,"black",20,20,"white",6)),s.push((0,n.SgA)(e(u/100,this.sup),6.8,2.7,"black",20,20,"white",6)),s.push((0,n.SgA)(`P(C\\cap E)=${e(o/100,this.sup)}`,10.5,7.8,"red",20,20,"white",10)),s.push((0,n.SgA)("E",9,7.7,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar E",9,4.3,"black",20,12,"white",10)),s.push((0,n.SgA)("E",9,3.1,"black",20,12,"white",10)),s.push((0,n.SgA)("\\bar E",9,.2,"black",20,12,"white",10)),g="Une chaîne de salons de coiffure propose à ses clients qui viennent pour une coupe deux prestations supplémentaires cumulables :",g+='<br>$\\bullet$ Une coloration naturelle à base de plantes appelée "couleur-soin",',g+='<br>$\\bullet$  Des mèches blondes pour donner du relief à la chevelure, appelées  "effet coup de soleil".',g+=`<br><br> Il apparaît que : <br>$\\diamond ~~ ${a}~\\%$ des clients demandent une "couleur-soin".`,g+=`<br>$\\diamond ~~$Parmi ceux qui ne veulent pas de "couleur soin", $${u}~\\%$ des clients demandent un "effet coup de soleil".`,g+=`<br>$\\diamond ~~$ Par ailleurs, $${o}\\%$ des clients demandent une "couleur soin" et un "effet coup de soleil" .`,g+="<br>On interroge un client au hasard.",g+='<br>On notera $C$ l\'évènement : "Le client souhaite une "couleur-soin."',g+='<br>On notera $E$ l\'évènement: "Le client souhaite un "effet coup de soleil."<br>',g+="$1.$ Donner les valeurs de $P(C)$, $P( C \\cap E)$ et $P_{\\bar{C}}(E)$.<br>",g+='$2.$ Calculer la probabilité que le client ne souhaite ni une "couleur-soin", ni un "effet coup de soleil".<br>',g+='$3.$ Calculer la probabilité qu\'un client choisisse l\'"effet coup de soleil" sachant qu\'il a pris une "couleur soin"',g+="$4.$ Montrer que la probabilité de l'évènement $E$ est égale à $0,42$.<br>",g+="$5.$ Les évènements $C$ et $E$ sont-ils indépendants ?<br>",g+="On donnera les résultats sous forme de valeurs approchées à $10^{-3}$ près.",A=`1. D'après l'énoncé, on a :<br>$\\bullet~~P(C)=${e(a/100,this.sup)}$.`,A+=`<br>$\\bullet~~P(C \\cap E)=${e(o/100,this.sup)}$.`,A+=`<br>$\\bullet~~P_{\\bar C}(E)=${e(u/100,this.sup)}$.`,A+="<br>Ce qui permet de construire cet arbre de probabilités : ",A+=(0,n.iR9)({xmin:-5,ymin:-1,xmax:18,ymax:10},s),A+='<br>$2.$ L\'événement  : le client ne souhaite ni une "couleur-soin", ni un "effet coup de soleil" correspond à $\\bar{C} \\cap \\bar{E}$',A+=`<br>On a $P(\\bar{C} \\cap \\bar{E})=P(\\bar{C}) \\times P_{\\bar{C}}(\\bar{E})=P(\\bar{C}) \\times (1-P_{\\bar{C}}(E))=${e(a/100,!1)} \\times ${e(1-u/100,!1)}\\approx ${e(a/100*(1-u/100),!1)}$.`,A+='<br>$3.$  La probabilité qu\'un client choisisse l\'"effet coup de soleil" sachant qu\'il a pris une "couleur soin" est $P_{C}(E)$.',A+="<br>On a alors d'après l'arbre pondéré :",A+=`<br>$P(C) \\times P_{C}(E)=${e(a/100,!1)} \\times P_{C}(E)=${e(o/100,!1)}$.`,A+=`<br>On en déduit que $P_{C}(E)=\\dfrac{${e(o/100,!1)}}{${e(a/100,!1)}}\\approx${e(o/a,!1)}$.`,A+="<br>$4.$   On cherche $P(E)$ qui est une probabilité totale.",A+="<br>Comme $C$ et $\\bar C$ forment une partition de l'univers, on peut appliquer la loi des probabilités totales :",A+="<br>$P(E)=P(E \\cap C)+P(E \\cap \\bar{C} )$",A+=`<br>$P(E)=${e(o/100,!1)}+${e(1-a/100,!1)}\\times ${e(u/100,!1)}$`,A+=`<br>$P(E)\\approx${e(o/100+(1-a/100)*u/100,!1)}$`,A+="<br>$5.$   Pour savoir si les évènements $C$ et $E$ sont-indépendants, on calcule séparément : ",A+="<br>$P(C \\cap E)$ et $P(C) \\times P(E)$, pour tester s'ils sont égaux.",A+=`<br>On a $P(C \\cap E)=${e(o/100,!1)}$ `,A+=`et $P(C) \\times P(E)=\\approx${e(a/100*(o/100+(1-a/100)*u/100),!1)}$`,A+="<br>On en déduit que les évènements $C$ et $E$ ne sont pas indépendants."}this.questionJamaisPosee(E,g)&&(this.listeQuestions.push(g),this.listeCorrections.push(A),E++),v++}(0,r.K1R)(this)},this.besoinFormulaire2Numerique=["Choix d'exercices : ",3,"1 : Sujet 1 issu E3C\n2 : Sujet 2 issu E3C\n3 : Mélange"]}},25523:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=92394.499c352127f7a0fb9339.js.map