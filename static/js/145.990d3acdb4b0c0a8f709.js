"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[145,25523],{25523:(e,t,i)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const n of t)void 0!==n&&(i+=n.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>n})},145:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>c,interactifReady:()=>u,interactifType:()=>m,amcReady:()=>l,amcType:()=>h,default:()=>b});var n=i(25523),s=i(25482),$=i(11945),a=i(43425),r=i(79352),o=i(71250);const c="Course aux nombres fin de 6e",u=!0,m="mathLive",l=!0,h="AMCNum";function b(e){n.default.call(this),this.nbQuestions=30,this.interactif?this.consigne="Saisir la réponse numérique uniquement sauf si l'unité est explicitement demandée.":this.consigne="",this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){let e,t,i,n,c,u;this.listeQuestions=[],this.listeCorrections=[];let m=[];this.sup?"number"==typeof this.sup?(m[0]=this.sup,this.nbQuestions=1):(m=this.sup.split("-"),this.nbQuestions=m.length):m=(0,s.bqK)((0,s.NaF)(30),this.nbQuestions);for(let s=0;s<m.length;s++)m[s]=parseInt(m[s])-1;const l=(0,s.bqK)(m,this.nbQuestions),h=[["pêches",4,10,30],["Noix",5,4,13],["cerises",6,11,20],["pommes",2,20,40],["framboises",15,1,5],["fraises",7,5,10],["citrons",1.5,15,30],["bananes",1.5,15,25]],b=[["chaise",75,115,"cm"],["grue",120,250,"dm"],["tour",50,180,"m"],["girafe",40,50,"dm"],["coline",75,150,"m"]],d=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18","q19","q20","q21","q22","q23","q24","q25","q26","q27","q28","q29","q30"];for(let q,f,R=0,S=0,p=0;R<this.nbQuestions&&p<50;){switch(d[l[R]]){case"q1":e=(0,s.nSR)(1,25),q=`Le double d'un nombre vaut ${2*e}, combien vaut sa moitié ?`,f=`Le nombre est ${e}, sa moitié est ${(0,s.k$K)(e/2)}.`,(0,$.Iq)(this,S,(0,s.n0o)(e/2),{formatInteractif:"calcul"});break;case"q2":e=(0,s.nSR)(2,25),t=(0,s.nSR)(2,25,e),e=(0,s.n0o)(e/(0,s.Md9)(e,t)),t=(0,s.n0o)(t/(0,s.Md9)(e,t)),i=new a.Z(e,t),c=(0,s.n0o)(e/t),q=`Quel est le nombre qui, multiplié par ${t} donne ${e} ?`,f=`c'est $${i.texFraction}$ car $${i.texFraction}\\times ${t} = ${e}$`,i.valeurDecimale?(0,$.Iq)(this,S,[i.texFraction,c,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"}):(0,$.Iq)(this,S,[i.texFraction,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"});break;case"q3":e=(0,s.nSR)(1,9),t=(0,s.nSR)(1,9,e),i=10*(0,s.nSR)(3,7),n=10*(0,s.nSR)(10,15)-i,c=(0,s.n0o)(2*(i+n)),q=`$${i-e} + ${n+t} + ${i+e} + ${n-t}$`,f=`$${i-e} + ${i+e} + ${n+t}  + ${n-t} = ${2*i} + ${2*n}= ${2*(i+n)}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q4":e=(0,s.nSR)(1,9),t=(0,s.nSR)(1,9,e),i=(0,s.nSR)(1,9,[e,t]),n=(0,s.nSR)(1,9,[e,t,i]),c=(0,s.n0o)(10+.1*(t+n)+.01*i),q=`$${(0,s.k$K)(e+.1*t+.01*i)}+${(0,s.k$K)(10-e+.1*n)}$`,f=`$${(0,s.k$K)(e+.1*t+.01*i)}+${(0,s.k$K)(10-e+.1*n)}=${(0,s.k$K)(10+.1*(t+n)+.01*i)}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q5":e=(0,s.nSR)(1,3),t=(0,s.nSR)(1,9,e),i=(0,s.n0o)(10*e+t),(0,s.q$q)([!0,!1])?(c=(0,s.n0o)(3*i),q=`Quel est le triple de $${(0,s.euh)(i)}$ ?`,f=`Le triple de $${(0,s.euh)(i)}$ est $3 \\times ${(0,s.euh)(i)}=${(0,s.k$K)(3*i)}$.`):(c=(0,s.n0o)(2*i),q=`Quel est le double de $${(0,s.euh)(i)}$ ?`,f=`Le double de $${(0,s.euh)(i)}$ est $2 \\times ${(0,s.euh)(i)}=${(0,s.k$K)(2*i)}$.`),(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q6":e=(0,s.nSR)(1,3),t=(0,s.nSR)(1,9,e),n=(0,s.nSR)(1,9),i=(0,s.n0o)(10*e+t+.1*n),(0,s.q$q)([!0,!1])?(c=(0,s.n0o)(3*i),q=`Quel est le triple de $${(0,s.euh)(i)}$ ?`,f=`Le triple de $${(0,s.euh)(i)}$ est $3 \\times ${(0,s.euh)(i)}=${(0,s.k$K)(3*i)}$.`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"})):(c=(0,s.n0o)(2*i),q=`Quel est le double de $${(0,s.euh)(i)}$ ?`,f=`Le double de $${(0,s.euh)(i)}$ est $2 \\times ${(0,s.euh)(i)}=${(0,s.k$K)(2*i)}$.`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"}));break;case"q7":e=(0,s.nSR)(1,3),t=(0,s.nSR)(1,9,e),i=(0,s.nSR)(1,9,[e,t]),c=(0,s.n0o)(1e3*e+10*t+100*i),q=`$${(0,s.euh)(e)}\\times 1000 + ${(0,s.euh)(t)}\\times 10 + ${(0,s.euh)(i)}\\times 100$`,f=`$${(0,s.euh)(e)}\\times 1000 + ${(0,s.euh)(t)}\\times 10 + ${(0,s.euh)(i)}\\times 100 =${(0,s.euh)(c)}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q8":e=(0,s.nSR)(5,9),t=(0,s.nSR)(5,9),c=e*t,q=`$${e} \\times ${t}$`,f=`$${e} \\times ${t}=${e*t}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q9":e=(0,s.nSR)(5,9),t=(0,s.nSR)(2,8),i=(0,s.nSR)(1,3),c=(0,s.n0o)(10*e+t-10*i-9),q=`$${10*e+t} - ${10*i+9}$`,f=`$${10*e+t} - ${10*i+9}=${10*e+t}-${10*(i+1)} + 1 = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q10":e=(0,s.nSR)(5,15),(0,s.q$q)([!0,!1])?(t=8*e,c=2*e,q=`Quel est le quart de $${t}$ ?`,f=`Le quart de $${t}$ est $${2*e}.$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"})):(t=6*e,c=2*e,q=`Quel est le tiers de $${t}$ ?`,f=`Le tiers de $${t}$ est $${2*e}.$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"}));break;case"q11":e=(0,s.nSR)(20,70),t=(0,s.nSR)(20,70,e),c=100*e+t,q=`$${e}$ centaines et $${t}$ unités = ?`,f=`$${e} \\times 100 + ${t} = ${100*e+t}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q12":e=(0,s.nSR)(20,70),t=(0,s.nSR)(20,70,e),c=100*e+10*t,q=`$${e}$ centaines et $${t}$ dizaines = ?`,f=`$${e} \\times 100 + ${t} \\times 10 = ${100*e+10*t}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q13":e=(0,s.nSR)(2,4),t=(0,s.nSR)(10,59),n=(0,s.n0o)(60*e+t),q=`Convertir $${n}$ minutes en heures et minutes (format : ...h...min)`,f=`$${n} = ${e} \\times 60 + ${t}$ donc $${n}$ minutes = ${e}h ${t}min`,(0,$.Iq)(this,S,`${e}h${t}min`,{formatInteractif:"texte"});break;case"q14":t=(0,s.nSR)(1,9),i=(0,s.nSR)(0,9),n=(0,s.nSR)(0,9,[t,i]),e=(0,s.n0o)(100*t+10*i+n),c=e%3,q=`Quel est le reste de la division de $${e}$ par $3$ ?`,f=`Le reste de la division de $${e}$ par $3$ est ${e%3}`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q15":t=(0,s.nSR)(5,9),e=(0,s.n0o)(90*t+9),c=10*t+1,q=`$${e}\\div 9$`,f=`$${e}\\div 9 = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q16":e=(0,s.nSR)(5,9),t=(0,s.nSR)(2,8),i=(0,s.nSR)(1,3),c=(0,s.n0o)(10*e+t+10*i+9),q=`$${10*e+t} + ${10*i+9}$`,f=`$${10*e+t} + ${10*i+9}=${10*e+t}+${10*(i+1)} - 1 = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q17":switch(e=(0,s.nSR)(1,9),t=(0,s.nSR)(1,9,e),i=(0,s.nSR)(1,9,[e,t]),n=(0,s.n0o)(e+.1*t+.01*i),c=(0,s.n0o)(100*n),(0,s.q$q)([1,2,3,4])){case 1:q=`$4 \\times ${(0,s.euh)(n)}\\times 25$`,f=`$4 \\times ${(0,s.euh)(n)}\\times 25 = 100 \\times ${(0,s.euh)(n)} = ${(0,s.n0o)(100*n)}$`;break;case 2:q=`$2 \\times ${(0,s.euh)(n)}\\times 50$`,f=`$2 \\times ${(0,s.euh)(n)}\\times 50 = 100 \\times ${(0,s.euh)(n)} = ${(0,s.n0o)(100*n)}$`;break;case 3:q=`$25 \\times ${(0,s.euh)(n)}\\times 4$`,f=`$25 \\times ${(0,s.euh)(n)}\\times 4 = 100 \\times ${(0,s.euh)(n)} = ${(0,s.n0o)(100*n)}$`;break;case 4:q=`$50 \\times ${(0,s.euh)(n)}\\times 2$`,f=`$50 \\times ${(0,s.euh)(n)}\\times 2 = 100 \\times ${(0,s.euh)(n)} = ${(0,s.n0o)(100*n)}$`}(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q18":e=(0,s.nSR)(5,9),t=(0,s.nSR)(6,9),i=(0,s.nSR)(1,5),n=(0,s.nSR)(1,4),c=10*n+t,q=`$${10*i+e} + \\dots = ${(0,s.n0o)(10*(i+n)+t+e)}$`,f=`$${(0,s.n0o)(10*(i+n)+t+e)} - ${10*i+e} = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q19":e=2*(0,s.nSR)(11,24),c=(0,s.n0o)(5*e),q=`$${e}\\times 5$`,f=`$${e}\\times 5 = ${e} \\div 2 \\times 10 = ${(0,s.n0o)(e/2)}\\times 10 =${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q20":e=(0,s.nSR)(0,7),t=h[e][1],i=(0,s.nSR)(h[e][2],h[e][3]),c=(0,s.n0o)(i/5*t),q=`$${(0,s.k$K)(i/10)}$ kg de ${h[e][0]} coûtent $${(0,s.k$K)(i/10*t)}$ €, combien coûtent $${(0,s.k$K)(i/5)}$ kg de ${h[e][0]} ?`,f=`$${(0,s.k$K)(i/10*t)} \\times 2 = ${(0,s.euh)(c)}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q21":e=(0,s.nSR)(3,7),t=(0,s.nSR)(2,9),i=(0,s.nSR)(1,9),n=(0,s.nSR)(5,9),c=(0,s.n0o)((100*e+10*t+i)*n),q=`$${(0,s.k$K)(100*e+10*t+i)}\\times ${n}$<br> Choisis la bonne réponse sans effectuer précisément le calcul<br>`,u=(0,s.TVQ)([`$${(0,s.euh)(c)}$`,`$${(0,s.k$K)(1e3*n+100*e+10*t+i)}$`,`$${(0,s.k$K)((1e3*e+100*t+i)*n)}$`]),q+=`${u[0]} ${(0,s.sp)(4)} ${u[1]} ${(0,s.sp)(4)} ${u[2]}`,f=`$${(0,s.k$K)(100*e+10*t+i)} \\times ${n} = ${(0,s.euh)(c)}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q22":e=10*(0,s.nSR)(11,24)+(0,s.nSR)(0,9),c=(0,s.n0o)(e/100),q=`$${e}$ cm font combien de mètres ?`,f=`$${e} cm = ${(0,s.euh)(c)} m$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q23":e=(0,s.nSR)(3,5),c=(0,s.n0o)(10*(0,s.nSR)(2,9)),t=(0,s.n0o)(c*e),q=`$\\dfrac{1}{${e}} \\text{ de } ${t} \\text{ L} = \\dots \\text{ L}$`,f=`$\\dfrac{1}{${e}}$ de $${t}$ L = ${c} L`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q24":e=(0,s.nSR)(7,9),t=(0,s.nSR)(1,e-1),n=(0,s.nSR)(5,9),i=n*e+t,c=i%e,q=`Je possède ${i} bonbons et je fabrique des sacs de ${e} bonbons. Une fois mes sacs complétés, combien me restera-t-il de bonbons ?`,f=`$${i}=${n}\\times ${e} + ${t}$ , donc il me restera ${t} bonbons.`,(0,$.Iq)(this,S,t,{formatInteractif:"calcul"});break;case"q25":e=(0,s.nSR)(0,4),t=(0,s.nSR)(b[e][1],b[e][2]),u=(0,s.TVQ)([`$${t}$ m`,`$${t}$ dm`,`$${t}$ cm`]),q=`Choisis parmi les propositions suivantes la hauteur d'une ${b[e][0]} (nombre et unité)<br>`,q+=`${u[0]} ${(0,s.sp)(4)} ${u[1]} ${(0,s.sp)(4)} ${u[2]}`,f=`La hauteur d'une ${b[e][0]} est ${t} ${b[e][3]}`,(0,$.Iq)(this,S,new r.Z(t,b[e][3]),{formatInteractif:"longueur"});break;case"q26":e=10*(0,s.nSR)(2,9),t=10*(0,s.nSR)(2,9,e),c=(0,s.n0o)(e*t/100),q=`$${e}\\%$ de $${t}$`,f=`$${e}\\%$ de $${t} = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q27":e=20*(0,s.nSR)(3,6),t=(0,s.nSR)(1,3),c=(0,s.n0o)(e*(t+.5)),q=`Une voiture roule à une vitesse constante de ${e} km/h. Combien de kilomètres parcourt-elle en ${t} h et 30 min ?`,f=`$${e}\\times ${(0,s.k$K)(t+.5)} = ${c}$`,(0,$.Iq)(this,S,c,{formatInteractif:"calcul"});break;case"q28":e=(0,s.nSR)(3,9),t=(0,s.nSR)(0,1),q=`Est-il vrai qu'un carré de côté ${e} cm a le même périmètre qu'un rectangle de largeur ${e-t} cm et de longueur ${e+1} cm ? (V ou F)`,0===t?(f=`Faux car $4\\times ${e}$ cm $\\neq 2\\times ${e}$ cm $+ 2\\times ${e+1}$ cm.`,(0,$.Iq)(this,S,"F")):(f=`Vrai car $4\\times ${e}$ cm $= 2\\times ${e-1}$ cm $+ 2\\times ${e+1}$ cm $= ${4*e}$ cm.`,(0,$.Iq)(this,S,"V"));break;case"q29":e=(0,s.nSR)(3,5),t=(0,s.nSR)(2,4*e-1),i=new a.Z(t,e),c=(0,s.n0o)(t/e),q="Determiner l'abscisse du point A situé ci-dessous :<br>"+(0,o.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:1.5,scale:.5},(0,o.oqt)({Unite:3,Min:0,Max:4.2,x:0,y:0,thickSecDist:1/e,thickSec:!0,thickoffset:0,axeStyle:"|->",pointListe:[[t/e,"A"]],pointCouleur:"blue",pointStyle:"x",labelsPrincipaux:!0,step1:1,step2:1})),f=`L'abscisse du point A est $\\dfrac{${t}}{${e}}$`,3===e?(0,$.Iq)(this,S,[i.texFraction,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"}):(0,$.Iq)(this,S,[i.texFraction,c,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"});break;case"q30":e=(0,s.nSR)(0,7),t=(0,s.n0o)(h[e][1]*(1+(0,s.q$q)([-1,1])*(0,s.nSR)(1,3)*.1)),i=Math.round((0,s.nSR)(h[e][2],h[e][3]/10)),n=(0,s.nSR)(3,6),c=(0,s.n0o)(n*t),q=`$${i}$ kg de ${h[e][0]} coûtent $${(0,s.i6h)(i*t)}$ €.<br> $${i+n}$ kg de ces mêmes ${h[e][0]} coûtent $${(0,s.i6h)((i+n)*t)}$ €.<br>Combien coûtent ${n} kg de ces ${h[e][0]} ?`,f=`$${(0,s.i6h)((i+n)*t)} € - ${(0,s.i6h)(i*t)} € =${(0,s.i6h)(c)} €$`,(0,$.Iq)(this,S,(0,s.i6h)(c)+"€")}"q25"===d[l[R]]?q+=(0,$.G5)(this,S,"longueur"):"q13"===d[l[R]]?q+=(0,$.te)(this,S):q+=(0,$.G5)(this,S),this.questionJamaisPosee(R,e,t,i,l[R])&&(this.listeQuestions.push(q),this.listeCorrections.push(f),S++,R++),p++}(0,s.K1R)(this)},this.besoinFormulaireTexte=["Choix des questions (nombres séparés par des tirets)","1 : Moitié et double\n\n  2 : quotient de a par b\n\n  3 : Somme astucieuse de 4 nombres entiers\n\n  4 : Somme de deux décimaux avec retenue\n\n  5 : Double ou triple d'un nombre entier\n\n  6 : Double ou triple d'un nombre décimal\n\n  7 : Recomposition d'un entier\n\n  8 : tables de multiplication\n\n  9 : soustraire un nombre se finissant par 9\n\n  10 :  Le quart ou le tiers d'un nombre.\n\n  11 :  Recomposer un nombre à partir d'un nombre de centaines et d'un nombre d'unités\n\n  12 :  Recomposer une nombre avec chevauchement.\n\n  13 :  conversion heures et minutes\n\n  14 :  Reste de la division par 3\n\n  15 :  Une division par 9 qui tombe juste\n\n  16 :  ajouter un nombre de la forme 10n+9\n\n  17 :  4 × #,## × 25 ou 2 × #,## × 50\n\n  18 :  addition à trou\n\n  19 :  Nombre pair de 2 chiffres × 5\n\n  20 :  Proportionnalité simple\n\n  21 :  Ordre de grandeur\n\n  22 :  Conversion cm -> m\n\n  23 :  Fraction 1/n d'une quantité de L\n\n  24 :  Reste de la division euclidienne\n\n  25 :  Ordre de grandeur : hauteurs\n\n  26 :  Appliquer un pourcentage\n\n  27 :  Calcul de distance à vitesse constante\n\n  28 :  Comparaison de périmètre\n\n  29 :  Repérage fraction\n\n  30 : Proportionnalité par linéarité\n"]}}}]);
//# sourceMappingURL=145.990d3acdb4b0c0a8f709.js.map