(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5501,7567],{25501:(i,e,s)=>{"use strict";s.r(e),s.d(e,{amcReady:()=>r,titre:()=>$,default:()=>n});var t=s(67567),a=s(24477);const r=!0,$="Diviseur, multiple, divisible - Vrai ou faux";function n(){function i(i,e,s){let t;return 1==s&&(t=2==i?", car son chiffre des unités est $0$, $2$, $4$, $6$ ou $8$.":5==i?", car son chiffre des unités est $0$, ou $5$.":3==i||9==i?`, car la somme de ses chiffres est $${(0,a.Wyp)(e.toString())}=${(0,a.n0o)((0,a.Wyp)(e.toString()))}$ qui est divisible par $${i}$.`:`, car $${(0,a.FpM)(e)} = ${i}\\times ${(0,a.n0o)(e/i)}$.`),0==s&&(t=2==i?", car son chiffre des unités n'est pas $0$, $2$, $4$, $6$ ou $8$.":5==i?", car son chiffre des unités n'est pas $0$, ou $5$.":3==i||9==i?`, car la somme de ses chiffres est $${(0,a.Wyp)(e.toString())}=${(0,a.n0o)((0,a.Wyp)(e.toString()))}$ qui n'est pas divisible par $${i}$.`:`, car $${(0,a.FpM)(e)} = ${i}\\times ${Math.floor(e/i)}+ ${e%i}$.`),t}t.default.call(this),this.titre=$,this.consigne="Pour chaque affirmation, indiquer si elle est vraie ou fausse.",this.nb_questions=5,this.nb_cols=2,this.nb_cols_corr=2,this.sup=1,this.tailleDiaporama=100,this.video="",this.QCM_disponible=!0,this.ModeQCM=!1,this.nouvelle_version=function(){let e,s;this.QCM=["6N43-3",[],"Diviseur, multiple, divisible - Vrai ou faux",1,{ordered:!0,lastChoices:2}];let t="";t=sortie_html?"&emsp;":"\\qquad",this.liste_questions=[],this.liste_corrections=[];let r=["Ndiviseur","divisibleParN","multipleDeN","NdiviseurF","divisibleParNF","multipleDeNF","NdiviseurEnvers","divisibleParNEnvers","multipleDeNEnvers"];this.nb_questions<8&&(r=[(0,a.q$q)(["Ndiviseur","divisibleParN"]),"multipleDeN",(0,a.q$q)(["NdiviseurF","divisibleParNF"]),"multipleDeNF",(0,a.q$q)(["NdiviseurEnvers","divisibleParNEnvers","multipleDeNEnvers"])]);let $,n=(0,a._97)(r,this.nb_questions);1==this.sup&&($=[2,5]),2==this.sup&&($=[2,3,5,9]),3==this.sup&&($=[7,11,13,20,30,25]);let l=(0,a._97)($,this.nb_questions);for(let r,$,u,o,c=0,d=0;c<this.nb_questions&&d<50;){switch(u=l[c],o=(0,a.nSR)(199,999)*u,n[c]){case"Ndiviseur":r=`$${u}$ est un diviseur de $${(0,a.FpM)(o)}$.`,$=r.replace("."," ")+" : Vrai",$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[1,0,0];break;case"divisibleParN":r=`$${(0,a.FpM)(o)}$ est divisible par $${u}$.`,$=r.replace("."," ")+" : Vrai",$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[1,0,0];break;case"multipleDeN":r=`$${(0,a.FpM)(o)}$ est un multiple de $${u}$.`,$=r.replace("."," ")+" : Vrai",$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[1,0,0];break;case"NdiviseurF":o+=(0,a.nSR)(1,u-1),r=`$${u}$ est un diviseur de $${(0,a.FpM)(o)}$.`,$=r.replace("."," ")+" : Faux",$+=i(u,o,!1),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0];break;case"divisibleParNF":o+=(0,a.nSR)(1,u-1),r=`$${(0,a.FpM)(o)}$ est divisible par $${u}$.`,$=r.replace("."," ")+" : Faux",$+=i(u,o,!1),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0];break;case"multipleDeNF":o+=(0,a.nSR)(1,u-1),r=`$${(0,a.FpM)(o)}$ est un multiple de $${u}$.`,$=r.replace("."," ")+" : Faux",$+=i(u,o,!1),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0];break;case"NdiviseurEnvers":r=`$${(0,a.FpM)(o)}$ est un diviseur de $${u}$.`,$=r.replace("."," ")+" : Faux",$+=`, il faudrait plutôt dire $${u}$ est un diviseur de $${(0,a.FpM)(o)}$`,$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0];break;case"divisibleParNEnvers":r=`$${u}$ est divisible par $${(0,a.FpM)(o)}$.`,$=r.replace("."," ")+" : Faux",$+=`, il faudrait plutôt dire $${(0,a.FpM)(o)}$ est divisible par $${u}$`,$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0];break;case"multipleDeNEnvers":r=`$${u}$ est un multiple de $${(0,a.FpM)(o)}$.`,$=r.replace("."," ")+" : Faux",$+=`, il faudrait plutôt dire $${o}$ est un multiple de $${u}$`,$+=i(u,o,!0),e=["Vrai","Faux","Je ne sais pas"],s=[0,1,0]}if(this.ModeQCM&&!mathalea.sortieAMC){$=`${r}..`,r+=`<br><br>  Réponses possibles : ${t}  `;for(let i=0;i<e.length;i++)r+=`$\\square\\;$ ${e[i]}`+t,1==s[i]?$+=`$\\blacksquare\\;$ ${e[i]}`+t:$+=`$\\square\\;$ ${e[i]}`+t}-1==this.liste_questions.indexOf(r)&&(this.liste_questions.push(r),this.liste_corrections.push($),this.QCM[1].push([`${r}.\\\\ \n `,e,s]),c++),d++}(0,a.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",3,"1 : Critères de divisibilité par 2 et 5\n2 : Critères de divisibilité par 2, 3, 5 et 9\n3 : Sans critères de divisibilité"]}},67567:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}s.r(e),s.d(e,{default:()=>t})}}]);