(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[697,6969],{92342:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>l,default:()=>r});var t=i(66969),n=i(55339),o=i(44393);const l="Trouver l’image d’une figure par symétrie centrale dans un pavage";function r(){t.default.call(this),this.titre=l,this.consigne="",this.nbQuestions=3,this.nbQuestionsModifiable=!0,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=!1,this.sup3=7,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){let e,s,i,t,l,r,a=function(e){for(let s=0;s<e.length;s++)for(let i=s+1;i<e.length;i++)e[s][1]==e[i][0]&&e.splice(i,1);return e},h=function(e,s){return e.listePoints.length==s.listePoints.length},u=function(e,s){let i=!1,t=0;if(h(e,s))for(let r of e.listePoints){for(let e of s.listePoints)if(o=e,l=r,(0,n.h$R)(o.x,l.x,.1)&&(0,n.h$R)(o.y,l.y,.1)&&(i=!0),i)break;if(i?(t++,i=!1):t-=100,t<0)break}var o,l;return t==e.listePoints.length},g=function(e,s,i){let t,n=e.polygones[i-1],l=(0,o.Wnp)(n,s,180);for(let o=0;o<e.polygones.length;o++)if(t=e.polygones[o],h(r=l,a=t)&&u(r,a))return o+1;var r,a;return-1},p=[],c=[],b=["/","//","///","o","w","X","U","*"],f=parseInt(this.sup);(f<1||f>2)&&(f=1),this.nbQuestions>5&&(f=2),this.listeCorrections=[],this.listeQuestions=[];let d,m,y,C,$,v,x,P,Q,D,q=[],R=[],M="",V="",E=parseInt(this.sup),k=1;for(E=8==this.sup3?(0,n.nSR)(1,7):parseInt(this.sup3);q.length<this.nbQuestions&&k<6;){D=0,P=(0,o.T0Y)(),R=[[[3,2],[3,2],[2,2],[2,2],[2,2],[2,2],[3,2]],[[4,3],[4,3],[3,3],[3,3],[3,3],[3,2],[5,3]]],d=R[f-1][E-1][0],m=R[f-1][E-1][1],P.construit(E,d,m,3),Q=P.fenetre;Q.xmin,Q.ymin,Q.xmax,Q.ymax;for(;q.length<this.nbQuestions+2&&D<3;){for(q=[],y=(0,n.nSR)(Math.floor(P.nb_polygones/3),Math.ceil(2*P.nb_polygones/3)),C=(0,n.q$q)([!0,!1])?P.polygones[y].listePoints[(0,n.nSR)(0,P.polygones[y].listePoints.length-1)]:P.barycentres[y];C.x-5<Q.xmin||C.x+5>Q.xmax||C.y-5<Q.ymin||C.y+5>Q.ymax;)y=(0,n.nSR)(Math.floor(P.nb_polygones/3),Math.ceil(2*P.nb_polygones/3)),C=(0,n.q$q)([!0,!1])?P.polygones[y].listePoints[(0,n.nSR)(0,P.polygones[y].listePoints.length-1)]:P.barycentres[y];C.nom="A",C.positionLabel="above left",v=(0,o.L6P)(C),$=(0,o.BD1)(C),v.epaisseur=3,v.taille=4,v.color="red";for(let e=1;e<=P.nb_polygones;e++)x=g(P,C,e),-1!=x&&q.push([e,x]);q=a(q),D++}q.length<this.nbQuestions&&(7==this.sup3&&(E=(E+1)%5+1),k++)}if(q.length<this.nbQuestions)console.log("trop de questions, augmentez la taille du pavage");else{p.push(v),p.push($),q=(0,n.TVQ)(q);for(let e=0;e<P.nb_polygones;e++)p.push((0,o.Ots)((0,n.zqk)(e+1),P.barycentres[e].x+.5,P.barycentres[e].y,"milieu","gray",1,0,!0));if(this.sup2)for(let e=0;e<P.nb_polygones;e++)p.push(P.tracesCentres[e]);for(let e=0;e<P.nb_polygones;e++)p.push(P.polygones[e]);M=(0,o.iR9)(Q,p),M+="<br>";for(let a=0;a<this.nbQuestions;a++)M+=`Quel est l'image de la figure $${q[a][0]}$ dans la symétrie de centre $A$ ?<br>`,V+=`L'image de la figure $${q[a][0]}$ dans la symétrie de centre $A$ est la figure ${q[a][1]}<br>`,this.correctionDetaillee&&(r=3*this.nbQuestions,t=P.barycentres[q[a][0]-1],l=P.barycentres[q[a][1]-1],e=P.polygones[q[a][0]-1],e.color=(0,n.VgE)(a),e.couleurDeRemplissage=(0,n.VgE)(a),e.opaciteDeRemplissage=.5,e.epaisseur=2,s=P.polygones[q[a][1]-1],s.color=(0,n.VgE)(a),s.couleurDeRemplissage=(0,n.VgE)(a),s.opaciteDeRemplissage=.5,s.epaisseur=2,i=(0,o.L5i)(e,C,180,`begin="${3*a}s;${3*a+r}s;${3*a+2*r}s" end="${3*a+2}s;${3*a+r+2}s;${3*a+2*r+2}s" dur="2s" repeatCount="indefinite" repeatDur="${9*this.nbQuestions}s" id="poly-${a}-anim"`),i.color=(0,n.VgE)(a),i.epaisseur=2,c.push((0,o.L6P)(t,l),(0,o.EXn)(t,l,(0,n.VgE)(a)),(0,o.HUl)(t,l,(0,n.VgE)(a),b[a],!1),e,s,i));this.correctionDetaillee&&(V+=(0,o.iR9)(Q,p,c)),this.listeQuestions.push(M),this.listeCorrections.push(V),(0,n.K1R)(this)}},this.besoinFormulaireNumerique=["Taille du pavage (la grande est automatique au-delà de 5 questions)",2,"1 : Taille modeste\n 2 : Grande taille"],this.besoinFormulaire2CaseACocher=["Montrer les centres"],this.besoinFormulaire3Numerique=["Choix du pavage",8,"1 : Pavage de triangles équilatéraux\n2 : Pavage de carrés\n3 : Pavage d'hexagones réguliers\n4 : Pavage 3².4.3.4\n5 : Pavage 8².4\n 6 : Pavage de losanges (hexagonal d'écolier)\n7 : Pavage 6.3.6.3\n8 : Un des sept pavages au hasard"]}},66969:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=697.27dd34f7a4ece8caa670.js.map