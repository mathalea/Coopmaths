"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[50700,93771,25523],{93771:(i,e,s)=>{s.r(e),s.d(e,{amcReady:()=>a,amcType:()=>h,interactifReady:()=>u,titre:()=>l,default:()=>m});var t=s(25523),n=s(25482),o=s(71250),r=s(22380);const a=!0,h="AMCOpen",u=!1,l="Parcourir un labyrinthe de multiples";function m(){t.default.call(this),this.titre=l,this.consigne="",this.niveau="6e",this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.tailleDiaporama=3,this.sup3=3,this.sup=4,"CM"===this.niveau?(this.sup2=10,this.sup3=3):(this.sup2=13,this.sup3=4),this.nouvelleVersion=function(){let i;this.listeCorrections=[],this.listeQuestions=[],this.autoCorrection=[],this.sup=(0,n.QmD)(1,4,Number(this.sup),4),i=1===this.sup?(0,n.SRM)([2,5,10],this.nbQuestions):2===this.sup?(0,n.SRM)([3,9],this.nbQuestions):3===this.sup?(0,n.SRM)([4,6,8],this.nbQuestions):(0,n.bqK)([(0,n.q$q)([2,5,10]),(0,n.q$q)([3,9]),(0,n.q$q)([4,6,7,8]),2,3,4,5,6,7,8,9]);const e=parseInt(this.sup2);for(let s,t,a,h,u,l,m,c,b=0;b<this.nbQuestions;){u=(0,o.DRD)({taille:.8}),u.niveau=parseInt(this.sup3),u.chemin=u.choisitChemin(u.niveau),u.murs2d=u.construitMurs(u.chemin),u.chemin2d=u.traceChemin(u.chemin),h=u.chemin,s=`${(0,n.PH8)("Trouve la sortie en ne passant que par les cases contenant un multiple de ","black")}$${i[b]}$.<br>`,a=`${(0,n.PH8)(`Voici le chemin en marron et la sortie était la numéro $${2-h[h.length-1][1]+1}$.`,"black")}<br>`,m=[],c=0;for(let s=2;s<=e;s++)m.push(i[b]*s);m=(0,n.SRM)(m,12);for(let i=1;i<7;i++)u.nombres.push([0,0,0]);for(let s=1;s<7;s++)for(let t=0;t<3;t++){l=!1;for(let i=0;i<h.length;i++)h[i][0]===s&&h[i][1]===t&&(l=!0);l?(u.nombres[s-1][t]=m[c],c++):u.nombres[s-1][t]=(0,n.nSR)(2,e)*i[b]+(0,n.nSR)(1,i[b]-1)}u.nombres2d=u.placeNombres(u.nombres,.8),t={xmin:-4,ymin:0,xmax:22,ymax:11,pixelsParCm:20,scale:.5},s+=(0,o.iR9)(t,u.murs2d,u.nombres2d),(1+b)%3==0&&!r.Do.isHtml&&!r.Do.isAmc&&this.nbQuestions>3&&(s+="\\newpage"),a+=(0,o.iR9)(t,u.murs2d,u.nombres2d,u.chemin2d),this.autoCorrection=[{enonce:s,propositions:[{texte:a,statut:3,feedback:""}]}],this.questionJamaisPosee(b,...u.nombres)&&(this.listeQuestions.push(s),this.listeCorrections.push(a),b++),(0,n.K1R)(this)}},this.besoinFormulaireNumerique=["Tables :",4,"1: tables de 2,5 et 10\n2: tables de 3 et 9\n3: tables de 4,6,7 et 8\n4: mélange"],this.besoinFormulaire2Numerique=["Facteur maximum"],this.besoinFormulaire3Numerique=["Niveau de rapidité",6," 1 : Guépard\n 2 : Antilope\n 3 : Lièvre\n 4 : Tortue\n 5 : Escargot\n 6 : Au hasard"]}},25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},50700:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>o});var t=s(93771);const n="Labyrinthe de multiples";function o(){t.default.call(this),this.niveau="CM",this.sup=5,this.sup2=10,this.sup3=3}}}]);
//# sourceMappingURL=50700.5723fe986a06168c22ae.js.map