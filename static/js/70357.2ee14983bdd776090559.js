(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[70357,71129],{70357:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>o,default:()=>x});var e=t(71129),n=(t(62259),t(55802)),a=t(63861);const o="Justifier que deux triangles sont égaux";function x(){e.default.call(this),this.titre=o,this.consigne="Les triangles sont-ils égaux ? Si ils sont égaux, justifier la réponse.",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.tailleDiaporama=50,this.video="",this.spacing=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=(0,a.SRM)(["CCC","CAC","ACA","AAA","CC"],this.nbQuestions);for(let s,t,e=0,o=0;e<this.nbQuestions&&o<50;){let x=(0,a.nSR)(40,70),r=(0,a.nSR)(40,80,x),h=(0,a.nSR)(40,x+r-10,[x,r]);x/=10,r/=10,h/=10;const l=(0,n.xmu)(0,0),u=(0,n.dJt)(l,x),m=(0,n.jGu)(l,u,r,h),y=m.listePoints[2],c=(0,n.NEH)(m),b=(0,n.tno)(Math.max(Math.abs(l.x-u.x),Math.abs(y.x-u.x),Math.abs(l.x-y.x))+4,0),C=(0,n.xkU)(c,b),d=(0,n.xkU)(m,b);d.isVisible=!1;const g=(0,n.Wnp)(d,C,(0,a.nSR)(0,360)),M=g.listePoints[0],f=g.listePoints[1],p=g.listePoints[2],A=(0,n.umB)(l,u,"|"),Q=(0,n.umB)(M,f,"|"),S=(0,n.umB)(u,y,"||"),R=(0,n.umB)(f,p,"||"),k=(0,n.umB)(y,l,"|||"),F=(0,n.umB)(p,M,"|||"),D=(0,n.QSb)(l,u,y),q=(0,n.QSb)(M,f,p),v=(0,n.QSb)(u,y,l,.8,"X"),B=(0,n.QSb)(f,p,M,.8,"X"),N=(0,n.QSb)(y,l,u,.8,"||"),V=(0,n.QSb)(p,M,f,.8,"||"),w=(0,a.wnJ)(3),P=(0,a.wnJ)(3,w),J=(0,n.NVL)(m,w),L=(0,n.NVL)(g,P);switch(i[e]){case"CCC":s="<br>"+(0,n.iR9)({xmin:Math.min(l.x,u.x,y.x,M.x,f.x,p.x)-3,ymin:Math.min(l.y,u.y,y.y,M.y,f.y,p.y)-3,xmax:Math.max(l.x,u.x,y.x,M.x,f.x,p.x)+3,ymax:Math.max(l.y,u.y,y.y,M.y,f.y,p.y)+3,scale:.5},m,g,A,Q,S,R,k,F,J,L),t="Ces deux triangles sont égaux car ils ont leurs trois côtés de même longueur 2 à 2 (CCC).";break;case"CAC":s="<br>"+(0,n.iR9)({xmin:Math.min(l.x,u.x,y.x,M.x,f.x,p.x)-3,ymin:Math.min(l.y,u.y,y.y,M.y,f.y,p.y)-3,xmax:Math.max(l.x,u.x,y.x,M.x,f.x,p.x)+3,ymax:Math.max(l.y,u.y,y.y,M.y,f.y,p.y)+3,scale:.5},m,g,A,Q,S,R,D,q,J,L),t="Ces deux triangles sont égaux car ils ont ont un angle de même mesure compris entre deux côtés de même longueur 2 à 2 (CAC). ";break;case"ACA":s="<br>"+(0,n.iR9)({xmin:Math.min(l.x,u.x,y.x,M.x,f.x,p.x)-3,ymin:Math.min(l.y,u.y,y.y,M.y,f.y,p.y)-3,xmax:Math.max(l.x,u.x,y.x,M.x,f.x,p.x)+3,ymax:Math.max(l.y,u.y,y.y,M.y,f.y,p.y)+3,scale:.5},m,g,A,Q,D,q,N,V,J,L),t="Ces deux triangles sont égaux car ils ont un côté de même longueur compris entre deux angles de même mesure 2 à 2 (ACA). ";break;case"AAA":s="<br>"+(0,n.iR9)({xmin:Math.min(l.x,u.x,y.x,M.x,f.x,p.x)-3,ymin:Math.min(l.y,u.y,y.y,M.y,f.y,p.y)-3,xmax:Math.max(l.x,u.x,y.x,M.x,f.x,p.x)+3,ymax:Math.max(l.y,u.y,y.y,M.y,f.y,p.y)+3,scale:.5},m,g,D,q,v,B,N,V,J,L),t=`Ces deux triangles ne sont pas égaux. Ils ont la même forme mais leurs longueurs peuvent être différentes. On dit qu'ils sont ${(0,a.pRK)("semblables")}`;break;case"CC":s="<br>"+(0,n.iR9)({xmin:Math.min(l.x,u.x,y.x,M.x,f.x,p.x)-3,ymin:Math.min(l.y,u.y,y.y,M.y,f.y,p.y)-3,xmax:Math.max(l.x,u.x,y.x,M.x,f.x,p.x)+3,ymax:Math.max(l.y,u.y,y.y,M.y,f.y,p.y)+3,scale:.5},m,g,A,Q,k,F,J,L),t="Ces deux triangles ne sont pas égaux."}-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(t),e++),o++}(0,a.K1R)(this)}}},71129:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>e})}}]);
//# sourceMappingURL=70357.2ee14983bdd776090559.js.map