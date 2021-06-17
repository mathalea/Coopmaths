(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3323,7567],{83323:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>o,default:()=>u});var n=i(67567),t=i(24477),r=i(17199),a=i(41118);const o="Placer un événement sur une échelle de probabilités";function u(){n.default.call(this),this.titre=o,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacing=2:this.spacing=1,sortieHtml?this.spacingCorr=2:this.spacingCorr=1,this.sup=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[],s=[],i=[],n=[],o="",u=[["Impossible",0],["Improbable",(0,t.n0o)(1/6)],["Peu probable",(0,t.n0o)(2/6)],["Une chance sur deux",(0,t.n0o)(.5)],["Probable",(0,t.n0o)(4/6)],["Très probable",(0,t.n0o)(5/6)],["Certain",1]];e.push(["L’équipe de France de rugby va remporter le prochain match international de football",0]);let l=(0,t.q$q)(["un dragon","l'abominable homme des neiges","un chat-garou","un dahu","un hippocampéléphantocamélos","une licorne","le Minotaure"]);e.push([`Rencontrer ${l} en sortant du collège`,0]),e.push(["Le point M, placé à 4 cm de A, est sur le cercle de centre A et de rayon 7 cm",0]),e.push(["Le point M, placé à 4 cm de A, est dans le disque de centre A et de rayon 3 cm",0]),e.push(["En France, on peut trouver des vaches espagnoles qui parlent anglais",0]),e.push(["Aux USA, on peut trouver des pierres qui roulent et qui amassent de la mousse",0]),s.push(["Gagner le gros lot au loto",.05]),s.push(["Avoir de la neige à Nice en juillet",.05]);let h=(0,t.q$q)(["un As","un Roi","une Dame","un Valet","un 10","un 9","un 8","un 7","un 6","un 5","un 4","un 3","un 2"]);s.push([`Obtenir ${h} en prenant une carte au hasard dans un jeu de 52 cartes`,.08]),s.push(["Choisir une balle rouge dans un sac contenant une balle rouge et trois balles vertes",.25]),i.push(["Obtenir "+(0,t.q$q)(["pile","face"])+" quand on lance une pièce d’un euro",.5]),i.push(["Obtenir une carte "+(0,t.q$q)(["rouge","noire"])+" dans un jeu de 52 cartes",.5]),n.push(["La première voiture que je verrai en sortant du collège sera de marque française",.6]),n.push(["Le prochain président de la République Française aura plus de 40 ans",.9]),e.push(["Le prochain oiseau que je verrai aura des ailes",1]),e.push(["Le point M, placé à 4 cm de A, est sur le cercle de centre A et de rayon 4 cm",1]),e.push(["Le point M, placé à 4 cm de A, est dans le disque de centre A et de rayon 5 cm",1]);let c=(0,t.q$q)([4,6,8,10,12,20,24,30,48,60,100]),p=(0,t.nSR)(1,c);s.push([`Obtenir ${p} avec un dé à ${c} faces`,1/c]),(c-p+1)/c<.5?s.push([`Obtenir un nombre supérieur ou égal à ${p} avec un dé à ${c} faces`,(c-p+1)/c]):n.push([`Obtenir un nombre supérieur ou égal à ${p} avec un dé à ${c} faces`,(c-p+1)/c]),p/c<.5?s.push([`Obtenir un nombre inférieur ou égal à ${p} avec un dé à ${c} faces`,p/c]):n.push([`Obtenir un nombre inférieur ou égal à ${p} avec un dé à ${c} faces`,p/c]);let d=[];d.push((0,t.q$q)(e,d)),d.push((0,t.q$q)(s,d)),d.push((0,t.q$q)(i,d)),d.push((0,t.q$q)(n,d)),d=(0,t.TVQ)(d),o+="Placer la lettre correspondant à chaque évènement sur l'axe des probabilités ci-dessous.<br>";for(let e=0;e<4;e++)o+=String.fromCharCode(65+e)+" : "+d[e][0]+".<br>";let b=10,m=[],g=.25;m.push((0,r.EXn)(0,0,b,0)),m.push((0,r.EXn)(0,-g,0,g)),m.push((0,r.EXn)(b,-g,b,g)),m.push((0,r.EXn)(5,-g,5,g));let f=60;if(this.sup)for(let e=0;e<u.length;e++)m.push((0,r.Ots)(u[e][0],b*u[e][1],-.5,f,"black",1,"gauche"));else m.push((0,r.T7E)({x:5,y:-1,fraction:(0,a.Pj)(1,2),couleur:"black"})),m.push((0,r.Ots)("0",0,-.75,0,"black",1,"middle")),m.push((0,r.Ots)("1",b,-.75,0,"black",1,"middle"));sortieHtml?o+='<p style="display:block">':o+="\\begin{center}";let C=-2;this.sup&&(C=-4),o+=(0,r.iR9)({xmin:-1,xmax:13,ymin:C,ymax:1,pixelsParCm:40,scale:1},m),sortieHtml?o+="</p>":o+="\\end{center}";let q=" ",$=[0,0,0,0,0,0,0];f=0;let v=0,x=0;for(let e=0;e<4;e++){v=d[e][1],x=Math.round((0,t.n0o)(6*v)),$[x]+=.5;let s=String.fromCharCode(65+e);m.push((0,r.Ots)(s,(0,t.n0o)(b*v),$[x],0,"black",1,"middle")),m.push((0,r.L6P)((0,r.xmu)((0,t.n0o)(b*v),0),"blue"))}for(let e=0;e<4;e++)v=d[e][1],0==v?x=0:v<.25?x=1:v<.5?x=2:.5==v?x=3:v<.75?x=4:v<1?x=5:1==v&&(x=6),q+=String.fromCharCode(65+e)+" : "+d[e][0]+". "+(0,t.MZ9)(u[x][0])+".<br>";sortieHtml?q+='<p style="display:block">':q+="\\begin{center}",q+=(0,r.iR9)({xmin:-1,xmax:13,ymin:C,ymax:2,pixelsParCm:40,scale:1},m),sortieHtml?q+="</p>":q+="\\end{center}",this.listeQuestions.push(o),this.listeCorrections.push(q),(0,t.K1R)(this)},this.besoinFormulaireCaseACocher=["Changer le type d'axe"]}},67567:(e,s,i)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>n})}}]);