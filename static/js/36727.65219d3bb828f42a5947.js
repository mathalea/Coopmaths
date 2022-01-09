"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36727,90321,62566,78938,25523],{51010:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,default:()=>u});var s=t(25523),n=t(22380),o=t(25482),r=t(71250),l=t(33378);const a="Tranformations de triangle";function u(){s.default.call(this),this.titre="Tranformations de triangle",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.typeExercice="IEP",this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[];const i=[],t=[];let s,a,u,c,h,m,b,$,d,C,g,_,p,x,P,f,y,A,B,k,F,M,D,R,T,Q,E,L,V,q="",N=20,S=20;const v=new l.Z;for(;N>16&&S>16;){R=0,T=0,Q=0,E=0,s=(0,r.xmu)(0,0,"A"),a=(0,r.dJt)(s,(0,o.nSR)(40,60)/10,(0,o.nSR)(70,100),"B"),u=(0,r.$7o)(a,s,(0,o.nSR)(20,50),(0,o.nSR)(8,12)/10,"C"),h=(0,r.R_h)(s,a,u),c=(0,r.uGk)(s,a,u),m=(0,r.T2s)(a,s,2+(0,r.InT)(s,a)),V=(0,o.nSR)(-45,-20),g=(0,r.Wnp)(s,m,V,"A"),_=(0,r.Wnp)(a,m,V,"B"),p=(0,r.Wnp)(u,m,V,"C"),C=(0,r.R_h)(g,_,p),(0,r.eeh)(C,["$A_1$","$B_1$","$C_1$"]),b=(0,r.Q2H)(s,g),x=(0,r.VTK)(g,_),P=(0,r.Vj7)(C,x),(0,r.eeh)(P,["$A_1$","$B_1$","$C_1$"]),f=(0,r.nP0)(s,g),$=(0,r.T2s)(b,m,5),d=(0,r.T2s)(m,b,10),y=(0,r.$7o)(_,g,(0,o.nSR)(-40,-10),1.5,"D"),B=(0,r.Wnp)(P,y,180),(0,r.eeh)(B,["$A_2$","$B_2$","$C_2$"]),A=(0,r.xkU)(y,(0,r.tno)(a,s),"F"),M=(0,r.L6P)(y,A),D=(0,r.BD1)(y,A),k=(0,r.xkU)(B,(0,r.tno)(y,A)),(0,r.eeh)(k,["$A_3$","$B_3$","$C_3$"]),L=-(0,o.nSR)(80,110),F=(0,r.Wnp)(k,A,L),(0,r.eeh)(F,["$A_4$","$B_4$","$C_4$"]);for(let e=0;e<3;e++)R=Math.min(R,h.listePoints[e].x,C.listePoints[e].x,P.listePoints[e].x,B.listePoints[e].x,k.listePoints[e].x,F.listePoints[e].x),T=Math.max(T,h.listePoints[e].x,C.listePoints[e].x,P.listePoints[e].x,B.listePoints[e].x,k.listePoints[e].x,F.listePoints[e].x),Q=Math.min(Q,h.listePoints[e].y,C.listePoints[e].y,P.listePoints[e].y,B.listePoints[e].y,k.listePoints[e].y,F.listePoints[e].y),E=Math.max(E,h.listePoints[e].y,C.listePoints[e].y,P.listePoints[e].y,B.listePoints[e].y,k.listePoints[e].y,F.listePoints[e].y);T+=4,R--,Q--,E++,N=T-R,S=E-Q}let I="Construire<br>$A_1B_1C_1$ le triangle symétrique de $ABC$ par rapport à la droite $(d)$;<br>";I+="$A_2B_2C_2$ le triangle symétrique de $A_1B_1C_1$ par rapport au point $D$;<br>",I+="$A_3B_3C_3$ le triangle translaté de $A_2B_2C_2$ tel que $D$ soit transformé en $F$;<br>",I+=`$A_4B_4C_4$ le triangle obtenu par la rotation de $A_3B_3C_3$ de centre $F$ et d'angle $${Math.abs(L)}\\degree$ dans le sens des aiguilles d'une montre.<br>`;const W=(0,r.d8j)("(d)",(0,r.xkU)((0,r.Q2H)(a,_),(0,r.tno)(1,0)),"black",30,12,""),w=(0,r.lhN)(h,f,`id='anim${e}A' begin="0s" dur ="2s" repeatcount="1" fill="freeze"`),z=(0,r.L5i)(P,y,180,`id='anim${e}B' begin="2s" dur ="2s" repeatcount="1" fill="freeze"`),H=(0,r.nl3)(B,(0,r.tno)(y,A),`id='anim${e}C' begin="4s" dur ="2s" repeatcount="1" fill="freeze"`),U=(0,r.L5i)(k,A,L,`id='anim${e}D' begin="6s" dur ="2s" repeatcount="1" fill="freeze"`);v.vitesse=15,v.tempo=.5,v.recadre(R,E),v.polygoneRapide(...h.listePoints),v.pointsCreer(s,a,u,A,y),v.couleur="black",v.traitRapide($,d),v.textePoint("(d)",(0,r.Q2H)(a,_)),v.symetrieAxialePolygone(h,f,["A_1","B_1","C_1"],{couleur:"blue",couleurCodage:"lightblue"}),v.demiTourPolygone(P,y,["A_2","B_2","C_2"],{couleur:"red",couleurCodage:"pink"}),v.translationPolygone(B,y,A,["A_3","B_3","C_3"],{couleur:"brown",couleurCodage:"orange"}),v.rotationPolygone(k,A,L,["A_4","B_4","C_4"],{couleur:"green",couleurCodage:"lightgreen"}),v.crayonMasquer(),n.Do.fenetreMathalea2d=[R,Q,T,E],i.push(h,c[1],M,D,f,W),t.push(h,c[1],M,D,f,W,P,(0,r.NVL)(P),B,(0,r.NVL)(B),k,(0,r.NVL)(k),F,(0,r.NVL)(F),w,z,H,U);const j={xmin:R,ymin:Q,xmax:T,ymax:E,pixelsParCm:20,scale:1,mainlevee:!1},J={xmin:R,ymin:Q,xmax:T,ymax:E,pixelsParCm:20,scale:1};I+=(0,r.iR9)(j,i),q+=(0,r.iR9)(J,t),q+="<br>",q+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}A').beginElement()"><i class="redo circle icon"></i>symétrie axiale</button>`,q+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}B').beginElement()"><i class="redo circle icon"></i>symétrie centrale</button>`,q+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}C').beginElement()"><i class="redo circle icon"></i>translation</button>`,q+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}D').beginElement()"><i class="redo circle icon"></i>rotation</button>`,q+=v.html(e),this.listeQuestions.push(I),this.listeCorrections.push(q),(0,o.K1R)(this)}}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=36727.65219d3bb828f42a5947.js.map