"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[66360,17007],{66360:(A,e,t)=>{t.r(e),t.d(e,{titre:()=>s,default:()=>a});var i=t(17007),n=t(66170),r=t(30169),$=t(6293);const s="Déterminer une longueur grâce à la trigonométrie";function a(){i.default.call(this),this.titre=s,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.quatrieme=!1,this.sup=1,n.Do.isHtml?this.spacingCorr=3:this.spacingCorr=1.5,this.listePackages="tkz-euclide",this.typeExercice="MG32",this.nouvelleVersion=function(A){let e,t,i,s;this.boutonAide=(0,r.RGc)(A,"DYW-BTMFzd4","Trigonométrie (vidéo de digiSchool)"),this.dimensionsDivMg32=[700,500],this.listeQuestions=[],this.listeCorrections=[];const a=(0,r.nSR)(11,25),o=(0,r.Gag)(a);e=(0,r.nSR)(11,25,[a]);const l=(0,r.Gag)(e);t=(0,r.nSR)(11,25,[a,e]);const c=(0,r.Gag)(t);let h,g;1==this.sup&&(g=(0,r.q$q)([1,3,5])),2==this.sup&&(g=(0,r.q$q)([2,4,6])),3==this.sup&&(g=(0,r.nSR)(1,6)),this.quatrieme&&(g=(g-1)%2+1);const d=(0,r.q$q)([o+l+c,o+c+l,l+o+c,l+c+o,c+o+l,c+l+o]),B=Math.round(10*(5*Math.random()+1))/10,b=Math.round(10*(5*Math.random()+1))/10;h=Math.round((0,$.x_)(Math.atan(b/B)));const Q=Math.random()*Math.PI-Math.PI/2,u=Math.round(180*Q/Math.PI),m=B,w=b,E=(0,r.S1u)(B,1),p=(0,r.S1u)(b,1);let D=B/Math.cos(Math.atan(b/B));D=Math.round(10*D)/10;const f=(0,r.S1u)(D,1);if(s=`Dans le triangle $${d}$ rectangle en $${o}$ :<br>`,n.Do.isHtml){let A;A=u<0?"TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8ABQAAACBAQIGJiJxJngAAAAEAAAAWAAAAFwAAAA7##########w==":"TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAUAAAAgQEHcp2T0QTQAAAABAAAAFgAAABcAAAAO##########8=",i=`Dans la figure ci-dessous, le triangle $${d}$ est rectangle en $${o}$.<br>`,1==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${l+c}=${f}$ cm.<br>`,i+=`Calculer $${o+l}$.`),2==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${o+l}=${E}$ cm.<br>`,i+=`Calculer $${l+c}$.`),3==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${l+c}=${f}$ cm.<br>`,i+=`Calculer $${o+c}$.`),4==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${o+c}=${p}$ cm.<br>`,i+=`Calculer $${l+c}$.`),5==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${o+l}=${E}$ cm.<br>`,i+=`Calculer $${o+c}$.`),6==g&&(i+=`L'angle $\\widehat{${o+l+c}}$ mesure $${h}\\degree$, $${o+c}=${p}$ cm.<br>`,i+=`Calculer $${o+l}$.`),this.typeExercice="MG32",this.MG32codeBase64=A,this.mg32init=(A,e)=>{A.giveFormula2(e,"x2",w),A.giveFormula2(e,"x1",m),A.giveFormula2(e,"alphadeg",u),A.rename(e,"A",o),A.rename(e,"B",l),A.rename(e,"C",c),A.calculate(e),A.display(e)},i+=`<br>$\\footnotesize{\\textit{Le point \\thickspace ${o} peut être déplacé (si la figure est tronquée).}}$<br>`}else i="\\begin{minipage}{.7 \\linewidth} \t\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}",i+=`\n\t\\item Le triangle $${d}$ est rectangle en $${o}$~;`,1==g&&(i+=`\n\t\\item $${l+c}=${f}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${o+l}$ à 0,1 près. \\end{minipage}`),2==g&&(i+=`\n\t\\item $${o+l}=${E}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${l+c}$ à 0,1 près. \\end{minipage}`),3==g&&(i+=`\n\t\\item $${l+c}=${f}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${o+c}$ à 0,1 près. \\end{minipage}`),4==g&&(i+=`\n\t\\item $${o+c}=${p}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${l+c}$ à 0,1 près. \\end{minipage}`),5==g&&(i+=`\n\t\\item $${o+l}=${E}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${o+c}$ à 0,1 près. \\end{minipage}`),6==g&&(i+=`\n\t\\item $${o+c}=${p}~\\text{cm}$`,i+=`\n\t\\item L'angle $\\widehat{${o+l+c}}$~mesure~$${h}\\degree$.<br>`,i+=`\\end{itemize} \\bigskip\n\t  Calculer $${o+l}$ à 0,1 près. \\end{minipage}`),i+="\\begin{minipage}{0.3 \\linewidth}",i+="\n \\begin{tikzpicture}[scale=0.7]",i+="\n\t \\tkzDefPoints{0/0/"+o+","+m+"/0/B,0/"+w+"/C}",i+="\n\t \\tkzDefPointBy[rotation= center "+o+" angle "+u+"](B) \\tkzGetPoint{"+l+"}",i+="\n\t \\tkzDefPointBy[rotation= center "+o+" angle "+u+"](C) \\tkzGetPoint{"+c+"}",i+="\n\t \\tkzDrawPolygon("+o+","+l+","+c+")",i+="\n\t \\tkzDefPointBy[homothety=center "+o+" ratio 0.1]("+l+")\\tkzGetPoint{B}",i+="\n\t \\tkzDefPointBy[rotation= center "+o+" angle 90](B) \\tkzGetPoint{C}",i+="\n\t \\tkzDefPointBy[homothety=center "+o+" ratio 0.1414]("+l+")\\tkzGetPoint{A}",i+="\n\t \\tkzDefPointBy[rotation= center "+o+" angle 45](A) \\tkzGetPoint{A}",i+="\n\t \\tkzDrawPolygon("+o+",B,A,C)",u>0?(i+="\n\t \\tkzLabelPoints[below]("+o+")",i+="\n\t \\tkzLabelPoints[above right]("+l+")",i+="\n\t \\tkzLabelPoints[left]("+c+")"):(i+="\n\t \\tkzLabelPoints[left]("+o+")",i+="\n\t \\tkzLabelPoints[below left]("+l+")",i+="\n\t \\tkzLabelPoints[above right]("+c+")"),i+="\n \\end{tikzpicture}",i+="\\end{minipage}";1==g&&(s+=`Le cosinus de l'angle $\\widehat{${o+l+c}}$ est défini par :<br>`,s+=`$\\cos \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+l,l+c)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\cos\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(o+l,f)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${o+l}=${(0,r.BlK)("\\color{red}{1}",f,`\\cos\\left(${h}\\degree\\right)`)}$<br>`,s+=`Soit $${o+l}\\approx${E}$ cm.`),2==g&&(s+=`Le cosinus de l'angle $\\widehat{${o+l+c}}$ est défini par :<br>`,s+=`$\\cos \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+l,l+c)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\cos\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(E,l+c)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${l+c}=${(0,r.BlK)(`\\cos\\left(${h}\\degree\\right)`,E,"\\color{red}{1}")}$<br>`,s+=`Soit $${l+c}\\approx${f}$ cm.`),3==g&&(s+=`Le sinus de l'angle $\\widehat{${o+l+c}}$ est défini par :<br>`,s+=`$\\sin \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+c,l+c)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\sin\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(o+c,f)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${o+c}=${(0,r.BlK)("\\color{red}{1}",f,`\\sin\\left(${h}\\degree\\right)`)}$<br>`,s+=`Soit $${o+c}\\approx${p}$ cm.`),4==g&&(s=`Le sinus de l'angle $\\widehat{${o+l+c}}$ est défini par :<br>`,s+=`$\\sin \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+c,l+c)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\sin\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(p,l+c)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${l+c}=${(0,r.BlK)(`\\sin\\left(${h}\\degree\\right)`,p,"\\color{red}{1}")}$<br>`,s+=`Soit $${l+c}\\approx${f}$ cm.`),5==g&&(s=`La tangente de l'angle $\\widehat{${o+l+c}}$ est définie par :<br>`,s+=`$\\tan \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+c,o+l)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\tan\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(o+c,E)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${o+c}=${(0,r.BlK)("\\color{red}{1}",E,`\\tan\\left(${h}\\degree\\right)`)}$<br>`,s+=`Soit $${o+c}\\approx${p}$ cm.`),6==g&&(s=`La tangente de l'angle $\\widehat{${o+l+c}}$ est définie par :<br>`,s+=`$\\tan \\left(\\widehat{${o+l+c}}\\right)=${(0,r.qaf)(o+c,o+l)}$<br>`,s+="Avec les données numériques :<br>",s+=`$\\dfrac{\\tan\\left(${h}\\degree\\right)}{\\color{red}{1}}=${(0,r.qaf)(p,o+l)}$<br>`,s+="$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ \\acute{e}gaux~donc~ :}$<br>",s+=`$${o+l}=${(0,r.BlK)(`\\tan\\left(${h}\\degree\\right)`,p,"\\color{red}{1}")}$<br>`,s+=`Soit $${o+l}\\approx${E}$ cm.`),this.listeQuestions.push(i),this.listeCorrections.push(s),(0,r.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Calculs faciles \n 2 : Calculs moins faciles \n 3 : Mélange"]}},17007:(A,e,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(A){},this.questionJamaisPosee=function(A,...e){0===A&&(this.listeArguments=[]);let t="";for(const i of e)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>i})}}]);
//# sourceMappingURL=66360.29c8639ba8f5d0f9cb4d.js.map