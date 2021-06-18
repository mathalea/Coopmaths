(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[20183,71129],{20183:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>a,interactifReady:()=>$,interactifType:()=>u,default:()=>h});var e=t(71129),o=t(62259),r=t(63861),n=t(10229);const a="Résoudre une équation $x^2 = a$",$=!0,u="mathLive";function h(){e.default.call(this),this.titre=a,this.interactifReady=$,this.interactifType=u,this.consigne="Résoudre les équations suivantes",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.sup=1,o.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1.5,this.spacing=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]];let s=[];switch(parseInt(this.sup)){case 1:s=(0,r.SRM)([1],this.nbQuestions);break;case 2:s=(0,r.SRM)([2],this.nbQuestions);break;case 3:s=(0,r.SRM)([3],this.nbQuestions);break;case 4:s=(0,r.SRM)([1,2,3],this.nbQuestions)}for(let t,e,o,a,$,u,h=0,l=0;h<this.nbQuestions&&l<50;){switch(s[h]){case 1:a=(0,r.nSR)(1,20),$=`$x^2=${a*a}$`,u=`$x^2=${a*a}$ équivaut à $x = \\sqrt{${a*a}}$ ou $x = -\\sqrt{${a*a}}$<br>Soit $x = ${a}$ ou $x = -${a}$<br>`,u+=`Il est équivalent de résoudre $x^2 - ${a*a}=0$ c'est à dire $x^2 - ${a}^{2}=0$ <br>Soit $(x - ${a})(x + ${a})=0$ qui donne les deux solutions ci-dessus. `,(0,n.Iq)(this,h,[`${a};${-a}`,`${-a};${a}`]);break;case 2:t=(0,r.q$q)(i),e=t[0],o=t[1],$=`$x^2=\\dfrac{${e*e}}{${o*o}}$`,u=`$x^2=\\dfrac{${e*e}}{${o*o}}$ équivaut à $x = \\sqrt{\\dfrac{${e*e}}{${o*o}}}$ ou $x = -\\sqrt{\\dfrac{${e*e}}{${o*o}}}$<br>Soit $x = \\dfrac{${e}}{${o}}$ ou $x = -\\dfrac{${e}}{${o}}$<br>`,u+=`Il est équivalent de résoudre $x^2 - \\dfrac{${e*e}}{${o*o}}=0$ c'est à dire $x^2 - (\\dfrac{${e}}{${o}})^{2}=0$<br>Soit $(x - \\dfrac{${e}}{${o}})(x + \\dfrac{${e}}{${o}})=0$ qui donne les deux solutions ci-dessus. `,(0,n.Iq)(this,h,[`\\dfrac{${e}}{${o}};-\\dfrac{${e}}{${o}}`,`-\\dfrac{${e}}{${o}};\\dfrac{${e}}{${o}}`]);break;case 3:a=(0,r.nSR)(2,50,[4,9,16,25,36,49]),$=`$x^2=${a}$`,u=`$x^2=${a}$ équivaut à $x = \\sqrt{${a}}$ ou $x = -\\sqrt{${a}}$<br>`,u+=`Il est équivalent de résoudre $x^2 - ${a}=0$  c'est à dire $x^2 - (\\sqrt{${a}})^{2}=0$<br>Soit $(x - \\sqrt{${a}})(x + \\sqrt{${a}})=0$ qui donne les deux solutions ci-dessus. `,(0,n.Iq)(this,h,`\\sqrt{${a}};-\\sqrt{${a}}`)}$+=(0,n.G5)(this,h),-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(u),h++),l++}this.introduction=this.interactif&&o.Do.isHtml?"<em>S'il y a plusieurs réponses, séparer les avec un point-virgule.</em>":"",(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : solutions entières\n 2 : solutions rationnelles\n 3 : Solutions irrationnelles\n 4 : Mélange des 3 autres niveaux"]}},71129:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>e})}}]);
//# sourceMappingURL=20183.7c361af80e8f75dfce37.js.map