(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[327,7567],{50327:(e,t,n)=>{"use strict";n.r(t),n.d(t,{titre:()=>r,default:()=>$});var i=n(67567),s=n(24477);const r="Utiliser la distance entre deux points dans un repère orthonormé";function $(){i.default.call(this),this.titre=r,this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,t=[1,2,3];1==this.sup&&(t=[1]),2==this.sup&&(t=[2,3]);let n=(0,s.SRM)(t,this.nbQuestions);for(let t,i,r,$,o,a,l,p,h,u,c,q,b,A,m,d,B=0,f=0;B<this.nbQuestions&&f<50;){switch(e=n[B],e){case 1:r=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),o=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),a=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),o==r&&$==a&&(o+=(0,s.nSR)(1,5)*(0,s.q$q)([-1,1])),u=(o-r)*(o-r),c=(a-$)*(a-$),h=u+c,m="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",m+=` $A\\left(${r};${$}\\right)$ et $B\\left(${o};${a}\\right)$`,m+="<br>Calculer la distance $AB$ en justifiant le calcul.",d="On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${o}-${(0,s.PMY)(r)}\\right)^{2}+\\left(${a}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${u}+${c}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(u+c)}}$<br>`,1!=(0,s.uV4)(h)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(h)}$<br>`);break;case 2:r=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),t=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),i=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),o=r+t,a=$+i,l=r+i*(0,s.q$q)([-1,1]),p=$+t*(0,s.q$q)([-1,1]),u=(o-r)*(o-r),c=(a-$)*(a-$),h=u+c,q=(l-r)*(l-r),b=(p-$)*(p-$),A=q+b,m="Dans un repère orthonormé (O,I,J), on donne les points suivants :",m+=` $A\\left(${r};${$}\\right)$ ; $B\\left(${o};${a}\\right)$`,m+=`<br>Le point $C\\left(${l};${p}\\right)$ appartient-il au cercle de centre $A$ passant par $B$ ?`,d="Le point $C$ appartient au cercle de centre $A$ passant par $B$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${o}-${(0,s.PMY)(r)}\\right)^{2}+\\left(${a}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${u}+${c}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(u+c)}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(h)}$<br>`,d+=`De même : $AC=\\sqrt{\\left(${l}-${(0,s.PMY)(r)}\\right)^{2}+\\left(${p}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${q}+${b}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,s.euh)(q+b)}}$<br>`,1!=(0,s.uV4)(A)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,s.BSg)(A)}$<br>`),d+="On observe que $AC=AB$ donc le point $A$ est équidistant de $B$ et $C$.",d+="<br>Le point $C$ appartient bien au cercle de centre $A$ et passant par $B$.";break;case 3:r=(0,s.nSR)(0,5)*(0,s.q$q)([-1,1]),$=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),t=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),i=(0,s.nSR)(0,9)*(0,s.q$q)([-1,1]),o=r+t,a=$+i,l=r+i*(0,s.q$q)([-1,1])+(0,s.nSR)(1,3),p=$+t*(0,s.q$q)([-1,1]),u=(o-r)*(o-r),c=(a-$)*(a-$),h=u+c,q=(l-r)*(l-r),b=(p-$)*(p-$),A=q+b,m="Dans un repère orthonormé (O,I,J), on donne les points suivants :",m+=` $A\\left(${r};${$}\\right)$ ; $B\\left(${o};${a}\\right).$`,m+=`<br>Le point $C\\left(${l};${p}\\right)$ appartient-il au cercle de centre $A$ passant par $B$ ?`,d="Le point $C$ appartient au cercle de centre $A$ passant par $B$ si et seulement si $CA=CB.$",d+="<br>On calcule séparément donc ces deux distances :",d+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",d+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",d+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${o}-${(0,s.PMY)(r)}\\right)^{2}+\\left(${a}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${u}+${c}}$<br>`,d+=`$\\phantom{on applique la relation a l'enonce :        } AB=\\sqrt{${(0,s.euh)(u+c)}}$<br>`,1!=(0,s.uV4)(h)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AB=${(0,s.BSg)(h)}$<br>`),d+=`De même : $AC=\\sqrt{\\left(${l}-${(0,s.PMY)(r)}\\right)^{2}+\\left(${p}-${(0,s.PMY)($)}\\right)^{2}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${q}+${b}}$<br>`,d+=`$\\phantom{De même :       } AC=\\sqrt{${(0,s.euh)(q+b)}}$<br>`,1!=(0,s.uV4)(A)[0]&&(d+=`$\\phantom{on applique la relation a l'enonce :   } AC=${(0,s.BSg)(A)}$<br>`),d+="On observe que $AC\\neq AB$ donc le point $C$ n'appartient pas au cercle de centre $A$ et passant par $B$"}-1==this.listeQuestions.indexOf(m)&&(this.listeQuestions.push(m),this.listeCorrections.push(d),B++),f++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Application directe de la formule 2 : Application en situation"]}},67567:(e,t,n)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}n.r(t),n.d(t,{default:()=>i})}}]);