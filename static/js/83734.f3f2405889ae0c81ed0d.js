"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[83734,72862,25523],{83734:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>r,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,dateDeModifImportante:()=>n,default:()=>o});var s=i(72862);const r="Écrire la liste de tous les diviseurs d’un entier",n="28/10/2021";function o(){s.default.call(this),this.sup="3-3-3",this.sup2="8-10-12",this.sup3=12}},72862:(e,t,i)=>{i.r(t),i.d(t,{dateDeModifImportante:()=>a,titre:()=>u,interactifReady:()=>h,interactifType:()=>l,default:()=>c});var s=i(25523),r=i(22380),n=i(25482),o=i(11945);const a="28/10/2021",u="Écrire la liste de tous les diviseurs d’un entier",h=!0,l="mathLive";function c(){s.default.call(this),this.titre=u,this.consigne="",r.Do.isHtml?this.spacing=2:this.spacing=1,r.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.sup="2-2-2",this.sup2="6-6-6",this.sup3=10,this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[];const t=(0,n.bqK)(this.sup.split("-"),this.nbQuestions),i=(0,n.bqK)(this.sup2.split("-"),this.nbQuestions);this.sup3=(0,n.QmD)(2,16,parseFloat(this.sup3),10);for(let r=0;r<this.nbQuestions;r++)t[r]=(0,n.QmD)(1,5,parseFloat(t[r]),2);for(let r=0;r<this.nbQuestions;r++)i[r]=(0,n.QmD)(2,parseInt(this.sup3),parseFloat(i[r]),6);const s=(0,n.bqK)([1,1,2],this.nbQuestions);for(let a,u,h,l,c=0,d=[],p=0;c<this.nbQuestions&&p<50;){e=s[c],i[c]>10&&(t[c]=Math.min(t[c],3));do{u=(0,n.nSR)(10**(t[c]-1),10**t[c]-1),d=(0,n.coU)(u),a=d.length}while(a<Math.max(2,i[c]-3)||a>i[c]);switch(e){case 1:if(h="",this.interactif?h+=`À l'aide du tableau, écrire la liste de tous les diviseurs de $${(0,n.euh)(u)}$ <b>dans l'ordre croissant séparés par une virgule.</b>`:h+=`Compléter le tableau suivant et faire la liste de tous les diviseurs de ${(0,n.euh)(u)}`,r.Do.isHtml||(h+="$\\medskip$"),h+="<br>",r.Do.isHtml?h+="$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n":h+="$\\begin{array}{|c|c|c|}\n",h+="\\hline\n",h+=`\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${u} \\\\\n`,h+="\\hline\n",a%2==0)for(let e=0;e<(0,n.coU)(u).length/2;e++)h+=(0,n.OIN)((0,n.coU)(u)[e])+" & "+(0,n.OIN)((0,n.coU)(u)[(0,n.coU)(u).length-e-1])+`& ${(0,n.OIN)(u)} \\\\\n`,h+="\\hline\n";else{for(let e=0;e<((0,n.coU)(u).length-1)/2;e++)h+=(0,n.OIN)((0,n.coU)(u)[e])+" & "+(0,n.OIN)((0,n.coU)(u)[(0,n.coU)(u).length-e-1])+`& ${(0,n.OIN)(u)} \\\\\n`;h+=(0,n.OIN)((0,n.coU)(u)[(a-1)/2])+" & "+(0,n.OIN)((0,n.coU)(u)[(a-1)/2])+`& ${(0,n.OIN)(u)} \\\\\n`,h+="\\hline\n"}if(h+="\\end{array}\n$",h+="<br>",l=`Le tableau suivant contient tous les couples de facteurs dont le produit vaut ${u}`,r.Do.isHtml||(l+="$\\medskip$"),l+="<br>",r.Do.isHtml?l+="$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n":l+="$\\begin{array}{|c|c|c|}\n",l+="\\hline\n",l+=`\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${u} \\\\\n`,l+="\\hline\n",a%2==0)for(let e=0;e<(0,n.coU)(u).length/2;e++)l+=(0,n.coU)(u)[e]+" & "+(0,n.coU)(u)[(0,n.coU)(u).length-e-1]+`& ${u} \\\\\n`,l+="\\hline\n";else{for(let e=0;e<((0,n.coU)(u).length-1)/2;e++)l+=(0,n.coU)(u)[e]+" & "+(0,n.coU)(u)[(0,n.coU)(u).length-e-1]+`& ${u} \\\\\n`;l+=(0,n.coU)(u)[(a-1)/2]+" & "+(0,n.coU)(u)[(a-1)/2]+`& ${u} \\\\\n`,l+="\\hline\n"}l+="\\end{array}\n$",r.Do.isHtml||(l+="$\\medskip$"),l+="<br>",l+=`${u} a donc ${a} diviseurs qui sont : `,l+="1";for(let e=1;e<(0,n.coU)(u).length;e++)l+=" ; "+(0,n.coU)(u)[e];l+=".";break;case 2:if(h="",this.interactif?h+=`Écrire la liste de tous les diviseurs de $${(0,n.euh)(u)}$ <b>dans l'ordre croissant séparés par une virgule.</b>`:h+=`Écrire la liste de tous les diviseurs de ${(0,n.euh)(u)}.`,l=`Pour trouver la liste des diviseurs de ${u} on cherche tous les produits de deux facteurs qui donnent ${u}. En écrivant toujours le plus petit facteur en premier.<br>`,l+=`Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${u}, par exemple ici, ${Math.trunc(Math.sqrt(u))}$\\times $${Math.trunc(Math.sqrt(u))} = ${Math.trunc(Math.sqrt(u))*Math.trunc(Math.sqrt(u))}<${u}`,l+=` et ${Math.trunc(Math.sqrt(u))+1}$\\times $${Math.trunc(Math.sqrt(u))+1} = ${(Math.trunc(Math.sqrt(u))+1)*(Math.trunc(Math.sqrt(u))+1)}>${u} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(u))}.`,l+=` En effet, si ${u} est le produit de deux entiers p$\\times $q avec p < q alors si p$\\times $p > ${u} c'est que q$\\times $q < ${u} mais dans ce cas p serait supérieur à q sinon p$\\times $q serait inférieur à ${u} ce qui ne doit pas être le cas.<br>`,(0,n.coU)(u).length%2==0)for(let e=0;e<(0,n.coU)(u).length/2;e++)l+=(0,n.coU)(u)[e]+"$\\times $"+(0,n.coU)(u)[(0,n.coU)(u).length-e-1]+` = ${u}<br>`;else{for(let e=0;e<((0,n.coU)(u).length-1)/2;e++)l+=(0,n.coU)(u)[e]+"$\\times $"+(0,n.coU)(u)[(0,n.coU)(u).length-e-1]+"<br>";l+=(0,n.coU)(u)[((0,n.coU)(u).length-1)/2]+"$\\times $"+(0,n.coU)(u)[((0,n.coU)(u).length-1)/2]+` = ${u}<br>`}l+=`Chacun des facteurs de la liste ci-dessus est un diviseur de ${u}.<br>`,l+=`La liste des diviseurs de ${u} est donc `,l+="1";for(let e=1;e<(0,n.coU)(u).length;e++)l+=" ; "+(0,n.coU)(u)[e];l+="."}(0,o.Iq)(this,c,JSON.stringify((0,n.coU)(u)).replace("[","").replace("]","")),h+=(0,o.G5)(this,c,"largeur35 inline",{texte:`<br> Les diviseurs de $${(0,n.euh)(u)}$ sont : `}),-1===this.listeQuestions.indexOf(h)&&(this.listeQuestions.push(h),this.listeCorrections.push(l),c++),p++}(0,n.K1R)(this)},this.besoinFormulaireTexte=["Nombres de chiffres des entiers (un par question) séparés par des tirets","2-2-2"],this.besoinFormulaire2Texte=["Nombre maximum de diviseurs des entiers (un par question) séparés par des tirets","6-6-6"]}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=83734.f3f2405889ae0c81ed0d.js.map