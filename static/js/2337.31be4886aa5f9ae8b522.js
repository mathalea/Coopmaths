(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2337,2006],{32337:(e,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>u,default:()=>l});var n=t(2006),r=(t(89846),t(91030));const u="Constructibilité des triangles via les longueurs";function l(){let e;n.default.call(this),this.sup=1,this.exo==this.beta+"5G21-1"?(this.titre=u,this.consigne="Justifier si les longueurs données permettent de construire le triangle.",this.consigne+="<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure."):this.exo==this.beta+"5G31-1"?(this.titre="Constructibilité des triangles via les angles",this.consigne="Justifier si les angles donnés permettent de construire le triangle.",this.consigne+="<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure."):(this.titre="Constructibilité des triangles",this.consigne="Justifier si les longueurs ou les angles donnés permettent de construire le triangle.",this.consigne+="<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure."),this.nbCols=1,this.nbColsCorr=1,this.nbQuestionsModifiable=!1,this.listePackages="bclogo",this.nouvelleVersion=function(){this.exo==this.beta+"5G21-1"?1==this.sup?(e=(0,r.TVQ)([1,2,3]),this.nbQuestions=e.length):2==this.sup&&(e=[(0,r.q$q)([1,2,3]),4],this.nbQuestions=e.length):this.exo==this.beta+"5G31-1"?1==this.sup?(e=(0,r.TVQ)([5,6,7]),this.nbQuestions=e.length):2==this.sup&&(e=[(0,r.q$q)([5,6,7]),8],this.nbQuestions=e.length):(e=[1,2,3,4,5,6,7,8],this.nbQuestions=e.length);let s=e;this.listeQuestions=[],this.listeCorrections=[];for(let e,t,n,u,l,i,a,o,g=0,$=0;g<this.nbQuestions&&$<50;){let c=2,m=20,d=0,p=180,b=new r.phu,h=[];switch(s[g]){case 1:for(;!b.isTrueTriangleLongueurs();)n=(0,r.nSR)(c,m),u=(0,r.nSR)(c,m),l=(0,r.nSR)(c,m),b.l1=n,b.l2=u,b.l3=l;e=`${b.getNom()} tel que ${b.getLongueurs()[0]} $= ${b.l1}$ cm ; `,e+=`${b.getLongueurs()[1]} $= ${b.l2}$ cm et ${b.getLongueurs()[2]} $= ${b.l3}$ cm.`;for(let e=0;e<3;e++)h.push({longueur:b.getLongueurs()[e],cote:b.getCotes()[e],valeur:b.getLongueursValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[2].cote} qui mesure $${h[2].valeur}$ cm est le plus grand côté.`,t+=`<br> De plus ${h[0].longueur} + ${h[1].longueur} = $${h[0].valeur}$ cm + $${h[1].valeur}$ cm = $${(0,r.n0o)(h[0].valeur+h[1].valeur)}$ cm.`,t+=`<br> On constate que ${h[0].longueur} + ${h[1].longueur} > ${h[2].longueur}.`,t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom())}.`,t+=`<br><br>  Si on considère que le triangle nommé dans le sens des aiguilles d'une montre et celui nommé dans le sens inverse sont différents, ${(0,r.pRK)("plusieurs tels triangles existent")}.`,t+="<br> Ils sont obtenus les uns à partir des autres par symétire axiale par rapport à un des côtés.";break;case 2:for(;!b.isPlatTriangleLongueurs();)n=(0,r.nSR)(c,m),u=(0,r.nSR)(c,m),l=(0,r.n0o)(n+u),b.l1=n,b.l2=u,b.l3=l;e=`${b.getNom()} tel que ${b.getLongueurs()[0]} $ = ${b.l1}$ cm ; `,e+=`${b.getLongueurs()[1]} $= ${b.l2}$ cm et ${b.getLongueurs()[2]} $= ${b.l3}$ cm.`;for(let e=0;e<3;e++)h.push({longueur:b.getLongueurs()[e],cote:b.getCotes()[e],valeur:b.getLongueursValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[2].cote} qui mesure $${h[2].valeur}$ cm est le plus grand côté.`,t+=`<br> De plus ${h[0].longueur} + ${h[1].longueur} = $${h[0].valeur}$ cm + $${h[1].valeur}$ cm = $${h[2].valeur}$ cm aussi.`,t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom()+" c'est un triangle plat")}.`,t+=`<br><br>${(0,r.pRK)("Un seul triangle de ce type existe")}, il s'agit du segment ${h[2].cote} sur lequel on place le point `,h[0].longueur.split("")[2]==h[2].cote.split("")[1]||h[0].longueur.split("")[2]==h[2].cote.split("")[2]?t+=`${h[0].longueur.split("")[1]}`:t+=`${h[0].longueur.split("")[2]}`,t+=".";break;case 3:for(n=(0,r.nSR)(c,m),u=(0,r.nSR)(c,m),l=(0,r.nSR)(c,m),b.l1=n,b.l2=u,b.l3=l;b.isTrueTriangleLongueurs()||b.isPlatTriangleLongueurs();)n=(0,r.nSR)(c,m),u=(0,r.nSR)(c,m),l=(0,r.nSR)(c,m),b.l1=n,b.l2=u,b.l3=l;e=`${b.getNom()} tel que ${b.getLongueurs()[0]} $= ${b.l1}$ cm ; `,e+=`${b.getLongueurs()[1]} $= ${b.l2}$ cm et ${b.getLongueurs()[2]} $= ${b.l3}$ cm.`;for(let e=0;e<3;e++)h.push({longueur:b.getLongueurs()[e],cote:b.getCotes()[e],valeur:b.getLongueursValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[2].cote} qui mesure $${h[2].valeur}$ cm est le plus grand côté.`,t+=`<br> De plus ${h[0].longueur} + ${h[1].longueur} = $${h[0].valeur}$ cm + $${h[1].valeur}$ cm = $${(0,r.n0o)(h[0].valeur+h[1].valeur)}$ cm.`,t+=`<br> On constate que ${h[0].longueur} + ${h[1].longueur} < ${h[2].longueur}, les longueurs données ne permettent donc pas de satisfaire à l'inégalité triangulaire.`,t+=`<br> ${(0,r.pRK)("On ne peut donc pas construire le triangle "+b.getNom())}.`,t+=`<br><br>  ${(0,r.pRK)("Aucun triangle de ce type n'existe")}.`;break;case 4:for(;!b.isTrueTriangleLongueurs();)n=(0,r.nSR)(c,m),u=(0,r.nSR)(c,m),l=(0,r.nSR)(c,m),b.l1=n,b.l2=u,b.l3=l;e=`${b.getNom()} tel que ${b.getLongueurs()[0]} $= ${b.l1}$ cm ; `,e+=`${b.getLongueurs()[1]} $= ${b.l2}$ cm et dont le périmètre vaut $${b.getPerimetre()}$ cm.`;for(let e=0;e<3;e++)h.push({longueur:b.getLongueurs()[e],cote:b.getCotes()[e],valeur:b.getLongueursValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Puisque le périmètre vaut $${b.getPerimetre()}$ cm alors la troisième longueur vaut ${b.getLongueurs()[2]} = $${b.getPerimetre()}$ cm - $${b.l1}$ cm - $${b.l2}$ cm = $${b.l3}$ cm.`,t+=`<br> Donc dans le triangle ${b.getNom()}, ${h[2].cote} qui mesure $${h[2].valeur}$ cm est le plus grand côté.`,t+=`<br> De plus ${h[0].longueur} + ${h[1].longueur} = $${h[0].valeur}$ cm + $${h[1].valeur}$ cm = $${(0,r.n0o)(h[0].valeur+h[1].valeur)}$ cm.`,t+=`<br> On constate que ${h[0].longueur} + ${h[1].longueur} > ${h[2].longueur}`,t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom())}.`,t+=`<br><br>  Si on considère que le triangle nommé dans le sens des aiguilles d'une montre et celui nommé dans le sens inverse sont différents, ${(0,r.pRK)("plusieurs tels triangles existent")}.`,t+="<br> Ils sont obtenus les uns à partir des autres par symétire axiale par rapport à un des côtés.";break;case 5:for(;!b.isTrueTriangleAngles();)i=(0,r.nSR)(d,p,[0,180]),a=(0,r.nSR)(d,p,[0,180]),o=(0,r.n0o)(180-i-a),b.a1=i,b.a2=a,b.a3=o;e="",t="",e=`${b.getNom()} tel que ${b.getAngles()[0]} $= ${b.a1}\\degree$ ; `,e+=`${b.getAngles()[1]} $= ${b.a2}\\degree$ et ${b.getAngles()[2]} $= ${b.a3}\\degree$.`;for(let e=0;e<3;e++)h.push({angle:b.getAngles()[e],valeur:b.getAnglesValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[0].angle} + ${h[1].angle} + ${h[2].angle} = $${h[0].valeur}\\degree + ${h[1].valeur}\\degree + ${h[2].valeur}\\degree = ${(0,r.n0o)(h[0].valeur+h[1].valeur+h[2].valeur)}\\degree$.`,t+="<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.",t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom())}.`,t+=`<br><br>  ${(0,r.pRK)("Il existe une infinité de triangles avec ces mesures.")}`,t+="<br> On les obtient les uns à partir des autres par un agrandissement ou une réduction.";break;case 6:for(;!b.isPlatTriangleAngles();)i=(0,r.nSR)(d,p),a=(0,r.nSR)(d,p),o=(0,r.n0o)(180-i-a),b.a1=i,b.a2=a,b.a3=o;e="",t="",e=`${b.getNom()} tel que ${b.getAngles()[0]} $= ${b.a1}\\degree$ ; `,e+=`${b.getAngles()[1]} $= ${b.a2}\\degree$ et ${b.getAngles()[2]} $= ${b.a3}\\degree$.`;for(let e=0;e<3;e++)h.push({angle:b.getAngles()[e],valeur:b.getAnglesValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[0].angle} + ${h[1].angle} + ${h[2].angle} = $${h[0].valeur}\\degree + ${h[1].valeur}\\degree + ${h[2].valeur}\\degree = ${(0,r.n0o)(h[0].valeur+h[1].valeur+h[2].valeur)}\\degree$.`,t+="<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.",t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom())}.`,t+=`<br> Deux des trois angles du triangle valent $0\\degree$, ${(0,r.pRK)(b.getNom()+" est donc un triangle plat")}.`,t+=`<br><br>  ${(0,r.pRK)("Il existe une infinité de triangles avec ces mesures.")}`,t+="<br> On les obtient en traçant des segments et en plaçant le troisième sommet sur ce segment, les longueurs n'ayant aucune importance.",t+=`<br> Dans le cas présent, il s'agit d'un segment $[${h[2].angle.split("")[12]}${h[2].angle.split("")[14]}]$ sur lequel on place un point ${h[2].angle.split("")[13]}.`;break;case 7:for(i=(0,r.nSR)(d,p),a=(0,r.nSR)(d,p),o=(0,r.nSR)(d,p),b.a1=i,b.a2=a,b.a3=o;b.isTrueTriangleAngles();)i=(0,r.nSR)(d,p),a=(0,r.nSR)(d,p),o=(0,r.nSR)(d,p),b.a1=i,b.a2=a,b.a3=o;e=`${b.getNom()} tel que ${b.getAngles()[0]} $= ${b.a1}\\degree$ ; `,e+=`${b.getAngles()[1]} $= ${b.a2}\\degree$ et ${b.getAngles()[2]} $= ${b.a3}\\degree$.`;for(let e=0;e<3;e++)h.push({angle:b.getAngles()[e],valeur:b.getAnglesValeurs()[e]});h.sort((function(e,s){return e.valeur-s.valeur})),t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,t+=`<br>Dans le triangle ${b.getNom()}, ${h[0].angle} + ${h[1].angle} + ${h[2].angle} = $${h[0].valeur}\\degree + ${h[1].valeur}\\degree + ${h[2].valeur}\\degree = ${(0,r.n0o)(h[0].valeur+h[1].valeur+h[2].valeur)}\\degree$.`,t+="<br> Si le triangle était constructible, la somme des trois angles vaudrait $180\\degree$,",t+=" or ce n'est pas le cas.",t+=`<br> ${(0,r.pRK)("On ne peut donc pas construire le triangle "+b.getNom())}.`,t+=`<br><br>  ${(0,r.pRK)("Aucun triangle de ce type n'existe")}.`;break;case 8:let s=(0,r.nSR)(0,1),g=["triple","quadruple","quart"],$="";switch(e="",t="",t=`Supposons que l'on puisse construire un triangle ${b.getNom()} avec ces mesures.`,s){case 0:switch(i=(0,r.nSR)(d,p),b.a1=i,$=g[(0,r.nSR)(0,2)],e+=`${b.getNom()} tel que ${b.getAngles()[0]} $= ${(0,r.euh)(b.a1)}\\degree$ ; `,$){case"triple":a=(0,r.n0o)((180-i)/4),o=(0,r.n0o)(3*a);break;case"quadruple":a=(0,r.n0o)((180-i)/5),o=(0,r.n0o)(4*a);break;case"quart":a=(0,r.n0o)(4*(180-i)/5),o=(0,r.n0o)(a/4)}b.a2=a,b.a3=o,e+=`${b.getAngles()[1]} $= ${(0,r.euh)(b.a2)}\\degree$ et ${b.getAngles()[2]} est le ${$} de ${b.getAngles()[1]}.`;for(let e=0;e<3;e++)h.push({angle:b.getAngles()[e],valeur:b.getAnglesValeurs()[e]});t+=`<br>Dans le triangle ${b.getNom()}, ${h[2].angle} est le ${$} de ${h[1].angle} = $${(0,r.euh)(h[1].valeur)}\\degree$  d'où ${h[2].angle} = $${(0,r.euh)(h[2].valeur)}\\degree$.`;break;case 1:switch(a=(0,r.nSR)(d,p),b.a2=a,$=g[(0,r.nSR)(0,2)],e+=`${b.getNom()} tel que ${b.getAngles()[1]} $= ${(0,r.euh)(b.a2)}\\degree$ ; `,$){case"triple":i=(0,r.n0o)((180-a)/4),o=(0,r.n0o)(3*i);break;case"quadruple":i=(0,r.n0o)((180-a)/5),o=(0,r.n0o)(4*i);break;case"quart":i=(0,r.n0o)(4*(180-a)/5),o=(0,r.n0o)(i/4)}b.a1=i,b.a3=o,e+=`${b.getAngles()[0]} $= ${(0,r.euh)(b.a1)}\\degree$ et ${b.getAngles()[2]} est le ${$} de ${b.getAngles()[0]}.`;for(let e=0;e<3;e++)h.push({angle:b.getAngles()[e],valeur:b.getAnglesValeurs()[e]});t+=`<br>Dans le triangle ${b.getNom()}, ${h[2].angle} est le ${$} de ${h[0].angle} = $${(0,r.euh)(h[0].valeur)}\\degree$  d'où ${h[2].angle} = $${(0,r.euh)(h[2].valeur)}\\degree$.`}t+=`<br>Donc ${h[0].angle} + ${h[1].angle} + ${h[2].angle} = $${(0,r.euh)(h[0].valeur)}\\degree + ${(0,r.euh)(h[1].valeur)}\\degree + ${(0,r.euh)(h[2].valeur)}\\degree = ${(0,r.k$K)(h[0].valeur+h[1].valeur+h[2].valeur)}\\degree$.`,t+="<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.",t+=`<br> ${(0,r.pRK)("On peut donc construire le triangle "+b.getNom())}.`,t+=`<br><br>  ${(0,r.pRK)("Il existe une infinité de triangles avec ces mesures.")}`,t+="<br> On les obtient les uns à partir des autres par un agrandissement ou une réduction."}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),g++),$++}(0,r.K1R)(this)},this.exo==this.beta+"5G21-1"?this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : 3 longueurs\n2 : 2 longueurs et le périmètre"]:this.exo==this.beta+"5G31-1"&&(this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : 3 angles\n2 : 2 angles et le 3e en fonction du 1er ou du 2eme"])}},2006:(e,s,t)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>n})}}]);
//# sourceMappingURL=2337.31be4886aa5f9ae8b522.js.map