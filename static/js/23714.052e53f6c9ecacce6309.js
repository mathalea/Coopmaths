"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[23714,25523],{23714:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>l,default:()=>a});var t=i(25523),o=i(22380),n=i(25482),r=i(71250);const l="Trouver l’image d’une figure par symétrie centrale dans un pavage";function a(){t.default.call(this),this.titre=l,this.consigne="",this.nbQuestions=3,this.nbQuestionsModifiable=!0,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=!1,this.sup3=7,o.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){this.sup=Number(this.sup),this.sup3=Number(this.sup3);const e=function(e){for(let s=0;s<e.length;s++)for(let i=s+1;i<e.length;i++)e[s][1]===e[i][0]&&e.splice(i,1);return e},s=function(e,s){return e.listePoints.length===s.listePoints.length},i=function(e,i){let t=!1,o=0;if(s(e,i))for(const s of e.listePoints){for(const e of i.listePoints)if(r=e,l=s,(0,n.h$R)(r.x,l.x,.1)&&(0,n.h$R)(r.y,l.y,.1)&&(t=!0),t)break;if(t?(o++,t=!1):o-=100,o<0)break}var r,l;return o===e.listePoints.length},t=function(e,t,o){const n=e.polygones[o-1];let l;const a=(0,r.Wnp)(n,t,180);for(let r=0;r<e.polygones.length;r++)if(l=e.polygones[r],s(u=a,h=l)&&i(u,h))return r+1;var u,h;return-1},l=[],a=[];let u,h,c,g,p,b;const m=["/","//","///","o","w","X","U","*"];let f,d,y,C,x,$,D,Q=this.sup;(Q<1||Q>2)&&(Q=1),this.nbQuestions>5&&(Q=2),this.listeCorrections=[],this.listeQuestions=[],this.autoCorrection=[];let q,v,F,P=[],R=[],A="",M="",V=this.sup,T=1;for(V=8===this.sup3?(0,n.nSR)(1,7):this.sup3;P.length<this.nbQuestions&&T<6;){for(F=0,q=(0,r.T0Y)(),R=[[[3,2],[3,2],[2,2],[2,2],[2,2],[2,2],[3,2]],[[4,3],[4,3],[3,3],[3,3],[3,3],[3,2],[5,3]]],f=R[Q-1][V-1][0],d=R[Q-1][V-1][1],q.construit(V,f,d,3),v=q.fenetre,o.Do.fenetreMathalea2d=[v.xmin,v.ymin,v.xmax,v.ymax];P.length<this.nbQuestions+2&&F<3;){for(P=[],y=(0,n.nSR)(Math.floor(q.nb_polygones/3),Math.ceil(2*q.nb_polygones/3)),C=(0,n.q$q)([!0,!1])?q.polygones[y].listePoints[(0,n.nSR)(0,q.polygones[y].listePoints.length-1)]:q.barycentres[y];C.x-5<v.xmin||C.x+5>v.xmax||C.y-5<v.ymin||C.y+5>v.ymax;)y=(0,n.nSR)(Math.floor(q.nb_polygones/3),Math.ceil(2*q.nb_polygones/3)),C=(0,n.q$q)([!0,!1])?q.polygones[y].listePoints[(0,n.nSR)(0,q.polygones[y].listePoints.length-1)]:q.barycentres[y];C.nom="A",C.positionLabel="above left",$=(0,r.L6P)(C),x=(0,r.BD1)(C),$.epaisseur=3,$.taille=4,$.color="red";for(let e=1;e<=q.nb_polygones;e++)D=t(q,C,e),-1!==D&&P.push([e,D]);P=e(P),F++}P.length<this.nbQuestions&&(7===this.sup3&&(V=(V+1)%5+1),T++)}if(P.length<this.nbQuestions)console.log("trop de questions, augmentez la taille du pavage");else{l.push($),l.push(x),P=(0,n.TVQ)(P);for(let e=0;e<q.nb_polygones;e++)l.push((0,r.Ots)((0,n.x9Z)(e+1),q.barycentres[e].x+.5,q.barycentres[e].y,"milieu","gray",1,0,!0));if(this.sup2)for(let e=0;e<q.nb_polygones;e++)l.push(q.tracesCentres[e]);for(let e=0;e<q.nb_polygones;e++)l.push(q.polygones[e]);A=(0,r.iR9)(v,l),A+="<br>";for(let e=0;e<this.nbQuestions;e++)A+=`Quelle est l'image de la figure $${P[e][0]}$ dans la symétrie de centre $A$ ?<br>`,M+=`L'image de la figure $${P[e][0]}$ dans la symétrie de centre $A$ est la figure ${P[e][1]}<br>`,this.correctionDetaillee&&(b=3*this.nbQuestions,g=q.barycentres[P[e][0]-1],p=q.barycentres[P[e][1]-1],u=q.polygones[P[e][0]-1],u.color=(0,n.VgE)(e),u.couleurDeRemplissage=(0,n.VgE)(e),u.opaciteDeRemplissage=.5,u.epaisseur=2,h=q.polygones[P[e][1]-1],h.color=(0,n.VgE)(e),h.couleurDeRemplissage=(0,n.VgE)(e),h.opaciteDeRemplissage=.5,h.epaisseur=2,c=(0,r.L5i)(u,C,180,`begin="${3*e}s;${3*e+b}s;${3*e+2*b}s" end="${3*e+2}s;${3*e+b+2}s;${3*e+2*b+2}s" dur="2s" repeatCount="indefinite" repeatDur="${9*this.nbQuestions}s" id="poly-${e}-anim"`),c.color=(0,n.VgE)(e),c.epaisseur=2,a.push((0,r.L6P)(g,p),(0,r.EXn)(g,p,(0,n.VgE)(e)),(0,r.HUl)(g,p,(0,n.VgE)(e),m[e],!1),u,h,c));this.correctionDetaillee&&(M+=(0,r.iR9)(v,l,a)),this.listeQuestions.push(A),this.listeCorrections.push(M),(0,n.K1R)(this)}},this.besoinFormulaireNumerique=["Taille du pavage (la grande est automatique au-delà de 5 questions)",2," 1 : Taille modeste\n 2 : Grande taille"],this.besoinFormulaire2CaseACocher=["Montrer les centres"],this.besoinFormulaire3Numerique=["Choix du pavage",8,"1 : Triangles équilatéraux\n2 : Carrés\n3 : Hexagones réguliers\n4 : Carrés et triangles équilatéraux\n5 : Octogones et carrés\n 6 : Losanges (pavage hexagonal d'écolier)\n7 : Hexagones et triangles équilatéraux\n8 : Un des sept pavages au hasard"]}},25523:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=23714.052e53f6c9ecacce6309.js.map