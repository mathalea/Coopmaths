"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[46478,25523],{25523:(e,t,i)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const n of t)void 0!==n&&(i+=n.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>n})},46478:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>o,interactifReady:()=>r,interactifType:()=>l,dateDePublication:()=>c,default:()=>f});var n=i(25523),s=i(41154),$=i(25482),a=i(11945);const o="Second degré variations (QCM)",r=!0,l="qcm",c="1/11/2021";function f(){n.default.call(this),this.nbQuestions=1,this.nouvelleVersion=function(){let e,t,i,n,o,r,l;switch(this.listeQuestions=[],this.listeCorrections=[],this.spacing=1,(0,$.q$q)([1,2,3,4,5,6])){case 1:i=(0,$.nSR)(-5,5,0),n=(0,$.nSR)(-9,9),r=(0,$.nSR)(-9,9,0),o=(0,s.Pj)(-n,2*i),l=(0,s.Pj)(n,2*i),e=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${(0,$._YQ)(0,i,n,r)}$.<br> \n            Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`,this.autoCorrection[0]=0===n?{enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i>0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:i<0},{texte:`$\\bigg[${i}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${i} \\bigg]$ `,statut:0===i}]}:{enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i>0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:i<0},{texte:`$\\bigg[${l.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,t=i>0?`Comme le coefficient $${i}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n          <br> $-\\dfrac{b}{2a}=-\\dfrac{${n}}{2\\times ${(0,$.PMY)(i)}}=${o.texFractionSimplifiee}$.\n          <br>Ainsi, $f$ est croissante sur $\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `:`Comme le coefficient $${i}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n          <br>$-\\dfrac{b}{2a}=-\\dfrac{${n}}{2\\times ${(0,$.PMY)(i)}}=${o.texFractionSimplifiee}$.\n          <br>Ainsi, $f$ est croissante sur $\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$.    `;break;case 2:i=(0,$.nSR)(-10,10,0),n=(0,$.nSR)(-5,5,0),r=(0,$.nSR)(-9,9,0),e=1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n          <br>       Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:-1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=-(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n            <br>   Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n            <br>  Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`,this.autoCorrection[0]={enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${-n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i>0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${-n} \\bigg]$ `,statut:i<0},{texte:`$\\bigg[${n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${n} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,i>0&&(t=n>0?`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>  $f(x)=a(x-\\alpha)^2+\\beta$\n        <br>    Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n        <br>  Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}=\n       ${(0,$.y$x)(0,i)}(x-(\\underbrace{-${n}}_{\\alpha}))^2${(0,$.tPu)(r)}$, d'où $\\alpha=-${n}$.\n       <br> Le coefficient $${i}$ devant la parenthèse est strictement positif, la fonction est donc \n       d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n       <br>  Ainsi, $f$ est croissante sur $\\bigg[-${n} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `:`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>$f(x)=a(x-\\alpha)^2+\\beta$\n         <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n         <br>\n         Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$, d'où $\\alpha=${-n}$.\n         <br>  Le coefficient $${i}$ devant la parenthèse est strictement positif, la fonction est donc \n        d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n        <br>  Ainsi, $f$ est croissante sur $\\bigg[${-n} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `),i<0&&(t=n>0?`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>$f(x)=a(x-\\alpha)^2+\\beta$<br>\n        Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n        <br> Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}=\n       ${(0,$.y$x)(0,i)}(x-(\\underbrace{-${n}}_{\\alpha}))^2${(0,$.tPu)(r)}$, d'où $\\alpha=-${n}$.\n       <br> Comme le coefficient $${i}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n       <br>    Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} -${n}  \\bigg]$.    `:`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>  $f(x)=a(x-\\alpha)^2+\\beta$\n            <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n         <br> Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$, d'où $\\alpha=${-n}$.\n         <br> Comme le coefficient $${i}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n         Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${-n}  \\bigg]$.    `);break;case 3:i=(0,$.nSR)(-5,5,0),n=(0,$.nSR)(-9,9),r=(0,$.nSR)(-9,9,0),l=(0,s.Pj)(n+r,2),o=(0,s.Pj)(-(n+r),2),e=1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$. \n          <br>Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:e=-1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=-(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$.\n            <br>  Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${i}(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$.\n            <br>     Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`,this.autoCorrection[0]={enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i>0},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${o.texFractionSimplifiee} \\bigg]$ `,statut:i<0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,t=i<0?`On reconnaît une forme factorisée d'une fonction polynôme du second degré : \n          <br>       $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.\n          <br>         L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-n}+${(0,$.PMY)(-r)}}{2}= ${o.texFractionSimplifiee}$.\n          <br>           Comme le coefficient $${i}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n              <br>           Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${o.texFractionSimplifiee}  \\bigg]$.    `:`On reconnaît une forme factorisée d'une fonction polynôme du second degré : \n          <br>      $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.\n          <br>    L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-n}+${(0,$.PMY)(-r)}}{2}= ${o.texFractionSimplifiee}$.\n          <br>            Comme le coefficient $${i}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n            <br>     Ainsi, $f$ est croissante sur $\\bigg[${o.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `;break;case 4:i=(0,$.nSR)(-5,5,0),n=(0,$.nSR)(-9,9),r=(0,$.nSR)(-9,9,0),o=(0,s.Pj)(-n,2*i),l=(0,s.Pj)(n,2*i),e=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${(0,$._YQ)(0,i,n,r)}$.\n        <br>          Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`,this.autoCorrection[0]=0===n?{enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i<0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:i>0},{texte:`$\\bigg[${i}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${i} \\bigg]$ `,statut:0===i}]}:{enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i<0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:i>0},{texte:`$\\bigg[${l.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,t=i>0?`Comme le coefficient $${i}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n          <br>         $-\\dfrac{b}{2a}=-\\dfrac{${n}}{2\\times ${(0,$.PMY)(i)}}=${o.texFractionSimplifiee}$.\n         <br>          Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${o.texFractionSimplifiee} \\bigg]$.    `:`Comme le coefficient $${i}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n          <br>  $-\\dfrac{b}{2a}=-\\dfrac{${n}}{2\\times ${(0,$.PMY)(i)}}=${o.texFractionSimplifiee}$.\n  <br>   Ainsi, $f$ est décroissante sur $\\bigg[${o.texFractionSimplifiee}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `;break;case 5:i=(0,$.nSR)(-10,10,0),n=(0,$.nSR)(-5,5,0),r=(0,$.nSR)(-9,9,0),e=1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n          <br>               Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:-1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=-(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n            <br>               Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$.\n            <br>         Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`,this.autoCorrection[0]={enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${-n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i<0},{texte:`$\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${-n} \\bigg]$ `,statut:i>0},{texte:`$\\bigg[${n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${n} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,i>0&&(t=n>0?`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>        $f(x)=a(x-\\alpha)^2+\\beta$<br>\n        Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n        <br>       Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}=\n       ${(0,$.y$x)(0,i)}(x-(\\underbrace{-${n}}_{\\alpha}))^2${(0,$.tPu)(r)}$, d'où $\\alpha=-${n}$.\n       <br>       Le coefficient $${i}$ devant la parenthèse est strictement positif, la fonction est donc \n       d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n       <br>    Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${-n} \\bigg]$.    `:`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>         $f(x)=a(x-\\alpha)^2+\\beta$\n            <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n            <br>         Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$, d'où $\\alpha=${-n}$.\n            <br>        Le coefficient $${i}$ devant la parenthèse est strictement positif, la fonction est donc \n        d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n        <br>           Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${(0,$.sp)(1)} ;${(0,$.sp)(1)}${-n} \\bigg]$.    `),i<0&&(t=n>0?`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>        $f(x)=a(x-\\alpha)^2+\\beta$\n        <br>        Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n        <br>       Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}=\n       ${(0,$.y$x)(0,i)}(x-(\\underbrace{-${n}}_{\\alpha}))^2${(0,$.tPu)(r)}$, d'où $\\alpha=-${n}$.\n       <br>       Comme le coefficient $${i}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n       <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `:`On reconnaît la forme canonique d'une fonction polynôme du second degré : \n            <br>         $f(x)=a(x-\\alpha)^2+\\beta$\n         <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.\n         <br>         Ici,  $f(x)=${(0,$.y$x)(0,i)}(${(0,$.y$x)(1,n)})^2${(0,$.tPu)(r)}$, d'où $\\alpha=${-n}$.\n         <br>         Comme le coefficient $${i}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n         <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-n}${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `);break;case 6:i=(0,$.nSR)(-5,5,0),n=(0,$.nSR)(-9,9),r=(0,$.nSR)(-9,9,0),l=(0,s.Pj)(n+r,2),o=(0,s.Pj)(-(n+r),2),e=1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$.\n          <br> Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:e=-1===i?`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=-(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$.\n            <br>                           Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${i}(${(0,$.y$x)(1,n)})(${(0,$.y$x)(1,r)})$.\n            <br>                           Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`,this.autoCorrection[0]={enonce:e,options:{vertical:!0},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:i<0},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${o.texFractionSimplifiee} \\bigg]$ `,statut:i>0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$ `,statut:0===i},{texte:`$\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:0===i}]},e+=(0,a.l3)(this,0).texte,t=i<0?`On reconnaît une forme factorisée d'une fonction polynôme du second degré : \n          <br>              $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.\n          <br>              L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-n}+${(0,$.PMY)(-r)}}{2}= ${o.texFractionSimplifiee}$.\n              <br>              Comme le coefficient $${i}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").\n              <br>              Ainsi, $f$ est décroissante sur $\\bigg[${o.texFractionSimplifiee} ${(0,$.sp)(1)} ;${(0,$.sp)(1)} +\\infty\\bigg[$.    `:`On reconnaît une forme factorisée d'une fonction polynôme du second degré : \n          <br>            $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.\n          <br> L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-n}+${(0,$.PMY)(-r)}}{2}= ${o.texFractionSimplifiee}$.\n            <br>            Comme le coefficient $${i}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").\n            <br> Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${(0,$.sp)(1)} ;${(0,$.sp)(1)} ${o.texFractionSimplifiee} \\bigg]$.    `}this.listeQuestions.push(e),this.listeCorrections.push(t),(0,$.K1R)(this)}}}}]);
//# sourceMappingURL=46478.ac0c1f0f020d5591a671.js.map