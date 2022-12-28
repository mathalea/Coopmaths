"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[24776,87258,25523],{87258:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>r,interactifReady:()=>o,interactifType:()=>h,amcReady:()=>b,amcType:()=>m,default:()=>u});var s=t(25523),$=t(22380),a=t(25482),n=t(11945);const r="Factoriser une expression",o=!0,h="mathLive",b=!0,m="AMCOpen";function u(){s.default.call(this),this.consigne="Factoriser les expressions suivantes.",this.nbQuestions=8,this.nbCols=2,this.nbColsCorr=2,$.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Niveau 1\n2 : Niveau 2\n3 : Niveau 3\n4 : Mélange"],this.nouvelleVersion=function(){let e;switch(this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup=parseInt(this.sup),this.sup){case 1:e=["ka+nkb","-ka+nkb"];break;case 2:e=["nka+mkb","nka-mkb"];break;case 3:e=["nkx+mkx2","nkx-mkx2","nx2+x","nx2+mx"];break;default:e=["ka+nkb","-ka+nkb","nka+mkb","nka-mkb","nkx+mkx2","nkx-mkx2","nx2+x","nx2+mx"]}const i=(0,a.SRM)(e,this.nbQuestions);for(let t,s,r,o,h,b,m,u=0,c=0;u<this.nbQuestions&&c<50;){switch(m=(0,a.q$q)([2,3,5,7,11]),b=(0,a.q$q)([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6],[2,7],[3,7],[4,7],[5,7],[6,7],[3,8],[5,8],[7,8],[2,9],[4,9],[5,9],[7,9],[8,9],[3,10],[7,10],[9,10]]),o=b[0],h=b[1],o=(0,a.q$q)([o,o,-o]),i[u]){case"ka+nkb":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${m}*a+(${o*m})*b`)}$`,s=t,s+=o>0?`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}a+${m}\\times${o}b$`:`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}a-${m}\\times${(0,a.WnP)(o)}b$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}(${(0,a.eyN)(`a+(${o})*b`)})$`,r=[`${m}(${(0,a.eyN)(`a+(${o})*b`)})`,`${-m}(${(0,a.eyN)(`-a+(${-o})*b`)})`];break;case"-ka+nkb":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${-m}*a+(${o*m})*b`)}$`,s=t,o>0?(s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${-m}a+${m}\\times${o}b$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}(${(0,a.eyN)(`-a+${o}*b`)})$`,r=`${m}(${(0,a.eyN)(`-a+(${o})*b`)})`):(s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${-m}a+(${-m})\\times${-o}b$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${-m}(${(0,a.eyN)(`a+(${-o})*b`)})$`,r=[`${-m}(${(0,a.eyN)(`a+(${-o})*b`)})`,`${m}(${(0,a.eyN)(`-a+(${o})*b`)})`]);break;case"nka+mkb":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${o*m}*a+(${h*m})*b`)}$`,s=t,s+=o<0?`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}\\times(${o}a)+${m}\\times${h}b$`:`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}\\times${o}a+${m}\\times${h}b$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}(${o}a+${h}b)$`,r=[`${m}(${o}a+${h}b)`,`${-m}(${-o}a-${h}b)`];break;case"nka-mkb":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${o*m}*a-(${h*m})*b`)}$`,s=t,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}\\times${(0,a.PMY)(o)}a-${m}\\times${h}b$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}(${o}a-${h}b)$`,r=[`${m}(${o}a-${h}b)`,`${-m}(${-o}a+${h}b)`];break;case"nkx+mkx2":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${o*m}*x+(${h*m})*x^2`)}$`,s=t,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}x\\times${(0,a.PMY)(o)}+${m}x\\times${h}x$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}x(${o}+${h}x)$`,r=[`${m}x(${o}+${h}x)`,`${-m}x(${-o}-${h}x)`];break;case"nkx-mkx2":t=`<br>$${(0,a.Gag)(u+1)}=${(0,a.eyN)(`${o*m}*x-(${h*m})*x^2`)}$`,s=t,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}x\\times${(0,a.PMY)(o)}-${m}x\\times${h}x$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=${m}x(${o}-${h}x)$`,r=[`${m}x(${o}-${h}x)`,`${-m}x(${-o}+${h}x)`];break;case"nx2+x":t=`<br>$${(0,a.Gag)(u+1)}=${o}x^2+x$`,s=t,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=x\\times ${(0,a.PMY)(o)}x+x\\times 1$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=x(${o}x+1)$`,r=[`x(${o}x+1)`,`-x(${-o}x-1)`];break;case"nx2+mx":t=`<br>$${(0,a.Gag)(u+1)}=${o}x^2+${h}x$`,s=t,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=x\\times ${(0,a.PMY)(o)}x+x\\times ${h}$`,s+=`<br>$\\phantom{${(0,a.Gag)(u+1)}}=x(${o}x+${h})$`,r=[`x(${o}x+${h})`,`-x(${-o}x-${h})`]}$.Do.isAmc?this.autoCorrection[u]={enonce:t,propositions:[{texte:s,statut:3,feedback:""}]}:(t+=(0,n.G5)(this,u,"largeur25 inline",{texte:" $=$"}),(0,n.Iq)(this,u,r)),this.questionJamaisPosee(u,m,o,h)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),u++),c++}(0,a.FRy)(this)}}},24776:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>$,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>a});var s=t(87258);const $="Factoriser une expression littérale";function a(){s.default.call(this),this.titre=$,this.sup=4,this.nbQuestions=8}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=24776.36b4479498e8c3867f44.js.map