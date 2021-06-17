(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7593,6969],{66969:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})},17593:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>l,default:()=>o});var s=t(66969),n=t(55339),r=t(23067),a=t(44393);const l="Simulation d’expériences aléatoires";function o(){s.default.call(this),this.titre=l,this.nbQuestions=1,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.sup=1,this.sup2=1e4,this.sup3=!1,this.consigne='<center><a title="Diacritica, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dice_(typical_role_playing_game_dice).jpg"><img width="128" alt="Dice (typical role playing game dice)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dice_%28typical_role_playing_game_dice%29.jpg/128px-Dice_%28typical_role_playing_game_dice%29.jpg"></a></center>',this.nouvelleVersion=function(){let e="",i="",t=2*(0,n.nSR)(1,5)+2,s=parseInt(this.sup2),l=new Array,o=0,u=new Array;this.listeCorrections=[],this.listeQuestions=[];let c,h,p=["rouges","vertes","bleues","noires"],b=[(0,n.nSR)(2,5),(0,n.nSR)(2,5),(0,n.nSR)(2,5),(0,n.nSR)(2,5)],f=0;for(let n=0;n<4;n++)f+=b[n];switch(parseInt(this.sup)){case 1:if(c=(0,r.Pj)(1,t),i=`Chaque face a la même probabilité de sortir : $${c.texFraction}\\approx ${(0,n.S1u)(c.pourcentage)}\\%$.<br>`,e+=`On lance un dé à ${t} faces ${(0,n.zqk)(s)} fois.<br>On étudie les fréquences d'apparition de chaque face.<br>On obtient les résultats suivants : <br>`,this.sup3){for(let e=0;e<t;e++)l.push(0);for(let e=0;e<s;e++)l[(0,n.nSR)(1,t)-1]++;for(let e=0;e<t;e++)u[e]=[e,(0,n.n0o)(l[e]/s)]}else{let e=(0,n.nSR)(1,t);for(let i=0;i<t;i++)l.push(0);for(let i=0;i<t;i++)l.push(0);for(let i=0;i<s;i++)l[(0,n.nSR)(1,t)-1]++;o=3*l[e-1]/4,l[(0,n.nSR)(1,t,e)-1]+=o,l[e-1]-=o;for(let i=0;i<t;i++)u[i]=[i,(0,n.n0o)(l[i]/s)];i+="Ici, l'expérience montre qu'il y a quelque chose qui semble fausser cette équiprobabilité comme un dé truqué.<br>",i+=`En effet, la fréquence de la face $${e}$ est largement supérieur à $${(0,n.S1u)(c.pourcentage)}\\%$.`}break;case 2:let a=(0,n.nSR)(1,4);if(e+="Des boules de différentes couleurs sont placées dans une urne.<br>",e+=`Il y a $${b[0]}$ ${p[0]}, $${b[1]}$ ${p[1]}, $${b[2]}$ ${p[2]} et $${b[3]}$ ${p[3]}.<br>`,e+=`On effectue $${s}$ tirages avec remise.<br>`,e+="On étudie les fréquences d'apparition de chaque couleur.<br>On obtient les résultats suivants : <br>",c=(0,r.Pj)(b[a-1],f),this.sup3){t=4;for(let e=0;e<t;e++)l.push(0);for(let e=0;e<s;e++)h=(0,n.nSR)(1,f),h<=b[0]?l[0]++:h<=b[0]+b[1]?l[1]++:h<=b[0]+b[1]+b[2]?l[2]++:l[3]++;for(let e=0;e<t;e++)u[e]=[e,(0,n.n0o)(l[e]/s)]}else{t=4;for(let e=0;e<t;e++)l.push(0);for(let e=0;e<s;e++)h=(0,n.nSR)(0,f-1),h<b[0]?l[0]++:h<b[0]+b[1]?l[1]++:h<b[0]+b[1]+b[2]?l[2]++:l[3]++;o=3*l[a-1]/4,l[(0,n.nSR)(1,4,a)-1]+=o,l[a-1]-=o;for(let e=0;e<t;e++)u[e]=[e,(0,n.n0o)(l[e]/s)];i+="Ici, l'expérience montre qu'il y a quelque chose qui semble fausser cette équiprobabilité comme des boules discernables au toucher.<br>",i+=`En effet, la fréquence des boules ${p[a-1]} est largement supérieur à $${c.texFraction}\\approx ${(0,n.S1u)(c.pourcentage)}\\%$.`}}switch(parseInt(this.sup)){case 1:e+="$\\begin{array}{|l|"+"c|".repeat(t)+"}\n",e+="\\hline\n",e+="\\text{Numéro de la face}";for(let i=0;i<t;i++)e+=` & \\textbf{\\text{${i+1}}}`;e+="\\\\\\hline\n",e+="\\text{Fréquence d'apparition}";for(let i=0;i<t;i++)e+=` & \\text{${(0,n.S1u)(100*u[i][1],1)}} \\% `;if(e+="\\\\\\hline\n",e+="\\end{array}\n$",e+="<br>",this.correctionDetaillee){let i=10,s=(0,a.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:1/i,yThickDistance:1*i,yMax:40,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"fréquences en %"}),n=[];for(let e=0;e<t;e++)n.push((0,a.rdJ)((s.xMax-s.xMin)/t*(e+.5),10*u[e][1],e+1),{unite:1/i});e+=(0,a.iR9)({xmin:-1,xmax:11,ymin:-4,ymax:5.5,pixelsParCm:30,scale:1},s,n)}break;case 2:e+="$\\begin{array}{|l|"+"c|".repeat(t)+"}\n",e+="\\hline\n",e+="\\text{Couleur de la boule}";for(let i=0;i<t;i++)e+=` & \\textbf{\\text{${p[i].substring(0,p[i].length-1)}}}`;e+="\\\\\\hline\n",e+="\\text{Fréquence d'apparition}";for(let i=0;i<t;i++)e+=` & \\text{${(0,n.S1u)(100*u[i][1],1)}} \\%`;if(e+="\\\\\\hline\n",e+="\\end{array}\n$",e+="<br>",this.correctionDetaillee){let i=10,s=(0,a.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:1/i,yThickDistance:1*i,yMax:55,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"fréquences en %"}),n=[];for(let e=0;e<t;e++)n.push((0,a.rdJ)((s.xMax-s.xMin)/t*(e+.5),10*u[e][1],p[e]),{unite:1/i});e+=(0,a.iR9)({xmin:-1,xmax:12,ymin:-4,ymax:7,pixelsParCm:30,scale:1},s,n)}}this.listeQuestions.push(e),this.listeCorrections.push(i),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Type d'expérience",2,"1 : Tirage de dés\n 2 : Tirage dans une urne"],this.besoin_formulaire2_texte=["Nombre de tirages","Taper un nombre entier : 10000"],this.besoin_formulaire3_case_a_cocher=["Équiprobabilité",!0]}}}]);
//# sourceMappingURL=7593.48e01c1101bd93179f1d.js.map