"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[46147,25523],{46147:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>a,amcReady:()=>l,amcType:()=>h,interactifReady:()=>$,interactifType:()=>c,dateDePublication:()=>d,default:()=>m});var t=s(25523),o=s(22380),n=s(25482),r=s(11945),u=s(56018);const a="Trouver le vocabulaire associé aux termes de l'égalité issue de la division euclidienne",l=!0,h="AMCOpen",$=!0,c="mathLive",d="25/10/2021";function m(){t.default.call(this),this.titre=a,this.spacing=1,this.nbQuestions=5,this.sup=1,this.sup2=1,this.sup3=1,this.sup4=3,this.nouvelleVersion=function(){this.consigne="En utilisant le vocabulaire associé à la division euclidienne, détermine, ",this.consigne+=1===this.nbQuestions?"pour l'égalité proposée, ":"pour chaque égalité proposée, ",this.consigne+="le mot adapté au nombre désigné.",this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.w6H)(3);if(this.sup)if("number"==typeof this.sup)(0,n.Xy8)(e,(0,n.QmD)(-1,3,this.sup-1,-1));else{const i=this.sup.split("-");for(let s=0;s<i.length;s++)e.length>2&&(0,n.XzT)(e,(0,n.QmD)(-1,3,parseInt(i[s])-1,-1))}const i=["dividende","diviseur","quotient","reste"],s=2===this.sup2?(0,n.eUo)(e,this.nbQuestions):(0,n.SRM)(e,this.nbQuestions);let t=[];const a=[];for(let l,h,$,c,d,m,b=0,p=0;b<this.nbQuestions&&p<50;){switch(a[0]=0,a[1]=(0,n.nSR)(5,99),this.sup4){case 1:a[2]=(0,n.nSR)(4,a[1]-1),a[3]=(0,n.nSR)(a[2],a[1]-1);break;case 2:a[2]=(0,n.nSR)(5,99,[a[1]]),a[3]=(0,n.nSR)(4,(0,u.VV$)(a[2],a[1])-1);break;default:a[2]=(0,n.nSR)(5,99,[a[1]]),a[3]=(0,n.nSR)(4,(0,u.Fp7)(a[2],a[1])-1,[(0,u.VV$)(a[2],a[1])])}a[0]=a[2]*a[1]+a[3];const e=[];e[0]=`$${(0,n.euh)(a[0])}$ est le dividende`,e[1]="",e[2]="",e[3]=`$${a[3]}$ est le reste`;const f=[];let v;switch(f[0]=`$${(0,n.euh)(a[0])} = ${a[1]} \\times ${a[2]} + ${a[3]}$`,f[1]=`$${(0,n.euh)(a[0])} = ${a[3]} + ${a[1]} \\times ${a[2]}$`,f[2]=`$${a[1]} \\times ${a[2]} + ${a[3]} = ${(0,n.euh)(a[0])}$`,f[3]=`$${a[3]} + ${a[1]} \\times ${a[2]} = ${(0,n.euh)(a[0])}$`,this.sup3){case 1:v=f[0];break;case 2:v=f[(0,n.q$q)((0,n.BAU)(1,3))];break;default:v=f[(0,n.q$q)((0,n.w6H)(3))]}if(l="Dans "+v+`, quel nom porte $${(0,n.euh)(a[s[b]])}$ lorsque l'égalité est associée à une division euclidienne ?<br>`,a[3]<a[1])if(a[3]<a[2]){h=`$${a[3]}$ est inférieur à $${a[1]}$ et à $${a[2]}$ donc l'égalité `+v+" peut être associée à deux divisions euclidiennes différentes :<br>",e[1]=`$${a[1]}$ est le diviseur`,e[2]=`$${a[2]}$ est le quotient`,h+=` 1. la division euclidienne de $ ${(0,n.euh)(a[0])} $ par $ ${a[1]} $. Alors, `;for(let i=0;i<3;i++)h+=i===s[b]?(0,n.PH8)(e[i]):e[i],h+=i<2?", ":" et ";h+=3===s[b]?(0,n.PH8)(e[3]):e[3],h+=".<br>",e[1]=`$${a[1]}$ est le quotient`,e[2]=`$${a[2]}$ est le diviseur`,e[s[b]]=(0,n.PH8)(e[s[b]]),h+=` 2. la division euclidienne de $ ${(0,n.euh)(a[0])} $ par $ ${a[2]} $. Alors, `;for(let i=0;i<3;i++)h+=i===s[b]?(0,n.PH8)(e[i]):e[i],h+=i<2?", ":" et ";h+=3===s[b]?(0,n.PH8)(e[3]):e[3],h+=".<br>",t=0===(0,u.wQq)(s[b],3)?[i[s[b]]]:["diviseur","quotient"]}else{h=`$${a[3]}$ est inférieur à $${a[1]}$ mais pas à $${a[2]}$ donc l'égalité `+v+" est associée à",e[1]=`$${a[1]}$ est le diviseur`,e[2]=`$${a[2]}$ est le quotient`,h+=` la division euclidienne de $ ${(0,n.euh)(a[0])} $ par $ ${a[1]} $. Alors, `;for(let i=0;i<3;i++)h+=i===s[b]?(0,n.PH8)(e[i]):e[i],h+=i<2?", ":" et ";h+=3===s[b]?(0,n.PH8)(e[3]):e[3],h+=".<br>",t=[i[s[b]]]}else{h=`$${a[3]}$ est inférieur à $${a[2]}$ mais pas à $${a[1]}$ donc l'égalité `+v+" est associée à",e[1]=`$${a[1]}$ est le diviseur`,e[2]=`$${a[2]}$ est le quotient`,e[s[b]]=(0,n.PH8)(e[s[b]]),h+=` la division euclidienne de $ ${(0,n.euh)(a[0])} $ par $ ${a[2]} $. Alors, `;for(let i=0;i<3;i++)h+=i===s[b]?(0,n.PH8)(e[i]):e[i],h+=i<2?", ":" et ";h+=3===s[b]?(0,n.PH8)(e[3]):e[3],h+=".<br>",t=[i[s[b]]]}this.questionJamaisPosee(this,b,$,c,d,m)&&(this.interactif&&(l+="<br>"+(0,r.G5)(this,b,"largeur 20 inline")),(0,r.Iq)(this,b,t,{formatInteractif:"ignorerCasse"}),o.Do.isAmc&&(this.autoCorrection[b].propositions=[{texte:this.listeCorrections[b],statut:"1"}]),this.listeQuestions.push(l),this.listeCorrections.push(h),b++),p++}(0,n.K1R)(this)},this.besoinFormulaireTexte=["Choix des mots à enlever","(Nombres séparés par des tirets)\nAu maximum, seuls les deux premiers entiers non nuls différents seront retenus.\n0 : Pour enlever aucun mot\n1 : Pour enlever 'dividende' du choix des mots\n2 : Pour enlever 'diviseur' du choix des mots\n3 : Pour enlever 'quotient' du choix des mots\n4 : Pour enlever 'reste' du choix des mots"],this.besoinFormulaire2Numerique=["Choix sur les mots à trouver",2,"1 : Les mots à trouver sont répartis au hasard, mais de façon cyclique.\n2 : Les mots à trouver sont tous présents et répartis au hasard mais les mots ne sont pas répartis forcément équitablement."],this.besoinFormulaire3Numerique=["Choix sur l'égalité",2,"1 : Égalité classique (a=bq+r ou a=qb+r)\n2 : Égalité moins classique (par exemple, a=r+bq ou qb+r=a)\n3 : Mélange"],this.besoinFormulaire4Numerique=["Choix sur le nombre de divisions euclidiennes associées à chaque égalité",2,"1 : Une seule division euclidienne associée\n2 : Deux divisions euclidiennes associées\n3 : Mélange"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=46147.01ed42a7e67ec878a0f0.js.map