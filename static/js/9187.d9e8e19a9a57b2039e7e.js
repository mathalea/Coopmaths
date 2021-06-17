(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9187,6969],{39187:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>l,default:()=>r});var $=i(66969),s=i(55339);const l="Puissances de 10 et préfixes kilo, méga, giga, téra";function r(e){$.default.call(this),this.titre=l,this.consigne="Compléter",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.video="",this.correction_detaille_disponible=!0,this.correctionDetaillee=!!sortieHtml,this.boutonAide=(0,s.FiW)(e,"Téra : mille-milliards $\\times10^{12}$<br>\nGiga : milliard $\\times10^9$<br>\nMéga : millions $\\times10^6$<br>\nkilo : mille $\\times10^{3}$<br>\nmilli : millième $\\times10^{-3}$<br>\nmicro : millionième $\\times10^{-6}$<br>\nnano : milliardième $\\times10^{-9}$<br>\n","Signification des préfixes"),this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=(0,s.SRM)(["m>km","u>M","u>G","g>t","M>G","M>T","G>T","m>mm","m>um","m>nm"],this.nbQuestions),t=(0,s.SRM)(["div","fois"],this.nbQuestions);for(let i,$,l,r,o,m=0,n=0;m<this.nbQuestions&&n<50;){switch(i=(0,s.q$q)([(0,s.n0o)((0,s.nSR)(1,9)+(0,s.nSR)(1,9)/10),(0,s.n0o)((0,s.nSR)(11,99)+(0,s.nSR)(1,9)/10+(0,s.nSR)(1,9)/100),(0,s.n0o)((0,s.nSR)(11,999)+(0,s.nSR)(1,9)/10)],(0,s.n0o)((0,s.nSR)(1e4,99999)/100)),r="",o="",e[m]){case"m>km":$=(0,s.nSR)(6,12),"div"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{km}$`,this.correctionDetaillee&&(o+="Il faut $1~000$ m pour 1 km, on va donc diviser par $1~000$, c'est à dire multiplier par $10^{-3}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}\\times10^{${$-3}}~\\text{km}$`),"fois"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{km} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{m}$`,this.correctionDetaillee&&(o+="$1~\\text{km}=1~000~\\text{km}$, on va donc multiplier par $1~000$, c'est à dire multiplier par $10^{3}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{km} = ${(0,s.euh)(i)}\\times10^{${$+3}}~\\text{m}$`);break;case"u>M":$=(0,s.nSR)(11,20),l=(0,s.q$q)([["W","watts"],["Wh","watts-heure"]]),"div"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{M${l[0]}}$`,this.correctionDetaillee&&(o+=`Il faut 1 million de ${l[1]} pour 1 M${l[0]}, on va donc diviser par 1 million, c'est à dire multiplier par $10^{-6}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$-6}}~\\text{M${l[0]}}$`),"fois"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{${l[0]}}$`,this.correctionDetaillee&&(o+=`1 M${l[0]} c'est un million de ${l[1]}, on va donc multiplier par 1 million, c'est à dire multiplier par $10^{6}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$+6}}~\\text{${l[0]}}$`);break;case"u>G":l=(0,s.q$q)([["W","watts"],["Wh","watts-heure"]]),"div"==t[m]&&($=(0,s.nSR)(13,20),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{G${l[0]}}$`,this.correctionDetaillee&&(o+=`Il faut 1 milliard de ${l[1]} pour 1 G${l[0]}, on va donc diviser par 1 milliard, c'est à dire multiplier par $10^{-9}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$-9}}~\\text{G${l[0]}}$`),"fois"==t[m]&&($=(0,s.nSR)(4,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{${l[0]}}$`,this.correctionDetaillee&&(o+=`1 G${l[0]} c'est un milliard de ${l[1]}, on va donc multiplier par 1 milliard, c'est à dire multiplier par $10^{9}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$+9}}~\\text{${l[0]}}$`);break;case"g>t":"div"==t[m]&&($=(0,s.nSR)(13,20),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{g} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{t}$`,this.correctionDetaillee&&(o+="Il faut 1 million de grammes pour 1 tonne, on va donc diviser par 1 million, c'est à dire multiplier par $10^{-6}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{g} = ${(0,s.euh)(i)}\\times10^{${$-6}}~\\text{t}$`),"fois"==t[m]&&($=(0,s.nSR)(4,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{t} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{g}$`,this.correctionDetaillee&&(o+="Une tonne c'est un million de grammes, on va donc multiplier par 1 million, c'est à dire multiplier par $10^{6}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{t} = ${(0,s.euh)(i)}\\times10^{${$+6}}~\\text{g}$`);break;case"M>G":l=(0,s.q$q)([["W","watts"],["Wh","watts-heure"]]),"div"==t[m]&&($=(0,s.nSR)(8,12),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{G${l[0]}}$`,this.correctionDetaillee&&(o+=`Il faut mille-millions de ${l[1]} pour faire 1 milliard de ${l[1]}, on va donc diviser par mille, c'est à dire multiplier par $10^{-3}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$-3}}~\\text{G${l[0]}}$`),"fois"==t[m]&&($=(0,s.nSR)(4,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{M${l[0]}}$`,this.correctionDetaillee&&(o+=`Un milliard de ${l[1]} c'est mille-millions de ${l[1]}, on va donc multiplier par mille, c'est à dire multiplier par $10^{3}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$+3}}~\\text{M${l[0]}}$`);break;case"M>T":l=(0,s.q$q)([["W","watts"],["Wh","watts-heure"]]),"div"==t[m]&&($=(0,s.nSR)(9,15),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{T${l[0]}}$`,this.correctionDetaillee&&(o+=`Il faut mille  méga-${l[1]} pour faire un giga-${l[1]} et mille giga-${l[1]} pour faire un téra-${l[1]}, on va donc diviser par un million, c'est à dire multiplier par $10^{-6}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{M${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$-6}}~\\text{T${l[0]}}$`),"fois"==t[m]&&($=(0,s.nSR)(4,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{T${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{M${l[0]}}$`,this.correctionDetaillee&&(o+=`Un téra-${l[1]} c'est mille giga-${l[1]} donc un million de méga-${l[1]}, on va donc multiplier par un million, c'est à dire multiplier par $10^{6}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{T${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$+6}}~\\text{M${l[0]}}$`);break;case"G>T":l=(0,s.q$q)([["W","watts"],["Wh","watts-heure"]]),"div"==t[m]&&($=(0,s.nSR)(8,12),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{T${l[0]}}$`,this.correctionDetaillee&&(o+=`Il faut mille-milliards de ${l[1]} pour faire 1 T${l[0]}, on va donc diviser par mille, c'est à dire multiplier par $10^{-3}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{G${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$-3}}~\\text{T${l[0]}}$`),"fois"==t[m]&&($=(0,s.nSR)(4,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{T${l[0]}} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{G${l[0]}}$`,this.correctionDetaillee&&(o+=`Un téra-${l[1]} c'est mille-milliards de ${l[1]}, on va donc multiplier par mille, c'est à dire multiplier par $10^{3}$.<br>`),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{T${l[0]}} = ${(0,s.euh)(i)}\\times10^{${$+3}}~\\text{G${l[0]}}$`);break;case"m>mm":$=(0,s.nSR)(6,12),"div"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{mm} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{m}$`,this.correctionDetaillee&&(o+="Il faut $1~000$ mm pour 1 m, on va donc diviser par $1~000$, c'est à dire multiplier par $10^{-3}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{mm} = ${(0,s.euh)(i)}\\times10^{${$-3}}~\\text{m}$`),"fois"==t[m]&&(r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{mm}$`,this.correctionDetaillee&&(o+="$1~\\text{m}=1~000~\\text{mm}$, on va donc multiplier par $1~000$, c'est à dire multiplier par $10^{3}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}\\times10^{${$+3}}~\\text{mm}$`);break;case"m>um":"div"==t[m]&&($=(0,s.nSR)(3,10),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\mu\\text{m} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{m}$`,this.correctionDetaillee&&(o+="Il faut un million de $\\mu\\text{m}$ pour 1 m, on va donc diviser par un million, c'est à dire multiplier par $10^{-6}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\mu\\text{m} = ${(0,s.euh)(i)}\\times10^{${$-6}}~\\text{m}$`),"fois"==t[m]&&($=-1*(0,s.nSR)(3,10,[6]),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\mu\\text{m}$`,this.correctionDetaillee&&(o+="Un mètre équivaut à un million de micro-mètres, on va donc multiplier par un million, c'est à dire multiplier par $10^{6}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}\\times10^{${$+6}}~\\mu\\text{m}$`);break;case"m>nm":"div"==t[m]&&($=(0,s.nSR)(3,8),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{nm} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{m}$`,this.correctionDetaillee&&(o+="Il faut un milliard de nano-mètres pour 1 m, on va donc diviser par un milliard, c'est à dire multiplier par $10^{-9}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{nm} = ${(0,s.euh)(i)}\\times10^{${$-9}}~\\text{m}$`),"fois"==t[m]&&($=-1*(0,s.nSR)(3,12,[9,11]),r=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}~\\ldots\\ldots~\\text{nm}$`,this.correctionDetaillee&&(o+="Un mètre équivaut à un milliard de nano-mètres, on va donc multiplier par un milliard, c'est à dire multiplier par $10^{9}$.<br>"),o+=`$${(0,s.euh)(i)}\\times10^{${$}}~\\text{m} = ${(0,s.euh)(i)}\\times10^{${$+9}}~\\text{nm}$`)}-1==this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(o),m++),n++}(0,s.K1R)(this)}}},66969:(e,t,i)=>{"use strict";function $(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>$})}}]);
//# sourceMappingURL=9187.d9e8e19a9a57b2039e7e.js.map