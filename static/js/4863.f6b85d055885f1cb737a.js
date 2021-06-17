(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4863,5216],{94863:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>o,default:()=>a});var t=i(75216),n=i(89459),r=i(55339);const o="Reconnaître une situation de proportionnalité";function a(){t.default.call(this),this.titre=o,this.consigne="Répondre aux questions posées en justifiant",n.Do.isHtml?this.spacing=2:this.spacing=1.4,n.Do.isHtml?this.spacingCorr=1.5:this.spacingCorr=1,this.nbQuestions=5,this.nbColsCorr=1,this.nbCols=1,this.nbColsModifiable=!1,this.nbColsCorrModifiable=!1,this.sup=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,s=(0,r.SRM)([0,1,2,3,4],this.nbQuestions);e=this.sup?[1,2,3,4,5]:[1,2,3,4,5,6];let i=(0,r.SRM)(e,this.nbQuestions),t=["dans un magasin de bricolage","dans une animalerie","au supermarché local","à l'épicerie","dans la boutique du musée"],n=[[]],o=[[]],a=[[]],l=[],u=["Moscou","Berlin","Paris","Bruxelles","Rome","Belgrade"],$=["double","triple","quadruple","est multiplié par 5","est multiplié par 6"];n[0]=["articles","outils","accessoires","pièces d'outillage","pinceaux","ampoules","tournevis","spatules","raccords de tuyaux"],n[1]=["poissons rouges","canetons","perruches","phasmes","colliers anti-puces","souris","lapereaux","paquets de graines"],n[2]=["sets de tables","verres","assiettes","os à macher","dosettes de café","packs de lait","paquets de pâtes"],n[3]=["mangues","ananas","fruits de la passion","melons","paquets de madeleines de Commercy","bergamottes","bredeles","pots de cancoillotte"],n[4]=["cartes","livres","gravures","puzzles","maquettes","roches","jeux de société"],o[0]=[5,4,1.25,3,.5,1.5,2,6,4.5],o[1]=[1.5,7,20,2.5,25,2,15,8],o[2]=[1.25,1.5,2,.5,5,4.5,3],o[3]=[2,2.5,1.25,1.5,4,7,12,3],o[4]=[.5,5,7,13.5,10,15,20];for(let p,d,h,c,b,m,g,f,v,q,R,S,C,x,k=0,y=0;k<this.nbQuestions&&y<50;){switch(i[k]){case 1:v=s[k],f=[(0,r.sTI)(),(0,r.nHh)()],q=(0,r.nSR)(0,n[v].length-1),R=n[v][q],c=o[v][q]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),d=(0,r.nSR)(2,5),g=(0,r.n0o)(d*c,2),m=d*(0,r.nSR)(2,5),h=(0,r.n0o)(m*c,2),C=`${f[0]} achète ${t[v]} des ${R}. `,C+=`Elle  repart avec ${d} ${R} pour $${(0,r.i6h)(g)}$€. ${f[1]} achète quant à lui, au même endroit ${m} ${R} pour $${(0,r.i6h)(h)}$€.<br>`,C+=`Le prix des ${R} est-il proportionnel à la quantité achetée  ?<br>`,x=`${f[0]} dépense $${(0,r.b1)((0,r.i6h)(g),"blue")}$€.<br>`,x=`${f[1]} a acheté  $${(0,r.b1)((0,r.euh)(m/d))}$ fois la quantité des ${R} achetée par ${f[0]} pour $${(0,r.b1)((0,r.i6h)(g),"blue")}$€.<br>Il a payé $${(0,r.i6h)(h)}$€ $=${(0,r.b1)((0,r.k$K)(m/d))}\\times${(0,r.b1)((0,r.i6h)(g),"blue")}$€.<br>`,x+=`A l'aide de ces données, on constate que le prix des ${R} et leur quantité sont tous les deux multipliés par le même nombre, donc ces deux grandeurs sont proportionnelles.<br>`;break;case 2:v=s[k],f=[(0,r.sTI)(),(0,r.nHh)()],q=(0,r.nSR)(0,n[v].length-1),R=n[v][q],c=o[v][q]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),d=(0,r.nSR)(2,5),g=(0,r.n0o)(d*c,2),c-=.1,m=d*(0,r.nSR)(2,5),h=(0,r.n0o)(m*c,2),C=`${f[0]} achète ${t[v]} des ${R}. `,C+=`Elle a obtenu ${d} ${R} pour $${(0,r.i6h)(g)}$€. ${f[1]} achète quant à lui, au même endroit ${m} ${R} pour $${(0,r.i6h)(h)}$€.<br>`,C+=`Le prix des ${R} est-il proportionnel à la quantité achetée  ?<br>`,x=`${f[0]} dépense $${(0,r.b1)((0,r.i6h)(g),"blue")}$€.<br>`,x=`${f[1]} a acheté  $${(0,r.b1)((0,r.k$K)(m/d))}$ fois la quantité des ${R} achetée par ${f[0]} pour $${(0,r.b1)((0,r.i6h)(g),"blue")}$€.<br>Il a payé $${(0,r.i6h)(h)}$€.<br>Mais $${(0,r.b1)((0,r.k$K)(m/d))}\\times${(0,r.b1)((0,r.i6h)(g),"blue")}$€ $=${(0,r.i6h)((0,r.n0o)(m*g/d))}$€.<br>`,x+=`À l'aide de ces données, on constate que le prix unitaire des ${R} n'est pas le même pour ${f[0]} qui en a acheté $${d}$ que pour ${f[1]} qui en a acheté ${m}, donc ces deux grandeurs ne sont pas proportionnelles.<br>`;break;case 3:f=[(0,r.sTI)(),(0,r.nHh)()],p=(0,r.nSR)(5,20),d=100*(0,r.nSR)(5,20,p),p*=100,b=(0,r.vbX)((0,r.n0o)(p/60*(1+.2*(0,r.nSR)(0,2))),0),m=(0,r.vbX)((0,r.n0o)(d/60*(1+.2*(0,r.nSR)(0,2))),0),v=(0,r.n0o)(p/b),q=(0,r.n0o)(d/m),C=`${f[0]} habite à $${(0,r.euh)(p)}$ m du collège. Elle met ${b} minutes pour s'y rendre depuis chez elle.<br>`,C+=`${f[1]}, lui, habite à $${(0,r.euh)(d)}$ m du collège. Il met ${m} minutes pour s'y rendre depuis chez lui.<br>`,C+="Le temps mis pour venir au collège est-il proportionnel à la distance du foyer au collège ?<br>",x=`${f[0]} parcourt chaque minute environ $${(0,r.k$K)((0,r.vbX)(v,1))}$ m.<br>`,x+=`${f[1]} parcourt chaque minute environ $${(0,r.k$K)((0,r.vbX)(q,1))}$ m.<br>`,x+=v==q?"Pour ces deux élèves le temps mis et la distance parcourue sont proportionnelles (si l'on compare leur vitesse moyenne)":"Pour ces deux élèves le temps mis et la distance parcourue ne sont pas proportionnelles (si l'on compare leur vitesse moyenne).<br>";break;case 4:f=[(0,r.sTI)(),(0,r.nHh)()],p=(0,r.nSR)(5,20),d=p+(0,r.nSR)(25,35),C=`${f[0]} vient d'avoir ${p} ans cette année. Son père ${f[1]} vient de fêter  son ${d}ème anniversaire.<br>`,C+=`L'âge de son père est-il proportionnel à l'âge de ${f[0]} ?<br>`,x=`Aujourd'hui la différence d'âge entre ${f[0]} et ${f[1]} est de ${d-p} ans.<br>`,x+=`Dans ${p} années, ${f[0]} aura ${2*p} ans, c'est à dire le double d'aujourd'hui.<br>`,x+=`Son père ${f[1]} aura ${p+d} ans cette année-là.<br>Quand l'âge de ${f[0]} double, l'âge de ${f[1]} ne double pas, donc l'âge de ${f[0]} et l'âge de son père ne sont pas propotionnels.<br>`;break;case 5:v=(0,r.nSR)(0,5),q=(0,r.nSR)(0,4),C=`Une épidémie se répand dans la ville de ${u[v]}.<br>`,C+=`Le nombre de malades ${$[q]} tous les ${q+2} jours.<br>`,C+="Le nombre de malades est-il proportionnel au nombre de jours passés depuis le début de l'épidémie ?<br>",x=`Admettons qu'il y ait 10 malades le premier jour. Le ${3+q}ème jour il y aura $10 \\times ${q+2} = ${10*(q+2)}$ malades.<br>`,x+=`Entre le premier jour et le ${3+q}ème jour, le nombre de malades est multiplié par ${q+2} mais le nombre de jours est multiplié par ${3+q}.<br>`,x+="Donc le nombre de malades n'est pas proportionnel au nombre de jours passés.<br>";break;case 6:f=[(0,r.sTI)(),(0,r.nHh)()],v=(0,r.nSR)(0,5),R=n[4][v],q=(0,r.nSR)(0,4),c=o[4][v]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),b=(0,r.nSR)(2,6),m=(0,r.nSR)(0,3),a[0]=[b,b*c],a[1]=[b+1,(b+1)*c],a[2]=[2*b+1,(2*b+1)*c],a[3]=[3*b+3,(3*b+3)*c],S=(0,r.q$q)([!0,!1]),S||(a[m][1]-=.1),C=`${f[1]} relève les prix des ${R} sur un catalogue par correspondance en fonction de la quantité saisie dans le panier<br>`,C+="Il note les prix dans le tableau suivant :<br> <br>",C+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=a.length;e++)C+="|c";C+=`|}\\hline  \\text{${R}}`;for(let e=0;e<a.length;e++)C+=`&${a[e][0]}`;C+="\\\\\\hline \\text{Prix (en €})";for(let e=0;e<a.length;e++)C+=`&${(0,r.i6h)((0,r.vbX)(a[e][1],2))}`;C+="\\\\\\hline\\end{array}$<br> <br>",C+=`Le prix des ${R} est-il proportionnel à la quantité achetée ?<br>`,x=`Il faut calculer le prix unitaire des ${R} dans chaque cas de figure :<br><br>`,l=S?(0,r.w6H)(3):(0,r.w6H)(3,[m]),x+="$";for(let e=0;e<l.length;e++)x+=`\\dfrac{${(0,r.i6h)((0,r.vbX)(a[l[e]][1],2))}}{${a[l[e]][0]}}=`;x+=`${(0,r.i6h)(c)}$<br><br>`,S?x+=`Le prix des ${R} est bien proportionnel à leur nombre.<br>`:(x+=`Mais $\\dfrac{${(0,r.i6h)((0,r.vbX)(a[m][1],2))}}{${a[m][0]}}=${(0,r.i6h)((0,r.vbX)((0,r.n0o)(a[m][1]/a[m][0]),2))}$€/${R.substring(0,R.length-1)}<br>`,x+=`Le prix des ${R} n'est pas proportionnel à leur nombre.<br>`)}-1===this.listeQuestions.indexOf(C)&&(this.listeQuestions.push(C),this.listeCorrections.push(x),k++),y++}(0,r.K1R)(this)},this.besoinFormulaireCaseACocher=["Sans tableau",!1]}},75216:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=4863.f6b85d055885f1cb737a.js.map