(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[28689,47291,71129],{28689:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>o,amcReady:()=>h,interactifReady:()=>u,amcType:()=>l,default:()=>a});var s=e(71129),n=e(63861),r=e(47291);e(62259);const o="Générateur de compte est bon",h=!0,u=!1,l=3;function a(){s.default.call(this),this.titre=o,this.amcReady=h,this.interactifReady=u,this.amcType=l,this.consigne="Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=30,this.sup2=70;let i=70;this.nouvelleVersion=function(){this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[];let t,e,s,o=[],h=parseInt(this.sup);i=parseInt(this.sup2),h>i&&(h=i,this.sup=this.sup2);for(let n,u,l=0,a=0;l<this.nbQuestions&&a<50;){this.autoCorrection[l]={},o=(0,r.default)(h,i),t=o[0],e=o[1],s=o[3],n=`Le tirage est le suivant : $${t[0]}~;~${t[1]}~;~${t[2]}~;~${t[3]}~;~${t[4]}$ <br>La cible est : $${e}$`,u=`Pour le tirage $${t[0]}~;~${t[1]}~;~${t[2]}~;~${t[3]}~;~${t[4]}$ et pour la cible $${e}$, la solution est : $${s}=${e}$ `,u+=`ou $${o[4]}$.<br>`,u+="En effet : <br>";for(let i=0;i<4;i++)u+=`$${o[2][i]}$<br>`;-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(u),this.autoCorrection[l]={enonce:n,propositions:[{texte:u,statut:4,feedback:""}]},l++),a++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Limite inférieure",i],this.besoinFormulaire2Numerique=["Limite supérieure",100]}},47291:(i,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});var s=e(63861);function n(i,t,e=1,n=4,r=8,o=3,h=5){let u,l,a,$,b,p,c,g,f,m,d,C,q,Q,F,v,k,D=[],I=[1,2,2,3,3,4,4,4,4,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,11,12,13,14,15,16,17,18,19,20];u=!1;let T=arguments.length-2;for(;0==u;){for(c=[],l=T<1?parseInt((0,s.q$q)(I)):e,a=T<2?parseInt((0,s.q$q)(I,[13,14,15,16,17,18,19,20,l])):n,$=T<3?parseInt((0,s.q$q)(I,[12,13,14,15,16,17,18,19,20,l,a])):r,b=T<4?parseInt((0,s.q$q)(I,[12,13,14,15,16,17,18,19,20,a,$])):o,p=T<5?parseInt((0,s.q$q)(I,[12,13,14,15,16,17,18,19,20])):h,c.push(l,a,$,b,p),g=(0,s.TVQ)(c),f=["\\times","+","-","\\div"],f=(0,s.TVQ)(f),m=[`${g[0]}`,`${g[1]}`,`${g[2]}`,`${g[3]}`,`${g[4]}`],d=[`${g[0]}`,`${g[1]}`,`${g[2]}`,`${g[3]}`,`${g[4]}`];g.length>1;){if(a=g.pop(),l=g.pop(),Q=m.pop(),q=m.pop(),v=d.pop(),F=d.pop(),C=f.pop(),"\\times"==C)$=l*a,m.push(`${q}${C}${Q}`),d.push(`${F}${C}${v}`),g.push($);else if("\\div"==C){if(l%a!=0)break;$=l/a,"\\"==q[0]&&(q=q.substring(6,q.length),q=q.substring(0,q.length-7)),"\\"==Q[0]&&(Q=Q.substring(6,Q.length),Q=Q.substring(0,Q.length-7)),m.push(`\\dfrac{${q}}{${Q}}`),d.push(`${F}${C}${v}`),g.push($)}else if("-"==C){if(!(l>a))break;$=l-a,m.push(`\\left(${q}${C}${Q}\\right)`),d.push(`\\left(${F}${C}${v}\\right)`),g.push($)}else"+"==C&&($=l+a,"\\l"==Q.substring(0,2)&&(Q=Q.substring(6,Q.length),Q=Q.substring(0,Q.length-7)),m.push(`\\left(${q}${C}${Q}\\right)`),"\\l"==v.substring(0,2)&&(v=v.substring(6,v.length),v=v.substring(0,v.length-7)),d.push(`\\left(${F}${C}${v}\\right)`),g.push($));D.push(`${l}`+C+`${a}=${$}`)}if(1==g.length&&0==f.length){if(k=g[0],k>=i&&k<=t)return u=!0,"\\"==m[0][0]&&"l"==m[0][1]&&(m[0]=m[0].substring(6,m[0].length),m[0]=m[0].substring(0,m[0].length-7)),"\\"==d[0][0]&&"l"==d[0][1]&&(d[0]=d[0].substring(6,d[0].length),d[0]=d[0].substring(0,d[0].length-7)),[c,k,D,m,d];D=[]}else D=[]}}},71129:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=28689.a48af36795aaccad8b78.js.map