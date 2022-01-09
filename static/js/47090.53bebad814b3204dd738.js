"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[47090,39414,25523],{39414:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>o,interactifType:()=>l,amcReady:()=>c,amcType:()=>h,titre:()=>u,default:()=>d});var n=t(25523),s=t(22380),r=t(71250),a=t(25482),$=t(11945);const o=!0,l="mathLive",c=!0,h="AMCOpenNum",u="Calculer une longueur dans un triangle rectangle en utilisant la trigonométrie";function d(){n.default.call(this),this.titre=u,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.interactif=!1,s.Do.isHtml?(this.spacing=0,this.spacingCorr=0):(this.spacing=2,this.spacingCorr=2),this.nouvelleVersion=function(){let e;this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[];const i=(0,a.wnJ)(3);let t="",n="";const o=[],l=[];let c,h,u,d;c=4===this.level?(0,a.q$q)(["cosinus","invCosinus"]):(0,a.q$q)(["cosinus","sinus","tangente","invCosinus","invSinus","invTangente"]);const b=(0,a.nSR)(35,55),g=b*Math.PI/180;switch(!s.Do.isHtml&&this.sup&&(t+="\\begin{minipage}{.7\\linewidth}\n"),c){case"cosinus":u=(0,a.nSR)(10,15),h=(0,a.n0o)(u*Math.cos(g)),d=(0,a.n0o)(u*Math.sin(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[1]+i[2]}=${u}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[0]+i[1]}$ à $0,1$ cm près.`;break;case"sinus":u=(0,a.nSR)(10,15),h=(0,a.n0o)(u*Math.cos(g)),d=(0,a.n0o)(u*Math.sin(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[1]+i[2]}=${u}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[0]+i[2]}$ à $0,1$ cm près.`;break;case"tangente":h=(0,a.nSR)(7,10),d=(0,a.n0o)(h*Math.tan(g)),u=(0,a.n0o)(h/Math.cos(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[0]+i[1]}=${h}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[0]+i[2]}$ à $0,1$ cm près.`;break;case"invCosinus":h=(0,a.nSR)(7,10),u=(0,a.n0o)(h/Math.cos(g)),d=(0,a.n0o)(u*Math.sin(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[0]+i[1]}=${h}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[1]+i[2]}$ à $0,1$ cm près.`;break;case"invSinus":d=(0,a.nSR)(7,10),u=(0,a.n0o)(d/Math.sin(g)),h=(0,a.n0o)(u*Math.cos(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[0]+i[2]}=${d}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[1]+i[2]}$ à $0,1$ cm près.`;break;case"invTangente":d=(0,a.nSR)(7,10),u=(0,a.n0o)(d/Math.sin(g)),h=(0,a.n0o)(u*Math.cos(g)),t+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> $${i[0]+i[2]}=${d}$ cm et $\\widehat{${i}}=${b}\\degree$.<br>`,t+=`Calculer $${i[0]+i[1]}$ à $0,1$ cm près.`}!s.Do.isHtml&&this.sup&&(t+="\n\\end{minipage}\n");const m=(0,r.xmu)(0,0),p=(0,r.xmu)(h,0),f=(0,r.xmu)(0,d),x=(0,r.R_h)(m,p,f),C=(0,r.Wnp)(x,m,(0,a.nSR)(0,360)),v=C.listePoints[0],k=C.listePoints[1],w=C.listePoints[2],D=(0,r.lvA)(k,v,w);v.nom=i[0],k.nom=i[1],w.nom=i[2];const M=(0,r.NVL)(C,i),y=(0,r.EXn)(w,k);y.epaisseur=2,y.color="blue";const q=(0,r.QSb)(v,k,w,2),T=(0,r.Q2H)(v,k),A=(0,r.Q2H)(v,w),j=(0,r.Q2H)(k,w),H=(0,r.NEH)(C),R=(0,r.xcw)(j,H,1+1.5/(0,r.InT)(H,j),"m3","center"),S=(0,r.xcw)(T,j,1+1.5/(0,r.InT)(j,T),"m1","center"),P=(0,r.xcw)(A,j,1+1.5/(0,r.InT)(j,A),"m2","center");let F,Q,X,B;switch(c){case"cosinus":B=(0,r.d8j)(`${u} \\text{ cm}`,R,"black",120,12,""),X=(0,r.d8j)("?",S,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),Q=(0,r.d8j)(`${b}\\degree`,F,"black",20,12,"");break;case"sinus":B=(0,r.d8j)(`${u} \\text{ cm}`,R,"black",120,12,""),X=(0,r.d8j)("?",P,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),Q=(0,r.d8j)(`${b}\\degree`,F,"black",100,12,"");break;case"tangente":Q=(0,r.d8j)(`${h} \\text{ cm}`,S,"black",120,12,""),X=(0,r.d8j)("?",P,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),B=(0,r.d8j)(`${b}\\degree`,F,"black",100,12,"");break;case"invCosinus":Q=(0,r.d8j)(`${h} \\text{ cm}`,S,"black",120,12,""),B=(0,r.d8j)("?",R,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),X=(0,r.d8j)(`${b}\\degree`,F,"black",100,12,"");break;case"invSinus":X=(0,r.d8j)(`${d} \\text{ cm}`,P,"black",120,12,""),B=(0,r.d8j)("?",R,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),Q=(0,r.d8j)(`${b}\\degree`,F,"black",100,12,"");break;case"invTangente":X=(0,r.d8j)(`${d} \\text{ cm}`,P,"black",120,12,""),Q=(0,r.d8j)("?",S,"black",120,12,""),F=(0,r.xcw)(H,k,2.7/(0,r.InT)(k,H),"B2","center"),B=(0,r.d8j)(`${b}\\degree`,F,"black",100,12,"")}o.push(C,D,M,Q,X,B,q),l.push(C,D,M,Q,X,B,y,q);const I={xmin:Math.min(v.x,k.x,w.x)-4,ymin:Math.min(v.y,k.y,w.y)-4,xmax:Math.max(v.x,k.x,w.x)+2,ymax:Math.max(v.y,k.y,w.y)+2,pixelsParCm:20,scale:.37,mainlevee:!0,amplitude:.4},L={xmin:Math.min(v.x,k.x,w.x)-4,ymin:Math.min(v.y,k.y,w.y)-4,xmax:Math.max(v.x,k.x,w.x)+2,ymax:Math.max(v.y,k.y,w.y)+2,pixelsParCm:20,scale:.35,mainlevee:!1};switch(!s.Do.isHtml&&this.sup&&(t+="\\begin{minipage}{.3\\linewidth}\n"),this.sup&&(t+=(0,r.iR9)(I,o)+"<br>"),!s.Do.isHtml&&this.correctionDetaillee&&(n+="\\begin{minipage}{.4\\linewidth}\n"+(0,r.iR9)(L,l)+"\n\\end{minipage}\n\\begin{minipage}{.7\\linewidth}\n"),!s.Do.isHtml&&this.sup&&(t+="\n\\end{minipage}\n"),c){case"cosinus":n+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> le cosinus de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\cos\\left(\\widehat{${i}}\\right)=\\dfrac{${i[0]+i[1]}}{${i[1]+i[2]}}$.<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\cos\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(i[0]+i[1],u)}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[0]+i[1]}=${(0,a.BlK)("\\color{red}{1}",u,`\\cos\\left(${b}\\degree\\right)`)}$`,n+=`soit $${i[0]+i[1]}\\approx${(0,a.euh)((0,a.vbX)(h,1))}$ cm.`,e=(0,a.vbX)(h,1);break;case"sinus":n+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> le sinus de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\sin \\left(\\widehat{${i}}\\right)=${(0,a.qaf)(i[0]+i[2],i[1]+i[2])}$<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\sin\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(i[0]+i[2],u)}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[0]+i[2]}=${(0,a.BlK)("\\color{red}{1}",u,`\\sin\\left(${b}\\degree\\right)`)}$`,n+=`soit $${i[0]+i[2]}\\approx${(0,a.euh)((0,a.vbX)(d,1))}$ cm.`,e=(0,a.vbX)(d,1);break;case"tangente":n+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> la tangente de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\tan \\left(\\widehat{${i}}\\right)=${(0,a.qaf)(i[0]+i[2],i[0]+i[1])}$<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\tan\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(i[0]+i[2],h)}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[0]+i[2]}=${(0,a.BlK)("\\color{red}{1}",h,`\\tan\\left(${b}\\degree\\right)`)}$`,n+=`soit $${i[0]+i[2]}\\approx${(0,a.euh)((0,a.vbX)(d,1))}$ cm.`,e=(0,a.vbX)(d,1);break;case"invCosinus":n=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> le cosinus de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\cos\\left(\\widehat{${i}}\\right)=\\dfrac{${i[0]+i[1]}}{${i[1]+i[2]}}$.<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\cos\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(h,i[1]+i[2])}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[1]+i[2]}=${(0,a.BlK)(`\\cos\\left(${b}\\degree\\right)`,h,"\\color{red}{1}")}$`,n+=`soit $${i[1]+i[2]}\\approx${(0,a.euh)((0,a.vbX)(u,1))}$ cm.`,e=(0,a.vbX)(u,1);break;case"invSinus":n+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> le sinus de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\sin \\left(\\widehat{${i}}\\right)=${(0,a.qaf)(i[0]+i[2],i[1]+i[2])}$<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\sin\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(d,i[1]+i[2])}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[1]+i[2]}=${(0,a.BlK)(`\\sin\\left(${b}\\degree\\right)`,d,"\\color{red}{1}")}$`,n+=`soit $${i[1]+i[2]}\\approx${(0,a.euh)((0,a.vbX)(u,1))}$ cm.`,e=(0,a.vbX)(u,1);break;case"invTangente":n+=`Dans le triangle $${i}$ rectangle en $${i[0]}$,<br> la tangente de l'angle $\\widehat{${i}}$ est défini par :<br>`,n+=`$\\tan \\left(\\widehat{${i}}\\right)=${(0,a.qaf)(i[0]+i[2],i[0]+i[1])}$<br>`,n+="Avec les données numériques :<br>",n+=`$\\dfrac{\\tan\\left(${b}\\degree\\right)}{\\color{red}{1}}=${(0,a.qaf)(d,i[0]+i[1])}$<br>`,n+=`${(0,a.PH8)("Les produits en croix sont égaux, donc ","red")}<br>`,n+=`$${i[0]+i[1]}=${(0,a.BlK)(`\\tan\\left(${b}\\degree\\right)`,d,"\\color{red}{1}")}$`,n+=`soit $${i[0]+i[1]}\\approx${(0,a.euh)((0,a.vbX)(h,1))}$ cm.`,e=(0,a.vbX)(h,1)}!s.Do.isHtml&&this.correctionDetaillee&&(n+="\n\\end{minipage}\n"),s.Do.isAmc&&(this.autoCorrection[0]={enonce:t,propositions:[{texte:n,statut:4,feedback:""}],reponse:{texte:"résultat",valeur:[e],param:{digits:3,decimals:1,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:1}}}),s.Do.isHtml&&(t+=(0,$.G5)(this,0,"largeur25 inline",{texteApres:" cm"}),(0,$.Iq)(this,0,(0,a.S1u)(e))),this.listeQuestions.push(t),this.listeCorrections.push(n),(0,a.K1R)(this)},this.besoinFormulaireCaseACocher=["Figure à main levée",!1]}},47090:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>n.interactifReady,interactifType:()=>n.interactifType,amcReady:()=>n.amcReady,amcType:()=>n.amcType,titre:()=>s,default:()=>r});var n=t(39414);const s="Utiliser le cosinus pour calculer une longueur dans un triangle rectangle";function r(){n.default.call(this),this.titre=s,this.level=4,this.sup=1}},25523:(e,i,t)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const n of i)void 0!==n&&(t+=n.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>n})}}]);
//# sourceMappingURL=47090.53bebad814b3204dd738.js.map