(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3762,7567],{43762:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>o,default:()=>r});var t=e(67567),n=e(24477);const o="Instruction conditionelle";function r(){t.default.call(this),this.debug=!1,this.sup=1,this.nb_questions=2,this.titre=o,this.consigne="Donner les coordonnées de la position finale du lutin.",this.type_exercice="Scratch",this.nb_cols=2,this.nb_cols_corr=1,this.nb_questions_modifiable=!1,sortie_html,this.spacing=1,sortie_html,this.spacing_corr=1,this.liste_packages="scratch3",this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let i="La position initiale d'un lutin dans un repère est (0,0). Dans le programme, x désigne l'abscisse, et y désigne l'ordonnée d'un lutin. <br>";i+='Une variable a été créée, elle s\'appelle <code class="b">(var) :: ring</code>. <br>';let s=" ",e="",t="",o=1;this.sup2;let r=0,a=0;e+="\\medskip \\\\ \\begin{scratch} <br>",t+="<pre class='blocks'>";let l=(0,n.nSR)(1,10),c=(0,n.nSR)(1,10),u=(0,n.nSR)(1,10),h=(0,n.nSR)(1,10);e+="\\blockmove{aller à x: ovalnum{0} y: ovalnum{0}}",t+="quand le drapeau vert pressé <br>",t+="Aller à x:(0) y:(0) <br>",t+=`mettre (var) à (${l}) <br>`,t+=` si <(var) < [${c}]> alors <br>`,t+=" ajouter (100) à x <br>",this.sup>1&&(t+=` si <(var) > [${u}]> alors <br>`,t+=" ajouter (50) à x <br>",t+=" fin <br>"),t+=" sinon <br>",t+=" ajouter (70) à y <br>",this.sup>2&&(t+=` si <(var) > [${h}]> alors <br>`,t+=" ajouter (40) à y <br>",t+=" fin <br>"),t+=" fin <br>",t+="</pre>",e+="\\end{scratch}",i+=function(i,s){return sortie_html?i:"\\medskip \\\\ \\begin{scratch} <br>\\blockmove{aller à x: ovalnum{0} y: ovalnum{0}}\\end{scratch}"}(t),l<c?(s+=`Comme l'inégalité "${l} < ${c}" est vraie, alors on ajoute 100 à l'abscisse du lutin. <br>`,r+=100,this.sup>1&&(l>u?(s+=`Comme l'inégalité "${l} > ${u}" est vraie, alors on ajoute 50 à l'abscisse du lutin. <br>`,r+=50):s+=`Comme l'inégalité "${l} > ${u}" est fausse, alors on ne change pas l'abscisse du lutin. <br>`)):(s+=`Comme l'inégalité "${l} < ${c}" est fausse, alors on ajoute 70 à l'ordonnée du lutin. <br>`,a+=70,this.sup>2&&(l>h?(s+=`Comme l'inégalité "${l} > ${h}" est vraie, on ajoute 40 à l'ordonnée du lutin. <br>`,a+=40):s+=`Comme l'inégalité "${l} > ${h}" est fausse, alors on ne change pas l'ordonnée du lutin. <br>`)),s+=` La position finale est donc : (${r} ; ${a}).`,this.liste_questions.push(i),this.liste_corrections.push(s),(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Variante ",3,"1 : sans condition imbriquée\n2 : avec une condition imbriquée\n3 : avec deux conditions imbriquées"]}},67567:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}e.r(s),e.d(s,{default:()=>t})}}]);