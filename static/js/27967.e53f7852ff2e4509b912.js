"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[27967,25523],{27967:(e,t,n)=>{n.r(t),n.d(t,{titre:()=>$,default:()=>s});var i=n(25523),r=n(25482);const $="Utiliser la distance entre deux points dans un repère orthonormé";function s(){i.default.call(this),this.titre=$,this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.sup=Number(this.sup),this.listeQuestions=[],this.listeCorrections=[];let e,t=[1,2,3,4,5];1===this.sup&&(t=[1]),2===this.sup&&(t=[2,3,4,5]);const n=(0,r.SRM)(t,this.nbQuestions);for(let i,$,s,o,a,l,p,u,h,c,q,m,A,b,B,d,g=0,C=0;g<this.nbQuestions&&C<50;){switch(e=n[g],e){case 1:s=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),o=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),a=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),l=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),a===s&&o===l&&(a+=(0,r.nSR)(1,5)*(0,r.q$q)([-1,1])),c=(a-s)*(a-s),q=(l-o)*(l-o),h=c+q,B="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",B+=` $A\\left(${s};${o}\\right)$ et $B\\left(${a};${l}\\right)$`,B+="<br>Calculer la distance $AB$ en justifiant le calcul.",d="On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${l}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,r.euh)(c+q)}}$<br>`,1!==(0,r.uV4)(h)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,r.BSg)(h)}$<br>`);break;case 2:s=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),o=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),i=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),a=s+i,l=o+$,p=s+$*(0,r.q$q)([-1,1]),u=o+i*(0,r.q$q)([-1,1]),c=(a-s)*(a-s),q=(l-o)*(l-o),h=c+q,m=(p-s)*(p-s),A=(u-o)*(u-o),b=m+A,B="Dans un repère orthonormé (O,I,J), on donne les points suivants :",B+=` $A\\left(${s};${o}\\right)$ ; $B\\left(${a};${l}\\right)$`,B+=`<br>Le point $C\\left(${p};${u}\\right)$ appartient-il au cercle de centre $A$ passant par $B$ ?`,d="Le point $C$ appartient au cercle de centre $A$ passant par $B$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${l}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,r.euh)(c+q)}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,r.BSg)(h)}$<br>`,d+=`De même : $AC=\\sqrt{\\left(${p}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${u}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${m}+${A}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,r.euh)(m+A)}}$<br>`,1!==(0,r.uV4)(b)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,r.BSg)(b)}$<br>`),d+="On observe que $AC=AB$ donc le point $A$ est équidistant de $B$ et $C$.",d+="<br>Le point $C$ appartient bien au cercle de centre $A$ et passant par $B$.";break;case 3:s=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),o=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),i=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),a=s+i,l=o+$,p=s+$*(0,r.q$q)([-1,1])+(0,r.nSR)(1,3),u=o+i*(0,r.q$q)([-1,1]),c=(a-s)*(a-s),q=(l-o)*(l-o),h=c+q,m=(p-s)*(p-s),A=(u-o)*(u-o),b=m+A,B="Dans un repère orthonormé (O,I,J), on donne les points suivants :",B+=` $A\\left(${s};${o}\\right)$ ; $B\\left(${a};${l}\\right).$`,B+=`<br>Le point $C\\left(${p};${u}\\right)$ appartient-il au cercle de centre $A$ et passant par $B$ ?`,d="Le point $C$ appartient au cercle de centre $A$ et passant par $B$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${l}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,r.euh)(c+q)}}$<br>`,1!==(0,r.uV4)(h)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,r.BSg)(h)}$<br>`),d+=`De même : $AC=\\sqrt{\\left(${p}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${u}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${m}+${A}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,r.euh)(m+A)}}$<br>`,1!==(0,r.uV4)(b)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,r.BSg)(b)}$<br>`),d+="On observe que $AC\\neq AB$ donc le point $C$ n'appartient pas au cercle de centre $A$ et passant par $B$";break;case 4:s=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),o=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),i=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),a=s+i,l=o+$,p=s+$*(0,r.q$q)([-1,1]),u=o+i*(0,r.q$q)([-1,1]),c=(a-s)*(a-s),q=(l-o)*(l-o),h=c+q,m=(p-s)*(p-s),A=(u-o)*(u-o),b=m+A,B="Dans un repère orthonormé (O,I,J), on donne les points suivants :",B+=` $A\\left(${s};${o}\\right)$ ; $B\\left(${a};${l}\\right)$`,B+=`<br>Le point $C\\left(${p};${u}\\right)$ appartient-il à la médiatrice du segment $[AB]$ ?`,d="Le point $C$ appartient à la médiatrice du segment $[AB]$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${l}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,r.euh)(c+q)}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,r.BSg)(h)}$<br>`,d+=`De même : $AC=\\sqrt{\\left(${p}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${u}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${m}+${A}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,r.euh)(m+A)}}$<br>`,1!==(0,r.uV4)(b)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,r.BSg)(b)}$<br>`),d+="On observe que $AC=AB$ donc le point $A$ est équidistant de $B$ et $C$.",d+="<br>Le point $C$ appartient bien à la médiatrice du segment $[AB]$.";break;case 5:s=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),o=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),i=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),a=s+i,l=o+$,p=s+$*(0,r.q$q)([-1,1])+(0,r.nSR)(1,3),u=o+i*(0,r.q$q)([-1,1]),c=(a-s)*(a-s),q=(l-o)*(l-o),h=c+q,m=(p-s)*(p-s),A=(u-o)*(u-o),b=m+A,B="Dans un repère orthonormé (O,I,J), on donne les points suivants :",B+=` $A\\left(${s};${o}\\right)$ ; $B\\left(${a};${l}\\right).$`,B+=`<br>Le point $C\\left(${p};${u}\\right)$ appartient-il à la médiatrice du segment $[AB]$ ?`,d="Le point $C$ appartient à la médiatrice du segment $[AB]$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${a}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${l}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${c}+${q}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,r.euh)(c+q)}}$<br>`,1!==(0,r.uV4)(h)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,r.BSg)(h)}$<br>`),d+=`De même : $AC=\\sqrt{\\left(${p}-${(0,r.PMY)(s)}\\right)^{2}+\\left(${u}-${(0,r.PMY)(o)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${m}+${A}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,r.euh)(m+A)}}$<br>`,1!==(0,r.uV4)(b)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,r.BSg)(b)}$<br>`),d+="On observe que $AC\\neq AB$ donc le point $C$ n'appartient pas à la médiatrice du segment $[AB]$"}this.questionJamaisPosee(g,s,o,a,l,e)&&(this.listeQuestions.push(B),this.listeCorrections.push(d),g++),C++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Application directe de la formule 2 : Application en situation"]}},25523:(e,t,n)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let n="";for(const i of t)void 0!==i&&(n+=i.toString());return!(this.listeArguments.indexOf(n)>-1)&&(this.listeArguments.push(n),!0)}}n.r(t),n.d(t,{default:()=>i})}}]);
//# sourceMappingURL=27967.e53f7852ff2e4509b912.js.map