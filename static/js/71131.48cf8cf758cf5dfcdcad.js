"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[71131,17007],{71131:($,i,s)=>{s.r(i),s.d(i,{titre:()=>a,default:()=>n});var e=s(17007),t=s(66170),r=s(30169);const a="Puissances : Calculs automatisés et règles de calculs";function n(){e.default.call(this),this.titre=a,t.Do.isHtml?this.consigne="Écrire sous la forme $\\mathbf{a^n}$.":this.consigne="Écrire sous la forme $a^n$.",this.spacing=2,this.spacingCorr=2.5,this.nbQuestions=8,this.nbColsCorr=1,this.nouvelleVersion=function($){this.listeQuestions=[],this.listeCorrections=[];let i=(0,r.SRM)([1,2,3,4,5,6,7,8],this.nbQuestions);this.boutonAide=(0,r.apm)($,"assets/pdf/FichePuissances-4N21.pdf","Aide mémoire sur les puissances (Sébastien Lozano)","Aide mémoire");for(let s,e,t,a,n=0,o=0;n<this.nbQuestions&&o<50;){switch(i[n]){case 1:s=3,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1])],t=`$\\dfrac{${s}^${e[0]}\\times ${s*s}}{${s}^${e[1]} \\times ${s}^${e[2]}}$`,a=`$\\dfrac{${s}^${e[0]}\\times ${s*s}}{${s}^${e[1]} \\times ${s}^${e[2]}}`,a+=` = \\dfrac{${s}^${e[0]}\\times ${s}^{2}}{${s}^${e[1]} \\times ${s}^${e[2]}}`,a+=` = \\dfrac{${s}^{${e[0]}+2}}{${s}^{${e[1]}+${e[2]}}}`,a+=` = \\dfrac{${s}^{${e[0]+2}}}{${s}^{${e[1]+e[2]}}}`,a+=` = ${s}^{${e[0]+2}-${e[1]+e[2]}}`,a+=` = ${s}^{${e[0]+2-e[1]-e[2]}}`,e[0]+2-e[1]-e[2]!=0&&e[0]+2-e[1]-e[2]!=1||(a+="="+(0,r.CYz)(s,e[0]+2-e[1]-e[2])),a+="$";break;case 2:s=2,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1])],t=`$\\dfrac{${s}^${e[0]}\\times ${s**3}}{${s}^${e[1]}}$`,a=`$\\dfrac{${s}^${e[0]}\\times ${s**3}}{${s}^${e[1]}}`,a+=` = \\dfrac{${s}^${e[0]}\\times ${s}^3}{${s}^${e[1]}}`,a+=` = \\dfrac{${s}^{${e[0]}+3}}{${s}^${e[1]}}`,a+=` = \\dfrac{${s}^{${e[0]+3}}}{${s}^${e[1]}}`,a+=` = ${s}^{${e[0]+3}-${e[1]}}`,a+=` = ${s}^{${e[0]+3-e[1]}}`,e[0]+3-e[1]!=0&&e[0]+3-e[1]!=1||(a+="="+(0,r.CYz)(s,e[0]+3-e[1])),a+="$";break;case 3:s=5,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,2)],2==e[1]?(t=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}^${e[1]}}$`,a=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}^${e[1]}}`,a+=`=\\dfrac{${s}^{1+${e[0]}}}{(${s}^2)^${e[1]}}`,a+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^{2 \\times ${e[1]}}}`,a+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{${2*e[1]}}}`):(t=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}}$`,a=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}}`,a+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^2}`),a+=`=${s}^{${1+e[0]}-${2*e[1]}}`,a+=`=${s}^{${1+e[0]-2*e[1]}}`,1+e[0]-2*e[1]!=0&&1+e[0]-2*e[1]!=1||(a+="="+(0,r.CYz)(s,1+e[0]-2*e[1])),a+="$";break;case 4:s=2,e=[(0,r.nSR)(1,7,[1])],t=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}\\times ${s**2}}$`,a=`$\\dfrac{${s}\\times ${s}^${e[0]}}{${s**2}\\times ${s**2}}`,a+=`=\\dfrac{${s}^{1+${e[0]}}}{${s}^2\\times ${s}^2}`,a+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{2+2}}`,a+=`=\\dfrac{${s}^{${1+e[0]}}}{${s}^{4}}`,a+=`=${s}^{${1+e[0]}-4}`,a+=`=${s}^{${1+e[0]-2-2}}`,1+e[0]-2-2!=0&&1+e[0]-2-2!=1||(a+="="+(0,r.CYz)(s,1+e[0]-2-2)),a+="$";break;case 5:s=2,e=[(0,r.nSR)(1,7,[1])],t=`$\\dfrac{${s**2}^${e[0]}}{${s}}$`,a=`$\\dfrac{${s**2}^${e[0]}}{${s}}`,a+=`=\\dfrac{(${s}^2)^${e[0]}}{${s}}`,a+=`=\\dfrac{${s}^{2\\times ${e[0]}}}{${s}}`,a+=`=\\dfrac{${s}^{${2*e[0]}}}{${s}}`,a+=`=${s}^{${2*e[0]}-1}`,a+=`=${s}^{${2*e[0]-1}}$`;break;case 6:s=3,e=[(0,r.nSR)(1,3,[1])],t=`$\\dfrac{${s**3}^${e[0]}}{${s}}$`,a=`$\\dfrac{${s**3}^${e[0]}}{${s}}`,a+=`=\\dfrac{(${s}^3)^${e[0]}}{${s}}`,a+=`=\\dfrac{${s}^{3\\times ${e[0]}}}{${s}}`,a+=`=\\dfrac{${s}^{${3*e[0]}}}{${s}}`,a+=`=${s}^{${3*e[0]}-1}`,a+=`=${s}^{${3*e[0]-1}}$`;break;case 7:s=3,e=[(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,7,[1]),(0,r.nSR)(1,4,[1])],t=`$\\dfrac{${s}^${e[0]}\\times ${s}^${e[1]}}{${s**2}^${e[2]}}\\times ${s}$`,a=`$\\dfrac{${s}^${e[0]}\\times ${s}^${e[1]}}{${s**2}^${e[2]}}\\times ${s}`,a+=`=\\dfrac{${s}^{${e[0]}+${e[1]}}}{(${s}^2)^${e[2]}}\\times ${s}`,a+=`=\\dfrac{${s}^{${e[0]+e[1]}}}{${s}^{2\\times ${e[2]}}}\\times ${s}`,a+=`=\\dfrac{${s}^{${e[0]+e[1]}}}{${s}^{${2*e[2]}}}\\times ${s}`,a+=`=\\dfrac{${s}^{${e[0]+e[1]}}\\times ${s}}{${s}^{${2*e[2]}}}`,a+=`=\\dfrac{${s}^{${e[0]+e[1]}+1}}{${s}^{${2*e[2]}}}`,a+=`=\\dfrac{${s}^{${e[0]+e[1]+1}}}{${s}^{${2*e[2]}}}`,a+=`=${s}^{${e[0]+e[1]+1}-${2*e[2]}}`,a+=`=${s}^{${e[0]+e[1]+1-2*e[2]}}`,e[0]+e[1]+1-2*e[2]!=0&&e[0]+e[1]+1-2*e[2]!=1||(a+="="+(0,r.CYz)(s,e[0]+e[1]+1-2*e[2])),a+="$";break;case 8:s=2,e=[(0,r.nSR)(1,7,[1])],t=`$\\dfrac{${s**3}\\times ${s}}{${s**2}^${e[0]}}$`,a=`$\\dfrac{${s**3}\\times ${s}}{${s**2}^${e[0]}}`,a+=`=\\dfrac{${s}^3\\times ${s}}{(${s}^2)^${e[0]}}`,a+=`=\\dfrac{${s}^{3+1}}{${s}^{2\\times${e[0]}}}`,a+=`=\\dfrac{${s}^{4}}{${s}^{${2*e[0]}}}`,a+=`=${s}^{4-${2*e[0]}}`,a+=`=${s}^{${4-2*e[0]}}`,4-2*e[0]!=0&&4-2*e[0]!=1||(a+="="+(0,r.CYz)(s,4-2*e[0])),a+="$"}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(a),n++),o++}(0,r.K1R)(this)}}},17007:($,i,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function($){},this.questionJamaisPosee=function($,...i){0===$&&(this.listeArguments=[]);let s="";for(const e of i)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>e})}}]);
//# sourceMappingURL=71131.48cf8cf758cf5dfcdcad.js.map