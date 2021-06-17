(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7475,5216],{97475:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>o,default:()=>a});var s=t(75216),r=t(89459),n=t(55339);const o="Primalité ou pas - Variante avec les critères de divisibilité par 7 et par 11";function a(){s.default.call(this),this.titre=o,this.consigne="Justifier que les nombres suivants sont premiers ou pas. Penser aux critères de divisibilité.",r.Do.isHtml?this.spacing=3:this.spacing=2,r.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=7,this.nbCols=2,this.nbColsCorr=1,this.listePackages="bclogo",this.nouvelleVersion=function(e){let i;r.Do.isHtml&&(this.boutonAide=(0,n.apm)(e,"assets/pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire"),this.boutonAide+=(0,n.MJ0)("conteMathsNombresPremiers","/videos/LesNombresPremiers.mp4","Petit conte mathématique - Les Nombres Premiers","Intro Vidéo")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let t=[1,2,3,4,5,6,7];t=(0,n.TVQ)(t);let s=(0,n.bqK)(t,this.nbQuestions),o="Ces critères de divisibilité pourront être utiles :";r.Do.isHtml?(o+="<br>",o+="- Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.<br>",o+="- Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11.",o+="<br> <br>"):(o+=(0,n.NpW)(["Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.","Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11."]),o+="\\par\\vspace{0.5cm}"),o+="Ainsi que cette liste des nombres premiers inférieurs à 100 : ",r.Do.isHtml?o+="<br>":o+="\\par\\vspace{0.25cm}",o+=(0,n.hmQ)(100)[0];for(let r=1;r<(0,n.hmQ)(100).length;r++)o+=", "+(0,n.hmQ)(100)[r];o+=".",this.introduction=(0,n.KUN)(o,"nombres","Coup de pouce");for(let r,l,m=0,h=0;m<this.nbQuestions&&h<50;){var a;switch(i=s[m],i){case 1:a=2*(0,n.nSR)(51,4999),r=(0,n.x9Z)(a),l=`Comme ${(0,n.x9Z)(a)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(a)+" n'est donc pas premier.");break;case 2:let e=0;for(a=3*(0,n.nSR)(34,3333);a%2==0||a%5==0;)a=3*(0,n.nSR)(34,3333);r=(0,n.x9Z)(a),l="Comme "+a.toString().charAt(0),e=Number(a.toString().charAt(0));for(let r=1;r<a.toString().length;r++)l+=" + "+a.toString().charAt(r),e+=Number(a.toString().charAt(r));l+=` = ${e} est un multiple de 3 donc ${(0,n.x9Z)(a)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(a)+" n'est donc pas premier.");break;case 3:a=5*(0,n.nSR)(20,1999),r=(0,n.x9Z)(a),l=`Comme le dernier chiffre de ${(0,n.x9Z)(a)} est un ${a.toString().charAt(a.toString().length-1)} alors ${(0,n.x9Z)(a)} est divisible par 5, `,l+="il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même, ",l+=(0,n.PH8)((0,n.x9Z)(a)+" n'est donc pas premier.");break;case 4:let i,t,s,o;for(a=7*(0,n.nSR)(15,1428),r=(0,n.x9Z)(a),i=a.toString().length,l=` 7 divise ${(0,n.x9Z)(a)}, en effet : `,l+="<br>",t=a,s=i,o=Number(t.toString().substring(0,s-1))+5*Number(t.toString().charAt(s-1));o>=56;)l+=`${t.toString().substring(0,s-1)} + 5$\\times$${t.toString().charAt(s-1)}`,l+=` = ${Number(t.toString().substring(0,s-1))+5*Number(t.toString().charAt(s-1))}`,l+="<br>",t=o,s=t.toString().length,o=Number(t.toString().substring(0,s-1))+5*Number(t.toString().charAt(s-1));l+=`Comme ${t.toString().substring(0,s-1)} + 5$\\times$${t.toString().charAt(s-1)} = ${o} est un multiple de 7 alors 7 divise ${a} aussi `,l+="qui admet donc au moins trois diviseurs : 1, 7 et lui-même, ",l+=(0,n.PH8)((0,n.x9Z)(a)+" n'est donc pas premier.");break;case 5:let m,h;if(a=11*(0,n.nSR)(10,909),r=(0,n.x9Z)(a),l=`D'une part, la somme des chiffres de rang impair de ${(0,n.x9Z)(a)} vaut `,Number(a.toString().length)%2==0){m=Number(a.toString().charAt(1)),l+=a.toString().charAt(1);for(let e=3;e<a.toString().length;e++)e%2==1&&(l+=" + "+a.toString().charAt(e),m+=Number(a.toString().charAt(e)));l+=" = "+m+" <br> "}else{m=Number(a.toString().charAt(0)),l+=a.toString().charAt(0);for(let e=1;e<a.toString().length;e++)e%2==0&&(l+=" + "+a.toString().charAt(e),m+=Number(a.toString().charAt(e)));l+=" = "+m+"<br> "}if(l+=`d'autre part, la somme des chiffres de rang pair de ${(0,n.x9Z)(a)} vaut `,Number(a.toString().length)%2==0){h=Number(a.toString().charAt(0)),l+=a.toString().charAt(0);for(let e=1;e<a.toString().length;e++)e%2==0&&(l+=" + "+a.toString().charAt(e),h+=Number(a.toString().charAt(e)));l+=" = "+h+" <br> "}else{h=Number(a.toString().charAt(1)),l+=a.toString().charAt(1);for(let e=3;e<a.toString().length;e++)e%2==1&&(l+=" + "+a.toString().charAt(e),h+=Number(a.toString().charAt(e)));l+=" = "+h+"<br> "}l+="la différence entre la somme des chiffres de rangs pairs et celle des chiffres de rangs impairs vaut ",l+=h-m==0?h-m+", ":`${Math.abs(h-m)} qui est un multiple de 11, `,l+="<br>",l+=` cela signifie que ${(0,n.x9Z)(a)} est divisible par 11, il admet donc au moins trois diviseurs qui sont 1, 11 et lui-même, `,l+=(0,n.PH8)((0,n.x9Z)(a)+" n'est donc pas premier.");break;case 6:let u=(0,n.nSR)(0,(0,n.hmQ)(100).length-1),c=(0,n.nSR)(0,(0,n.hmQ)(100).length-1),d=(0,n.hmQ)(100)[u],b=(0,n.hmQ)(100)[c];r=a=d+"$\\times$"+b,l=`${a} est le produit de ${d} et de ${b}, il admet donc au moins `,l+=d==b?`trois divisieurs qui sont 1, ${d} et lui-même ${a}=${(0,n.x9Z)(d*b)}, `:`quatre diviseurs qui sont 1, ${d}, ${b} et lui-même ${a}=${(0,n.x9Z)(d*b)}, `,l+=(0,n.PH8)(`${a} = `+(0,n.x9Z)(d*b)+" n'est donc pas premier.");break;case 7:let g=(0,n.nSR)(0,(0,n.hmQ)(529).length-1);r=(a=(0,n.hmQ)(529)[g])+"";let p=(0,n.hmQ)(Math.trunc(Math.sqrt(a)));l=`Testons la divisibilité de ${a} par tous les nombres premiers inférieurs à $\\sqrt{${a}}$, c'est à dire par les nombres `,l+=p[0];for(let r=1;r<p.length;r++)l+=", "+p[r];l+=".",l+=`<br> Aucun de ces nombres premiers ne divise ${a}, `,l+=(0,n.PH8)((0,n.x9Z)(Number(a))+" n'est donc pas premier.")}-1===this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(l),m++),h++}(0,n.K1R)(this)}}},75216:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=7475.77f9217b0c422044d941.js.map