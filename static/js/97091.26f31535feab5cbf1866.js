(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[97091,68955,71129],{97091:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>r});var s=i(68955);const n="Trouver la valeur arrondie d’une racine carrée";function r(){s.default.call(this),this.titre=n,this.sup=3,this.sup2=!0}},68955:(e,t,i)=>{"use strict";i.r(t),i.d(t,{amcReady:()=>o,amcType:()=>a,interactifReady:()=>b,interactifType:()=>$,titre:()=>c,default:()=>l});var s=i(71129),n=i(62259),r=i(63861),u=i(10229),h=i(6441);const o=!0,a=2,b=!0,$="qcm",c="Arrondir une valeur";function l(){s.default.call(this),this.titre=c,this.nbQuestions=3,this.nbCols=3,this.nbColsCorr=1,this.sup=1,this.sup2=!1,this.interactifType=$,this.interactifReady=b,this.interactif=!0,this.amcReady=o,this.amcType=a,n.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=3.5,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.autoCorrection=[],n.Do.isAmc||this.interactif?this.consigne="Quels sont les encadrements où la valeur orange est la valeur arrondie du nombre à l'unité, au dixième et au centième ?":this.consigne="Encadrer chaque nombre à l'unité, puis au dixième, puis au centième.<br>Dans chaque cas, mettre ensuite en évidence son arrondi.";const e=[],t=[],i=[];let s,o,a,b,$,c,l,Q,d,p,Y,m,f,q,C,R,g,x=[],v="";v=n.Do.isHtml?"<br>":"\\\\",this.listeQuestions=[],this.listeCorrections=[];for(let S=0,k="",D="",F=0;S<this.nbQuestions&&F<50;){if(this.autoCorrection[S]={},1===this.sup?(s=(0,r.nSR)(0,9),o=(0,r.nSR)(0,9),a=(0,r.nSR)(0,9),b=(0,r.nSR)(2,9),$=(0,r.nSR)(1,9),c=(0,r.nSR)(1,9),l=(0,r.nSR)(1,9,5),Q=(0,r.nSR)(0,1),d=(0,r.nSR)(0,1),p=(0,r.nSR)(0,1),Y=Q*s*1e3+d*o*100+p*a*10+1*b+(0,r.n0o)(.1*$+.01*c+.001*l),q=(0,r.euh)(Y)):2===this.sup?(m=(0,r.q$q)([7,9,11,13]),f=(0,r.nSR)(1,50,[7,9,11,13,14,18,21,22,26,27,28,33,35,36,39,42,44,45,49]),Y=f/m,q=(0,r.qaf)(f,m),$=10*(0,r.YbQ)(Y-(0,r.YbQ)(Y,0),1),c=100*(0,r.YbQ)(Y-(0,r.YbQ)(Y,1),2),l=1e3*(0,r.YbQ)(Y-(0,r.YbQ)(Y,2),3)):3===this.sup?(C=(0,r.nSR)(2,300,[(0,r.EU4)(300)]),Y=Math.sqrt(C),q=`\\sqrt{${C}}`,$=10*(0,r.YbQ)(Y-(0,r.YbQ)(Y,0),1),c=100*(0,r.YbQ)(Y-(0,r.YbQ)(Y,1),2),l=1e3*(0,r.YbQ)(Y-(0,r.YbQ)(Y,2),3)):4===this.sup&&(g=(0,r.nSR)(11,99)/10,R=(0,r.nSR)(1,89,60),(0,r.q$q)([!0,!1])?(Y=g*(0,h.mC)(R),q=`${(0,r.euh)(g)}\\cos(${R})`,$=10*(0,r.YbQ)(Y-(0,r.YbQ)(Y,0),1),c=100*(0,r.YbQ)(Y-(0,r.YbQ)(Y,1),2),l=1e3*(0,r.YbQ)(Y-(0,r.YbQ)(Y,2),3)):(Y=g/(0,h.mC)(R),q=`\\dfrac{${(0,r.euh)(g)}}{\\cos(${R})}`,$=10*(0,r.YbQ)(Y-(0,r.YbQ)(Y,0),1),c=100*(0,r.YbQ)(Y-(0,r.YbQ)(Y,1),2),l=1e3*(0,r.YbQ)(Y-(0,r.YbQ)(Y,2),3))),1===this.sup?k=`$${q}$`:2===this.sup?k=`$\\text{Quand~on~écrit~sur~la~calculatrice~} ${f}\\div ${m}, \\text{~elle~renvoie} : ${(0,r.euh)(Y)}$`:(3===this.sup||4===this.sup)&&(k=`$\\text{Quand~on~écrit~sur~la~calculatrice~} ${q}, \\text{~elle~renvoie} : ${(0,r.euh)(Y)}$`),D="Encadrement et arrondi à l'unité : ",$<5?(D+=`$\\phantom{1234567}${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,0)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+1,0))}$`,i[0]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,0)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+1,0))}$`,i[1]=`$${(0,r.euh)((0,r.YbQ)(Y,0))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+1,0)))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])):(D+=`$\\phantom{1234567}${(0,r.euh)((0,r.YbQ)(Y,0))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+1,0)))}$`,i[0]=`$${(0,r.euh)((0,r.YbQ)(Y,0))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+1,0)))}$`,i[1]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,0)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+1,0))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])),D+="<br>Encadrement et arrondi au dixième : ",c<5?(D+=`$\\phantom{123}${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,1)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.1,1))}$`,i[0]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,1)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.1,1))}$`,i[1]=`$${(0,r.euh)((0,r.YbQ)(Y,1))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.1,1)))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])):(D+=`$\\phantom{123}${(0,r.euh)((0,r.YbQ)(Y,1))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.1,1)))}$`,i[0]=`$${(0,r.euh)((0,r.YbQ)(Y,1))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.1,1)))}$`,i[1]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,1)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.1,1))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])),D+="<br>Encadrement et arrondi au centième : $~$",l<5?(D+=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,2)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.01,2))}$`,i[0]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,2)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.01,2))}$`,i[1]=`$${(0,r.euh)((0,r.YbQ)(Y,2))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.01,2)))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])):(D+=`$${(0,r.euh)((0,r.YbQ)(Y,2))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.01,2)))}$`,i[0]=`$${(0,r.euh)((0,r.YbQ)(Y,2))} < ${q} < ${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y+.01,2)))}$`,i[1]=`$${(0,r.b1)((0,r.euh)((0,r.YbQ)(Y,2)))} < ${q} < ${(0,r.euh)((0,r.YbQ)(Y+.01,2))}$`,x=[!0,!1],(0,r.q$q)([!1,!0])&&(0,r.Xsq)(i,x),e.push(i[0],i[1]),t.push(x[0],x[1])),this.autoCorrection[S].enonce=`Quels sont les encadrements où la valeur orange est l'arrondi de ${k} ?\\\\ \n Réponses possibles`,this.autoCorrection[S].options={vertical:!0,ordered:!0},this.autoCorrection[S].propositions=[{texte:e[0],statut:t[0],feedback:""},{texte:e[1],statut:t[1],feedback:""},{texte:e[2],statut:t[2],feedback:""},{texte:e[3],statut:t[3],feedback:""},{texte:e[4],statut:t[4],feedback:""},{texte:e[5],statut:t[5],feedback:""}],this.modeQcm&&!n.Do.isAmc){k+="<br><br>Réponses possibles : <br>  ",D="";for(let i=0;i<6;i++)k+=`$\\square\\;$ ${e[i]}`+v,1===t[i]?D+=`$\\blacksquare\\;$ ${e[i]}`+v:D+=`$\\square\\;$ ${e[i]}`+v}-1===this.listeQuestions.indexOf(k)&&(this.interactif&&(k+=(0,u.l3)(this,S).texte),this.listeQuestions.push(k),this.listeCorrections.push(D),e.length=0,t.length=0,S++),F++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Type de nombre",2,"1 : Nombre décimal\n 2 : Fraction"],this.besoinFormulaire2CaseACocher=["Affichage de la valeur donnée à la calculatrice",!1]}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=97091.26f31535feab5cbf1866.js.map