(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1310,5216],{91310:(e,t,n)=>{"use strict";n.r(t),n.d(t,{titre:()=>r,default:()=>o});var i=n(75216),s=(n(89459),n(55339));const r="Utiliser la distance entre deux points dans un repère orthonormé";function o(){i.default.call(this),this.titre=r,this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,t=[1,2,3];1==this.sup&&(t=[1]),2==this.sup&&(t=[2,3]);let n=(0,s.SRM)(t,this.nbQuestions);for(let i,r,o,$,a,l,h,p,u,c,q,b,A,m,d,B,f=0,C=0;f<this.nbQuestions&&C<50;){switch(e=n[f],e){case 1:o=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),a=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),l=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),a==o&&$==l&&(a+=(0,s.nSR)(1,5)*(0,s.q$q)([-1,1])),c=(a-o)*(a-o),q=(l-$)*(l-$),u=c+q,d="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",d+=` $A\\left(${o};${$}\\right)$ et $B\\left(${a};${l}\\right)$`,d+="<br>Calculer la distance $AB$ en justifiant le calcul.",B="On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",B+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",B+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,s.PMY)(o)}\\right)^{2}+\\left(${l}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(c+q)}}$<br>`,1!=(0,s.uV4)(u)[0]&&(B+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(u)}$<br>`);break;case 2:o=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),i=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),r=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),a=o+i,l=$+r,h=o+r*(0,s.q$q)([-1,1]),p=$+i*(0,s.q$q)([-1,1]),c=(a-o)*(a-o),q=(l-$)*(l-$),u=c+q,b=(h-o)*(h-o),A=(p-$)*(p-$),m=b+A,d="Dans un repère orthonormé (O,I,J), on donne les points suivants :",d+=` $A\\left(${o};${$}\\right)$ ; $B\\left(${a};${l}\\right)$`,d+=`<br>Le point $C\\left(${h};${p}\\right)$ appartient-il au cercle de centre $A$ passant par $B$ ?`,B="Le point $C$ appartient au cercle de centre $A$ passant par $B$ si et seulement si $CA=CB.$",B+="<br>On calcule séparément donc ces deux distances :",B+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",B+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",B+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,s.PMY)(o)}\\right)^{2}+\\left(${l}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(c+q)}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(u)}$<br>`,B+=`De même : $AC=\\sqrt{\\left(${h}-${(0,s.PMY)(o)}\\right)^{2}+\\left(${p}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,B+=`$\\phantom{De même :       } AC=\\sqrt{${b}+${A}}$<br>`,B+=`$\\phantom{De même :       } AC=\\sqrt{${(0,s.euh)(b+A)}}$<br>`,1!=(0,s.uV4)(m)[0]&&(B+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,s.BSg)(m)}$<br>`),B+="On observe que $AC=AB$ donc le point $A$ est équidistant de $B$ et $C$.",B+="<br>Le point $C$ appartient bien au cercle de centre $A$ et passant par $B$.";break;case 3:o=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),i=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),r=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),a=o+i,l=$+r,h=o+r*(0,s.q$q)([-1,1])+(0,s.nSR)(1,3),p=$+i*(0,s.q$q)([-1,1]),c=(a-o)*(a-o),q=(l-$)*(l-$),u=c+q,b=(h-o)*(h-o),A=(p-$)*(p-$),m=b+A,d="Dans un repère orthonormé (O,I,J), on donne les points suivants :",d+=` $A\\left(${o};${$}\\right)$ ; $B\\left(${a};${l}\\right).$`,d+=`<br>Le point $C\\left(${h};${p}\\right)$ appartient-il au cercle de centre $A$ passant par $B$ ?`,B="Le point $C$ appartient au cercle de centre $A$ passant par $B$ si et seulement si $CA=CB.$",B+="<br>On calcule séparément donc ces deux distances :",B+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",B+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",B+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,s.PMY)(o)}\\right)^{2}+\\left(${l}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,B+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(c+q)}}$<br>`,1!=(0,s.uV4)(u)[0]&&(B+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(u)}$<br>`),B+=`De même : $AC=\\sqrt{\\left(${h}-${(0,s.PMY)(o)}\\right)^{2}+\\left(${p}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,B+=`$\\phantom{De même :       } AC=\\sqrt{${b}+${A}}$<br>`,B+=`$\\phantom{De même :       } AC=\\sqrt{${(0,s.euh)(b+A)}}$<br>`,1!=(0,s.uV4)(m)[0]&&(B+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,s.BSg)(m)}$<br>`),B+="On observe que $AC\\neq AB$ donc le point $C$ n'appartient pas au cercle de centre $A$ et passant par $B$"}-1===this.listeQuestions.indexOf(d)&&(this.listeQuestions.push(d),this.listeCorrections.push(B),f++),C++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Application directe de la formule 2 : Application en situation"]}},75216:(e,t,n)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}n.r(t),n.d(t,{default:()=>i})}}]);
//# sourceMappingURL=1310.b25e9998b044d5bedf19.js.map