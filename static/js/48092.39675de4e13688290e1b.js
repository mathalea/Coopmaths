"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[48092,25523],{48092:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>c,interactifReady:()=>u,interactifType:()=>h,amcReady:()=>p,amcType:()=>$,default:()=>m});var s=i(25523),o=i(22380),n=i(25482),r=i(71250),a=i(11945),l=i(41154);const c="Lire des abscisses décimales sous trois formes",u=!0,h="mathLive",p=!0,$="AMCHybride";function m(){s.default.call(this),this.niveau="sixième",this.consigne="",o.Do.isHtml?(this.spacing=2,this.spacingCorr=3):(this.spacing=1,this.spacingCorr=1),this.vspace=-1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let t,i="",s="";const c=(0,n.GVn)(3,"Q");let u,h,p,$=0,m=0,b=0,d=[];1===parseInt(this.sup)?("CM"===this.niveau?(h=0,u=0):(h=(0,n.nSR)(1,15),u=(0,n.n0o)(2/10**parseInt(this.sup))),t=0===h?"|->":"->",p=h+9,$=10*h+10*(0,n.nSR)(0,2)+(0,n.nSR)(2,8),m=10*h+10*(0,n.nSR)(3,5)+(0,n.nSR)(2,8),b=10*h+10*(0,n.nSR)(6,8)+(0,n.nSR)(2,8),$=(0,n.n0o)($/10),m=(0,n.n0o)(m/10),b=(0,n.n0o)(b/10),d=(0,n.TVQ)([$,m,b]),$=d[0],m=d[1],b=d[2],e=(0,r.oqt)({x:0,y:0,Min:h,axePosition:"H",Max:p,thickSec:!0,thickTer:!1,Unite:3,thickOffset:u,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,pointListe:[[$,`${c[0]}`],[m,`${c[1]}`],[b,`${c[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:t}),i=`${(0,n.bk1)(0)} Donner l'abscisse de $${c[0]}$ en écriture décimale.`+(0,a.G5)(this,0,"largeur10 inline",{texte:` $${c[0]}($`,texteApres:"$)$"}),i+=`<br>${(0,n.bk1)(1)} Donner l'abscisse de $${c[1]}$ comme la somme d'un nombre entier et d'une fraction décimale.`+(0,a.G5)(this,1,"largeur10 inline",{texte:` $${c[1]}($`,texteApres:"+"})+(0,a.G5)(this,2,"largeur10 inline",{texteApres:"$)$"}),i+=`<br>${(0,n.bk1)(2)} Donner l'abscisse de $${c[2]}$ sous la forme d'une fraction décimale.`+(0,a.G5)(this,3,"largeur10 inline",{texte:` $${c[2]}($`,texteApres:"$)$"}),s=`${(0,n.bk1)(0)} L'abscisse de $${c[0]}$ est : $${(0,n.euh)($)}$.<br>`,s+=`${(0,n.bk1)(1)} L'abscisse de $${c[1]}$ est : $${(0,n.euh)(Math.floor(m))} + ${(0,n.qaf)((0,n.n0o)(10*(m-Math.floor(m))),10)}$.<br>`,s+=`${(0,n.bk1)(2)} L'abscisse de $${c[2]}$ est : $${(0,n.qaf)((0,n.n0o)(10*b),10)}$.`,o.Do.isAmc?this.autoCorrection[0]={enonce:"",propositions:[{type:"AMCNum",propositions:[{texte:s,statut:"",reponse:{texte:`a)${c[0]} : valeur décimale`,valeur:$,param:{digits:(0,n.HV7)($),decimals:(0,n.D4$)($),signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie entière`,valeur:Math.floor(m),param:{digits:(0,n.WW7)(m),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie fractionnaire \\dfrac{\\ldots}{10}`,valeur:(0,n.n0o)(10*(m-Math.floor(m))),param:{digits:(0,n.WW7)((0,n.n0o)(10*(m-Math.floor(m)))),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`c)${c[2]} : fraction décimale \\dfrac{\\ldots}{10}`,valeur:(0,n.n0o)(10*b),param:{digits:(0,n.WW7)((0,n.n0o)(10*b)),decimals:0,signe:!1,approx:0}}}]}]}:((0,a.Iq)(this,0,$,{formatInteractif:"calcul"}),(0,a.Iq)(this,1,Math.floor(m),{formatInteractif:"calcul"}),(0,a.Iq)(this,2,(0,l.Pj)((0,n.n0o)(10*(m-Math.floor(m))),10),{formatInteractif:"fraction"}),(0,a.Iq)(this,3,(0,l.Pj)((0,n.n0o)(10*b),10),{formatInteractif:"fraction"}))):2===parseInt(this.sup)?("CM"===this.niveau?(h=0,u=0):(h=(0,n.nSR)(1,15)-.1,u=(0,n.n0o)(2/10**parseInt(this.sup))),t=0===h?"|->":"->",p=(0,n.n0o)(h+1.5),$=10+100*h+10*(0,n.nSR)(1,3)+(0,n.nSR)(2,8),m=10+100*h+10*(0,n.nSR)(4,6)+(0,n.nSR)(2,8),b=10+100*h+10*(0,n.nSR)(7,9)+(0,n.nSR)(2,8),$=(0,n.n0o)($/100),m=(0,n.n0o)(m/100),b=(0,n.n0o)(b/100),d=(0,n.TVQ)([$,m,b]),$=d[0],m=d[1],b=d[2],e=(0,r.oqt)({x:0,y:0,Min:h,axePosition:"H",Max:p,thickSec:!0,thickTer:!0,Unite:20,thickOffset:u,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,pointListe:[[$,`${c[0]}`],[m,`${c[1]}`],[b,`${c[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:t}),i=`${(0,n.bk1)(0)} Donner l'abscisse de $${c[0]}$ en écriture décimale.`+(0,a.G5)(this,0,"largeur10 inline",{texte:` $${c[0]}($`,texteApres:"$)$"}),i+=`<br>${(0,n.bk1)(1)} Donner l'abscisse de $${c[1]}$ comme la somme d'un entier et d'une fraction décimale.`+(0,a.G5)(this,1,"largeur10 inline",{texte:` $${c[1]}($`,texteApres:"+"})+(0,a.G5)(this,2,"largeur10 inline",{texteApres:"$)$"}),i+=`<br>${(0,n.bk1)(2)} Donner l'abscisse de $${c[2]}$ sous la forme d'une fraction décimale.`+(0,a.G5)(this,3,"largeur10 inline",{texte:` $${c[2]}($`,texteApres:"$)$"}),s=`${(0,n.bk1)(0)} L'abscisse de $${c[0]}$ est : $${(0,n.euh)($)}$.<br>`,s+=`${(0,n.bk1)(1)} L'abscisse de $${c[1]}$ est : $${(0,n.euh)(Math.floor(m))} + ${(0,n.qaf)((0,n.n0o)(100*(m-Math.floor(m))),100)}$.<br>`,s+=`${(0,n.bk1)(2)} L'abscisse de $${c[2]}$ est : $${(0,n.qaf)((0,n.n0o)(100*b),100)}$.`,o.Do.isAmc?this.autoCorrection[0]={enonce:"",propositions:[{type:"AMCNum",propositions:[{texte:s,statut:"",reponse:{texte:`a)${c[0]} : valeur décimale`,valeur:$,param:{digits:(0,n.HV7)($),decimals:(0,n.D4$)($),signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie entière`,valeur:Math.floor(m),param:{digits:(0,n.WW7)(m),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie fractionnaire $\\dfrac{\\ldots}{100}$`,valeur:(0,n.n0o)(100*(m-Math.floor(m))),param:{digits:(0,n.WW7)((0,n.n0o)(100*(m-Math.floor(m)))),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`c)${c[2]} : fraction décimale $\\dfrac{\\ldots}{100}$`,valeur:(0,n.n0o)(100*b),param:{digits:(0,n.WW7)((0,n.n0o)(100*b)),decimals:0,signe:!1,approx:0}}}]}]}:((0,a.Iq)(this,0,$),(0,a.Iq)(this,1,Math.floor(m)),(0,a.Iq)(this,2,(0,l.Pj)((0,n.n0o)(100*(m-Math.floor(m))),100),{formatInteractif:"fraction"}),(0,a.Iq)(this,3,(0,l.Pj)((0,n.n0o)(100*b),100),{formatInteractif:"fraction"}))):3===parseInt(this.sup)&&("CM"===this.niveau?(h=0,u=0):(h=(0,n.n0o)((0,n.nSR)(0,15)+.1*(0,n.nSR)(0,9)),u=(0,n.n0o)(2/10**parseInt(this.sup))),t=0===h?"|->":"->",p=(0,n.n0o)(h+.15),$=1e3*h+10*(0,n.nSR)(1,5)+(0,n.nSR)(2,8),m=1e3*h+10*(0,n.nSR)(6,9)+(0,n.nSR)(2,8),b=1e3*h+10*(0,n.nSR)(11,14)+(0,n.nSR)(2,8),$=(0,n.n0o)($/1e3),m=(0,n.n0o)(m/1e3),b=(0,n.n0o)(b/1e3),d=(0,n.TVQ)([$,m,b]),$=d[0],m=d[1],b=d[2],e=(0,r.oqt)({x:0,y:0,Min:h,axePosition:"H",Max:p,thickSec:!0,thickTer:!0,Unite:200,thickOffset:u,thickDistance:.1,thickSecDist:.01,thickTerDist:.001,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,pointListe:[[$,`${c[0]}`],[m,`${c[1]}`],[b,`${c[2]}`]],labelListe:[[h+.09,(0,n.euh)((0,n.n0o)(h+.09))],[h+.1,(0,n.euh)((0,n.n0o)(h+.1))]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:t}),i=`${(0,n.bk1)(0)} Donner l'abscisse de ${c[0]} en écriture décimale.`+(0,a.G5)(this,0,"largeur10 inline",{texte:` ${c[0]}(`,texteApres:")"}),i+=`<br>${(0,n.bk1)(1)} Donner l'abscisse de ${c[1]} comme la somme d'un entier et d'une fraction décimale.`+(0,a.G5)(this,1,"largeur10 inline",{texte:` ${c[1]}(`,texteApres:"+"})+(0,a.G5)(this,2,"largeur10 inline",{texteApres:")"}),i+=`<br>${(0,n.bk1)(2)} Donner l'abscisse de ${c[2]} sous la forme d'une fraction décimale.`+(0,a.G5)(this,3,"largeur10 inline",{texte:` ${c[2]}(`,texteApres:")"}),s=`${(0,n.bk1)(0)} L'abscisse de ${c[0]} est : $${(0,n.euh)($)}$.<br>`,s+=`${(0,n.bk1)(1)} L'abscisse de ${c[1]} est : $${(0,n.euh)(Math.floor(m))} + ${(0,n.qaf)((0,n.n0o)(1e3*(m-Math.floor(m))),1e3)}$.<br>`,s+=`${(0,n.bk1)(2)} L'abscisse de ${c[2]} est : $${(0,n.qaf)((0,n.n0o)(1e3*b),1e3)}$.`,o.Do.isAmc?this.autoCorrection[0]={enonce:"",propositions:[{type:"AMCNum",propositions:[{texte:s,statut:"",reponse:{texte:`a)${c[0]} : valeur décimale`,valeur:$,param:{digits:(0,n.HV7)($),decimals:(0,n.D4$)($),signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie entière`,valeur:Math.floor(m),param:{digits:(0,n.WW7)(m),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`b)${c[1]} : partie fractionnaire $\\dfrac{\\ldots}{1000}$`,valeur:(0,n.n0o)(1e3*(m-Math.floor(m))),param:{digits:(0,n.WW7)((0,n.n0o)(1e3*(m-Math.floor(m)))),decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:`c)${c[2]} : fraction décimale $\\dfrac{\\ldots}{1000}$`,valeur:(0,n.n0o)(1e3*b),param:{digits:(0,n.WW7)((0,n.n0o)(1e3*b)),decimals:0,signe:!1,approx:0}}}]}]}:((0,a.Iq)(this,0,$),(0,a.Iq)(this,1,Math.floor(m)),(0,a.Iq)(this,2,(0,l.Pj)((0,n.n0o)(1e3*(m-Math.floor(m))),1e3),{formatInteractif:"fraction"}),(0,a.Iq)(this,3,(0,l.Pj)((0,n.n0o)(1e3*b),1e3),{formatInteractif:"fraction"}))),i+="<br>"+(0,r.iR9)({xmin:-1.5,xmax:35,ymin:-1.5,ymax:1.5,pixelsParCm:25,scale:.5},e),this.listeQuestions.push(i),this.listeCorrections.push(s),o.Do.isAmc&&(this.autoCorrection[0].enonce=i),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Au dixième\n2 : Au centième\n3 : Au millième"]}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=48092.39675de4e13688290e1b.js.map