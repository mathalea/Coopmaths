"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1032],{1032:(n,e,s)=>{s.r(e),s.d(e,{titre:()=>l,dateDePublication:()=>h,default:()=>c});var t=s(25523),i=s(22380),r=s(25482),a=s(53325);const l="Multiplications dans d'autres bases",h="2/11/2021";function c(){t.default.call(this),this.video="pkp9e8XDH3M",this.consigne="Poser et effectuer les calculs suivants :",this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.pasDeVersionLatex=!0,this.spacingCorr=i.Do.isHtml?2:1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const n=void 0===this.sup||this.sup<3||this.sup>9?(0,r.nSR)(3,5):this.sup;[3,4,5].includes(n)&&(this.listeQuestions[0]=`Écrire la table de Pythagore en base ${n}.`,this.listeCorrections[0]=_(n));for(let e,s,t,i,l,h,c=[3,4,5].includes(n)?1:0,_=0;c<this.nbQuestions&&_<50;){const o=3===n?(0,r.nSR)(0,2):(0,r.nSR)(2,n-1);h=10*(3===n?(0,r.nSR)(1,2):(0,r.nSR)(2,n-1,o))+o,i=(0,r.UVc)(h,n);const u=(0,r.nSR)(1,n-1),$=(0,r.nSR)(2,n-1);l=100*(0,r.nSR)(2,n-1)+10*$+u,i=(0,r.UVc)(h,n),t=(0,r.UVc)(l,n),l=l.toString(),h=h.toString(),e=`$(${l})_{${n}} \\times (${h})_{${n}}$`,parseInt(l)<parseInt(h)&&([l,h]=[h,l]),s=`En base ${n} :<br>`+(0,a.Z)({operande1:t,operande2:i,type:"multiplication",base:n})+"<br>";for(let e=h.length-1;e>-1;e--){const t=[];s+=`Calcul de $${h[e]}\\times${l} :$ <br>`;for(let i=0;i<l.length;i++){const a=h[e],c=l[l.length-1-i];let _=(0,r.Gar)(a*c,n);t[i-1]?(_=(0,r.Gar)(parseInt(a)*parseInt(c)+parseInt(t[i-1]),n),s+=`$\\qquad ${a} \\times ${c} + ${t[i-1]} = ${parseInt(a)*parseInt(c)+parseInt(t[i-1])} = (${_})_{${n}}  $`):s+=`$\\qquad ${a} \\times ${c} = ${a*c} = (${_})_{${n}}  $`,a*c>=n?(s+=`$\\quad$ On écrit ${_[_.length-1]} et on retient ${_.slice(0,-1)}.<br>`,t[i]=_.slice(0,-1).toString()):s+="<br>"}}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(s),c++),_++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Choix de la base",9,"3 à 9 (au hasard si laissé vide)"]}const _=n=>{switch(n){case 3:return"$\\begin{array}{|c|c|c|}\n      \\hline\n      \\times & (1)_3 & (2)_3 \\\\\n      \\hline\n      (1)_3 & (1)_3 & (2)_3 \\\\\n      \\hline\n      (2)_3 & (2)_3 & (11)_3  \\\\\n      \\hline\n   \\end{array}$";case 4:return"$\\begin{array}{|c|c|c|c|}\n    \\hline\n    \\times & (1)_4 & (2)_4 & (3)_4 \\\\\n    \\hline\n    (1)_4 & (1)_4 & (2)_4 & (3)_4  \\\\\n    \\hline\n    (2)_4 & (2)_4 & (10)_4 & (12)_4 \\\\\n    \\hline\n    (3)_4 & (3)_4 & (12)_4 & (21)_4 \\\\\n    \\hline\n \\end{array}$";case 5:return"$\\begin{array}{|c|c|c|c|c|}\n    \\hline\n    \\times & (1)_5 & (2)_5 & (3)_5 & (4)_5 \\\\\n    \\hline\n    (1)_5 & (1)_5 & (2)_5 & (3)_5 & (4)_5  \\\\\n    \\hline\n    (2)_5 & (2)_5 & (4)_5 & (11)_5 & (13)_5 \\\\\n    \\hline\n    (3)_5 & (3)_5 & (11)_5 & (14)_5 & (22)_5 \\\\\n    \\hline\n    (4)_5 & (4)_5 & (13)_5 & (22)_5 & (31)_5 \\\\\n    \\hline\n \\end{array}$";default:return""}}}}]);
//# sourceMappingURL=1032.19504ed3dd755b2f60c4.js.map