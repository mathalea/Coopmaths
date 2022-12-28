"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[78246,98384],{78246:(e,s,r)=>{r.r(s),r.d(s,{titre:()=>n,default:()=>i});var t=r(98384);const n="Problèmes d'évenements récurrents";function i(){t.default.call(this),this.titre=n,this.sup=2}},98384:(e,s,r)=>{r.r(s),r.d(s,{interactifReady:()=>a,interactifType:()=>l,amcReady:()=>$,amcType:()=>m,titre:()=>c,default:()=>d});var t=r(25523),n=r(25482),i=r(11945),u=r(66647),o=r(22380);const a=!0,l="mathLive",$=!0,m="AMCNum",c="Problèmes d'évenements récurrents";function d(){t.default.call(this),this.nbQuestions=1,this.sup=1,this.besoinFormulaireNumerique=["Difficulté",3,"1 : 1 facteur commun, 1 facteur spécifique\n2 : 2 facteurs communs, 1 facteur spécifique\n3 : 2 facteurs communs, 2 facteurs spécifiques"],this.correctionDetailleeDisponible=!0,this.interactif=!1,this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const s=(0,n.EU4)(12),r=(0,n.SRM)(s,5*this.nbQuestions),t=(0,n.SRM)(["guirlande","voiture","fusée","restau-ciné","engrenages"],this.nbQuestions);for(let a,l,$,m,c,d,b,p,P,f,h,x=0,H=0;x<this.nbQuestions&&H<50;){switch($=[],this.sup){case 1:default:$=[(0,n.nSR)(0,2)],m=[(0,n.nSR)(0,4,$)],c=[(0,n.nSR)(0,4,$.concat(m))],d=r[$[0]+5*x],b=r[m[0]+5*x],p=r[c[0]+5*x];break;case 2:$=[(0,n.nSR)(0,2),(0,n.nSR)(0,2)],$=$.sort(),m=[(0,n.nSR)(3,4,$)],c=[(0,n.nSR)(3,4,$.concat(m))],d=r[$[0]+5*x]*r[$[1]+5*x],b=r[m[0]+5*x],p=r[c[0]+5*x];break;case 3:$=[(0,n.nSR)(0,2),(0,n.nSR)(0,2)],$=$.sort(((e,s)=>e-s)),m=[(0,n.nSR)(0,2),(0,n.nSR)(3,4,$)],c=[(0,n.nSR)(0,2,m),(0,n.nSR)(3,4,$.concat(m))],d=r[$[0]+5*x]*r[$[1]+5*x],b=r[m[0]+5*x]*r[m[1]+5*x],p=r[c[0]+5*x]*r[c[1]+5*x]}let s,Z,g,v,q,j,R,k;const S=(0,n.nSR)(1,3),y=(0,n.Q5n)();switch(t[x]){case"guirlande":a=`Une guirlande électrique est constituée de lumières rouges et vertes.<br>\n          les lumières rouges s’allument toutes les ${(0,n.x9Z)(d*b)} secondes et les vertes toutes les ${(0,n.x9Z)(d*p)} secondes.<br>\n          À un instant donné, on voit les lumières rouges et vertes allumées en même temps.<br>\n          Au bout de combien de temps ce phénomène se reproduira-t-il une nouvelle fois ?`,s="secondes",Z="les lumières rouges",g="les lumières vertes",v="Les lumières rouges seront allumées",q="les lumières vertes",j="Les lumières rouges et vertes seront allumées en même temps",R="le temps nécessaire pour qu'elle se rallument la première fois simultanément",k=" cycles";break;case"voiture":a=`Pour l'entretien de sa voiture, ${y.prenom} veut se tenir à un calendrier très précis :<br>\n          ${y.pronom} nettoie l'intérieur de sa voiture tous les ${(0,n.x9Z)(d*b)} jours et l'extérieur tous les ${(0,n.x9Z)(d*p)} jours.<br>\n          Aujourd'hui, ${y.pronom} a fait les deux.<br>\n          Au bout de combien de temps fera-t-${y.pronom} les deux dans la même journée ?`,s="jours",Z="le nettoyage intérieur",g="le nettoyage extérieur",v="L'intérieur sera nettoyé",q="l'extérieur",j="Les nettoyages intérieur et extérieur auront lieu le même jour",R="le nombre de jours avant un nettoyage intérieur et extérieur",k=" nettoyages";break;case"fusée":a=`Pour l'entretien de sa fusée, ${y.prenom} doit se tenir à un calendrier très précis :<br>\n          ${y.pronom} remplace la coiffe tous les ${(0,n.x9Z)(d*b)} jours et les boosters tous les ${(0,n.x9Z)(d*p)} jours.<br>\n          Aujourd'hui, ${y.pronom} a fait les deux.<br>\n          Au bout de combien de temps fera-t-${y.pronom} les deux dans la même journée ?`,s="jours",Z="le remplacement de la coiffe",g="le remplacement des boosters",v="La coiffe sera remplacée",q="les boosters",j="Le remplacement de la coiffe et des boosters auront lieu le même jour",R="le nombre de jours avant le remplacement de la coiffe et des boosters",k=" remplacements";break;case"restau-ciné":a=`Pour sa résolution de cette année, ${y.prenom} a décidé de ne pas abuser des bonnes choses :<br>\n          ${y.Pronom} s'accorde le droit d'aller au restaurant tous les ${(0,n.x9Z)(d*b)} jours et d'aller au cinéma tous les ${(0,n.x9Z)(d*p)} jours.<br>\n          Aujourd'hui, ${y.pronom} s'est fait un « restau - ciné ».<br>\n          Au bout de combien de temps s'en fera-t-${y.pronom} un autre ?`,s="jours",Z="aller au restaurant",g="aller au cinéma",v=`${y.Pronom} va au restaurant`,q="au cinéma",j=`${y.pronom} se fera à nouveau un « restau - ciné »`,R="le nombre de jours avant le prochain « restau - ciné »",k=" sorties";break;case"engrenages":if(o.Do.isHtml){let s="";const r=`divIntro${`${e}_${Date.now()}`}`;s+=(0,n.KUN)("Attention, les roues ci-dessous ne comportent pas le nombre de dents de l'énoncé!","nombres","Coup de pouce"),s+=`<div id="${r}" style="width: 100%; height: 50px; display : table "></div>`,(0,u.vr)(r,200,200),this.introduction=s}if(a=`Une première roue possède ${(0,n.x9Z)(d*b)} dents et une seconde en possède ${(0,n.x9Z)(d*p)}.<br>\n          Elles tournent jusqu'à revenir (pour la première fois) en position initiale<br>`,this.interactif)switch(S){case 1:a+="De combien de dents chaque roue aura tourné ?";break;case 2:a+="Combien de tours aura fait la première roue ?";break;case 3:a+="Combien de tours aura fait la deuxième roue ?"}else a+="De combien de dents chaque roue aura tourné ?<br>\n            Combien de tours aura effectué chaque roue ?";s="dents",Z="la première roue",g="la deuxième roue",v="La première fera un tour",q="la seconde",j="Elles reviendront en position initiale",R="le nombre de dents avant de revenir pour la première fois en position initiale",k=" tours"}switch(this.sup){case 1:default:P=(0,n.PH8)((0,n.x9Z)(d),"blue"),f=(0,n.PH8)((0,n.x9Z)(b),"red"),h=(0,n.PH8)((0,n.x9Z)(p),"green");break;case 2:P=`${(0,n.PH8)((0,n.x9Z)(r[$[0]+5*x]),"blue")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(r[$[1]+5*x]),"blue")}`,f=(0,n.PH8)((0,n.x9Z)(b),"red"),h=(0,n.PH8)((0,n.x9Z)(p),"green");break;case 3:P=`${(0,n.PH8)((0,n.x9Z)(r[$[0]+5*x]),"blue")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(r[$[1]+5*x]),"blue")}`,f=`${(0,n.PH8)((0,n.x9Z)(r[m[0]+5*x]),"red")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(r[m[1]+5*x]),"red")}`,h=`${(0,n.PH8)((0,n.x9Z)(r[c[0]]),"green")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(r[c[1]+5*x]),"green")}`}if(l="",this.correctionDetaillee&&(l+=`${v} à chaque multiple de ${(0,n.PH8)((0,n.x9Z)(d*b),"red")} ${s}, ${q} à chaque multiple de ${(0,n.PH8)((0,n.x9Z)(d*p),"green")} ${s}.<br>\n        ${j} à chaque multiple commun de ${(0,n.PH8)((0,n.x9Z)(d*b),"red")} et de ${(0,n.PH8)((0,n.x9Z)(d*p),"green")}.<br>\n        Pour trouver ${R}, on cherche le plus petit multiple qu'ils ont en commun.<br>\n        Un moyen d'y arriver est de décomposer les nombres de ${s} en produits de facteurs premiers et d'identifier les différences entre les décompositions :<br>`),3===this.sup?(m[0]>=$[1]?l+=`${(0,n.PH8)((0,n.x9Z)(d*b),"red")} = ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[m[0]+5*x],"red")} $\\times$ ${(0,n.PH8)(r[m[1]+5*x],"red")} <br>`:m[0]>=$[0]&&m[0]<$[1]?l+=`${(0,n.PH8)((0,n.x9Z)(d*b),"red")} = ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[m[0]+5*x],"red")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[m[1]+5*x],"red")} <br>`:m[0]<$[0]&&(l+=`${(0,n.PH8)((0,n.x9Z)(d*b),"red")} = ${(0,n.PH8)(r[m[0]+5*x],"red")} $\\times$ ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[m[1]+5*x],"red")} <br>`),c[0]>=$[1]?l+=`${(0,n.PH8)((0,n.x9Z)(d*p),"green")} = ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[c[0]],"green")} $\\times$ ${(0,n.PH8)(r[c[1]+5*x],"green")} <br>`:c[0]>=$[0]&&c[0]<$[1]?l+=`${(0,n.PH8)((0,n.x9Z)(d*p),"green")} = ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[c[0]],"green")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[c[1]+5*x],"green")} <br>`:c[0]<$[0]&&(l+=`${(0,n.PH8)((0,n.x9Z)(d*p),"green")} = ${(0,n.PH8)(r[c[0]],"green")} $\\times$ ${(0,n.PH8)(r[$[0]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[$[1]+5*x],"blue")} $\\times$ ${(0,n.PH8)(r[c[1]+5*x],"green")} <br>`)):l+=`${(0,n.PH8)((0,n.x9Z)(d*b),"red")} = ${P} $\\times$ ${f} <br>\n        ${(0,n.PH8)((0,n.x9Z)(d*p),"green")} = ${P} $\\times$ ${h}<br>`,this.correctionDetaillee&&(l+="On multiplie les facteurs communs aux deux décompositions avec les facteurs spécifiques à chaque décomposition :<br>"),l+=`${P} $\\times$ ${f} $\\times$ ${h} = ${(0,n.x9Z)(d*b*p)}<br>\n      Ce phénomène se produira à nouveau au bout de ${(0,n.x9Z)(d*b*p)} ${s}.<br>\n      (Après ${(0,n.PH8)((0,n.x9Z)(p)+k,"green")} pour ${(0,n.PH8)(Z,"red")} et après ${(0,n.PH8)((0,n.x9Z)(b)+k,"red")} pour ${(0,n.PH8)(g,"green")})<br>`,this.correctionDetaillee&&(l+=`${(0,n.x9Z)(d*b*p)} est bien un multiple de ${(0,n.PH8)((0,n.x9Z)(d*b),"red")} car :\n         ${P} $\\times$ ${f} $\\times$ ${h} =\n         (${P} $\\times$ ${f}) $\\times$ ${h} =\n         ${(0,n.PH8)((0,n.x9Z)(d*b),"red")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(p),"green")}<br>\n        ${(0,n.x9Z)(d*b*p)} est bien un multiple de ${(0,n.PH8)((0,n.x9Z)(d*p),"green")} car :\n         ${P} $\\times$ ${f} $\\times$ ${h} =\n         ${P} $\\times$ ${h} $\\times$ ${f} =\n         (${P} $\\times$ ${h}) $\\times$ ${f} =\n         ${(0,n.PH8)((0,n.x9Z)(d*p),"green")} $\\times$ ${(0,n.PH8)((0,n.x9Z)(b),"red")}<br>`),"engrenages"===t[x])switch(S){case 1:(0,i.Iq)(this,x,d*b*p);break;case 2:(0,i.Iq)(this,x,p);break;case 3:(0,i.Iq)(this,x,b)}else(0,i.Iq)(this,x,d*b*p);this.interactif&&!o.Do.isAmc&&("engrenages"===t[x]&&S>1?a+=(0,i.G5)(this,x,"inline largeur 25",{texteApres:" tours"}):a+=(0,i.G5)(this,x,"inline largeur 25",{texteApres:" "+s})),this.questionJamaisPosee(x,d,b*p)&&(this.listeQuestions.push(a),this.listeCorrections.push(l),x++),H++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=78246.f36be6ed3853ff96a2ab.js.map