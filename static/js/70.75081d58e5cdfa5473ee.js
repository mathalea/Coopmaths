(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[70,5216],{70:(t,n,e)=>{"use strict";e.r(n),e.d(n,{titre:()=>r,default:()=>a});var i=e(75216),s=e(89459),o=e(55339);const r="Résoudre un problème en utilisant une somme algébrique de relatifs.";function a(){let t;i.default.call(this),this.debug=!1,this.sup=1,this.debug,this.nbQuestions=1,this.titre=r,this.consigne="",this.nbCols=1,this.nbColsCorr=1,s.Do.isHtml?this.spacing=3:this.spacing=2,s.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){t=(this.debug,[0]),this.listeQuestions=[],this.listeCorrections=[];let n=(0,o.bqK)(t,this.nbQuestions);for(let t,i,s=0,r=0;s<this.nbQuestions&&r<50;){let a,l;do{a=(0,o.nSR)(10,30),l=(0,o.nSR)(10,30)}while(a%5!=0||l%5!=0||l<=a);let u,$,c=(0,o.nSR)(10,15);do{u=(0,o.nSR)(2,10),$=(0,o.nSR)(2,10)}while(u+$>=c);if($<u&&0==(0,o.nSR)(0,1)){let t=$;$=u,u=t}let b,_=[[(0,o.sTI)(),"Elle","elle"],[(0,o.nHh)(),"Il","il"]],g=(0,o.q$q)(_);function e(t,n,e){let i="";switch(n){case"gain":i=`(+${(0,o.ucD)(e)}$€$)`;for(let n=1;n<t;n++)i+=`+(+${(0,o.ucD)(e)}$€$)`;break;case"perte":i=`(-${(0,o.ucD)(e)}$€$)`;for(let n=1;n<t;n++)i+=`+(-${(0,o.ucD)(e)}$€$)`}return i}b=(0,o.n0o)((c-u-$)*(0,o.n0o)(l/10))+(0,o.n0o)(u*(0,o.n0o)(a/10))-(0,o.n0o)($*(0,o.n0o)(a/10))>=0?["Globalement, le montant des gains","est supérieur au montant des pertes",`${(0,o.pRK)("Le bilan est donc positif.")}`,"a gagné",(0,o.ucD)((0,o.n0o)((c-u-$)*(0,o.n0o)(l/10))+(0,o.n0o)(u*(0,o.n0o)(a/10))-(0,o.n0o)($*(0,o.n0o)(a/10)))]:["Globalement, le montant des gains","est inférieur au montant des pertes",`${(0,o.pRK)("Le bilan est donc négatif.")}`,"a perdu",(0,o.ucD)(-1*((0,o.n0o)((c-u-$)*(0,o.n0o)(l/10))+(0,o.n0o)(u*(0,o.n0o)(a/10))-(0,o.n0o)($*(0,o.n0o)(a/10))))];let h,p,m=[{nb_tot_lancers:c,nb_gains_unitaires:u,nb_pertes:$,nb_gains:c-u-$,perte:(0,o.n0o)(a/10),gain_unitaire:(0,o.n0o)(a/10),gain_multiple:(0,o.n0o)(l/10),enonce_1:"lancer une balle sur des quilles.",enonce_2:"- Si la balle touche plusieurs quilles, le joueur gagne ",enonce_3:"- Si la balle ne touche qu'une quille, le joueur gagne ",enonce_4:"- Si la balle ne touche aucune quille, le joueur perd ",enonce_5:"a lancé",enonce_6:"la balle",correction_1:"touché plusieurs quilles",correction_2:"touché qu'une seule quille",prenom:g[0],pronomMaj:g[1],pronomMin:g[2],bilan:b}],d=[];for(let t=0;t<m.length;t++)h=0,p=0,d.push({enonce:`\n\t\t\t\t\tUn jeu consiste à ${m[t].enonce_1}\n\t\t\t\t\t<br>${m[0].enonce_2} $${(0,o.ucD)(m[0].gain_multiple)}$€.\t\t\t\t\n\t\t\t\t\t<br>${m[0].enonce_3} $${(0,o.ucD)(m[0].gain_unitaire)}$€.\n\t\t\t\t\t<br>${m[0].enonce_4} $${(0,o.ucD)(m[0].perte)}$€.\n\t\t\t\t\t<br>${m[t].prenom} ${m[t].enonce_5} $${m[t].nb_tot_lancers}$ fois ${m[t].enonce_6}.\n\t\t\t\t\t${m[t].pronomMaj} a perdu de l'argent $${m[t].nb_pertes}$ fois et a gagné $${m[t].nb_gains_unitaires}$ fois $${(0,o.ucD)(m[t].gain_unitaire)}$€.\n\t\t\t\t\t<br> ${(0,o.bk1)(h++)} A-t-${m[t].pronomMin} globalement gagné ou perdu de l'argent ?\n\t\t\t\t\t<br> ${(0,o.bk1)(h++)} Combien a-t-${m[t].pronomMin} globalement gagné ou perdu ?\n\t\t\t\t\t`,question:"",correction:`\n\t\t\t\t\t${m[t].prenom} ${m[t].enonce_5} $${m[t].nb_tot_lancers}$ fois ${m[t].enonce_6},\n\t\t\t\t\tsur les $${m[t].nb_tot_lancers}$ lancers, on sait combien de fois ${m[t].pronomMin} a perdu de l'argent et combien de fois ${m[t].pronomMin} a gagné $${(0,o.ucD)(m[t].gain_unitaire)}$€, les autres lancers correspondent donc au nombre de fois où ${m[t].pronomMin} a ${m[t].correction_1} et qu'${m[t].pronomMin} a gagné $${(0,o.ucD)(m[t].gain_multiple)}$€ \n\t\t\t\t\t<br> $${m[t].nb_tot_lancers}-${m[t].nb_pertes}-${m[t].nb_gains_unitaires} = ${m[t].nb_tot_lancers-m[t].nb_pertes-m[t].nb_gains_unitaires}$,\n\t\t\t\t\t${m[t].pronomMin} a donc ${m[t].correction_1} $${m[t].nb_gains}$ fois.\n\n\t\t\t\t\t<br>${(0,o.HzX)(`Gains lorsqu'${m[t].pronomMin} a ${m[t].correction_1} :`)}\n\t\t\t\t\t<br>$${e(m[t].nb_gains,"gain",m[t].gain_multiple)} = ${m[t].nb_gains}\\times (+${(0,o.ucD)(m[t].gain_multiple)}$€$) = +${(0,o.ucD)(m[t].nb_gains*m[t].gain_multiple)}$€\n\n\t\t\t\t\t<br>${(0,o.HzX)(`Gains lorsqu'${m[t].pronomMin} n'a ${m[t].correction_2} :`)}\n\t\t\t\t\t<br>$${e(m[t].nb_gains_unitaires,"gain",m[t].gain_unitaire)} = ${m[t].nb_gains_unitaires}\\times (+${(0,o.ucD)(m[t].gain_unitaire)}$€$) = +${(0,o.ucD)(m[t].nb_gains_unitaires*m[t].gain_unitaire)}$€\n\n\t\t\t\t\t<br>${(0,o.HzX)("Pertes :")}\n\t\t\t\t\t<br>$${e(m[t].nb_pertes,"perte",m[t].perte)} = ${m[t].nb_pertes}\\times (-${(0,o.ucD)(m[t].perte)}$€$) = -${(0,o.ucD)(m[t].nb_pertes*m[t].perte)}$€\n\n\t\t\t\t\t<br>${(0,o.bk1)(p++)} ${m[t].bilan[0]}, $(+${(0,o.ucD)(m[t].nb_gains*m[t].gain_multiple)}$€$)$ et $(+${(0,o.ucD)(m[t].nb_gains_unitaires*m[t].gain_unitaire)}$€$)$, ${m[t].bilan[1]}, $(-${(0,o.ucD)(m[t].nb_pertes*m[t].perte)}$€$)$.\n\t\t\t\t\t<br> ${m[t].bilan[2]}   \n\n\t\t\t\t\t<br>${(0,o.bk1)(p++)} \n\t\t\t\t\t$(+${(0,o.ucD)(m[t].nb_gains*m[t].gain_multiple)}$€$)+(+${(0,o.ucD)(m[t].nb_gains_unitaires*m[t].gain_unitaire)}$€$)+(-${(0,o.ucD)(m[t].nb_pertes*m[t].perte)}$€$) = (${(0,o.ucD)(m[t].nb_gains*m[t].gain_multiple+m[t].nb_gains_unitaires*m[t].gain_unitaire-m[t].nb_pertes*m[t].perte)}$€$)$\n\t\t\t\t\t<br>${(0,o.pRK)(`Globalement ${m[t].prenom} ${m[t].bilan[3]} $${m[t].bilan[4]}$€`)} \n\n\t\t\t\t\t`});switch(n[s]){case 0:t=`${d[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[0].correction}`,t+="             ",i=""):i=`${d[0].correction}`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(i),s++),r++}(0,o.K1R)(this)}}},75216:(t,n,e)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}e.r(n),e.d(n,{default:()=>i})}}]);
//# sourceMappingURL=70.75081d58e5cdfa5473ee.js.map