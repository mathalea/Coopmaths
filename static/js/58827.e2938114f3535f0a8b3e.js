"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[58827,25523],{58827:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,default:()=>h});var s=t(25523),o=t(22380),n=t(25482),r=t(71250),u=t(41154);const a="Mettre bout à bout des segments";function h(){s.default.call(this),this.consigne="",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2,this.nouvelleVersion=function(){let e,i;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let t,s;e=o.Do.isHtml?.5:.3;const a=[0,0,0,0],h=[],l=(0,n.SRM)([5,6,7,8],this.nbQuestions);for(let o,c,b=0,m=0;b<this.nbQuestions&&m<50;){i=[],s=l[b],a[0]=(0,n.nSR)(1,s-1),a[1]=(0,n.nSR)(1,s-1,a[0]),a[2]=(0,n.nSR)(1,s-1,a[1]),a[3]=(0,n.nSR)(1,s-1,[a[2],a[0]]);for(let e=0;e<4;e++)h[e]=(0,u.Pj)(a[e],s);o=`On place bout à bout 4 segments de longueurs respectives$ ${h[0].texFraction}$, $${h[1].texFraction}$, $${h[2].texFraction}$ et $${h[3].texFraction}$.<br>`,o+="Quelle est la longueur du segment obtenu ?",c="Voici sur ces dessins, coloriés en rouge, les différents segments :<br>";for(let e=0;e<4;e++)i.push(h[e].representation(0,5-1.25*e,5,0,"segment","red",0,1,1));t={xmin:-.4,ymin:-1.5,xmax:6,ymax:6,pixelsParCm:20,scale:.5},c+=(0,r.iR9)(t,...i),c+="<br>Ce qui donne en les mettant bout à bout :<br>",t={xmin:-.4,ymin:-1.5,xmax:20,ymax:1,pixelsParCm:20,scale:e},c+=(0,r.iR9)(t,(0,u.Pj)(a[0]+a[1]+a[2]+a[3],s).representation(0,0,5,0,"segment","red",0,1,1)),c+=`<br>La longueur du segment ainsi obtenu est : $${(0,u.Pj)(a[0]+a[1]+a[2]+a[3],s).texFraction}$.`,-1===this.listeQuestions.indexOf(o)&&(this.listeQuestions.push(o),this.listeCorrections.push(c),b++),m++}(0,n.K1R)(this)}}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=58827.e2938114f3535f0a8b3e.js.map