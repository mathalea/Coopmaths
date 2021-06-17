(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3340,5216],{3340:(t,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>o,default:()=>c});var s=i(75216),n=i(89459),r=i(55339);const o="Écrire la liste de tous les diviseurs d’un entier";function c(){s.default.call(this),this.titre=o,this.consigne="",n.Do.isHtml?this.spacing=2:this.spacing=1,n.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){let t;n.Do.isHtml,this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let e=(0,r.bqK)([1,1,2],this.nbQuestions);for(let i,s,o=0,c=0;o<this.nbQuestions&&c<50;){switch(t=e[o],t){case 1:let t=(0,r.nSR)(2,99,(0,r.hmQ)(99)),e=(0,r.coU)(t).length;if(i=`Compléter le tableau suivant et faire la liste de tous les diviseurs de ${t}`,n.Do.isHtml||(i+="$\\medskip$"),i+="<br>",n.Do.isHtml?i+="$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n":i+="$\\begin{array}{|c|c|c|}\n",i+="\\hline\n",i+=`\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${t} \\\\\n`,i+="\\hline\n",e%2==0)for(let s=0;s<(0,r.coU)(t).length/2;s++)i+=(0,r.OIN)((0,r.coU)(t)[s])+" & "+(0,r.OIN)((0,r.coU)(t)[(0,r.coU)(t).length-s-1])+`& ${(0,r.OIN)(t)} \\\\\n`,i+="\\hline\n";else{for(let e=0;e<((0,r.coU)(t).length-1)/2;e++)i+=(0,r.OIN)((0,r.coU)(t)[e])+" & "+(0,r.OIN)((0,r.coU)(t)[(0,r.coU)(t).length-e-1])+`& ${(0,r.OIN)(t)} \\\\\n`;i+=(0,r.OIN)((0,r.coU)(t)[(e-1)/2])+" & "+(0,r.OIN)((0,r.coU)(t)[(e-1)/2])+`& ${(0,r.OIN)(t)} \\\\\n`,i+="\\hline\n"}if(i+="\\end{array}\n$",s=`Le tableau suivant contient tous les couples de facteurs dont le produit vaut ${t}`,n.Do.isHtml||(s+="$\\medskip$"),s+="<br>",n.Do.isHtml?s+="$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n":s+="$\\begin{array}{|c|c|c|}\n",s+="\\hline\n",s+=`\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${t} \\\\\n`,s+="\\hline\n",e%2==0)for(let i=0;i<(0,r.coU)(t).length/2;i++)s+=(0,r.coU)(t)[i]+" & "+(0,r.coU)(t)[(0,r.coU)(t).length-i-1]+`& ${t} \\\\\n`,s+="\\hline\n";else{for(let e=0;e<((0,r.coU)(t).length-1)/2;e++)s+=(0,r.coU)(t)[e]+" & "+(0,r.coU)(t)[(0,r.coU)(t).length-e-1]+`& ${t} \\\\\n`;s+=(0,r.coU)(t)[(e-1)/2]+" & "+(0,r.coU)(t)[(e-1)/2]+`& ${t} \\\\\n`,s+="\\hline\n"}s+="\\end{array}\n$",n.Do.isHtml||(s+="$\\medskip$"),s+="<br>",s+=`${t} a donc ${e} diviseurs qui sont : `,s+="1";for(let i=1;i<(0,r.coU)(t).length;i++)s+=" ; "+(0,r.coU)(t)[i];s+=".";break;case 2:let o=[];o=[(0,r.nSR)(2,99),(0,r.nSR)(2,99,[o[0]]),(0,r.nSR)(2,99,[o[0],o[1]]),(0,r.nSR)(2,99,[o[0],o[1],o[2]])];let c=[];for(let i=101;i<999;i++)(0,r.coU)(i).length>8&&c.push(i);let l,a,h=(0,r.nSR)(0,c.length-1);if(o.push(c[h]),a=(0,r.nSR)(0,o.length-1),l=o[a],i=`Écrire la liste de tous les diviseurs de ${l}.`,s=`Pour trouver la liste des diviseurs de ${l} on cherche tous les produits de deux facteurs qui donnent ${l}. En écrivant toujours le plus petit facteur en premier.<br>`,s+=`Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${l}, par exemple ici, ${Math.trunc(Math.sqrt(l))}$\\times $${Math.trunc(Math.sqrt(l))} = ${Math.trunc(Math.sqrt(l))*Math.trunc(Math.sqrt(l))}<${l}`,s+=` et ${Math.trunc(Math.sqrt(l))+1}$\\times $${Math.trunc(Math.sqrt(l))+1} = ${(Math.trunc(Math.sqrt(l))+1)*(Math.trunc(Math.sqrt(l))+1)}>${l} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(l))}.`,s+=` En effet, si ${l} est le produit de deux entiers p$\\times $q avec p < q alors si p$\\times $p > ${l} c'est que q$\\times $q < ${l} mais dans ce cas p serait supérieur à q sinon p$\\times $q serait inférieur à ${l} ce qui ne doit pas être le cas.<br>`,(0,r.coU)(l).length%2==0)for(let i=0;i<(0,r.coU)(l).length/2;i++)s+=(0,r.coU)(l)[i]+"$\\times $"+(0,r.coU)(l)[(0,r.coU)(l).length-i-1]+` = ${l}<br>`;else{for(let t=0;t<((0,r.coU)(l).length-1)/2;t++)s+=(0,r.coU)(l)[t]+"$\\times $"+(0,r.coU)(l)[(0,r.coU)(l).length-t-1]+"<br>";s+=(0,r.coU)(l)[((0,r.coU)(l).length-1)/2]+"$\\times $"+(0,r.coU)(l)[((0,r.coU)(l).length-1)/2]+` = ${l}<br>`}s+=`Chacun des facteurs de la liste ci-dessus est un diviseur de ${l}.<br>`,s+=`La liste des diviseurs de ${l} est donc `,s+="1";for(let i=1;i<(0,r.coU)(l).length;i++)s+=" ; "+(0,r.coU)(l)[i];s+="."}-1===this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(s),o++),c++}(0,r.K1R)(this)}}},75216:(t,e,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=3340.58b3bdc59f58d06536fb.js.map