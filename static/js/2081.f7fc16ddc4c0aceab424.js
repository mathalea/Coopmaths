(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2081],{32081:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>$,default:()=>l});var n=i(75216),s=i(89459),o=i(55339),r=i(31935),a=i(1328);const $="Déterminer une fonction affine";function l(){n.default.call(this),this.titre=$,this.consigne="Donner l'expression des fonctions représentées",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,s.Do.isHtml?this.spacing=2:this.spacing=1,s.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.sup=1,this.sup2=3,this.lineaire=!1,this.listePackages="tkz-euclide",this.nouvelleVersion=function(e){const t=Math.pow(2,parseInt(this.sup)-1),i=parseInt(this.sup2);this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";const n=[];let $;const l=[];this.lineaire?(l.push((0,o.nSR)(-3*t,3*t,[0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],l[2],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],l[2],l[3],0]))):(l.push((0,o.nSR)(-2*t,2*t)),l.push((0,o.nSR)(-2*t,2*t,[l[0]])),l.push((0,o.nSR)(-2*t,2*t,[l[0],l[1]])),l.push((0,o.nSR)(-2*t,2*t,[l[0],l[1],l[2]])),l.push((0,o.nSR)(-2*t,2*t,[l[0],l[1],l[2],l[3]])));for(let s=0;s<5;s++)$=this.lineaire?0:(0,o.nSR)(l[s]/t-1,1+l[s]/t),n.push([$,l[s]/t]);if(s.Do.isHtml){const e=(0,a.Wj)().viewbox(0,0,500,500).size("100%","100%");(0,r.oE)(e,-5,5,-5,5,t,t,500,500,!0),(0,r.m0)(e,500,500,-5,5,-5,5,n[0][0],n[0][1],"blue","(d1)"),i>1&&(0,r.m0)(e,500,500,-5,5,-5,5,n[1][0],n[1][1],"red","(d2)"),i>2&&(0,r.m0)(e,500,500,-5,5,-5,5,n[2][0],n[2][1],"green","(d3)"),i>3&&(0,r.m0)(e,500,500,-5,5,-5,5,n[3][0],n[3][1],"brown","(d4)"),i>4&&(0,r.m0)(e,500,500,-5,5,-5,5,n[4][0],n[4][1],"purple","(d5)"),this.consigne=`<div style="width: 50%; display : table ">${e.svg()}</div>`}else{let e="\\begin{tikzpicture}";e+=(0,r.d1)(-5,5,-5,5,t,t,!0),e+=(0,r.tv)(-5,5,-5,5,n[0][0],n[0][1],"blue","d_1"),i>1&&(e+=(0,r.tv)(-5,5,-5,5,n[1][0],n[1][1],"red","d_2")),i>2&&(e+=(0,r.tv)(-5,5,-5,5,n[2][0],n[2][1],"green","d_3")),i>3&&(e+=(0,r.tv)(-5,5,-5,5,n[3][0],n[3][1],"brown","d_4")),i>4&&(e+=(0,r.tv)(-5,5,-5,5,n[4][0],n[4][1],"purple","d_5")),e+="\n\t \\end{tikzpicture}",this.listeQuestions.push(e)}for(let s=0;s<i;s++)this.listeQuestions.push(`Déterminer l'expression de la fonction $f_${s+1}$ représentée par la droite $(d_${s+1})$.`),this.lineaire||0===n[s][0]?this.listeCorrections.push(`La droite $(d_${s+1})$ passe par l'origine. Elle représente donc la fonction linéaire $f_${s+1}(x)=ax$ dont il faut déterminer le coefficient a.<br>$(d_${s+1})$ passe par le point de coordonnées $(1;${(0,o.euh)(n[s][1])})$ donc $f_${s+1}(1)=${(0,o.euh)(n[s][1])}$ c'est à dire $a\\times 1=${(0,o.euh)(n[s][1])}$ donc $a=${(0,o.euh)(n[s][1])}\\div 1$ d'où $a=${(0,o.euh)(n[s][1])}$. Ainsi $f_${s+1}(x)=${(0,o.y$x)(n[s][1],0)}$.`):this.listeCorrections.push(`La droite $d_${s+1}$ passe par le point de coordonnées $(0;${(0,o.euh)(n[s][0])})$. Elle représente donc la fonction affine $f_${s+1}(x)=ax+b$ dont la constante $b$ est égale à $f_${s+1}(0)=a\\times 0+b$, c'est à dire  $${(0,o.euh)(n[s][0])}=0+b$ donc $b=${(0,o.euh)(n[s][0])}$.<br> De plus $(d_${s+1})$ passe par le point de coordonnées $(1;${(0,o.euh)(n[s][1]+n[s][0])})$ donc $f_${s+1}(1)=${(0,o.euh)(n[s][1]+n[s][0])}=a\\times 1${(0,o.tPu)(n[s][0])}=a${(0,o.tPu)(n[s][0])}$ donc $a=${(0,o.euh)(n[s][1]+n[s][0])}${(0,o.tPu)(-n[s][0])}=${(0,o.euh)(n[s][1])}$. Ainsi $f_${s+1}(x)=${(0,o.y$x)(n[s][1],n[s][0])}$.`);(0,o.FRy)(this),this.lineaire?this.contenuCorrection="Il s’agit de fonctions linéaires, elles sont donc de la forme $f(x)=ax$, $a$ étant la "+(0,o.GOC)(e,1,"pente","pente d'une droite","La pente (le a de y=ax ou y=ax+b) d'une droite donne le taux d'accroissement de y par rapport à x : lorsque x augmente de 1, alors y augmente de a.")+" de la droite.\n"+this.contenuCorrection:this.contenuCorrection="Il s’agit de fonctions affines, elles sont donc de la forme $f(x)=ax+b$, $b$ étant l’ordonnée à l’origine et $a$ la pente de la droite.\n"+this.contenuCorrection},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Coefficient directeur entier\n2 : Coefficient directeur 'en demis'\n3 : Coefficient directeur 'en quarts'"],this.besoinFormulaire2Numerique=["Nombre de droites (1 à 5)",5]}}}]);
//# sourceMappingURL=2081.f7fc16ddc4c0aceab424.js.map