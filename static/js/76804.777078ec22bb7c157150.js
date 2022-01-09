"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[76804,25523],{76804:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>r,default:()=>o});var s=i(25523),n=i(25482);const r="Déterminer si des droites $(d)$ et $(d')$ sont parallèles, sécantes ou confondues :";function o(){s.default.call(this),this.titre=r,this.consigne="Déterminer si les droites $\\bm{(d)}$ et $\\bm{(d')}$ dont on donne ci-dessous des équations cartésiennes, sont parallèles, confondues ou sécantes.",this.nbQuestions=3,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=3,this.video="";const e=(0,n.SRM)(["type1","type1","type2"],this.nbQuestions);this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];for(let t,i,s,r,o,u,a,$,d,l=0,c=0;l<this.nbQuestions&&c<50;){switch(e[l]){case"type1":t=(0,n.nSR)(-5,5),i=(0,n.nSR)(-5,5),s=(0,n.nSR)(-5,5),o=(0,n.nSR)(-5,5),u=(0,n.nSR)(-5,5),a=(0,n.nSR)(-5,5),$="On donne : $(d) : ",0!==t&&($+=`${(0,n.y$x)(t,0)}`),1===i&&($+="+ y "),-1===i&&($+="- y "),1!==i&0!==i&-1!==i&&($+=`${(0,n.tPu)(i)} y `),0!==s&&($+=`${(0,n.tPu)(s)} `),$+="=0$  ",$+=" et  $(d') : ",0!==o&&($+=`${(0,n.y$x)(o,0)}`),1===u&&($+="+ y "),-1===u&&($+="- y "),1!==u&0!==u&-1!==u&&($+=`${(0,n.tPu)(a)} y `),0!==a&&($+=`${(0,n.tPu)(a)} `),$+="=0$",d="On sait qu'une droite $(d)$ d'équation cartésienne :",d+=" $(d) : ax+by+c=0$, avec $(a;b)\\neq (0;0)$.",d+="<br>admet un vecteur directeur de coordonnées :  ",d+="$\\vec {u} \\begin{pmatrix}-b\\\\a\\end{pmatrix}$.",d+=`<br>Comme on a d'après l'énoncé  : $a=${t}$ , $b=${i}$ , $c=${s}$ ,`,d+="<br> on en déduit que : $\\vec {u} \\begin{pmatrix} ",d+=0===i?"0":`-${(0,n.PMY)(i)}`,d+=`\\\\${t}\\end{pmatrix}$   est un vecteur directeur de $(d)$.`,d+=`<br>De même, appelons $\\vec {u'}$ le vecteur directeur de $(d')$. <br>Comme ici, on a : $a=${o}$ , $b=${u}$ , $c=${a}$ ,`,d+="<br> on en déduit que : $\\vec {u'} \\begin{pmatrix} ",d+=0===u?"0":`-${(0,n.PMY)(u)}`,d+=`\\\\${o}\\end{pmatrix}$`,d+="<br> Pour déterminer la position relative de $(d)$ et $(d')$, on étudie la colinéarité des deux vecteurs directeurs. ",d+="<br> Pour cela, on calcule leur déterminant : ",d+=`$Det\\big(\\vec u;\\vec {u'}\\big)=\\begin{vmatrix}${-i}&${-u}\\\\${t}&${o}\\end{vmatrix}=${(0,n.PMY)(-i)} \\times ${(0,n.PMY)(o)} - ${(0,n.PMY)(t)} \\times ${(0,n.PMY)(-u)}=${-i*o+t*u}$`,-i*o+t*u!=0?(d+="<br>On observe que le déterminant est non-nul. <br>Les vecteurs directeurs des deux droites ne sont donc pas colinéaires.",d+="<br>Les droites $(d)$ et $(d')$ ne sont donc pas parallèles."):(d+="<br>On observe que le déterminant est nul. <br>Les vecteurs directeurs des deux droites sont donc colinéaires.",d+="<br>Les droites $(d)$ et $(d')$ sont alors parallèles."),t*u==o*i&t*s==o*a&i*a==u*s&&(d+="On observe même que dans cette situation, les équations étant multiples l'une de l'autre, les deux droites sont confondues.");break;case"type2":t=(0,n.nSR)(-5,5),i=(0,n.nSR)(-5,5),s=(0,n.nSR)(-5,5),r=(0,n.nSR)(-2,2,0),o=t*r,u=i*r,a=(0,n.nSR)(-5,5),$="On donne : $(d) : ",0!==t&&($+=`${(0,n.y$x)(t,0)}`),1===i&&($+="+ y "),-1===i&&($+="- y "),1!==i&0!==i&-1!==i&&($+=`${(0,n.tPu)(i)} y `),0!==s&&($+=`${(0,n.tPu)(s)} `),$+="=0$  ",$+=" et  $(d') : ",0!==o&&($+=`${(0,n.y$x)(o,0)}`),1===u&&($+="+ y "),-1===u&&($+="- y "),1!==u&0!==u&-1!==u&&($+=`${(0,n.tPu)(a)} y `),0!==a&&($+=`${(0,n.tPu)(a)} `),$+="=0$",d="On sait qu'une équation cartésienne de droite de la forme :",d+=" $(d) : ax+by+c=0$, avec $(a;b)\\neq (0;0)$.",d+="<br>admet un vecteur directeur de coordonnées :  ",d+="$\\vec {u} \\begin{pmatrix}-b\\\\a\\end{pmatrix}$.",d+="<br>Soit $\\vec {u}$ le vecteur directeur de $(d)$ :",d+=`<br>Comme on a d'après l'énoncé  : $a=${t}$ , $b=${i}$ , $c=${s}$ `,d+=", on en déduit que : $\\vec {u} \\begin{pmatrix} ",d+=0===i?"0":`-${(0,n.PMY)(i)}`,d+=`\\\\${t}\\end{pmatrix}$`,d+=`<br>De même pour $(d')$ : $a=${o}$ , $b=${u}$ , $c=${a}$ `,d+=", on en déduit que : $\\vec {u'} \\begin{pmatrix} ",d+=0===u?"0":`-${(0,n.PMY)(u)}`,d+=`\\\\${o}\\end{pmatrix}$`,d+="<br> Pour déterminer la position relative de $(d)$ et $(d')$, on étudie la colinéarité des deux vecteurs directeurs. ",d+="<br> Pour cela, on calcule leur déterminant : ",d+=`$Det\\big(\\vec u;\\vec {u'}\\big)=\\begin{vmatrix}${-i}&${-u}\\\\${t}&${o}\\end{vmatrix}=${(0,n.PMY)(-i)} \\times ${(0,n.PMY)(o)} - ${(0,n.PMY)(t)} \\times ${(0,n.PMY)(-u)}=${-i*o+t*u}$`,-i*o+t*u!=0?(d+="<br>On observe que le déterminant est non-nul. <br>Les vecteurs directeurs des deux droites ne sont donc pas colinéaires.",d+="<br>Les droites $(d)$ et $(d')$ ne sont donc pas parallèles."):(d+="<br>On observe que le déterminant est nul. <br>Les vecteurs directeurs des deux droites sont donc colinéaires.",d+="<br>Les droites $(d)$ et $(d')$ sont alors parallèles."),t*u==o*i&t*s==o*a&i*a==u*s&&(d+="<br>On observe même que dans cette situation, les équations étant multiples l'une de l'autre, les deux droites sont confondues.")}this.questionJamaisPosee(l,t,i,s,r)&&(this.listeQuestions.push($),this.listeCorrections.push(d),l++),c++}(0,n.K1R)(this)}}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=76804.777078ec22bb7c157150.js.map