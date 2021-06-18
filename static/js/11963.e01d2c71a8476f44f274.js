(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[11963,71129],{11963:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>r,default:()=>o});var s=t(71129),n=t(63861);const r="Déterminer une équation cartésienne de droite à partir d'un point et d'un vecteur directeur.";function o(){s.default.call(this),this.titre=r,this.consigne="Déterminer une équation cartésienne de la droite $\\bm(d)$",this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.SRM)(["cartesienne1"],this.nbQuestions);for(let i,t,s,r,o,a,u=0,$=0;u<this.nbQuestions&&$<50;){switch(e[u]){case"cartesienne1":i=(0,n.nSR)(-5,5),t=(0,n.nSR)(-5,5),s=(0,n.nSR)(-5,5),r=(0,n.nSR)(-5,5),o=`passant par le point $A$ de coordonnées : $A(${i};${t})$ et ayant le vecteur $\\vec u \\begin{pmatrix}${s}\\\\${r}\\end{pmatrix}$ comme vecteur directeur.`,1===this.sup&&(o+="<br><i>On demande une rédaction utilisant un résultat de cours.</i>",a="On sait, d'après le cours, que si une droite $(d)$ admet un vecteur directeur de coordonnées :",a+=" $\\vec {u} \\begin{pmatrix}-b\\\\a\\end{pmatrix}$, ",a+="<br>alors une équation cartésienne de la droite $(d)$ est de la forme $ax+by+c=0$. ",a+=`<br>Avec les données de l'énoncé, $\\vec u \\begin{pmatrix}${s}\\\\${r}\\end{pmatrix}$,`,a+=` <br>on en déduit donc que :$-b = ${s}$ et $a=${r}$.`,a+=` <br>L'équation cartésienne est donc de la forme : $ ${r} x ${(0,n.Zvy)(-s)} y + c=0$. `,a+=`<br>On cherche maintenant la valeur correspondante de $c$. <br>On utilise pour cela que $A(${i};${t}) \\in(d)$. `,a+=` <br>$\\iff ${r} \\times ${(0,n.PMY)(i)} ${(0,n.tPu)(-s)} \\times ${(0,n.PMY)(t)}+ c=0$ `,a+=` <br>$\\iff  ${r*i} ${(0,n.tPu)(-s*t)} + c=0$ `,a+=` <br>$\\iff  c= ${-i*r+t*s}$ `,0===s?a+=` <br>Une équation cartésienne est donc de la forme : $ (d): ${(0,n.y$x)(r,0)} ${(0,n.tPu)(-i*r+t*s)}=0$ `:(1===s&&(a+=` <br>Une équation cartésienne est donc de la forme : $ (d): ${(0,n.y$x)(r,0)}-y ${(0,n.tPu)(-i*r+t*s)}=0$ `),-1===s&0!==r&&(a+=` <br>Une équation cartésienne est donc de la forme : $ (d): ${(0,n.y$x)(r,0)}+y ${(0,n.tPu)(-i*r+t*s)}=0$ `),-1===s&0===r&&(a+=` <br>Une équation cartésienne est donc de la forme : $ (d): y ${(0,n.tPu)(-i*r+t*s)}=0$ `),0!==s&1!==s&-1!==s&&(a+=` <br>Une équation cartésienne est donc de la forme : $ (d): ${(0,n.y$x)(r,-s)}y ${(0,n.tPu)(-i*r+t*s)}=0$ `))),2===this.sup&&(o+="<br><i>On demande une démonstration n'utilisant pas de résultat de cours.</i>",a="<br>Soit $M(x;y)$ un point du plan distinct de $A$.",a+="<br>$M(x;y) \\in (d)$",a+=" <br>$\\iff \\overrightarrow {AM}$ est un vecteur directeur de la droite $(d)$. ",a+=" <br>$\\iff \\overrightarrow {AM}$ et $\\vec u$ sont donc des vecteurs colinéaires. ",a+=" <br>$\\iff Det\\big(\\overrightarrow {AM};\\vec u\\big)=0$ <br>",a+=" <br>$\\iff \\begin{vmatrix}x-x_A&x_u\\\\y-y_A&y_u\\end{vmatrix}=0$ <br>",a+=`<br>$\\iff \\begin{vmatrix}x-${(0,n.PMY)(i)}&${s}\\\\y-${(0,n.PMY)(t)}&${r}\\end{vmatrix}=0$<br>`,a+=`<br>$\\iff (x-${(0,n.PMY)(i)})\\times ${r}-( y-${(0,n.PMY)(t)}) \\times ${(0,n.PMY)(s)}=0$`,a+=`<br>$\\iff ${r} x ${(0,n.Zvy)(-s)} y -${(0,n.PMY)(i)} \\times ${r} ${(0,n.tPu)(t)} \\times ${(0,n.PMY)(s)}=0$`,a+=` <br>Après réduction, une équation cartésienne est de la forme : $ (d): ${(0,n.y$x)(r,-s)}y ${(0,n.Zvy)(-i*r+t*s)}=0$ `)}-1===this.listeQuestions.indexOf(o)&&(this.listeQuestions.push(o),this.listeCorrections.push(a),u++),$++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type de correction :",2,"1 : Correction avec le cours\n2 : Correction avec la démonstration"]}},71129:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=11963.e01d2c71a8476f44f274.js.map