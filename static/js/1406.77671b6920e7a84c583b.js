(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1406,5216],{91406:(e,t,r)=>{"use strict";r.r(t),r.d(t,{amcReady:()=>c,amcType:()=>l,interactifReady:()=>u,titre:()=>m,default:()=>d});var o=r(75216),i=r(89459),s=r(55339),n=r(44393),a=r(32964);const c=!0,l=1,u=!0,m="Reconnaitre un quadrilatère particulier à partir de ses propriétés";function d(){o.default.call(this),this.titre=m,this.amcReady=c,this.amcType=l,this.interactifReady=u,this.consigne="",this.nbQuestions=3,this.nbQuestionsModifiable=!1,this.nbCols=2,this.nbColsCorr=2,this.correctionDetailleeDisponible=!0,i.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,s.TVQ)([(0,s.q$q)(["losange1","losange2"]),(0,s.q$q)(["rectangle1","rectangle2"]),(0,s.q$q)(["carre1","carre2","carre3"])]);for(let t,r,o=0,i=0;o<this.nbQuestions&&i<50;){let s,c,l,u,m,d,p,h,x,g,f,b,C,y,E,$,v,k;switch(t="",r="",e[o]){case"losange1":t="Quelle est la nature d'un quadrilatère ayant 4 côtés de même longueur ?",s=(0,n.xmu)(0,0),c=(0,n.xmu)(2,3),l=(0,n.xmu)(0,6),u=(0,n.xmu)(-2,3),m=(0,n.xmu)(0,3),d=(0,n.R_h)(s,c,l,u),$=(0,n.KoI)("||","blue",s,c,c,l,l,u,u,s),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-3,xmax:3,ymin:-1,ymax:7},d,$)+"<br>"),r+="C'est un losange.";break;case"losange2":t="Quelle est la nature d'un quadrilatère ayant ses diagonales perpendiculaires et sécantes en leur milieu ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[1,0,0,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(2,3),l=(0,n.xmu)(0,6),u=(0,n.xmu)(-2,3),m=(0,n.xmu)(0,3),d=(0,n.R_h)(s,c,l,u),p=(0,n.lvA)(l,m,c),f=(0,n.EXn)(s,l),b=(0,n.EXn)(c,u),f.pointilles=!0,b.pointilles=!0,y=(0,n.KoI)("|","blue",m,s,m,l),E=(0,n.KoI)("|||","blue",m,c,m,u),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-3,xmax:3,ymin:-1,ymax:7},d,p,f,b,y,E)+"<br>"),r+="C'est un losange.";break;case"rectangle1":t="Quelle est la nature d'un quadrilatère ayant 3 angles droits ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[0,1,0,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(5,0),l=(0,n.xmu)(5,3),u=(0,n.xmu)(0,3),m=(0,n.xmu)(2.5,1.5),d=(0,n.R_h)(s,c,l,u),h=(0,n.lvA)(s,c,l),x=(0,n.lvA)(c,l,u),g=(0,n.lvA)(l,u,s),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-1,xmax:6,ymin:-1,ymax:4},d,h,x,g)+"<br>"),r+="C'est un rectangle.";break;case"rectangle2":t="Quelle est la nature d'un quadrilatère ayant ses diagonales de même longueur et sécantes en leur milieu ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[0,1,0,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(5,0),l=(0,n.xmu)(5,3),u=(0,n.xmu)(0,3),m=(0,n.xmu)(2.5,1.5),d=(0,n.R_h)(s,c,l,u),f=(0,n.EXn)(s,l),b=(0,n.EXn)(c,u),C=(0,n.KoI)("||","blue",m,s,m,c,m,l,m,u),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-1,xmax:6,ymin:-1,ymax:4},d,C,f,b)+"<br>"),r+="C'est un rectangle.";break;case"carre1":t="Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et 4 angles droits ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[0,0,1,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(3,0),l=(0,n.xmu)(3,3),u=(0,n.xmu)(0,3),m=(0,n.xmu)(1.5,1.5),d=(0,n.R_h)(s,c,l,u),h=(0,n.lvA)(s,c,l),x=(0,n.lvA)(c,l,u),g=(0,n.lvA)(l,u,s),$=(0,n.KoI)("||","blue",s,c,c,l,l,u,u,s),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},d,h,x,g,$)+"<br>"),r+="C'est un carré.";break;case"carre2":t="Quelle est la nature d'un quadrilatère ayant ses ses diagonales perpendiculaires, de même longueur et sécantes en leur milieu ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[0,0,1,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(3,0),l=(0,n.xmu)(3,3),u=(0,n.xmu)(0,3),m=(0,n.xmu)(1.5,1.5),d=(0,n.R_h)(s,c,l,u),p=(0,n.lvA)(l,m,u),f=(0,n.EXn)(s,l),b=(0,n.EXn)(c,u),f.pointilles=!0,b.pointilles=!0,C=(0,n.KoI)("||","blue",m,s,m,c,m,l,m,u),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},d,p,C,f,b)+"<br>"),r+="C'est un carré.";break;case"carre3":t="Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et un angle droit ?",v=["Losange","Rectangle","Carré","Trapèze","Parallélogramme"],k=[0,0,1,0,0],s=(0,n.xmu)(0,0),c=(0,n.xmu)(3,0),l=(0,n.xmu)(3,3),u=(0,n.xmu)(0,3),m=(0,n.xmu)(1.5,1.5),d=(0,n.R_h)(s,c,l,u),p=(0,n.lvA)(s,c,l),$=(0,n.KoI)("||","blue",s,c,c,l,l,u,u,s),this.correctionDetaillee&&(r=(0,n.iR9)({xmin:-1,xmax:4,ymin:-1,ymax:4},d,p,$)+"<br>"),r+="C'est un carré."}this.autoCorrection[o]={},this.autoCorrection[o].enonce=`${t}\n`,this.autoCorrection[o].propositions=[{texte:"Losange",statut:!1,feedback:"Tous les losanges ont leurs côtés opposés parallèles, ce sont donc aussi des parallélogrammes et des trapèzes."},{texte:"Rectangle",statut:!1,feedback:"Tous les rectangles ont leurs côtés opposés parallèles, ce sont donc aussi des parallélogrammes et des trapèzes."},{texte:"Carré",statut:!1,feedback:"Tous les carrés ont 4 angles droits, ce sont donc aussi des rectangles. Tous les carrés ont 4 côtés de même longueur, ce sont donc aussi des losanges."},{texte:"Trapèze",statut:!1},{texte:"Parallélogramme",statut:!1}],this.autoCorrection[o].options={ordered:!0,lastChoice:5},"losange1"!==e[o]&&"losange2"!==e[o]||(this.autoCorrection[o].propositions[0].statut=!0,this.autoCorrection[o].propositions[3].statut=!0,this.autoCorrection[o].propositions[4].statut=!0),"rectangle1"!==e[o]&&"rectangle2"!==e[o]||(this.autoCorrection[o].propositions[1].statut=!0,this.autoCorrection[o].propositions[3].statut=!0,this.autoCorrection[o].propositions[4].statut=!0),"carre1"!==e[o]&&"carre2"!==e[o]&&"carre3"!==e[o]||(this.autoCorrection[o].propositions[0].statut=!0,this.autoCorrection[o].propositions[1].statut=!0,this.autoCorrection[o].propositions[2].statut=!0,this.autoCorrection[o].propositions[3].statut=!0,this.autoCorrection[o].propositions[4].statut=!0),this.interactif&&(t+=(0,a.l3)(this,o).texte),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(r),o++),i++}(0,s.K1R)(this)}}},75216:(e,t,r)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}r.r(t),r.d(t,{default:()=>o})},32964:(e,t,r)=>{"use strict";r.d(t,{Sq:()=>n,l3:()=>a,te:()=>c,Iq:()=>l});var o=r(89459),i=r(55339),s=r(60913);function n(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(r=>{e.nbQuestions;for(const t in e.autoCorrection){const r=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),o=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);o.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(r.innerHTML="😎"):(r.innerHTML="☹️"),o.readOnly=!0,r.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",r="rgba(123, 239, 178, 0.5)",o=document.querySelector(`#btnQcmEx${e.numeroExercice}`);o&&o.addEventListener("click",(i=>{for(let o=0;o<e.nbQuestions;o++){let i,n=0,a=0,c=0;for(let t=0;t<e.autoCorrection[o].propositions.length;t++)e.autoCorrection[o].propositions[t].statut&&c++;const l=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${o}`);e.autoCorrection[o].propositions.forEach(((s,c)=>{const l=document.querySelector(`#labelEx${e.numeroExercice}Q${o}R${c}`),u=document.querySelector(`#checkEx${e.numeroExercice}Q${o}R${c}`);s.statut?(l.style.backgroundColor=r,u.checked&&(n++,i=c)):!0===u.checked&&(l.style.backgroundColor=t,a++,i=c)}));let u="positive";0===a&&n===c?l.innerHTML="😎":(l.innerHTML="☹️",u="error"),l.style.fontSize="large",i>-1&&e.autoCorrection[o].propositions[i].feedback&&(0,s.$N)({id:`feedbackEx${e.numeroExercice}Q${o}`,message:e.autoCorrection[o].propositions[i].feedback,type:u})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),o.classList.add("disabled")}))}))}(e)}function a(e,t){e.titre="cacaboudin";let r="",s="",n="";if(n=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,i.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,i.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let r=0;r<e.length-1;r++)for(let o=r+1;o<e.length;)e[r].texte===e[o].texte?(t=!0,e[r].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[r].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?r+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:r+="<br>";for(let i=0;i<e.autoCorrection[t].propositions.length;i++)o.Do.isHtml?r+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${i}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${i}">${e.autoCorrection[t].propositions[i].texte+n}</label>\n          </div>`:r+=`$\\square\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n,e.autoCorrection[t].propositions[i].statut?s+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n:s+=`$\\square\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n;o.Do.isHtml&&(r+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,r+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:r,texteCorr:s}}function c(e,t,{texte:r="",texteApres:i="",inline:s=!0,numeric:n=!0,indice:a}={}){return o.Do.isHtml&&e.interactif?`<div class="ui form ${s?"inline":""}" >\n    <div class="inline  field" >\n    <label>${r}</label>\n      <input type="text" ${n?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}${a||""}" >\n      <span>${i}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function l(e,t,r,{digits:o=0,decimals:i=0,signe:s=!1,exposantNbChiffres:n=0,exposantSigne:a=!1,approx:c=0}={}){let l=[];l=Array.isArray(r)?r:[r],void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.param={digits:o,decimals:i,signe:s,exposantNbChiffres:n,exposantSigne:a,approx:c};for(const u of l)e.autoCorrection[t].reponse.valeur=u}},60913:(e,t,r)=>{"use strict";r.d(t,{$N:()=>m,JF:()=>u});const o=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function i(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,r,o]=t;e.style[r]=o}}));else if("object"==typeof t)for(const r in t)o(t,r)&&(e.style[r]=t[r])}catch(r){console.error(r)}}function s(e,t){e.appendChild(window.document.createTextNode(t))}function n(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const r=document.getElementById(e);if(!r&&t)throw Error(`L’élément html ${e} n’existe pas`);return r}function a(e,t,r,n){const a=function(e,t,r){const n=window.document.createElement(e);let a;try{if(t)for(a in t)o(t,a)&&("class"===a?n.className=t.class:"className"===a?n.className=t.className:"style"===a?i(n,t.style):n.setAttribute(a,t[a]))}catch(c){console.error(c)}return r&&s(n,r),n}(t,r,n);return e.appendChild(a),a}const c=["info","warning","error","positive"];function l(e,{message:t,type:r="error",titre:o}={}){if(c.includes(r)||(console.error(Error(`type de message inconnu : ${r}`)),r="error"),!t)throw Error("Message obligatoire pour tout retour utilisateur");const i=a(e,"div",{className:`ui message ${"info"===r?"":r}`}),n="error"===r?"frown outline":"warning"===r?"bullhorn":"bell outline";if(a(i,"i",{className:"close icon"}).addEventListener("click",(()=>i.remove())),o){const e=a(i,"div",{className:"header"});a(e,"i",{className:`${n} icon`}),s(e,o)}return/<[a-zA-Z0-9_ "']+/.test(t)?i.innerHTML+=t:s(i,t),i}function u({code:e,exercice:t}){const r=n("containerErreur");switch(e){case"codeExerciceInconnu":l(r,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":l(r,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":l(r,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),l(r,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function m({id:e,message:t="",type:r="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));l(n(e),{message:t,type:r}).style.width="400px"}}}]);
//# sourceMappingURL=1406.77671b6920e7a84c583b.js.map