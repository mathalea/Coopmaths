(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[66701,3809,71129],{66701:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>o});var s=i(3809);const n="Calculer des longueurs avec la propriété de Thalès";function o(){s.default.call(this),this.sup=2,this.titre=n}},3809:(e,t,i)=>{"use strict";i.r(t),i.d(t,{amcReady:()=>$,amcType:()=>c,interactifReady:()=>h,interactifType:()=>u,default:()=>d});var s=i(71129),n=i(62259),o=i(63861),r=i(55802),a=i(10229),l=i(62733);const $=!0,c=5,h=!0,u="mathLive";function d(){s.default.call(this),this.titre="Calculer des longueurs avec le théorème de Thalès",this.interactifReady=h,this.interactifType=u,this.consigne="",this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.vspace=-.5,this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[];let t=[];const i=(0,o.nSR)(0,1);let s;for(let $=0,c="",h="",u=0;$<this.nbQuestions&&u<50;){($+1)%3==0&&(t=[]);const d=(0,o.wnJ)(5,t);t.push(d);const m=d[0],b=d[1],_=d[2],g=d[3],y=d[4],f=(0,o.nSR)(5,10),p=(0,o.nSR)(5,10,f),M=(0,o.nSR)(Math.max(f-p,p-f)+1,f+p-1,[f,p]),x=(0,r.xmu)(0,0,m),D=(0,r.dJt)(x,f,b),C=(0,r.jGu)(x,D,p,M);C.id=`M2D_${e}_${$}_1`;const I=C.listePoints[2];I.nom=_;let k=(0,o.n0o)((0,o.nSR)(3,8,5)/10);2===parseInt(this.sup)&&(k*=-1,this.vspace=-.5),3===parseInt(this.sup)&&($+i)%2==0&&(k*=-1,this.vspace=-.5);const E=(0,r.xcw)(x,I,k),v=(0,r.xcw)(D,I,k),B=(0,r.R_h)(E,v,I);B.id=`M2D_${e}_${$}_2`;const T=(0,r.T2s)(E,v,-.5),Q=(0,r.T2s)(v,E,-.5),N=(0,r.QNZ)(g,T),R=(0,r.QNZ)(y,Q),w=(0,r.T2s)(x,D,-.5),F=(0,r.T2s)(D,x,-.5),K=(0,r.QNZ)(m,w),q=(0,r.QNZ)(b,F);let A;A=k<0?(0,r.EUu)(x,I,v)<(0,r.EUu)(v,I,x)?(0,r.$7o)(x,I,-(0,r.Ncz)(x,I,v)/2,1/(0,r.InT)(x,I)):(0,r.$7o)(x,I,-(0,r.Ncz)(v,I,x)/2,1/(0,r.InT)(x,I)*.5):(0,r.$7o)(x,I,(0,r.Ncz)(x,I,D)/2-180,1/(0,r.InT)(x,I)*.5);const L=(0,r.QNZ)(_,A);c=n.Do.isHtml?"":"\\begin{minipage}{.5\\linewidth}\n",c+=`Sur la figure suivante, $${m+_}=${p}~\\text{cm}$, $${m+b}=${f}~\\text{cm}$, $${_+g}=${(0,o.k$K)(Math.abs(k)*p)}~\\text{cm}$, $${_+y}=${(0,o.k$K)(Math.abs(k)*M)}~\\text{cm}$ et $(${m+b})//(${g+y})$.<br>`,this.interactif||(c+=`Calculer $${g+y}$ et $${_+b}$.<br><br>`),n.Do.isHtml||(c+="\\end{minipage}\n",c+="\\begin{minipage}{.5\\linewidth}\n",c+="\\centering"),c+=(0,r.iR9)({xmin:Math.min(x.x,D.x,I.x,E.x,v.x)-1.5,ymin:Math.min(x.y,D.y,I.y,E.y,v.y)-.8,xmax:Math.max(x.x,D.x,I.x,E.x,v.x)+1.5,ymax:Math.max(x.y,D.y,I.y,E.y,v.y)+.8,scale:.5},C,B,K,q,L,N,R),n.Do.isHtml||(c+="\\end{minipage}\n");const Z=k<0?2:6,S=(0,o.LlP)(e+"_"+$,`if (!document.getElementById('M2D_${e}_${$}_1').dataset.colorie == true || (document.getElementById('M2D_${e}_${$}_1').dataset.colorie == 'false')){\n          document.getElementById('M2D_${e}_${$}_1').style.stroke = 'blue';\n          document.getElementById('M2D_${e}_${$}_2').style.stroke = 'red';\n          document.getElementById('M2D_${e}_${$}_1').style.opacity = .5;\n          document.getElementById('M2D_${e}_${$}_1').style.strokeWidth = ${Z};\n          document.getElementById('M2D_${e}_${$}_2').style.opacity = 1;\n          document.getElementById('M2D_${e}_${$}_2').style.strokeWidth = 2;\n          document.getElementById('M2D_${e}_${$}_1').dataset.colorie = true;\n          document.getElementById('btnMathALEA2d_${e}_${$}').classList.add('active');\n        } else {\n          document.getElementById('M2D_${e}_${$}_1').style.stroke = 'black';\n          document.getElementById('M2D_${e}_${$}_2').style.stroke = 'black';\n          document.getElementById('M2D_${e}_${$}_1').style.opacity = 1;\n          document.getElementById('M2D_${e}_${$}_1').style.strokeWidth = 1;\n          document.getElementById('M2D_${e}_${$}_2').style.opacity = 1;\n          document.getElementById('M2D_${e}_${$}_2').style.strokeWidth = 1;\n          document.getElementById('M2D_${e}_${$}_1').dataset.colorie = false;\n          document.getElementById('btnMathALEA2d_${e}_${$}').classList.remove('active');\n  \n        }\n        `,"Mettre en couleur les 2 triangles");h=k>0?`Dans le triangle $${m+b+_}$ :\n       <br> - $${g}\\in${"["+_+m+"]"}$,\n       <br> - $${y}\\in${"["+_+b+"]"}$,\n       <br> -  $(${m+b})//(${g+y})$,\n       <br> donc d'après le théorème de Thalès, les triangles $${m+b+_}$ et $${g+y+_}$ ont des longueurs proportionnelles.`:`Les droites $(${m+g})$ et $(${b+y})$ sont sécantes en $${_}$ et $(${m+b})//(${g+y})$ <br> donc d'après le théorème de Thalès, les triangles $${m+b+_}$ et $${g+y+_}$ ont des longueurs proportionnelles.`,h+="<br><br>",n.Do.isHtml?h+=`$\\dfrac{\\color{red}${_+g}}{\\color{blue}${_+m}}=\\dfrac{\\color{red}${_+y}}{\\color{blue}${_+b}}=\\dfrac{\\color{red}${g+y}}{\\color{blue}${m+b}}$`:h+=`$\\dfrac{${_+g}}{${_+m}}=\\dfrac{${_+y}}{${_+b}}=\\dfrac{${g+y}}{${m+b}}$`,h+="<br><br>",h+=`$\\dfrac{${(0,o.k$K)(Math.abs(k)*p)}}{${(0,o.euh)(p)}}=\\dfrac{${(0,o.k$K)(Math.abs(k)*M)}}{${_+b}}=\\dfrac{${g+y}}{${(0,o.euh)(f)}}$`,h+="<br><br>",h+=`$${g+y}=\\dfrac{${(0,o.k$K)(Math.abs(k)*p)}\\times${(0,o.euh)(f)}}{${(0,o.euh)(p)}}=${(0,o.k$K)(Math.abs(k)*f)}$ cm`,h+="<br><br>",h+=`$${_+b}=\\dfrac{${(0,o.k$K)(Math.abs(k)*M)}\\times${(0,o.euh)(p)}}{${(0,o.k$K)(Math.abs(k)*p)}}=${(0,o.k$K)(M)}$ cm`,s=M,n.Do.isHtml&&(c+=`<br><div style="display: inline-block;margin-top:20px;">${S}</div>`),this.interactif&&n.Do.isHtml&&(c+="<br><br><em>Il faut saisir une unité.</em>",c+=`<br><br>$${g+y} = $`,(0,a.Iq)(this,2*$,new l.Z((0,o.n0o)(Math.abs(k)*f),"cm"),{formatInteractif:"longueur"}),c+=(0,a.G5)(this,2*$,"longueur"),c+=`$${_+b} = $`,c+=(0,a.G5)(this,2*$+1,"longueur"),(0,a.Iq)(this,2*$+1,new l.Z(M,"cm"),{formatInteractif:"longueur"}),console.log(this.autoCorrection),console.log(new l.Z(M,"cm"))),-1===this.listeQuestions.indexOf(c)&&(n.Do.isAmc&&(this.autoCorrection[$]={enonce:c,propositions:[{texte:h,statut:4,feedback:""}],reponse:{valeur:s,param:{digits:Math.max(2,(0,o.WW7)(s))+1,decimals:1,signe:!1,exposantNbChiffres:0}}}),this.listeQuestions.push(c),this.listeCorrections.push(h),$++),u++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Configuration",3,"1 : Triangles imbriqués\n2 : Papillon\n3 : Les deux"]}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=66701.328dd4c95ed75247d423.js.map