(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1258,9342,5216],{21258:(e,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>n,default:()=>o});var i=s(59342);const n="Calculer des longueurs avec la propriété de Thalès";function o(){i.default.call(this),this.sup=2,this.titre=n}},59342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>$});var i=s(75216),n=s(89459),o=s(55339),l=s(44393);function $(){i.default.call(this),this.titre="Calculer des longueurs avec le théorème de Thalès",this.consigne="",this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.vspace=-.5,this.nouvelleVersion=function(e){this.qcm=["4G30",[],"Calcul de longueur avec Thales",4],this.listeQuestions=[],this.listeCorrections=[];let t=[],s=(0,o.nSR)(0,1);for(let i=0,$="",a="",r=0;i<this.nbQuestions&&r<50;){(i+1)%3==0&&(t=[]);let c=(0,o.wnJ)(5,t);t.push(c);let h=c[0],d=c[1],u=c[2],m=c[3],b=c[4],_=(0,o.nSR)(5,10),g=(0,o.nSR)(5,10,_),y=(0,o.nSR)(Math.max(_-g,g-_)+1,_+g-1,[_,g]),p=(0,l.xmu)(0,0,h),f=(0,l.dJt)(p,_,d),M=(0,l.jGu)(p,f,g,y);M.id=`M2D_${e}_${i}_1`;let x=M.listePoints[2];x.nom=u;let D=(0,o.n0o)((0,o.nSR)(3,8,5)/10);2==this.sup&&(D*=-1,this.vspace=-.5),3==this.sup&&(i+s)%2==0&&(D*=-1,this.vspace=-.5);let C=(0,l.xcw)(p,x,D),k=(0,l.xcw)(f,x,D),E=(0,l.R_h)(C,k,x);E.id=`M2D_${e}_${i}_2`;let I,B=(0,l.T2s)(C,k,-.5),v=(0,l.T2s)(k,C,-.5),Q=(0,l.QNZ)(m,B),T=(0,l.QNZ)(b,v),K=(0,l.T2s)(p,f,-.5),N=(0,l.T2s)(f,p,-.5),L=(0,l.QNZ)(h,K),R=(0,l.QNZ)(d,N);I=D<0?(0,l.EUu)(p,x,k)<(0,l.EUu)(k,x,p)?(0,l.$7o)(p,x,-(0,l.Ncz)(p,x,k)/2,1/(0,l.InT)(p,x)):(0,l.$7o)(p,x,-(0,l.Ncz)(k,x,p)/2,1/(0,l.InT)(p,x)*.5):(0,l.$7o)(p,x,(0,l.Ncz)(p,x,f)/2-180,1/(0,l.InT)(p,x)*.5);let q=(0,l.QNZ)(u,I);$=n.Do.isHtml?"":"\\begin{minipage}{.5\\linewidth}\n",$+=`Sur la figure suivante, $${h+u}=${g}~\\text{cm}$, $${h+d}=${_}~\\text{cm}$, $${u+m}=${(0,o.k$K)(Math.abs(D)*g)}~\\text{cm}$, $${u+b}=${(0,o.k$K)(Math.abs(D)*y)}~\\text{cm}$ et $(${h+d})//(${m+b})$.<br>`,$+=`Calculer $${m+b}$ et $${u+d}$.<br><br>`,n.Do.isHtml||($+="\\end{minipage}\n",$+="\\begin{minipage}{.5\\linewidth}\n",$+="\\centering"),$+=(0,l.iR9)({xmin:Math.min(p.x,f.x,x.x,C.x,k.x)-1.5,ymin:Math.min(p.y,f.y,x.y,C.y,k.y)-.8,xmax:Math.max(p.x,f.x,x.x,C.x,k.x)+1.5,ymax:Math.max(p.y,f.y,x.y,C.y,k.y)+.8,scale:.5},M,E,L,R,q,Q,T),n.Do.isHtml||($+="\\end{minipage}\n");let w=D<0?2:6,S=(0,o.LlP)(e+"_"+i,`if (!document.getElementById('M2D_${e}_${i}_1').dataset.colorie == true || (document.getElementById('M2D_${e}_${i}_1').dataset.colorie == 'false')){\n          document.getElementById('M2D_${e}_${i}_1').style.stroke = 'blue';\n          document.getElementById('M2D_${e}_${i}_2').style.stroke = 'red';\n          document.getElementById('M2D_${e}_${i}_1').style.opacity = .5;\n          document.getElementById('M2D_${e}_${i}_1').style.strokeWidth = ${w};\n          document.getElementById('M2D_${e}_${i}_2').style.opacity = 1;\n          document.getElementById('M2D_${e}_${i}_2').style.strokeWidth = 2;\n          document.getElementById('M2D_${e}_${i}_1').dataset.colorie = true;\n          document.getElementById('btnMathALEA2d_${e}_${i}').classList.add('active');\n        } else {\n          document.getElementById('M2D_${e}_${i}_1').style.stroke = 'black';\n          document.getElementById('M2D_${e}_${i}_2').style.stroke = 'black';\n          document.getElementById('M2D_${e}_${i}_1').style.opacity = 1;\n          document.getElementById('M2D_${e}_${i}_1').style.strokeWidth = 1;\n          document.getElementById('M2D_${e}_${i}_2').style.opacity = 1;\n          document.getElementById('M2D_${e}_${i}_2').style.strokeWidth = 1;\n          document.getElementById('M2D_${e}_${i}_1').dataset.colorie = false;\n          document.getElementById('btnMathALEA2d_${e}_${i}').classList.remove('active');\n  \n        }\n        `,"Mettre en couleur les 2 triangles");a=D>0?`Dans le triangle $${h+d+u}$ :\n       <br> - $${m}\\in${"["+u+h+"]"}$,\n       <br> - $${b}\\in${"["+u+d+"]"}$,\n       <br> -  $(${h+d})//(${m+b})$,\n       <br> donc d'après le théorème de Thalès, les triangles $${h+d+u}$ et $${m+b+u}$ ont des longueurs proportionnelles.`:`Les droites $(${h+m})$ et $(${d+b})$ sont sécantes en $${u}$ et $(${h+d})//(${m+b})$ <br> donc d'après le théorème de Thalès, les triangles $${h+d+u}$ et $${m+b+u}$ ont des longueurs proportionnelles.`,a+="<br><br>",n.Do.isHtml?a+=`$\\dfrac{\\color{red}${u+m}}{\\color{blue}${u+h}}=\\dfrac{\\color{red}${u+b}}{\\color{blue}${u+d}}=\\dfrac{\\color{red}${m+b}}{\\color{blue}${h+d}}$`:a+=`$\\dfrac{${u+m}}{${u+h}}=\\dfrac{${u+b}}{${u+d}}=\\dfrac{${m+b}}{${h+d}}$`,a+="<br><br>",a+=`$\\dfrac{${(0,o.k$K)(Math.abs(D)*g)}}{${(0,o.euh)(g)}}=\\dfrac{${(0,o.k$K)(Math.abs(D)*y)}}{${u+d}}=\\dfrac{${m+b}}{${(0,o.euh)(_)}}$`,a+="<br><br>",a+=`$${m+b}=\\dfrac{${(0,o.k$K)(Math.abs(D)*g)}\\times${(0,o.euh)(_)}}{${(0,o.euh)(g)}}=${(0,o.k$K)(Math.abs(D)*_)}$ cm`,a+="<br><br>",a+=`$${u+d}=\\dfrac{${(0,o.k$K)(Math.abs(D)*y)}\\times${(0,o.euh)(g)}}{${(0,o.k$K)(Math.abs(D)*g)}}=${(0,o.k$K)(y)}$ cm`,n.Do.isHtml&&($+=`<br><div style="display: inline-block;margin-top:20px;">${S}</div>`),-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(a),i++,this.qcm[1].push([$,[a,(0,o.n0o)(y)],{digits:4,decimals:2,signe:!1,exposant_nb_chiffres:0,exposant_signe:!1,approx:10}])),r++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Configuration",3,"1 : Triangles imbriqués\n2 : Papillon\n3 : Les deux"]}},75216:(e,t,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>i})}}]);
//# sourceMappingURL=1258.4545b14604c7a254a83c.js.map