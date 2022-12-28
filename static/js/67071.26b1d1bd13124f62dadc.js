"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[67071,25523],{67071:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>l,interactifReady:()=>u,interactifType:()=>c,amcReady:()=>m,amcType:()=>b,default:()=>d});var s=t(25523),o=t(22380),r=t(25482),n=t(71250),a=t(41154),h=t(11945);const l="Encadrer une fraction entre deux nombres entiers",u=!0,c="mathLive",m=!0,b="AMCHybride";function d(){s.default.call(this),this.consigne="Compléter avec deux nombres entiers consécutifs."+(0,r.FiW)(1,"Nombres entiers consécutifs : Ce sont deux nombres entiers qui se suivent comme 4 et 5.","Consécutifs"),this.introduction="Exemple : $2 < \\dfrac{9}{4} < 3$ car  $2=\\dfrac{8}{4}$ et $3=\\dfrac{12}{4}$",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=1,this.correctionDetailleeDisponible=!0,this.lycee=!1,o.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.nouvelleVersion=function(i){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.liste_de_denominateurs=this.lycee?(0,r.SRM)([2,3,4,5,6,7,8,9],this.nbQuestions):(0,r.SRM)([2,3,4,5,10],this.nbQuestions),this.liste_de_k=this.lycee?(0,r.SRM)((0,r.BAU)(-5,5),this.nbQuestions):(0,r.SRM)([0,1,2,3,4,5],this.nbQuestions),console.log(this.lycee);for(let e,t,s,l,u,c=0,m=0;c<this.nbQuestions&&m<50;)l=this.liste_de_denominateurs[c],u=this.liste_de_k[c],s=u*l+(0,r.nSR)(1,l-1),e=this.interactif?(0,h.G5)(this,2*c,"largeur10 inline")+`$< \\dfrac{${s}}{${l}} <$`+(0,h.G5)(this,2*c+1,"largeur10 inline"):`$\\ldots < \\dfrac{${s}}{${l}} < \\ldots$`,t=`$${u} < \\dfrac{${s}}{${l}} < ${u+1}$`,this.correctionDetaillee&&(t+=` $\\qquad$ car $\\quad ${u}=\\dfrac{${u*l}}{${l}}\\quad$ et $\\quad${u+1}=\\dfrac{${(u+1)*l}}{${l}}$ `,t+="<br><br>",t+=(0,n.iR9)({xmin:-.5,xmax:24,ymax:1.5,scale:.6},(0,a.Pj)(s,l).representation(0,0,3,0,"barre","blue"))),this.questionJamaisPosee(c,l,s)&&(o.Do.isAmc?this.autoCorrection[c]={enonce:e,options:{multicols:!0},propositions:[{type:"AMCNum",propositions:[{texte:t,statut:"",reponse:{texte:"Entier inférieur",valeur:u,param:{digits:1,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"Entier supérieur",valeur:u+1,param:{digits:1,decimals:0,signe:!1,approx:0}}}]}]}:((0,h.Iq)(this,2*c,u),(0,h.Iq)(this,2*c+1,u+1)),this.listeQuestions.push(e),this.listeCorrections.push(t),c++),m++;(0,r.K1R)(this)}}},25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=67071.26b1d1bd13124f62dadc.js.map