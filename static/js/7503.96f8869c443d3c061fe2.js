(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7503,6969],{97503:(e,i,s)=>{"use strict";s.r(i),s.d(i,{amcReady:()=>h,amcType:()=>u,titre:()=>o,default:()=>r});var t=s(66969),n=s(55339);const h=!0,u=2,o="Arrondir une valeur";function r(){t.default.call(this),this.titre=o,this.nbQuestions=3,this.nbCols=3,this.nbColsCorr=1,this.sup=1,this.sup2=!1,this.qcmDisponible=!0,this.modeQcm=!1,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=3.5,this.nouvelleVersion=function(){this.modeQcm?this.consigne="Quelles sont les encadrements où la valeur orange est la valeur arrondie du nombre à l'unité, au dixième et au centième":this.consigne="Encadrer chaque nombre à l'unité, puis au dixième, puis au centième.<br>Dans chaque cas, mettre ensuite en évidence son arrondi.",this.qcm=["6N31-3",[],"Valeur arrondie du nombre à l'unité, au dixième et au centième",2,{ordered:!0,vertical:!0}];let e,i,s,t,h,u,o,r,$,a,b,l,c,Q,m,d=[],p=[],Y=[],q=[],C="";sortieHtml?C=!0===this.qcm[4].vertical?"<br>":"&emsp;":!0===this.qcm[4].vertical?space="\\\\":C="\\qquad",this.listeQuestions=[],this.listeCorrections=[];for(let f=0,g="",v="",R=0;f<this.nbQuestions&&R<50;){if(d.length=0,p.length=0,Y.length=0,q.length=0,1==this.sup?(e=(0,n.nSR)(0,9),i=(0,n.nSR)(0,9),s=(0,n.nSR)(0,9),t=(0,n.nSR)(0,9),h=(0,n.nSR)(1,9),u=(0,n.nSR)(1,9),o=(0,n.nSR)(1,9,5),r=(0,n.nSR)(0,1),$=(0,n.nSR)(0,1),a=(0,n.nSR)(0,1),b=r*e*1e3+$*i*100+a*s*10+1*t+(0,n.n0o)(.1*h+.01*u+.001*o),Q=(0,n.euh)(b)):2==this.sup?(l=(0,n.q$q)([7,9,11,13]),c=(0,n.nSR)(1,50,[7,9,11,13,14,18,21,22,26,27,28,33,35,36,39,42,44,45,49]),b=c/l,Q=(0,n.qaf)(c,l),h=10*(0,n.YbQ)(b-(0,n.YbQ)(b,0),1),u=100*(0,n.YbQ)(b-(0,n.YbQ)(b,1),2),o=1e3*(0,n.YbQ)(b-(0,n.YbQ)(b,2),3)):3==this.sup&&(m=(0,n.nSR)(2,300,[(0,n.EU4)(300)]),b=Math.sqrt(m),Q=`\\sqrt{${m}}`,h=10*(0,n.YbQ)(b-(0,n.YbQ)(b,0),1),u=100*(0,n.YbQ)(b-(0,n.YbQ)(b,1),2),o=1e3*(0,n.YbQ)(b-(0,n.YbQ)(b,2),3)),g=`$${Q}$`,1==this.sup?g+="":2==this.sup?g+=`$\\phantom{1234567}Quand~on~écrit~sur~la~calculatrice~ ${c}\\div ${l}, ~elle~renvoie : ${(0,n.euh)(b)}$`:3==this.sup&&(g+=`$\\phantom{1234567}Quand~on~écrit~sur~la~calculatrice~ ${Q}, ~elle~renvoie : ${(0,n.euh)(b)}$`),v="Encadrement et arrondi à l'unité : ",h<5?(v+=`$\\phantom{1234567}${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,0)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+1,0))}$`,Y[0]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,0)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+1,0))}$`,Y[1]=`$${(0,n.euh)((0,n.YbQ)(b,0))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+1,0)))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])):(v+=`$\\phantom{1234567}${(0,n.euh)((0,n.YbQ)(b,0))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+1,0)))}$`,Y[0]=`$${(0,n.euh)((0,n.YbQ)(b,0))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+1,0)))}$`,Y[1]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,0)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+1,0))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])),v+="<br>Encadrement et arrondi au dixième : ",u<5?(v+=`$\\phantom{123}${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,1)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.1,1))}$`,Y[0]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,1)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.1,1))}$`,Y[1]=`$${(0,n.euh)((0,n.YbQ)(b,1))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.1,1)))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])):(v+=`$\\phantom{123}${(0,n.euh)((0,n.YbQ)(b,1))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.1,1)))}$`,Y[0]=`$${(0,n.euh)((0,n.YbQ)(b,1))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.1,1)))}$`,Y[1]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,1)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.1,1))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])),v+="<br>Encadrement et arrondi au centième : $~$",o<5?(v+=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,2)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.01,2))}$`,Y[0]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,2)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.01,2))}$`,Y[1]=`$${(0,n.euh)((0,n.YbQ)(b,2))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.01,2)))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])):(v+=`$${(0,n.euh)((0,n.YbQ)(b,2))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.01,2)))}$`,Y[0]=`$${(0,n.euh)((0,n.YbQ)(b,2))} < ${Q} < ${(0,n.b1)((0,n.euh)((0,n.YbQ)(b+.01,2)))}$`,Y[1]=`$${(0,n.b1)((0,n.euh)((0,n.YbQ)(b,2)))} < ${Q} < ${(0,n.euh)((0,n.YbQ)(b+.01,2))}$`,q=[1,0],(0,n.q$q)([!1,!0])&&(0,n.Xsq)(Y,q),d.push(Y[0],Y[1]),p.push(q[0],q[1])),this.modeQcm&&!mathalea.sortieAMC){g+="<br><br>Réponses possibles : <br>  ",v="";for(let e=0;e<6;e++)g+=`$\\square\\;$ ${d[e]}`+C,1==p[e]?v+=`$\\blacksquare\\;$ ${d[e]}`+C:v+=`$\\square\\;$ ${d[e]}`+C}-1==this.listeQuestions.indexOf(g)&&(this.listeQuestions.push(g),this.listeCorrections.push(v),this.qcm[1].push([`Quels sont les encadrements où la valeur orange est l'arrondi de ${g} ?\\\\ \n Réponses possibles`,d.slice(),p.slice()]),d.length=0,p.length=0,f++),R++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type de nombre",2,"1 : Nombre décimal\n 2 : Fraction"],this.besoinFormulaire2CaseACocher=["Affichage de la valeur donnée à la calculatrice",!1]}},66969:(e,i,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=7503.96f8869c443d3c061fe2.js.map