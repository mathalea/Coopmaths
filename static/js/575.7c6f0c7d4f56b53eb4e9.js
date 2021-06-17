(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[575,5216],{80575:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>r,default:()=>a});var t=i(75216),n=i(89459),o=i(55339),l=i(44393);const r="Trouver l’image d’une figure par une rotation dans un pavage";function a(){t.default.call(this),this.titre=r,this.consigne="",this.nbQuestions=3,this.nbQuestionsModifiable=!0,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=!1,this.sup3=7,n.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){let e=function(e){for(let s=0;s<e.length;s++){e[s][0]==e[s][1]&&e.splice(s,1);for(let i=s+1;i<e.length;i++)e[s][1],e[i][0]}return e},s=function(e,s){return e.listePoints.length==s.listePoints.length},i=function(e,i){let t=!1,n=0;if(s(e,i))for(let s of e.listePoints){for(let e of i.listePoints)if(l=e,r=s,(0,o.h$R)(l.x,r.x,.1)&&(0,o.h$R)(l.y,r.y,.1)&&(t=!0),t)break;if(t?(n++,t=!1):n-=100,n<0)break}var l,r;return n==e.listePoints.length},t=function(e,t,n,o){let r,a=e.polygones[o-1],u=(0,l.Wnp)(a,t,n);for(let l=0;l<e.polygones.length;l++)if(r=e.polygones[l],s(h=u,g=r)&&i(h,g))return l+1;var h,g;return-1},n=[],r=[],a=parseInt(this.sup);(a<1||a>2)&&(a=1),this.nbQuestions>5&&(a=2),this.listeCorrections=[],this.listeQuestions=[];let u,h,g,c,p,b,d,f,m,y,C,$,D,v,Q,P,x,q,R=[],M=[],V="",E="",S=parseInt(this.sup),_=1,k=[[60,120,180],[90,180],[60,120,180],[60,120,180,90],[45,90,135,180],[60,120,180],[60,120,180]];for(S=8==this.sup3?(0,o.nSR)(1,7):parseInt(this.sup3);R.length<this.nbQuestions&&_<6;){for(f=0,b=(0,l.T0Y)(),M=[[[3,2],[3,2],[2,2],[2,2],[2,2],[2,2],[3,2]],[[4,3],[4,3],[3,3],[3,3],[3,3],[3,2],[5,3]]],u=M[a-1][S-1][0],h=M[a-1][S-1][1],b.construit(S,u,h,3),d=b.fenetre;R.length<this.nbQuestions+2&&f<3;){for(R=[],g=(0,o.nSR)(Math.floor(b.nb_polygones/3),Math.ceil(2*b.nb_polygones/3)),c=(0,o.q$q)([!0,!1])?b.polygones[g].listePoints[(0,o.nSR)(0,b.polygones[g].listePoints.length-1)]:b.barycentres[g];c.x-5<d.xmin||c.x+5>d.xmax||c.y-5<d.ymin||c.y+5>d.ymax;)g=(0,o.nSR)(Math.floor(b.nb_polygones/3),Math.ceil(2*b.nb_polygones/3)),c=(0,o.q$q)([!0,!1])?b.polygones[g].listePoints[(0,o.nSR)(0,b.polygones[g].listePoints.length-1)]:b.barycentres[g];c.nom="A",c.positionLabel="above left",$=(0,l.L6P)(c),D=(0,l.BD1)(c),$.epaisseur=3,$.taille=4,$.color="red",q=k[S-1][(0,o.nSR)(0,k[S-1].length-1)],m=(0,o.q$q)([1,-1]);for(let e=1;e<=b.nb_polygones;e++)p=t(b,c,q*m,e),-1!=p&&R.push([e,p]);R=e(R),f++}R.length<this.nbQuestions&&(7==this.sup3&&(S=(S+1)%5+1),_++)}if(R.length<this.nbQuestions)console.log("trop de questions, augmentez la taille du pavage");else{n.push($),n.push(D),R=(0,o.TVQ)(R);for(let e=0;e<b.nb_polygones;e++)n.push((0,l.Ots)((0,o.x9Z)(e+1),b.barycentres[e].x+.5,b.barycentres[e].y,"milieu","gray",1,0,!0));if(this.sup2)for(let e=0;e<b.nb_polygones;e++)n.push(b.tracesCentres[e]);for(let e=0;e<b.nb_polygones;e++)n.push(b.polygones[e]);V=(0,l.iR9)(d,n),V+=`<br>Dans la rotation de centre $A$ et d'angle ${q}° dans le sens `,V+=1==m?"inverse des aiguilles d'une montre.<br>":"des aiguilles d'une montre.<br>",E+=`Dans la rotation de centre $A$ et d'angle ${q}° dans le sens `,E+=1==m?"inverse des aiguilles d'une montre, <br>":"des aiguilles d'une montre, <br>";for(let e=0;e<this.nbQuestions;e++)V+=`Quel est l'image de la figure $${R[e][0]}$ ?<br>`,E+=`- l'image de la figure $${R[e][0]}$ est la figure ${R[e][1]}.<br>`,this.correctionDetaillee&&(x=3*this.nbQuestions,y=b.barycentres[R[e][0]-1],C=b.barycentres[R[e][1]-1],v=b.polygones[R[e][0]-1],v.color=(0,o.VgE)(e),v.couleurDeRemplissage=(0,o.VgE)(e),v.opaciteDeRemplissage=.5,v.epaisseur=2,Q=b.polygones[R[e][1]-1],Q.color=(0,o.VgE)(e),Q.couleurDeRemplissage=(0,o.VgE)(e),Q.opaciteDeRemplissage=.5,Q.epaisseur=2,P=(0,l.L5i)(v,c,q*m,`begin="${3*e}s;${3*e+x}s;${3*e+2*x}s" end="${3*e+2}s;${3*e+x+2}s;${3*e+2*x+2}s" dur="2s" repeatCount="indefinite" repeatDur="${9*this.nbQuestions}s" id="poly-${e}-anim"`),P.color=(0,o.VgE)(e),P.epaisseur=2,r.push((0,l.L6P)(y,C),(0,l.EXn)(c,y,(0,o.VgE)(e)),(0,l.EXn)(c,C,(0,o.LWD)(e)),(0,l.QSb)(y,c,C,.8,"",(0,o.LWD)(e),1,1,"blue",.2,!0),v,Q,P));this.correctionDetaillee&&(E+=(0,l.iR9)(d,n,r)),this.listeQuestions.push(V),this.listeCorrections.push(E),(0,o.K1R)(this)}},this.besoinFormulaireNumerique=["Taille du pavage (la grande est automatique au-delà de 5 questions)",2,"1 : Taille modeste\n 2 : Grande taille"],this.besoinFormulaire2CaseACocher=["Montrer les centres"],this.besoinFormulaire3Numerique=["Choix du pavage",8,"1 : Pavage de triangles équilatéraux\n2 : Pavage de carrés\n3 : Pavage d'hexagones réguliers\n4 : Pavage 3².4.3.4\n5 : Pavage 8².4\n 6 : Pavage de losanges (hexagonal d'écolier)\n7 : Pavage 6.3.6.3\n8 : Un des sept pavages au hasard"]}},75216:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=575.7c6f0c7d4f56b53eb4e9.js.map