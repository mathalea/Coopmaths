(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1406,5216],{91406:(e,t,s)=>{"use strict";s.r(t),s.d(t,{amcReady:()=>l,amcType:()=>u,interactifReady:()=>c,titre:()=>m,default:()=>h});var i=s(75216),a=s(89459),r=s(55339),o=s(44393),n=s(32964);const l=!0,u=1,c=!0,m="Reconnaitre un quadrilatère particulier à partir de ses propriétés";function h(){i.default.call(this),this.titre=m,this.amcReady=l,this.amcType=u,this.interactifReady=c,this.consigne="",this.nbQuestions=3,this.nbQuestionsModifiable=!1,this.nbCols=2,this.nbColsCorr=2,this.correctionDetailleeDisponible=!0,a.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,r.TVQ)([(0,r.q$q)(["losange1","losange2"]),(0,r.q$q)(["rectangle1","rectangle2"]),(0,r.q$q)(["carre1","carre2","carre3"])]);for(let t,s,i=0,a=0;i<this.nbQuestions&&a<50;){let r,l,u,c,m,h,x,p,d,g,b,C,y,R,f,D,Q,q;switch(t="",s="",e[i]){case"losange1":t="Quelle est la nature d'un quadrilatère ayant 4 côtés de même longueur ?",r=(0,o.xmu)(0,0),l=(0,o.xmu)(2,3),u=(0,o.xmu)(0,6),c=(0,o.xmu)(-2,3),m=(0,o.xmu)(0,3),h=(0,o.R_h)(r,l,u,c),D=(0,o.KoI)("||","blue",r,l,l,u,u,c,c,r),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-3,xmax:3,ymin:-1,ymax:7},h,D)+"<br>"),s+="C'est un losange.";break;case"losange2":t="Quelle est la nature d'un quadrilatère ayant ses diagonales perpendiculaires et sécantes en leur milieu ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[1,0,0,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(2,3),u=(0,o.xmu)(0,6),c=(0,o.xmu)(-2,3),m=(0,o.xmu)(0,3),h=(0,o.R_h)(r,l,u,c),x=(0,o.lvA)(u,m,l),b=(0,o.EXn)(r,u),C=(0,o.EXn)(l,c),b.pointilles=!0,C.pointilles=!0,R=(0,o.KoI)("|","blue",m,r,m,u),f=(0,o.KoI)("|||","blue",m,l,m,c),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-3,xmax:3,ymin:-1,ymax:7},h,x,b,C,R,f)+"<br>"),s+="C'est un losange.";break;case"rectangle1":t="Quelle est la nature d'un quadrilatère ayant 3 angles droits ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[0,1,0,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(5,0),u=(0,o.xmu)(5,3),c=(0,o.xmu)(0,3),m=(0,o.xmu)(2.5,1.5),h=(0,o.R_h)(r,l,u,c),p=(0,o.lvA)(r,l,u),d=(0,o.lvA)(l,u,c),g=(0,o.lvA)(u,c,r),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-1,xmax:6,ymin:-1,ymax:4},h,p,d,g)+"<br>"),s+="C'est un rectangle.";break;case"rectangle2":t="Quelle est la nature d'un quadrilatère ayant ses diagonales de même longueur et sécantes en leur milieu ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[0,1,0,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(5,0),u=(0,o.xmu)(5,3),c=(0,o.xmu)(0,3),m=(0,o.xmu)(2.5,1.5),h=(0,o.R_h)(r,l,u,c),b=(0,o.EXn)(r,u),C=(0,o.EXn)(l,c),y=(0,o.KoI)("||","blue",m,r,m,l,m,u,m,c),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-1,xmax:6,ymin:-1,ymax:4},h,y,b,C)+"<br>"),s+="C'est un rectangle.";break;case"carre1":t="Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et 4 angles droits ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[0,0,1,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(3,0),u=(0,o.xmu)(3,3),c=(0,o.xmu)(0,3),m=(0,o.xmu)(1.5,1.5),h=(0,o.R_h)(r,l,u,c),p=(0,o.lvA)(r,l,u),d=(0,o.lvA)(l,u,c),g=(0,o.lvA)(u,c,r),D=(0,o.KoI)("||","blue",r,l,l,u,u,c,c,r),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},h,p,d,g,D)+"<br>"),s+="C'est un carré.";break;case"carre2":t="Quelle est la nature d'un quadrilatère ayant ses ses diagonales perpendiculaires, de même longueur et sécantes en leur milieu ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[0,0,1,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(3,0),u=(0,o.xmu)(3,3),c=(0,o.xmu)(0,3),m=(0,o.xmu)(1.5,1.5),h=(0,o.R_h)(r,l,u,c),x=(0,o.lvA)(u,m,c),b=(0,o.EXn)(r,u),C=(0,o.EXn)(l,c),b.pointilles=!0,C.pointilles=!0,y=(0,o.KoI)("||","blue",m,r,m,l,m,u,m,c),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},h,x,y,b,C)+"<br>"),s+="C'est un carré.";break;case"carre3":t="Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et un angle droit ?",Q=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],q=[0,0,1,0,0],r=(0,o.xmu)(0,0),l=(0,o.xmu)(3,0),u=(0,o.xmu)(3,3),c=(0,o.xmu)(0,3),m=(0,o.xmu)(1.5,1.5),h=(0,o.R_h)(r,l,u,c),x=(0,o.lvA)(r,l,u),D=(0,o.KoI)("||","blue",r,l,l,u,u,c,c,r),this.correctionDetaillee&&(s=(0,o.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},h,x,D)+"<br>"),s+="C'est un carré."}this.autoCorrection[i]={},this.autoCorrection[i].enonce=`${t}\n`,this.autoCorrection[i].propositions=[{texte:"Losange",statut:!1,feedback:"Tous les losanges ont leurs côtés opposés parallèles, ce sont donc aussi des parallélogrammes et des trapèzes."},{texte:"Rectangle",statut:!1,feedback:"Tous les rectangles ont leurs côtés opposés parallèles, ce sont donc aussi des parallélogrammes et des trapèzes."},{texte:"Carré",statut:!1,feedback:"Tous les carrés ont 4 angles droits, ce sont donc aussi des rectangles. Tous les carrés ont 4 côtés de même longueur, ce sont donc aussi des losanges."},{texte:"Trapèze",statut:!1},{texte:"Parallélogramme",statut:!1}],this.autoCorrection[i].options={ordered:!0,lastChoice:5},"losange1"!==e[i]&&"losange2"!==e[i]||(this.autoCorrection[i].propositions[0].statut=!0,this.autoCorrection[i].propositions[3].statut=!0,this.autoCorrection[i].propositions[4].statut=!0),"rectangle1"!==e[i]&&"rectangle2"!==e[i]||(this.autoCorrection[i].propositions[1].statut=!0,this.autoCorrection[i].propositions[3].statut=!0,this.autoCorrection[i].propositions[4].statut=!0),"carre1"!==e[i]&&"carre2"!==e[i]&&"carre3"!==e[i]||(this.autoCorrection[i].propositions[0].statut=!0,this.autoCorrection[i].propositions[1].statut=!0,this.autoCorrection[i].propositions[2].statut=!0,this.autoCorrection[i].propositions[3].statut=!0,this.autoCorrection[i].propositions[4].statut=!0),this.interactif&&(t+=(0,n.l3)(this,i).texte),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),i++),a++}(0,r.K1R)(this)}}},75216:(e,t,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>i})}}]);
//# sourceMappingURL=1406.d83257885e04c102434c.js.map