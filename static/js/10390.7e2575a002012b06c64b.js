"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[10390,90321,62566,78938,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},90314:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,dateDePublication:()=>u,default:()=>l});var s=t(25523),r=t(25482),o=t(71250),n=t(33378);const a="Réaliser le quotient de deux longueurs à la règle non graduée et au compas",u="1/11/2021";function l(){s.default.call(this),this.typeExercice="IEP",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.sup=1,this.nouvelleVersion=function(e){const i=new n.Z,t=this.sup,s=void 0===this.sup2?(0,r.nSR)(2,5):this.sup2,a=void 0===this.sup3?(0,r.nSR)(2,5,s):this.sup3,u=(0,o.xmu)(1,5),l=(0,o.xmu)(u.x+t,u.y),c=(0,o.Q2H)(u,l),m=(0,o.xmu)(u.x,u.y-.1),h=(0,o.xmu)(u.x,u.y+.1),d=(0,o.xmu)(l.x,l.y-.1),b=(0,o.xmu)(l.x,l.y+.1),x=(0,o.xmu)(1,4),p=(0,o.xmu)(x.x+s,x.y),g=(0,o.Q2H)(x,p),$=(0,o.xmu)(x.x,x.y-.1),C=(0,o.xmu)(x.x,x.y+.1),y=(0,o.xmu)(p.x,p.y-.1),f=(0,o.xmu)(p.x,p.y+.1),M=(0,o.xmu)(1,3),O=(0,o.xmu)(M.x+a,M.y),q=(0,o.Q2H)(M,O),A=(0,o.xmu)(M.x,M.y-.1),P=(0,o.xmu)(M.x,M.y+.1),F=(0,o.xmu)(O.x,O.y-.1),R=(0,o.xmu)(O.x,O.y+.1);i.traitRapide(u,l),i.traitRapide(m,h),i.traitRapide(d,b),i.traitRapide(x,p),i.traitRapide($,C),i.traitRapide(y,f),i.traitRapide(M,O),i.traitRapide(A,P),i.traitRapide(F,R),i.textePosition("u",c.x-.2,c.y+.8),i.textePosition("a",g.x-.2,g.y+.8),i.textePosition("b",q.x-.2,q.y+.8);const D=(0,o.xmu)(1,-2,"O"),Q=(0,o.xmu)(D.x+s,D.y,"A"),v=(0,o.xmu)(D.x+s/a/t,D.y,"M");i.regleMasquerGraduations(),i.regleDemiDroiteOriginePoint(D,v),i.regleMasquer(),i.compasEcarter2Points(x,p),i.pointCreer(D,{dx:-.8,dy:.4}),i.compasTracerArcCentrePoint(D,Q),i.compasMasquer(),i.pointCreer(Q,{dx:-.3,dy:-.4});const B=(0,o.dJt)(D,t,40),I=(0,o.dJt)(D,a,40);B.nom="I",I.nom="B",i.regleDemiDroiteOriginePoint(D,I),i.regleMasquer(),i.crayonMasquer(),i.compasEcarter2Points(u,l),i.compasTracerArcCentrePoint(D,B),i.pointCreer(B,{dx:-.3,dy:.8}),i.compasEcarter2Points(M,O),i.compasTracerArcCentrePoint(D,I),i.pointCreer(I,{dx:-.3,dy:.8}),i.compasMasquer(),i.regleSegment(I,Q),i.regleMasquer(),i.crayonMasquer();i.paralleleAuCompas(I,Q,B).y>v.y&&i.regleSegment(B,v),i.pointCreer(v,{dx:-.3,dy:-.4}),i.regleSegment(D,v,{couleur:"red",epaisseur:3}),i.regleMasquer(),i.crayonMasquer();let T=(0,r.HzX)("Programme de construction :");T+="<br>On trace une demi-droite $[OA)$ telle que $OA = a$.",T+="<br>On trace une demi-droite de même origine $[OB)$ telle que $OB = b$.",T+="<br>On place le point $I$ sur $[OB)$ tel que $OI = 1u$.",T+="<br>On trace le segment $[BA]$.",T+="<br>On trace la parallèle à $(BA)$ passant par $I$.",T+="<br>Elle coupe $[OA)$ en $M$.",T+="<br><br>"+(0,r.HzX)("Justification :"),T+="<br> Les droites $(BA)$ et $(IM)$ sont parallèles donc d'après le théorème de Thalès, on a  :",T+="<br> $\\dfrac{OM}{OA}=\\dfrac{OI}{OB}$ soit $\\dfrac{OM}{a}=\\dfrac{1}{b}$",T+="<br><br> Finalement, on a $OM=\\dfrac{a}{b}$.",T+=i.html(e),this.listeQuestions=["À partir d'un segment unité, d'un segment de longueur $a$ et d'un segment de longueur $b$, construire un segment de longueur $\\dfrac{a}{b}$."],this.listeCorrections=[T],(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Longueur de l'unité en cm",10],this.besoinFormulaire2Numerique=["Longueur de a en cm",10,"Valeur au hasard si laissé vide"],this.besoinFormulaire3Numerique=["Longueur de b en cm",10,"Valeur au hasard si laissé vide"]}}}]);
//# sourceMappingURL=10390.7e2575a002012b06c64b.js.map