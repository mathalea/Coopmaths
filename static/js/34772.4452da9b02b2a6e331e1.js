"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[34772,25523],{34772:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>u,interactifReady:()=>l,interactifType:()=>c,amcReady:()=>d,amcType:()=>h,default:()=>p});var s=t(25523),r=t(25482),n=t(71250),o=t(11945),a=t(22380);const u="Lecture graphique d’une fonction affine",l=!0,c="mathLive",d=!0,h="AMCHybride";function p(){s.default.call(this),this.titre=u,this.consigne="",this.nbQuestions=3,this.tailleDiaporama=3,this.video="",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.spacingCorr=1,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const e=(0,n.Ots)("O",-.5,-.5,"milieu","black",1);this.sup=parseInt(this.sup);for(let i,t,s,u,l,c,d,h,p,m,b,$,x,f=0,g=0;f<this.nbQuestions&&g<50;)l=(0,n.sYn)(),1===this.sup&&(t=(0,r.nSR)(0,10),t-=5,s=(0,r.nSR)(0,10),s-=5,0===t&&0===s&&(t=1),d=(0,n.VTK)(t,-1,s),d.color="red",d.epaisseur=2,$="Déterminer graphiquement l'expression algébrique de la fonction affine $f$ représentée ci-dessus :<br>",$+=(0,n.iR9)({xmin:-6,ymin:-6,xmax:6,ymax:6},l,d,e),a.Do.isAmc?this.autoCorrection[f]={enonce:$,propositions:[{type:"AMCNum",propositions:[{texte:`$f(x)=${(0,r.y$x)(t,s)}$`,statut:"",reponse:{texte:"coefficient a de $y=ax+b$",valeur:t,param:{digits:1,decimals:0,signe:!0,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"valeur b de $y=ax+b$",valeur:s,param:{digits:1,decimals:0,signe:!0,approx:0}}}]}]}:this.interactif&&($+="<br>$f(x) =$"+(0,o.G5)(this,f,"largeur25 inline"),(0,o.Iq)(this,f,`${(0,r.y$x)(t,s)}`)),x="On sait que l'expression algébrique d'une fonction affine est de la forme :$f(x)=ax+b$, avec $a$ et $b$ deux réels.<br>",x+="Le premier coefficient qu'on peut facilement lire graphiquement est $b$, l'ordonnée à l'origine de la droite.<br>",x+=`On lit ici que le point $(0;${s}) \\in \\mathcal{C_f}$.<br>`,x+=`On peut alors conclure que l'ordonnée à l'origine est : $${s}$. <br>`,x+="On peut lire le coefficient directeur de la droite, en lisant le déplacement vertical correspondant à un déplacement horizontal d'une unité .<br>",x+=`On lit alors que le coefficient directeur de la droite est : $${t}$.<br>`,x+=" On peut en déduire que l'expression de la fonction $f$ est",x+=`$f(x)=${(0,r.y$x)(t,s)}$<br>`,x+=(0,n.iR9)({xmin:-6,ymin:-6,xmax:6,ymax:6},l,d,e)),2===this.sup&&(t=(0,r.nSR)(-5,5,[0]),s=(0,r.nSR)(-5,5),u=(0,r.nSR)(2,5,[t,2*t]),l=(0,n.sYn)(),d=(0,n.VTK)(t/u,-1,s),d.color="red",d.epaisseur=2,$="A partir de la représentation graphique de la droite ci-dessous, donner par lecture graphique son équation réduite",$+=(0,n.iR9)({xmin:-6,ymin:-6,xmax:6,ymax:6},l,d,e),x="On sait que l'équation réduite d'une droite non verticale est de la forme : $y= ax+b$ avec $a$ et $b$ deux réels non tous deux nuls.<br>",x+="Le premier coefficient à lire graphiquement est $b$, l'ordonnée à l'origine de la droite.<br>",x+="C'est l'ordonnée du point d'intersection de la droite avec l'axe des ordonnées.<br>",x+=`On lit ici que : $A(0;${s}) \\in (d)$.<br>`,x+=`On peut alors conclure que l'ordonnée à l'origine est : $b=${s}$. <br>`,x+="On peut lire ensuite le coefficient directeur $a$ de la droite $(d)$.<br>",x+="On sait que $a=\\dfrac{\\text{Dénivelé vertical}}{\\text{Déplacement horizontal}}$",x+="<br>On cherche un déplacement horizontal (en bleu) correspondant à un déplacement vertical entier (en vert).",x+=`<br>On lit que pour un déplacement vers la droite de ${(0,r.PH8)(u+" unités","blue")}, il faut `,t>0&&(x+="monter de "),t<0&&(x+="descendre de "),x+=`${(0,r.PH8)(Math.abs(t)+" unités","green")}.`,x+=`<br>Il vient : $a=${(0,r.qaf)((0,r.b1)(t,"green"),(0,r.b1)(u,"blue"))}`,c=(0,r.Md9)(t,u),1!==c&&(t%u==0?x+="="+t/u:(t/=c,u/=c,x+=`=${(0,r.qaf)((0,r.b1)(t,"green"),(0,r.b1)(u,"blue"))}`)),x+="$",x+="<br>On peut en déduire que l'équation réduite de la droite $(d)$ est : $y= ",t===u&&(x+="x"),t===-u&&(x+="-x"),t!==u&t!==-u&&(x+=`${(0,r.xau)(t,u)}x`),0!==s&&(x+=`${(0,r.tPu)(s)}`),x+="$.<br>",a.Do.isAmc?this.autoCorrection[f]={enonce:$,propositions:[{type:"AMCNum",propositions:[{texte:`$${(0,r.xau)(t,u)}x${(0,r.tPu)(s)}$`,statut:"",reponse:{texte:"numérateur (signé) n de $y=\\dfrac{n}{d}x+b$",valeur:t,param:{digits:1,decimals:0,signe:!0,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"dénominateur d de $y=\\dfrac{n}{d}x+b$",valeur:u,param:{digits:1,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"valeur b de $y=ax+b$",valeur:s,param:{digits:1,decimals:0,signe:!0,approx:0}}}]}]}:this.interactif&&!a.Do.isAmc&&($+="<br>$y =$"+(0,o.G5)(this,f,"largeur25 inline"),(0,o.Iq)(this,f,`${(0,r.xau)(t,u)}x${(0,r.tPu)(s)}`)),t>0&&(m=(0,n.EXn)(0,s-t,-u,s-t,"blue"),b=(0,n.EXn)(0,s-t,0,s,"green")),t<0&&(m=(0,n.EXn)(u,s,0,s,"blue"),b=(0,n.EXn)(u,s,u,s-(0,r.WnP)(t),"green")),b.epaisseur=2,m.epaisseur=2,b.styleExtremites="->",m.styleExtremites="<-",i=(0,n.xmu)(0,s),p=(0,n.d8j)("A",(0,n.xkU)(i,(0,n.xcw)((0,n.tno)(-t,u),i,.5/Math.sqrt(t**2+u**2)),"A","center"),"red",10,10,""),h=(0,n.L6P)(i,"red"),h.taille=3,h.epaisseur=2,p.color="red",0!==t&&(x+=(0,n.iR9)({xmin:-8,ymin:-10,xmax:8,ymax:10},l,m,b,h,p,d,e))),this.questionJamaisPosee(f,t,s)&&(this.listeQuestions.push($),this.listeCorrections.push(x),f++),g++;(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Types de question ",2,"1 : Valeurs entières\n2 : Valeurs fractionnaires."]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=34772.4452da9b02b2a6e331e1.js.map