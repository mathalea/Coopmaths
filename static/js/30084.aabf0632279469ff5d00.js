(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[30084,71129],{30084:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>n,default:()=>l});var t=i(71129),r=i(62259),o=i(63861),a=i(55802);const n="Spécial escape game";function l(){t.default.call(this),this.titre=n,this.consigne="Trouver le mot de passe.",this.nbQuestions=1,r.Do.isHtml?this.spacingCorr=1:this.spacingCorr=1.5,r.Do.isHtml?this.spacing=1:this.spacing=2,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2="",this.pasDeVersionLatex=!1,this.nouvelleVersion=function(){let e=[],s=[];this.listeQuestions=[],this.listeCorrections=[];let i,t,r,n,l,u,h="",p="";for(let o=0;o<26;o++)s.push(String.fromCharCode(65+o));for(let o=0;o<5;o++)e.push(["*","*","*","*","*","*"]);let c,m=parseInt(this.sup),b=(0,o.p6Z)(["BMDF","OGNQ","BUQP","BAUP","BXGE","BDUJ","MZSXQE","BDUEYQ","BMDFUQ","HMXQGD","OAGBXQ","PDAUFQ","DQXMFUAZ","BMDMNAXQ","MPPUFUAZ","QJBAEMZF","RAZOFUAZ","OAYBXQJQ"][(0,o.nSR)(0,5)+6*(m-1)],14),x=[],d=[];this.sup2==b?h+=`${(0,o.PH8)(`Bravo ! le mot de passe était bien le mot ${b}`,"blue")}<br>`:h+="Min et Max sont dans un bateau.<br>La tempête fait rage.<br>Ils en voient de toutes les couleurs.<br>Les vagues et les creux sont immenses.<br>Soudain, Min et Max tombent à l'eau... à moins que ce ne soit le contraire ?<br>",h+="Taper le mot de passe dans la boite de dialogue correspondante des paramètres de l'exercice.<br>",p+=`Le mot de passe comporte ${2+2*m} lettres.`,this.sup2==b&&(p+=`${(0,o.PH8)(`<br>Bravo ! le mot de passe était bien le mot ${b}`,"blue")}<br>`);for(let a=0;a<2*m+2;a++)if(c=b[a],s=s.filter((e=>e!==c)),a%2==0?x.push((0,o.nSR)(0,2)):x.push((0,o.nSR)(3,5)),a%2==0?d.push((0,o.nSR)(0,4)):d.push((0,o.nSR)(0,4,d[a-1])),"*"==e[d[a]][x[a]])e[d[a]][x[a]]=c;else if(e[d[a]][x[a]]!=c){for(let e=0;e<a;e++)x[e]==x[a]&&d[e]==d[a]&&(d[a]=(d[a]+1)%5,e=0);e[d[a]][x[a]]=c}for(let o=0;o<2*m+2;o++)x[o]++,d[o]++;s=(0,o.TVQ)(s);for(let o=0;o<6;o++)for(let i=0;i<5;i++)"*"==e[i][o]&&s.length>0&&(e[i][o]=s.pop());let C=[0,0,0,0],f=[0,0,0,0];for(let a=0;a<2*m+2;a+=2)d[a]>d[a+1]?(C[a/2]=-2.34+(0,o.nSR)(0,2),f[a/2]=8.17-(0,o.nSR)(0,2)):(f[a/2]=-2.34+(0,o.nSR)(0,2),C[a/2]=8.17-(0,o.nSR)(0,2));switch(u=(0,a.sYn)({xMin:-1,yMin:-1,xMax:7,yMax:6,xUnite:2}),m){case 1:l=(0,a.l_G)((0,a.xmu)(-1,-2),(0,a.xmu)(15,-2),4),l.couleurDeRemplissage="gray",l.opacite=.2,i=(0,a.urB)([[0,C[0]],[x[0],d[0]],[x[1],d[1]],[7,f[0]]],{repere:u,color:"black",step:.1}),t=(0,a.urB)([[0,C[1]],[x[2],d[2]],[x[3],d[3]],[7,f[1]]],{repere:u,color:"white",step:.1}),i.epaisseur=2,t.epaisseur=2,h+=(0,a.iR9)({xmin:-1,ymin:-1,xmax:15,ymax:7,pixelsParCm:30},l,u,i,t)+"<br>";break;case 2:l=(0,a.l_G)((0,a.xmu)(-1,-2),(0,a.xmu)(15,-2),4),l.opacite=.2,l.couleurDeRemplissage="gray",i=(0,a.urB)([[0,C[0]],[x[0],d[0]],[x[1],d[1]],[7,f[0]]],{repere:u,color:"red",step:.1}),t=(0,a.urB)([[0,C[1]],[x[2],d[2]],[x[3],d[3]],[7,f[1]]],{repere:u,color:"green",step:.1}),r=(0,a.urB)([[0,C[2]],[x[4],d[4]],[x[5],d[5]],[7,f[2]]],{repere:u,color:"blue",step:.1}),i.epaisseur=2,t.epaisseur=2,r.pepaisseur=2,h+=(0,a.iR9)({xmin:-1,ymin:-1,xmax:15,ymax:7,pixelsParCm:30},l,u,i,t,r)+"<br>";break;case 3:l=(0,a.l_G)((0,a.xmu)(-1,-2),(0,a.xmu)(15,-2),4),l.opacite=.2,l.couleurDeRemplissage="gray",i=(0,a.urB)([[0,C[0]],[x[0],d[0]],[x[1],d[1]],[7,f[0]]],{repere:u,color:"cyan",step:.1}),t=(0,a.urB)([[0,C[1]],[x[2],d[2]],[x[3],d[3]],[7,f[1]]],{repere:u,color:"yellow",step:.1}),r=(0,a.urB)([[0,C[2]],[x[4],d[4]],[x[5],d[5]],[7,f[2]]],{repere:u,color:"magenta",step:.1}),n=(0,a.urB)([[0,C[3]],[x[6],d[6]],[x[7],d[7]],[7,f[3]]],{repere:u,color:"black",step:.1}),i.epaisseur=2,t.epaisseur=2,r.pepaisseur=2,n.epaisseur=2,h+=(0,a.iR9)({xmin:-1,ymin:-1,xmax:15,ymax:7,pixelsParCm:30},l,u,i,t,r,n)+"<br>"}h+="$\\begin{array}{|l|"+"c|".repeat(6)+"}\n",h+="\\hline\n",h+=" ";for(let o=0;o<6;o++)h+=` & \\text{${o+1}}`;h+="\\\\\\hline\n";for(let o=0;o<5;o++){h+=`\\text{${o+1}}`;for(let s=0;s<6;s++)h+="& "+e[o][s];h+="\\\\\\hline\n"}h+="\\end{array}\n$",h+="<br>",this.listeQuestions.push(h),this.listeCorrections.push(p),(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Catégorie",3,"1 : Noir & Blanc\n 2 : RGB\n 3 : CJMN"],this.besoinFormulaire2Texte=["Quel est ton mot de passe ?",1,"Mot de passe (en majuscule):"]}},71129:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=30084.aabf0632279469ff5d00.js.map