(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1771,975,9678,6969],{66969:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>e})},10040:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>r,default:()=>l});var e=t(66969),n=t(55339),o=t(44393),a=t(859);const r="Construire un triangle aux instruments";function l(){e.default.call(this),this.titre=r,this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.classe=6,this.typeExercice="IEP",this.nouvelleVersion=function(){let i,s,t,e,r,l,h,u,c,m,b,x,p,d,g,C,y,f,R,M,v;this.listeQuestions=[],this.listeCorrections=[],s=6==this.classe?[1,2]:[1];const F=(0,n.SRM)(s,this.nbQuestions);for(let Q,S,P=0,Y=0;P<this.nbQuestions&&Y<50;){i=new a.Z,C=[],y=[],Q="Le triangle ci-dessous a été réalisé à main levée.<br>Construire ce triangle avec les instruments de géométrie en respectant les mesures indiquées.<br>",S="Voici la construction que tu devais réaliser.<br>",M=(0,n.wnJ)(3,"PQ"),v=[];for(let i=0;i<3;i++)v.push(M[i]);switch(v=(0,n.TVQ)(v),t=(0,o.xmu)(0,0,v[0],"left"),F[P]){case 1:c=(0,n.nSR)(35,45),u=(0,n.n0o)((0,n.nSR)(35,45,c)/10),h=(0,n.n0o)((0,n.nSR)(46,60)/10),c=(0,n.n0o)(c/10),e=(0,o.dJt)(t,h,(0,n.nSR)(-45,45),v[1]),e.positionLabel="right",m=(0,o.z7e)(t,c),b=(0,o.z7e)(e,u),r=(0,o.asV)(m,b,v[2],1),r.positionLabel="above",l=(0,o.xmu)(r.x+(0,n.nSR)(-5,5,0)/10,r.y+(0,n.nSR)(-5,5,0)/10,v[2]),C.push((0,o.Y2F)(e,t),(0,o.Y2F)(r,e),(0,o.Y2F)(t,r)),y.push((0,o.ItP)(t,r,30,"gray",1,2),(0,o.ItP)(e,r,30,"gray",1,2),(0,o.Y2F)(e,t),(0,o.Y2F)(r,e),(0,o.Y2F)(t,r)),S+="Pour cette construction, nous avons utilisé le compas et la règle graduée.<br>",i.triangle3longueurs(v,h,c,u);break;case 2:c=(0,n.nSR)(70,80)/10,h=(0,n.n0o)((0,n.nSR)(46,60)/10),e=(0,o.dJt)(t,h,(0,n.nSR)(-45,45),v[1]),m=(0,o.z7e)(t,c),g=(0,o.VTK)(t,e),d=(0,o.vfb)(e,g),r=(0,o.u$D)(d,m,v[2],1),l=(0,o.xmu)(r.x+(0,n.nSR)(-5,5,0)/10,r.y+(0,n.nSR)(-5,5,0)/10,v[2]),C.push((0,o.Y2F)(e,t),(0,o.Y2F)(r,t),(0,o.lvA)(t,e,r)),y.push((0,o.ItP)(t,r,30,"gray",1,2),(0,o.lvA)(t,e,r),(0,o.Y2F)(e,t),(0,o.Y2F)(r,t)),S+="Pour cette construction, nous avons utilisé la règle graduée, l'équerre et le compas.<br>",i.triangleRectangleCoteHypotenuse(v,h,c)}x=(0,o.uGk)(t,e,r),p=(0,o.uGk)(t,e,l),C.push(p[0],p[1]),y.push(x[0],x[1]),f={xmin:Math.min(t.x-1,e.x-1,r.x-1),ymin:Math.min(t.y-1,e.y-1,r.y-1),xmax:Math.max(t.x+1,e.x+1,r.x+1),ymax:Math.max(t.y+1,e.y+1,r.y+1),pixelsParCm:30,scale:1,mainlevee:!0,amplitude:.3},R={xmin:Math.min(t.x-1,e.x-1,r.x-2),ymin:Math.min(t.y-1,e.y-1,r.y-2),xmax:Math.max(t.x+1,e.x+1,r.x+2),ymax:Math.max(t.y+1,e.y+1,r.y+2),pixelsParCm:30,scale:1},Q+=(0,o.iR9)(f,C),S+=(0,o.iR9)(R,y),S+=i.htmlBouton(this.numeroExercice,P),-1===this.listeQuestions.indexOf(Q)&&(this.listeQuestions.push(Q),this.listeCorrections.push(S),P++),Y++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=1771.750750bb1ff5a7f8eab8.js.map