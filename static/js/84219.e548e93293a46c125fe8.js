"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[84219,17007],{84219:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,default:()=>$});var s=t(17007),n=t(66170),r=t(30169);const o="Division Euclidienne - Diviseurs - Multiples";function $(){s.default.call(this),this.titre=o,this.consigne="Divisions euclidiennes - Diviseurs - Multiples.",n.Do.isHtml?this.spacing=1:this.spacing=2,n.Do.isHtml,this.spacingCorr=2,this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(e){let i;n.Do.isHtml&&(this.boutonAide=(0,r.apm)(e,"assets/pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur la division euclidienne (Sébastien Lozano)","Aide mémoire")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";const t=(0,r.bqK)([1,2,3,4,5],this.nbQuestions);for(let s,n,o,$,u,l,a,c,d,h,p,m,b,x,v,Z,f,g,M,q,C,R,S,U=0,D=0;U<this.nbQuestions&&D<50;){switch(i=t[U],i){case 1:f=(0,r.nSR)(2,99),R=`Dire quel est le plus grand reste possible dans une division euclidienne par ${f}.`,S=`Si on divise par ${f}, il ne peut pas rester plus de ${f-1}, sinon c'est qu'on peut encore ajouter au moins 1 fois ${f} dans le dividende et donc 1 au quotient.`;break;case 2:f=(0,r.nSR)(2,99),Z=(0,r.nSR)(1001,99999),g=Math.trunc(Z/f),M=Z%f,R=`On a ${(0,r.x9Z)(Z)}=${(0,r.x9Z)(f)}$\\times$${(0,r.x9Z)(g)} $+$ ${(0,r.x9Z)(M)}`,R+="<br>",R+=`Écrire le quotient et le reste de la division euclidienne de ${(0,r.x9Z)(Z)} par ${f}.`,S=`Dans la division euclidienne de ${(0,r.x9Z)(Z)} par ${f}, le quotient vaut ${(0,r.x9Z)(g)} et le reste ${M}.`;break;case 3:Z=(0,r.nSR)(101,9999),l=(0,r.coU)(Z).length%2==0?(0,r.coU)(Z).length/2+1:((0,r.coU)(Z).length-1)/2+1,f=(0,r.coU)(Z)[l-1],v=[f-1,f,f+1],v=(0,r.TVQ)(v),R="Les trois divisions euclidiennes suivantes sont exactes : <br>",R+=`${(0,r.x9Z)(Z)} = ${(0,r.x9Z)(v[0])}$\\times$${(0,r.x9Z)(Math.trunc(Z/v[0]))} $+$ ${(0,r.x9Z)(Z%v[0])}`,R+="<br>",R+=`${(0,r.x9Z)(Z)} = ${(0,r.x9Z)(v[1])}$\\times$${(0,r.x9Z)(Math.trunc(Z/v[1]))} $+$ ${(0,r.x9Z)(Z%v[1])}`,R+="<br>",R+=`${(0,r.x9Z)(Z)} = ${(0,r.x9Z)(v[2])}$\\times$${(0,r.x9Z)(Math.trunc(Z/v[2]))} $+$ ${(0,r.x9Z)(Z%v[2])}`,R+="<br>",R+=`Sans calculer, dire si les nombres ${(0,r.x9Z)(v[0])}; ${(0,r.x9Z)(v[1])}; ${(0,r.x9Z)(v[2])} sont des diviseurs de ${(0,r.x9Z)(Z)}. Justifier.`,S="",(0,r.h$R)(Z%v[0],0)?S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[0])} vaut 0 donc ${(0,r.x9Z)(v[0])} est un diviseur de ${(0,r.x9Z)(Z)}`:S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[0])} ne vaut pas 0 donc ${(0,r.x9Z)(v[0])} n'est pas un diviseur de ${(0,r.x9Z)(Z)}`,S+="<br>",(0,r.h$R)(Z%v[1],0)?S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[1])} vaut 0 donc ${(0,r.x9Z)(v[1])} divise ${(0,r.x9Z)(Z)}`:S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[1])} ne vaut pas 0 donc ${(0,r.x9Z)(v[1])} ne divise pas ${(0,r.x9Z)(Z)}`,S+="<br>",(0,r.h$R)(Z%v[2],0)?S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[2])} vaut 0 donc ${(0,r.x9Z)(Z)} est divisible par ${(0,r.x9Z)(v[2])}`:S+=`Le reste de la division euclienne de ${(0,r.x9Z)(Z)} par ${(0,r.x9Z)(v[2])} ne vaut pas 0 donc ${(0,r.x9Z)(Z)} n'est pas divisible par ${(0,r.x9Z)(v[2])}`,S+="<br>";break;case 4:q=[],a=[],m=[],C=[],b=[],x=[],q=[(0,r.nSR)(2,999),(0,r.nSR)(2,999,[q[0]]),(0,r.nSR)(2,999,[q[0],q[1]]),(0,r.nSR)(2,999,[q[0],q[1],q[2]])],a=[(0,r.nSR)(2,9),(0,r.nSR)(2,9,[a[0]]),(0,r.nSR)(2,9,[a[0],a[1]]),(0,r.nSR)(2,9,[a[0],a[1],a[2]])];for(let e=0;e<4;e++)m[e]=q[e]*a[e],C[e]=m[e]/q[e],q[e]=(0,r.x9Z)(q[e]),m[e]=(0,r.x9Z)(m[e]),C[e]=(0,r.x9Z)(C[e]);b[0]=`${q[0]} $\\ldots\\ldots\\ldots\\ldots$ ${m[0]}`,x[0]=`${q[0]} est un diviseur de ${m[0]} car ${m[0]}=${q[0]}$\\times$${C[0]}`,b[1]=`${q[1]} $\\ldots\\ldots\\ldots\\ldots$ ${m[1]}`,x[1]=`${q[1]} est un diviseur de ${m[1]} car ${m[1]}=${q[1]}$\\times$${C[1]}`,b[2]=`${m[2]} $\\ldots\\ldots\\ldots\\ldots$ ${q[2]}`,x[2]=`${m[2]} est un multiple de ${q[2]} car ${m[2]}=${q[2]}$\\times$${C[2]}`,b[3]=`${m[3]} $\\ldots\\ldots\\ldots\\ldots$ ${q[3]}`,x[3]=`${m[3]} est un multiple de ${q[3]} car ${m[3]}=${q[3]}$\\times$${C[3]}`,n=(0,r.x9Z)((0,r.nSR)(2,999,[q[0],q[1],q[2],q[3]])),$=(0,r.x9Z)((0,r.nSR)(2,999,[q[0],q[1],q[2],q[3],n])),o=(0,r.x9Z)((0,r.nSR)(2,999,(0,r.coU)(n))),u=(0,r.x9Z)((0,r.nSR)(2,999,(0,r.coU)($))),b[4]=`${n} $\\ldots\\ldots\\ldots\\ldots$ ${o}`,x[4]=`${n} n'est ni un multiple ni un diviseur de ${o} car ${n}=${o}$\\times$${Math.trunc(n/o)}+${(0,r.pRK)(n%o)} et ${o}=${n}$\\times$${Math.trunc(o/n)}+${(0,r.pRK)(o%n)}`,b[5]=`${u} $\\ldots\\ldots\\ldots\\ldots$ ${$}`,x[5]=`${u} n'est ni un multiple ni un diviseur de ${$} car ${$}=${u}$\\times$${Math.trunc($/u)}+${(0,r.pRK)($%u)} et ${u}=${$}$\\times$${Math.trunc(u/$)}+${(0,r.pRK)(u%$)}`,(0,r.Xsq)(b,x),R='Avec la calculatrice, compléter chaque phrase avec "est un diviseur de" ou "est un multiple de" ou "n\'est ni un diviseur ni un multiple de".',R+="<br>",S="";for(let e=0;e<5;e++)R+=b[e],R+="<br>",S+=x[e],S+="<br>";R+=b[5],S+=x[5],S+="<br>";break;case 5:c=[];for(let e=0;e<3;e++)c.push((0,r.nSR)(2,99,c));p=[];for(let e=101;e<999;e++)(0,r.coU)(e).length>8&&p.push(e);if(h=(0,r.nSR)(0,p.length-1),c.push(p[h]),d=(0,r.nSR)(0,c.length-1),s=c[d],R=`Écrire la liste de tous les diviseurs de ${s}.`,S=`Pour trouver la liste des diviseurs de ${s} on cherche tous les produits de deux facteurs qui donnent ${s}. En écrivant toujours le plus petit facteur en premier.<br>`,S+=`Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${s}, par exemple ici, ${Math.trunc(Math.sqrt(s))}$\\times$${Math.trunc(Math.sqrt(s))} = ${Math.trunc(Math.sqrt(s))*Math.trunc(Math.sqrt(s))}<${s}`,S+=` et ${Math.trunc(Math.sqrt(s))+1}$\\times$${Math.trunc(Math.sqrt(s))+1} = ${(Math.trunc(Math.sqrt(s))+1)*(Math.trunc(Math.sqrt(s))+1)}>${s} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(s))}.`,S+=` En effet, si ${s} est le produit de deux entiers p$\\times$q avec p < q alors si p$\\times$p > ${s} c'est que q$\\times$q < ${s} mais dans ce cas p serait supérieur à q sinon p$\\times$q serait inférieur à ${s} ce qui ne doit pas être le cas.<br>`,(0,r.coU)(s).length%2==0)for(let e=0;e<(0,r.coU)(s).length/2;e++)S+=(0,r.coU)(s)[e]+"$\\times$"+(0,r.coU)(s)[(0,r.coU)(s).length-e-1]+` = ${s}<br>`;else{for(let e=0;e<((0,r.coU)(s).length-1)/2;e++)S+=(0,r.coU)(s)[e]+"$\\times$"+(0,r.coU)(s)[(0,r.coU)(s).length-e-1]+"<br>";S+=(0,r.coU)(s)[((0,r.coU)(s).length-1)/2]+"$\\times$"+(0,r.coU)(s)[((0,r.coU)(s).length-1)/2]+` = ${s}<br>`}S+=`Chacun des facteurs de la liste ci-dessus est un diviseur de ${s}.<br>`,S+=`La liste des diviseurs de ${s} est donc `,S+="1";for(let e=1;e<(0,r.coU)(s).length;e++)S+=" ; "+(0,r.coU)(s)[e];S+="."}this.questionJamaisPosee(U,i,R)&&(this.listeQuestions.push(R),this.listeCorrections.push(S),U++),D++}(0,r.K1R)(this)}}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=84219.e548e93293a46c125fe8.js.map