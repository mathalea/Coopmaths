"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[86601,17007],{86601:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>u,amcReady:()=>l,amcType:()=>h,interactifReady:()=>c,interactifType:()=>b,default:()=>m});var t=i(17007),n=i(30169),o=i(92329),r=i(66170),a=i(75664);const u="Lire un diagramme en barre",l=!0,h="AMCHybride",c=!0,b="mathLive";function m(){t.default.call(this),this.consigne="Répondre aux questions à l'aide du graphique.",this.nbQuestions=3,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.interactif=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=["girafes","zèbres","gnous","buffles","gazelles","crocodiles","rhinocéros","léopards","guépards","hyènes","lycaons","servals","phacochères"];let s=4;switch(parseInt(this.sup)){case 1:s=4;break;case 2:s=5;break;case 3:s=6;break;default:s=4}const i=[],t=[],u=[],l=[],h=[];let c,b,m,d=[10,20,30,40,50,60,70,80,90,100],p=0;switch(parseInt(this.sup2)){case 1:for(let e=0;e<s;e++)p=(0,n.nSR)(2,100,d),h.push(p),d=d.concat([p-1,p,p+1]);break;case 2:for(let e=0;e<s;e++)p=(0,n.nSR)(2,100,d),h.push(10*p),d=d.concat([p-1,p,p+1])}for(let o=0;o<s;o++)c=(0,n.q$q)(e,l),l.push(c);const x=Math.min(...h),f=Math.max(...h);b="Dans le parc naturel de "+(0,n.q$q)(["Dramve","Fatenmin","Batderfa","Vihi","Genser","Barbetdou","Dramrendu","Secai","Cipeudram","Cigel","Lisino","Fohenlan","Farnfoss","Kinecardine","Zeffari","Barmwich","Swadlincote","Swordbreak","Loshull","Ruyron","Fluasall","Blueross","Vlane"])+", il y a beaucoup d’animaux.<br>Voici un diagramme en bâtons qui donne le nombre d’individus pour chaque espèce.<br>",r.Do.isAmc?(b+="1) Quels sont les animaux les plus nombreux ?<br>",b+="2) Quels sont les animaux les moins nombreux ?<br>"):(b+=(0,n.bk1)(0)+" Quels sont les animaux les plus nombreux ?"+(0,a.te)(this,0,{texte:(0,n.sp)(5)+"les"}),b+="<br>"+(0,n.bk1)(1)+" Quels sont les animaux les moins nombreux ?"+(0,a.te)(this,1,{texte:(0,n.sp)(5)+"les"})+"<br>",(0,a.Iq)(this,0,l[h.indexOf(f)]),(0,a.Iq)(this,1,l[h.indexOf(x)]));const C=(0,n.nSR)(0,s-1);switch(parseInt(this.sup2)){case 1:r.Do.isAmc?b+="3) Donner un encadrement à la dizaine du nombre de "+l[C]+" ?<br>":(b+=(0,n.bk1)(2)+" Donner un encadrement à la dizaine du nombre de "+l[C]+" ?<br>",b+=(0,a.G5)(this,2,"largeur10 inline",{texte:(0,n.sp)(5)})+(0,n.sp)(10)+`< nombre de ${l[C]} < `,b+=(0,a.G5)(this,3,"largeur10 inline",{texte:(0,n.sp)(5)}));break;case 2:r.Do.isAmc?b+="3)  Donner un encadrement à la centaine du nombre de "+l[C]+" ?<br>":b+=(0,n.bk1)(2)+" Donner un encadrement à la centaine du nombre de "+l[C]+" ?<br>"}b+="<br>";let g=1;switch(parseInt(this.sup2)){case 1:g=1;break;case 2:g=10}const M=(0,o.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:.1/g,yThickDistance:10*g,yMax:110*g,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"Nombre d'individus"}),q=[];for(let a=0;a<s;a++)q.push((0,o.rdJ)((M.xMax-M.xMin)/(s+1)*(a+1),h[a],(0,n.MKP)(l[a]),{unite:.1/g})),r.Do.isAmc&&(a===h.indexOf(f)?i.push({texte:(0,n.MKP)(l[a]),statut:!0}):i.push({texte:(0,n.MKP)(l[a]),statut:!1}),a===h.indexOf(x)?t.push({texte:(0,n.MKP)(l[a]),statut:!0}):t.push({texte:(0,n.MKP)(l[a]),statut:!1}),a===C?u.push({texte:`entre ${(0,n.n0o)(10*g*Math.floor(h[l.indexOf(l[a])]/(10*g)))} et ${(0,n.n0o)(10*g*(1+Math.floor(h[l.indexOf(l[a])]/(10*g))))}`,statut:!0}):u.push({texte:`entre ${(0,n.n0o)(10*g*Math.floor(h[l.indexOf(l[a])]/(10*g)))} et ${(0,n.n0o)(10*g*(1+Math.floor(h[l.indexOf(l[a])]/(10*g))))}`,statut:!1}));b+=(0,o.iR9)({xmin:-5,xmax:11,ymin:-4,ymax:11,pixelsParCm:30,scale:.5},M,q),r.Do.isAmc?(b+="<br>",m="1) Les animaux les plus nombreux sont les "+l[h.indexOf(f)]+".<br>"):m=(0,n.bk1)(0)+" Les animaux les plus nombreux sont les "+l[h.indexOf(f)]+".<br>",r.Do.isAmc?m+="2) Les animaux les moins nombreux sont les "+l[h.indexOf(x)]+".<br>":m+=(0,n.bk1)(1)+" Les animaux les moins nombreux sont les "+l[h.indexOf(x)]+".<br>";const y=h[l.indexOf(l[C])],D=10*g*Math.floor(y/(10*g)),k=D+10*g;r.Do.isAmc?m+="3) Il y a entre "+D+" et "+k+" "+l[C]+".<br>":((0,a.Iq)(this,2,D),(0,a.Iq)(this,3,k),m+=(0,n.bk1)(2)+" Il y a entre "+D+" et "+k+" "+l[C]+".<br>"),this.listeQuestions.push(b),this.listeCorrections.push(m),(0,n.K1R)(this),r.Do.isAmc&&(this.autoCorrection[0]={enonce:b,propositions:[{type:"qcmMono",propositions:i,options:{ordered:!1}},{type:"qcmMono",options:{ordered:!1},propositions:t},{type:"qcmMono",options:{ordered:!1},propositions:u}]})},this.besoinFormulaireNumerique=["Nombre d'espèces différentes",3," choix 1 : 4 espèces\n choix 2 : 5 espèces\n choix 3 : 6 espèces"],this.besoinFormulaire2Numerique=["Valeurs numériques",2," choix 1 : entre 1 et 100\n choix 2 : entre 100 et 1 000"]}},17007:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=86601.9cac0e5154ee5c382fc5.js.map