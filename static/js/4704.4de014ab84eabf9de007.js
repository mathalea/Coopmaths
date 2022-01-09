"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4704,87953,25523],{4704:(o,n,m)=>{m.r(n),m.d(n,{titre:()=>i,interactifReady:()=>e,interactifType:()=>s,default:()=>$});var t=m(87953);const i="Donner ou compléter une égalité de Pythagore",e=1,s="mathLive";function $(){t.default.call(this),this.sup=1,this.typeDeQuestion="",this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Donner l'égalité de Pythagore\n2 : Compléter l'égalité de Pythagore"]}},87953:(o,n,m)=>{m.r(n),m.d(n,{titre:()=>h,amcType:()=>a,amcReady:()=>u,interactifReady:()=>l,interactifType:()=>c,default:()=>b});var t=m(25523),i=m(22380),e=m(25482),s=m(71250),$=m(11945),r=m(79352);const h="Calculer une longueur avec le théorème de Pythagore",a="AMCOpenNum",u=!0,l=!0,c="mathLive";function b(){t.default.call(this),this.titre=h,this.amcReady=u,this.amcType=a,this.interactifReady=l,this.interactifType=c,this.nbQuestions=3,this.nbCols=3,this.nbColsCorr=1,this.sup2=3,this.typeDeQuestion="Calculer :",this.video="M9sceJ8gzNc",this.besoinFormulaire2Numerique=["Côté",3,"1 : Hypoténuse\n2 : Côté de l'angle droit\n3 : Mélange"],this.nouvelleVersion=function(){this.sup&&(this.sup=parseInt(this.sup)),this.sup2&&(this.sup2=parseInt(this.sup2)),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let o=[];o=1===this.sup2?["BC"]:2===this.sup2?["AB","AC"]:["AB","BC","AC"];const n=[];let m;1===this.sup?this.consigne="Dans chaque cas, donner l'égalité de Pythagore.":2===this.sup?this.consigne="Dans chaque cas, compléter l'égalité en utilisant le théorème de Pythagore.":this.consigne="Dans chaque cas, calculer la longueur manquante (si nécessaire, l'arrondir au millimètre près).",o=(0,e.SRM)(o,this.nbQuestions);for(let t,h,a=0,u=0;a<this.nbQuestions&&u<50;){t="",h="";const l=(0,s.xmu)(0,0),c=(0,s.xmu)((0,e.n0o)((0,e.nSR)(22,50)/10),0),b=(0,s.$7o)(c,l,90,(0,e.n0o)((0,e.nSR)(22,50)/10)/(0,s.InT)(l,c)),p=(0,s.R_h)(l,c,b);p.isVisible=!1;const f=(0,s.Wnp)(p,l,(0,e.nSR)(0,360)),C=f.listePoints[0],d=f.listePoints[1],g=f.listePoints[2],q=(0,s.lvA)(d,C,g),y=Math.min(C.x,d.x,g.x)-1,x=Math.min(C.y,d.y,g.y)-1,D=Math.max(C.x,d.x,g.x)+1,M=Math.max(C.y,d.y,g.y)+1,A=(0,e.wnJ)(3,n);n.push(A);const I=(0,s.NVL)(f,A),Q=(0,s.Y2F)(d,C),F=(0,s.Y2F)(C,g),v=(0,s.Y2F)(g,d),k=(0,s.InT)(C,d,1),P=(0,s.InT)(C,g,1),T=(0,s.InT)(d,g,1),B=[q,f,I];if("Calculer :"===this.typeDeQuestion&&"AB"===o[a]&&B.push(F,v),"Calculer :"===this.typeDeQuestion&&"BC"===o[a]&&B.push(F,Q),"Calculer :"===this.typeDeQuestion&&"AC"===o[a]&&B.push(Q,v),i.Do.isHtml||(t="~\\\\"),t+=(0,s.iR9)({xmin:y,xmax:D,ymin:x,ymax:M,scale:.6,style:"display: block"},B),2===this.sup&&("AB"===o[a]&&(t+=`<br>$${C.nom+d.nom}^2=\\ldots$`,(0,$.Iq)(this,a,[`${d.nom+g.nom}^2-${C.nom+g.nom}^2`,`${g.nom+d.nom}^2-${C.nom+g.nom}^2`,`${d.nom+g.nom}^2-${g.nom+C.nom}^2`,`${g.nom+d.nom}^2-${g.nom+C.nom}^2`],{formatInteractif:"texte"})),"BC"===o[a]&&(t+=`<br>$${d.nom+g.nom}^2=\\ldots$`,(0,$.Iq)(this,a,[`${C.nom+d.nom}^2+${C.nom+g.nom}^2`,`${d.nom+C.nom}^2+${C.nom+g.nom}^2`,`${C.nom+d.nom}^2+${g.nom+C.nom}^2`,`${d.nom+C.nom}^2+${g.nom+C.nom}^2`,`${C.nom+g.nom}^2+${C.nom+d.nom}^2`,`${C.nom+g.nom}^2+${d.nom+C.nom}^2`,`${g.nom+C.nom}^2+${C.nom+d.nom}^2`,`${g.nom+C.nom}^2+${d.nom+C.nom}^2`],{formatInteractif:"texte"})),"AC"===o[a]&&((0,$.Iq)(this,a,[`${d.nom+g.nom}^2-${C.nom+d.nom}^2`,`${g.nom+d.nom}^2-${C.nom+d.nom}^2`,`${d.nom+g.nom}^2-${d.nom+C.nom}^2`,`${g.nom+d.nom}^2-${d.nom+C.nom}^2`],{formatInteractif:"texte"}),t+=`<br>$${C.nom+g.nom}^2=\\ldots$`)),i.Do.isHtml||i.Do.isAmc||a===this.nbQuestions-1||(t+="\\columnbreak"),h=`Le triangle $${A}$ est rectangle en $${C.nom}$ donc d'après le théorème de Pythagore, on a : `,h+=`$${d.nom+g.nom}^2=${C.nom+d.nom}^2+${C.nom+g.nom}^2$`,""===this.typeDeQuestion&&1===this.sup&&(0,$.Iq)(this,a,[`${d.nom+g.nom}^2=${C.nom+d.nom}^2+${C.nom+g.nom}^2`,`${g.nom+d.nom}^2=${C.nom+d.nom}^2+${C.nom+g.nom}^2`,`${d.nom+g.nom}^2=${d.nom+C.nom}^2+${C.nom+g.nom}^2`,`${g.nom+d.nom}^2=${d.nom+C.nom}^2+${C.nom+g.nom}^2`,`${d.nom+g.nom}^2=${C.nom+d.nom}^2+${g.nom+C.nom}^2`,`${g.nom+d.nom}^2=${C.nom+d.nom}^2+${g.nom+C.nom}^2`,`${d.nom+g.nom}^2=${d.nom+C.nom}^2+${g.nom+C.nom}^2`,`${g.nom+d.nom}^2=${d.nom+C.nom}^2+${g.nom+C.nom}^2`,`${d.nom+g.nom}^2=${C.nom+g.nom}^2+${C.nom+d.nom}^2`,`${g.nom+d.nom}^2=${C.nom+g.nom}^2+${C.nom+d.nom}^2`,`${d.nom+g.nom}^2=${C.nom+g.nom}^2+${d.nom+C.nom}^2`,`${g.nom+d.nom}^2=${C.nom+g.nom}^2+${d.nom+C.nom}^2`,`${d.nom+g.nom}^2=${g.nom+C.nom}^2+${C.nom+d.nom}^2`,`${g.nom+d.nom}^2=${g.nom+C.nom}^2+${C.nom+d.nom}^2`,`${d.nom+g.nom}^2=${g.nom+C.nom}^2+${d.nom+C.nom}^2`,`${g.nom+d.nom}^2=${g.nom+C.nom}^2+${d.nom+C.nom}^2`,`${C.nom+d.nom}^2+${C.nom+g.nom}^2=${d.nom+g.nom}^2`,`${C.nom+d.nom}^2+${C.nom+g.nom}^2=${g.nom+d.nom}^2`,`${d.nom+C.nom}^2+${C.nom+g.nom}^2=${d.nom+g.nom}^2`,`${d.nom+C.nom}^2+${C.nom+g.nom}^2=${g.nom+d.nom}^2`,`${C.nom+d.nom}^2+${g.nom+C.nom}^2=${d.nom+g.nom}^2`,`${C.nom+d.nom}^2+${g.nom+C.nom}^2=${g.nom+d.nom}^2`,`${d.nom+C.nom}^2+${g.nom+C.nom}^2=${d.nom+g.nom}^2`,`${d.nom+C.nom}^2+${g.nom+C.nom}^2=${g.nom+d.nom}^2`,`${C.nom+g.nom}^2+${C.nom+d.nom}^2=${d.nom+g.nom}^2`,`${C.nom+g.nom}^2+${C.nom+d.nom}^2=${g.nom+d.nom}^2`,`${C.nom+g.nom}^2+${d.nom+C.nom}^2=${d.nom+g.nom}^2`,`${C.nom+g.nom}^2+${d.nom+C.nom}^2=${g.nom+d.nom}^2`,`${g.nom+C.nom}^2+${C.nom+d.nom}^2=${d.nom+g.nom}^2`,`${g.nom+C.nom}^2+${C.nom+d.nom}^2=${g.nom+d.nom}^2`,`${g.nom+C.nom}^2+${d.nom+C.nom}^2=${d.nom+g.nom}^2`,`${g.nom+C.nom}^2+${d.nom+C.nom}^2=${g.nom+d.nom}^2`],{formatInteractif:"texte"}),2===this.sup&&("AB"===o[a]&&(h+=` d'où $${C.nom+d.nom}^2=${d.nom+g.nom}^2-${C.nom+g.nom}^2$.`),"BC"===o[a]&&(h+="."),"AC"===o[a]&&(h+=` d'où $${C.nom+g.nom}^2=${d.nom+g.nom}^2-${C.nom+d.nom}^2$.`)),"Calculer :"===this.typeDeQuestion){if("AB"===o[a]){let o;h+=` donc $${C.nom+d.nom}^2=${d.nom+g.nom}^2-${C.nom+g.nom}^2$`,h+=`<br> $${C.nom+d.nom}^2=${(0,e.euh)(T)}^2-${(0,e.euh)(P)}^2=${(0,e.k$K)(T**2-P**2)}$`,h+=`<br> $${C.nom+d.nom}=\\sqrt{${(0,e.k$K)(T**2-P**2)}}$`,(0,e.n0o)(Math.sqrt(T**2-P**2),1)===(0,e.n0o)(Math.sqrt(T**2-P**2),5)?(o=(0,e.euh)((0,e.n0o)(Math.sqrt(T**2-P**2),1)),m=(0,e.vbX)(Math.sqrt(T**2-P**2),1),h+=`<br> $${C.nom+d.nom}=${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${C.nom+d.nom}=$`+(0,$.G5)(this,a,"longueur"))):(o=(0,e.euh)((0,e.n0o)(Math.sqrt(T**2-P**2),1)),m=(0,e.vbX)(Math.sqrt(T**2-P**2),1),h+=`<br> $${C.nom+d.nom}\\approx${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${C.nom+d.nom}\\approx$`+(0,$.G5)(this,a,"longueur"))),i.Do.isAmc?(0,$.Iq)(this,a,m):(0,$.Iq)(this,a,new r.Z(m,"cm"),{formatInteractif:"longueur"})}if("BC"===o[a]){const o=(0,e.euh)((0,e.n0o)(Math.sqrt(k**2+P**2),1));m=(0,e.vbX)(Math.sqrt(k**2+P**2),1),h+=`<br> $${d.nom+g.nom}^2=${(0,e.euh)(k)}^2+${(0,e.euh)(P)}^2=${(0,e.k$K)(k**2+P**2)}$`,h+=`<br> $${d.nom+g.nom}=\\sqrt{${(0,e.k$K)(k**2+P**2)}}$`,(0,e.n0o)(Math.sqrt(k**2+P**2),1)===(0,e.n0o)(Math.sqrt(k**2+P**2),5)?(h+=`<br> $${d.nom+g.nom}=${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${d.nom+g.nom}=$`+(0,$.G5)(this,a,"longueur"))):(h+=`<br> $${d.nom+g.nom}\\approx${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${d.nom+g.nom}\\approx$`+(0,$.G5)(this,a,"longueur"))),i.Do.isAmc?(0,$.Iq)(this,a,m):(0,$.Iq)(this,a,new r.Z(m,"cm"),{formatInteractif:"longueur"})}if("AC"===o[a]){const o=(0,e.euh)((0,e.n0o)(Math.sqrt(T**2-k**2),1));m=(0,e.vbX)(Math.sqrt(T**2-k**2),1),h+=` donc $${C.nom+g.nom}^2=${d.nom+g.nom}^2-${C.nom+d.nom}^2$`,h+=`<br> $${C.nom+g.nom}^2=${(0,e.euh)(T)}^2-${(0,e.euh)(k)}^2=${(0,e.k$K)(T**2-k**2)}$`,h+=`<br> $${C.nom+g.nom}=\\sqrt{${(0,e.k$K)(T**2-k**2)}}$`,(0,e.n0o)(Math.sqrt(T**2-k**2),1)===(0,e.n0o)(Math.sqrt(T**2-k**2),5)?(h+=`<br> $${C.nom+g.nom}=${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${C.nom+g.nom}=$`+(0,$.G5)(this,a,"longueur"))):(h+=`<br> $${C.nom+g.nom}\\approx${o}$ cm.`,this.interactif&&i.Do.isHtml&&(t+=`<br>$${C.nom+g.nom}\\approx$`+(0,$.G5)(this,a,"longueur"))),i.Do.isAmc?(0,$.Iq)(this,a,m):(0,$.Iq)(this,a,new r.Z(m,"cm"),{formatInteractif:"longueur"})}}else t+=(0,$.G5)(this,a);-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(h),a++),u++}(0,e.K1R)(this)}}},25523:(o,n,m)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(o){},this.questionJamaisPosee=function(o,...n){0===o&&(this.listeArguments=[]);let m="";for(const t of n)void 0!==t&&(m+=t.toString());return!(this.listeArguments.indexOf(m)>-1)&&(this.listeArguments.push(m),!0)}}m.r(n),m.d(n,{default:()=>t})}}]);
//# sourceMappingURL=4704.4de014ab84eabf9de007.js.map