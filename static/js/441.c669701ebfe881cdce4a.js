(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[441,6969],{20441:(e,s,i)=>{"use strict";i.r(s),i.d(s,{amcReady:()=>c,amcType:()=>r,titre:()=>l,default:()=>$});var t=i(66969),o=i(55339),n=i(57239);const c=!0,r=1,l="Opérations avec les nombres décimaux";function $(){t.default.call(this),this.titre=l,this.consigne="Trouver la réponse exacte du calcul parmi les réponses proposées.",this.nbQuestions=4,this.video="",this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.qcmDisponible=!0,this.modeQcm=!1,this.nouvelleVersion=function(){this.qcm=["6C30-3",[],"Opérations avec les nombres décimaux",1],this.listeQuestions=[],this.listeCorrections=[];const e=(0,o.SRM)(["add","mul","add_deci","mul_deci"],this.nbQuestions);for(let s,i,t=0,c=0;t<this.nbQuestions&&c<50;){s="",i="";let r=0,l=0,$=[],a=[];switch(e[t]){case"add":r=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),l=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),$=[`$${(0,o.Pbm)((0,o.n0o)(r+l))}$`,`$${(0,o.Pbm)((0,o.n0o)(r*l))}$`,`$${(0,o.Pbm)((0,o.n0o)((r+l)/10))}$`,`$${(0,o.Pbm)((0,o.n0o)(10*(r+l)))}$`,`$${(0,o.Pbm)((0,o.n0o)(r+l+1))}$`],a=[1,0,0,0,0],this.qcm[1].push([`Calcul : $${r}+${l}$.\\\\ \n Réponses possibles`,$.slice(0),a.slice(0)]),s+=`Calcul : $${r} + ${l}$. <br>`,(0,o.Xsq)($,a),this.modeQcm&&!mathalea.sortieAMC?(this.tableauSolutionsDuQcm[t]=a,s+=(0,n.l)(this.numeroExercice,t,$,a).texte,i+=(0,n.l)(this.numeroExercice,t,$,a).texteCorr):i+=`$${r} + ${l}=${(0,o.Pbm)((0,o.n0o)(r+l))}$`;break;case"mul":r=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),l=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),$=[`$${(0,o.Pbm)(r*l)}$`,`$${(0,o.Pbm)(10*r*l)}$`,`$${(0,o.Pbm)(r*l/10)}$`,`$${(0,o.Pbm)(r+l)}$`,`$${(0,o.Pbm)(r*l+1)}$`],a=[1,0,0,0,0],this.qcm[1].push([`Calcul : $${r} \\times ${l}$.\\\\ \n Réponses possibles`,$.slice(0),a.slice(0)]),s+=`Calcul : $${r} \\times ${l}$. <br>`,(0,o.Xsq)($,a),this.modeQcm&&!mathalea.sortieAMC?(this.tableauSolutionsDuQcm[t]=a,s+=(0,n.l)(this.numeroExercice,t,$,a).texte,i+=(0,n.l)(this.numeroExercice,t,$,a).texteCorr):i+=`$${r} \\times ${l}=${(0,o.Pbm)((0,o.n0o)(r*l))}$`;break;case"add_deci":r=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(0,9,[3,4,5,6,7])+10*(0,o.nSR)(0,9)+(0,o.nSR)(0,9),l=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(0,9,[3,4,5,6,7])+10*(0,o.nSR)(0,9)+(0,o.nSR)(0,9),$=[`$${(0,o.Pbm)((0,o.n0o)((r+l)/100))}$`,`$${(0,o.Pbm)((0,o.n0o)(r*l/100))}$`,`$${(0,o.Pbm)((0,o.n0o)((r+l)/1e3))}$`,`$${(0,o.Pbm)((0,o.n0o)(10*(r+l)/100))}$`,`$${(0,o.Pbm)((0,o.n0o)((r+l+1)/100))}$`],a=[1,0,0,0,0],this.qcm[1].push([`Calcul : $${(0,o.Pbm)(r/100)}+${(0,o.Pbm)(l/100)}$.\\\\ \n Réponses possibles`,$.slice(0),a.slice(0)]),s+=`Calcul : $${(0,o.Pbm)(r/100)} + ${(0,o.Pbm)(l/100)}$. <br>`,(0,o.Xsq)($,a),this.modeQcm&&!mathalea.sortieAMC?(this.tableauSolutionsDuQcm[t]=a,s+=(0,n.l)(this.numeroExercice,t,$,a).texte,i+=(0,n.l)(this.numeroExercice,t,$,a).texteCorr):i+=` $${(0,o.Pbm)(r/100)} + ${(0,o.Pbm)(l/100)}=${(0,o.Pbm)((0,o.n0o)(r/100+l/100))}$. <br>`;break;case"mul_deci":r=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(1,9,[3,4,5,6,7])+10*(0,o.nSR)(1,9)+(0,o.nSR)(0,9,[2,5]),l=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(1,9,[3,4,5,6,7])+10*(0,o.nSR)(1,9)+(0,o.nSR)(0,9),$=[`$${(0,o.Pbm)((0,o.n0o)(r*l/1e4))}$`,`$${(0,o.Pbm)((0,o.n0o)(10*r*l/1e4))}$`,`$${(0,o.Pbm)((0,o.n0o)(r*l/1e5))}$`,`$${(0,o.Pbm)((0,o.n0o)((r+l)/100))}$`,`$${(0,o.Pbm)((0,o.n0o)((r*l+1)/1e4))}$`],a=[1,0,0,0,0],this.qcm[1].push([`Calcul : $${(0,o.Pbm)(r/100)} \\times ${(0,o.Pbm)(l/100)}$.\\\\ \n Réponses possibles`,$.slice(0),a.slice(0)]),s+=`Calcul : $${(0,o.Pbm)(r/100)} \\times ${(0,o.Pbm)(l/100)}$. <br>`,(0,o.Xsq)($,a),this.modeQcm&&!mathalea.sortieAMC?(this.tableauSolutionsDuQcm[t]=a,s+=(0,n.l)(this.numeroExercice,t,$,a).texte,i+=(0,n.l)(this.numeroExercice,t,$,a).texteCorr):i+=`$${(0,o.Pbm)(r/100)} \\times ${(0,o.Pbm)(l/100)}=${(0,o.Pbm)((0,o.n0o)(r*l/1e4))}$. <br>`}-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(i),t++),c++}(0,o.K1R)(this)},(0,n.r)(this)}},66969:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})},57239:(e,s,i)=>{"use strict";function t(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const s=document.querySelector(`#btnQcmEx${e.numeroExercice}`);s&&s.addEventListener("click",(i=>{for(let s=0;s<e.nbQuestions;s++){let i=0,t=0;const o=e.tableauSolutionsDuQcm[s].reduce(((e,s)=>e+s),0),n=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${s}`);e.tableauSolutionsDuQcm[s].forEach(((o,n)=>{const c=document.querySelector(`#labelEx${e.numeroExercice}Q${s}R${n}`),r=document.querySelector(`#checkEx${e.numeroExercice}Q${s}R${n}`);1===o?(c.style.backgroundColor="rgba(123, 239, 178, 0.5)",r.checked&&i++):!0===r.checked&&(c.style.backgroundColor="rgba(217, 30, 24, 0.5)",t++)})),0===t&&i===o?(n.innerHTML="✔︎",n.style.color="green"):(n.innerHTML="✖︎",n.style.color="red"),n.style.fontSize="large"}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),s.classList.add("disabled")}))}))}function o(e,s,i,t){let o="",n="",c="";if(c=sortieHtml?"&emsp;":"\\qquad",!mathalea.sortieAMC){sortieHtml?o+=`<br>  <form id="formEx${e}Q${s}">`:o+="<br>";for(let r=0;r<i.length;r++)sortieHtml?o+=`<div class="ui checkbox ex${e}">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e}Q${s}R${r}">\n            <label id="labelEx${e}Q${s}R${r}">${i[r]+c}</label>\n          </div>`:o+=`$\\square\\;$ ${i[r]}`+c,1===t[r]?n+=`$\\blacksquare\\;$ ${i[r]}`+c:n+=`$\\square\\;$ ${i[r]}`+c;sortieHtml&&(o+=`<span id="resultatCheckEx${e}Q${s}"></span></form>`)}return{texte:o,texteCorr:n}}i.d(s,{r:()=>t,l:()=>o})}}]);
//# sourceMappingURL=441.c669701ebfe881cdce4a.js.map