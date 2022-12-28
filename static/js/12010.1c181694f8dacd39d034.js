"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[12010,53574,25523],{12010:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>r,interactifReady:()=>t.interactifReady,interactifType:()=>t.interactifType,default:()=>o});var t=s(53574);const r="Calculer des effectifs et des fréquences";function o(){t.default.call(this)}},53574:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>a,interactifReady:()=>l,interactifType:()=>u,default:()=>h});var t=s(25523),r=s(25482),o=s(71250),n=s(11945);const a="Calculer des effectifs et des fréquences",l=!0,u="mathLive";function h(){t.default.call(this),this.titre=a,this.interactifReady=l,this.interactifType=u,this.consigne="Répondre aux questions à l'aide du graphique et de calculs.",this.nbQuestions=4,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.video="https://youtu.be/GWDDay-mdVA",this.correctionDetailleeDisponible=!1,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=["girafes","zèbres","gnous","buffles","gazelles","crocodiles","rhinocéros","léopards","guépards","hyènes","lycaons","servals","phacochères"],i=["hérons","marabouts","flamants roses","cigognes","grues","vautours"],s=4+parseInt(this.sup),t=[],a=[];let l=[],u=0,h="",c="",d="";for(let o=0;o<s;o++)u=(0,r.nSR)(2,10,l),a.push(u),l=l.concat([u]),h=o<3?(0,r.q$q)(e,t):(0,r.q$q)(i,t),t.push(h);c+="Dans le parc naturel de "+(0,r.q$q)(["Dramve","Fatenmin","Batderfa","Vihi","Genser","Barbetdou","Dramrendu","Secai","Cipeudram","Cigel","Lisino","Fohenlan","Farnfoss","Kinecardine","Zeffari","Barmwich","Swadlincote","Swordbreak","Loshull","Ruyron","Fluasall","Blueross","Vlane"])+", il y a des animaux. ",c+="Certains sont des quadrupèdes (";for(let r=0;r<3;r++)c+=t[r]+", ";c=c.substring(0,c.length-2),c+="), et d'autres sont des oiseaux (";for(let r=3;r<s;r++)c+=t[r]+", ";c=c.substring(0,c.length-2),c+="). ",c+="Voici un diagramme en barres qui donne le nombre d’individus pour chaque espèce.<br>",c+=(0,r.bk1)(0)+" Quel est l'effectif des "+t[0]+" ?<br>",c+=(0,n.G5)(this,1),c+=(0,r.bk1)(1)+" Calculer la fréquence des "+t[1]+" ? Donner le résultat sous la forme d'un pourcentage.<br>",c+=(0,n.G5)(this,2),c+=(0,r.bk1)(2)+" Calculer l'effectif des quadrupèdes ? <br>",c+=(0,n.G5)(this,3),c+=(0,r.bk1)(3)+" Calculer la fréquence des oiseaux ? Donner le résultat sous la forme d'un pourcentage.<br>",c+=(0,n.G5)(this,4),c+="Les pourcentages seront éventuellement arrondis à 0,1% près. <br>";const f=(0,o.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:1,yThickDistance:1,yMax:11,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"Nombre d'individus"}),b=[];for(let n=0;n<s;n++)b.push((0,o.rdJ)((f.xMax-f.xMin)/(s+1)*(n+1),a[n],(0,r.MKP)(t[n]),{unite:1}));c+="<br>"+(0,o.iR9)({xmin:-5,xmax:11,ymin:-4,ymax:11,pixelsParCm:30,scale:1},f,b),d+=(0,r.bk1)(0)+(0,r.HzX)(" D'après le graphique, il y a "+a[0]+" "+t[0]+". <br>"),(0,n.Iq)(this,1,a[0]);let p=a[0];d+=(0,r.bk1)(1)+" L'effectif total des animaux est : "+a[0];for(let r=1;r<s;r++)d+=" + "+a[r],p+=a[r];d+=" = "+p+". ",d+=" D'après le graphique, il y a "+a[1]+" "+t[1]+". <br>",d+=" La fréquence (ou la proportion) de  "+t[1]+" est : $ "+(0,r.xVe)(a[1],p)+"$ ",(0,r.n0o)(a[1]/p)===(0,r.vbX)(a[1]/p,3)?d+="= ":d+="$\\approx $ ",d+=(0,r.S1u)(a[1]/p,3)+". <br>",d+=(0,r.HzX)("La fréquence des "+t[1]+" est donc : "+(0,r.S1u)(100*a[1]/p,1)+"%. <br>"),(0,n.Iq)(this,2,[(0,r.n0o)(100*a[1]/p,1),`${(0,r.n0o)(100*a[1]/p,1)}\\%`]),d+=(0,r.bk1)(2)+" On fait la somme des effectifs de chaque espèce de quadrupèdes : ";let m=a[0];d+=a[0];for(let r=1;r<3;r++)d+=" + "+a[r],m+=a[r];d+=". <br>",d+=(0,r.HzX)("L'effectif des quadrupèdes est donc : "+m+".<br>"),(0,n.Iq)(this,3,m);let g=a[3];d+=(0,r.bk1)(3)+" L'effectif total des oiseaux est : "+a[3];for(let r=4;r<s;r++)d+=" + "+a[r],g+=a[r];d+=" = "+g+". ",d+=" L'effectif total des animaux est : "+p+". <br>",d+=" La fréquence (ou la proportion) d'oiseaux est : $ "+(0,r.xVe)(g,p)+"$ ",(0,r.n0o)(g/p)===(0,r.vbX)(g/p,3)?d+="= ":d+="$\\approx $ ",d+=(0,r.S1u)(g/p,3)+". <br>",d+=(0,r.HzX)("La fréquence des oiseaux est donc : "+(0,r.S1u)(100*g/p,1)+"%. <br>"),(0,n.Iq)(this,4,[(0,r.n0o)(100*g/p,1),(0,r.n0o)(100*g/p,1)+"\\%"]),this.listeQuestions.push(c),this.listeCorrections.push(d),(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Nombre d'espèces différentes",3," choix 1 : 5 espèces\n choix 2 : 6 espèces\n choix 3 : 7 espèces"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=12010.1c181694f8dacd39d034.js.map