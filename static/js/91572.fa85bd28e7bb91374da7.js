"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[91572,25523],{91572:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>c,amcReady:()=>f,amcType:()=>h,interactifReady:()=>u,interactifType:()=>l,default:()=>$});var e=s(25523),n=s(25482),o=s(41154),r=s(11945),a=s(22380);const c="Multiplier des fractions",f=!0,h="AMCNum",u=!0,l="mathLive";function $(){e.default.call(this),this.sup=1,this.consigne="Calculer et donner le résultat sous forme irréductible.",a.Do.isAmc&&(this.titre="Multiplier des fractions et donner le résultat sous forme irréductible"),this.spacing=2,this.spacingCorr=2,this.nbQuestions=5,this.nbColsCorr=1,this.sup2=!1,this.nouvelleVersion=function(){let i;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const t=(0,n.SDC)();let s;i=1===this.sup?[1,2,2,2]:2===this.sup?[2,2,3,3]:[3];const e=(0,n.SRM)(i,this.nbQuestions);for(let c,f,h,u,l,$,m,q,b,p,d,g,C,M,A,P,F,R,S,k=0,W=0;k<this.nbQuestions&&W<50;){S=e[k];do{c=(0,n.q$q)(t),f=(0,n.q$q)(t),h=c[0],u=c[1],l=f[0],$=f[1]}while(h*l%(u*$)==0||h*l%$==0||u*$==100);if(!1===this.sup2)switch(S){case 1:1===h&&(h=(0,n.nSR)(2,9)),h===l&&(h+=1),P=`$${(0,n.qaf)(h,1)}\\times${(0,n.qaf)(l,$)}=$`,F=`$${(0,n.qaf)(h,1)}\\times${(0,n.qaf)(l,$)}`,F+=`=\\dfrac{${h}}{1}\\times${(0,n.qaf)(l,$)}`,F+=`=${(0,n.qaf)(h+"\\times"+l,"1\\times"+$)}`,F+=`=${(0,n.qaf)(h*l,$)}`,1!==(0,n.Md9)(h*l,$)?F+=`=${(0,n.xau)(h*l,$)}$`:F+="$",R=(0,o.Pj)(h*l,$).simplifie();break;case 2:m=(0,n.Md9)(h*l,u*$),P=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}=$`,F=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}`,F+=`=${(0,n.qaf)(h+"\\times"+l,u+"\\times"+$)}`,F+=`=${(0,n.qaf)(h*l,u*$)}`,1!==m?(F+=`=${(0,n.qaf)(h*l/m+"\\times\\cancel{"+m+"}",u*$/m+"\\times\\cancel{"+m+"}")}`,F+=`=${(0,n.qaf)(h*l/m,u*$/m)}$`):F+="$",R=(0,o.Pj)(h*l,u*$).simplifie();break;case 3:h*=(0,n.nSR)(-1,1,[0]),u*=(0,n.nSR)(-1,1,[0]),l*=(0,n.nSR)(-1,1,[0]),$*=(0,n.nSR)(-1,1,[0]),s=(h<0)+(u<0)+(l<0)+($<0),g=1===Math.pow(-1,s)?"":"-",P=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}$`,F=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}`,q=(0,n.WnP)(h),b=(0,n.WnP)(u),p=(0,n.WnP)(l),d=(0,n.WnP)($),m=(0,n.Md9)(q*p,b*d),F+=`=${g}${(0,n.qaf)(q,b)}\\times${(0,n.qaf)(p,d)}`,F+=`=${g}${(0,n.qaf)(q+"\\times"+p,b+"\\times"+d)}`,1===m?F+=`=${g}${(0,n.qaf)(q*p,b*d)}$`:(F+=`=${g}${(0,n.qaf)(q*p,b*d)}`,q*p!=b*d?(F+=`=${g}${(0,n.qaf)(q*p/m+"\\times\\cancel{"+m+"}",b*d/m+"\\times\\cancel{"+m+"}")}`,F+=`=${g}${(0,n.qaf)(q*p/m,b*d/m)}$`):F+=`=${g}1$`),R=(0,o.Pj)(h*l,u*$).simplifie()}else{h===l&&h++,q=(0,n.I5Z)()[(0,n.nSR)(1,5)],b=(0,n.I5Z)()[(0,n.nSR)(1,5,[q])],h*=q,$*=q,u*=b,l*=b;const i=(0,n.AeM)(h);let t=(0,n.AeM)(u);const e=(0,n.AeM)(l),r=(0,n.AeM)($);let a,c;switch(S){case 1:P=`$${h}\\times${(0,n.qaf)(l,$)}=$`,F=`$${h}\\times${(0,n.qaf)(l,$)}`,F+=`=${(0,n.qaf)(h+"\\times"+l,$)}`,F+=`=${(0,n.qaf)((0,n.Wt$)(h)+"\\times"+(0,n.Wt$)(l),(0,n.Wt$)($))}`;for(const t in e)i.push(e[t]);for(t=r,a=[],c=[],i.forEach((function(i){a.push([i,!0])})),t.forEach((function(i){c.push([i,!0])})),A=0;A<t.length;){for(let s=0;s<=i.length;){if(t[A]===i[s]){c[A]=[t[A],!1],a[s]=[i[s],!1],i[s]=1,t[A]=1;break}s++}A++}h=1,u=1;for(const t in i)h*=i[t];for(const i in t)u*=t[i];C="",M="";for(const i in a)!0===a[i][1]?C+=a[i][0]+"\\times":C+="\\cancel{"+a[i][0]+"}\\times";C=C.substr(0,C.length-6);for(const i in c)!0===c[i][1]?M+=c[i][0]+"\\times":M+="\\cancel{"+c[i][0]+"}\\times";M=M.substr(0,M.length-6),F+=`=\\dfrac{${C}}{${M}}`,F+=`=${(0,n.qaf)(h,u)}$`,R=(0,o.Pj)(h,u);break;case 2:P=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}=$`,F=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}`,F+=`=${(0,n.qaf)(h+"\\times"+l,u+"\\times"+$)}`;for(const t in e)i.push(e[t]);for(const i in r)t.push(r[i]);for(a=[],c=[],i.forEach((function(i){a.push([i,!0])})),t.forEach((function(i){c.push([i,!0])})),A=0;A<t.length;){for(let s=0;s<=i.length;){if(t[A]===i[s]){c[A]=[t[A],!1],a[s]=[i[s],!1],i[s]=1,t[A]=1;break}s++}A++}h=1,u=1;for(const t in i)h*=i[t];for(const i in t)u*=t[i];C="",M="";for(const i in a)!0===a[i][1]?C+=a[i][0]+"\\times":C+="\\cancel{"+a[i][0]+"}\\times";C=C.substr(0,C.length-6);for(const i in c)!0===c[i][1]?M+=c[i][0]+"\\times":M+="\\cancel{"+c[i][0]+"}\\times";M=M.substr(0,M.length-6),F+=`=\\dfrac{${C}}{${M}}`,F+=`=${(0,n.qaf)(h,u)}$`,R=(0,o.Pj)(h,u);break;case 3:h*=(0,n.nSR)(-1,1,[0]),u*=(0,n.nSR)(-1,1,[0]),l*=(0,n.nSR)(-1,1,[0]),$*=(0,n.nSR)(-1,1,[0]),s=(h<0)+(u<0)+(l<0)+($<0),g=1===Math.pow(-1,s)?"":"-",P=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}$`,F=`$${(0,n.qaf)(h,u)}\\times${(0,n.qaf)(l,$)}`,q=(0,n.WnP)(h),b=(0,n.WnP)(u),p=(0,n.WnP)(l),d=(0,n.WnP)($),F+=`=${g}${(0,n.qaf)(q,b)}\\times${(0,n.qaf)(p,d)}`,F+=`=${g}${(0,n.qaf)(q+"\\times"+p,b+"\\times"+d)}`;for(const t in e)i.push(e[t]);for(const i in r)t.push(r[i]);for(a=[],c=[],i.forEach((function(i){a.push([i,!0])})),t.forEach((function(i){c.push([i,!0])})),A=0;A<t.length;){for(let s=0;s<=i.length;){if(t[A]===i[s]){c[A]=[t[A],!1],a[s]=[i[s],!1],i[s]=1,t[A]=1;break}s++}A++}h=1,u=1;for(const t in i)h*=i[t];for(const i in t)u*=t[i];C="",M="";for(const i in a)!0===a[i][1]?C+=a[i][0]+"\\times":C+="\\cancel{"+a[i][0]+"}\\times";C=C.substr(0,C.length-6);for(const i in c)!0===c[i][1]?M+=c[i][0]+"\\times":M+="\\cancel{"+c[i][0]+"}\\times";M=M.substr(0,M.length-6),F+=`=${g}\\dfrac{${C}}{${M}}`,F+=`=${g}${(0,n.qaf)(h,u)}$`,R=(0,o.Pj)(("-"===g?-1:1)*h,u)}}this.questionJamaisPosee(k,h,u,l,$,S)&&(P+=(0,r.G5)(this,k,"largeur25 inline"),a.Do.isAmc&&(P="Calculer et donner la réponse sous forme irréductible\\\\\n"+P),(0,r.Iq)(this,k,R,{formatInteractif:"fraction",digits:5,digitsNum:3,digitsDen:2,signe:!0}),this.listeQuestions.push(P),this.listeCorrections.push(F),k++),W++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3," 1 : Fractions à numérateur et dénominateur positifs \n 2 : Type 1 et type 3 pour 50%/50%\n 3 : Ecritures fractionnaires à numérateur et dénominateur entiers relatifs"],this.besoinFormulaire2CaseACocher=["Avec décomposition"]}},25523:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=91572.fa85bd28e7bb91374da7.js.map