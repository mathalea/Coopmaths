"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[94544,72159,25523],{94544:(s,e,i)=>{i.r(e),i.d(e,{titre:()=>o,default:()=>n});var t=i(72159);const o="Calculer des probabilités dans une expérience aléatoire à une épreuve";function n(){t.default.call(this)}},72159:(s,e,i)=>{i.r(e),i.d(e,{titre:()=>r,default:()=>a});var t=i(25523),o=i(22380),n=i(25482);const r="Calculer des probabilités dans une expérience aléatoire à une épreuve";function a(){t.default.call(this),this.titre=r,this.consigne="",this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,o.Do.isHtml?this.spacing=2:this.spacing=1,o.Do.isHtml?this.spacingCorr=3:this.spacingCorr=1,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const s=(0,n.SRM)([0,1,2,3,4,5,6],this.nbQuestions),e=[["le frigo","yaourts"],["le frigo","desserts lactés"],["une urne","boules"],["une urne","jetons"],["un paquet de bonbons","nounours"],["un tiroir de la commode","t-shirts"],["un tas de jetons de poker","jetons"]],i=[[]];i[0]=["à la fraise","à la vanille","à l'abricot","à l'ananas","à la cerise"],i[1]=["au chocolat","à la vanille","au café","à la pistache","au caramel"],i[2]=["rouges","vertes","bleues","noires","blanches"],i[3]=["gris","cyans","roses","jaunes","violets"],i[4]=["rouges","verts","bleus","noirs","jaunes"],i[5]=["rouges","verts","bleus","noirs","blancs"],i[6]=["rouges","verts","bleus","noirs","jaunes"];for(let t,o,r,a,l,u,b,h,c,$,d,m,p=0,f=[],C=0;p<this.nbQuestions&&C<50;)u=s[p],2===u?(c="une",$="elles"):(c="un",$="eux"),l=(0,n.rV2)(),b=e[u][0],h=e[u][1],f[0]=(0,n.nSR)(2,5),f[1]=(0,n.nSR)(1,6)+1,f[2]=2*(0,n.nSR)(1,3),f[3]=(0,n.nSR)(1,4)+2,f[4]=(0,n.nSR)(2,5),a=f[0]+f[1]+f[2]+f[3]+f[4],o=(0,n.nSR)(0,4),t=(0,n.nSR)(0,4,[o]),r=(0,n.nSR)(0,4,[t,o]),d=`Dans ${b} il y a ${a} ${h}. ${f[0]} sont ${i[u][0]}, ${f[1]} sont ${i[u][1]}, ${f[2]} sont ${i[u][2]}, ${f[3]} sont ${i[u][3]} et ${f[4]} sont ${i[u][4]}.<br> `,d+=`${l} choisit au hasard l'${c} d'entre ${$}.<br> `,d+=(0,n.bk1)(0)+` Quelle est la probabilité que son choix tombe sur l'${c} des ${h} ${i[u][o]} ?<br>`,d+=(0,n.bk1)(1)+` Quelle est la probabilité que son choix tombe sur l'${c} des ${h} ${i[u][t]} ?<br>`,d+=(0,n.bk1)(2)+` Quelle est la probabilité que son choix ne tombe pas sur l'${c} des ${h} ${i[u][r]} ?<br>`,d+=(0,n.bk1)(3)+` Quelle est la probabilité que son choix tombe sur l'${c} des ${h} ${i[u][o]} ou ${i[u][t]}?<br>`,m="On est dans une situation d’équiprobabilité donc la probabilité est donnée par le quotient du nombre de cas favorables par le nombre de cas au total.<br>",m+=(0,n.bk1)(0)+` Il y a ${f[o]} ${h} ${i[u][o]} et il y a ${a} ${h} possibles. La probabilité que son choix tombe sur l'${c} des ${h} ${i[u][o]} est :<br> $${(0,n.qaf)(f[o],a)}${(0,n.t7m)(f[o],a)}$.<br>`,m+=(0,n.bk1)(1)+` Il y a ${f[t]} ${h} ${i[u][t]} et il y a ${a} ${h} possibles. La probabilité que son choix tombe sur l'${c} des ${h} ${i[u][t]} est :<br> $${(0,n.qaf)(f[t],a)}${(0,n.t7m)(f[t],a)}$.<br>`,m+=(0,n.bk1)(2)+` Il y a ${f[r]} ${h} ${i[u][r]}, donc il y a ${a} $-$ ${f[r]} $=$ ${a-f[r]} autres ${h} et il y a ${a} ${h} possibles. La probabilité que son choix ne tombe pas sur l'${c} des ${h} ${i[u][r]} est :<br> $${(0,n.qaf)(a-f[r],a)}${(0,n.t7m)(a-f[r],a)}$.<br>`,m+=(0,n.bk1)(3)+` La probabilité d'un événement est la somme des probabilités des issues qui le composent. Donc la probabilité que son choix tombe sur l'${c} des ${h} ${i[u][o]} ou ${i[u][t]} est :<br> $${(0,n.qaf)(f[o],a)}+${(0,n.qaf)(f[t],a)}=${(0,n.qaf)(f[t]+f[o],a)}${(0,n.t7m)(f[t]+f[o],a)}$.<br>`,-1===this.listeQuestions.indexOf(d)&&(this.listeQuestions.push(d),this.listeCorrections.push(m),p++),C++;(0,n.K1R)(this)}}},25523:(s,e,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(s){},this.questionJamaisPosee=function(s,...e){0===s&&(this.listeArguments=[]);let i="";for(const t of e)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>t})}}]);
//# sourceMappingURL=94544.95475c161276fec4810f.js.map