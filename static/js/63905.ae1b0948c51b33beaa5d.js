"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[63905,25523],{63905:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>r,interactifType:()=>f,interactifReady:()=>b,default:()=>q});var $=e(25523),a=e(25482),s=e(22380),o=e(11945),n=e(41154);const r="Somme, différence ou produit de fractions",f="mathLive",b=!0;function q(){$.default.call(this),this.interactifReady=b,this.interactifType=f,this.spacing=s.Do.isHtml?4:3,this.spacingCorr=s.Do.isHtml?4:3,this.nbColonneModifiable=!1,this.consigne="Effectuer les calculs suivants :",this.nbQuestions=8,this.nbCols=4,this.nbColsCorr=1,this.tailleDiaporama=3,this.video="",this.sup=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nouvelleVersion=function(i){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.sup=parseInt(this.sup);let t=["type1","type2","type3","type4","type5","type6"];switch(this.sup){case 1:t=["type1","type1","type1","type1","type2","type2","type5","type6"];break;case 2:t=["type1","type2","type3","type3","type3","type4","type5","type6"];break;case 3:t=["type1","type2","type3","type4","type5","type6","type7","type8"]}const e=(0,a.SRM)(t,this.nbQuestions);for(let $,r,f,b,q,l,h,u,c,m,g,p,G=0,y=0;G<this.nbQuestions&&y<50;){switch($=(0,a.nSR)(1,7),r=(0,a.nSR)(3,9),f=(0,a.nSR)(2,9),l=(0,a.nSR)(1,4),h=(0,a.nSR)(2,5),b=l*f,q=(0,a.nSR)(2,9),u=(0,a.q$q)([1,2]),c="",m="",s.Do.isHtml||G%4==0&&(m+="\\begin{multicols}{4}"),e[G]){case"type1":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}+${(0,a.qaf)(r,b)}$ `,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}+${(0,a.qaf)(r,b)}$<br>`,l>1&&(this.correctionDetaillee&&(m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($+(0,a.b1)("\\times"+l),f+(0,a.b1)("\\times"+l))}+${(0,a.qaf)(r,b)}$<br>`),m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($*l,b)}+${(0,a.qaf)(r,b)}$<br>`),s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*l+r,b))}$ `,g=$*l+r,p=b):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}+${(0,a.qaf)(r,f)}$ `,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}+${(0,a.qaf)(r,f)}$<br>`,l>1&&(this.correctionDetaillee&&(m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}+${(0,a.qaf)(r+(0,a.b1)("\\times"+l),f+(0,a.b1)("\\times"+l))}$<br>`),m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}+${(0,a.qaf)(r*l,b)}$<br>`),s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($+r*l,b))}$ `,g=$+r*l,p=b);break;case"type2":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${l} + ${(0,a.qaf)($,f)} $ `,m+=`$${(0,a.Gag)(G+1)} = ${l} + ${(0,a.qaf)($,f)} $<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(l*f,f)} + ${(0,a.qaf)($,f)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($+l*f,f))}$`):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} + ${l} $`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}+${l}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}+${(0,a.qaf)(l*f,f)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($+l*f,f))}$`),g=$+l*f,p=f;break;case"type3":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}-${(0,a.qaf)(r,b)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}-${(0,a.qaf)(r,b)}$<br>`,l>1&&(this.correctionDetaillee&&(m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($+(0,a.b1)("\\times"+l),f+(0,a.b1)("\\times"+l))} - ${(0,a.qaf)(r,b)}$<br>`),m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($*l,f*l)}-${(0,a.qaf)(r,b)}$<br>`),s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*l-r,b))}$ `,g=$*l-r,p=b):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}-${(0,a.qaf)(r,f)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}-${(0,a.qaf)(r,f)}$<br>`,l>1&&(this.correctionDetaillee&&(m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}-${(0,a.qaf)(r+(0,a.b1)("\\times"+l),f+(0,a.b1)("\\times"+l))}$<br>`),m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,b)}-${(0,a.qaf)(r*l,b)}$<br>`),s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($-r*l,b))}$`,g=$-r*l,p=b);break;case"type4":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${l} - ${(0,a.qaf)($,f)} $`,m+=`$${(0,a.Gag)(G+1)} = ${l} - ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(l*f,f)} - ${(0,a.qaf)($,f)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)(l*f-$,f))}$`,g=l*f-$,p=f):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}-${l}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}-${l}$<br>`,l>1&&(m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)}-${(0,a.qaf)(l*f,f)}$<br>`),s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($-l*f,f))}$ `,g=$-l*f,p=f);break;case"type5":c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} \\times ${(0,a.qaf)(r,q)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} \\times ${(0,a.qaf)(r,q)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*r,f*q))}$`,g=$*r,p=f*q;break;case"type6":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} \\times ${h}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} \\times ${h}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} \\times ${(0,a.qaf)(h,"1")}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*h,f))}$`):(c+=`$${(0,a.Gag)(G+1)} = ${h} \\times ${(0,a.qaf)($,f)} $`,m+=`$${(0,a.Gag)(G+1)} = ${h} \\times ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(h,"1")} \\times  ${(0,a.qaf)($,f)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*h,f))}$`),g=$*h,p=f;break;case"type7":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} + ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)}$ `,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} + ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} + ${(0,a.qaf)(r*h,f*q)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($*q,f*q)} + ${(0,a.qaf)(r*h,f*q)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*q+r*h,f*q))}$`,g=$*q+r*h,p=f*q):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} - ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} - ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($,f)} - ${(0,a.qaf)(r*h,f*q)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)($*q,f*q)} - ${(0,a.qaf)(r*h,f*q)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)($*q-r*h,f*q))}$`,g=$*q-r*h,p=f*q);break;case"type8":1===u?(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)} + ${(0,a.qaf)($,f)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)} + ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r*h,f*q)} + ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r*h,f*q)} + ${(0,a.qaf)($*q,f*q)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)(r*h+$*q,f*q))}$`,g=r*h+$*q,p=f*q):(c+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)} - ${(0,a.qaf)($,f)}$`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r,f)} \\times ${(0,a.qaf)(h,q)} - ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r*h,f*q)} - ${(0,a.qaf)($,f)}$<br>`,m+=`$${(0,a.Gag)(G+1)} = ${(0,a.qaf)(r*h,f*q)} - ${(0,a.qaf)($*q,f*q)}$<br>`,s.Do.isHtml||G!==this.nbQuestions-1&&G%4!=3&&(m+="\\columnbreak\n"),m+=`$${(0,a.b1)((0,a.Gag)(G+1)+"="+(0,a.qaf)(r*h-$*q,f*q))}$`,g=r*h-$*q,p=f*q)}c+="<br>",m+="\n",s.Do.isHtml||(G%4==3||G===this.nbQuestions-1)&&(m+="\\end{multicols}"),this.questionJamaisPosee(G,c)&&(c+=(0,o.G5)(this,G,"largeur25 inline"),(0,o.Iq)(this,G,(0,n.Pj)(g,p),{formatInteractif:"fractionEgale"}),this.listeQuestions.push(c),this.listeCorrections.push(m),G++),y++}(0,a.FRy)(this,!1)},this.besoinFormulaireNumerique=["Type de questions",3,"1 : Somme et produit\n2 : Somme ou différence, et produit\n3 : Avec priorité opératoire"]}},25523:(i,t,e)=>{function $(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const $ of t)void 0!==$&&(e+=$.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>$})}}]);
//# sourceMappingURL=63905.ae1b0948c51b33beaa5d.js.map