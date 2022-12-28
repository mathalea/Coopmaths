"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36237,25523],{36237:(e,$,n)=>{n.r($),n.d($,{titre:()=>r,default:()=>a});var i=n(25523),t=n(25482),s=n(71250);const r="Déterminer une fonction affine à partir de deux images.";function a(){i.default.call(this),this.titre=r,this.consigne="Déterminer, en expliquant, l'expression de la fonctions affine $f$ vérifiant les conditions de l'énoncé :",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=3,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[];1===this.sup&&(e=[1]),2===this.sup&&(e=[2]),3===this.sup&&(e=[3]),4===this.sup&&(e=[1,2,3]);const $=(0,t.SRM)(e,this.nbQuestions);for(let n,i,r,a,o,u,f,c,b,x,l,d,h,m,p,q,v,C,O,g=0,A=0;g<this.nbQuestions&&A<50;){switch(O=$[g],C=(0,t.q$q)([-1,1]),m=(0,t.nSR)(1,5),m*=C,p=(0,t.nSR)(1,5),C=(0,t.q$q)([-1,1]),p*=C,f=(0,t.nSR)(1,5,[m]),C=(0,t.q$q)([-1,1]),f*=C,q=(0,t.nSR)(1,5),C=(0,t.q$q)([-1,1]),q*=C,v=m*p-m*q,u=m-f,O){case 1:n=` Déterminer l'expression algébrique de la fonction affine $f$ définie sur $\\mathbb R$, sachant que\n                        $f(${m})=${p}$ et que $f(${f})=${q}$.`,i=`On sait que $f$ est une fonction affine qui vérifie \n                        $f(${m})=${p}$ et $f(${f})=${q}$. <br>`,i+="Comme $f$ est une fonction affine, on sait d'après le cours qu'elle va s'écrire sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",i+="L'objectif est donc de déterminer $a$ et $b$.<br>",i+="Or, on sait d'après le cours, que dans ces conditions, avec $u\\neq v$, on a : ",i+="$a=\\dfrac{f(u)-f(v)}{u-v}.$<br>",i+=`On applique cette relation avec les données de l'énoncé : $u=${m}$ et  $v=${f}$ ,<br>`,i+="ce qui donne :  ",i+=`$a=\\dfrac{f(${m})-f(${f})}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p}-${(0,t.PMY)(q)}}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p-q}}{${m-f}}$<br>`,i+=`d'où : $a=${(0,t.xau)(p-q,m-f)}.$<br>`,p===q?(i+="$f$ est une fonction constante, cas particulier des fonctions affines.<br>",i+=`On a donc : $f(x)=${p}$`):(i+="On peut donc déjà déduire que la fonction $f$ s'écrit sous la forme : ",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+="On cherche $b$ et pour cela on peut utiliser au choix une des deux données de l'énoncé :<br>",i+=`On prend par exemple : $f(${m})=${p}$  <br>`,i+="Comme",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+=`On en déduit que :$f(${m})=${(0,t.xau)(p-q,m-f)} \\times ${m} +b=${p}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${p}-${(0,t.xau)(v,u)}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$<br> `,i+="On peut conclure que ",p-q==m-f&&((p*m-p*f-m*p+m*q)*(m-f)>0?i+=`$f(x)= x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:(p*m-p*f==m*p+m*q&&(i+="$f(x)= x.$<br>"),i+=`$f(x)= x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`)),p-q===-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)= -x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:m*q-p*f==0?"$f(x)= -x.$<br>":`$f(x)= -x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`),p-q!=m-f&&p-q!==-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)=${(0,t.xau)(p-q,m-f)}x+  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`:`$f(x)=${(0,t.xau)(p-q,m-f)}x  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`));break;case 2:o=(0,s.sYn)(),x=(0,t.nSR)(0,3)*(0,t.q$q)([-1,1]),d=m*x+p,l=(0,t.nSR)(0,3,[x])*(0,t.q$q)([-1,1]),m*l+p>9&&(l=(0,t.ZGd)(l,2)),m*l+p<-9&&(l=(0,t.ZGd)(l,2)),l===x&&(x+=1,l-=1),h=m*l+p,r=(0,s.xmu)(x,d,"A","left"),a=(0,s.xmu)(l,h,"B","left"),0===d&&(r=(0,s.xmu)(x,d,"A","above")),0===l&&(a=(0,s.xmu)(l,h,"B","right")),0===x&&(r=(0,s.xmu)(x,d,"A","right")),0===h&&(a=(0,s.xmu)(l,h,"B","above")),c=(0,s.L6P)(r,a,"red"),b=(0,s.BD1)(r,a),b.color="red",n="Déterminer, en détaillant les calculs, l'expression algébrique de la fonction affine $f$ dont la représentation<br>",n+=`graphique passe par les points $A(${x};${d})$ et $B(${l};${h})$ représentés ci-dessous :<br>`,n+=(0,s.iR9)({xmin:-6,ymin:-10,xmax:6,ymax:10},o,c,b),m=x,p=d,f=l,q=h,i=`Les points $A(${x};${d})$ et $B(${l};${h})$ appartiennent à la courbe représentative de $f$<br>`,i+=`Comme $A(${x};${d})\\in \\mathcal{C_f}$, on a  $f(${m})=${p}$  et comme $B(${l};${h})\\in \\mathcal{C_f}$, on a $f(${f})=${q}$ <br>`,i+="Comme $f$ est une fonction affine, on sait d'après le cours qu'elle va s'écrire sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",i+="L'objectif est donc de déterminer $a$ et $b$.<br>",i+="Or, on sait d'après le cours, que dans ces conditions, avec $u\\neq v$, on a : ",i+="$a=\\dfrac{f(u)-f(v)}{u-v}.$<br>",i+=`On applique cette relation avec les données de l'énoncé : $u=${m}$ et  $v=${f}$ ,<br>`,i+="ce qui donne : ",i+=`$a=\\dfrac{f(${m})-f(${f})}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p}-${(0,t.PMY)(q)}}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p-q}}{${m-f}}$<br>`,i+=`d'où : $a=${(0,t.xau)(p-q,m-f)}.$<br>`,p===q?(i+="$f$ est une fonction constante, cas particulier des fonctions affines.<br>",i+=`On a donc : $f(x)=${p}$`):(i+="On peut donc déjà déduire que la fonction $f$ s'écrit sous la forme : ",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+="On cherche $b$ et pour cela on peut utiliser au choix une des deux données de l'énoncé :<br>",i+=`On prend par exemple : $f(${m})=${p}$  <br>`,i+="Comme",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+=`On en déduit que :$f(${m})=${(0,t.xau)(p-q,m-f)} \\times ${m} +b=${p}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${p}-${(0,t.xau)(v,u)}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$<br> `,i+="On peut conclure que ",p-q==m-f&&((p*m-p*f-m*p+m*q)*(m-f)>0?i+=`$f(x)= x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:(p*m-p*f==m*p+m*q&&(i+="$f(x)= x.$<br>"),i+=`$f(x)= x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`)),p-q===-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)= -x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:m*q-p*f==0?"$f(x)= -x.$<br>":`$f(x)= -x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`),p-q!=m-f&&p-q!==-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)=${(0,t.xau)(p-q,m-f)}x+  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`:`$f(x)=${(0,t.xau)(p-q,m-f)}x  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`));break;case 3:x=(0,t.nSR)(0,3)*(0,t.q$q)([-1,1]),d=m*x+p,l=(0,t.nSR)(0,3,[x])*(0,t.q$q)([-1,1]),m*l+p>9&&(l=(0,t.ZGd)(l,2)),m*l+p<-9&&(l=(0,t.ZGd)(l,2)),l===x&&(x+=1,l-=1),h=m*l+p,r=(0,s.xmu)(x,d,"A","left"),a=(0,s.xmu)(l,h,"B","left"),0===d&&(r=(0,s.xmu)(x,d,"A","above")),0===l&&(a=(0,s.xmu)(l,h,"B","right")),0===x&&(r=(0,s.xmu)(x,d,"A","right")),0===h&&(a=(0,s.xmu)(l,h,"B","above")),n="Déterminer, en détaillant les calculs, l'expression algébrique de la fonction affine $f$ dont la représentation<br>",n+=`graphique passe par les points $A(${x};${d})$ et $B(${l};${h})$.<br>`,i=`Les points $A(${x};${d})$ et $B(${l};${h})$ appartiennent à la courbe représentative de $f$<br>`,i+=`Comme $A(${x};${d})\\in \\mathcal{C_f}$, on a  $f(${m})=${p}$  et comme $B(${l};${h})\\in \\mathcal{C_f}$, on a $f(${f})=${q}$ <br>`,i+="Comme $f$ est une fonction affine, on sait d'après le cours qu'elle va s'écrire sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",i+="L'objectif est donc de déterminer $a$ et $b$.<br>",i+="Or, on sait d'après le cours, que dans ces conditions, avec $u\\neq v$, on a :",i+="$a=\\dfrac{f(u)-f(v)}{u-v}.$<br>",i+=`On applique cette relation avec les données de l'énoncé : $u=${m}$ et  $v=${f}$ ,<br>`,i+="ce qui donne :",i+=`$a=\\dfrac{f(${m})-f(${f})}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p}-${(0,t.PMY)(q)}}{${m}-${(0,t.PMY)(f)}}=\\dfrac{${p-q}}{${m-f}}$<br>`,i+=`d'où : $a=${(0,t.xau)(p-q,m-f)}.$<br>`,p===q?(i+="$f$ est une fonction constante, cas particulier des fonctions affines.<br>",i+=`On a donc : $f(x)=${p}$`):(i+="On peut donc déjà déduire que la fonction $f$ s'écrit sous la forme : ",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+="On cherche $b$ et pour cela on peut utiliser au choix une des deux données de l'énoncé :<br>",i+=`On prend par exemple : $f(${m})=${p}$  <br>`,i+="Comme",(p-q)/(m-f)==1&&(i+="$f(x)= x +b.$<br>"),(p-q)/(m-f)==-1&&(i+="$f(x)= -x +b.$<br>"),p-q!=m-f&&p-q!==-m+f&&(i+=`   $f(x)=${(0,t.xau)(p-q,m-f)} x +b.$<br>`),i+=`On en déduit que :$f(${m})=${(0,t.xau)(p-q,m-f)} \\times ${m} +b=${p}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${p}-${(0,t.xau)(v,u)}$<br>`,i+=`$\\phantom{On en deduit que :}\\iff b=${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$<br> `,i+="On peut conclure que ",p-q==m-f&&((p*m-p*f-m*p+m*q)*(m-f)>0?i+=`$f(x)= x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:(p*m-p*f==m*p+m*q&&(i+="$f(x)= x.$<br>"),i+=`$f(x)= x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`)),p-q===-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)= -x +${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`:m*q-p*f==0?"$f(x)= -x.$<br>":`$f(x)= -x ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}.$<br>`),p-q!=m-f&&p-q!==-m+f&&(i+=(p*m-p*f-m*p+m*q)*(m-f)>0?`$f(x)=${(0,t.xau)(p-q,m-f)}x+  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`:`$f(x)=${(0,t.xau)(p-q,m-f)}x  ${(0,t.xau)(p*m-p*f-m*p+m*q,m-f)}$`))}this.questionJamaisPosee(g,C,m,p,f,q,v)&&(this.listeQuestions.push(n),this.listeCorrections.push(i),g++),A++}(0,t.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 :Avec deux images\n 2 : Avec deux points et un repère\n 3 : Avec deux points sans repère\n 4 : Mélange des cas précédents"]}},25523:(e,$,n)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...$){0===e&&(this.listeArguments=[]);let n="";for(const i of $)void 0!==i&&(n+=i.toString());return!(this.listeArguments.indexOf(n)>-1)&&(this.listeArguments.push(n),!0)}}n.r($),n.d($,{default:()=>i})}}]);
//# sourceMappingURL=36237.fdc4fb1a233b2926a275.js.map