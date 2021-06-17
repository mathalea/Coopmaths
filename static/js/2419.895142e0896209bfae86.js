(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2419,975,9678,7567],{69266:(e,r,i)=>{"use strict";i.r(r),i.d(r,{titre:()=>n,default:()=>l});var t=i(67567),s=i(24477),o=i(17199),a=i(7616);const n="Tracer des parallèles et des perpendiculaires";function l(){t.default.call(this),this.titre=n,this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.type=3,this.typeExercice="IEP",this.nouvelleVersion=function(e){let r;r=[this.type];let i=(0,s.SRM)(r,this.nbQuestions);this.listeQuestions=[],this.listeCorrections=[];let t,n,l,p,u,c,$,b,h,d,m,x,y,f,g,v,A,M,R,C,E,B,k,T,D,S,I,X,q,N,P,U,H,V,Q,w,F,K,O,L,W=[],Z=[];for(let r,j=0,Y=0;j<this.nbQuestions&&Y<50;){switch(c=new a.Z,c.equerreZoom(150),W.length=0,Z.length=0,O=2==this.sup?.8:.5,i[j]){case 1:for($=(0,o.xmu)(0,0,"A","above left"),b=(0,o.xmu)(10,(0,s.nSR)(-4,4,[-1,0,1]),"B","above right"),A=(0,o.VTK)($,b),A.isVisible=!0,h=(0,o.xmu)((0,s.nSR)(2,3),(0,s.nSR)(3,4),"C","above left"),d=(0,o.xmu)((0,s.nSR)(7,8),(0,s.nSR)(-7,-6),"D"),B=(0,o.vfb)(b,A),m=11,x=(0,o.KUA)(B,11,"E","left");!Number.isInteger(x.y);)m++,x=(0,o.KUA)(B,m,"E","left");y=(0,o.xmu)(x.x,b.y),M=(0,o.EXn)(b,y,"red"),M.epaisseur=2,M.pointilles=!0,R=(0,o.EXn)(y,x,"blue"),R.epaisseur=2,R.pointilles=!0,k=(0,o.vfb)(h,A),T=(0,o.vfb)(d,A),F=(0,o.Wnp)($,b,90),f=(0,o.H$o)(k,A,"M","below right"),g=(0,o.H$o)(T,A,"N","above left"),I=(0,s.vbX)((0,o.InT)(f,$)*O,1),X=(0,s.vbX)((0,o.InT)(g,$)*O,1),N=(0,o.lvA)($,b,F),P=(0,o.lvA)(h,f,b),U=(0,o.lvA)(d,g,b),Z.push(M,R,k,T,B,N,P,U,A,(0,o.L6P)($,b,h,d,x,f,g),(0,o.BD1)($,b,h,d,x,f,g),(0,o.gI5)((0,o.EXn)($,f),`${(0,s.euh)(I)} cm`,.5,"red",1,.5,"red"),(0,o.gI5)((0,o.EXn)($,g),`${(0,s.euh)(X)} cm`,-.5,"red",1,-.5,"red")),W.push((0,o.L6P)($,b,h,d),(0,o.BD1)($,b,h,d),A),C=sortieHtml?(0,s.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,s.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",C+=(0,s.bk1)(1)+" Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>",C+=(0,s.bk1)(2)+" Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nommer $M$ le point d'intersection de cette droite avec la droite $(AB)$.<br>",C+=(0,s.bk1)(3)+" Tracer la droite perpendiculaire à $(AB)$ passant par $D$ et nommer $N$ le point d'intersection de cette droite avec la droite $(AB)$.<br>",C+=(0,s.bk1)(4)+" Mesurer ensuite les distances $AM$ et $AN$.<br> Pour l'auto-correction comparer ces mesures avec celles données dans la correction<br>",E=`<br>$AM \\approx ${(0,s.euh)(I)}$ cm et $AN \\approx ${(0,s.euh)(X)}$ cm.<br>`,E+="Pour la perpendiculaire en $B$, contrôle la position du point $E$.<br>",t=Math.floor(Math.min($.x,b.x,h.x,d.x,x.x,f.x,g.x)-1),n=Math.ceil(Math.max($.x,b.x,h.x,d.x,x.x,f.x,g.x)+1),l=Math.floor(Math.min($.y,b.y,h.y,d.y,x.y,f.y,g.y)-1),p=Math.ceil(Math.max($.y,b.y,h.y,d.y,x.y,f.y,g.y)+1),c.recadre(t-3,p),c.pointsCreer($,b,h,d),c.regleDroite($,b),c.perpendiculaireRegleEquerre2points3epoint($,b,b),c.perpendiculaireRegleEquerre2points3epoint($,b,h),c.perpendiculaireRegleEquerre2points3epoint($,b,d);break;case 2:$=(0,o.xmu)(2,0,"A","below left"),b=(0,o.xmu)(12,(0,s.nSR)(-4,4,0),"B"),A=(0,o.VTK)($,b),A.isVisible=!0,h=(0,o.xmu)(0,(0,s.nSR)(3,4),"C","above"),d=(0,o.xmu)((0,s.nSR)(7,8),(0,s.nSR)(-7,-6),"D","below right"),x=(0,o.xmu)((0,s.nSR)(4,5),(0,s.nSR)(5,6),"E","below right"),y=(0,o.xmu)(2,-3,"F","left"),D=(0,o.R2U)(x,A),k=(0,o.R2U)(h,A),T=(0,o.R2U)(d,A),L=(0,o.VTK)($,y),L.isVisible=!0,f=(0,o.H$o)(k,L,"M","above left"),g=(0,o.H$o)(T,L,"N","above left"),v=(0,o.H$o)(D,L,"O","above left"),I=(0,s.vbX)((0,o.InT)(f,$)*O,1),X=(0,s.vbX)((0,o.InT)(g,$)*O,1),q=(0,s.vbX)((0,o.InT)(v,$)*O,1),Z.push(k,T,D,A,L,(0,o.L6P)($,b,h,d,x,y),(0,o.BD1)($,b,h,d,x,y,f,g,v),(0,o.gI5)((0,o.EXn)($,f),`${(0,s.euh)(I)} cm`,.2,"red",1,.5,"red"),(0,o.gI5)((0,o.EXn)(g,$),`${(0,s.euh)(X)} cm`,-.2,"green",1,-.5,"green"),(0,o.gI5)((0,o.EXn)($,v),`${(0,s.euh)(q)} cm`,-.2,"blue",1,-.5,"blue")),W.push((0,o.L6P)($,b,h,d,x,y),(0,o.BD1)($,b,h,d,x,y),A,L),C=sortieHtml?(0,s.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,s.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",C+=(0,s.bk1)(1)+" Tracer la droite parallèle à $(AB)$ passant par $C$ et nommer $M$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",C+=(0,s.bk1)(2)+" Tracer la droite parallèle à $(AB)$ passant par $D$ et nommer $N$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",C+=(0,s.bk1)(3)+" Tracer la droite parallèle à $(AB)$ passant par $E$ et nommer $O$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",C+=(0,s.bk1)(4)+" Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>",E=`<br>$AM \\approx ${(0,s.euh)(I)}$ cm, $AN \\approx ${(0,s.euh)(X)}$ cm et $AO \\approx${(0,s.euh)(q)}$ cm.<br>`,t=Math.floor(Math.min($.x,b.x,h.x,d.x,x.x,y.x,v.x,f.x,g.x)-1),n=Math.ceil(Math.max($.x,b.x,h.x,d.x,x.x,y.x,v.x,f.x,g.x)+1),l=Math.floor(Math.min($.y,b.y,h.y,d.y,x.y,y.y,v.y,f.y,g.y)-1),p=Math.ceil(Math.max($.y,b.y,h.y,d.y,x.y,y.y,v.y,f.y,g.y)+1),c.recadre(t-3,p),c.pointsCreer($,b,h,d,x),c.regleDroite($,b),c.paralleleRegleEquerre2points3epoint($,b,h),c.paralleleRegleEquerre2points3epoint($,b,d),c.paralleleRegleEquerre2points3epoint($,b,x);break;case 3:for($=(0,o.xmu)(0,0,"A","above left"),b=(0,o.xmu)(10,(0,s.nSR)(-4,4,[-1,0,1]),"B","above right"),A=(0,o.VTK)($,b),A.isVisible=!0,h=(0,o.xmu)((0,s.nSR)(2,3),(0,s.nSR)(3,4),"C","above left"),d=(0,o.xmu)((0,s.nSR)(7,8),(0,s.nSR)(-7,-6),"D"),B=(0,o.vfb)(b,A),m=11,x=(0,o.KUA)(B,11,"E","left");!Number.isInteger(x.y);)m++,x=(0,o.KUA)(B,m,"E","left");y=(0,o.xmu)(x.x,b.y),D=(0,o.R2U)(x,A),T=(0,o.R2U)(d,A),k=(0,o.vfb)(h,A),F=(0,o.Wnp)($,b,90),f=(0,o.H$o)(k,A,"M","below right"),g=(0,o.H$o)(T,B,"N","above left"),v=(0,o.H$o)(k,D,"O","above left"),w=(0,o.H$o)(T,k),I=(0,s.vbX)((0,o.InT)(f,$)*O,1),X=(0,s.vbX)((0,o.InT)(g,$)*O,1),q=(0,s.vbX)((0,o.InT)(v,$)*O,1),N=(0,o.lvA)($,b,F),P=(0,o.lvA)(h,f,b),U=(0,o.lvA)(d,g,b,"red"),H=(0,o.lvA)(b,x,v,"red"),V=(0,o.lvA)(h,v,x,"red"),Q=(0,o.lvA)(h,w,d,"red"),Z.push(k,T,B,D,N,P,U,H,V,Q,A,(0,o.L6P)($,b,h,d,x,f,g,v),(0,o.BD1)($,b,h,d,x,f,g,v),(0,o.gI5)((0,o.EXn)($,f),`${(0,s.euh)(I)} cm`,.5,"red",1,.5,"red"),(0,o.gI5)((0,o.EXn)($,g),`${(0,s.euh)(X)} cm`,0,"blue",1,-.5,"blue"),(0,o.gI5)((0,o.EXn)($,v),`${(0,s.euh)(q)} cm`,0,"green",1,-.5,"green")),W.push((0,o.L6P)($,b,h,d,x),(0,o.BD1)($,b,h,d,x),A),C=sortieHtml?(0,s.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,s.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",C+=(0,s.bk1)(1)+" Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>",C+=(0,s.bk1)(2)+" Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nomme $M$, le point d'intersection de cette droite avec la droite $(AB)$.<br>",C+=(0,s.bk1)(3)+" Tracer la droite parallèle à $(AB)$ passant par $D$ et nomme $N$, le point d'intersection de cette droite avec la droite $(BE)$.<br>",C+=(0,s.bk1)(4)+" Tracer la droite parallèle à $(AB)$ passant par $E$ et nomme $O$, le point d'intersection de cette droite avec la droite $(CM)$.<br>",C+=(0,s.bk1)(5)+" Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>",E=`<br>$AM \\approx ${(0,s.euh)(I)}$ cm, $AN \\approx ${(0,s.euh)(X)}$ cm et $AO \\approx${(0,s.euh)(q)}$ cm.<br>`,E+=`Les angle droits en rouge se justifient par la propriété :<br> ${(0,s.Udc)("Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est aussi perpendiculaire à l'autre","red")}.<br>`,E+="Vérifier les angles droits à l'équerre.<br>",t=Math.floor(Math.min($.x,b.x,h.x,d.x,x.x,y.x,v.x,f.x,g.x)-1),n=Math.ceil(Math.max($.x,b.x,h.x,d.x,x.x,y.x,v.x,f.x,g.x)+1),l=Math.floor(Math.min($.y,b.y,h.y,d.y,x.y,y.y,v.y,f.y,g.y)-1),p=Math.ceil(Math.max($.y,b.y,h.y,d.y,x.y,y.y,v.y,f.y,g.y)+1),c.recadre(t-3,p),c.pointsCreer($,b,h,d,x),c.regleDroite($,b),c.perpendiculaireRegleEquerre2points3epoint($,b,b),c.perpendiculaireRegleEquerre2points3epoint($,b,h),c.paralleleRegleEquerre2points3epoint($,b,d),c.paralleleRegleEquerre2points3epoint($,b,x)}S=this.sup<3?(0,o.flY)(t,l,n,p,"gray",.7):"",2==this.sup?(u=.8,K=(0,o.Sl2)(t,l,n,p)):(u=.5,K=""),W.push(S,K),Z.push(S,K),C+=(0,o.iR9)({xmin:t,ymin:l,xmax:n,ymax:p,pixelsParCm:20,scale:u},W),E+=(0,o.iR9)({xmin:t,ymin:l,xmax:n,ymax:p,pixelsParCm:20,scale:u},Z),E+=c.htmlBouton(e,j),-1==this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(C+"<br>"),this.listeCorrections.push(E+"<br>"),j++),Y++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Type de cahier",3,"1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche"]}},67567:(e,r,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(r),i.d(r,{default:()=>t})}}]);