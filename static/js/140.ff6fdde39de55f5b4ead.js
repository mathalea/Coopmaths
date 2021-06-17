(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[140,7567],{10140:($,e,r)=>{"use strict";r.r(e),r.d(e,{titre:()=>t,default:()=>s});var n=r(67567),i=r(24477);const t="Trouver l’erreur dans une résolution d’équation du premier degré";function s(){let $;n.default.call(this),this.debug=!1,this.sup=1,this.debug?this.nb_questions=5:this.nb_questions=3,this.titre=t,this.consigne="Trouver l'erreur dans les résolutions suivantes.<br>On ne demande pas de résoudre l'équation.",this.nb_cols=1,this.nb_cols_corr=1,sortie_html?this.spacing=3:this.spacing=2,sortie_html?this.spacing_corr=2.5:this.spacing_corr=1.5,this.nouvelle_version=function(){$=this.debug?[1,2,3,4,5]:(0,i.TVQ)([(0,i.q$q)([1,3]),(0,i.q$q)([2,4]),5]),this.liste_questions=[],this.liste_corrections=[];let e=(0,i.LG7)($,this.nb_questions);for(let $,s,o=0,a=0;o<this.nb_questions&&a<50;){let d=["x","t","u","v","w","y","z"],c=d[(0,i.nSR)(0,d.length-1)],u=(0,i.nSR)(-9,9,[-1,0,1]),v=(0,i.nSR)(-9,9,[-1,0,1]),g=(0,i.nSR)(-9,9,[-1,0,1,u,-u]),b=(0,i.nSR)(-9,9,[-1,0,1]);function r($){return $>0?{signe:"+",operation:"soustraire",chgt_signe:$}:{signe:"",operation:"ajouter",chgt_signe:-1*$}}function n($,e){return(0,i.tJd)($,e)[0]!=$}function t($,e){return n($,e)?1==(0,i.tJd)($,e)[1]?`$= ${(0,i.tJd)($,e)[0]}$`:0==(0,i.tJd)($,e)[0]?"$ = 0":`$= \\dfrac{${(0,i.tJd)($,e)[0]}}{${(0,i.tJd)($,e)[1]}}$`:1==(0,i.tJd)($,e)[1]?`$= ${(0,i.tJd)($,e)[0]}$`:0==(0,i.tJd)($,e)[0]?"$ = 0$":" "}let p=0==(0,i.nSR)(0,1)?{prenom:(0,i.nHh)(),pronom:"il"}:{prenom:(0,i.sTI)(),pronom:"elle"},l=[{pronom:p.pronom,prenom:p.prenom,a:u,b:v,c:g,d:b,inc:c,eq:`$${u}${c} ${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c}$`,et1:`${(0,i.rdv)("Étape 1 :")} $${u}${c} ${r(g).signe} ${g}${c} ${r(v).signe} ${v} = ${b} $`,et2:`${(0,i.rdv)("Étape 2 :")} $${u}${c} ${r(g).signe} ${g}${c} = ${b} ${r(-v).signe} ${-v} $`,et3:`${(0,i.rdv)("Étape 3 :")} $${u+g}${c} = ${b} ${r(-v).signe} ${-v} $`,et4:`${(0,i.rdv)("Étape 4 :")} $${c} = \\dfrac{${b} ${r(-v).signe} ${-v}}{${u+g}} $`,et_fin:`${(0,i.rdv)("Étape 5 :")} $${c} = \\dfrac{${b-v}}{${u+g}}$ ${t(b-v,u+g)}`,err:`\n            L'erreur se situe à l'étape 1.\n            <br>${p.prenom} "a fait passer" le terme $${r(g).signe} ${g}${c}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${r(g).operation} $${r(g).chgt_signe}${c}$ aux deux membres.            \n            `,eq_corr:`${(0,i.rdv)("Équation d'origine : ")} $${u}${c} ${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c}$`,eq_corr_et1:`\n          ${(0,i.rdv)("Étape 1 : ")} $${(0,i.X8v)(r(g).operation)}$ $${(0,i.X8v)(r(g).chgt_signe)}$${(0,i.Udc)(`$${c}$`)} aux deux membres. \n          <br> $${u}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} $${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} \n          <br>${(0,i.rdv)("Étape 2 : ")} On réduit.\n          <br> $${u-g}${c} ${r(v).signe} ${v} = ${b}$\n          `,eq_corr_et2:`\n          ${(0,i.rdv)("Étape 3 :")} $${(0,i.X8v)(r(v).operation)}$ $${(0,i.X8v)(r(v).chgt_signe)}$ aux deux membres. \n          <br> $${u-g}${c} ${r(v).signe} ${v} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)} = ${b} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)}$\n          <br>${(0,i.rdv)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${u-g}${c} = ${b-v}$\n          `,eq_corr_et3:`\n          ${(0,i.rdv)("Étape 5 :")} $${(0,i.X8v)("\\textbf{diviser par}")}$ $${(0,i.X8v)(u-g)}$ les deux membres.\n          <br> $\\dfrac{${u-g}${c}}{${(0,i.X8v)(u-g)}} = \\dfrac{${b-v}}{${(0,i.X8v)(u-g)}}$\n          <br>$${c} = \\dfrac{${b-v}}{${u-g}}$ ${t(b-v,u-g)}\n          `},{pronom:p.pronom,prenom:p.prenom,a:u,b:v,c:g,d:b,inc:c,eq:`$${u}${c} ${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c}$`,et1:`${(0,i.rdv)("Étape 1 :")} $${u}${c} ${r(-g).signe} ${-g}${c} ${r(v).signe} ${v} = ${b}$`,et2:`${(0,i.rdv)("Étape 2 :")} $${u}${c} ${r(-g).signe} ${-g}${c} = ${b} ${r(v).signe} ${v}$`,et3:`${(0,i.rdv)("Étape 3 :")} $${u-g}${c} = ${b} ${r(v).signe} ${v}$`,et4:`${(0,i.rdv)("Étape 4 :")} $${c} = \\dfrac{${b} ${r(v).signe} ${v}}{${u-g}} $`,et_fin:`${(0,i.rdv)("Étape 5 :")} $${c} = \\dfrac{${b+v}}{${u-g}}$ ${t(b+v,u-g)}`,err:`\n            L'erreur se situe à l'étape 2.\n            <br>${p.prenom} "a fait passer" le terme $${r(v).signe} ${v}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${r(v).operation} $${r(v).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,i.rdv)("Équation d'origine : ")} $${u}${c} ${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c}$`,eq_corr_et1:`\n          ${(0,i.rdv)("Étape 1 :")} $${(0,i.X8v)(r(g).operation)}$ $${(0,i.X8v)(r(g).chgt_signe)}$${(0,i.Udc)(`$${c}$`)} aux deux membres \n          <br> $${u}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} $ ${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} \n          <br>${(0,i.rdv)("Étape 2 : ")} On réduit.\n          <br> $${u-g}${c} ${r(v).signe} ${v} = ${b}$\n          `,eq_corr_et2:`\n          ${(0,i.rdv)("Étape 3 :")} $${(0,i.X8v)(r(v).operation)}$ $${(0,i.X8v)(r(v).chgt_signe)}$ aux deux membres \n          <br> $${u-g}${c} ${r(v).signe} ${v} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)} = ${b} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)}$\n          <br>${(0,i.rdv)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${u-g}${c} = ${b-v}$\n          `,eq_corr_et3:`\n          ${(0,i.rdv)("Étape 5 :")} $${(0,i.X8v)("\\textbf{diviser par}")}$ $${(0,i.X8v)(u-g)}$ les deux membres\n          <br> $\\dfrac{${u-g}${c}}{${(0,i.X8v)(u-g)}} = \\dfrac{${b-v}}{${(0,i.X8v)(u-g)}}$\n          <br>$${c} = \\dfrac{${b-v}}{${u-g}}$ ${t(b-v,u-g)}\n          `},{pronom:p.pronom,prenom:p.prenom,a:u,b:v,c:g,d:b,inc:c,eq:`$${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,et1:`${(0,i.rdv)("Étape 1 :")} $${u}${c} = ${g}${c} ${r(b).signe} ${b} ${r(-v).signe} ${-v}$`,et2:`${(0,i.rdv)("Étape 2 :")} $${u}${c} ${r(g).signe} ${g}${c} = ${b} ${r(-v).signe} ${-v}$`,et3:`${(0,i.rdv)("Étape 3 :")} $${u+g}${c} = ${b} ${r(-v).signe} ${-v}$`,et4:`${(0,i.rdv)("Étape 4 :")} $${c} = \\dfrac{${b} ${r(-v).signe} ${-v}}{${u+g}} $`,et_fin:`${(0,i.rdv)("Étape 5 :")} $${c} = \\dfrac{${b-v}}{${u+g}}$ ${t(b-v,u+g)}`,err:`\n            L'erreur se situe à l'étape 2.\n            <br>${p.prenom} "a fait passer" le terme $${r(g).signe} ${g}${c}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${r(g).operation} $${r(g).chgt_signe}${c}$ aux deux membres.            \n            `,eq_corr:`${(0,i.rdv)("Équation d'origine : ")} $${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,eq_corr_et1:`\n          ${(0,i.rdv)("Étape 1 :")} $${(0,i.X8v)(r(g).operation)}$ $${(0,i.X8v)(r(g).chgt_signe)}$${(0,i.Udc)(`$${c}$`)} aux deux membres \n          <br> $${u}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} $${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)}\n          <br>${(0,i.rdv)("Étape 2 : ")} On réduit.\n          <br> $${u-g}${c} ${r(v).signe} ${v} = ${b}$\n          `,eq_corr_et2:`\n          ${(0,i.rdv)("Étape 3 :")} $${(0,i.X8v)(r(v).operation)}$ $${(0,i.X8v)(r(v).chgt_signe)}$ aux deux membres \n          <br> $${u-g}${c} ${r(v).signe} ${v} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)} = ${b} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)}$\n          <br>${(0,i.rdv)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${u-g}${c} = ${b-v}$\n          `,eq_corr_et3:`\n          ${(0,i.rdv)("Étape 5 :")} $${(0,i.X8v)("\\textbf{diviser par}")}$ $${(0,i.X8v)(u-g)}$ les deux membres\n          <br> $\\dfrac{${u-g}${c}}{${(0,i.X8v)(u-g)}} = \\dfrac{${b-v}}{${(0,i.X8v)(u-g)}}$\n          <br>$${c} = \\dfrac{${b-v}}{${u-g}}$ ${t(b-v,u-g)}\n          `},{pronom:p.pronom,prenom:p.prenom,a:u,b:v,c:g,d:b,inc:c,eq:`$${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,et1:`${(0,i.rdv)("Étape 1 :")} $${u}${c} = ${g}${c} ${r(b).signe} ${b} ${r(v).signe} ${v}$`,et2:`${(0,i.rdv)("Étape 2 :")} $${u}${c} ${r(-g).signe} ${-g}${c} = ${b} ${r(v).signe} ${v}$`,et3:`${(0,i.rdv)("Étape 3 :")} $${u-g}${c} = ${b} ${r(v).signe} ${v}$`,et4:`${(0,i.rdv)("Étape 4 :")} $${c} = \\dfrac{${b} ${r(v).signe} ${v}}{${u-g}} $`,et_fin:`${(0,i.rdv)("Étape 5 :")} $${c} = \\dfrac{${b+v}}{${u-g}}$ ${t(b+v,u-g)}`,err:`\n            L'erreur se situe à l'étape 1.\n            <br>${p.prenom} "a fait passer" le terme $${r(v).signe} ${v}$ "de l'autre côté"\n            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.\n            <br>Ici il faut ${r(v).operation} $${r(v).chgt_signe}$ aux deux membres.            \n            `,eq_corr:`${(0,i.rdv)("Équation d'origine : ")} $${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,eq_corr_et1:`\n          ${(0,i.rdv)("Étape 1 :")} $${(0,i.X8v)(r(g).operation)}$ $${(0,i.X8v)(r(g).chgt_signe)}$${(0,i.Udc)(`$${c}$`)} aux deux membres \n          <br> $${u}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} $${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)}\n          <br>${(0,i.rdv)("Étape 2 : ")} On réduit.\n          <br> $${u-g}${c} ${r(v).signe} ${v} = ${b}$\n          `,eq_corr_et2:`\n          ${(0,i.rdv)("Étape 3 :")} $${(0,i.X8v)(r(v).operation)}$ $${(0,i.X8v)(r(v).chgt_signe)}$ aux deux membres \n          <br> $${u-g}${c} ${r(v).signe} ${v} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)} = ${b} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)}$\n          <br>${(0,i.rdv)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${u-g}${c} = ${b-v}$\n          `,eq_corr_et3:`\n          ${(0,i.rdv)("Étape 5 :")} $${(0,i.X8v)("\\textbf{diviser par}")}$ $${(0,i.X8v)(u-g)}$ les deux membres\n          <br> $\\dfrac{${u-g}${c}}{${(0,i.X8v)(u-g)}} = \\dfrac{${b-v}}{${(0,i.X8v)(u-g)}}$\n          <br>$${c} = \\dfrac{${b-v}}{${u-g}}$ ${t(b-v,u-g)}\n          `},{pronom:p.pronom,prenom:p.prenom,a:u,b:v,c:g,d:b,inc:c,eq:`$${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,et1:`${(0,i.rdv)("Étape 1 :")} $${u}${c} = ${g}${c} ${r(b).signe} ${b} ${r(-v).signe} ${-v}$`,et2:`${(0,i.rdv)("Étape 2 :")} $${u}${c} ${r(-g).signe} ${-g}${c} = ${b} ${r(-v).signe} ${-v}$`,et3:`${(0,i.rdv)("Étape 3 :")} $${u-g}${c} = ${b} ${r(-v).signe} ${-v}$`,et4:`${(0,i.rdv)("Étape 4 :")} $${c} = ${b} ${r(-v).signe} ${-v} - ${(0,i.Zlo)(u-g)} $`,et_fin:`${(0,i.rdv)("Étape 5 :")} $${c} = ${b-v-u+g}$`,err:`\n            L'erreur se situe à l'étape 4.\n            <br>${p.prenom} soustrait le coefficient de ${c} au lieu de diviser par ce coefficient.\n            <br>Or $${u-g}${c}$ représente la multiplication $${u-g}\\times ${c}$, et l'opération inverse de la multiplication c'est la division et non la soustraction.\n            <br>Ici il faut diviser les deux membres par $${u-g}$.            \n            `,eq_corr:`${(0,i.rdv)("Équation d'origine : ")} $${u}${c} ${r(v).signe} ${v} = ${g}${c} ${r(b).signe} ${b} $`,eq_corr_et1:`\n          ${(0,i.rdv)("Étape 1 :")} $${(0,i.X8v)(r(g).operation)}$ $${(0,i.X8v)(r(g).chgt_signe)}$${(0,i.Udc)(`$${c}$`)} aux deux membres \n          <br> $${u}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)} $${r(v).signe} ${v} = ${b} ${r(g).signe} ${g}${c} ${(0,i.X8v)(r(-g).signe)} ${(0,i.X8v)(-g)}$${(0,i.Udc)(`$${c}$`)}\n          <br>${(0,i.rdv)("Étape 2 : ")} On réduit.\n          <br> $${u-g}${c} ${r(v).signe} ${v} = ${b}$\n          `,eq_corr_et2:`\n          ${(0,i.rdv)("Étape 3 :")} $${(0,i.X8v)(r(v).operation)}$ $${(0,i.X8v)(r(v).chgt_signe)}$ aux deux membres \n          <br> $${u-g}${c} ${r(v).signe} ${v} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)} = ${b} ${(0,i.X8v)(r(-v).signe)} ${(0,i.X8v)(-v)}$\n          <br>${(0,i.rdv)("Étape 4 : ")} Réduction à nouveau.\n          <br> $${u-g}${c} = ${b-v}$\n          `,eq_corr_et3:`\n          ${(0,i.rdv)("Étape 5 :")} $${(0,i.X8v)("\\textbf{diviser par}")}$ $${(0,i.X8v)(u-g)}$ les deux membres\n          <br> $\\dfrac{${u-g}${c}}{${(0,i.X8v)(u-g)}} = \\dfrac{${b-v}}{${(0,i.X8v)(u-g)}}$\n          <br>$${c} = \\dfrac{${b-v}}{${u-g}}$ ${t(b-v,u-g)}\n          `}],_=[];for(let $=0;$<5;$++)_.push({enonce:`\n          ${l[$].prenom} doit résoudre l'équation suivante : ${l[$].eq}.\n          <br> Voilà ce qu'${l[$].pronom} écrit :\n          <br>${l[$].et1}\n          <br>${l[$].et2}\n          <br>${l[$].et3}\n          <br>${l[$].et4}\n          <br>${l[$].et_fin}\n        `,question:"",correction:`\n        ${l[$].err}\n        <br>\n        ${(0,i.rdv)("=== Voici une proposition de résolution détaillée : ===")}         \n        <br>${l[$].eq_corr}\n        <br>${l[$].eq_corr_et1}\n        <br>${l[$].eq_corr_et2}\n        <br>${l[$].eq_corr_et3}\n        `});switch(e[o]){case 1:$=`${_[0].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${_[0].correction}`,$+="\n             ",s=""):s=`${_[0].correction}`;break;case 2:$=`${_[1].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${_[1].correction}`,s=""):s=`${_[1].correction}`;break;case 3:$=`${_[2].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${_[2].correction}`,s=""):s=`${_[2].correction}`;break;case 4:$=`${_[3].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${_[3].correction}`,s=""):s=`${_[3].correction}`;break;case 5:$=`${_[4].enonce}`,this.debug?($+="<br>",$+=`<br> =====CORRECTION======<br>${_[4].correction}`,s=""):s=`${_[4].correction}`}-1==this.liste_questions.indexOf($)&&(this.liste_questions.push($),this.liste_corrections.push(s),o++),a++}(0,i.KsX)(this)}}},67567:($,e,r)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function($){},this.liste_packages=[]}r.r(e),r.d(e,{default:()=>n})}}]);