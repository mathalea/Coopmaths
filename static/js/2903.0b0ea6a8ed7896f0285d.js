(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2903,7567],{62903:(i,e,s)=>{"use strict";s.r(e),s.d(e,{amcReady:()=>a,titre:()=>l,default:()=>h});var t=s(67567),n=s(24477),o=s(17199);const a=!0,l="Mesurer un angle";function h(){t.default.call(this),this.titre=l,this.consigne="",this.nbQuestions=2,this.nbQuestionsModifiable=!0,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.video="TEzu9uky56M",this.qcmDisponible=!0,this.modeQcm=!1,this.nouvelleVersion=function(){let i,e;this.qcm=["6G23-1",[],"Estimer la mesure d'un angle.",1];let s="";s=sortieHtml?"&emsp;":"\\qquad",this.listeQuestions=[],this.listeCorrections=[];let t,a,l,h,r,u,m,c,d,b,$,p,g,x,C,f,q,M,Q,y,k,R,D,w=[];for(let v=0;v<this.nbQuestions;v++){if(w.push((0,n.q$q)([-1,1])),t=1==this.sup?10*(0,n.nSR)(2,16,9):2==this.sup?5*(0,n.nSR)(4,32,18):(0,n.nSR)(20,160,90),i=[`$${t}\\degree$`,`$${180-t}\\degree$`,`$${t/2}\\degree$`,`$${Math.round((180+t)/2)}\\degree$`,"$180\\degree$","$90\\degree$"],e=[1,0,0,0,0,0],a=(0,n.nSR)(-180,180),t=w[v]*t,u=[(0,n.q$q)(["x","y","z","t"]),(0,n.Gag)((0,n.nSR)(1,16)),(0,n.q$q)(["s","u","v","w"])],m=this.modeQcm?`Estime la mesure de l'angle $\\widehat{${u[0]+u[1]+u[2]}}$ sans instrument.<br>`:`Mesure l'angle $\\widehat{${u[0]+u[1]+u[2]}}$.<br>`,d=(0,o.xmu)(0,0),b=(0,o.xmu)(6,0),b=(0,o.Wnp)(b,d,a),h=(0,o.QNZ)(u[0],(0,o.$7o)(d,(0,o.xcw)(b,d,.95),90*w[v],.1),"milieu","black",1,"middle",!0),g=(0,o.H2X)(d,b),$=(0,o.Wnp)(b,d,t),x=(0,o.Wnp)(b,d,t/2),l=(0,o.QNZ)(u[1],(0,o.T2s)(d,x,-.5),"milieu","black",1,"middle",!0),r=(0,o.QNZ)(u[2],(0,o.$7o)(d,(0,o.xcw)($,d,.95),90*-w[v],.1),"milieu","black",1,"middle",!0),p=(0,o.H2X)(d,$),C=(0,o.BD1)(d,b,$),f=(0,o.DQC)(b,d,$),D=(0,o.DQC)(b,d,$,"black",1.5," "),c="",q=Math.min(d.x,$.x,b.x)-1,M=Math.max(d.x,$.x,b.x)+1,Q=Math.min(d.y,$.y,b.y)-1,y=Math.max(d.y,$.y,b.y)+1,mathalea.fenetreMathalea2d=[q,Q,M,y],k=[g,p,C,l,h,r,D],R=[g,p,C,l,h,r,f],m+=(0,o.iR9)({xmin:q,ymin:Q,xmax:M,ymax:y,pixelsParCm:20,scale:.8},k),c+=(0,o.iR9)({xmin:q,ymin:Q,xmax:M,ymax:y,pixelsParCm:20,scale:.7},R),this.qcm[1].push([`${m}\\\\ \n Réponses possibles : `,i,e]),this.modeQcm&&!mathalea.sortieAMC){m+=`<br>  Réponses possibles : ${s}  `,c="",(0,n.Xsq)(i,e);for(let t=0;t<i.length;t++)m+=`$\\square\\;$ ${i[t]} `+s,c+=1==e[t]?`$\\blacksquare\\;$ ${i[t]} `+s:`$\\square\\;$ ${i[t]}`+s}this.listeQuestions.push(m),this.listeCorrections.push(c)}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Précision de l'angle",3,"1 : Angle à 10°\n2 : Angle à 5°\n3 : Angle à 1°"]}},67567:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(e),s.d(e,{default:()=>t})}}]);