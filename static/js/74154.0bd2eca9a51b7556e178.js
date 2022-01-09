"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[74154,98465,25523],{98465:(t,e,$)=>{$.r(e),$.d(e,{amcReady:()=>r,amcType:()=>a,titre:()=>l,default:()=>c});var s=$(25523),i=$(22380),n=$(25482),o=$(71250);const r=!0,a="AMCHybride",l="Démontrer que deux droites sont ou ne sont pas parallèles avec le théorème de Thalès";function c(){s.default.call(this),this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,i.Do.isHtml?this.spacingCorr=3.5:this.spacingCorr=1,i.Do.isHtml?this.spacing=2:this.spacing=1.5,this.nbCols=1,this.nbColsCorr=1,this.quatrieme=!1,this.sup=1,this.sup2=1,this.listePackages="tkz-euclide",this.nouvelleVersion=function(t){this.autoCorrections=[],this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.nSR)(1,26),$=(0,n.Gag)(e),s=(0,n.nSR)(1,26,[e]),r=(0,n.Gag)(s),a=(0,n.nSR)(1,26,[e,s]),l=(0,n.Gag)(a),c=(0,n.nSR)(1,26,[e,s,a]),m=(0,n.Gag)(c),u=(0,n.nSR)(1,26,[e,s,a,c]),d=(0,n.Gag)(u);let h,b,p=(0,n.nSR)(2,4),g=(0,n.nSR)(3,5),f=(0,n.nSR)(5,6),y=(0,n.nSR)(-2,1),D=(0,n.n0o)((0,n.nSR)(2,8)*(0,n.nSR)(-1,1,[0])/10);h=1===parseInt(this.sup2)?D:3===parseInt(this.sup2)?D*(1+.1*(0,n.nSR)(0,1)):D*(1+.1*(0,n.nSR)(-1,1,0)),this.quatrieme&&(D=(0,n.WnP)(D),h=(0,n.WnP)(h));let M=Math.round(Math.sqrt(p*p+g*g)),k=Math.round(Math.sqrt(f*f+y*y));for(;M===k;)p=(0,n.nSR)(2,4),g=(0,n.nSR)(3,5),f=(0,n.nSR)(5,6),y=(0,n.nSR)(-2,1),M=Math.round(Math.sqrt(p*p+g*g)),k=Math.round(Math.sqrt(f*f+y*y));const C=(0,n.vbX)(k*(0,n.WnP)(D),1),_=(0,n.vbX)(M*(0,n.WnP)(h),1);let x,q,R;D<0?(x=(0,n.n0o)(k+C),b=(0,n.n0o)(M+_)):(x=(0,n.n0o)(k-C),b=(0,n.n0o)(M-_));const v=(0,n.euh)(k),I=(0,n.euh)(M),S=(0,n.euh)(C),E=(0,n.euh)(_),z=(0,n.euh)(b),P=(0,n.euh)(x),B=(0,o.xmu)(0,0),L=(0,o.xmu)(p,g),A=(0,o.xmu)(f,y),F=(0,o.R_h)(B,L,A);F.id=`M2D_${t}_t1`;const T=(0,o.xcw)(L,B,D),N=(0,o.xcw)(A,B,D),Q=(0,o.R_h)(B,T,N);Q.id=`M2D_${t}_t2`;const O=(0,o.T2s)(T,N,-.5),w=(0,o.T2s)(N,T,-.5),W=(0,o.QNZ)(m,O,"milieu","black",1,"middle",!0),X=(0,o.QNZ)(d,w,"milieu","black",1,"middle",!0),G=(0,o.T2s)(A,L,-.5),K=(0,o.T2s)(L,A,-.5),H=(0,o.QNZ)(l,G,"milieu","black",1,"middle",!0),Z=(0,o.QNZ)(r,K,"milieu","black",1,"middle",!0),J=Math.min(B.x,L.x,A.x,T.x,N.x)-1,V=Math.max(B.x,L.x,A.x,T.x,N.x)+1,j=Math.min(B.y,L.y,A.y,T.y,N.y)-1,U=Math.max(B.y,L.y,A.y,T.y,N.y)+1;let Y;if(D<0){const t=(0,o.Ncz)(N,B,L)/2,e=(0,o.T2s)(B,N,.5);Y=(0,o.Wnp)(e,B,t)}else Y=(0,o.T2s)(B,N,-.5);const tt=(0,o.QNZ)($,Y);if(i.Do.isHtml){1===parseInt(this.sup)?(q=`Dans la figure ci-dessous, $${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${$+d}=${S}$ cm et $${$+m}=${E}$ cm.<br>`,R=""):2===parseInt(this.sup)?(q=`Dans la figure ci-dessous, $${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${l+d}=${P}$ cm et $${r+m}=${z}$ cm.<br>`,R="",D>0?(R+=`On sait que $${$+d}=${$+l}-${l+d}=${v}-${P}=${S}$ cm.<br>`,R+=`On sait aussi que $${$+m}=${$+r}-${r+m}=${I}-${z}=${E}$ cm.<br>`):(R+=`On sait que $${$+d}=${l+d}-${$+l}=${P}-${v}=${S}$ cm.<br>`,R+=`On sait aussi que $${$+m}=${r+m}-${$+r}=${z}-${I}=${E}$ cm.<br>`)):1===(0,n.nSR)(1,2)?(q=`$${$}$, $${r}$ et $${l}$ sont trois point distincts. $${m} \\in [${$+r}]$ et $${d} \\in [${$+l}]$. <br> $${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${$+m}=${E}$ cm et $${$+d}=${S}$ cm.<br>`,R=""):(q=`Les points $${r}$, $${$}$, $${m}$ et $${l}$, $${$}$, $${d}$ sont alignés dans cet ordre.<br>`,q+=`$${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${$+m}=${E}$ cm et $${$+d}=${S}$ cm.<br>`,R=""),q+=`Les droites $(${r+l})$ et $(${m+d})$ sont-elles parallèles ?<br>`,R+=`D'une part, on a : $\\dfrac{${$+r}}{${$+m}}=\\dfrac{${I}}{${E}}=\\dfrac{${I}\\times${(0,n.b1)(S)}}{${E}\\times${(0,n.b1)(S)}}=\\dfrac{\n        ${(0,n.k$K)((0,n.vbX)(M*C,3))}}\n        {${E}\\times${S}}\n      $.`,R+=`<br>D'autre part, on a : $\\dfrac{${$+l}}{${$+d}}=\\dfrac{${v}}{${S}}=\\dfrac{${v}\\times${(0,n.b1)(E)}}{${S}\\times${(0,n.b1)(E)}}=\\dfrac{${(0,n.k$K)((0,n.vbX)(k*_,3))}}\n        {${E}\\times${S}}\n      $.`,D!==h?(R+=`<br>D'où : $\\dfrac{${$+r}}{${$+m}}\\not=\\dfrac{${$+l}}{${$+d}}$.<br>`,R+=`Donc d'après le théorème de Thales, les droites $(${r+l})$ et $(${m+d})$ ne sont pas parallèles.<br>`):(R+=`<br>D'où : $\\dfrac{${$+r}}{${$+m}}=\\dfrac{${$+l}}{${$+d}}$.<br>`,R+=D>0?`De plus, $${$}$, $${m}$, $${r}$ et $${$}$, $${d}$, $${l}$ sont alignés dans le même ordre.<br>`:`De plus, $${m}$, $${$}$, $${r}$ et $${d}$, $${$}$, $${l}$ sont alignés dans le même ordre.<br>`,R+=`Donc d'après la réciproque du théorème de Thales, les droites $(${r+l})$ et $(${m+d})$ sont parallèles.<br>`),3!==this.sup&&(q+=(0,o.iR9)({xmin:J,xMax:V,ymin:j,ymax:U},F,Q,tt,Z,H,W,X));const e=D<0?2:6,s=(0,n.LlP)(t,`if (document.getElementById('M2D_${t}_t1').dataset.colorie == undefined || (document.getElementById('M2D_${t}_t1').dataset.colorie == 'false')){\n          document.getElementById('M2D_${t}_t1').style.stroke = 'blue';\n          document.getElementById('M2D_${t}_t2').style.stroke = 'red';\n          document.getElementById('M2D_${t}_t1').style.opacity = .5;\n          document.getElementById('M2D_${t}_t1').style.strokeWidth = ${e};\n          document.getElementById('M2D_${t}_t2').style.opacity = 1;\n          document.getElementById('M2D_${t}_t2').style.strokeWidth = 2;\n          document.getElementById('M2D_${t}_t1').dataset.colorie = 'dejaEnCouleur';\n          document.getElementById('btnMathALEA2d_${t}').classList.add('active');\n        } else {\n          document.getElementById('M2D_${t}_t1').style.stroke = 'black';\n          document.getElementById('M2D_${t}_t2').style.stroke = 'black';\n          document.getElementById('M2D_${t}_t1').style.opacity = 1;\n          document.getElementById('M2D_${t}_t1').style.strokeWidth = 1;\n          document.getElementById('M2D_${t}_t2').style.opacity = 1;\n          document.getElementById('M2D_${t}_t2').style.strokeWidth = 1;\n          document.getElementById('M2D_${t}_t1').dataset.colorie = 'false';\n          document.getElementById('btnMathALEA2d_${t}').classList.remove('active');\n  \n        }\n        `,"Mettre en couleur les 2 triangles");i.Do.isHtml&&(q+=`<br><div style="display: inline-block;margin-top:20px;">${s}</div>`),this.listeQuestions.push(q),this.listeCorrections.push(R),this.sup<3?(0,n.K1R)(this):(this.typeExercice="",(0,n.FRy)(this))}else R="",1===parseInt(this.sup)?(q="\\begin{minipage}{.7 \\linewidth} \\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}",q+=`\n\t \\item ${$+r}=${I} cm \n\t \\item ${$+l}=${v} cm\n\t \\item ${$+d}=${S} cm\n\t \\item ${$+m}=${E} cm.<br>`,q+=`\\end{itemize}  Les droites (${r+l}) et (${m+d}) sont-elles parallèles ?<br>. \\end{minipage}`):2===parseInt(this.sup)?(q="\\begin{minipage}{.7 \\linewidth} \\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}",q+=`\n\t \\item ${$+r} = ${I} cm\n\t \\item ${$+l} = ${v} cm\n\t \\item ${l+d} = ${P} cm\n\t \\item ${r+m} = ${z} cm.<br>`,q+=`\\end{itemize}  Les droites (${r+l}) et (${m+d}) sont-elles parallèles ?<br>. \\end{minipage}`,D>0?(R+=`On sait que $${$+d}=${$+l}-${l+d}=${v}-${P}=${S}$ cm.<br>`,R+=`On sait aussi que $${$+m}=${$+r}-${r+m}=${I}-${z}=${E}$ cm.<br>`):(R+=`On sait que $${$+d}=${l+d}-${$+l}=${P}-${v}=${S}$ cm.<br>`,R+=`On sait aussi que $${$+m}=${r+m}-${$+r}=${z}-${I}=${E}$ cm.<br>`)):1===(0,n.nSR)(1,2)?(q=`$${$}$, $${r}$ et $${l}$ sont trois point distincts. $${m} \\in [${$+r}]$ et $${d} \\in [${$+l}]$ <br> $${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${$+m}=${E}$ cm et $${$+d}=${S}$ cm.<br>`,q+=`Les droites (${r+l}) et (${m+d}) sont-elles parallèles ?<br>`):(q=`Les points $${r}$, $${$}$, $${m}$ et $${l}$, $${$}$, $${d}$ sont alignés dans cet ordre.<br>`,q+=`$${$+r}=${I}$ cm, $${$+l}=${v}$ cm, $${$+m}=${E}$ cm et $${$+d}=${S}$ cm.<br>`,q+=`Les droites (${r+l}) et (${m+d}) sont-elles parallèles ?<br>`),this.sup<3&&(q+="\\begin{minipage}{0.3 \\linewidth}",q+="\n \\begin{tikzpicture}[scale=0.7]",q+="\n\t \\tkzDefPoints{0/0/"+$+","+f+"/"+y+"/"+l+","+p+"/"+g+"/"+r+"}",q+="\n\t \\tkzDrawPolygon("+$+","+r+","+l+")",q+="\n\t \\tkzDefPointBy[homothety=center "+$+" ratio "+D+"]("+r+")\t\\tkzGetPoint{"+m+"}",q+="\n\t \\tkzDefPointBy[homothety=center "+$+" ratio "+D+"]("+l+")\t\\tkzGetPoint{"+d+"}",q+="\n\t \\tkzDrawSegment("+m+","+d+")",D>0?(q+="\n\t \\tkzLabelPoints[left]("+$+")",q+="\n\t \\tkzLabelPoints[above left]("+r+","+m+")",q+="\n\t \\tkzLabelPoints[below]("+l+","+d+")"):(q+="\n\t \\tkzLabelPoints[below]("+$+")",q+="\n\t \\tkzLabelPoints[below]("+l+","+m+")",q+="\n\t \\tkzLabelPoints[above]("+r+","+d+")",q+="\n\t \\tkzDrawPolygon("+$+","+m+","+d+")"),q+="\n \\end{tikzpicture}",q+="\\end{minipage}"),this.listeQuestions.push(q),R+=`D'une part on a $\\dfrac{${$+r}}{${$+m}}=\\dfrac{${I}}{${E}}=\\dfrac{${I}\\times${(0,n.b1)(S)}}{${E}\\times${(0,n.b1)(S)}}=${(0,n.qaf)((0,n.k$K)((0,n.vbX)(M*C,3)),(0,n.k$K)((0,n.vbX)(_*C,4)))}$`,R+=`<br>D'autre part on a $\\dfrac{${$+l}}{${$+d}}=\\dfrac{${v}}{${S}}=\\dfrac{${v}\\times${(0,n.b1)(E)}}{${S}\\times${(0,n.b1)(E)}}=${(0,n.qaf)((0,n.k$K)((0,n.vbX)(k*_,3)),(0,n.k$K)((0,n.vbX)(_*C,4)))}$`,D!==h?(R+=`<br>$\\dfrac{${$+r}}{${$+m}}\\not=\\dfrac{${$+l}}{${$+d}}$.<br>`,R+=`Donc d'après le théorème de Thales, les droites $(${r+l})$ et $(${m+d})$ ne sont pas parallèles.<br>`,this.autoCorrection=[{enonce:q,propositions:[{type:"AMCOpen",propositions:[{texte:R,statut:6,feedback:""}]},{type:"qcmMono",options:{ordered:!0},propositions:[{texte:"Oui",statut:!1},{texte:"Non",statut:!0},{texte:"Je ne sais pas",statut:!1}]}]}]):(R+=`<br>$\\dfrac{${$+r}}{${$+m}}=\\dfrac{${$+l}}{${$+d}}$.<br>`,R+=D>0?`$${$}$,$${m}$,$${r}$ et $${$}$,$${d}$,$${l}$ sont alignés dans le même ordre.<br>`:`$${m}$,$${$}$,$${r}$ et $${d}$,$${$}$,$${l}$ sont alignés dans le même ordre.<br>`,R+=`Donc d'après la réciproque du théorème de Thales, les droites $(${r+l})$ et $(${m+d})$ sont parallèles.<br>`,this.autoCorrection=[{enonce:q,propositions:[{type:"AMCOpen",propositions:[{texte:R,statut:6,feedback:""}]},{type:"qcmMono",options:{ordered:!0},propositions:[{texte:"Oui",statut:!0},{texte:"Non",statut:!1},{texte:"Je ne sais pas",statut:!1}]}]}]),this.listeCorrections.push(R),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3," 1 : Cas simple \n 2 : Complication \n 3 : Sans figure"],this.besoinFormulaire2Numerique=["Réciproque ou contraposée",3," 1 : Réciproque \n 2 : Contraposée \n 3 : Mélange"]}},74154:(t,e,$)=>{$.r(e),$.d(e,{titre:()=>i,default:()=>n});var s=$(98465);const i="Contrôler si deux droites sont parallèles";function n(){s.default.call(this),this.quatrieme=!0,this.titre=i}},25523:(t,e,$)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let $="";for(const s of e)void 0!==s&&($+=s.toString());return!(this.listeArguments.indexOf($)>-1)&&(this.listeArguments.push($),!0)}}$.r(e),$.d(e,{default:()=>s})}}]);
//# sourceMappingURL=74154.0bd2eca9a51b7556e178.js.map