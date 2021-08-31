"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[62710,17007],{62710:(A,i,e)=>{e.r(i),e.d(i,{titre:()=>r,interactifReady:()=>Q,interactifType:()=>a,amcReady:()=>l,amcType:()=>$,default:()=>h});var t=e(17007),s=e(66170),n=e(30169),o=e(75664);const r="Lire l’image d’un nombre à partir d’un graphique",Q=!0,a="mathLive",l=!0,$="AMCHybride";function h(){t.default.call(this),this.titre=r,this.consigne="",this.sup=3,this.spacing=1,s.Do.isHtml?this.spacingCorr=3:this.spacingCorr=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.typeExercice="MG32",this.dimensionsDivMg32=[800,600],this.pasDeVersionLatex=!1,this.nbCols=1,this.listePackages="pgfplots",this.nouvelleVersion=function(A){this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let i,e,t,r,Q,a,l,$,h,B,g,c,m,u,E,b,p,D,C;function d(){s.Do.isHtml?(Q=(0,n.nSR)(-6,-3),a=(0,n.nSR)(Q+3,2),l=(0,n.nSR)(a+2,8),$=(0,n.nSR)(-5,5),h=(0,n.nSR)(-6,6),B=(0,n.nSR)(-5,5),r=(0,n.nSR)(-5,5),t=(0,n.nSR)(-5,5),D=7):(Q=(0,n.nSR)(-4,-2),a=(0,n.nSR)(-1,2,[0]),l=(0,n.nSR)(3,4),$=(0,n.nSR)(-4,4),h=(0,n.nSR)(-4,4),B=(0,n.nSR)(-4,4),r=(0,n.nSR)(-3,3),t=(0,n.nSR)(-3,3),D=4)}this.sup=parseInt(this.sup),d();let R="On a tracé ci-dessous la courbe représentative de la fonction $f$.<br>",f="";if(1===this.sup&&(i=(0,n.n0o)((h-$)/(a-Q)),e=(0,n.n0o)($-i*Q),g=`${i}*x+(${e})`,C=A=>i*A+e,R+=`Déterminer par lecture graphique les images de $${Q}$ et de $${a}$ par cette fonction $f$.<br><br>`,f=`L'image de $${Q}$ est $${$}$, on note $f(${Q})=${$}$.<br>`,f+=`L'image de $${a}$ est $${h}$, on note $f(${a})=${h}$.`),2===this.sup){for([[c,m],[u,E]]=(0,n.amB)(Q,l,$,B,t);0===m||0===E||0===c;)Q=(0,n.nSR)(-6,-3),l=(0,n.nSR)(1,6),$=(0,n.nSR)(-5,5),B=(0,n.nSR)(-6,6),r=(0,n.nSR)(-10,10),[[c,m],[u,E]]=(0,n.amB)(Q,l,$,B,t);i=c/m,e=u/E,a=0,h=t,g=`${i}*x^2+(${e})*x+(${t})`,C=A=>i*A**2+e*A+t}if(3===this.sup){[[c,m],[u,E],[b,p]]=(0,n.Llv)(Q,a,l,$,h,B,r);let[A,s]=(0,n.gVi)([c/m,u/E,b/p,r]);for(;0===m||0===E||0===p||(0,n.WnP)(A[1])>D||(0,n.WnP)(s[1])>D;)d(),[[c,m],[u,E],[b,p]]=(0,n.Llv)(Q,a,l,$,h,B,r),(0,n.gVi)([c/m,u/E,b/p,r])===[]?[A,s]=[[0,999],[0,999]]:[A,s]=(0,n.gVi)([c/m,u/E,b/p,r]);i=c/m,e=u/E,t=b/p,g=`${i}*x^3+(${e})*x^2+(${t})*x+(${r})`,C=A=>i*A**3+e*A**2+t*A+r}2!==this.sup&&3!==this.sup||(R+=`Déterminer par lecture graphique les images de $${Q}$, de $${a}$ et de $${l}$ par cette fonction $f$.<br><br>`,f=`L'image de $${Q}$ est $${$}$, on note $f(${Q})=${$}$.<br>`,f+=`L'image de $${a}$ est $${h}$, on note $f(${a})=${h}$.<br>`,f+=`L'image de $${l}$ est $${B}$, on note $f(${l})=${B}$.<br>`),s.Do.isHtml||(R+="\n\n",R+=(0,n.Cuc)(g)),console.log(g),this.MG32codeBase64="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAAEL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFAeKkeuFHrhEBzy4UeuFHs#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAAA4AAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8AAAAAAQ4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBCb52yLQ5WAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wAAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AAAAAAAOAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAADgAAAQUAAQAAAAcAAAAJAP####8AAAAAAQ4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAQEAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAduYmdyYWR4AAIyMAAAAAFANAAAAAAAAAAAABEA#####wAHbmJncmFkeQACMjAAAAABQDQAAAAAAAD#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wAUR3JhZHVhdGlvbkF4ZXNSZXBlcmUAAAAbAAAACAAAAAMAAAAKAAAADwAAABD#####AAAAAQATQ0Fic2Npc3NlT3JpZ2luZVJlcAAAAAARAAVhYnNvcgAAAAr#####AAAAAQATQ09yZG9ubmVlT3JpZ2luZVJlcAAAAAARAAVvcmRvcgAAAAoAAAALAAAAABEABnVuaXRleAAAAAr#####AAAAAQAKQ1VuaXRleVJlcAAAAAARAAZ1bml0ZXkAAAAK#####wAAAAEAEENQb2ludERhbnNSZXBlcmUAAAAAEQAAAAAADgAAAQUAAAAACgAAAA4AAAASAAAADgAAABMAAAAWAAAAABEAAAAAAA4AAAEFAAAAAAoAAAANAAAAAA4AAAASAAAADgAAABQAAAAOAAAAEwAAABYAAAAAEQAAAAAADgAAAQUAAAAACgAAAA4AAAASAAAADQAAAAAOAAAAEwAAAA4AAAAVAAAADAAAAAARAAAAFgAAAA4AAAAPAAAADwAAAAARAAAAAAAOAAABBQAAAAAXAAAAGQAAAAwAAAAAEQAAABYAAAAOAAAAEAAAAA8AAAAAEQAAAAAADgAAAQUAAAAAGAAAABv#####AAAAAQAIQ1NlZ21lbnQAAAAAEQEAAAAAEAAAAQABAAAAFwAAABoAAAAXAAAAABEBAAAAABAAAAEAAQAAABgAAAAcAAAABAAAAAARAQAAAAALAAFXAMAUAAAAAAAAwDQAAAAAAAAFAAE#3FZ4mrzfDgAAAB3#####AAAAAgAIQ01lc3VyZVgAAAAAEQAGeENvb3JkAAAACgAAAB8AAAARAAAAABEABWFic3cxAAZ4Q29vcmQAAAAOAAAAIP####8AAAACABJDTGlldU9iamV0UGFyUHRMaWUBAAAAEQBmZmYAAAAfAAAADgAAAA8AAAAfAAAAAgAAAB8AAAAfAAAAEQAAAAARAAVhYnN3MgANMiphYnNvci1hYnN3MQAAAA0BAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAEgAAAA4AAAAhAAAAFgAAAAARAQAAAAALAAABBQAAAAAKAAAADgAAACMAAAAOAAAAEwAAABkBAAAAEQBmZmYAAAAkAAAADgAAAA8AAAAfAAAABQAAAB8AAAAgAAAAIQAAACMAAAAkAAAABAAAAAARAQAAAAALAAFSAEAgAAAAAAAAwCAAAAAAAAAFAAE#0RtOgbToHwAAAB7#####AAAAAgAIQ01lc3VyZVkAAAAAEQAGeUNvb3JkAAAACgAAACYAAAARAAAAABEABW9yZHIxAAZ5Q29vcmQAAAAOAAAAJwAAABkBAAAAEQBmZmYAAAAmAAAADgAAABAAAAAmAAAAAgAAACYAAAAmAAAAEQAAAAARAAVvcmRyMgANMipvcmRvci1vcmRyMQAAAA0BAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAEwAAAA4AAAAoAAAAFgAAAAARAQAAAAALAAABBQAAAAAKAAAADgAAABIAAAAOAAAAKgAAABkBAAAAEQBmZmYAAAArAAAADgAAABAAAAAmAAAABQAAACYAAAAnAAAAKAAAACoAAAAr#####wAAAAIADENDb21tZW50YWlyZQAAAAARAWZmZgAAAAAAAAAAAEAYAAAAAAAAAAAAHwsAAf###wAAAAEAAAAAAAAAAQAAAAAAAAAAAAsjVmFsKGFic3cxKQAAABkBAAAAEQBmZmYAAAAtAAAADgAAAA8AAAAfAAAABAAAAB8AAAAgAAAAIQAAAC0AAAAbAAAAABEBZmZmAAAAAAAAAAAAQBgAAAAAAAAAAAAkCwAB####AAAAAQAAAAAAAAABAAAAAAAAAAAACyNWYWwoYWJzdzIpAAAAGQEAAAARAGZmZgAAAC8AAAAOAAAADwAAAB8AAAAGAAAAHwAAACAAAAAhAAAAIwAAACQAAAAvAAAAGwAAAAARAWZmZgDAIAAAAAAAAD#wAAAAAAAAAAAAJgsAAf###wAAAAIAAAABAAAAAQAAAAAAAAAAAAsjVmFsKG9yZHIxKQAAABkBAAAAEQBmZmYAAAAxAAAADgAAABAAAAAmAAAABAAAACYAAAAnAAAAKAAAADEAAAAbAAAAABEBZmZmAMAcAAAAAAAAAAAAAAAAAAAAAAArCwAB####AAAAAgAAAAEAAAABAAAAAAAAAAAACyNWYWwob3JkcjIpAAAAGQEAAAARAGZmZgAAADMAAAAOAAAAEAAAACYAAAAGAAAAJgAAACcAAAAoAAAAKgAAACsAAAAz#####wAAAAEABUNGb25jAP####8AAWYACC0yKngqeCszAAAADQD#####AAAAAQAMQ01vaW5zVW5haXJlAAAADQIAAAANAgAAAAFAAAAAAAAAAP####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAAeAAAAAAAAAAFACAAAAAAAAAABeAAAAAQA#####wEAAAAAEAABeAAAAAAAAAAAAEAIAAAAAAAABQABQC8BAyKX1IIAAAAEAAAAGAD#####AAJ4MQAAAAoAAAA2AAAAEQD#####AAJ5MQAFZih4MSn#####AAAAAQAOQ0FwcGVsRm9uY3Rpb24AAAA1AAAADgAAADcAAAAWAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAKAAAADgAAADcAAAAOAAAAOP####8AAAACAA1DTGlldURlUG9pbnRzAP####8AAAD#AAIAAAA5AAAB9AABAAAANgAAAAQAAAA2AAAANwAAADgAAAA5#####wAAAAEAFUNQb2ludExpZUxpZXVQYXJQdExpZQD#####AAAAAAAQAAFNAAAAAAAAAAAAQAgAAAAAAAAJAAG##CuHsx36wAAAADq##CuHsx36wAAAAAMA#####wEAAAABEAAAAQABAAAAOwA#8AAAAAAAAAAAAAMA#####wEAAAABEAAAAQABAAAAOwE#8AAAAAAAAP####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAAEAAAAPAAAACIA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAUAAAA9AAAAFwD#####AAAAAAAQAAABAQEAAAA7AAAAPgAAABcA#####wAAAAAAEAAAAQEBAAAAOwAAAD8AAAAO##########8=",this.mg32init=(A,i)=>{A.giveFormula2(i,"f",g),A.calculate(i),A.display(i)},s.Do.isAmc?this.autoCorrection[0]={enonce:R,propositions:[{type:"AMCNum",propositions:[{texte:`L'image de $${Q}$ est $${$}$, on note $f(${Q})=${$}$.\\\\`,statut:"",reponse:{texte:`$f(${Q})$`,valeur:$,param:{digits:(0,n.WW7)($),decimals:0,signe:!0,approx:0}}}]},{type:"AMCNum",propositions:[{texte:`L'image de $${a}$ est $${h}$, on note $f(${a})=${h}$.\\\\`,statut:"",reponse:{texte:`$f(${a})$`,valeur:h,param:{digits:(0,n.WW7)(h),decimals:0,signe:!0,approx:0}}}]},{type:"AMCNum",propositions:[{texte:`L'image de $${l}$ est $${B}$, on note $f(${l})=${B}$.\\\\`,statut:"",reponse:{texte:`$f(${l})$`,valeur:B,param:{digits:(0,n.WW7)(B),decimals:0,signe:!0,approx:0}}}]}]}:this.interactif&&(1===this.sup?(R+=`$f(${Q})=$`+(0,o.G5)(this,0,"largeur25 inline"),R+=`$f(${a})=$`+(0,o.G5)(this,1,"largeur25 inline"),(0,o.Iq)(this,0,C(Q)),(0,o.Iq)(this,1,C(Q))):(R+=`$f(${Q})=$`+(0,o.G5)(this,0,"largeur25 inline"),R+=`$f(${a})=$`+(0,o.G5)(this,1,"largeur25 inline"),R+=`$f(${l})=$`+(0,o.G5)(this,2,"largeur25 inline"),(0,o.Iq)(this,0,C(Q)),(0,o.Iq)(this,1,C(a)),(0,o.Iq)(this,2,C(l)))),this.listeQuestions.push(R),this.listeCorrections.push(f),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Type de fonctions",3,"1 : Affine\n2 : Polynome du 2nd degré\n3 : Polynome du 3e degré"]}},17007:(A,i,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(A){},this.questionJamaisPosee=function(A,...i){0===A&&(this.listeArguments=[]);let e="";for(const t of i)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=62710.2f0ac184ef280c0ebd8f.js.map