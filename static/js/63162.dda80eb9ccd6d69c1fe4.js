"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[63162,17007],{63162:(e,o,s)=>{s.r(o),s.d(o,{amcReady:()=>n,amcType:()=>a,titre:()=>c,default:()=>u});var i=s(17007),r=s(66170),t=s(30169),l=s(92329);const n=!0,a="AMCOpen",c="Compléter une représentation en perspective cavalière";function u(){i.default.call(this),this.titre=c,this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.classe=6,this.amcReady=n,this.amcType=a,this.nouvelleVersion=function(){let e;this.autoCorrection=[],e=3===this.sup?[1,2]:5===this.sup?[1,2,4]:7===this.sup?[1,2,4,6]:[parseInt(this.sup)];const o=(0,t.SRM)(e,this.nbQuestions);let s,i,n,a,c,u,p,h,b,m,g,d,x,y,f,C,k,E,X,M,F,D,R,Q,v,A,O,$,q,P,S,T,I,w,B,N,L,H;this.listeQuestions=[],this.listeCorrections=[],6===this.classe?e=[1,2]:5===this.classe?e=[1,2,4]:4===this.classe&&(e=[1,2,4,6]),u=1===parseInt(this.sup2)?.5:.8;let V=[],J=[];const K=(0,l.L6P)(f);for(let Y,j=0,z=0;j<this.nbQuestions&&z<50;){const e=(0,t.wnJ)(8,"PQ"),G=(0,t.q$q)([30,45,-30,-45,150,135,-150,-135]);switch(w=G%10==0?.6:.4,J=[],V=[],o[j]){case 1:B=`$${e}$ est un cube.<br>`,r.Do.isHtml&&(B+="Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>"),N="Figure complétée :<br>";break;case 2:B=`$${e}$ est un pavé droit.<br>`,r.Do.isHtml&&(B+="Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>"),N="Figure complétée :<br>";break;case 4:B="On considère un prisme à base triangulaire.<br>Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>",N="Figure complétée :<br>";break;case 6:B="On considère une pyramide à base rectangulaire.<br>Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>",N="Figure complétée :<br>"}switch(o[j]%2){case 1:p=(0,l.xmu)(6,0,e[0],"left"),h=(0,l.xmu)(11,0,e[1],"right"),b=(0,l.xmu)(11,5,e[2],"right"),m=(0,l.xmu)(6,5,e[3],"left"),g=(0,l.$7o)(h,p,G,w,e[4],"left"),g.x=Math.round(g.x),g.y=Math.round(g.y);break;case 0:p=(0,l.xmu)(5,0,e[0],"left"),h=(0,l.xmu)(9+(0,t.nSR)(1,3),0,e[1],"right"),b=(0,l.xmu)(h.x,(0,t.nSR)(3,7),e[2],"right"),m=(0,l.xmu)(p.x,b.y,e[3],"left"),g=(0,l.$7o)(h,p,G,w*(0,t.nSR)(5,12)/10,e[4],"left"),g.x=Math.round(g.x),g.y=Math.round(g.y)}d=(0,l.I7O)(g,p,h,e[5],"right"),x=(0,l.I7O)(d,h,b,e[6],"right"),y=(0,l.I7O)(x,b,m,e[7],"left"),f=(0,l.Q2H)(m,x),K.taille=4,K.opacite=.9,K.epaisseur=5,K.style="x",C=(0,l.EXn)(p,h),k=(0,l.EXn)(h,b),E=(0,l.EXn)(b,m),X=(0,l.EXn)(m,p),M=(0,l.EXn)(g,d),F=(0,l.EXn)(d,x),D=(0,l.EXn)(x,y),R=(0,l.EXn)(y,g),Q=(0,l.EXn)(p,g),v=(0,l.EXn)(h,d),A=(0,l.EXn)(b,x),O=(0,l.EXn)(m,y),$=(0,l.EXn)(p,f),q=(0,l.EXn)(h,f),P=(0,l.EXn)(g,f),S=(0,l.EXn)(d,f),T=(0,l.EXn)(h,m),I=(0,l.EXn)(d,y),C.epaisseur=2,k.epaisseur=2,E.epaisseur=2,X.epaisseur=2,M.epaisseur=2,F.epaisseur=2,D.epaisseur=2,R.epaisseur=2,Q.epaisseur=2,v.epaisseur=2,A.epaisseur=2,O.epaisseur=2,$.epaisseur=1,q.epaisseur=1,P.epaisseur=1,S.epaisseur=1,T.epaisseur=2,I.epaisseur=2,C.color="black",k.color="black",E.color="black",X.color="black",M.color="black",F.color="black",D.color="black",R.color="black",Q.color="black",v.color="black",A.color="black",$.color="black",x.y<b.y&&x.x<b.x?(A.pointilles=!0,D.pointilles=!0,F.pointilles=!0,S.pointilles=!0,I.pointilles=!0,A.color="gray",D.color="gray",F.color="gray",A.opacite=.7,D.opacite=.7,F.opacite=.7):g.y>p.y&&g.x>p.x?(Q.pointilles=!0,M.pointilles=!0,R.pointilles=!0,P.pointilles=!0,I.pointilles=!0,Q.color="gray",M.color="gray",R.color="gray",Q.opacite=.7,M.opacite=.7,R.opacite=.7):d.x<h.x&&d.y>h.y?(v.pointilles=!0,F.pointilles=!0,M.pointilles=!0,S.pointilles=!0,I.pointilles=!0,v.color="gray",F.color="gray",M.color="gray",v.opacite=.7,F.opacite=.7,M.opacite=.7):y.x>m.x&&y.y<m.y&&(O.pointilles=!0,D.pointilles=!0,R.pointilles=!0,P.pointilles=!0,I.pointilles=!0,O.color="gray",D.color="gray",R.color="gray",O.opacite=.7,D.opacite=.7,R.opacite=.7),s=Math.min(p.x,g.x)-1,n=Math.min(p.y,g.y)-1,i=Math.max(h.x,d.x)+2,a=Math.max(m.y,y.y)+1,c=20,H=this.sup2<3?(0,l.flY)(s,n,i,a,"gray",.7):"",2===parseInt(this.sup2)?(L=(0,l.Sl2)(s,n,i,a),u=.8):(L="",u=.5);const U={xmin:s,ymin:n,xmax:i,ymax:a,pixelsParCm:20,scale:u};1===o[j]&&V.push(C,k,E,X,Q,(0,l.BD1)(p,h,b,m,g),H,L),2===o[j]&&V.push(C,k,E,X,Q,(0,l.BD1)(p,h,b,m,g),H,L),4===o[j]&&V.push(C,X,T,Q,H,L),6===o[j]&&V.push(C,v,(0,l.L6P)(f,.5,"red"),(0,l.BD1)(f),H,L),B+=(0,l.iR9)(U,V),1===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",F.color="red",D.color="green",R.color="red",Q.color="blue",v.color="blue",A.color="blue",O.color="blue",J.push(C,k,E,X,M,F,D,R,Q,v,A,O,(0,l.BD1)(p,h,b,m,g,d,x,y),H,L)),2===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",F.color="red",D.color="green",R.color="red",Q.color="blue",v.color="blue",A.color="blue",O.color="blue",J.push(C,k,E,X,M,F,D,R,Q,v,A,O,(0,l.BD1)(p,h,b,m,g,d,x,y),H,L)),4===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",F.color="red",D.color="green",R.color="red",Q.color="blue",v.color="blue",A.color="blue",O.color="blue",J.push(C,X,T,M,R,Q,v,O,I,H,L)),6===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",F.color="red",D.color="green",R.color="red",Q.color="blue",v.color="blue",A.color="blue",O.color="blue",J.push(C,M,Q,v,$,q,P,S,(0,l.L6P)(f),H,L)),N+=(0,l.iR9)(U,J),-1===this.listeQuestions.indexOf(Y)&&(this.listeQuestions.push(B+"<br>"),this.listeCorrections.push(N+"<br>"),this.autoCorrection[j]={enonce:B,propositions:[{texte:N,statut:3,feedback:""}]},j++),z++}(0,t.K1R)(this)},this.besoinFormulaireNumerique=["Type de solides",3,"1 : Cubes\n 2 : Pavés droits\n 3 : Mélange cubes et pavés"],this.besoinFormulaire2Numerique=["Type de cahier",3,"1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche"]}},17007:(e,o,s)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...o){0===e&&(this.listeArguments=[]);let s="";for(const i of o)void 0!==i&&(s+=i.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(o),s.d(o,{default:()=>i})}}]);
//# sourceMappingURL=63162.dda80eb9ccd6d69c1fe4.js.map