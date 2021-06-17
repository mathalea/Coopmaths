(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7041,7567],{67567:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}t.r(i),t.d(i,{default:()=>s})},87041:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>o,default:()=>l});var s=t(67567),n=t(24477),r=t(41118),a=t(17199);const o="Simulation d’expériences aléatoires";function l(){s.default.call(this),this.titre=o,this.nb_questions=1,this.nb_questions_modifiable=!0,this.nb_cols=1,this.nb_cols_corr=1,this.pas_de_version_LaTeX=!1,this.pas_de_version_HMTL=!1,this.correction_detaillee_disponible=!0,this.correction_detaillee=!0,this.sup=1,this.sup2=1e4,this.sup3=!1,this.consigne='<center><a title="Diacritica, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dice_(typical_role_playing_game_dice).jpg"><img width="128" alt="Dice (typical role playing game dice)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dice_%28typical_role_playing_game_dice%29.jpg/128px-Dice_%28typical_role_playing_game_dice%29.jpg"></a></center>',this.nouvelle_version=function(){let e="",i="",t=2*(0,n.nSR)(1,5)+2,s=parseInt(this.sup2),o=new Array,l=0,c=new Array;this.liste_corrections=[],this.liste_questions=[];let u,h,p=["rouges","vertes","bleues","noires"],_=[(0,n.nSR)(2,5),(0,n.nSR)(2,5),(0,n.nSR)(2,5),(0,n.nSR)(2,5)],b=0;for(let e=0;e<4;e++)b+=_[e];switch(parseInt(this.sup)){case 1:if(u=(0,r.Pj)(1,t),i=`Chaque face a la même probabilité de sortir : $${u.texFraction}\\approx ${(0,n.bVz)(u.pourcentage)}\\%$.<br>`,e+=`On lance un dé à ${t} faces ${(0,n.zqk)(s)} fois.<br>On étudie les fréquences d'apparition de chaque face.<br>On obtient les résultats suivants : <br>`,this.sup3){for(let e=0;e<t;e++)o.push(0);for(let e=0;e<s;e++)o[(0,n.nSR)(1,t)-1]++;for(let e=0;e<t;e++)c[e]=[e,(0,n.n0o)(o[e]/s)]}else{let e=(0,n.nSR)(1,t);for(let e=0;e<t;e++)o.push(0);for(let e=0;e<t;e++)o.push(0);for(let e=0;e<s;e++)o[(0,n.nSR)(1,t)-1]++;l=3*o[e-1]/4,o[(0,n.nSR)(1,t,e)-1]+=l,o[e-1]-=l;for(let e=0;e<t;e++)c[e]=[e,(0,n.n0o)(o[e]/s)];i+="Ici, l'expérience montre qu'il y a quelque chose qui semble fausser cette équiprobabilité comme un dé truqué.<br>",i+=`En effet, la fréquence de la face $${e}$ est largement supérieur à $${(0,n.bVz)(u.pourcentage)}\\%$.`,console.log(o,l,e,t)}break;case 2:let a=(0,n.nSR)(1,4);if(e+="Des boules de différentes couleurs sont placées dans une urne.<br>",e+=`Il y a $${_[0]}$ ${p[0]}, $${_[1]}$ ${p[1]}, $${_[2]}$ ${p[2]} et $${_[3]}$ ${p[3]}.<br>`,e+=`On effectue $${s}$ tirages avec remise.<br>`,e+="On étudie les fréquences d'apparition de chaque couleur.<br>On obtient les résultats suivants : <br>",u=(0,r.Pj)(_[a-1],b),this.sup3){t=4;for(let e=0;e<t;e++)o.push(0);for(let e=0;e<s;e++)h=(0,n.nSR)(1,b),h<=_[0]?o[0]++:h<=_[0]+_[1]?o[1]++:h<=_[0]+_[1]+_[2]?o[2]++:o[3]++;for(let e=0;e<t;e++)c[e]=[e,(0,n.n0o)(o[e]/s)]}else{t=4;for(let e=0;e<t;e++)o.push(0);for(let e=0;e<s;e++)h=(0,n.nSR)(0,b-1),h<_[0]?o[0]++:h<_[0]+_[1]?o[1]++:h<_[0]+_[1]+_[2]?o[2]++:o[3]++;l=3*o[a-1]/4,o[(0,n.nSR)(1,4,a)-1]+=l,o[a-1]-=l;for(let e=0;e<t;e++)c[e]=[e,(0,n.n0o)(o[e]/s)];i+="Ici, l'expérience montre qu'il y a quelque chose qui semble fausser cette équiprobabilité comme des boules discernables au toucher.<br>",i+=`En effet, la fréquence des boules ${p[a-1]} est largement supérieur à $${u.texFraction}\\approx ${(0,n.bVz)(u.pourcentage)}\\%$.`}}switch(parseInt(this.sup)){case 1:e+="$\\begin{array}{|l|"+"c|".repeat(t)+"}\n",e+="\\hline\n",e+="\\text{Numéro de la face}";for(let i=0;i<t;i++)e+=` & \\textbf{\\text{${i+1}}}`;e+="\\\\\\hline\n",e+="\\text{Fréquence d'apparition}";for(let i=0;i<t;i++)e+=` & \\text{${(0,n.bVz)(100*c[i][1],1)}} \\% `;if(e+="\\\\\\hline\n",e+="\\end{array}\n$",e+="<br>",this.correction_detaillee){let i=10,s=(0,a.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:1/i,yThickDistance:1*i,yMax:40,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"fréquences en %"}),n=[];for(let e=0;e<t;e++)n.push((0,a.rdJ)((s.xMax-s.xMin)/t*(e+.5),10*c[e][1],e+1),{unite:1/i});e+=(0,a.iR9)({xmin:-1,xmax:11,ymin:-4,ymax:5.5,pixelsParCm:30,scale:1},s,n)}break;case 2:e+="$\\begin{array}{|l|"+"c|".repeat(t)+"}\n",e+="\\hline\n",e+="\\text{Couleur de la boule}";for(let i=0;i<t;i++)e+=` & \\textbf{\\text{${p[i].substring(0,p[i].length-1)}}}`;e+="\\\\\\hline\n",e+="\\text{Fréquence d'apparition}";for(let i=0;i<t;i++)e+=` & \\text{${(0,n.bVz)(100*c[i][1],1)}} \\%`;if(e+="\\\\\\hline\n",e+="\\end{array}\n$",e+="<br>",this.correction_detaillee){let i=10,s=(0,a.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:1/i,yThickDistance:1*i,yMax:55,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"fréquences en %"}),n=[];for(let e=0;e<t;e++)n.push((0,a.rdJ)((s.xMax-s.xMin)/t*(e+.5),10*c[e][1],p[e]),{unite:1/i});e+=(0,a.iR9)({xmin:-1,xmax:12,ymin:-4,ymax:7,pixelsParCm:30,scale:1},s,n)}}this.liste_questions.push(e),this.liste_corrections.push(i),(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Type d'expérience",2,"1 : Tirage de dés\n 2 : Tirage dans une urne"],this.besoin_formulaire2_texte=["Nombre de tirages","Taper un nombre entier : 10000"],this.besoin_formulaire3_case_a_cocher=["Équiprobabilité",!0]}}}]);