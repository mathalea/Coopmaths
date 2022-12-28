"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[38523,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},38523:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,interactifReady:()=>l,interactifType:()=>$,default:()=>u});var s=t(25523),r=t(25482),n=t(71250),o=t(41154);const a="Calculer une aire ou un périmètre (carré et rectangle)",l=!0,$="mathLive";function u(){s.default.call(this),this.typeExercice="simple",this.date=1635092507483,this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){let e,i,t,s,a,l,$,u,c,m,h;const p=[];switch((0,r.q$q)([1,2,3,4,5,6,7])){case 1:e=(0,r.nSR)(3,9),i=(0,r.nSR)(0,1),this.question=`Un carré de côté ${e} cm a le même périmètre qu'un rectangle de largeur ${e-i} cm et de longueur ${e+1} cm ? (oui ou non)`,0===i?(this.correction=`Faux car $4\\times ${e}$ cm$\\neq 2\\times ${e}$ cm$ + 2\\times ${e+1}$ cm.`,this.reponse="non"):(this.correction=`Vrai car $4\\times ${e}$ cm = $2\\times ${e-1}$ cm $ + 2\\times ${e+1}$ cm$= ${4*e}$ cm.`,this.reponse="oui"),this.ignoreCasse=!0;break;case 2:e=(0,r.nSR)(2,10),this.reponse=(0,r.n0o)(e*e),this.question=`Quelle est l'aire d'un carré en cm$^2$ dont le périmètre est $${4*e}$ cm ? `,this.correction=`Le côté du carré est $${4*e}\\div 4=${e}$, donc son aire est : $${e}\\times ${e}=${e**2}$ cm$^2$.`;break;case 3:e=(0,r.nSR)(1,10),t=e*e,this.reponse=(0,r.n0o)(4*e),this.question=`Déterminer le périmètre (en cm) d'un carré d'aire $${t}$ cm$^2$. `,this.correction=`Le côté du carré est $\\sqrt{${t}}=${e}$. Son périmètre est donc $4\\times ${e}=${4*e}$ cm.`;break;case 4:e=4*(0,r.nSR)(5,20),this.reponse=(0,r.n0o)(e/4),this.question=`Le périmètre d'un carré est $${e}$ cm. Quelle est la longueur (en cm) du côté du carré ? `,this.correction=`Le côté du carré est $${e}\\div 4=${e/4}$.`;break;case 5:e=(0,r.nSR)(1,3),i=(0,r.nSR)(4,7),s=(0,r.nSR)(7,12),t=(0,r.nSR)(1,6)+(0,r.nSR)(3,9)/10,a=s-t,l=(0,n.xmu)(0,0,"P"),$=(0,n.xmu)(7,1,"Q","below"),u=(0,n.xmu)(6.5,4,"R"),c=(0,n.xmu)(2,5,"R"),p.push((0,n.EXn)(l,$),(0,n.EXn)($,u),(0,n.EXn)(u,c),(0,n.EXn)(c,l),(0,n.L6P)(l,$,u,c)),p.push((0,n.Ots)(`${(0,r.k$K)(i)} m`,(0,n.Q2H)(l,c).x-.5,(0,n.Q2H)(l,c).y,"milieu","black",1,"middle",!0),(0,n.Ots)(`${(0,r.k$K)(e)} m`,(0,n.Q2H)($,u).x+.5,(0,n.Q2H)($,u).y,"milieu","black",1,"middle",!0),(0,n.Ots)(`${(0,r.k$K)(t)} m`,(0,n.Q2H)(l,$).x,(0,n.Q2H)(l,$).y-.5,"milieu","black",1,"middle",!0),(0,n.Ots)(`${(0,r.k$K)(a)} m`,(0,n.Q2H)(u,c).x,(0,n.Q2H)(u,c).y+.5,"milieu","black",1,"middle",!0)),this.question="Quel est le périmètre de cette figure (en m) ?<br>",this.question+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:8,ymax:6,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7,style:"margin: auto"},p),this.correction=` Le périmètre est donné par : $${(0,r.k$K)(e)}+${(0,r.k$K)(i)}+${(0,r.k$K)(t)}+${(0,r.k$K)(a)}=${(0,r.k$K)(e+i+t+a)}$.<br>`,this.reponse=e+i+t+a;break;case 6:m=(0,r.q$q)(["a","b","c"]),"a"===m&&(e=(0,r.nSR)(2,7),t=(0,r.nSR)(2,4),this.question=`Les longueurs d'un rectangle de $${e}$ cm$^2$  sont multipliées par $${t}$.<br>\n          Quelle est l'aire (en cm$^2$) du rectangle ainsi obtenu ?\n          `,this.correction=` Si les longueurs sont multiplées par $k$, les aires sont multipliées par $k^2$, soit ici par $${t}^2=${t**2}$.<br>\n          Ainsi, l'aire du nouveau rectangle est : $${e}\\times ${t*t}=${e*t*t}$ cm $^2$.\n      <br>`,this.reponse=e*t*t),"b"===m&&(s=(0,r.nSR)(1,3),a=(0,r.nSR)(s+1,10),h=(0,o.Pj)(s,a).simplifie(),this.question=`Les longueurs d'un triangle sont multipliées par $${h.texFraction}$.<br>\n          Par combien est multipliée son aire  ?\n          `,this.correction=` Si les longueurs sont multiplées par $k$, les aires sont multipliées par $k^2$.<br>\n          Ainsi, l'aire a été multipliée par : $\\left(\\dfrac{${s}}{${a}}\\right)^2=\\dfrac{${s*s}}{${a*a}}$.\n      <br>`,this.reponse=(0,o.Pj)(s*s,a*a),this.formatInteractif="fraction"),"c"===m&&(s=(0,r.nSR)(1,3),a=(0,r.nSR)(s+1,10),h=(0,o.Pj)(s,a).simplifie(),this.question=`L'aire d'un parallélogramme a été multipliée par $\\dfrac{${s*s}}{${a*a}}$.<br>\n          Par combien ont été multipliées les longueurs de ses côtés ?\n          `,this.correction=` Si les aires sont multiplées par $k$, les longueurs sont multipliées par $\\sqrt{k}$.<br>\n          Ainsi, les longueurs ont été multipliées par  : $\\sqrt{\\dfrac{${s*s}}{${a*a}}}=\\dfrac{${s}}{${a}}$.\n      <br>`,this.reponse=(0,o.Pj)(s*s,a*a),this.formatInteractif="fraction");break;case 7:e=(0,r.nSR)(2,10),i=(0,r.nSR)(1,5)*e,l=(0,n.xmu)(0,0,"A","below"),$=(0,n.xmu)(8,0,"B","below"),u=(0,n.xmu)(6,3.46,"C"),p.push((0,n.EXn)(l,$),(0,n.EXn)($,u),(0,n.EXn)(u,l),(0,n.BD1)(l,$,u),(0,n.L6P)(l,$,u),(0,n.lvA)(l,u,$)),p.push((0,n.Ots)(`${(0,r.k$K)(e)} m`,(0,n.Q2H)($,u).x+.5,(0,n.Q2H)($,u).y+.5,"milieu","black",1,"middle",!0)),this.question=` L'aire du triangle $ABC$ est $${i}$ m$^2$. Donner la longueur $AC$ (en m).<br>`,this.question+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:9,ymax:4.5,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7,style:"margin: auto"},p),this.correction=` L'aire de ce triangle rectangle est donnée par : $\\dfrac{BC\\times AC}{2}$.<br>\n          On cherche $AC$ telle que $\\dfrac{${e}\\times AC}{2}=${i}$. <br>\n          $AC=\\dfrac{2\\times ${i}}{${e}}=${(0,r.xau)(2*i,e)}$ m.\n      <br>`,this.reponse=(0,r.n0o)(2*i/e)}}}}}]);
//# sourceMappingURL=38523.fc9b1051960e625c6614.js.map