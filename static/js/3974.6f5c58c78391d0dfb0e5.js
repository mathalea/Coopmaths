(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3974,6969],{53974:($,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>s,default:()=>r});var t=i(66969),o=i(55339);const s="Réduire un produit et une somme à partir des mêmes éléments algébriques pour distinguer la différence";function r(){let $;t.default.call(this),this.debug=!1,this.debug?this.nbQuestions=4:this.nbQuestions=2,this.consigne="",this.nbCols=1,this.nbColsCorr=1,this.titre=s,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],$=this.debug?[0,1,2,3]:[(0,o.q$q)([0,2]),(0,o.q$q)([1,3])];let e=(0,o.bqK)($,this.nbQuestions);for(let $,s,r=0,c=0;r<this.nbQuestions&&c<50;){function i($){return 1==$}function t($){return 1==$?"":`${$}`}let n=["x","y","z","t"],m=[],u=(0,o.nSR)(1,6),d=(0,o.nSR)(1,6),l=n[(0,o.nSR)(0,n.length-1)];switch(m.push({enonce:`Simplifier le plus possible le produit puis la somme de $${t(u)}${l}$ et de $${t(d)}${l}$`,questtion:"",correction_produit:`Le produit de $${t(u)}${l}$ et de $${t(d)}${l}$ vaut : $${t(u)}${l}\\times ${t(d)}${l} = ${u}\\times ${l}\\times ${d}\\times ${l} = ${u}\\times ${d}\\times ${l}\\times ${l}=$ `,correction_somme:`La somme de $${t(u)}${l}$ et de $${t(d)}${l}$ vaut : $${t(u)}${l}+${t(d)}${l} = ${u}\\times ${l}+${d}\\times ${l} = (${u}+${d})\\times ${l}=$ `}),i(u*d)?m[0].correction_produit+=`${(0,o.Udc)(`$${u*d}${l}^2=${l}^2$`)}`:m[0].correction_produit+=`${(0,o.Udc)(` $${u*d}${l}^2$`)}`,i(u*d)?m[0].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}=${l}$`)}`:m[0].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}$`)}`,i(u)&&i(d)&&(m[0].correction_produit=`$${l}\\times ${l} =$ ${(0,o.Udc)(` $${l}^2$`)} `),m.push({enonce:`Simplifier le plus possible l'expression $${t(u)}${l}\\times ${t(d)}${l}$ puis l'expression $${t(u)}${l}+${t(d)}${l}$`,questtion:"",correction_produit:`$${t(u)}${l}\\times ${t(d)}${l} = ${u}\\times ${l}\\times ${d}\\times ${l} = ${u}\\times ${d}\\times ${l}\\times ${l}=$ `,correction_somme:`$${t(u)}${l}+${t(d)}${l} = ${u}\\times ${l}+${d}\\times ${l} = (${u}+${d})\\times ${l}=$ `}),i(u*d)?m[1].correction_produit+=`${(0,o.Udc)(`$${u*d}${l}^2=${l}^2$`)}`:m[1].correction_produit+=`${(0,o.Udc)(` $${u*d}${l}^2$`)}`,i(u*d)?m[1].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}=${l}$`)}`:m[1].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}$`)}`,i(u)&&i(d)&&(m[1].correction_produit=`$${l}\\times ${l} =$ ${(0,o.Udc)(` $${l}^2$`)} `),m.push({enonce:`Simplifier le plus possible la somme puis le produit de $${t(u)}${l}$ et de $${t(d)}${l}$`,questtion:"",correction_produit:`Le produit de $${t(u)}${l}$ et de $${t(d)}${l}$ vaut : $${t(u)}${l}\\times ${t(d)}${l} = ${u}\\times ${l}\\times ${d}\\times ${l} = ${u}\\times ${d}\\times ${l}\\times ${l}=$ `,correction_somme:`La somme de $${t(u)}${l}$ et de $${t(d)}${l}$ vaut : $${t(u)}${l}+${t(d)}${l} = ${u}\\times ${l}+${d}\\times ${l} = (${u}+${d})\\times ${l}=$ `}),i(u*d)?m[2].correction_produit+=`${(0,o.Udc)(`$${u*d}${l}^2=${l}^2$`)}`:m[2].correction_produit+=`${(0,o.Udc)(` $${u*d}${l}^2$`)}`,i(u*d)?m[2].correction_somme+=`${(0,o.Udc)(` $${l}$`)}`:m[2].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}$`)}`,i(u)&&i(d)&&(m[2].correction_produit=`$${l}\\times ${l} =$ ${(0,o.Udc)(` $${l}^2$`)} `),m.push({enonce:`Simplifier le plus possible l'expression $${t(u)}${l}+${t(d)}${l}$ puis l'expression $${t(u)}${l}\\times ${t(d)}${l}$`,questtion:"",correction_produit:`$${t(u)}${l}\\times ${t(d)}${l} = ${u}\\times ${l}\\times ${d}\\times ${l} = ${u}\\times ${d}\\times ${l}\\times ${l}=$ `,correction_somme:`$${t(u)}${l}+${t(d)}${l} = ${u}\\times ${l}+${d}\\times ${l} = (${u}+${d})\\times ${l}=$ `}),i(u*d)?m[3].correction_produit+=`${(0,o.Udc)(`$${l}^2$`)}`:m[3].correction_produit+=`${(0,o.Udc)(` $${u*d}${l}^2$`)}`,i(u*d)?m[3].correction_somme+=`${(0,o.Udc)(` $${l}$`)}`:m[3].correction_somme+=`${(0,o.Udc)(` $${u+d}${l}$`)}`,i(u)&&i(d)&&(m[3].correction_produit=`$${l}\\times ${l} =$ ${(0,o.Udc)(` $${l}^2$`)} `),e[r]){case 0:$=`${m[0].enonce}.`,this.debug?($+="<br><br>=====CORRECTION======<br>",$+=m[0].correction_produit,$+="<br>",$+=m[0].correction_somme,s=""):(s=m[0].correction_produit,s+="<br>",s+=m[0].correction_somme);break;case 1:$=`${m[1].enonce}.`,this.debug?($+="<br><br>=====CORRECTION======<br>",$+=m[1].correction_produit,$+="<br>",$+=m[1].correction_somme,s=""):(s=m[1].correction_produit,s+="<br>",s+=m[1].correction_somme);break;case 2:$=`${m[2].enonce}.`,this.debug?($+="<br><br>=====CORRECTION======<br>",$+=m[2].correction_somme,$+="<br>",$+=m[2].correction_produit,s=""):(s=m[2].correction_somme,s+="<br>",s+=m[2].correction_produit);break;case 3:$=`${m[3].enonce}.`,this.debug?($+="<br><br>=====CORRECTION======<br>",$+=m[3].correction_somme,$+="<br>",$+=m[3].correction_produit,s=""):(s=m[3].correction_somme,s+="<br>",s+=m[3].correction_produit)}-1==this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(s),r++),c++}(0,o.K1R)(this)}}},66969:($,e,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>t})}}]);
//# sourceMappingURL=3974.6f5c58c78391d0dfb0e5.js.map