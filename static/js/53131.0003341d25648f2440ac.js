"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[53131,17007],{53131:(e,s,i)=>{i.r(s),i.d(s,{default:()=>a});var r=i(17007),o=i(66170),t=i(30169),l=i(92329);function a(){r.default.call(this),this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.titre="",this.nouvelleVersion=function(){let e;if(e=3===this.sup?[1,2]:[parseInt(this.sup)],"vocabulaire"===this.type)for(let o=0;o<e.length;o++)e[o]+=2;const s=(0,t.SRM)(e,this.nbQuestions);let i,r,a,n,c,u,h,p,b,$,g,m,d,f,x,y,C,R,k,S,M,Q,E,F,X,I,v;this.listeQuestions=[],this.listeCorrections=[],u=1===parseInt(this.sup2)?.5:.8;let D,q,A,L,O,w=[],K=[],N=[];for(let P,T=0,V=0;T<this.nbQuestions&&V<50;){const e=(0,t.wnJ)(8,"PQ"),_=(0,t.q$q)([30,45,-30,-45,150,135,-150,-135]);switch(v=_%10==0?.6:.4,N=[],K=[],s[T]){case 1:D=`${e} est un cube.<br>`,o.Do.isHtml&&(D+=" Reproduire la figure ci-dessous sur le cahier.<br>"),D+=" Repasse tous les segments de même longueur dans une même couleur.<br>",q=`Le cube ${e}.<br>`;break;case 2:D=`${e} est un pavé droit.<br>`,o.Do.isHtml&&(D+=" Reproduire la figure ci-dessous sur le cahier.<br>"),D+=" Repasse tous les segments de même longueur dans une même couleur.<br>",q=`Le pavé droit ${e}.<br>`;break;case 3:D=`${e} est un cube.<br>`;break;case 4:D=`${e} est un pavé droit.<br>`}const B=[[[0,1],[3,2],[4,5],[7,6]],[[0,3],[1,2],[4,7],[5,6]],[[0,4],[1,5],[2,6],[3,7]]],H=[[[0,1,2,3],[4,5,6,7]],[[0,4,7,3],[1,5,6,2]],[[0,1,5,4],[3,2,6,7]]],J=[[[0,1],[0,4],[0,3],[1,5],[1,2]],[[0,4],[0,1],[0,3],[4,5],[4,7]],[[0,3],[0,1],[0,4],[3,2],[3,7]],[[1,2],[1,0],[1,5],[2,3],[2,6]],[[1,5],[1,0],[1,2],[5,4],[5,6]],[[5,4],[5,1],[5,6],[4,0],[4,7]],[[5,6],[5,1],[5,4],[6,2],[6,7]],[[6,2],[6,5],[6,7],[2,1],[2,3]],[[2,3],[2,1],[2,6],[3,0],[3,7]],[[3,7],[3,2],[3,0],[7,4],[7,6]],[[7,4],[4,0],[4,5],[7,3],[7,6]],[[7,6],[6,2],[6,5],[7,3],[7,4]]],Y=[[[0,1,2,3],[1,5,6,2],[2,6,7,3],[3,7,4,0],[0,1,5,4]],[[1,5,6,2],[0,1,2,3],[2,6,7,3],[5,6,7,4],[1,5,4,0]],[[0,1,5,4],[1,5,6,2],[4,5,6,7],[0,4,7,3],[0,1,2,3]],[[4,5,6,7],[0,1,5,4],[1,5,6,2],[2,6,7,3],[0,4,7,3]],[[0,4,7,3],[0,1,2,3],[0,1,5,4],[4,5,6,7],[3,2,6,7]],[[3,2,6,7],[0,1,2,3],[1,5,6,2],[4,5,6,7],[0,4,7,3]]];let j,z,G;switch((0,t.nSR)(1,4)){case 1:[j,z,G]=[(0,t.nSR)(0,2),(0,t.nSR)(0,3),(0,t.nSR)(0,1)],D+=`Citer toutes les arêtes parallèles à [$${e[B[j][z][G]]+e[B[j][z][(G+1)%2]]}$].<br>`,q=`Les arêtes parallèles à [$${e[B[j][z][G]]+e[B[j][z][(G+1)%2]]}$] sont [$${e[B[j][(z+1)%4][G]]+e[B[j][(z+1)%4][(G+1)%2]]}$], [$${e[B[j][(z+2)%4][G]]+e[B[j][(z+2)%4][(G+1)%2]]}$] et [$${e[B[j][(z+3)%4][G]]+e[B[j][(z+3)%4][(G+1)%2]]}$].<br>`;break;case 2:[j,z,G]=[(0,t.nSR)(0,2),(0,t.nSR)(0,1),(0,t.nSR)(0,3)],D+=`Quelle est la face parallèle à $${e[H[j][z][G]]+e[H[j][z][(G+1)%4]]+e[H[j][z][(G+2)%4]]+e[H[j][z][(G+3)%4]]}$ ?<br>`,q=`La face parallèle à $${e[H[j][z][G]]+e[H[j][z][(G+1)%4]]+e[H[j][z][(G+2)%4]]+e[H[j][z][(G+3)%4]]}$ est la face $${e[H[j][(z+1)%2][G]]+e[H[j][(z+1)%2][(G+1)%4]]+e[H[j][(z+1)%2][(G+2)%4]]+e[H[j][(z+1)%2][(G+3)%4]]}$.<br>`;break;case 3:[j,z,G]=[(0,t.nSR)(0,11),0,(0,t.nSR)(0,1)],D+=`Quelles sont les arêtes perpendiculaires à l'arête [$${e[J[j][z][G]]+e[J[j][z][(G+1)%2]]}$] ?<br>`,q=`Les arêtes perpendiculaires à l'arête [$${e[J[j][z][G]]+e[J[j][z][(G+1)%2]]}$] sont [$${e[J[j][1][G]]+e[J[j][1][(G+1)%2]]}$], [$${e[J[j][2][G]]+e[J[j][2][(G+1)%2]]}$], [$${e[J[j][3][G]]+e[J[j][3][(G+1)%2]]}$] et [$${e[J[j][4][G]]+e[J[j][4][(G+1)%2]]}$].`;break;case 4:[j,z,G]=[(0,t.nSR)(0,5),0,(0,t.nSR)(0,3)],D+=`Quelles sont les faces perpendiculaires à la face $${e[Y[j][z][G]]+e[Y[j][z][(G+1)%4]]+e[Y[j][z][(G+2)%4]]+e[Y[j][z][(G+3)%4]]}$ ?<br>`,q=`Les faces perpendiculaires à la face $${e[Y[j][z][G]]+e[Y[j][z][(G+1)%4]]+e[Y[j][z][(G+2)%4]]+e[Y[j][z][(G+3)%4]]}$ `,q+=`sont les faces $${e[Y[j][z+1][G]]+e[Y[j][z+1][(G+1)%4]]+e[Y[j][z+1][(G+2)%4]]+e[Y[j][z+1][(G+3)%4]]}$, `,q+=`$${e[Y[j][z+2][G]]+e[Y[j][z+2][(G+1)%4]]+e[Y[j][z+2][(G+2)%4]]+e[Y[j][z+2][(G+3)%4]]}$, `,q+=`$${e[Y[j][z+3][G]]+e[Y[j][z+3][(G+1)%4]]+e[Y[j][z+3][(G+2)%4]]+e[Y[j][z+3][(G+3)%4]]}$ et `,q+=`$${e[Y[j][z+4][G]]+e[Y[j][z+4][(G+1)%4]]+e[Y[j][z+4][(G+2)%4]]+e[Y[j][z+4][(G+3)%4]]}$.`}switch(s[T]%2){case 1:h=(0,l.xmu)(6,0,e[0],"left"),p=(0,l.xmu)(11,0,e[1],"right"),b=(0,l.xmu)(11,5,e[2],"right"),$=(0,l.xmu)(6,5,e[3],"left"),O=(0,l.R_h)(h,p,b,$),g=(0,l.$7o)(p,h,_,v,e[4],"left"),g.x=Math.round(g.x),g.y=Math.round(g.y);break;case 0:h=(0,l.xmu)(5,0,e[0],"left"),p=(0,l.xmu)(9+(0,t.nSR)(1,3),0,e[1],"right"),b=(0,l.xmu)(p.x,(0,t.nSR)(3,7),e[2],"right"),$=(0,l.xmu)(h.x,b.y,e[3],"left"),O=(0,l.R_h)(h,p,b,$),g=(0,l.$7o)(p,h,_,v*(0,t.nSR)(5,12)/10,e[4],"left"),g.x=Math.round(g.x),g.y=Math.round(g.y)}O=(0,l.R_h)(h,p,b,$),m=(0,l.I7O)(g,h,p,e[5],"right"),d=(0,l.I7O)(m,p,b,e[6],"right"),f=(0,l.I7O)(d,b,$,e[7],"left"),x=(0,l.EXn)(h,p),y=(0,l.EXn)(p,b),C=(0,l.EXn)(b,$),R=(0,l.EXn)($,h),k=(0,l.EXn)(g,m),S=(0,l.EXn)(m,d),M=(0,l.EXn)(d,f),Q=(0,l.EXn)(f,g),E=(0,l.EXn)(h,g),F=(0,l.EXn)(p,m),X=(0,l.EXn)(b,d),I=(0,l.EXn)($,f),x.epaisseur=2,y.epaisseur=2,C.epaisseur=2,R.epaisseur=2,k.epaisseur=2,S.epaisseur=2,M.epaisseur=2,Q.epaisseur=2,E.epaisseur=2,F.epaisseur=2,X.epaisseur=2,I.epaisseur=2,x.color="black",y.color="black",C.color="black",R.color="black",k.color="black",S.color="black",M.color="black",Q.color="black",E.color="black",F.color="black",X.color="black",d.y<b.y&&d.x<b.x?(X.pointilles=!0,X.color="gray",X.opacite=.7,M.pointilles=!0,M.color="gray",M.opacite=.7,S.pointilles=!0,S.color="gray",S.opacite=.7):g.y>h.y&&g.x>h.x?(E.pointilles=!0,k.pointilles=!0,Q.pointilles=!0,E.color="gray",k.color="gray",Q.color="gray",E.opacite=.7,k.opacite=.7,Q.opacite=.7):m.x<p.x&&m.y>p.y?(F.pointilles=!0,S.pointilles=!0,k.pointilles=!0,F.color="gray",S.color="gray",k.color="gray",F.opacite=.7,S.opacite=.7,k.opacite=.7):f.x>$.x&&f.y<$.y&&(I.pointilles=!0,M.pointilles=!0,Q.pointilles=!0,I.color="gray",M.color="gray",Q.color="gray",I.opacite=.7,M.opacite=.7,Q.opacite=.7),i=Math.min(h.x,g.x)-1,a=Math.min(h.y,g.y)-1,r=Math.max(p.x,m.x)+2,n=Math.max($.y,f.y)+1,c=20,L=this.sup2<3?(0,l.flY)(i,a,r,n,"gray",.7):"",2===parseInt(this.sup2)?(A=(0,l.Sl2)(i,a,r,n),u=.8):(A="",u=.5),K.push(x,y,C,R,k,S,M,Q,E,F,X,I,(0,l.BD1)(h,p,b,$,g,m,d,f),O,L,A);const U={xmin:i,ymin:a,xmax:r,ymax:n,pixelsParCm:20,scale:u};D+=(0,l.iR9)(U,K),1===s[T]?(w=[(0,l.KoI)("||","green",[h,p,b,$,h,g,m,d,f,g]),(0,l.KoI)("||","green",p,m,b,d,$,f)],x.color="green",y.color="green",C.color="green",R.color="green",k.color="green",S.color="green",M.color="green",Q.color="green",E.color="green",F.color="green",X.color="green",I.color="green"):(w=[(0,l.KoI)("||","green",h,p,b,$,g,m,d,f),(0,l.KoI)("O","red",h,g,p,m,b,d,$,f),(0,l.KoI)("×","blue",$,h,p,b,m,d,f,g)],x.color="green",y.color="blue",C.color="green",R.color="blue",k.color="green",S.color="blue",M.color="green",Q.color="blue",E.color="red",F.color="red",X.color="red",I.color="red"),N.push(x,y,C,R,k,S,M,Q,E,F,X,I,(0,l.BD1)(h,p,b,$,g,m,d,f),L,A),s[T]<3&&(q+=(0,l.iR9)(U,N,w)),-1===this.listeQuestions.indexOf(P)&&(this.listeQuestions.push(D+"<br>"),this.listeCorrections.push(q+"<br>"),T++),V++}(0,t.K1R)(this)},this.besoinFormulaireNumerique=["Type de solides",3,"1 : Cubes\n 2 : Pavés droits\n 3 : Mélange"],this.besoinFormulaire2Numerique=["Type de cahier",3,"1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche"]}},17007:(e,s,i)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const r of s)void 0!==r&&(i+=r.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>r})}}]);
//# sourceMappingURL=53131.0003341d25648f2440ac.js.map