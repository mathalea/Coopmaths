(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1923,6969],{1923:(e,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>n,amcReady:()=>c,amcType:()=>$,default:()=>r});var i=s(66969),a=s(55339),o=s(57239);const n="Égalités entre fractions simples",c=!0,$=1;function r(){i.default.call(this),this.sup=11,this.sup2=2,this.titre=n,this.consigne="Compléter les égalités.",this.spacing=2,this.spacingCorr=2,this.qcmDisponible=!0,this.modeQcm=!1,this.nouvelleVersion=function(){let e,t;this.sup=parseInt(this.sup),this.sup2=parseInt(this.sup2),this.qcm=["6N41",[],"Egalités de fractions",1],this.listeQuestions=[],this.listeCorrections=[];const s=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]],i=(0,a.SRM)([1,1,1,1,2],this.nbQuestions);for(let n,c,$,r,l,h,m,u,f,p=0;p<this.nbQuestions;p++){if(1===i[p])switch(n=(0,a.q$q)(s),c=n[0],$=n[1],h=this.modeQcm?(0,a.nSR)(3,Math.max(this.sup,4)):(0,a.nSR)(2,Math.max(3,this.sup)),r=h*c,l=h*$,(0,a.XzT)(s,n),m=3===this.sup2?p%2:this.sup2%2,m){case 0:u=`$${(0,a.qaf)(c,$)} = ${(0,a.qaf)("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${(0,a.qaf)("\\phantom{0000}",l)}$`,this.modeQcm&&(u=`$${(0,a.qaf)(c,$)} = \\ldots$`),f=`$${(0,a.qaf)(c,$)} = ${(0,a.qaf)(c+(0,a.b1)("\\times"+h),$+(0,a.b1)("\\times"+h))} = ${(0,a.qaf)(r,l)}$`,e=[`$${(0,a.qaf)(r,l)}$`,`$${(0,a.qaf)(c,l)}$`,`$${(0,a.qaf)((h-1)*c,l)}$`,`$${(0,a.qaf)((h+1)*c,l)}$`,`$${(0,a.qaf)(Math.abs(l-c),l)}$`],t=[1,0,0,0,0],[e,t]=(0,o.Ay)(e,t),this.qcm[1].push([`Complète l'égalité de fractions $${u}$.\\\\ \n `,e,t]),(0,a.Xsq)(e,t),this.modeQcm&&!mathalea.sortieAMC&&(u=u.replace(`$${(0,a.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,""),this.tableauSolutionsDuQcm[p]=t,u+="<br>"+(0,o.l3)(this.numeroExercice,p,e,t).texte);break;case 1:u=`$${(0,a.qaf)(c,$)} = ${(0,a.qaf)("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${(0,a.qaf)(r,"\\phantom{0000}")}$`,this.modeQcm&&(u=`$${(0,a.qaf)(c,$)} = \\ldots$`),f=`$${(0,a.qaf)(c,$)} = ${(0,a.qaf)(c+(0,a.b1)("\\times"+h),$+(0,a.b1)("\\times"+h))} = ${(0,a.qaf)(r,l)}$`,e=[`$${(0,a.qaf)(r,l)}$`,`$${(0,a.qaf)(r,$)}$`,`$\\dfrac{${r}}{${(h-1)*$}}$`,`$${(0,a.qaf)(r,(h+1)*$)}$`,`$\\dfrac{${r}}{${Math.abs(r-$)}}$`],t=[1,0,0,0,0],[e,t]=(0,o.Ay)(e,t),this.qcm[1].push([`Complète l'égalité de fractions $${u}$.\\\\ \n `,e,t]),(0,a.Xsq)(e,t),this.modeQcm&&!mathalea.sortieAMC&&(u=u.replace(`$${(0,a.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,""),this.tableauSolutionsDuQcm[p]=t,u+="<br><br>"+(0,o.l3)(this.numeroExercice,p,e,t).texte)}else switch(c=(0,a.nSR)(1,9),l=this.modeQcm&&!mathalea.sortieAMC?(0,a.nSR)(3,9,[c,2*c]):(0,a.nSR)(2,9),r=c*l,m=3===this.sup2?p%2:this.sup2%2,m){case 0:u=`$${c} = ${(0,a.qaf)("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${(0,a.qaf)("\\phantom{0000}",l)}$`,this.modeQcm&&(u=`$${c} = \\ldots$`),f=`$${c} = \\dfrac{${c}}{1} =${(0,a.qaf)(c+(0,a.b1)("\\times"+l),"1"+(0,a.b1)("\\times"+l))} = ${(0,a.qaf)(r,l)}$`,e=[`$${(0,a.qaf)(r,l)}$`,`$${(0,a.qaf)(c,l)}$`,`$${(0,a.qaf)(l+c,l)}$`,`$${(0,a.qaf)(Math.abs(l-c),l)}$`,`$${(0,a.qaf)((c+1)*l,l)}$`],t=[1,0,0,0,0],[e,t]=(0,o.Ay)(e,t),this.qcm[1].push([`Complète l'égalité de fractions $${u}$.\\\\ \n `,e,t]),(0,a.Xsq)(e,t),this.modeQcm&&!mathalea.sortieAMC&&(u=u.replace(`$${(0,a.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,""),this.tableauSolutionsDuQcm[p]=t,u+="<br><br>"+(0,o.l3)(this.numeroExercice,p,e,t).texte);break;case 1:u=`$${c} = ${(0,a.qaf)("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${(0,a.qaf)(r,"\\phantom{0000}")}$`,this.modeQcm&&(u=`$${c} = \\ldots$`),f=`$${c} = \\dfrac{${c}}{1} =${(0,a.qaf)(c+(0,a.b1)("\\times"+l),"1"+(0,a.b1)("\\times"+l))} = ${(0,a.qaf)(r,l)}$`,e=[`$${(0,a.qaf)(r,l)}$`,`$${(0,a.qaf)(r,r-c)}$`,`$${(0,a.qaf)(r,c)}$`,`$${(0,a.qaf)(r,r+c)}$`,`$${(0,a.qaf)(r,r*c)}$`],t=[1,0,0,0,0],[e,t]=(0,o.Ay)(e,t),this.qcm[1].push([`Complète l'égalité de fractions $${u}$.\\\\ \n `,e,t]),(0,a.Xsq)(e,t),this.modeQcm&&!mathalea.sortieAMC&&(u=u.replace(`$${(0,a.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,""),this.tableauSolutionsDuQcm[p]=t,u+="<br><br>"+(0,o.l3)(this.numeroExercice,p,e,t).texte)}this.listeQuestions.push(u),this.listeCorrections.push(f)}(0,a.K1R)(this),(0,o.r1)(this)},this.besoinFormulaireNumerique=["Valeur maximale du facteur commun",99],this.besoinFormulaire2Numerique=["Type de question",3,"1 : Numérateur imposé\n2 : Dénominateur imposé\n3 : Alternance"]}},66969:(e,t,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>i})},57239:(e,t,s)=>{"use strict";function i(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(s=>{for(let t=0;t<e.nbQuestions;t++){let s=0,i=0;const a=e.tableauSolutionsDuQcm[t].reduce(((e,t)=>e+t),0),o=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`);e.tableauSolutionsDuQcm[t].forEach(((a,o)=>{const n=document.querySelector(`#labelEx${e.numeroExercice}Q${t}R${o}`),c=document.querySelector(`#checkEx${e.numeroExercice}Q${t}R${o}`);1===a?(n.style.backgroundColor="rgba(123, 239, 178, 0.5)",c.checked&&s++):!0===c.checked&&(n.style.backgroundColor="rgba(217, 30, 24, 0.5)",i++)})),0===i&&s===a?(o.innerHTML="✔︎",o.style.color="green"):(o.innerHTML="✖︎",o.style.color="red"),o.style.fontSize="large"}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),t.classList.add("disabled")}))}))}function a(e,t,s,i){let a="",o="",n="";if(n=sortieHtml?"&emsp;":"\\qquad",!mathalea.sortieAMC){sortieHtml?a+=`<br>  <form id="formEx${e}Q${t}">`:a+="<br>";for(let c=0;c<s.length;c++)sortieHtml?a+=`<div class="ui checkbox ex${e} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e}Q${t}R${c}">\n            <label id="labelEx${e}Q${t}R${c}">${s[c]+n}</label>\n          </div>`:a+=`$\\square\\;$ ${s[c]}`+n,1===i[c]?o+=`$\\blacksquare\\;$ ${s[c]}`+n:o+=`$\\square\\;$ ${s[c]}`+n;sortieHtml&&(a+=`<span id="resultatCheckEx${e}Q${t}"></span></form>`)}return{texte:a,texteCorr:o}}function o(e,t){const s=e.slice(),i=t.slice();for(let a=0;a<s.length-1;a++)for(let e=a+1;e<s.length;)s[a]===s[e]?(console.log("doublon trouvé",s[a],s[e]),1===i[a]?(s.splice(e,1),i.splice(e,1)):1===i[e]?(s.splice(e,1),i.splice(e,1),i[a]=1):(s.splice(e,1),i.splice(e,1))):e++;return[s,i]}s.d(t,{r1:()=>i,l3:()=>a,Ay:()=>o})}}]);
//# sourceMappingURL=1923.50a514a435d396a60fa3.js.map