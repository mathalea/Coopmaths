(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3013,2006],{83013:($,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>a});var e=i(2006),s=i(89846),r=i(91030);const n="Compléter un tableau de valeurs";function a(){e.default.call(this),this.titre=n,this.consigne="",this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.sup=5,this.correctionDetailleeDisponible=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let $=[];1==this.sup&&($=["ax+b","ax"]),2==this.sup&&($=["ax2+bx+c","ax2+c","ax2+bx"]),3==this.sup&&($=["a/cx+d","ax+b/cx+d"]),4==this.sup&&($=["(ax+b)(cx+d)","(ax+b)2"]),5==this.sup&&($=["ax+b","ax","ax2+bx+c","ax2+c","ax2+bx","a/cx+d","ax+b/cx+d","(ax+b)(cx+d)","(ax+b)2"]);let t=(0,r.SRM)($,this.nbQuestions),i=(0,r.SRM)([[-3,0,3],[-2,0,2],[1,2,5],[-3,6,9]],this.nbQuestions);for(let e,n,a,u,P,b,c,o,h,l,x,m,d=0,f="",M=0;d<this.nbQuestions&&M<50;){switch(x=(0,r.ff2)(6+d),c=i[d][0],o=i[d][1],h=i[d][2],t[d]){case"ax+b":a=(0,r.nSR)(-10,10,[0,-1,1]),u=(0,r.nSR)(-10,10,[0]),l=`${a}x${(0,r.tPu)(u)}`,m=`${x}(x) & ${a*i[d][0]+u} & ${a*i[d][1]+u} & ${a*i[d][2]+u} \\\\\n`,f=`$${x}(${c})=${a}\\times${(0,r.PMY)(c)}${(0,r.tPu)(u)}=${a*c}${(0,r.tPu)(u)}=${a*c+u}$<br>`,f+=`$${x}(${o})=${a}\\times${(0,r.PMY)(o)}${(0,r.tPu)(u)}=${a*o}${(0,r.tPu)(u)}=${a*o+u}$<br>`,f+=`$${x}(${h})=${a}\\times${(0,r.PMY)(h)}${(0,r.tPu)(u)}=${a*h}${(0,r.tPu)(u)}=${a*h+u}$<br>`;break;case"ax":a=(0,r.nSR)(-10,10,[0,-1,1]),l=`${a}x`,m=`${x}(x) & ${a*i[d][0]} & ${a*i[d][1]} & ${a*i[d][2]} \\\\\n`,f=`$${x}(${c})=${a}\\times${(0,r.PMY)(c)}=${a*c}$<br>`,f+=`$${x}(${o})=${a}\\times${(0,r.PMY)(o)}=${a*o}$<br>`,f+=`$${x}(${h})=${a}\\times${(0,r.PMY)(h)}=${a*h}$<br>`;break;case"ax2+bx+c":a=(0,r.nSR)(-3,3,[0,-1,1]),u=(0,r.nSR)(-5,5,[0,-1,1]),P=(0,r.nSR)(-10,10,[0]),l=`${a}x^2${(0,r.tPu)(u)}x${(0,r.tPu)(P)}`,m=`${x}(x) & ${a*i[d][0]**2+u*i[d][0]+P} & ${a*i[d][1]**2+u*i[d][1]+P} & ${a*i[d][2]**2+u*i[d][2]+P} \\\\\n`,f=`$${x}(${c})=${a}\\times${(0,r.PMY)(c)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(c)}${(0,r.tPu)(P)}=${a}\\times${c**2}${(0,r.tPu)(u*c)}${(0,r.tPu)(P)}=${a*c**2+u*c+P}$<br>`,f+=`$${x}(${o})=${a}\\times${(0,r.PMY)(o)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(o)}${(0,r.tPu)(P)}=${a}\\times${o**2}${(0,r.tPu)(u*o)}${(0,r.tPu)(P)}=${a*o**2+u*o+P}$<br>`,f+=`$${x}(${h})=${a}\\times${(0,r.PMY)(h)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(h)}${(0,r.tPu)(P)}=${a}\\times${h**2}${(0,r.tPu)(u*h)}${(0,r.tPu)(P)}=${a*h**2+u*h+P}$<br>`;break;case"ax2+c":a=(0,r.nSR)(-4,4,[0,-1,1]),P=(0,r.nSR)(-10,10,[0]),l=`${a}x^2${(0,r.tPu)(P)}`,m=`${x}(x) & ${a*i[d][0]**2+P} & ${a*i[d][1]**2+P} & ${a*i[d][2]**2+P} \\\\\n`,f=`$${x}(${c})=${a}\\times${(0,r.PMY)(c)}^2${(0,r.tPu)(P)}=${a}\\times${c**2}${(0,r.tPu)(P)}=${a*c**2+P}$<br>`,f+=`$${x}(${o})=${a}\\times${(0,r.PMY)(o)}^2${(0,r.tPu)(P)}=${a}\\times${o**2}${(0,r.tPu)(P)}=${a*o**2+P}$<br>`,f+=`$${x}(${h})=${a}\\times${(0,r.PMY)(h)}^2${(0,r.tPu)(P)}=${a}\\times${h**2}${(0,r.tPu)(P)}=${a*h**2+P}$<br>`;break;case"ax2+bx":a=(0,r.nSR)(-3,3,[0,-1,1]),u=(0,r.nSR)(-5,5,[0,-1,1]),P=(0,r.nSR)(-10,10,[0]),l=`${a}x^2${(0,r.tPu)(u)}x`,m=`${x}(x) & ${a*i[d][0]**2+u*i[d][0]} & ${a*i[d][1]**2+u*i[d][1]} & ${a*i[d][2]**2+u*i[d][2]} \\\\\n`,f=`$${x}(${c})=${a}\\times${(0,r.PMY)(c)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(c)}=${a}\\times${c**2}${(0,r.tPu)(u*c)}=${a*c**2+u*c}$<br>`,f+=`$${x}(${o})=${a}\\times${(0,r.PMY)(o)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(o)}=${a}\\times${o**2}${(0,r.tPu)(u*o)}=${a*o**2+u*o}$<br>`,f+=`$${x}(${h})=${a}\\times${(0,r.PMY)(h)}^2${(0,r.tPu)(u)}\\times${(0,r.PMY)(h)}=${a}\\times${h**2}${(0,r.tPu)(u*h)}=${a*h**2+u*h}$<br>`;break;case"a/cx+d":for(a=(0,r.nSR)(-10,10,[0]),P=(0,r.nSR)(-10,10,[0,-1,1]),b=(0,r.nSR)(-10,10,[0]);P*c+b==0||P*o+b==0||P*h+b==0;)P=(0,r.nSR)(-10,10,[0,-1,1]);l=`\\dfrac{${a}}{${P}x${(0,r.tPu)(b)}}`,m=`${x}(x) & ${(0,r.xau)(a,P*i[d][0]+b)} & ${(0,r.xau)(a,P*i[d][1]+b)} & ${(0,r.xau)(a,P*i[d][2]+b)} \\\\\n`,f=`$${x}(${c})=\\dfrac{${a}}{${P}\\times${(0,r.PMY)(c)}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*c}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*c+b}}`,1==(0,r.Md9)(a,P*c+b)?f+="$<br><br>":f+="="+(0,r.xau)(a,P*c+b)+"$<br><br>",f+=`$${x}(${o})=\\dfrac{${a}}{${P}\\times${(0,r.PMY)(o)}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*o}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*o+b}}`,1==(0,r.Md9)(a,P*o+b)?f+="$<br><br>":f+="="+(0,r.xau)(a,P*o+b)+"$<br><br>",f+=`$${x}(${h})=\\dfrac{${a}}{${P}\\times${(0,r.PMY)(h)}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*h}${(0,r.tPu)(b)}}=\\dfrac{${a}}{${P*h+b}}`,1==(0,r.Md9)(a,P*h+b)?f+="$<br><br>":f+="="+(0,r.xau)(a,P*h+b)+"$<br><br>";break;case"ax+b/cx+d":for(a=(0,r.nSR)(-10,10,[0,1,-1]),u=(0,r.nSR)(-10,10,[0]),P=(0,r.nSR)(-10,10,[0,-1,1]),b=(0,r.nSR)(-10,10,[0]);P*c+b==0||P*o+b==0||P*h+b==0;)P=(0,r.nSR)(-10,10,[0,-1,1]);l=`\\dfrac{${a}x${(0,r.tPu)(u)}}{${P}x${(0,r.tPu)(b)}}`,m=`${x}(x) & ${(0,r.xau)(a*i[d][0]+u,P*i[d][0]+b)} & ${(0,r.xau)(a*i[d][1]+u,P*i[d][1]+b)} & ${(0,r.xau)(a*i[d][2]+u,P*i[d][2]+b)} \\\\\n`,f=`$${x}(${c})=\\dfrac{${a}\\times${(0,r.PMY)(c)}${(0,r.tPu)(u)}}{${P}\\times${(0,r.PMY)(c)}${(0,r.tPu)(b)}}=\\dfrac{${a*c}${(0,r.tPu)(u)}}{${P*c}${(0,r.tPu)(b)}}=\\dfrac{${a*c+u}}{${P*c+b}}`,1==(0,r.Md9)(a*c+u,P*c+b)?f+="$<br><br>":f+="="+(0,r.xau)(a*c+u,P*c+b)+"$<br><br>",f+=`$${x}(${o})=\\dfrac{${a}\\times${(0,r.PMY)(o)}${(0,r.tPu)(u)}}{${P}\\times${(0,r.PMY)(o)}${(0,r.tPu)(b)}}=\\dfrac{${a*o}${(0,r.tPu)(u)}}{${P*o}${(0,r.tPu)(b)}}=\\dfrac{${a*o+u}}{${P*o+b}}`,1==(0,r.Md9)(a*o+u,P*o+b)?f+="$<br><br>":f+="="+(0,r.xau)(a*o+u,P*o+b)+"$<br><br>",f+=`$${x}(${h})=\\dfrac{${a}\\times${(0,r.PMY)(h)}${(0,r.tPu)(u)}}{${P}\\times${(0,r.PMY)(h)}${(0,r.tPu)(b)}}=\\dfrac{${a*h}${(0,r.tPu)(u)}}{${P*h}${(0,r.tPu)(b)}}=\\dfrac{${a*h+u}}{${P*h+b}}`,1==(0,r.Md9)(a*h+u,P*h+b)?f+="$<br><br>":f+="="+(0,r.xau)(a*h+u,P*h+b)+"$<br><br>";break;case"(ax+b)(cx+d)":a=(0,r.nSR)(-5,5,[0,1,-1]),u=(0,r.nSR)(-5,5,[0]),P=(0,r.nSR)(-3,3,[0,-1,1]),b=(0,r.nSR)(-3,3,[0]),a<0&&u<0&&P<0&&b<0&&(b=(0,r.nSR)(1,3)),l=`(${a}x${(0,r.tPu)(u)})(${P}x${(0,r.tPu)(b)})`,m=`${x}(x) & ${(a*i[d][0]+u)*(P*i[d][0]+b)} & ${(a*i[d][1]+u)*(P*i[d][1]+b)} & ${(a*i[d][2]+u)*(P*i[d][2]+b)} \\\\\n`,f=`$${x}(${c})=\\left(${a}\\times${(0,r.PMY)(c)}${(0,r.tPu)(u)}\\right)\\left(${P}\\times${(0,r.PMY)(c)}${(0,r.tPu)(b)}\\right)=(${a*c}${(0,r.tPu)(u)})(${P*c}${(0,r.tPu)(b)})=${a*c+u}\\times ${(0,r.PMY)(P*c+b)}=${(a*c+u)*(P*c+b)}$<br>`,f+=`$${x}(${o})=\\left(${a}\\times${(0,r.PMY)(o)}${(0,r.tPu)(u)}\\right)\\left(${P}\\times${(0,r.PMY)(o)}${(0,r.tPu)(b)}\\right)=(${a*o}${(0,r.tPu)(u)})(${P*o}${(0,r.tPu)(b)})=${a*o+u}\\times ${(0,r.PMY)(P*o+b)}=${(a*o+u)*(P*o+b)}$<br>`,f+=`$${x}(${h})=\\left(${a}\\times${(0,r.PMY)(h)}${(0,r.tPu)(u)}\\right)\\left(${P}\\times${(0,r.PMY)(h)}${(0,r.tPu)(b)}\\right)=(${a*h}${(0,r.tPu)(u)})(${P*h}${(0,r.tPu)(b)})=${a*h+u}\\times ${(0,r.PMY)(P*h+b)}=${(a*h+u)*(P*h+b)}$<br>`;break;case"(ax+b)2":a=(0,r.nSR)(-3,3,[0,1,-1]),u=(0,r.nSR)(-3,3,[0]),l=`(${a}x${(0,r.tPu)(u)})^2`,m=`${x}(x) & ${(a*i[d][0]+u)**2} & ${(a*i[d][1]+u)**2} & ${(a*i[d][2]+u)**2} \\\\\n`,f=`$${x}(${c})=\\left(${a}\\times${(0,r.PMY)(c)}${(0,r.tPu)(u)}\\right)^2=(${a*c}${(0,r.tPu)(u)})^2=${(0,r.PMY)(a*c+u)}^2=${(a*c+u)**2}$<br>`,f+=`$${x}(${o})=\\left(${a}\\times${(0,r.PMY)(o)}${(0,r.tPu)(u)}\\right)^2=(${a*o}${(0,r.tPu)(u)})^2=${(0,r.PMY)(a*o+u)}^2=${(a*o+u)**2}$<br>`,f+=`$${x}(${h})=\\left(${a}\\times${(0,r.PMY)(h)}${(0,r.tPu)(u)}\\right)^2=(${a*h}${(0,r.tPu)(u)})^2=${(0,r.PMY)(a*h+u)}^2=${(a*h+u)**2}$<br>`}e=`On considère la fonction $${x}$ définie par $${x}:x\\mapsto ${l}$. Compléter le tableau de valeurs suivant.`,n="",e+="<br><br>",s.Do.isHtml?e+="$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|}\n":e+="$\\begin{array}{|l|c|c|c|}\n",e+="\\hline\n",e+=`x & ${i[d][0]} & ${i[d][1]} & ${i[d][2]} \\\\\n`,e+="\\hline\n",e+=`${x}(x) & \\phantom{-10} & \\phantom{-10} & \\phantom{-10} \\\\\n`,e+="\\hline\n",e+="\\end{array}\n$",n=s.Do.isHtml?"$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|}\n":"$\\begin{array}{|l|c|c|c|}\n",n+="\\hline\n",n+=`x & ${i[d][0]} & ${i[d][1]} & ${i[d][2]} \\\\\n`,n+="\\hline\n",n+=m,n+="\\hline\n",n+="\\end{array}\n$",this.correctionDetaillee&&(n+="<br><br>",n+=f),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(n),d++),M++}1==this.nbQuestions?(0,r.FRy)(this):(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : Fonctions affines\n2 : Polynome du second degré\n3 : Quotient\n4 : Produit \n5 : Mélange"]}},2006:($,t,i)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>e})}}]);
//# sourceMappingURL=3013.9ef6e87f9a9eee400a80.js.map