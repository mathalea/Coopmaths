"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[64085,23215,9418,51142,17007],{90742:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,default:()=>u});var s=t(17007),n=t(66170),o=t(30169),l=t(92329),r=t(53099);const a="Tranformations de triangle";function u(){s.default.call(this),this.titre="Tranformations de triangle",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.typeExercice="IEP",this.nouvelleVersion=function(e){let i,t,s,a;this.listeQuestions=[],this.listeCorrections=[],i=[],t=[];let u,c,h,m,b,d,g,C,_,p,x,$,P,f,y,A,B,k,M,D,R,T,F,V,E,Q,L,S,q,v,N,I,W="",w=20,z=20,H=new r.Z;for(;w>16&&z>16;){Q=0,L=0,S=0,q=0,u=(0,l.xmu)(0,0,"A"),c=(0,l.dJt)(u,(0,o.nSR)(40,60)/10,(0,o.nSR)(70,100),"B"),h=(0,l.$7o)(c,u,(0,o.nSR)(20,50),(0,o.nSR)(8,12)/10,"C"),b=(0,l.R_h)(u,c,h),m=(0,l.uGk)(u,c,h),d=(0,l.T2s)(c,u,2+(0,l.InT)(u,c)),I=(0,o.nSR)(-45,-20),x=(0,l.Wnp)(u,d,I,"A"),$=(0,l.Wnp)(c,d,I,"B"),P=(0,l.Wnp)(h,d,I,"C"),p=(0,l.R_h)(x,$,P),(0,l.eeh)(p,["A_1","B_1","C_1"]),g=(0,l.Q2H)(u,x),f=(0,l.VTK)(x,$),y=(0,l.VTK)(u,x),A=(0,l.Vj7)(p,f),(0,l.eeh)(A,["A_1","B_1","C_1"]),B=(0,l.nP0)(u,x),C=(0,l.T2s)(g,d,5),_=(0,l.T2s)(d,g,10),M=(0,l.$7o)($,x,(0,o.nSR)(-40,-10),1.5,"D"),R=(0,l.Wnp)(A,M,180),(0,l.eeh)(R,["A_2","B_2","C_2"]),D=(0,l.xkU)(M,(0,l.tno)(c,u),"F"),V=(0,l.L6P)(M,D),E=(0,l.BD1)(M,D),T=(0,l.xkU)(R,(0,l.tno)(M,D)),(0,l.eeh)(T,["A_3","B_3","C_3"]),N=-(0,o.nSR)(80,110),F=(0,l.Wnp)(T,D,N),(0,l.eeh)(F,["A_4","B_4","C_4"]);for(let e=0;e<3;e++)Q=Math.min(Q,b.listePoints[e].x,p.listePoints[e].x,A.listePoints[e].x,R.listePoints[e].x,T.listePoints[e].x,F.listePoints[e].x),L=Math.max(L,b.listePoints[e].x,p.listePoints[e].x,A.listePoints[e].x,R.listePoints[e].x,T.listePoints[e].x,F.listePoints[e].x),S=Math.min(S,b.listePoints[e].y,p.listePoints[e].y,A.listePoints[e].y,R.listePoints[e].y,T.listePoints[e].y,F.listePoints[e].y),q=Math.max(q,b.listePoints[e].y,p.listePoints[e].y,A.listePoints[e].y,R.listePoints[e].y,T.listePoints[e].y,F.listePoints[e].y);L+=4,Q--,S--,q++,w=L-Q,z=q-S}let K="Construire<br>$A_1B_1C_1$ le triangle symétrique de $ABC$ par rapport à la droite $(d)$;<br>";K+="$A_2B_2C_2$ le triangle symétrique de $A_1B_1C_1$ par rapport au point $D$;<br>",K+="$A_3B_3C_3$ le triangle translaté de $A_2B_2C_2$ tel que $D$ soit transformé en $F$;<br>",K+=`$A_4B_4C_4$ le triangle obtenu par la rotation de $A_3B_3C_3$ de centre $F$ et d'angle $${Math.abs(N)}\\degree$ dans le sens des aiguilles d'une montre.<br>`,v=(0,l.VTK)((0,l.xmu)(Q,S+2),(0,l.xmu)(L,S+2)),k=(0,l.d8j)("(d)",(0,l.xkU)((0,l.Q2H)(c,$),(0,l.tno)(1,0)),"black",30,12,"");let U=(0,l.lhN)(b,B,`id='anim${e}A' begin="0s" dur ="2s" repeatcount="1" fill="freeze"`),j=(0,l.L5i)(A,M,180,`id='anim${e}B' begin="2s" dur ="2s" repeatcount="1" fill="freeze"`),J=(0,l.nl3)(R,(0,l.tno)(M,D),`id='anim${e}C' begin="4s" dur ="2s" repeatcount="1" fill="freeze"`),O=(0,l.L5i)(T,D,N,`id='anim${e}D' begin="6s" dur ="2s" repeatcount="1" fill="freeze"`);H.vitesse=15,H.tempo=.5,H.recadre(Q,q),H.polygoneRapide(...b.listePoints),H.pointsCreer(u,c,h,D,M),H.couleur="black",H.traitRapide(C,_),H.textePoint("(d)",(0,l.Q2H)(c,$)),H.symetrieAxialePolygone(b,B,["A_1","B_1","C_1"],{couleur:"blue",couleurCodage:"lightblue"}),H.demiTourPolygone(A,M,["A_2","B_2","C_2"],{couleur:"red",couleurCodage:"pink"}),H.translationPolygone(R,M,D,["A_3","B_3","C_3"],{couleur:"brown",couleurCodage:"orange"}),H.rotationPolygone(T,D,N,["A_4","B_4","C_4"],{couleur:"green",couleurCodage:"lightgreen"}),H.crayonMasquer(),n.Do.fenetreMathalea2d=[Q,S,L,q],i.push(b,m[1],V,E,B,k),t.push(b,m[1],V,E,B,k,A,(0,l.NVL)(A),R,(0,l.NVL)(R),T,(0,l.NVL)(T),F,(0,l.NVL)(F),U,j,J,O),s={xmin:Q,ymin:S,xmax:L,ymax:q,pixelsParCm:20,scale:1,mainlevee:!1},a={xmin:Q,ymin:S,xmax:L,ymax:q,pixelsParCm:20,scale:1},K+=(0,l.iR9)(s,i),W+=(0,l.iR9)(a,t),W+="<br>",W+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}A').beginElement()"><i class="redo circle icon"></i>symétrie axiale</button>`,W+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}B').beginElement()"><i class="redo circle icon"></i>symétrie centrale</button>`,W+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}C').beginElement()"><i class="redo circle icon"></i>translation</button>`,W+=`<button class="ui mini compact button"  style="margin:10px" onclick="document.getElementById('anim${e}D').beginElement()"><i class="redo circle icon"></i>rotation</button>`,W+=H.html(e),this.listeQuestions.push(K),this.listeCorrections.push(W),(0,o.K1R)(this)}}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=64085.0fc22b33097e3c9938a4.js.map