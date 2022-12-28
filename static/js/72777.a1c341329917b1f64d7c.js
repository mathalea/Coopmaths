"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[72777,25523],{72777:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>n,default:()=>o});var r=i(25523),s=i(25482);const n="Calculer des fréquences";function o(){r.default.call(this),this.titre=n,this.consigne="",this.nbQuestions=1,this.spacing=1,this.spacingCorr=1.5,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup=parseInt(this.sup);for(let e,t,i,r,n,o,a,l,h,u,$,c,b=0,d=0;b<this.nbQuestions&&d<50;){if(1===this.sup){n=(0,s.nSR)(1,2),o=(0,s.q$q)([4,6,8,10]),a=(0,s.q$q)([50,100,200,500,1e3]),u=(0,s.Wp7)(a,o,n);do{l=(0,s.nSR)(0,u.length-1)}while(0===u[l][1]);if($=n>1?`On a réalisé $${a}$ lancers de $${n}$ dés à $${o}$ faces.<br>`:`On a réalisé $${a}$ lancers d'un dé à $${o}$ faces.<br>`,$+="Les résultats sont inscrits dans le tableau ci-dessous :<br><br>",u.length>12){$+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=Math.round(u.length/2);e++)$+="|c";$+="}\\hline  \\text{Scores}";for(let e=0;e<Math.round(u.length/2);e++)$+="&"+u[e][0];$+="\\\\\\hline \\text{Nombre d'apparitions}";for(let e=0;e<Math.round(u.length/2);e++)$+="&"+u[e][1];$+="\\\\\\hline\\end{array}$<br><br>",$+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=Math.round(u.length/2);e<=u.length;e++)$+="|c";$+="}\\hline  \\text{Scores}";for(let e=Math.round(u.length/2);e<u.length;e++)$+="&"+u[e][0];$+="\\\\\\hline \\text{Nombre d'apparitions}";for(let e=Math.round(u.length/2);e<u.length;e++)$+="&"+u[e][1];$+="\\\\\\hline\\end{array}$"}else{$+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=u.length;e++)$+="|c";$+="}\\hline  \\text{Scores}";for(let e=0;e<u.length;e++)$+="&"+u[e][0];$+="\\\\\\hline \\text{Nombre d'apparitions}";for(let e=0;e<u.length;e++)$+="&"+u[e][1];$+="\\\\\\hline\\end{array}$"}$+=`<br><br> Calculer la fréquence de la valeur $${(0,s.n0o)(n+l)}$.`,c=`La valeur $${(0,s.n0o)(n+l)}$ apparaît $${u[l][1]}$ fois.<br>Le nombre total de lancers est $${(0,s.euh)(a)}$.<br>`,c+=`La fréquence de la valeur $${(0,s.n0o)(n+l)}$ est $${(0,s.qaf)(u[l][1],(0,s.euh)(a))}=${(0,s.euh)((0,s.n0o)(u[l][1]/a))}$<br>`,c+=`Soit $${(0,s.euh)((0,s.n0o)(100*u[l][1]/a))}\\thickspace\\%$.`}else if(2===this.sup){i=(0,s.q$q)([8,10,12]),r=(0,s.dZs)(i,(0,s.nSR)(0,7),(0,s.nSR)(13,20)),l=(0,s.nSR)(0,r.length-1),h=0;for(let e=0;e<r.length;e++)r[e]===r[l]&&h++;$=`${(0,s.rV2)()} a obtenu ces notes ce trimestre-ci en mathématiques :<br>`,$+=`$${r[0]}$`;for(let e=1;e<i-1;e++)$+=`; $${r[e]}$ `;$+=`et $${r[i-1]}$.`,$+=`<br><br>Calculer la fréquence de la note $${r[l]}$.`,c=`La note $${r[l]}$ a été obtenue $${h}$ fois.<br> Il y a $${i}$ notes<br>`,c+=`Donc la fréquence de la note $${r[l]}$ est : $${(0,s.qaf)((0,s.euh)(h),(0,s.euh)(i))}$`,(0,s.vbX)(h/i,3)===h/i?(c+=`$=${(0,s.S1u)(h/i,3)}$<br>`,c+=`Soit $${(0,s.euh)((0,s.n0o)(100*h/i))}\\thickspace\\%$.`):(c+=`$\\approx${(0,s.S1u)(h/i,3)}$`,c+=`Soit environ $${(0,s.S1u)((0,s.n0o)(100*h/i),1)}\\thickspace\\%$.`)}else{const i=(0,s.nSR)(1,12),r=(0,s.nSR)(1980,2019),n=[3,5,9,13,19,24,26,25,23,18,10,5];t=(0,s.kK7)(i),e=(0,s.paI)(n[i-1],i,r),l=(0,s.nSR)(0,e.length-1),h=0;for(let t=0;t<e.length;t++)e[t]===e[l]&&h++;$=`En ${(0,s.JSW)(i)} ${r}, à ${(0,s.q$q)(["Moscou","Berlin","Paris","Bruxelles","Rome","Belgrade"])}, on a relevé les températures suivantes<br>`,$+="$\\def\\arraystretch{1.5}\\begin{array}{|c",$+="|c";for(let t=0;t<Math.round(e.length/2);t++)$+="|c";$+="}\\hline  \\text{Jour}";for(let t=0;t<Math.round(e.length/2);t++)$+="&"+(0,s.euh)(t+1);$+="\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}";for(let t=0;t<Math.round(e.length/2);t++)$+="&"+e[t];$+="\\\\\\hline\\end{array}$<br><br>",$+="$\\def\\arraystretch{1.5}\\begin{array}{|c",$+="|c";for(let t=Math.round(e.length/2);t<e.length;t++)$+="|c";$+="}\\hline  \\text{Jour}";for(let t=Math.round(e.length/2);t<e.length;t++)$+="&"+(0,s.euh)(t+1);$+="\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}";for(let t=Math.round(e.length/2);t<e.length;t++)$+="&"+e[t];$+="\\\\\\hline\\end{array}$",$+=`<br><br>Calculer la fréquence de la température $${e[l]}^\\circ\\text{C}$.`,c=`En ${(0,s.JSW)(i)} ${r}, à ${(0,s.q$q)(["Moscou","Berlin","Paris","Bruxelles","Rome","Belgrade"])}, la température $${e[l]}^\\circ\\text{C}$ a été relevée $${h}$ fois.<br>`,c+=`Il y a $${(0,s.kK7)(i)}$ jours ce mois-ci.<br> La fréquence de la température $${e[l]}^\\circ\\text{C}$ est :<br>`,c+=`$${(0,s.qaf)((0,s.euh)(h),(0,s.euh)((0,s.kK7)(i)))}$`,(0,s.vbX)(h/t,3)===h/t?(c+=`$=${(0,s.S1u)(h/t,3)}$<br>`,c+=`Soit $${(0,s.euh)((0,s.n0o)(100*h/t))}\\thickspace\\%$.`):(c+=`$\\approx${(0,s.S1u)(h/t,3)}$<br>`,c+=`Soit environ $${(0,s.S1u)((0,s.n0o)(100*h/t),1)}\\thickspace\\%$.`)}-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(c),b++),d++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Type de séries",3,"1 : Lancers de dés \n2 : Liste de notes\n3 : Un mois de températures"]}},25523:(e,t,i)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const r of t)void 0!==r&&(i+=r.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>r})}}]);
//# sourceMappingURL=72777.a1c341329917b1f64d7c.js.map