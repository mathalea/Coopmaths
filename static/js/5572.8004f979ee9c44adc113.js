(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5572,5216],{75572:(e,o,s)=>{"use strict";s.r(o),s.d(o,{amcReady:()=>a,amcType:()=>c,titre:()=>n,default:()=>u});var i=s(75216),r=s(89459),l=s(55339),t=s(44393);const a=!0,c=3,n="Compléter une représentation en perspective cavalière";function u(){i.default.call(this),this.titre=n,this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.classe=6,this.amcReady=a,this.amcType=c,this.nouvelleVersion=function(){let e;this.autoCorrection=[],e=3===this.sup?[1,2]:5===this.sup?[1,2,4]:7===this.sup?[1,2,4,6]:[parseInt(this.sup)];const o=(0,l.SRM)(e,this.nbQuestions);let s,i,a,c,n,u,p,h,b,m,d,g,y,x,f,C,k,E,X,M,D,Q,R,F,v,$,q,O,P,S,w,B,T,I,L,A,H,N;this.listeQuestions=[],this.listeCorrections=[],6===this.classe?e=[1,2]:5===this.classe?e=[1,2,4]:4===this.classe&&(e=[1,2,4,6]),u=1===this.sup2?.5:.8;let V=[],J=[];const K=(0,t.L6P)(f);for(let Y,j=0,z=0;j<this.nbQuestions&&z<50;){const e=(0,l.wnJ)(8,"PQ"),G=(0,l.q$q)([30,45,-30,-45,150,135,-150,-135]);switch(I=G%10==0?.6:.4,J=[],V=[],o[j]){case 1:L=`$${e}$ est un cube.<br>`,r.Do.isHtml&&(L+="Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>"),A="Figure complétée :<br>";break;case 2:L=`$${e}$ est un pavé droit.<br>`,r.Do.isHtml&&(L+="Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>"),A="Figure complétée :<br>";break;case 4:L="On considère un prisme à base triangulaire.<br>Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>",A="Figure complétée :<br>";break;case 6:L="On considère une pyramide à base rectangulaire.<br>Reproduire et compléter la figure ci-dessous, en repassant de la même couleur les segments parallèles et de même longueur.<br>",A="Figure complétée :<br>"}switch(o[j]%2){case 1:p=(0,t.xmu)(6,0,e[0],"left"),h=(0,t.xmu)(11,0,e[1],"right"),b=(0,t.xmu)(11,5,e[2],"right"),m=(0,t.xmu)(6,5,e[3],"left"),d=(0,t.$7o)(h,p,G,I,e[4],"left"),d.x=Math.round(d.x),d.y=Math.round(d.y);break;case 0:p=(0,t.xmu)(5,0,e[0],"left"),h=(0,t.xmu)(9+(0,l.nSR)(1,3),0,e[1],"right"),b=(0,t.xmu)(h.x,(0,l.nSR)(3,7),e[2],"right"),m=(0,t.xmu)(p.x,b.y,e[3],"left"),d=(0,t.$7o)(h,p,G,I*(0,l.nSR)(5,12)/10,e[4],"left"),d.x=Math.round(d.x),d.y=Math.round(d.y)}g=(0,t.I7O)(d,p,h,e[5],"right"),y=(0,t.I7O)(g,h,b,e[6],"right"),x=(0,t.I7O)(y,b,m,e[7],"left"),f=(0,t.Q2H)(m,y),K.taille=4,K.opacite=.9,K.epaisseur=5,K.style="x",C=(0,t.EXn)(p,h),k=(0,t.EXn)(h,b),E=(0,t.EXn)(b,m),X=(0,t.EXn)(m,p),M=(0,t.EXn)(d,g),D=(0,t.EXn)(g,y),Q=(0,t.EXn)(y,x),R=(0,t.EXn)(x,d),F=(0,t.EXn)(p,d),v=(0,t.EXn)(h,g),$=(0,t.EXn)(b,y),q=(0,t.EXn)(m,x),O=(0,t.EXn)(p,f),P=(0,t.EXn)(h,f),S=(0,t.EXn)(d,f),w=(0,t.EXn)(g,f),B=(0,t.EXn)(h,m),T=(0,t.EXn)(g,x),C.epaisseur=2,k.epaisseur=2,E.epaisseur=2,X.epaisseur=2,M.epaisseur=2,D.epaisseur=2,Q.epaisseur=2,R.epaisseur=2,F.epaisseur=2,v.epaisseur=2,$.epaisseur=2,q.epaisseur=2,O.epaisseur=1,P.epaisseur=1,S.epaisseur=1,w.epaisseur=1,B.epaisseur=2,T.epaisseur=2,C.color="black",k.color="black",E.color="black",X.color="black",M.color="black",D.color="black",Q.color="black",R.color="black",F.color="black",v.color="black",$.color="black",O.color="black",y.y<b.y&&y.x<b.x?($.pointilles=!0,Q.pointilles=!0,D.pointilles=!0,w.pointilles=!0,T.pointilles=!0,$.color="gray",Q.color="gray",D.color="gray",$.opacite=.7,Q.opacite=.7,D.opacite=.7):d.y>p.y&&d.x>p.x?(F.pointilles=!0,M.pointilles=!0,R.pointilles=!0,S.pointilles=!0,T.pointilles=!0,F.color="gray",M.color="gray",R.color="gray",F.opacite=.7,M.opacite=.7,R.opacite=.7):g.x<h.x&&g.y>h.y?(v.pointilles=!0,D.pointilles=!0,M.pointilles=!0,w.pointilles=!0,T.pointilles=!0,v.color="gray",D.color="gray",M.color="gray",v.opacite=.7,D.opacite=.7,M.opacite=.7):x.x>m.x&&x.y<m.y&&(q.pointilles=!0,Q.pointilles=!0,R.pointilles=!0,S.pointilles=!0,T.pointilles=!0,q.color="gray",Q.color="gray",R.color="gray",q.opacite=.7,Q.opacite=.7,R.opacite=.7),s=Math.min(p.x,d.x)-1,a=Math.min(p.y,d.y)-1,i=Math.max(h.x,g.x)+2,c=Math.max(m.y,x.y)+1,n=20,N=this.sup2<3?(0,t.flY)(s,a,i,c,"gray",.7):"",2===this.sup2?(H=(0,t.Sl2)(s,a,i,c),u=.8):(H="",u=.5);const U={xmin:s,ymin:a,xmax:i,ymax:c,pixelsParCm:20,scale:u};1===o[j]&&V.push(C,k,E,X,F,(0,t.BD1)(p,h,b,m,d),N,H),2===o[j]&&V.push(C,k,E,X,F,(0,t.BD1)(p,h,b,m,d),N,H),4===o[j]&&V.push(C,X,B,F,N,H),6===o[j]&&V.push(C,v,(0,t.L6P)(f,.5,"red"),(0,t.BD1)(f),N,H),L+=(0,t.iR9)(U,V),1===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",D.color="red",Q.color="green",R.color="red",F.color="blue",v.color="blue",$.color="blue",q.color="blue",J.push(C,k,E,X,M,D,Q,R,F,v,$,q,(0,t.BD1)(p,h,b,m,d,g,y,x),N,H)),2===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",D.color="red",Q.color="green",R.color="red",F.color="blue",v.color="blue",$.color="blue",q.color="blue",J.push(C,k,E,X,M,D,Q,R,F,v,$,q,(0,t.BD1)(p,h,b,m,d,g,y,x),N,H)),4===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",D.color="red",Q.color="green",R.color="red",F.color="blue",v.color="blue",$.color="blue",q.color="blue",J.push(C,X,B,M,R,F,v,q,T,N,H)),6===o[j]&&(C.color="green",k.color="red",E.color="green",X.color="red",M.color="green",D.color="red",Q.color="green",R.color="red",F.color="blue",v.color="blue",$.color="blue",q.color="blue",J.push(C,M,F,v,O,P,S,w,(0,t.L6P)(f),N,H)),A+=(0,t.iR9)(U,J),-1===this.listeQuestions.indexOf(Y)&&(this.listeQuestions.push(L+"<br>"),this.listeCorrections.push(A+"<br>"),this.autoCorrection[j]={enonce:L,propositions:[{texte:A,statut:3,feedback:""}]},j++),z++}(0,l.K1R)(this),r.Do.isAmc},this.besoinFormulaireNumerique=["Type de solides",3,"1 : Cubes\n 2 : Pavés droits\n 3 : Mélange cubes et pavés"],this.besoinFormulaire2Numerique=["Type de cahier",3,"1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche"]}},75216:(e,o,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(o),s.d(o,{default:()=>i})}}]);
//# sourceMappingURL=5572.8004f979ee9c44adc113.js.map