"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[67453,25523],{67453:($,i,s)=>{s.r(i),s.d(i,{titre:()=>n,interactifReady:()=>o,interactifType:()=>c,amcReady:()=>h,amcType:()=>f,default:()=>m});var e=s(25523),t=s(22380),r=s(25482),a=s(11945);const n="Puissances : Calculs automatisés et règles de calculs",o=!0,c="mathLive",h=!0,f="AMCNum";function m(){e.default.call(this),this.titre=n,t.Do.isHtml?this.consigne="Écrire sous la forme $\\mathbf{a^n}$.":this.consigne="Écrire sous la forme $a^n$.",this.spacing=2,this.spacingCorr=2.5,this.nbQuestions=8,this.nbColsCorr=1,this.nouvelleVersion=function($){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const i=(0,r.SRM)([1,2,3,4,5,6,7,8],this.nbQuestions);this.boutonAide=(0,r.apm)($,"assets/pdf/FichePuissances-4N21.pdf","Aide mémoire sur les puissances (Sébastien Lozano)","Aide mémoire");for(let s,e,n,o,c,h,f=0,m=0;f<this.nbQuestions&&m<50;){switch(i[f]){case 1:s=3,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1])],n=`$\\dfrac{${s}^${e[0]}\\times ${s*s}}{${s}^${e[1]} \\times ${s}^${e[2]}}$`,o=`$\\dfrac{${s}^${e[0]}\\times ${s*s}}{${s}^${e[1]} \\times ${s}^${e[2]}}`,o+=` = \\dfrac{${s}^${e[0]}\\times ${s}^{2}}{${s}^${e[1]} \\times ${s}^${e[2]}}`,o+=` = \\dfrac{${s}^{${e[0]}+2}}{${s}^{${e[1]}+${e[2]}}}`,o+=` = \\dfrac{${s}^{${e[0]+2}}}{${s}^{${e[1]+e[2]}}}`,o+=` = ${s}^{${e[0]+2}-${e[1]+e[2]}}`,o+=` = ${s}^{${e[0]+2-e[1]-e[2]}}`,e[0]+2-e[1]-e[2]!=0&&e[0]+2-e[1]-e[2]!=1||(o+="="+(0,r.CYz)(s,e[0]+2-e[1]-e[2])),o+="$",c=`${s}^{${e[0]+2-e[1]-e[2]}}`,h=e[0]+2-e[1]-e[2];break;case 2:s=2,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1])],n=`$\\dfrac{${s}^${e[0]}\\times ${s**3}}{${s}^${e[1]}}$`,o=`$\\dfrac{${s}^${e[0]}\\times ${s**3}}{${s}^${e[1]}}`,o+=` = \\dfrac{${s}^${e[0]}\\times ${s}^3}{${s}^${e[1]}}`,o+=` = \\dfrac{${s}^{${e[0]}+3}}{${s}^${e[1]}}`,o+=` = \\dfrac{${s}^{${e[0]+3}}}{${s}^${e[1]}}`,o+=` = ${s}^{${e[0]+3}-${e[1]}}`,o+=` = ${s}^{${e[0]+3-e[1]}}`,e[0]+3-e[1]!=0&&e[0]+3-e[1]!=1||(o+="="+(0,r.CYz)(s,e[0]+3-e[1])),o+="$",c=`${s}^{${e[0]+3-e[1]}}`,h=e[0]+3-e[1];break;case 3:s=5,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,2)],2===e[1]?(n=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}^${e[1]}}$`,o=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}^${e[1]}}`,o+=`=\\dfrac{${s}^{1+${e[0]}}}{(${s}^2)^${e[1]}}`,o+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^{2 \\times ${e[1]}}}`,o+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{${2*e[1]}}}`):(n=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}}$`,o=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}}`,o+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^2}`),o+=`=${s}^{${1+e[0]}-${2*e[1]}}`,o+=`=${s}^{${1+e[0]-2*e[1]}}`,1+e[0]-2*e[1]!=0&&1+e[0]-2*e[1]!=1||(o+="="+(0,r.CYz)(s,1+e[0]-2*e[1])),o+="$",c=`${s}^{${1+e[0]-2*e[1]}}`,h=1+e[0]-2*e[1];break;case 4:s=2,e=[(0,r.nSR)(1,7,[1])],n=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}\\times ${s**2}}$`,o=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}\\times ${s**2}}`,o+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^2\\times ${s}^2}`,o+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{2+2}}`,o+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{4}}`,o+=`=${s}^{${1+e[0]}-4}`,o+=`=${s}^{${1+e[0]-2-2}}`,1+e[0]-2-2!=0&&1+e[0]-2-2!=1||(o+="="+(0,r.CYz)(s,1+e[0]-2-2)),o+="$",c=`${s}^{${1+e[0]-2-2}}`,h=1+e[0]-2-2;break;case 5:s=2,e=[(0,r.nSR)(1,7,[1])],n=`$\\dfrac{${s**2}^${e[0]}}{${s}}$`,o=`$\\dfrac{${s**2}^${e[0]}}{${s}}`,o+=`=\\dfrac{(${s}^2)^${e[0]}}{${s}}`,o+=`=\\dfrac{${s}^{2\\times ${e[0]}}}{${s}}`,o+=`=\\dfrac{${s}^{${2*e[0]}}}{${s}}`,o+=`=${s}^{${2*e[0]}-1}`,o+=`=${s}^{${2*e[0]-1}}$`,c=`${s}^{${2*e[0]-1}}`,h=2*e[0]-1;break;case 6:s=3,e=[(0,r.nSR)(1,3,[1])],n=`$\\dfrac{${s**3}^${e[0]}}{${s}}$`,o=`$\\dfrac{${s**3}^${e[0]}}{${s}}`,o+=`=\\dfrac{(${s}^3)^${e[0]}}{${s}}`,o+=`=\\dfrac{${s}^{3\\times ${e[0]}}}{${s}}`,o+=`=\\dfrac{${s}^{${3*e[0]}}}{${s}}`,o+=`=${s}^{${3*e[0]}-1}`,o+=`=${s}^{${3*e[0]-1}}$`,c=`${s}^{${3*e[0]-1}}`,h=3*e[0]-1;break;case 7:s=3,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,4,[1])],n=`$\\dfrac{${s}^${e[0]}\\times ${s}^${e[1]}}{${s**2}^${e[2]}}\\times ${s}$`,o=`$\\dfrac{${s}^${e[0]}\\times ${s}^${e[1]}}{${s**2}^${e[2]}}\\times ${s}`,o+=`=\\dfrac{${s}^{${e[0]}+${e[1]}}}{(${s}^2)^${e[2]}}\\times ${s}`,o+=`=\\dfrac{${s}^{${e[0]+e[1]}}}{${s}^{2\\times ${e[2]}}}\\times ${s}`,o+=`=\\dfrac{${s}^{${e[0]+e[1]}}}{${s}^{${2*e[2]}}}\\times ${s}`,o+=`=\\dfrac{${s}^{${e[0]+e[1]}}\\times ${s}}{${s}^{${2*e[2]}}}`,o+=`=\\dfrac{${s}^{${e[0]+e[1]}+1}}{${s}^{${2*e[2]}}}`,o+=`=\\dfrac{${s}^{${e[0]+e[1]+1}}}{${s}^{${2*e[2]}}}`,o+=`=${s}^{${e[0]+e[1]+1}-${2*e[2]}}`,o+=`=${s}^{${e[0]+e[1]+1-2*e[2]}}`,e[0]+e[1]+1-2*e[2]!=0&&e[0]+e[1]+1-2*e[2]!=1||(o+="="+(0,r.CYz)(s,e[0]+e[1]+1-2*e[2])),o+="$",c=`${s}^{${e[0]+e[1]+1-2*e[2]}}`,h=e[0]+e[1]+1-2*e[2];break;case 8:s=2,e=[(0,r.nSR)(1,7,[1])],n=`$\\dfrac{${s**3}\\times ${s}}{${s**2}^${e[0]}}$`,o=`$\\dfrac{${s**3}\\times ${s}}{${s**2}^${e[0]}}`,o+=`=\\dfrac{${s}^3\\times ${s}}{(${s}^2)^${e[0]}}`,o+=`=\\dfrac{${s}^{3+1}}{${s}^{2\\times${e[0]}}}`,o+=`=\\dfrac{${s}^{4}}{${s}^{${2*e[0]}}}`,o+=`=${s}^{4-${2*e[0]}}`,o+=`=${s}^{${4-2*e[0]}}`,4-2*e[0]!=0&&4-2*e[0]!=1||(o+="="+(0,r.CYz)(s,4-2*e[0])),o+="$",c=`${s}^{${4-2*e[0]}}`,h=4-2*e[0]}this.interactif&&!t.Do.isAmc&&((0,a.Iq)(this,f,c,{formatInteractif:"puissance"}),n+=(0,a.G5)(this,f,"largeur25 inline")),t.Do.isAmc&&(0,a.Iq)(this,f,c,{formatInteractif:"puissance",basePuissance:s,exposantPuissance:h}),-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(o),f++),m++}(0,r.K1R)(this)}}},25523:($,i,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function($){},this.questionJamaisPosee=function($,...i){0===$&&(this.listeArguments=[]);let s="";for(const e of i)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>e})}}]);
//# sourceMappingURL=67453.daf88374c6a971b25aa9.js.map