(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[49796,71129],{49796:(i,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>r,default:()=>a});var e=s(71129),n=s(62259),o=s(63861);const r="Comparer quatre fractions (dénominateurs multiples) et un nombre entier";function a(){e.default.call(this),this.titre=r,this.consigne="Ranger les nombres suivants dans l'ordre croissant.",this.spacing=2,n.Do.isHtml?this.spacingCorr=4:this.spacingCorr=2.5,this.nbQuestions=2,this.nbColsCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];for(let i,t,s,e,n,r,a,h,l,u,$=0,c="",b="";$<this.nbQuestions;$++){const $=[[12,2,3,4,6],[16,2,4,8],[18,2,3,6,9],[20,2,4,5,10],[24,2,3,4,8,12],[30,2,3,5,6]];for(i=(0,o.q$q)($),s=i[0],(0,o.XzT)(i,s),n=(0,o.q$q)(i),(0,o.XzT)(i,n),a=(0,o.q$q)(i),l=(0,o.q$q)(i),u=(0,o.nSR)(1,3),t=(0,o.nSR)(1,10),e=(0,o.nSR)(1,10),r=(0,o.nSR)(1,10),h=(0,o.q$q)([l+(0,o.nSR)(1,3),2*l+(0,o.nSR)(1,2)],(0,o.nSR)(1,10));(t/s-e/n)*(t/s-r/a)*(t/s-h/l)*(e/n-r/a)*(e/a-h/l)*(r/a-h/l)<.1||t%s==0||e%n==0||r%a==0||h%l==0;)t=(0,o.nSR)(1,11),e=(0,o.nSR)(1,11),r=(0,o.nSR)(1,11),h=(0,o.nSR)(1,11);const q=[[t,s,`$${(0,o.qaf)(t,s)}$`,`$${(0,o.qaf)(t,s)}$`]];q.push([e,n,`$${(0,o.qaf)(e,n)}=${(0,o.qaf)(e+(0,o.b1)("\\times "+(0,o.n0o)(s/n)),n+(0,o.b1)("\\times "+(0,o.n0o)(s/n)))}=${(0,o.qaf)((0,o.n0o)(e*s/n),s)}$`,`$${(0,o.qaf)((0,o.n0o)(e*s/n),s)}$`]),q.push([r,a,`$${(0,o.qaf)(r,a)}=${(0,o.qaf)(r+(0,o.b1)("\\times "+(0,o.n0o)(s/a)),a+(0,o.b1)("\\times "+(0,o.n0o)(s/a)))}=${(0,o.qaf)((0,o.n0o)(r*s/a),s)}$`,`$${(0,o.qaf)((0,o.n0o)(r*s/a),s)}$`]),q.push([h,l,`$${(0,o.qaf)(h,l)}=${(0,o.qaf)(h+(0,o.b1)("\\times "+(0,o.n0o)(s/l)),l+(0,o.b1)("\\times "+(0,o.n0o)(s/l)))}=${(0,o.qaf)((0,o.n0o)(h*s/l),s)}$`,`$${(0,o.qaf)((0,o.n0o)(h*s/l),s)}$`]),q.push([u,1,`$${u}=${(0,o.qaf)(s*u,s)}$`,`$${(0,o.qaf)(u*s,s)}$`]),q.sort(o.Zoz);const f=(0,o.TVQ)(q);c="";for(let i=0;i<f.length;i++)1===f[i][1]?c+=`$${f[i][0]}\\quad\\text{;}\\quad$`:c+=`$${(0,o.qaf)(f[i][0],f[i][1])}\\quad\\text{;}\\quad$`;c=c.substring(0,c.length-19)+"$",q.sort(o.Zoz),b="";for(let i=0;i<f.length;i++)b+=f[i][2],b+="<br>";for(let i=0;i<q.length;i++)b+=q[i][3],i<q.length-1&&(b+="$\\quad<\\quad$");b+="<br>";let m="";for(let i=0;i<q.length;i++)1===q[i][1]?m+=`$${q[i][0]}\\quad<\\quad$`:m+=`$${(0,o.qaf)(q[i][0],q[i][1])}\\quad<\\quad$`;b+="Finalement : $\\quad$ "+m.substring(0,m.length-12)+"$",c=c.replaceAll("$$"," "),b=c.replaceAll("$$"," "),this.listeQuestions.push(c),this.listeCorrections.push(b)}(0,o.K1R)(this)}}},71129:(i,t,s)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=49796.3560eb1eecbe4703ccf0.js.map