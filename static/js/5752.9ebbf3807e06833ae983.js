(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5752,6969],{55752:(t,i,n)=>{"use strict";n.r(i),n.d(i,{titre:()=>s,default:()=>e});var r=n(66969),o=n(55339);const s="Ranger une liste de nombres entiers dans l’ordre croissant ou décroissant";function e(){let t;r.default.call(this),this.beta=!1,this.sup=1,this.beta,this.nbQuestions=2,this.titre=s,this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacing=3:this.spacing=2,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){t=(this.beta,[0,1]),this.listeQuestions=[],this.listeCorrections=[];let i=(0,o.bqK)(t,this.nbQuestions);for(let t,r,s=0,e=0;s<this.nbQuestions&&e<50;){let S=(0,o.nSR)(1,9),h=(0,o.nSR)(1,9,[S]),g=(0,o.nSR)(1,9,[S,h]),u=(0,o.nSR)(1,9,[S,h,g]),a=(0,o.nSR)(1,9,[S,h,g,u]),l=[{ordre:"croissant",symbole:`$${(0,o.b1)("<")}$`,n1:Number(S.toString()+h.toString()+g.toString()+u.toString()+a.toString()),n2:Number(S.toString()+g.toString()+h.toString()+u.toString()+a.toString()),n3:Number(S.toString()+h.toString()+a.toString()+u.toString()+g.toString()),n4:Number(S.toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()),n5:Number("1".toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()),n6:Number(S.toString()+h.toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString())},{ordre:"décroissant",symbole:`$${(0,o.b1)(">")}$`,n1:Number(S.toString()+h.toString()+g.toString()+u.toString()+a.toString()),n2:Number(S.toString()+g.toString()+h.toString()+u.toString()+a.toString()),n3:Number(S.toString()+h.toString()+a.toString()+u.toString()+g.toString()),n4:Number(S.toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()),n5:Number("1".toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()),n6:Number(S.toString()+h.toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString()+(0,o.nSR)(0,9).toString())}];function n(t,i){switch(i.sort(((t,i)=>t-i)),t){case"croissant":return i;case"décroissant":return i.reverse()}}let b=[],c=[],$=[];for(let t=0;t<l.length;t++)c=(0,o.TVQ)([l[t].n1,l[t].n2,l[t].n3,l[t].n4,l[t].n5,l[t].n6]),$=[],c.forEach((t=>{$.push(t)})),n(l[t].ordre,$),b.push({enonce:`Classer les nombres suivants dans l'ordre ${l[t].ordre} :<br>\n        $${(0,o.euh)(c[0])}$   ;   $${(0,o.euh)(c[1])}$   ;   $${(0,o.euh)(c[2])}$   ;   $${(0,o.euh)(c[3])}$   ;   $${(0,o.euh)(c[4])}$   ;   $${(0,o.euh)(c[5])}$          \n        `,question:"",correction:`Les nombres rangés dans l'ordre ${(0,o.MZ9)(l[t].ordre)} :<br>\n        $${(0,o.euh)($[0])}$   ${l[t].symbole}   $${(0,o.euh)($[1])}$   ${l[t].symbole}   $${(0,o.euh)($[2])}$   ${l[t].symbole}   $${(0,o.euh)($[3])}$   ${l[t].symbole}   $${(0,o.euh)($[4])}$   ${l[t].symbole}   $${(0,o.euh)($[5])}$\n        `});switch(i[s]){case 0:t=`${b[0].enonce}`,this.beta?(t+="<br>",t+=`<br> =====CORRECTION======<br>${b[0].correction}`,t+="             ",r=""):r=`${b[0].correction}`;break;case 1:t=`${b[1].enonce}`,this.beta?(t+="<br>",t+=`<br> =====CORRECTION======<br>${b[1].correction}`,r=""):r=`${b[1].correction}`}-1==this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(r),s++),e++}(0,o.K1R)(this)}}},66969:(t,i,n)=>{"use strict";function r(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}n.r(i),n.d(i,{default:()=>r})}}]);
//# sourceMappingURL=5752.9ebbf3807e06833ae983.js.map