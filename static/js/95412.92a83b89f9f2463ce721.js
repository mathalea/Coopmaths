(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[95412,71129],{95412:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>a,interactifReady:()=>c,interactifType:()=>b,default:()=>u});var s=i(71129),r=i(62259),n=i(63861),o=i(10229);const a="Calcul mental et calcul littéral",c=!0,b="mathLive";function u(){let e;s.default.call(this),this.debug=!1,this.sup=1,this.debug,this.nbQuestions=3,this.titre=a,this.interactifReady=c,this.interactifType=b,this.consigne="Faire les calculs suivants sans calculatrice. Utiliser la double distributivité ou les identités remarquables.",this.nbCols=1,this.nbColsCorr=1,r.Do.isHtml,this.spacing=1,r.Do.isHtml,this.spacingCorr=1,this.listePackages="bclogo",this.nouvelleVersion=function(){function t(){return r.Do.isHtml?"<br><br>":"\\hfill"}switch(Number(this.sup)){case 1:e=[0,0,0],this.introduction=(0,n.KUN)("$(a+b)^2=a^2+2ab+b^2$","nombres","Coup de pouce");break;case 2:e=[1,1,1],this.introduction=(0,n.KUN)("$(a-b)^2 = a^2-2ab+b^2$","nombres","Coup de pouce");break;case 3:e=[2,2,2],this.introduction=(0,n.KUN)("$(a+b)(a-b)=a^2-b^2$","nombres","Coup de pouce");break;case 4:e=(0,n.TVQ)([0,1,2]),this.introduction=(0,n.KUN)(`$(a+b)^2 = a^2 +2ab + b^2$ ${t()} $(a-b)^2 = a^2-2ab+b^2$ ${t()} $(a+b)(a-b)=a^2-b^2$`,"nombres","Coup de pouce")}this.listeQuestions=[],this.listeCorrections=[];const i=(0,n.bqK)(e,this.nbQuestions);for(let e,c,b=0,u=0;b<this.nbQuestions&&u<50;){function s(e,t){return e===t?`${e}^2`:`${e}\\times ${t}`}function a(e,t){return e?t:""}const t=(0,n.nSR)(2,9),l=(0,n.nSR)(1,4),$=(0,n.nSR)(1,4),h=(0,n.nSR)(1,9),d=(0,n.q$q)([10,100]),m=100,_=(0,n.q$q)([[{str:"-",nb:-1},{str:"+",nb:1}],[{str:"+",nb:1},{str:"-",nb:-1}]]),f=(0,n.q$q)(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"]),g=[{lettre:f,a:t,b:l,coeff:d,a_coeff:t*d,operations:[{str:"+",nb:1},{str:"+",nb:1}],facteurs:[{str:`${(0,n.euh)(t*d)}+${l}`,nb:(0,n.euh)(t*d+l)},{str:`${(0,n.euh)(t*d)}+${l}`,nb:(0,n.euh)(t*d+l)}],carre_de_a_coeff:(0,n.euh)(d*d*t*t),carre_de_b:(0,n.euh)(l*l),termes_rectangles:[(0,n.euh)(d*t*l),(0,n.euh)(d*t*l)],somme_terme_rect:(0,n.euh)(2*d*t*l),signes_dbl_dist:["+","+","+"],carre:!0,resultat:(0,n.euh)(t*t*d*d+l*l+2*t*d*l),resultatNumerique:t*t*d*d+l*l+2*t*d*l},{lettre:f,a:t,b:$,coeff:d,a_coeff:t*d,operations:[{str:"-",nb:-1},{str:"-",nb:-1}],facteurs:[{str:`${(0,n.euh)(t*d)}-${$}`,nb:(0,n.euh)(t*d-$)},{str:`${(0,n.euh)(t*d)}-${$}`,nb:(0,n.euh)(t*d-$)}],carre_de_a_coeff:(0,n.euh)(d*d*t*t),carre_de_b:(0,n.euh)($*$),termes_rectangles:[(0,n.euh)(d*t*$),(0,n.euh)(d*t*$)],somme_terme_rect:(0,n.euh)(2*d*t*$),signes_dbl_dist:["+","-","-"],carre:!0,resultat:(0,n.euh)(t*t*d*d+$*$-2*t*d*$),resultatNumerique:t*t*d*d+$*$-2*t*d*$},{lettre:f,a:t,b:h,coeff:m,a_coeff:t*m,operations:_,facteurs:[{str:`${(0,n.euh)(t*m)} ${_[0].str} ${h}`,nb:(0,n.euh)(t*m+_[0].nb*h)},{str:`${(0,n.euh)(t*m)} ${_[1].str} ${h}`,nb:(0,n.euh)(t*m+_[1].nb*h)}],carre_de_a_coeff:(0,n.euh)(m*m*t*t),carre_de_b:(0,n.euh)(h*h),termes_rectangles:[(0,n.euh)(m*t*h),(0,n.euh)(m*t*h)],somme_terme_rect:0,signes_dbl_dist:["-","+","-"],carre:!1,resultat:(0,n.euh)(t*t*m*m-h*h),resultatNumerique:t*t*m*m-h*h}],p=[];for(let e=0;e<g.length;e++)p.push({enonce:`\n                     $${g[e].lettre}=${s(g[e].facteurs[0].nb,g[e].facteurs[1].nb)}$\n                    `,question:"",correction1:`\n                        ${(0,n.HzX)("Avec la double distributivité")}<br>\n                        $${g[e].lettre} = ${s(g[e].facteurs[0].nb,g[e].facteurs[1].nb)}$<br>\n                        $${g[e].lettre} = (${g[e].facteurs[0].str})\\times (${g[e].facteurs[1].str})$<br>\n                        $${g[e].lettre} = ${g[e].a_coeff}^2 ${g[e].signes_dbl_dist[1]} ${g[e].a_coeff}\\times ${g[e].b} ${g[e].signes_dbl_dist[2]} ${g[e].b}\\times ${g[e].a_coeff} ${g[e].signes_dbl_dist[0]} ${g[e].b}^2$<br>\n                        $${g[e].lettre} = ${g[e].carre_de_a_coeff} ${g[e].signes_dbl_dist[1]} ${g[e].termes_rectangles[0]} ${g[e].signes_dbl_dist[2]} ${g[e].termes_rectangles[1]}   ${g[e].signes_dbl_dist[0]} ${g[e].carre_de_b}$<br>\n                        $${g[e].lettre} = ${g[e].carre_de_a_coeff} ${a(g[e].carre,`${g[e].signes_dbl_dist[1]} ${g[e].somme_terme_rect}`)} ${g[e].signes_dbl_dist[0]} ${g[e].carre_de_b}$<br>\n                        $${g[e].lettre} = ${g[e].resultat}$\n                    `,correction2:`\n                    ${(0,n.HzX)("Avec une identité")}<br>\n                    $${g[e].lettre} = ${s(g[e].facteurs[0].nb,g[e].facteurs[1].nb)}$<br>\n                    $${g[e].lettre} = ${s(`(${g[e].facteurs[0].str})`,`(${g[e].facteurs[1].str})`)} $<br>\n                    $${g[e].lettre} = ${g[e].a_coeff}^2 ${a(g[e].carre,`${g[e].signes_dbl_dist[1]} 2\\times ${g[e].a_coeff} \\times ${g[e].b}`)} ${g[e].signes_dbl_dist[0]}  ${g[e].b}^2$<br>\n                    $${g[e].lettre} = ${g[e].carre_de_a_coeff} ${a(g[e].carre,`${g[e].signes_dbl_dist[1]} 2\\times ${g[e].termes_rectangles[0]}`)} ${g[e].signes_dbl_dist[0]}  ${g[e].carre_de_b}$<br>\n                    $${g[e].lettre} = ${g[e].carre_de_a_coeff} ${a(g[e].carre,`${g[e].signes_dbl_dist[1]} ${g[e].somme_terme_rect}`)} ${g[e].signes_dbl_dist[0]} ${g[e].carre_de_b}$<br>\n                    $${g[e].lettre} = ${g[e].resultat}$            \n                `});switch(i[b]){case 0:e=`${p[0].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${p[0].correction1}<br>${p[0].correction2}`,c=""):r.Do.isHtml?c=`${p[0].correction1}<br><br>${p[0].correction2}`:(c="Détaillons deux méthodes : <br><br>",c+="\\begin{minipage}{8cm}",c+=p[0].correction1,c+="\\end{minipage}",c+="\\hfill \\vrule \\hfill",c+="\\begin{minipage}{8cm}",c+=p[0].correction2,c+="\\end{minipage}",c+="<br>"),(0,o.Iq)(this,b,g[0].resultatNumerique);break;case 1:e=`${p[1].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${p[1].correction1}<br>${p[1].correction2}`,c=""):r.Do.isHtml?c=`${p[1].correction1}<br><br>${p[1].correction2}`:(c="Détaillons deux méthodes : <br><br>",c+="\\begin{minipage}{8cm}",c+=p[1].correction1,c+="\\end{minipage}",c+="\\hfill \\vrule \\hfill",c+="\\begin{minipage}{8cm}",c+=p[1].correction2,c+="\\end{minipage}",c+="<br>"),(0,o.Iq)(this,b,g[1].resultatNumerique);break;case 2:e=`${p[2].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${p[2].correction1}<br>${p[2].correction2}`,c=""):r.Do.isHtml?c=`${p[2].correction1}<br><br>${p[2].correction2}`:(c="Détaillons deux méthodes : <br><br>",c+="\\begin{minipage}{8cm}",c+=p[2].correction1,c+="\\end{minipage}",c+="\\hfill \\vrule \\hfill",c+="\\begin{minipage}{8cm}",c+=p[2].correction2,c+="\\end{minipage}",c+="<br>"),(0,o.Iq)(this,b,g[2].resultatNumerique)}if(e+=(0,o.G5)(this,b),-1===this.listeQuestions.indexOf(e)){let t=!1;this.listeQuestions.forEach((i=>{-1!==e.split("$")[1].substr(2).indexOf(i.split("$")[1].substr(2))&&(t=!0)})),t||(this.listeQuestions.push(e),this.listeCorrections.push(c),b++)}u++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Carré d'une somme\n2 : Carré d'une différence\n3 : Produit de la somme et de la différence\n4 : Mélange"]}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=95412.92a83b89f9f2463ce721.js.map