"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5911,25523],{5911:(e,s,t)=>{t.r(s),t.d(s,{titre:()=>l,interactifReady:()=>u,interactifType:()=>$,amcReady:()=>h,amcType:()=>p,default:()=>c});var i=t(25523),n=t(22380),r=t(25482),o=t(11945),a=t(3923);const l="Reconnaître une situation de proportionnalité",u=!0,$="qcm",h=!0,p="qcmMono";function c(){i.default.call(this),n.Do.isHtml?this.spacing=2:this.spacing=1.4,n.Do.isHtml?this.spacingCorr=1.5:this.spacingCorr=1,this.nbQuestions=5,this.nbColsCorr=1,this.nbCols=1,this.nbColsModifiable=!1,this.nbColsCorrModifiable=!1,this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.nbQuestions>1?this.consigne="Répondre aux questions posées en justifiant.":this.consigne="Répondre à la question posée en justifiant.";const s=(0,r.SRM)([0,1,2,3,4],this.nbQuestions);let t=[];if(this.sup&&"NaN"!==this.sup)if("number"==typeof this.sup)t[0]=this.sup;else{t=this.sup.split("-");for(let e=0;e<t.length;e++)t[e]=(0,r.QmD)(1,5,parseInt(t[e]),1)}else t=[1,2,3,4,5];const i=(0,r.SRM)(t,this.nbQuestions),l=(0,r.rVO)(i,"1")+(0,r.rVO)(i,"5"),u=(0,r.SRM)([!0,!1],l),$=["dans un magasin de bricolage","dans une animalerie","au supermarché local","à l'épicerie","dans la boutique du musée"],h=[[]],p=[[]],c=[[]];let d=[];const b=["Moscou","Berlin","Paris","Bruxelles","Rome","Belgrade"],m=["double","triple","quadruple","est multiplié par 5","est multiplié par 6"];h[0]=["articles","outils","accessoires","pièces d'outillage","pinceaux","ampoules","tournevis","spatules","raccords de tuyaux"],h[1]=["poissons rouges","canetons","perruches","phasmes","colliers anti-puces","souris","lapereaux","paquets de graines"],h[2]=["sets de tables","verres","assiettes","os à macher","dosettes de café","packs de lait","paquets de pâtes"],h[3]=["mangues","ananas","fruits de la passion","melons","paquets de madeleines de Commercy","bergamottes","bredeles","pots de cancoillotte"],h[4]=["cartes","livres","gravures","puzzles","maquettes","roches","jeux de société"],p[0]=[5,4,1.25,3,.5,1.5,2,6,4.5],p[1]=[1.5,7,20,2.5,25,2,15,8],p[2]=[1.25,1.5,2,.5,5,4.5,3],p[3]=[2,2.5,1.25,1.5,4,7,12,3],p[4]=[.5,5,7,13.5,10,15,20];for(let g,f,x,C,q,R,v,S,y,j,k,M,D,Q,A=0,F=0,T=0;A<this.nbQuestions&&T<50;){switch(parseInt(i[A])){case 1:u[F]?(y=s[A],S=[(0,r.sTI)(),(0,r.nHh)()],j=(0,r.nSR)(0,h[y].length-1),k=h[y][j],C=p[y][j]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),f=(0,r.nSR)(2,5),v=(0,r.n0o)(f*C,2),R=f*(0,r.nSR)(2,5),x=(0,r.n0o)(R*C,2),D=`${S[0]} achète ${$[y]} des ${k}.<br>`,D+=`Elle  repart avec ${f} ${k} pour $${(0,r.i6h)(v)}$€.<br> ${S[1]} achète quant à lui, au même endroit ${R} ${k} pour $${(0,r.i6h)(x)}$€.<br>`,D+=`Le prix des ${k} est-il proportionnel à la quantité achetée  ?<br>`,Q=`${S[0]} dépense $${(0,r.b1)((0,r.i6h)(v),"blue")}$€.<br>`,Q+=`${S[1]} a acheté  $${(0,r.b1)((0,r.euh)(R/f))}$ fois la quantité des ${k} achetée par ${S[0]} pour $${(0,r.b1)((0,r.i6h)(v),"blue")}$€.<br>`,Q+=`Il a payé $${(0,r.i6h)(x)}$€ $=${(0,r.b1)((0,r.k$K)(R/f))}\\times${(0,r.b1)((0,r.i6h)(v),"blue")}$€.<br>`,Q+=`À l'aide de ces données, on constate que le prix des ${k} et leur quantité sont tous les deux multipliés par le même nombre, donc ces deux grandeurs sont proportionnelles.<br>`,e="oui"):(y=s[A],S=[(0,r.sTI)(),(0,r.nHh)()],j=(0,r.nSR)(0,h[y].length-1),k=h[y][j],C=p[y][j]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),f=(0,r.nSR)(2,5),v=(0,r.n0o)(f*C,2),C-=.1,R=f*(0,r.nSR)(2,5),x=(0,r.n0o)(R*C,2),D=`${S[0]} achète ${$[y]} des ${k}.<br>`,D+=`Elle a obtenu ${f} ${k} pour $${(0,r.i6h)(v)}$€.<br> ${S[1]} achète quant à lui, au même endroit ${R} ${k} pour $${(0,r.i6h)(x)}$€.<br>`,D+=`Le prix des ${k} est-il proportionnel à la quantité achetée  ?<br>`,Q=`${S[0]} dépense $${(0,r.b1)((0,r.i6h)(v),"blue")}$€.<br>`,Q+=`${S[1]} a acheté  $${(0,r.b1)((0,r.k$K)(R/f))}$ fois la quantité des ${k} achetée par ${S[0]} pour $${(0,r.b1)((0,r.i6h)(v),"blue")}$€.<br>`,Q+=`Il a payé $${(0,r.i6h)(x)}$€.<br>Mais $${(0,r.b1)((0,r.k$K)(R/f))}\\times${(0,r.b1)((0,r.i6h)(v),"blue")}$€ $=${(0,r.i6h)((0,r.n0o)(R*v/f))}$€.<br>`,Q+=`À l'aide de ces données, on constate que le prix unitaire des ${k} n'est pas le même pour ${S[0]} qui en a acheté $${f}$ que pour ${S[1]} qui en a acheté ${R}, donc ces deux grandeurs ne sont pas proportionnelles.<br>`,e="non"),F+=1;break;case 2:S=[(0,r.sTI)(),(0,r.nHh)()],g=(0,r.nSR)(5,20),f=100*(0,r.nSR)(5,20,g),g*=100,q=(0,r.vbX)((0,r.n0o)(g/60*(1+.2*(0,r.nSR)(0,2))),0),R=(0,r.vbX)((0,r.n0o)(f/60*(1+.2*(0,r.nSR)(0,2))),0),y=(0,r.n0o)(g/q),j=(0,r.n0o)(f/R),D=`${S[0]} habite à $${(0,r.euh)(g)}$ m du collège. Elle met ${q} minutes pour s'y rendre depuis chez elle.<br>`,D+=`${S[1]}, lui, habite à $${(0,r.euh)(f)}$ m du collège. Il met ${R} minutes pour s'y rendre depuis chez lui.<br>`,D+="Les durées de trajet pour venir au collège sont-elles proportionnelles aux distances parcoures ?<br>",Q=`${S[0]} parcourt ${g} m en ${q} minutes soit environ $\\dfrac{${g}\\text{ m}}{${q}\\text{ min}} ${(0,r.vbX)(y,1)===y?"=":"\\approx"} ${(0,r.k$K)((0,r.vbX)(y,1))}\\text{ m}/_{\\text{ min}}$`,Q+=` et ${S[1]} parcourt ${f} m en ${R} minutes soit environ $\\dfrac{${f}\\text{ m}}{${R}\\text{ min}} ${(0,r.vbX)(j,1)===j?"=":"\\approx"} ${(0,r.k$K)((0,r.vbX)(j,1))}\\text{ m}/_{\\text{ min}}$.<br>`,y===j?Q+="Pour ces deux élèves, le temps mis et la distance parcourue sont proportionnelles (si l'on compare leur vitesse moyenne).":(Q+="La distance parcourue en une minute (vitesse moyenne) n'est pas la même dans ces deux situations, il n'y a donc pas proportionnalité.<br>",e="non");break;case 3:S=[(0,r.sTI)(),(0,r.nHh)()],g=(0,r.nSR)(5,20),f=g+(0,r.nSR)(25,35),D=`${S[0]} vient d'avoir ${g} ans cette année.<br> Son père ${S[1]} vient de fêter  son ${f}ème anniversaire.<br>`,D+=`L'âge de son père est-il proportionnel à l'âge de ${S[0]} ?<br>`,Q=`Aujourd'hui, la différence d'âge entre ${S[0]} et ${S[1]} est de ${f-g} ans.<br>`,Q+=`${S[0]} a ${g} ans aujourd'hui. Dans ${g} années, ${S[0]} aura ${2*g} ans (${g} + ${g}), c'est-à-dire le double d'aujourd'hui.<br>`,Q+=`Son père ${S[1]} qui a actuellement ${f} ans aura ${g+f} ans cette année-là (${f}+${g}).<br>`,Q+=`Quand l'âge de ${S[0]} double, l'âge de ${S[1]} ne double pas, donc l'âge de ${S[0]} et l'âge de son père ne sont pas propotionnels.<br>`,Q+=`Dans ${g} années, la différence d'âge restera la même : ${g+f} - ${2*g} = ${f-g}.`,e="non";break;case 4:y=(0,r.nSR)(0,5),j=(0,r.nSR)(0,4),D=`Une épidémie se répand dans la ville de ${b[y]}.<br>`,D+=`Le nombre de malades ${m[j]} tous les ${j+2} jours.<br>`,D+="Le nombre de malades est-il proportionnel au nombre de"+("multi"===(0,a.sY)()?"<br>":" "),D+="jours passés depuis le début de l'épidémie ?<br>",Q=`Admettons qu'il y ait 10 malades le 1er jour. Le ${3+j}e jour il y aura $10 \\times ${j+2} = ${10*(j+2)}$ malades.<br>`,Q+=`Entre le 1er jour et le ${3+j}e jour, le nombre de malades est multiplié par ${j+2} mais le nombre de jours est multiplié par ${3+j}.<br>`,Q+="Donc le nombre de malades n'est pas proportionnel au nombre de jours passés.<br>",e="non";break;case 5:S=[(0,r.sTI)(),(0,r.nHh)()],y=(0,r.nSR)(0,5),k=h[4][y],j=(0,r.nSR)(0,4),C=p[4][y]*(1+.2*(0,r.nSR)(1,2)*(0,r.nSR)(-1,1)),q=(0,r.nSR)(2,6),R=(0,r.nSR)(0,3),c[0]=[q,q*C],c[1]=[q+1,(q+1)*C],c[2]=[2*q+1,(2*q+1)*C],c[3]=[3*q+3,(3*q+3)*C],M=u[F],F+=1,M||(c[R][1]-=.1),D=`${S[1]} relève les prix des ${k} sur un catalogue par${"multi"===(0,a.sY)()?"<br>":" "}correspondance en fonction de la quantité saisie dans le panier.<br>`,D+="Il note les prix dans le tableau suivant :<br> <br>",D+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=c.length;e++)D+="|c";D+=`|}\\hline  \\text{${k}}`;for(let e=0;e<c.length;e++)D+=`&${c[e][0]}`;D+="\\\\\\hline \\text{Prix (en €})";for(let e=0;e<c.length;e++)D+=`&${(0,r.i6h)((0,r.vbX)(c[e][1],2))}`;D+="\\\\\\hline\\end{array}$<br> <br>",D+=`Le prix des ${k} est-il proportionnel à la quantité achetée ?<br>`,Q=`On peut calculer le prix unitaire des ${k} dans chaque cas de figure :<br><br>`,d=M?(0,r.w6H)(3):(0,r.w6H)(3,[R]),Q+="$";for(let e=0;e<d.length;e++)Q+=`\\dfrac{${(0,r.i6h)((0,r.vbX)(c[d[e]][1],2))}\\text{ €}}{${c[d[e]][0]}\\text{ ${k}}}=`;Q+=`${(0,r.i6h)(C)}\\text{ €}/_{\\text{${k.substring(0,k.length-1)}}}$<br><br>`,M?(Q+=`Le prix des ${k} est bien proportionnel à leur nombre.<br>`,e="oui"):(Q+=`Mais $\\dfrac{${(0,r.i6h)((0,r.vbX)(c[R][1],2))}\\text{ €}}{${c[R][0]}\\text{ ${k}}}\n            =${(0,r.i6h)((0,r.vbX)((0,r.n0o)(c[R][1]/c[R][0]),2))}\\text{ €}/_{\\text{${k.substring(0,k.length-1)}}}$.<br>`,Q+=`Le prix des ${k} n'est pas proportionnel à leur nombre.<br>`,e="non")}this.questionJamaisPosee(A,g,f,R,x,C,i[A])&&((this.interactif||n.Do.isAmc)&&(this.autoCorrection[A]={},this.autoCorrection[A].options={ordered:!0},this.autoCorrection[A].enonce=`${D}\n`,this.autoCorrection[A].propositions=[{texte:"oui",statut:"non"!==e},{texte:"non",statut:"oui"!==e},{texte:"je ne sais pas",statut:!1}],this.interactif&&(D+=(0,o.l3)(this,A).texte)),this.listeQuestions.push(D),this.listeCorrections.push(Q),A++),T++}(0,r.K1R)(this)},this.besoinFormulaireTexte=["Type de questions","Nombres séparés par des tirets\n1 : Achat\n2 : Distance\n3 : Âge\n4 : Épidémie\n5 : Catalogue (tableau de proportionnalité)"]}},25523:(e,s,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let t="";for(const i of s)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(s),t.d(s,{default:()=>i})}}]);
//# sourceMappingURL=5911.50c4fefac3593356f37e.js.map