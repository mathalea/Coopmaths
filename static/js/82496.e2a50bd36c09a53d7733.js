(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[82496,71129],{82496:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>o,default:()=>$});var s=t(71129),n=t(62259),r=t(63861);const o="Division Euclidienne - Diviseurs - Multiples";function $(){s.default.call(this),this.titre=o,this.consigne="Divisions euclidiennes - Diviseurs - Multiples.",n.Do.isHtml?this.spacing=1:this.spacing=2,n.Do.isHtml,this.spacingCorr=2,this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(e){let i;n.Do.isHtml&&(this.boutonAide=(0,r.apm)(e,"assets/pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur la division euclidienne (Sébastien Lozano)","Aide mémoire")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let t=(0,r.bqK)([1,2,3,4,5],this.nbQuestions);for(let n,a,u=0,c=0;u<this.nbQuestions&&c<50;){var s,o,$,l;switch(i=t[u],i){case 1:n=`Dire quel est le plus grand reste possible dans une division euclidienne par ${o=(0,r.nSR)(2,99)}.`,a=`Si on divise par ${o}, il ne peut pas rester plus de ${o-1}, sinon c'est qu'on peut encore ajouter au moins 1 fois ${o} dans le dividende et donc 1 au quotient.`;break;case 2:o=(0,r.nSR)(2,99),s=(0,r.nSR)(1001,99999),$=Math.trunc(s/o),l=s%o,n=`On a ${(0,r.x9Z)(s)}=${(0,r.x9Z)(o)}$\\times$${(0,r.x9Z)($)} $+$ ${(0,r.x9Z)(l)}`,n+="<br>",n+=`Écrire le quotient et le reste de la division euclidienne de ${(0,r.x9Z)(s)} par ${o}.`,a=`Dans la division euclidienne de ${(0,r.x9Z)(s)} par ${o}, le quotient vaut ${(0,r.x9Z)($)} et le reste ${l}.`;break;case 3:let e;s=(0,r.nSR)(101,9999),e=(0,r.coU)(s).length%2==0?(0,r.coU)(s).length/2+1:((0,r.coU)(s).length-1)/2+1;let i=[(o=(0,r.coU)(s)[e-1])-1,o,o+1];i=(0,r.TVQ)(i),n="Les trois divisions euclidiennes suivantes sont exactes : <br>",n+=`${(0,r.x9Z)(s)} = ${(0,r.x9Z)(i[0])}$\\times$${(0,r.x9Z)(Math.trunc(s/i[0]))} $+$ ${(0,r.x9Z)(s%i[0])}`,n+="<br>",n+=`${(0,r.x9Z)(s)} = ${(0,r.x9Z)(i[1])}$\\times$${(0,r.x9Z)(Math.trunc(s/i[1]))} $+$ ${(0,r.x9Z)(s%i[1])}`,n+="<br>",n+=`${(0,r.x9Z)(s)} = ${(0,r.x9Z)(i[2])}$\\times$${(0,r.x9Z)(Math.trunc(s/i[2]))} $+$ ${(0,r.x9Z)(s%i[2])}`,n+="<br>",n+=`Sans calculer, dire si les nombres ${(0,r.x9Z)(i[0])}; ${(0,r.x9Z)(i[1])}; ${(0,r.x9Z)(i[2])} sont des diviseurs de ${(0,r.x9Z)(s)}. Justifier.`,a="",(0,r.h$R)(s%i[0],0)?a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[0])} vaut 0 donc ${(0,r.x9Z)(i[0])} est un diviseur de ${(0,r.x9Z)(s)}`:a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[0])} ne vaut pas 0 donc ${(0,r.x9Z)(i[0])} n'est pas un diviseur de ${(0,r.x9Z)(s)}`,a+="<br>",(0,r.h$R)(s%i[1],0)?a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[1])} vaut 0 donc ${(0,r.x9Z)(i[1])} divise ${(0,r.x9Z)(s)}`:a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[1])} ne vaut pas 0 donc ${(0,r.x9Z)(i[1])} ne divise pas ${(0,r.x9Z)(s)}`,a+="<br>",(0,r.h$R)(s%i[2],0)?a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[2])} vaut 0 donc ${(0,r.x9Z)(s)} est divisible par ${(0,r.x9Z)(i[2])}`:a+=`Le reste de la division euclienne de ${(0,r.x9Z)(s)} par ${(0,r.x9Z)(i[2])} ne vaut pas 0 donc ${(0,r.x9Z)(s)} n'est pas divisible par ${(0,r.x9Z)(i[2])}`,a+="<br>";break;case 4:let t=[],u=[],c=[],d=[],h=[],p=[];t=[(0,r.nSR)(2,999),(0,r.nSR)(2,999,[t[0]]),(0,r.nSR)(2,999,[t[0],t[1]]),(0,r.nSR)(2,999,[t[0],t[1],t[2]])],u=[(0,r.nSR)(2,9),(0,r.nSR)(2,9,[u[0]]),(0,r.nSR)(2,9,[u[0],u[1]]),(0,r.nSR)(2,9,[u[0],u[1],u[2]])];for(let s=0;s<4;s++)c[s]=t[s]*u[s],d[s]=c[s]/t[s],t[s]=(0,r.x9Z)(t[s]),c[s]=(0,r.x9Z)(c[s]),d[s]=(0,r.x9Z)(d[s]);h[0]=`${t[0]} $\\ldots\\ldots\\ldots\\ldots$ ${c[0]}`,p[0]=`${t[0]} est un diviseur de ${c[0]} car ${c[0]}=${t[0]}$\\times$${d[0]}`,h[1]=`${t[1]} $\\ldots\\ldots\\ldots\\ldots$ ${c[1]}`,p[1]=`${t[1]} est un diviseur de ${c[1]} car ${c[1]}=${t[1]}$\\times$${d[1]}`,h[2]=`${c[2]} $\\ldots\\ldots\\ldots\\ldots$ ${t[2]}`,p[2]=`${c[2]} est un multiple de ${t[2]} car ${c[2]}=${t[2]}$\\times$${d[2]}`,h[3]=`${c[3]} $\\ldots\\ldots\\ldots\\ldots$ ${t[3]}`,p[3]=`${c[3]} est un multiple de ${t[3]} car ${c[3]}=${t[3]}$\\times$${d[3]}`;let b=(0,r.x9Z)((0,r.nSR)(2,999,[t[0],t[1],t[2],t[3]])),m=(0,r.x9Z)((0,r.nSR)(2,999,[t[0],t[1],t[2],t[3],b])),x=(0,r.x9Z)((0,r.nSR)(2,999,(0,r.coU)(b))),v=(0,r.x9Z)((0,r.nSR)(2,999,(0,r.coU)(m)));h[4]=`${b} $\\ldots\\ldots\\ldots\\ldots$ ${x}`,p[4]=`${b} n'est ni un multiple ni un diviseur de ${x} car ${b}=${x}$\\times$${Math.trunc(b/x)}+${(0,r.pRK)(b%x)} et ${x}=${b}$\\times$${Math.trunc(x/b)}+${(0,r.pRK)(x%b)}`,h[5]=`${v} $\\ldots\\ldots\\ldots\\ldots$ ${m}`,p[5]=`${v} n'est ni un multiple ni un diviseur de ${m} car ${m}=${v}$\\times$${Math.trunc(m/v)}+${(0,r.pRK)(m%v)} et ${v}=${m}$\\times$${Math.trunc(v/m)}+${(0,r.pRK)(v%m)}`,(0,r.Xsq)(h,p),n='Avec la calculatrice, compléter chaque phrase avec "est un diviseur de" ou "est un multiple de" ou "n\'est ni un diviseur ni un multiple de".',n+="<br>",a="";for(let s=0;s<5;s++)n+=h[s],n+="<br>",a+=p[s],a+="<br>";n+=h[5],a+=p[5],a+="<br>";break;case 5:let Z=[];Z=[(0,r.nSR)(2,99),(0,r.nSR)(2,99,[Z[0]]),(0,r.nSR)(2,99,[Z[0],Z[1]]),(0,r.nSR)(2,99,[Z[0],Z[1],Z[2]])];let f=[];for(let s=101;s<999;s++)(0,r.coU)(s).length>8&&f.push(s);let M,q,g=(0,r.nSR)(0,f.length-1);if(Z.push(f[g]),q=(0,r.nSR)(0,Z.length-1),M=Z[q],n=`Écrire la liste de tous les diviseurs de ${M}.`,a=`Pour trouver la liste des diviseurs de ${M} on cherche tous les produits de deux facteurs qui donnent ${M}. En écrivant toujours le plus petit facteur en premier.<br>`,a+=`Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${M}, par exemple ici, ${Math.trunc(Math.sqrt(M))}$\\times$${Math.trunc(Math.sqrt(M))} = ${Math.trunc(Math.sqrt(M))*Math.trunc(Math.sqrt(M))}<${M}`,a+=` et ${Math.trunc(Math.sqrt(M))+1}$\\times$${Math.trunc(Math.sqrt(M))+1} = ${(Math.trunc(Math.sqrt(M))+1)*(Math.trunc(Math.sqrt(M))+1)}>${M} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(M))}.`,a+=` En effet, si ${M} est le produit de deux entiers p$\\times$q avec p < q alors si p$\\times$p > ${M} c'est que q$\\times$q < ${M} mais dans ce cas p serait supérieur à q sinon p$\\times$q serait inférieur à ${M} ce qui ne doit pas être le cas.<br>`,(0,r.coU)(M).length%2==0)for(let s=0;s<(0,r.coU)(M).length/2;s++)a+=(0,r.coU)(M)[s]+"$\\times$"+(0,r.coU)(M)[(0,r.coU)(M).length-s-1]+` = ${M}<br>`;else{for(let e=0;e<((0,r.coU)(M).length-1)/2;e++)a+=(0,r.coU)(M)[e]+"$\\times$"+(0,r.coU)(M)[(0,r.coU)(M).length-e-1]+"<br>";a+=(0,r.coU)(M)[((0,r.coU)(M).length-1)/2]+"$\\times$"+(0,r.coU)(M)[((0,r.coU)(M).length-1)/2]+` = ${M}<br>`}a+=`Chacun des facteurs de la liste ci-dessus est un diviseur de ${M}.<br>`,a+=`La liste des diviseurs de ${M} est donc `,a+="1";for(let s=1;s<(0,r.coU)(M).length;s++)a+=" ; "+(0,r.coU)(M)[s];a+="."}-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(a),u++),c++}(0,r.K1R)(this)}}},71129:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=82496.e2a50bd36c09a53d7733.js.map