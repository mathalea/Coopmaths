(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5605,5216],{55605:(t,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>n,default:()=>o});var $=i(75216),s=i(89459),r=i(55339);const n="Équation du premier degré (utilisant la distributivité)";function o(){$.default.call(this),this.titre=n,this.consigne="Résoudre les équations suivantes",this.spacing=2,s.Do.isHtml?this.spacingCorr=3:this.spacingCorr=2,this.correctionDetailleeDisponible=!0,s.Do.isHtml||(this.correctionDetaillee=!1),this.nbQuestions=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let t=["ax+b=cx+d","k(ax+b)=cx+d","k-(ax+b)=cx+d"];t=(0,r.SRM)(t,this.nbQuestions);for(let e,i,$,s,n,o,u,b=0,a=0;b<this.nbQuestions&&a<50;)e=(0,r.nSR)(-9,9,0),i=(0,r.nSR)(-9,9,0),$=(0,r.nSR)(-9,9,0),s=(0,r.nSR)(-9,9,0),n=(0,r.nSR)(2,9),"ax+b=cx+d"==t[b]&&($==e&&($=(0,r.nSR)(1,9,[e])),!this.sup&&e<$&&($=(0,r.nSR)(1,9),e=(0,r.nSR)($+1,15)),o=`$${(0,r.wO4)(e)}x${(0,r.tPu)(i)}=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$`,u=o+"<br>",this.correctionDetaillee&&(u+=$>0?`On soustrait $${(0,r.wO4)($)}x$ aux deux membres.<br>`:`On ajoute $${(0,r.wO4)(-1*$)}x$ aux deux membres.<br>`),u+=`$${(0,r.wO4)(e)}x${(0,r.tPu)(i)}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}=${$}x+${s}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}$<br>`,u+=`$${(0,r.wO4)(e-$)}x${(0,r.tPu)(i)}=${s}$<br>`,this.correctionDetaillee&&(u+=i>0?`On soustrait $${i}$ aux deux membres.<br>`:`On ajoute $${-1*i}$ aux deux membres.<br>`),u+=`$${(0,r.wO4)(e-$)}x${(0,r.tPu)(i)}${(0,r.b1)((0,r.tPu)(-1*i))}=${s}${(0,r.b1)((0,r.tPu)(-1*i))}$<br>`,u+=`$${(0,r.wO4)(e-$)}x=${s-i}$<br>`,this.correctionDetaillee&&(u+=`On divise les deux membres par $${e-$}$.<br>`),u+=`$${(0,r.wO4)(e-$)}x${(0,r.b1)("\\div"+(0,r.PMY)(e-$))}=${s-i+(0,r.b1)("\\div"+(0,r.PMY)(e-$))}$<br>`,u+=`$x=${(0,r.qaf)(s-i,e-$)}$`,((0,r.Md9)((0,r.WnP)(s-i),(0,r.WnP)(e-$))>1||e-$<0)&&(u+=`<br>$x=${(0,r.xau)(s-i,e-$)}$`),u+=`<br> La solution est $${(0,r.xau)(s-i,e-$)}$.`),"k(ax+b)=cx+d"==t[b]&&($==n*e&&($=(0,r.nSR)(1,9,[e])),o=`$${n}(${(0,r.wO4)(e)}x${(0,r.tPu)(i)})=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$`,u=o+"<br>",this.correctionDetaillee&&(u+="On développe le membre de gauche.<br>"),u+=`$${n*e}x${(0,r.tPu)(n*i)}=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$<br>`,this.correctionDetaillee&&(u+=$>0?`On soustrait $${(0,r.wO4)($)}x$ aux deux membres.<br>`:`On ajoute $${(0,r.wO4)(-1*$)}x$ aux deux membres.<br>`),u+=`$${n*e}x${(0,r.tPu)(n*i)}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}=${$}x${(0,r.tPu)(s)}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}$<br>`,u+=`$${(0,r.wO4)(n*e-$)}x${(0,r.tPu)(n*i)}=${s}$<br>`,this.correctionDetaillee&&(u+=n*i>0?`On soustrait $${n*i}$ aux deux membres.<br>`:`On ajoute $${-n*i}$ aux deux membres.<br>`),u+=`$${(0,r.wO4)(n*e-$)}x${(0,r.tPu)(n*i)}${(0,r.b1)((0,r.tPu)(-n*i))}=${s}${(0,r.b1)((0,r.tPu)(-n*i))}$<br>`,u+=`$${(0,r.wO4)(n*e-$)}x=${s-n*i}$<br>`,this.correctionDetaillee&&(u+=`On divise les deux membres par $${n*e-$}$.<br>`),u+=`$${(0,r.wO4)(n*e-$)}x${(0,r.b1)("\\div"+(0,r.PMY)(n*e-$))}=${s-n*i+(0,r.b1)("\\div"+(0,r.PMY)(n*e-$))}$<br>`,u+=`$x=${(0,r.qaf)(s-n*i,n*e-$)}$`,((0,r.Md9)((0,r.WnP)(s-n*i),(0,r.WnP)(n*e-$))>1||n*e-$<0)&&(u+=`<br>$x=${(0,r.xau)(s-n*i,n*e-$)}$`),u+=`<br> La solution est $${(0,r.xau)(s-n*i,n*e-$)}$.`),"k-(ax+b)=cx+d"==t[b]&&($==-e&&($=(0,r.nSR)(-9,9,[0,e])),o=`$${n}-(${(0,r.wO4)(e)}x${(0,r.tPu)(i)})=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$`,u=o+"<br>",this.correctionDetaillee&&(u+="On développe le membre de gauche.<br>"),u+=`$${n}${(0,r.tPu)(-e)}x${(0,r.tPu)(-i)}=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$<br>`,u+=`$${(0,r.wO4)(-e)}x${(0,r.tPu)(n-i)}=${(0,r.wO4)($)}x${(0,r.tPu)(s)}$<br>`,e=-e,i=n-i,this.correctionDetaillee&&(u+=$>0?`On soustrait $${(0,r.wO4)($)}x$ aux deux membres.<br>`:`On ajoute $${(0,r.wO4)(-1*$)}x$ aux deux membres.<br>`),u+=`$${(0,r.wO4)(e)}x${(0,r.tPu)(i)}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}=${$}x+${s}${(0,r.b1)((0,r.mKt)(-1*$)+(0,r.wO4)((0,r.WnP)($))+"x")}$<br>`,u+=`$${(0,r.wO4)(e-$)}x${(0,r.tPu)(i)}=${s}$<br>`,this.correctionDetaillee&&(u+=i>0?`On soustrait $${i}$ aux deux membres.<br>`:`On ajoute $${-1*i}$ aux deux membres.<br>`),u+=`$${(0,r.wO4)(e-$)}x${(0,r.tPu)(i)}${(0,r.b1)((0,r.tPu)(-1*i))}=${s}${(0,r.b1)((0,r.tPu)(-1*i))}$<br>`,u+=`$${(0,r.wO4)(e-$)}x=${s-i}$<br>`,this.correctionDetaillee&&(u+=`On divise les deux membres par $${e-$}$.<br>`),u+=`$${(0,r.wO4)(e-$)}x${(0,r.b1)("\\div"+(0,r.PMY)(e-$))}=${s-i+(0,r.b1)("\\div"+(0,r.PMY)(e-$))}$<br>`,u+=`$x=${(0,r.qaf)(s-i,e-$)}$`,((0,r.Md9)((0,r.WnP)(s-i),(0,r.WnP)(e-$))>1||e-$<0)&&(u+=`<br>$x=${(0,r.xau)(s-i,e-$)}$`),u+=`<br> La solution est $${(0,r.xau)(s-i,e-$)}$.`),-1===this.listeQuestions.indexOf(o)&&(this.listeQuestions.push(o),this.listeCorrections.push(u),b++),a++;(0,r.K1R)(this)}}},75216:(t,e,i)=>{"use strict";function $(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>$})}}]);
//# sourceMappingURL=5605.1f6b6369acbee75daea6.js.map