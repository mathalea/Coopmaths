(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[66943,63363,80059,23727,71129],{45749:(e,r,i)=>{"use strict";i.r(r),i.d(r,{titre:()=>l,default:()=>u});var t=i(71129),s=i(62259),o=i(63861),a=i(55802),n=i(39302);const l="Tracer des parallèles et des perpendiculaires";function u(){t.default.call(this),this.titre=l,this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.type=3,this.typeExercice="IEP",this.nouvelleVersion=function(){let e;e=[this.type];let r=(0,o.SRM)(e,this.nbQuestions);this.listeQuestions=[],this.listeCorrections=[];let i,t,l,u,p,c,h,b,$,d,m,x,y,f,g,v,A,M,C,R,E,T,B,k,D,S,I,q,N,X,F,P,H,U,V,Q,K,O,w,L,W=[],Z=[];for(let j,Y=0,z=0;Y<this.nbQuestions&&z<50;){switch(c=new n.Z,c.equerreZoom(150),W.length=0,Z.length=0,w=2==this.sup?.8:.5,r[Y]){case 1:for(h=(0,a.xmu)(0,0,"A","above left"),b=(0,a.xmu)(10,(0,o.nSR)(-4,4,[-1,0,1]),"B","above right"),A=(0,a.VTK)(h,b),A.isVisible=!0,$=(0,a.xmu)((0,o.nSR)(2,3),(0,o.nSR)(3,4),"C","above left"),d=(0,a.xmu)((0,o.nSR)(7,8),(0,o.nSR)(-7,-6),"D"),T=(0,a.vfb)(b,A),m=11,x=(0,a.KUA)(T,11,"E","left");!Number.isInteger(x.y);)m++,x=(0,a.KUA)(T,m,"E","left");y=(0,a.xmu)(x.x,b.y),M=(0,a.EXn)(b,y,"red"),M.epaisseur=2,M.pointilles=!0,C=(0,a.EXn)(y,x,"blue"),C.epaisseur=2,C.pointilles=!0,B=(0,a.vfb)($,A),k=(0,a.vfb)(d,A),K=(0,a.Wnp)(h,b,90),f=(0,a.H$o)(B,A,"M","below right"),g=(0,a.H$o)(k,A,"N","above left"),I=(0,o.vbX)((0,a.InT)(f,h)*w,1),q=(0,o.vbX)((0,a.InT)(g,h)*w,1),X=(0,a.lvA)(h,b,K),F=(0,a.lvA)($,f,b),P=(0,a.lvA)(d,g,b),Z.push(M,C,B,k,T,X,F,P,A,(0,a.L6P)(h,b,$,d,x,f,g),(0,a.BD1)(h,b,$,d,x,f,g),(0,a.gI5)((0,a.EXn)(h,f),`${(0,o.euh)(I)} cm`,.5,"red",1,.5,"red"),(0,a.gI5)((0,a.EXn)(h,g),`${(0,o.euh)(q)} cm`,-.5,"red",1,-.5,"red")),W.push((0,a.L6P)(h,b,$,d),(0,a.BD1)(h,b,$,d),A),R=s.Do.isHtml?(0,o.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,o.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",R+=(0,o.bk1)(1)+" Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>",R+=(0,o.bk1)(2)+" Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nommer $M$ le point d'intersection de cette droite avec la droite $(AB)$.<br>",R+=(0,o.bk1)(3)+" Tracer la droite perpendiculaire à $(AB)$ passant par $D$ et nommer $N$ le point d'intersection de cette droite avec la droite $(AB)$.<br>",R+=(0,o.bk1)(4)+" Mesurer ensuite les distances $AM$ et $AN$.<br> Pour l'auto-correction comparer ces mesures avec celles données dans la correction<br>",E=`<br>$AM \\approx ${(0,o.euh)(I)}$ cm et $AN \\approx ${(0,o.euh)(q)}$ cm.<br>`,E+="Pour la perpendiculaire en $B$, contrôle la position du point $E$.<br>",i=Math.floor(Math.min(h.x,b.x,$.x,d.x,x.x,f.x,g.x)-1),t=Math.ceil(Math.max(h.x,b.x,$.x,d.x,x.x,f.x,g.x)+1),l=Math.floor(Math.min(h.y,b.y,$.y,d.y,x.y,f.y,g.y)-1),u=Math.ceil(Math.max(h.y,b.y,$.y,d.y,x.y,f.y,g.y)+1),c.recadre(i-3,u),c.pointsCreer(h,b,$,d),c.regleDroite(h,b),c.perpendiculaireRegleEquerre2points3epoint(h,b,b),c.perpendiculaireRegleEquerre2points3epoint(h,b,$),c.perpendiculaireRegleEquerre2points3epoint(h,b,d);break;case 2:h=(0,a.xmu)(2,0,"A","below left"),b=(0,a.xmu)(12,(0,o.nSR)(-4,4,0),"B"),A=(0,a.VTK)(h,b),A.isVisible=!0,$=(0,a.xmu)(0,(0,o.nSR)(3,4),"C","above"),d=(0,a.xmu)((0,o.nSR)(7,8),(0,o.nSR)(-7,-6),"D","below right"),x=(0,a.xmu)((0,o.nSR)(4,5),(0,o.nSR)(5,6),"E","below right"),y=(0,a.xmu)(2,-3,"F","left"),D=(0,a.R2U)(x,A),B=(0,a.R2U)($,A),k=(0,a.R2U)(d,A),L=(0,a.VTK)(h,y),L.isVisible=!0,f=(0,a.H$o)(B,L,"M","above left"),g=(0,a.H$o)(k,L,"N","above left"),v=(0,a.H$o)(D,L,"O","above left"),I=(0,o.vbX)((0,a.InT)(f,h)*w,1),q=(0,o.vbX)((0,a.InT)(g,h)*w,1),N=(0,o.vbX)((0,a.InT)(v,h)*w,1),Z.push(B,k,D,A,L,(0,a.L6P)(h,b,$,d,x,y),(0,a.BD1)(h,b,$,d,x,y,f,g,v),(0,a.gI5)((0,a.EXn)(h,f),`${(0,o.euh)(I)} cm`,.2,"red",1,.5,"red"),(0,a.gI5)((0,a.EXn)(g,h),`${(0,o.euh)(q)} cm`,-.2,"green",1,-.5,"green"),(0,a.gI5)((0,a.EXn)(h,v),`${(0,o.euh)(N)} cm`,-.2,"blue",1,-.5,"blue")),W.push((0,a.L6P)(h,b,$,d,x,y),(0,a.BD1)(h,b,$,d,x,y),A,L),R=s.Do.isHtml?(0,o.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,o.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",R+=(0,o.bk1)(1)+" Tracer la droite parallèle à $(AB)$ passant par $C$ et nommer $M$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",R+=(0,o.bk1)(2)+" Tracer la droite parallèle à $(AB)$ passant par $D$ et nommer $N$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",R+=(0,o.bk1)(3)+" Tracer la droite parallèle à $(AB)$ passant par $E$ et nommer $O$, le point d'intersection de cette droite avec la droite $(AF)$.<br>",R+=(0,o.bk1)(4)+" Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>",E=`<br>$AM \\approx ${(0,o.euh)(I)}$ cm, $AN \\approx ${(0,o.euh)(q)}$ cm et $AO \\approx${(0,o.euh)(N)}$ cm.<br>`,i=Math.floor(Math.min(h.x,b.x,$.x,d.x,x.x,y.x,v.x,f.x,g.x)-1),t=Math.ceil(Math.max(h.x,b.x,$.x,d.x,x.x,y.x,v.x,f.x,g.x)+1),l=Math.floor(Math.min(h.y,b.y,$.y,d.y,x.y,y.y,v.y,f.y,g.y)-1),u=Math.ceil(Math.max(h.y,b.y,$.y,d.y,x.y,y.y,v.y,f.y,g.y)+1),c.recadre(i-3,u),c.pointsCreer(h,b,$,d,x),c.regleDroite(h,b),c.paralleleRegleEquerre2points3epoint(h,b,$),c.paralleleRegleEquerre2points3epoint(h,b,d),c.paralleleRegleEquerre2points3epoint(h,b,x);break;case 3:for(h=(0,a.xmu)(0,0,"A","above left"),b=(0,a.xmu)(10,(0,o.nSR)(-4,4,[-1,0,1]),"B","above right"),A=(0,a.VTK)(h,b),A.isVisible=!0,$=(0,a.xmu)((0,o.nSR)(2,3),(0,o.nSR)(3,4),"C","above left"),d=(0,a.xmu)((0,o.nSR)(7,8),(0,o.nSR)(-7,-6),"D"),T=(0,a.vfb)(b,A),m=11,x=(0,a.KUA)(T,11,"E","left");!Number.isInteger(x.y);)m++,x=(0,a.KUA)(T,m,"E","left");y=(0,a.xmu)(x.x,b.y),D=(0,a.R2U)(x,A),k=(0,a.R2U)(d,A),B=(0,a.vfb)($,A),K=(0,a.Wnp)(h,b,90),f=(0,a.H$o)(B,A,"M","below right"),g=(0,a.H$o)(k,T,"N","above left"),v=(0,a.H$o)(B,D,"O","above left"),Q=(0,a.H$o)(k,B),I=(0,o.vbX)((0,a.InT)(f,h)*w,1),q=(0,o.vbX)((0,a.InT)(g,h)*w,1),N=(0,o.vbX)((0,a.InT)(v,h)*w,1),X=(0,a.lvA)(h,b,K),F=(0,a.lvA)($,f,b),P=(0,a.lvA)(d,g,b,"red"),H=(0,a.lvA)(b,x,v,"red"),U=(0,a.lvA)($,v,x,"red"),V=(0,a.lvA)($,Q,d,"red"),Z.push(B,k,T,D,X,F,P,H,U,V,A,(0,a.L6P)(h,b,$,d,x,f,g,v),(0,a.BD1)(h,b,$,d,x,f,g,v),(0,a.gI5)((0,a.EXn)(h,f),`${(0,o.euh)(I)} cm`,.5,"red",1,.5,"red"),(0,a.gI5)((0,a.EXn)(h,g),`${(0,o.euh)(q)} cm`,0,"blue",1,-.5,"blue"),(0,a.gI5)((0,a.EXn)(h,v),`${(0,o.euh)(N)} cm`,0,"green",1,-.5,"green")),W.push((0,a.L6P)(h,b,$,d,x),(0,a.BD1)(h,b,$,d,x),A),R=s.Do.isHtml?(0,o.bk1)(0)+" Reproduire la figure ci-dessous.<br>":(0,o.bk1)(0)+" Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>",R+=(0,o.bk1)(1)+" Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>",R+=(0,o.bk1)(2)+" Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nomme $M$, le point d'intersection de cette droite avec la droite $(AB)$.<br>",R+=(0,o.bk1)(3)+" Tracer la droite parallèle à $(AB)$ passant par $D$ et nomme $N$, le point d'intersection de cette droite avec la droite $(BE)$.<br>",R+=(0,o.bk1)(4)+" Tracer la droite parallèle à $(AB)$ passant par $E$ et nomme $O$, le point d'intersection de cette droite avec la droite $(CM)$.<br>",R+=(0,o.bk1)(5)+" Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>",E=`<br>$AM \\approx ${(0,o.euh)(I)}$ cm, $AN \\approx ${(0,o.euh)(q)}$ cm et $AO \\approx${(0,o.euh)(N)}$ cm.<br>`,E+=`Les angle droits en rouge se justifient par la propriété :<br> ${(0,o.pRK)("Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est aussi perpendiculaire à l'autre","red")}.<br>`,E+="Vérifier les angles droits à l'équerre.<br>",i=Math.floor(Math.min(h.x,b.x,$.x,d.x,x.x,y.x,v.x,f.x,g.x)-1),t=Math.ceil(Math.max(h.x,b.x,$.x,d.x,x.x,y.x,v.x,f.x,g.x)+1),l=Math.floor(Math.min(h.y,b.y,$.y,d.y,x.y,y.y,v.y,f.y,g.y)-1),u=Math.ceil(Math.max(h.y,b.y,$.y,d.y,x.y,y.y,v.y,f.y,g.y)+1),c.recadre(i-3,u),c.pointsCreer(h,b,$,d,x),c.regleDroite(h,b),c.perpendiculaireRegleEquerre2points3epoint(h,b,b),c.perpendiculaireRegleEquerre2points3epoint(h,b,$),c.paralleleRegleEquerre2points3epoint(h,b,d),c.paralleleRegleEquerre2points3epoint(h,b,x)}S=this.sup<3?(0,a.flY)(i,l,t,u,"gray",.7):"",2==this.sup?(p=.8,O=(0,a.Sl2)(i,l,t,u)):(p=.5,O=""),W.push(S,O),Z.push(S,O),R+=(0,a.iR9)({xmin:i,ymin:l,xmax:t,ymax:u,pixelsParCm:20,scale:p},W),E+=(0,a.iR9)({xmin:i,ymin:l,xmax:t,ymax:u,pixelsParCm:20,scale:p},Z),E+=c.htmlBouton(this.numeroExercice,Y),-1===this.listeQuestions.indexOf(j)&&(this.listeQuestions.push(R+"<br>"),this.listeCorrections.push(E+"<br>"),Y++),z++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Type de cahier",3,"1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche"]}},23046:(e,r,i)=>{"use strict";i.r(r),i.d(r,{titre:()=>s,default:()=>o});var t=i(45749);const s="Tracer des parallèles";function o(){t.default.call(this),this.titre=s,this.sup=1,this.type=2}},71129:(e,r,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(r),i.d(r,{default:()=>t})}}]);
//# sourceMappingURL=66943.264358f282b2584ec32a.js.map