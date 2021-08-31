"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[38569,17007],{38569:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>$,amcReady:()=>l,amcType:()=>u,interactifReady:()=>h,interactifType:()=>c,default:()=>d});var s=t(17007),n=t(66170),o=t(30169),r=t(92329),a=t(75664);const $="Déterminer une fonction affine",l=!0,u="AMCOpenNum✖︎2",h=!0,c="mathLive";function d(){s.default.call(this),this.titre=$,this.interactifReady=h,this.interactifType=c,this.consigne="Donner l'expression des fonctions représentées",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,n.Do.isHtml?this.spacing=2:this.spacing=1,n.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.sup=1,this.sup2=3,this.lineaire=!1,this.listePackages="tkz-euclide",this.amcReady=l,this.amcType=u,this.nouvelleVersion=function(e){let i="",t=Math.pow(2,parseInt(this.sup)-1),s=parseInt(this.sup2);this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";const $=[];n.Do.fenetreMathalea2d=[-5.5,-5.5,5.5,5.5];const l=[];let u;n.Do.isAmc&&(s=1,t=1),l.push((0,o.nSR)(-3*t,3*t,0)),l.push((0,o.nSR)(-3*t,3*t,[l[0],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],l[2],0])),l.push((0,o.nSR)(-3*t,3*t,[l[0],l[1],l[2],l[3],0]));const h=[];for(let n=0;n<5;n++)u=this.lineaire?0:(0,o.nSR)(l[n]/t-1,1+l[n]/t,[l[n],0]),$.push([u,l[n]/t]);h[0]=(0,r.jZX)((0,r.xmu)(0,$[0][0]),$[0][1],"(d_1)","blue"),h[1]=(0,r.jZX)((0,r.xmu)(0,$[1][0]),$[1][1],"(d_2)","red"),h[2]=(0,r.jZX)((0,r.xmu)(0,$[2][0]),$[2][1],"(d_3)","green"),h[3]=(0,r.jZX)((0,r.xmu)(0,$[3][0]),$[3][1],"(d_4)","brown"),h[4]=(0,r.jZX)((0,r.xmu)(0,$[4][0]),$[4][1],"(d_5)","purple");const c=(0,r.sYn)({xMin:-6,yMin:-6,xMax:6,yMax:6}),d=[];d.push(c);for(let n=0;n<s;n++)d.push(h[n]);this.introduction=(0,r.iR9)({xmin:-5.5,ymin:-5.5,xmax:5.5,ymax:5.5,pixelsParCm:30,scale:.75},d);for(let n=0;n<s;n++)this.listeQuestions.push(`Déterminer l'expression de la fonction $f_${n+1}$ représentée par la droite $(d_${n+1})$.`+(0,a.G5)(this,n)),this.lineaire||0===$[n][0]?(i+=`La droite $(d_${n+1})$ passe par l'origine. Elle représente donc la fonction linéaire $f_${n+1}(x)=ax$ dont il faut déterminer le coefficient a.<br>$(d_${n+1})$ passe par le point de coordonnées $(1;${(0,o.euh)($[n][1])})$ donc $f_${n+1}(1)=${(0,o.euh)($[n][1])}$ c'est à dire $a\\times 1=${(0,o.euh)($[n][1])}$ donc $a=${(0,o.euh)($[n][1])}\\div 1$ d'où $a=${(0,o.euh)($[n][1])}$. Ainsi $f_${n+1}(x)=${(0,o.y$x)($[n][1],0)}$.`,this.listeCorrections.push(`La droite $(d_${n+1})$ passe par l'origine. Elle représente donc la fonction linéaire $f_${n+1}(x)=ax$ dont il faut déterminer le coefficient a.<br>$(d_${n+1})$ passe par le point de coordonnées $(1;${(0,o.euh)($[n][1])})$ donc $f_${n+1}(1)=${(0,o.euh)($[n][1])}$ c'est à dire $a\\times 1=${(0,o.euh)($[n][1])}$ donc $a=${(0,o.euh)($[n][1])}\\div 1$ d'où $a=${(0,o.euh)($[n][1])}$. Ainsi $f_${n+1}(x)=${(0,o.y$x)($[n][1],0)}$.`),(0,a.Iq)(this,n,(0,o.y$x)($[n][1],0))):(i+=`La droite $d_${n+1}$ passe par le point de coordonnées $(0;${(0,o.euh)($[n][0])})$. Elle représente donc la fonction affine $f_${n+1}(x)=ax+b$ dont la constante $b$ est égale à $f_${n+1}(0)=a\\times 0+b$, c'est à dire  $${(0,o.euh)($[n][0])}=0+b$ donc $b=${(0,o.euh)($[n][0])}$.<br> De plus $(d_${n+1})$ passe par le point de coordonnées $(1;${(0,o.euh)($[n][1]+$[n][0])})$ donc $f_${n+1}(1)=${(0,o.euh)($[n][1]+$[n][0])}=a\\times 1${(0,o.tPu)($[n][0])}=a${(0,o.tPu)($[n][0])}$ donc $a=${(0,o.euh)($[n][1]+$[n][0])}${(0,o.tPu)(-$[n][0])}=${(0,o.euh)($[n][1])}$. Ainsi $f_${n+1}(x)=${(0,o.y$x)($[n][1],$[n][0])}$.`,this.listeCorrections.push(`La droite $d_${n+1}$ passe par le point de coordonnées $(0;${(0,o.euh)($[n][0])})$. Elle représente donc la fonction affine $f_${n+1}(x)=ax+b$ dont la constante $b$ est égale à $f_${n+1}(0)=a\\times 0+b$, c'est à dire  $${(0,o.euh)($[n][0])}=0+b$ donc $b=${(0,o.euh)($[n][0])}$.<br> De plus $(d_${n+1})$ passe par le point de coordonnées $(1;${(0,o.euh)($[n][1]+$[n][0])})$ donc $f_${n+1}(1)=${(0,o.euh)($[n][1]+$[n][0])}=a\\times 1${(0,o.tPu)($[n][0])}=a${(0,o.tPu)($[n][0])}$ donc $a=${(0,o.euh)($[n][1]+$[n][0])}${(0,o.tPu)(-$[n][0])}=${(0,o.euh)($[n][1])}$. Ainsi $f_${n+1}(x)=${(0,o.y$x)($[n][1],$[n][0])}$.`),(0,a.Iq)(this,n,(0,o.y$x)($[n][1],$[n][0])));(0,o.K1R)(this),this.lineaire?(i="Il s’agit de fonctions linéaires, elles sont donc de la forme $f(x)=ax$, $a$ étant la pente de la droite.\\ \n"+i,this.contenuCorrection="Il s’agit de fonctions linéaires, elles sont donc de la forme $f(x)=ax$, $a$ étant la "+(0,o.GOC)(e,1,"pente","pente d'une droite","La pente (le a de y=ax ou y=ax+b) d'une droite donne le taux d'accroissement de y par rapport à x : lorsque x augmente de 1, alors y augmente de a.")+" de la droite.\n"+this.contenuCorrection):(i="Il s’agit de fonctions affines, elles sont donc de la forme $f(x)=ax+b$, $b$ étant l’ordonnée à l’origine et $a$ la pente de la droite.\\\n"+i,this.contenuCorrection="Il s’agit de fonctions affines, elles sont donc de la forme $f(x)=ax+b$, $b$ étant l’ordonnée à l’origine et $a$ la pente de la droite.\n"+this.contenuCorrection),n.Do.isAmc&&(this.autoCorrection[0]={enonce:"Déterminer l'expression  de la fonction représentée ci dessous : <br>"+(0,r.iR9)({xmin:-5.5,ymin:-5.5,xmax:5.5,ymax:5.5,pixelsParCm:30,scale:.5},d)+"<br>",propositions:[{texte:i,statut:2}],reponse:{texte:"coefficient",valeur:l[0],param:{digits:1,decimals:0,signe:!0,exposantNbChiffres:0,exposantSigne:!1,approx:0}},reponse2:{texte:"ordonnée \\\\\nà l'origine",valeur:$[0][0],param:{digits:1,decimals:0,signe:!0,exposantNbChiffres:0,exposantSigne:!1,approx:0}}})},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Coefficient directeur entier\n2 : Coefficient directeur 'en demis'\n3 : Coefficient directeur 'en quarts'"],this.besoinFormulaire2Numerique=["Nombre de droites (1 à 5)",5]}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=38569.bf49ee540dfe5503f3f8.js.map