(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3163,6969],{43163:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>o,default:()=>n});var s=i(66969),r=i(55339);const o="Fractions irréductibles";function n(){s.default.call(this),this.titre=o,this.consigne="Rendre irréductible une fraction et son inverse à partir des décompositions en produit de facteurs premiers.",sortieHtml?this.spacing=4:this.spacing=2,sortieHtml?this.spacingCorr=4:this.spacingCorr=2,this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.listePackages="bclogo",this.nouvelleVersion=function(e){let t;sortieHtml&&(this.boutonAide=(0,r.apm)(e,"assets/pdf/FicheArithmetique-3A12.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let i=(0,r.bqK)([1],this.nbQuestions);this.introduction=(0,r.KUN)("À la question "+(0,r.bk1)(3)+" une observation judicieuse et argumentée pourra faire gagner du temps!","nombres","Coup de pouce");for(let g,Q,k=0,C=0;k<this.nbQuestions&&C<50;){var s,o,n,l,c,a,u,h,d,m,f,p,b,$;t=i[k],s=(0,r.MFT)(2,13),4,o=[],l=[],c=[];for(let t=0;t<4;t++){for(let e=0;e<t;e++)c.push(l[e]);l[t]=(0,r.nSR)(0,s.length-1,c)}for(let t=0;t<4;t++)o.push(s[l[t]]);n=[];for(let t=0;t<4;t++)n.push((0,r.nSR)(0,2));let e=n.indexOf(0);for(;-1!=e;)o.splice(e,1),n.splice(e,1),e=n.indexOf(0);d=[],m=[];for(let t=0;t<o.length;t++)d[t]=o[t],m[t]=o[t];f=[],p=[];for(let t=0;t<o.length;t++)f[t]=n[t],p[t]=n[t];h=(0,r.nSR)(0,(0,r.MFT)(2,30).length-1),a=(0,r.MFT)(2,30)[h],u=(0,r.MFT)(2,30)[(0,r.nSR)(0,(0,r.MFT)(2,30).length-1,h)];let B=!1,A=0;for(;A<d.length&&1!=B;)a==d[A]&&(f[A]++,B=!0),A++;for(B||(d.push(a),f.push(1),B=!0),B=!1,A=0;A<m.length&&!B;)u==m[A]&&(p[A]++,B=!0),A++;B||(m.push(u),p.push(1),B=!0);let M=[];for(let t=0;t<d.length;t++)M[t]={prem:d[t],mult:f[t]};let F=[];for(let t=0;t<m.length;t++)F[t]={prem:m[t],mult:p[t]};M.sort((function(e,t){return e.prem>t.prem})),F.sort((function(e,t){return e.prem>t.prem})),b=1;for(let t=0;t<d.length;t++)b*=M[t].prem**M[t].mult;$=1;for(let t=0;t<m.length;t++)$*=F[t].prem**F[t].mult;switch(t){case 1:switch(g=(0,r.bk1)(0)+` Décomposer $A = ${(0,r.euh)(b)}$ en produit de facteurs premiers : `,Q=(0,r.bk1)(0)+" La décomposition en produit de facteurs premier de $A = ",M[0].mult){case 1:Q+=`${M[0].prem}`;break;default:Q+=`${M[0].prem}^{${M[0].mult}}`}for(let e=1;e<d.length;e++)switch(M[e].mult){case 1:Q+=`\\times${M[e].prem}`;break;default:Q+=`\\times${M[e].prem}^{${M[e].mult}}`}switch(Q+="$.",g+="<br>"+(0,r.bk1)(1)+` Décomposer $B = ${(0,r.euh)($)}$ en produit de facteurs premiers : `,Q+="<br>"+(0,r.bk1)(1)+" La décomposition en produit de facteurs premier de $B = ",F[0].mult){case 1:Q+=`${F[0].prem}`;break;default:Q+=`${F[0].prem}^{${F[0].mult}}`}for(let e=1;e<m.length;e++)switch(F[e].mult){case 1:Q+=`\\times${F[e].prem}`;break;default:Q+=`\\times${F[e].prem}^{${F[e].mult}}`}Q+="$.",g+="<br>"+(0,r.bk1)(2)+` Rendre la fraction $\\dfrac{A}{B} = \\dfrac{${(0,r.euh)(b)}}{${(0,r.euh)($)}}$ irréductible `,sortieHtml?g+=" à l'aide des décompositions obtenues au "+(0,r.bk1)(0)+" et au "+(0,r.bk1)(1):g+=" à l'aide des questions "+(0,r.bk1)(0)+" et "+(0,r.bk1)(1),Q+="<br>"+(0,r.bk1)(2)+` $\\dfrac{A}{B} = \\dfrac{${(0,r.euh)(b)}}{${(0,r.euh)($)}} = `,Q+="\\dfrac{",Q+="\\cancel{"+(0,r.QBQ)(b/a)[0]+"}";for(let e=1;e<(0,r.QBQ)(b/a).length;e++)Q+="\\times \\cancel{"+(0,r.QBQ)(b/a)[e]+"}";Q+=`\\times ${a}}{`,Q+="\\cancel{"+(0,r.QBQ)(b/a)[0]+"}";for(let e=1;e<(0,r.QBQ)(b/a).length;e++)Q+="\\times \\cancel{"+(0,r.QBQ)(b/a)[e]+"}";Q+=`\\times ${u}} = `,Q+=`\\dfrac{${a}}{${u}}$.`,g+="<br>"+(0,r.bk1)(3)+` Rendre la fraction $\\dfrac{B}{A} = \\dfrac{${(0,r.euh)($)}}{${(0,r.euh)(b)}}$ irréductible`,sortieHtml?g+=" à l'aide des décompositions obtenues au "+(0,r.bk1)(0)+" et au "+(0,r.bk1)(1):g+=" à l'aide des questions "+(0,r.bk1)(0)+" et "+(0,r.bk1)(1),Q+="<br>"+(0,r.bk1)(3)+` $\\dfrac{B}{A}$ est l'inverse de $\\dfrac{A}{B}$ donc $\\dfrac{B}{A} = \\dfrac{${(0,r.euh)($)}}{${(0,r.euh)(b)}} = `,Q+="\\dfrac{",Q+="\\cancel{"+(0,r.QBQ)(b/a)[0]+"}";for(let e=1;e<(0,r.QBQ)(b/a).length;e++)Q+="\\times \\cancel{"+(0,r.QBQ)(b/a)[e]+"}";Q+=`\\times ${u}}{`,Q+="\\cancel{"+(0,r.QBQ)(b/a)[0]+"}";for(let e=1;e<(0,r.QBQ)(b/a).length;e++)Q+="\\times \\cancel{"+(0,r.QBQ)(b/a)[e]+"}";Q+=`\\times ${a}} = `,Q+=`\\dfrac{${u}}{${a}}$.`}-1==this.listeQuestions.indexOf(g)&&(this.listeQuestions.push(g),this.listeCorrections.push(Q),k++),C++}(0,r.K1R)(this)}}},66969:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=3163.25cf6e18b9faba06deaf.js.map