(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[295,6969],{66969:(e,r,o)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}o.r(r),o.d(r,{default:()=>t})},50295:(e,r,o)=>{"use strict";o.r(r),o.d(r,{titre:()=>c,default:()=>s});var t=o(66969),n=o(55339),i=o(23067);const c="Re-Problèmes additifs et de comparaison sur les rationnels";function s(){let e;t.default.call(this),this.debug=!1,this.sup=1,this.video="",this.debug,this.nbQuestions=2,this.titre=c,this.consigne="Justifier vos réponses aux problèmes suivants.",this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacing=2:this.spacing=1.5,sortieHtml?this.spacingCorr=3:this.spacingCorr=1.15,this.nouvelleVersion=function(){e=this.debug?[1,2,3,4,5]:[(0,n.q$q)([1,2]),(0,n.q$q)([3,4,5])];let r=(0,n.bqK)(e,this.nbQuestions);this.listeQuestions=[],this.listeCorrections=[];let o,t,c,s,a,$,l,u,f,d,m,p,x,F,b,h,g,v,q,C,j,D,M,P,L=[[40,2,20,4,10,5,8],[60,2,30,3,20,4,15,5,12,6,10],[80,2,40,4,20,5,16,8,10]],Q=[],R=[];for(let e,E,k=0,S=[],T=0;k<this.nbQuestions&&T<50;){for(R=[],S=L[(0,n.nSR)(0,L.length-1)],v=(0,i.Pj)(1,2),q=(0,i.Pj)(1,2),C=(0,i.Pj)(1,2);v.num==q.num||v.num==C.num||q.num==C.num||v.superieurlarge((0,i.Pj)(1,2))||q.superieurlarge((0,i.Pj)(1,2));)p=(0,n.nSR)(1,6),b=(0,n.q$q)(S),x=(0,n.nSR)(2,10,p),h=(0,n.q$q)(S,b),F=b*h-p*h-x*b,g=b*h,v=(0,i.Pj)(p,b).simplifie(),q=(0,i.Pj)(x,h).simplifie(),C=(0,i.Pj)(F,g).simplifie();for(R.push({prenoms:[(0,n.nHh)()],fractions:[v,"VTT",q,"ski de fond",C,"pied"],enonce:"",question:"Pour quelle discipline, la distance est-elle la plus grande ?",correction:""});o==t||o==c||t==c;)o=(0,n.sTI)(),t=(0,n.sTI)(),c=(0,n.sTI)();R.push({prenoms:[],fractions:[v,o,q,t,C,c],enonce:"",question:"Qui a été élue ?",correction:""}),s=new Date,a=s.getFullYear(),R[0].enonce+="Le triathlon des neiges de la vallée des loups comprend trois épreuves qui s'enchaînent : VTT, ski de fond et course à pied.",R[0].enonce+=`<br>${R[0].prenoms[0]}, un passionné de cette épreuve, s'entraîne régulièrement sur le même circuit. `,R[0].enonce+=`<br>À chaque entraînement, il parcourt le circuit de la façon suivante : $${R[0].fractions[0].texFraction}$ à ${R[0].fractions[1]}, `,R[0].enonce+=`$${R[0].fractions[2].texFraction}$ à ${R[0].fractions[3]} et le reste à ${R[0].fractions[5]}.`,R[1].enonce=`À l'élection de Miss Math ${a}, ${R[1].fractions[1]} a remporté $${R[1].fractions[0].texFraction}$ des suffrages, `,R[1].enonce+=`${R[1].fractions[3]} $${R[1].fractions[2].texFraction}$ et `,R[1].enonce+=`${R[1].fractions[5]} tous les autres.`,$=(0,i.yy)(v,q,C),f=(0,n.E4t)($.listeMemeDenominateur),d=(0,n.E4t)($.listeRangeeMemeDenominateur),m=(0,n.E4t)($.listeRangee),u=$.listeMemeDenominateur[0].den;for(let e=0;e<2;e++)R[e].correction="Il s'agit d'un problème additif. Il va être necessaire de réduire les fractions au même dénominateur pour les additionner, les soustraire ou les comparer.<br>",$.liste[0].den==$.liste[1].den?R[e].correction+="Les fractions de l'énoncé ont déjà le même dénominateur.<br>":(R[e].correction+="Réduisons les fractions de l'énoncé au même dénominateur :  ",R[e].correction+=`$${$.liste[0].texFraction}$ `,$.liste[0].den!==u?R[e].correction+=`$= ${$.listeMemeDenominateur[0].texFraction}$ et `:R[e].correction+=" et ",R[e].correction+=`$${$.liste[1].texFraction}$ `,$.liste[1].den!==u?R[e].correction+=`$= ${$.listeMemeDenominateur[1].texFraction}$.<br>`:R[e].correction+=".<br>");R[0].correction+="Calculons alors la distance à ",R[1].correction+="Calculons d'abord la fraction des suffrages remportés par ";for(let e=0;e<2;e++)R[e].correction+=`${R[e].fractions[5]} : <br>`,R[e].correction+=`$1-${R[e].fractions[0].texFraction}-${R[e].fractions[2].texFraction} = `,R[e].correction+=`${(0,i.Pj)(u,u).texFraction}-${$.listeMemeDenominateur[0].texFraction}-${$.listeMemeDenominateur[1].texFraction} = `,R[e].correction+=`\\dfrac{${u}-${$.listeMemeDenominateur[0].num}-${$.listeMemeDenominateur[1].num}}{${u}} = `,R[e].correction+=`${(0,i.Pj)(u-$.listeMemeDenominateur[0].num-$.listeMemeDenominateur[1].num,u).texFraction}`,u!=C.den?R[e].correction+=` = ${R[e].fractions[4].texFraction}$`:R[e].correction+="$";for(R[0].correction+=`<br>${R[0].prenoms[0]} fait donc $${R[0].fractions[0].texFraction}$ à ${R[0].fractions[1]}, `,R[0].correction+=`$${R[0].fractions[2].texFraction}$ à ${R[0].fractions[3]} et `,R[0].correction+=`$${R[0].fractions[4].texFraction}$ à ${R[0].fractions[5]}.`,R[0].correction+="<br> Avec les mêmes dénominateurs pour pouvoir comparer, ",R[0].correction+=`${R[0].prenoms[0]} fait donc $${f[0].texFraction}$ à ${R[0].fractions[1]}, `,R[0].correction+=`$${f[1].texFraction}$ à ${R[0].fractions[3]} et `,R[0].correction+=`$${f[2].texFraction}$ à ${R[0].fractions[5]}.`,v.egal(q)&&v.egal(C)?R[0].correction+=`<br> ${(0,n.hlL)(`Les trois fractions sont équivalentes, ${R[0].prenoms[0]} parcours donc la même distance dans les trois disciplines.`)}`:(R[0].correction+=`<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $${d[0].texFraction}$, $${d[1].texFraction}$, $${d[2].texFraction}$.`,R[0].correction+=`<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $${m[0].texFraction}$, $${m[1].texFraction}$, $${m[2].texFraction}$.`,R[0].correction+=`<br> ${(0,n.hlL)(`C'est donc à ${R[0].fractions[R[0].fractions.indexOf(m[2])+1]} que ${R[0].prenoms[0]} fait la plus grande distance.`)}`),R[1].correction+=`<br>${R[1].fractions[1]} a donc remporté $${R[1].fractions[0].texFraction}$, `,R[1].correction+=`${R[1].fractions[3]} a remporté $${R[1].fractions[2].texFraction}$ et `,R[1].correction+=`${R[1].fractions[5]} $${R[1].fractions[4].texFraction}$.`,R[1].correction+="<br> Avec les mêmes dénominateurs pour pouvoir comparer, ",R[1].correction+=`${R[1].fractions[1]} remporte donc $${f[0].texFraction}$, `,R[1].correction+=`${R[1].fractions[3]} $${f[1].texFraction}$ et `,R[1].correction+=`${R[1].fractions[5]} $${f[2].texFraction}$.`,v.egal(q)&&v.egal(C)?R[1].correction+=`<br> ${(0,n.hlL)("Les trois fractions sont équivalentes, les trois candidates ont donc remporté le même nombre de suffrages.")}`:(R[1].correction+=`<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $${d[0].texFraction}$, $${d[1].texFraction}$, $${d[2].texFraction}$.`,R[1].correction+=`<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $${m[0].texFraction}$, $${m[1].texFraction}$, $${m[2].texFraction}$.`,R[1].correction+=`<br> ${(0,n.hlL)(`C'est donc ${R[1].fractions[R[1].fractions.indexOf(m[2])+1]} qui a été élue.`)}`),Q=[],P=L[(0,n.nSR)(2,L.length-1)],v=(0,i.Pj)(1,3),q=(0,i.Pj)(1,3),C=(0,i.Pj)(1,3),j=(0,i.Pj)(1,3);v.num==q.num||v.num==C.num||v.num==j.num||q.num==C.num||q.num==j.num||C.num==j.num||v.superieurlarge((0,i.Pj)(1,3))||q.superieurlarge((0,i.Pj)(1,3))||C.superieurlarge((0,i.Pj)(1,3));)p=(0,n.nSR)(1,5),b=(0,n.q$q)(P),x=(0,n.nSR)(1,11,p),h=(0,n.q$q)(P),F=(0,n.nSR)(1,17,[p,x]),g=(0,n.q$q)(P),D=b*h*g-p*h*g-x*b*g-F*b*h,M=b*h*g,v=(0,i.Pj)(p,b).simplifie(),q=(0,i.Pj)(x,h).simplifie(),C=(0,i.Pj)(F,g).simplifie(),j=(0,i.Pj)(D,M).simplifie();Q.push({prenoms:[(0,n.rV2)()],fractions:[v,"carmin",q,"ocre jaune",C,"turquoise",j,"pourpre"],enonce:"",question:"Quelle est elle la couleur qui recouvre le plus de surface ?",correction:""}),Q.push({prenoms:[],fractions:[v,"la culture des légumes",q,"la culture des plantes aromatiques",C,"une serre servant aux semis",j,"la culture des fraisiers"],enonce:"",question:"Quelle est la culture qui occupe le plus de surface ?",correction:""}),Q.push({prenoms:[],fractions:[v,"le pays organisateur",q,"l'ensemble des supporters des deux équipes en jeu",C,"les sponsors et officiels",j,"les places en vente libre"],enonce:"",question:"Quelle est la catégorie la plus importante dans le stade ?",correction:""}),Q[0].enonce=`${Q[0].prenoms[0]} colorie un mandala selon les proportions suivantes :  $${Q[0].fractions[0].texFraction}$ en ${Q[0].fractions[1]}, `,Q[0].enonce+=`$${Q[0].fractions[2].texFraction}$ en  ${Q[0].fractions[3]}, `,Q[0].enonce+=`$${Q[0].fractions[4].texFraction}$ en  ${Q[0].fractions[5]} et `,Q[0].enonce+=`le reste en ${Q[0].fractions[7]}.`,Q[1].enonce=`Un jardin est aménagé selon les proportions suivantes :  $${Q[1].fractions[0].texFraction}$ par ${Q[1].fractions[1]}, `,Q[1].enonce+=`$${Q[1].fractions[2].texFraction}$ par  ${Q[1].fractions[3]}, `,Q[1].enonce+=`$${Q[1].fractions[4].texFraction}$ par  ${Q[1].fractions[5]} et `,Q[1].enonce+=`le reste par ${Q[1].fractions[7]}.`,Q[2].enonce=`Pour chaque match, les places du stade sont mises en vente dans les proportions suivantes :  $${Q[2].fractions[0].texFraction}$ pour ${Q[2].fractions[1]}, `,Q[2].enonce+=`$${Q[2].fractions[2].texFraction}$ pour  ${Q[2].fractions[3]}, `,Q[2].enonce+=`$${Q[2].fractions[4].texFraction}$ pour  ${Q[2].fractions[5]} et `,Q[2].enonce+=`le reste pour ${Q[2].fractions[7]}.`,l=(0,i.yy)(v,q,C,j),f=(0,n.E4t)(l.listeMemeDenominateur),d=(0,n.E4t)(l.listeRangeeMemeDenominateur),m=(0,n.E4t)(l.listeRangee),u=l.listeMemeDenominateur[0].den;for(let e=0;e<3;e++)Q[e].correction="Il s'agit d'un problème additif. Il va être necessaire de réduire les fractions au même dénominateur pour les additionner, les soustraire ou les comparer.<br>",l.liste[0].den==u&&l.liste[1].den==u&&l.liste[2].den==u?Q[e].correction+="Les fractions de l'énoncé ont déjà le même dénominateur.":(Q[e].correction+="Réduisons les fractions de l'énoncé au même dénominateur :  ",Q[e].correction+=`$${l.liste[0].texFraction}$ `,l.liste[0].den!=u?Q[e].correction+=`$= ${l.listeMemeDenominateur[0].texFraction}$ ; `:Q[e].correction+=" ; ",Q[e].correction+=`$${l.liste[1].texFraction}$ `,l.liste[1].den!=u?Q[e].correction+=`$= ${l.listeMemeDenominateur[1].texFraction}$ et `:Q[e].correction+=" et ",Q[e].correction+=`$${l.liste[2].texFraction}$ `,l.liste[2].den!=u?Q[e].correction+=`$= ${l.listeMemeDenominateur[2].texFraction}$.<br>`:Q[e].correction+=".<br>");Q[0].correction+="Calculons alors la fraction du mandala recouverte en ",Q[1].correction+="Calculons d'abord la fraction du jardin occupée par ",Q[2].correction+="Calculons d'abord la fraction du stade occupée par ";for(let e=0;e<3;e++)Q[e].correction+=`${Q[e].fractions[5]} : <br>`,Q[e].correction+=`$1-${Q[e].fractions[0].texFraction}-${Q[e].fractions[2].texFraction}-${Q[e].fractions[4].texFraction} = `,Q[e].correction+=`\\dfrac{${u}}{${u}}-${f[0].texFraction}-${f[1].texFraction}-${f[2].texFraction} = `,Q[e].correction+=`\\dfrac{${u}-${f[0].num}-${f[1].num}-${f[2].num}}{${u}} = `,Q[e].correction+=`${f[3].texFraction}`,f[3].den!=Q[e].fractions[6].den?Q[e].correction+=` = ${Q[e].fractions[6].texFraction}$`:Q[e].correction+="$";switch(Q[0].correction+=`<br>Le mandala est donc colorié de la façon suivante : $${Q[0].fractions[0].texFraction}$ en ${Q[0].fractions[1]}, `,Q[0].correction+=`$${Q[0].fractions[2].texFraction}$ en ${Q[0].fractions[3]}, `,Q[0].correction+=`$${Q[0].fractions[4].texFraction}$ en ${Q[0].fractions[5]} et `,Q[0].correction+=`$${Q[0].fractions[6].texFraction}$ en ${Q[0].fractions[7]}.`,Q[0].correction+="<br> Avec les mêmes dénominateurs pour pouvoir comparer, ",Q[0].correction+=`le mandala est donc colorié de la façon suivante : $${f[0].texFraction}$ en ${Q[0].fractions[1]}, `,Q[0].correction+=`$${f[1].texFraction}$ en ${Q[0].fractions[3]}, `,Q[0].correction+=`$${f[2].texFraction}$ en ${Q[0].fractions[5]} et `,Q[0].correction+=`$${f[3].texFraction}$ en ${Q[0].fractions[7]}.`,Q[0].fractions[0].egal(Q[0].fractions[2])&&Q[0].fractions[0].egal(Q[0].fractions[4])&&Q[0].fractions[0].egal(Q[0].fractions[6])?Q[0].correction+=`<br> ${(0,n.hlL)(`Les quatre fractions sont équivalentes, ${Q[0].prenoms[0]} colorie donc la même surface avec les quatre couleurs.`)}`:(Q[0].correction+=`<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $${d[0].texFraction}$, $${d[1].texFraction}$, $${d[2].texFraction}$, $${d[3].texFraction}$.`,Q[0].correction+=`<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $${m[0].texFraction}$, $${m[1].texFraction}$, $${m[2].texFraction}$, $${m[3].texFraction}$.`,Q[0].correction+=`<br> ${(0,n.hlL)(`C'est donc en ${Q[0].fractions[Q[0].fractions.indexOf(m[3])+1]} que le mandala est le plus recouvert.`)}`),Q[1].correction+=`<br>Le jardin est donc occupé de la façon suivante : $${Q[1].fractions[0].texFraction}$ par ${Q[1].fractions[1]}, `,Q[1].correction+=`$${Q[1].fractions[2].texFraction}$ par ${Q[1].fractions[3]}, `,Q[1].correction+=`$${Q[1].fractions[4].texFraction}$ par ${Q[1].fractions[5]} et `,Q[1].correction+=`$${Q[1].fractions[6].texFraction}$ par ${Q[1].fractions[7]}.`,Q[1].correction+="<br> Avec les mêmes dénominateurs pour pouvoir comparer, ",Q[1].correction+=`le jardin est donc occupé de la façon suivante : $${f[0].texFraction}$ par ${Q[1].fractions[1]}, `,Q[1].correction+=`$${f[1].texFraction}$ par ${Q[1].fractions[3]}, `,Q[1].correction+=`$${f[2].texFraction}$ par ${Q[1].fractions[5]} et `,Q[1].correction+=`$${f[3].texFraction}$ par ${Q[1].fractions[7]}.`,Q[1].fractions[0].egal(Q[1].fractions[2])&&Q[1].fractions[0].egal(Q[1].fractions[4])&&Q[1].fractions[0].egal(Q[1].fractions[6])?Q[1].correction+=`<br> ${(0,n.hlL)("Les quatre fractions sont équivalentes, la même surface du jardin est donc occupée par les quatre cultures.")}`:(Q[1].correction+=`<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $${d[0].texFraction}$, $${d[1].texFraction}$, $${d[2].texFraction}$, $${d[3].texFraction}$.`,Q[1].correction+=`<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $${m[0].texFraction}$, $${m[1].texFraction}$, $${m[2].texFraction}$, $${m[3].texFraction}$.`,Q[1].correction+=`<br> ${(0,n.hlL)(`C'est donc par ${Q[1].fractions[Q[1].fractions.indexOf(m[3])+1]}\n                     que le jardin est le plus occupé.`)}`),Q[2].correction+=`<br>Le stade est donc occupé de la façon suivante : $${Q[2].fractions[0].texFraction}$ pour ${Q[2].fractions[1]}, `,Q[2].correction+=`$${Q[2].fractions[2].texFraction}$ pour ${Q[2].fractions[3]}, `,Q[2].correction+=`$${Q[2].fractions[4].texFraction}$ pour ${Q[2].fractions[5]} et `,Q[2].correction+=`$${Q[2].fractions[6].texFraction}$ pour ${Q[2].fractions[7]}.`,Q[2].correction+="<br> Avec les mêmes dénominateurs pour pouvoir comparer, ",Q[2].correction+=`le stade est donc occupé de la façon suivante : $${f[0].texFraction}$ pour ${Q[2].fractions[1]}, `,Q[2].correction+=`$${f[1].texFraction}$ pour ${Q[2].fractions[3]}, `,Q[2].correction+=`$${f[2].texFraction}$ pour ${Q[2].fractions[5]} et `,Q[2].correction+=`$${f[3].texFraction}$ pour ${Q[2].fractions[7]}.`,Q[2].fractions[0].egal(Q[2].fractions[2])&&Q[2].fractions[0].egal(Q[2].fractions[4])&&Q[2].fractions[0].egal(Q[2].fractions[6])?Q[2].correction+=`<br> ${(0,n.hlL)("Les quatre fractions sont équivalentes, chaque catégorie a donc la même importance dans le stade.")}`:(Q[2].correction+=`<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $${d[0].texFraction}$, $${d[1].texFraction}$, $${d[2].texFraction}$, $${d[3].texFraction}$.`,Q[2].correction+=`<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $${m[0].texFraction}$, $${m[1].texFraction}$, $${m[2].texFraction}$, $${m[3].texFraction}$.`,Q[2].correction+=`<br> ${(0,n.hlL)(`C'est donc pour ${Q[2].fractions[Q[2].fractions.indexOf(m[3])+1]} que le nombre de places est le plus important.`)}`),r[k]){case 1:e=`${R[0].enonce} <br> ${R[0].question}`,this.debug?(e+="<br>",e+=`<br> ${R[0].correction}`,E=""):E=`${R[0].correction}`;break;case 2:e=`${R[1].enonce} <br> ${R[1].question}`,this.debug?(e+="<br>",e+=`<br> ${R[1].correction}`,E=""):E=`${R[1].correction}`;break;case 3:e=`${Q[0].enonce} <br> ${Q[0].question}`,this.debug?(e+="<br>",e+=`<br> ${Q[0].correction}`,E=""):E=`${Q[0].correction}`;break;case 4:e=`${Q[1].enonce} <br> ${Q[1].question}`,this.debug?(e+="<br>",e+=`<br> ${Q[1].correction}`,E=""):E=`${Q[1].correction}`;break;case 5:e=`${Q[2].enonce} <br> ${Q[2].question}`,this.debug?(e+="<br>",e+=`<br> ${Q[2].correction}`,E=""):E=`${Q[2].correction}`}-1==this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(E),k++),T++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=295.dcbdc714312359343f61.js.map