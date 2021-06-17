(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6848,7567],{96848:(t,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>r,default:()=>c});var s=i(67567),n=i(24477);const r="Equations résolvantes pour le théorème de Thalès";function c(){let t;s.default.call(this),this.titre=r,this.debug=!1,this.debug?this.nbQuestions=4:this.nbQuestions=2,this.sup=1,this.consigne="Résoudre les équations suivantes.",this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacing=3:this.spacing=2,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.listePackages="bclogo",this.nouvelleVersion=function(){function e(t,e,i,s,r){let c,o="";return t?(i==s&&(o=`Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${r}=${e}$ !`,c=(0,n.KUN)(o,"nombres","Keep Cool Guy !")),s==e&&(o=`Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${r}=${i}$ !`,c=(0,n.KUN)(o,"nombres","Keep Cool Guy !"))):c="",c}t=this.debug?[0,1,2,3]:(0,n.TVQ)([(0,n.q$q)([0,1]),(0,n.q$q)([2,3])]),this.listeQuestions=[],this.listeCorrections=[];let i=(0,n.bqK)(t,this.nbQuestions);for(let t,s,r=0,c=0;r<this.nbQuestions&&c<50;){let o,a,u,h=[1,1,1];for(;a%2!=0||a%5!=0;)a=(0,n.nSR)(11,99);switch(this.sup=Number(this.sup),this.sup){case 1:o=[1,1,1],h[0]=(0,n.nSR)(2,9),h[1]=(0,n.nSR)(2,9,h[0]),h[2]=(0,n.q$q)([2,4,5,8],[h[0],h[1]]);break;case 2:o=[(0,n.q$q)([1,-1]),(0,n.q$q)([1,-1]),(0,n.q$q)([1,-1])],h[0]=(0,n.nSR)(2,9),h[1]=(0,n.nSR)(2,9,h[0]),h[2]=(0,n.q$q)([2,4,5,8],[h[0],h[1]]);break;case 3:o=[.1,.1,.1],h[0]=(0,n.nSR)(2,9),h[1]=(0,n.nSR)(2,9,h[0]),h[2]=a;break;case 4:h[0]=(0,n.nSR)(2,9),h[1]=(0,n.nSR)(2,9,h[0]),h[2]=(0,n.q$q)([2,4,5,8],[h[0],h[1]]);let t=(0,n.q$q)([{c:[1,1,1],na:[h[0],h[1],h[2]]},{c:[(0,n.q$q)([1,-1]),(0,n.q$q)([1,-1]),(0,n.q$q)([1,-1])],na:[h[0],h[1],h[2]]},{c:[.1,.1,.1],na:[(0,n.nSR)(11,99),(0,n.nSR)(11,99),a]}]);o=t.c,h=t.na}u="4L15-1"==this.exo?(0,n.q$q)(["r","s","t","u","v","w","x","y","z"]):"4P10-2"==this.exo?["?"]:(0,n.q$q)(["x","y","GO","AB","z","GA","BU","ZO","ME"]);let b,l,$={a:(0,n.n0o)(h[0]*o[0]),b:(0,n.n0o)(h[1]*o[1]),c:(0,n.n0o)(h[2]*o[2]),inc:u},d=[{eq:`\\dfrac{${$.inc}}{${(0,n.euh)($.b)}}=\\dfrac{${(0,n.euh)($.a)}}{${(0,n.euh)($.c)}}`,tab:(0,n.DDO)([$.inc,$.a],[$.b],[$.c]),a:$.a,b:$.b,c:$.c,inc:$.inc,trivial:$.b==$.c||$.c==$.a},{eq:`\\dfrac{${(0,n.euh)($.a)}}{${(0,n.euh)($.c)}}=\\dfrac{${$.inc}}{${(0,n.euh)($.b)}}`,tab:(0,n.DDO)([$.a,$.inc],[$.c],[$.b]),a:$.a,b:$.b,c:$.c,inc:$.inc,trivial:$.b==$.c||$.c==$.a},{eq:`\\dfrac{${(0,n.euh)($.b)}}{${$.inc}}=\\dfrac{${(0,n.euh)($.c)}}{${(0,n.euh)($.a)}}`,tab:(0,n.DDO)([$.b,$.c],[$.inc],[$.a]),a:$.a,b:$.b,c:$.c,inc:$.inc,trivial:$.b==$.c||$.c==$.a},{eq:`\\dfrac{${(0,n.euh)($.c)}}{${(0,n.euh)($.a)}}=\\dfrac{${(0,n.euh)($.b)}}{${$.inc}}`,tab:(0,n.DDO)([$.c,$.b],[$.a],[$.inc]),a:$.a,b:$.b,c:$.c,inc:$.inc,trivial:$.b==$.c||$.c==$.a}],q=[];for(let t=0;t<d.length;t++)"4P10-2"==this.exo?(b=`${d[t].tab}`,l=`${d[t].tab} <br> Le tableau ci-dessus est un tableau de proportionnalité, pour déterminer la quatrième proportionnelle il suffit par exemple de résoudre l'équation suivante : <br>`):(b=`$${d[t].eq}$`,l=""),q.push({enonce:b,question:"",correction:`${l}\n\t\t\t\t\t\t$${d[t].eq}$<br>\n\t\t\t\t\t\t${(0,n.MZ9)("Les produits en croix sont égaux.")}<br>\n\t\t\t\t\t\t$${(0,n.euh)(d[t].c)}\\times ${d[t].inc} = ${(0,n.euh)(d[t].a)}\\times ${(0,n.euh)(d[t].b)}$<br>\n\t\t\t\t\t\t${(0,n.MZ9)(`On divise les deux membres par ${(0,n.euh)(d[t].c)}`)}.<br>\n\t\t\t\t\t\t$\\dfrac{${(0,n.euh)(d[t].c)}\\times ${d[t].inc}}{${(0,n.euh)(d[t].c)}}= \\dfrac{${(0,n.euh)(d[t].a)}\\times ${(0,n.euh)(d[t].b)}}{${(0,n.euh)(d[t].c)}}$<br>\n\t\t\t\t\t\t${(0,n.MZ9)("On simplifie et on calcule.")}<br>\n\t\t\t\t\t\t$${d[t].inc}=${(0,n.euh)((0,n.n0o)(Number(d[t].b)*Number(d[t].a)/Number(d[t].c)))}$\n\t\t\t\t\t\t${e(d[t].trivial,(0,n.euh)(d[t].a),(0,n.euh)(d[t].b),(0,n.euh)(d[t].c),d[t].inc)}\n\t\t\t\t\t`});switch(i[r]){case 0:t=`${q[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${q[0].correction}`,t+="             ",s=""):s=`${q[0].correction}`;break;case 1:t=`${q[1].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${q[1].correction}`,s=""):s=`${q[1].correction}`;break;case 2:t=`${q[2].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${q[2].correction}`,s=""):s=`${q[2].correction}`;break;case 3:t=`${q[3].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${q[3].correction}`,s=""):s=`${q[3].correction}`}-1==this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),r++),c++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type de nombres",4,"1 : Entiers naturels\n2 : Entiers relatifs\n3 : Décimaux\n4 : Mélange"]}},67567:(t,e,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>s})}}]);