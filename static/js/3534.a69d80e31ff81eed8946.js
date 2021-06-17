(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3534,6969],{43534:(s,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>n,default:()=>a});var t=i(66969),o=i(55339);const n="Calculer des probabilités dans une expérience aléatoire à une épreuve";function a(){t.default.call(this),this.titre=n,this.consigne="",this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacing=2:this.spacing=1,sortieHtml?this.spacingCorr=3:this.spacingCorr=1,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let s=(0,o.SRM)([0,1,2,3,4,5,6],this.nbQuestions),e=[["le frigo","yaourts"],["le frigo","desserts lactés"],["une urne","boules"],["une urne","jetons"],["un paquet de bonbons","nounours"],["un tiroir de la commode","t-shirts"],["un tas de jetons de poker","jetons"]],i=[[]];i[0]=["à la fraise","à la vanille","à l'abricot","à l'ananas","à la cerise"],i[1]=["au chocolat","à la vanille","au café","à la pistache","au caramel"],i[2]=["rouges","vertes","bleues","noires","blanches"],i[3]=["gris","cyans","roses","jaunes","violets"],i[4]=["rouges","verts","bleus","noirs","jaunes"],i[5]=["rouges","verts","bleus","noirs","blancs"],i[6]=["rouges","verts","bleus","noirs","jaunes"];for(let t,n,a,l,r,u,b,$,h,c,d,p,m=0,f=[],C=0;m<this.nbQuestions&&C<50;)u=s[m],2==u?(h="une",c="elles"):(h="un",c="eux"),r=(0,o.rV2)(),b=e[u][0],$=e[u][1],f[0]=(0,o.nSR)(2,5),f[1]=(0,o.nSR)(1,6)+1,f[2]=2*(0,o.nSR)(1,3),f[3]=(0,o.nSR)(1,4)+2,f[4]=(0,o.nSR)(2,5),l=f[0]+f[1]+f[2]+f[3]+f[4],n=(0,o.nSR)(0,4),t=(0,o.nSR)(0,4,[n]),a=(0,o.nSR)(0,4,[t,n]),d=`Dans ${b} il y a ${l} ${$}. ${f[0]} sont ${i[u][0]}, ${f[1]} sont ${i[u][1]}, ${f[2]} sont ${i[u][2]}, ${f[3]} sont ${i[u][3]} et ${f[4]} sont ${i[u][4]}.<br> `,d+=`${r} choisit au hasard l'${h} d'entre ${c}.<br> `,d+=(0,o.bk1)(0)+` Quelle est la probabilité que son choix tombe sur l'${h} des ${$} ${i[u][n]} ?<br>`,d+=(0,o.bk1)(1)+` Quelle est la probabilité que son choix tombe sur l'${h} des ${$} ${i[u][t]} ?<br>`,d+=(0,o.bk1)(2)+` Quelle est la probabilité que son choix ne tombe pas sur l'${h} des ${$} ${i[u][a]} ?<br>`,d+=(0,o.bk1)(3)+` Quelle est la probabilité que son choix tombe sur l'${h} des ${$} ${i[u][n]} ou ${i[u][t]}?<br>`,p="On est dans une situation d’équiprobabilité donc la probabilité est donnée par le quotient du nombre de cas favorables par le nombre de cas au total.<br>",p+=(0,o.bk1)(0)+` Il y a ${f[n]} ${$} ${i[u][n]} et il y a ${l} ${$} possibles. La probabilité que son choix tombe sur l'${h} des ${$} ${i[u][n]} est :<br> $${(0,o.qaf)(f[n],l)}${(0,o.t7m)(f[n],l)}$.<br>`,p+=(0,o.bk1)(1)+` Il y a ${f[t]} ${$} ${i[u][t]} et il y a ${l} ${$} possibles. La probabilité que son choix tombe sur l'${h} des ${$} ${i[u][t]} est :<br> $${(0,o.qaf)(f[t],l)}${(0,o.t7m)(f[t],l)}$.<br>`,p+=(0,o.bk1)(2)+` Il y a ${f[a]} ${$} ${i[u][a]}, donc il y a ${l} $-$ ${f[a]} $=$ ${l-f[a]} autres ${$} et il y a ${l} ${$} possibles. La probabilité que son choix ne tombe pas sur l'${h} des ${$} ${i[u][a]} est :<br> $${(0,o.qaf)(l-f[a],l)}${(0,o.t7m)(l-f[a],l)}$.<br>`,p+=(0,o.bk1)(3)+` La probabilité d'un événement est la somme des probabilités des issues qui le composent. Donc la probabilité que son choix tombe sur l'${h} des ${$} ${i[u][n]} ou ${i[u][t]} est :<br> $${(0,o.qaf)(f[n],l)}+${(0,o.qaf)(f[t],l)}=${(0,o.qaf)(f[t]+f[n],l)}${(0,o.t7m)(f[t]+f[n],l)}$.<br>`,-1==this.listeQuestions.indexOf(d)&&(this.listeQuestions.push(d),this.listeCorrections.push(p),m++),C++;(0,o.K1R)(this)}}},66969:(s,e,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(s){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>t})}}]);
//# sourceMappingURL=3534.a69d80e31ff81eed8946.js.map