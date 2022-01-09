"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[62885,25523],{62885:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var r=e(25523),s=e(25482);function i(){let t;r.default.call(this),this.debug=!1,this.sup=1,this.sup2=1,this.debug,this.nbQuestions=1,"5N11-1"===this.exo?(this.titre="Tableaux et pourcentages - prix constant",this.consigne="Compléter le tableau suivant. Le prix est fixe."):"5N11-2"===this.exo?(this.titre="Tableaux et pourcentages - pourcentage constant",this.consigne="Compléter le tableau suivant. Le pourcentage est fixe."):(this.titre="Tableaux et pourcentages",this.consigne="Compléter le tableau suivant."),this.nbCols=1,this.nbColsCorr=1,this.nbQuestionsModifiable=!1,this.correctionDetailleeDisponible=!0,this.nouvelleVersion=function(){this.debug,1===this.sup2&&(t=[0]),2===this.sup2&&(t=[1]),3===this.sup2&&(t=[2]),4===this.sup2&&(t=[3]),this.sup3&&(t=[4]),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const n=(0,s.bqK)(t,this.nbQuestions);for(let t,e,r=0,i=0;r<this.nbQuestions&&i<50;){function b(t,n,e,r){let i="";switch(t){case"pourcentage":i=`-- L'énoncé indique le montant pour une remise de $${n.str}$ du prix initial or $${(0,s.euh)(e.nb/n.nb)} \\times ${n.str} = ${e.str}$.<br>\nDonc pour une remise de $${e.str}$ du prix initial, le montant de la remise sera $${(0,s.euh)(e.nb/n.nb)}$ fois celui de la remise de $${n.str}$ du prix initial,<br>\nd'où le calul pour le montant de la remise : $${(0,s.b1)(`${(0,s.i6h)(r*n.nb/100)} \\times ${(0,s.euh)(e.nb/n.nb)} = ${(0,s.i6h)(r*e.nb/100)}`)}$.<br>\nEt celui pour le nouveau prix : $${(0,s.b1)(`${(0,s.i6h)(r)}-${(0,s.i6h)(r*e.nb/100)} = ${(0,s.i6h)(r-r*e.nb/100)}`)}$.<br><br>\nMais on peut aussi calculer directement le prix réduit en faisant :<br>\n$${(0,s.b1)(`${(0,s.i6h)(r)} \\times (100\\% - ${e.str}) = ${(0,s.i6h)(r)} \\times ${100-e.nb}\\% = ${(0,s.i6h)(r)} \\times ${(0,s.euh)((0,s.n0o)(1-e.nb/100))} = ${(0,s.i6h)(r*(0,s.n0o)(1-e.nb/100))}`)}$\n`;break;case"remise":i=`-- L'énoncé indique $${(0,s.i6h)(r*e.nb/100)}$ € de remise pour un montant de $${(0,s.i6h)(r)}$ €<br>\nd'où le calcul pour le pourcentage de remise : $${(0,s.b1)(`${(0,s.i6h)(r*e.nb/100)} \\div ${(0,s.i6h)(r)} = ${(0,s.k$K)(e.nb/100)} = ${e.str}`)}$.<br>\nEt celui pour le nouveau prix : $${(0,s.b1)(`${(0,s.i6h)(r)}-${(0,s.i6h)(r*e.nb/100)} = ${(0,s.i6h)(r-r*e.nb/100)}`)}$.`;break;case"nouveau_prix":i=`-- L'énoncé indique un nouveau prix de $${(0,s.i6h)(r-r*e.nb/100)}$ € pour un montant de $${(0,s.i6h)(r)}$ €<br>\nd'où le calcul pour le nouveau prix : $${(0,s.b1)(`${(0,s.i6h)(r)} - ${(0,s.i6h)(r-r*e.nb/100)} = ${(0,s.i6h)(r*e.nb/100)}`)}$.<br>\nEt celui pour le pourcentage de remise : $${(0,s.b1)(`${(0,s.i6h)(r*e.nb/100)} \\div ${(0,s.i6h)(r)} = ${(0,s.k$K)(e.nb/100)} = ${e.str}`)}$.`;break;case"pourcentage_constant":i=`-- L'énoncé indique un prix de $${(0,s.i6h)(r)}$ € et une remise de $${e.str}$ du prix initial<br>\nd'où le calul pour le montant de la remise : $${(0,s.b1)(`${(0,s.i6h)(r)} \\times ${e.str} = ${(0,s.i6h)(r)} \\times ${(0,s.euh)(e.nb/100)} = ${(0,s.i6h)(r*e.nb/100)}`)}$.<br>\nEt celui pour le nouveau prix : $${(0,s.b1)(`${(0,s.i6h)(r)}-${(0,s.i6h)(r*e.nb/100)} = ${(0,s.i6h)(r-r*e.nb/100)}`)}$.<br><br>\nMais on peut aussi calculer directement le prix réduit en faisant :<br>\n$${(0,s.b1)(`${(0,s.i6h)(r)} \\times (100\\% - ${e.str}) = ${(0,s.i6h)(r)} \\times ${100-e.nb}\\% = ${(0,s.i6h)(r)} \\times ${(0,s.euh)((0,s.n0o)(1-e.nb/100))} = ${(0,s.i6h)(r*(0,s.n0o)(1-e.nb/100))}`)}$\n`}return i}let o,h,a,u,$,l,c,p;do{o=(0,s.nSR)(150,300)}while(o%5!=0);"5N11-1"===this.exo?c=[o,o,o,o,o]:"5N11-2"===this.exo&&(h=(0,s.nSR)(150,300),a=(0,s.nSR)(150,300,[h]),u=(0,s.nSR)(150,300,[h,a]),$=(0,s.nSR)(150,300,[h,a,u]),l=(0,s.nSR)(150,300,[h,a,u,$]),c=[h,a,u,$,l]),1===this.sup&&("5N11-1"===this.exo?p=(0,s.q$q)([[{str:"5\\%",nb:5},{str:"10\\%",nb:10},{str:"15\\%",nb:15},{str:"20\\%",nb:20},{str:"25\\%",nb:25},{str:"30\\%",nb:30}],[{str:"5\\%",nb:5},{str:"35\\%",nb:35},{str:"45\\%",nb:45},{str:"55\\%",nb:55},{str:"65\\%",nb:65},{str:"75\\%",nb:75}],[{str:"5\\%",nb:5},{str:"15\\%",nb:15},{str:"25\\%",nb:25},{str:"35\\%",nb:35},{str:"45\\%",nb:45},{str:"55\\%",nb:55}],[{str:"5\\%",nb:5},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"50\\%",nb:50},{str:"60\\%",nb:60},{str:"70\\%",nb:70}],[{str:"5\\%",nb:5},{str:"25\\%",nb:25},{str:"40\\%",nb:40},{str:"45\\%",nb:45},{str:"50\\%",nb:50},{str:"55\\%",nb:55}],[{str:"5\\%",nb:5},{str:"45\\%",nb:45},{str:"50\\%",nb:50},{str:"55\\%",nb:55},{str:"60\\%",nb:60},{str:"65\\%",nb:65}],[{str:"5\\%",nb:5},{str:"50\\%",nb:50},{str:"55\\%",nb:55},{str:"60\\%",nb:60},{str:"65\\%",nb:65},{str:"70\\%",nb:70}],[{str:"10\\%",nb:10},{str:"20\\%",nb:20},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"50\\%",nb:50},{str:"60\\%",nb:60}],[{str:"10\\%",nb:10},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"50\\%",nb:50},{str:"60\\%",nb:60},{str:"70\\%",nb:70}],[{str:"10\\%",nb:10},{str:"40\\%",nb:40},{str:"50\\%",nb:50},{str:"60\\%",nb:60},{str:"70\\%",nb:70},{str:"80\\%",nb:80}]]):"5N11-2"===this.exo&&(p=(0,s.q$q)([[{str:"5\\%",nb:5},{str:"5\\%",nb:5},{str:"5\\%",nb:5},{str:"5\\%",nb:5},{str:"5\\%",nb:5},{str:"5\\%",nb:5}],[{str:"10\\%",nb:10},{str:"10\\%",nb:10},{str:"10\\%",nb:10},{str:"10\\%",nb:10},{str:"10\\%",nb:10},{str:"10\\%",nb:10}],[{str:"15\\%",nb:15},{str:"15\\%",nb:15},{str:"15\\%",nb:15},{str:"15\\%",nb:15},{str:"15\\%",nb:15},{str:"15\\%",nb:15}],[{str:"20\\%",nb:20},{str:"20\\%",nb:20},{str:"20\\%",nb:20},{str:"20\\%",nb:20},{str:"20\\%",nb:20},{str:"20\\%",nb:20}],[{str:"25\\%",nb:25},{str:"25\\%",nb:25},{str:"25\\%",nb:25},{str:"25\\%",nb:25},{str:"25\\%",nb:25},{str:"25\\%",nb:25}],[{str:"30\\%",nb:30},{str:"30\\%",nb:30},{str:"30\\%",nb:30},{str:"30\\%",nb:30},{str:"30\\%",nb:30},{str:"30\\%",nb:30}],[{str:"35\\%",nb:35},{str:"35\\%",nb:35},{str:"35\\%",nb:35},{str:"35\\%",nb:35},{str:"35\\%",nb:35},{str:"35\\%",nb:35}],[{str:"40\\%",nb:40},{str:"40\\%",nb:40},{str:"40\\%",nb:40},{str:"40\\%",nb:40},{str:"40\\%",nb:40},{str:"40\\%",nb:40}],[{str:"45\\%",nb:45},{str:"45\\%",nb:45},{str:"45\\%",nb:45},{str:"45\\%",nb:45},{str:"45\\%",nb:45},{str:"45\\%",nb:45}],[{str:"50\\%",nb:50},{str:"50\\%",nb:50},{str:"50\\%",nb:50},{str:"50\\%",nb:50},{str:"50\\%",nb:50},{str:"50\\%",nb:50}],[{str:"55\\%",nb:55},{str:"55\\%",nb:55},{str:"55\\%",nb:55},{str:"55\\%",nb:55},{str:"55\\%",nb:55},{str:"55\\%",nb:55}],[{str:"60\\%",nb:60},{str:"60\\%",nb:60},{str:"60\\%",nb:60},{str:"60\\%",nb:60},{str:"60\\%",nb:60},{str:"60\\%",nb:60}],[{str:"65\\%",nb:65},{str:"65\\%",nb:65},{str:"65\\%",nb:65},{str:"65\\%",nb:65},{str:"65\\%",nb:65},{str:"65\\%",nb:65}],[{str:"70\\%",nb:70},{str:"70\\%",nb:70},{str:"70\\%",nb:70},{str:"70\\%",nb:70},{str:"70\\%",nb:70},{str:"70\\%",nb:70}],[{str:"75\\%",nb:75},{str:"75\\%",nb:75},{str:"75\\%",nb:75},{str:"75\\%",nb:75},{str:"75\\%",nb:75},{str:"75\\%",nb:75}],[{str:"80\\%",nb:80},{str:"80\\%",nb:80},{str:"80\\%",nb:80},{str:"80\\%",nb:80},{str:"80\\%",nb:80},{str:"80\\%",nb:80}]]))),2===this.sup&&("5N11-1"===this.exo?p=(0,s.q$q)([[{str:"10\\%",nb:10},{str:"5\\%",nb:5},{str:"15\\%",nb:15},{str:"25\\%",nb:25},{str:"35\\%",nb:35},{str:"45\\%",nb:45}],[{str:"50\\%",nb:50},{str:"30\\%",nb:30},{str:"10\\%",nb:10},{str:"20\\%",nb:20},{str:"40\\%",nb:40},{str:"60\\%",nb:60}],[{str:"20\\%",nb:20},{str:"10\\%",nb:10},{str:"50\\%",nb:50},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"60\\%",nb:60}],[{str:"40\\%",nb:40},{str:"10\\%",nb:10},{str:"5\\%",nb:5},{str:"20\\%",nb:20},{str:"50\\%",nb:50},{str:"30\\%",nb:30}],[{str:"80\\%",nb:80},{str:"10\\%",nb:10},{str:"50\\%",nb:50},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"20\\%",nb:20}],[{str:"10\\%",nb:10},{str:"15\\%",nb:15},{str:"25\\%",nb:25},{str:"35\\%",nb:35},{str:"45\\%",nb:45},{str:"55\\%",nb:55}],[{str:"50\\%",nb:50},{str:"35\\%",nb:35},{str:"10\\%",nb:10},{str:"25\\%",nb:25},{str:"40\\%",nb:40},{str:"65\\%",nb:65}],[{str:"20\\%",nb:20},{str:"5\\%",nb:5},{str:"50\\%",nb:50},{str:"35\\%",nb:35},{str:"40\\%",nb:40},{str:"55\\%",nb:55}],[{str:"40\\%",nb:40},{str:"15\\%",nb:15},{str:"5\\%",nb:5},{str:"20\\%",nb:20},{str:"30\\%",nb:30},{str:"25\\%",nb:25}],[{str:"80\\%",nb:80},{str:"20\\%",nb:20},{str:"55\\%",nb:55},{str:"30\\%",nb:30},{str:"40\\%",nb:40},{str:"20\\%",nb:20}]]):this.exo);const x=[{tableau:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,(0,s.i6h)(c[0]*p[0].nb/100),"",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),""]),tableau_corr:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]*p[1].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]-c[1]*p[1].nb/100)}`)])},{tableau:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,(0,s.i6h)(c[0]*p[0].nb/100),"","",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"",""]),tableau_corr:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]*p[2].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]-c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]-c[2]*p[2].nb/100)}`)])},{tableau:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2]),(0,s.i6h)(c[3])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),"","","",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"","",""]),tableau_corr:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2]),(0,s.i6h)(c[3])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[3]*p[3].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]-c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]-c[2]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[3]-c[3]*p[3].nb/100)}`)])},{tableau:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2]),(0,s.i6h)(c[3]),(0,s.i6h)(c[4])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,p[3].str,p[4].str,(0,s.i6h)(c[0]*p[0].nb/100),"","","","",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"","","",""]),tableau_corr:(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[1]),(0,s.i6h)(c[2]),(0,s.i6h)(c[3]),(0,s.i6h)(c[4])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],[p[0].str,p[1].str,p[2].str,p[3].str,p[4].str,(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[3]*p[3].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[4]*p[4].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[1]-c[1]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[2]-c[2]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[3]-c[3]*p[3].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[4]-c[4]*p[4].nb/100)}`)])},{tableau:[],tableau_corr:[]}];let m;if(this.sup3){const t=(0,s.q$q)([{tableauCase4:[p[0].str,p[1].str,"","",(0,s.i6h)(c[0]*p[0].nb/100),"",`${(0,s.i6h)(c[0]*p[2].nb/100)}`,"",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"","",`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`],tableauCase4Corr:[p[0].str,p[1].str,(0,s.b1)(p[2].str),(0,s.b1)(p[3].str),(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]*p[1].nb/100)}`),`${(0,s.i6h)(c[0]*p[2].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]*p[3].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`),`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`],corrections:`${b("pourcentage",p[0],p[1],c[0])}<br><br>${b("remise",p[0],p[2],c[0])}<br><br>${b("nouveau_prix",p[0],p[3],c[0])}`},{tableauCase4:[p[0].str,p[1].str,"","",(0,s.i6h)(c[0]*p[0].nb/100),"","",`${(0,s.i6h)(c[0]*p[3].nb/100)}`,(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"",`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`,""],tableauCase4Corr:[p[0].str,p[1].str,(0,s.b1)(p[2].str),(0,s.b1)(p[3].str),(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]*p[2].nb/100)}`),`${(0,s.i6h)(c[0]*p[3].nb/100)}`,(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`),`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`)],corrections:`${b("pourcentage",p[0],p[1],c[0])}<br><br>${b("nouveau_prix",p[0],p[2],c[0])}<br><br>${b("remise",p[0],p[3],c[0])}`},{tableauCase4:[p[0].str,"",p[2].str,"",(0,s.i6h)(c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]*p[1].nb/100)}`,"","",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"","",`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`],tableauCase4Corr:[p[0].str,(0,s.b1)(p[1].str),p[2].str,(0,s.b1)(p[3].str),(0,s.i6h)(c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]*p[1].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]*p[3].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`),`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`],corrections:`${b("remise",p[0],p[1],c[0])}<br><br>${b("pourcentage",p[0],p[2],c[0])}<br><br>${b("nouveau_prix",p[0],p[3],c[0])}`},{tableauCase4:[p[0].str,"","",p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]*p[1].nb/100)}`,"","",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),"",`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`,""],tableauCase4Corr:[p[0].str,(0,s.b1)(p[1].str),(0,s.b1)(p[2].str),p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]*p[1].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]*p[3].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`),`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`)],corrections:`${b("remise",p[0],p[1],c[0])}<br><br>${b("nouveau_prix",p[0],p[2],c[0])}<br><br>${b("pourcentage",p[0],p[3],c[0])}`},{tableauCase4:[p[0].str,"",p[2].str,"",(0,s.i6h)(c[0]*p[0].nb/100),"","",`${(0,s.i6h)(c[0]*p[3].nb/100)}`,(0,s.i6h)(c[0]-c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`,"",""],tableauCase4Corr:[p[0].str,(0,s.b1)(p[1].str),p[2].str,(0,s.b1)(p[3].str),(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]*p[1].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]*p[2].nb/100)}`),`${(0,s.i6h)(c[0]*p[3].nb/100)}`,(0,s.i6h)(c[0]-c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`)],corrections:`${b("nouveau_prix",p[0],p[1],c[0])}<br><br>${b("pourcentage",p[0],p[2],c[0])}<br><br>${b("remise",p[0],p[3],c[0])}`},{tableauCase4:[p[0].str,"","",p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),"",`${(0,s.i6h)(c[0]*p[2].nb/100)}`,"",(0,s.i6h)(c[0]-c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`,"",""],tableauCase4Corr:[p[0].str,(0,s.b1)(p[1].str),(0,s.b1)(p[2].str),p[3].str,(0,s.i6h)(c[0]*p[0].nb/100),(0,s.b1)(`${(0,s.i6h)(c[0]*p[1].nb/100)}`),`${(0,s.i6h)(c[0]*p[2].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]*p[3].nb/100)}`),(0,s.i6h)(c[0]-c[0]*p[0].nb/100),`${(0,s.i6h)(c[0]-c[0]*p[1].nb/100)}`,(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[2].nb/100)}`),(0,s.b1)(`${(0,s.i6h)(c[0]-c[0]*p[3].nb/100)}`)],corrections:`${b("nouveau_prix",p[0],p[1],c[0])}<br><br>${b("remise",p[0],p[2],c[0])}<br><br>${b("pourcentage",p[0],p[3],c[0])}`}]),n=(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[0]),(0,s.i6h)(c[0]),(0,s.i6h)(c[0])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],t.tableauCase4),e=(0,s.DDO)(["\\text{Prix en €}",(0,s.i6h)(c[0]),(0,s.i6h)(c[0]),(0,s.i6h)(c[0]),(0,s.i6h)(c[0])],["\\text{Remise en pourcentage}","\\text{Montant de la remise en €}","\\text{Nouveau prix en €}"],t.tableauCase4Corr);this.correctionDetaillee?(m=t.corrections,m+="<br><br>D'où le tableau complété :<br><br>"):m="",x[4].tableau=n,x[4].tableau_corr=e}else{let t;"5N11-1"===this.exo&&(t="pourcentage"),"5N11-2"===this.exo&&(t="pourcentage_constant"),1===this.sup2&&this.correctionDetaillee?(m=`${b(t,p[0],p[1],c[1])}`,m+="<br><br>D'où le tableau complété :<br><br>"):2===this.sup2&&this.correctionDetaillee?(m=`${b(t,p[0],p[1],c[1])}<br><br>${b(t,p[0],p[2],c[2])}`,m+="<br><br>D'où le tableau complété :<br><br>"):3===this.sup2&&this.correctionDetaillee?(m=`${b(t,p[0],p[1],c[1])}<br><br>${b(t,p[0],p[2],c[2])}<br><br>${b(t,p[0],p[3],c[3])}`,m+="<br><br>D'où le tableau complété :<br><br>"):4===this.sup2&&this.correctionDetaillee?(m=`${b(t,p[0],p[1],c[1])}<br><br>${b(t,p[0],p[2],c[2])}<br><br>${b(t,p[0],p[3],c[3])}<br><br>${b(t,p[0],p[4],c[4])}`,m+="<br><br>D'où le tableau complété :<br><br>"):m=""}const d=[];for(let t=0;t<x.length;t++)d.push({enonce:`\n${x[t].tableau}\n`,question:"",correction:`\n${m}\n${x[t].tableau_corr}\n`});switch(n[r]){case 0:t=`${d[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[0].correction}`,t+="             ",e=""):e=`${d[0].correction}`;break;case 1:t=`${d[1].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[1].correction}`,t+="             ",e=""):e=`${d[1].correction}`;break;case 2:t=`${d[2].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[2].correction}`,t+="             ",e=""):e=`${d[2].correction}`;break;case 3:t=`${d[3].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[3].correction}`,t+="             ",e=""):e=`${d[3].correction}`;break;case 4:t=`${d[4].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${d[4].correction}`,t+="             ",e=""):e=`${d[4].correction}`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(e),r++),i++}(0,s.K1R)(this)},"5N11-1"===this.exo&&(this.besoinFormulaireNumerique=["Le coefficient entre les pourcentages",2,"1 : est entier.\n2 : est décimal."],this.besoinFormulaire3CaseACocher=["Modulation de ce qui est demandé"],this.besoinFormulaire2Numerique=["Nombre de colonnes à remplir (fixé à 3 lorsque la case ci-dessous est cochée)",4,"1 : Une colonne\n2 : Deux colonnes\n3 : Trois colonnes\n4 : Quatre colonnes"]),"5N11-2"===this.exo&&(this.besoinFormulaire2Numerique=["Nombre de colonnes à remplir",4,"1 : Une colonne\n2 : Deux colonnes\n3 : Trois colonnes\n4 : Quatre colonnes"])}},25523:(t,n,e)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...n){0===t&&(this.listeArguments=[]);let e="";for(const r of n)void 0!==r&&(e+=r.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(n),e.d(n,{default:()=>r})}}]);
//# sourceMappingURL=62885.2e3c2e6401536c62d112.js.map