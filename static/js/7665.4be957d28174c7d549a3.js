(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7665,1141,7567],{11141:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>a});var s=i(67567),r=i(24477);const n="Signe d’un produit ou d’un quotient de nombres relatifs";function a(){let e;s.default.call(this),this.titre=n,this.consigne="Donner le signe des expressions numériques.",this.nb_cols=1,this.nb_cols_corr=1,this.nb_questions_modifiable=!1,this.sup=1,this.nouvelle_version=function(){if(this.sup=Number(this.sup),this.exo===this.beta+"4C10-1")switch(this.sup){case 1:e=[1,1,1],this.nb_questions=3;break;case 2:e=[2,2,2],this.nb_questions=3;break;case 3:e=[3,3,3],this.nb_questions=3;break;case 4:e=[1,2,3],this.nb_questions=e.length}else if(this.exo===this.beta+"4C10-2")switch(this.sup){case 1:e=[4,4,4],this.nb_questions=3;break;case 2:e=[5,5,5],this.nb_questions=3;break;case 3:e=[6,6,6],this.nb_questions=3;break;case 4:e=[7,7,7],this.nb_questions=3;break;case 5:e=[4,5,6,7],this.nb_questions=e.length}else e=[1,2,3,4,5,6,7],this.nb_questions=e.length;const t=e;this.liste_questions=[],this.liste_corrections=[];for(let e,i,s=0,n=0;s<this.nb_questions&&n<50;){const a=20,l=new r.Mjk((0,r.nSR)(-1,1,[0])*(0,r.nSR)(1,a),(0,r.nSR)(-1,1,[0])*(0,r.nSR)(1,a),(0,r.nSR)(-1,1,[0])*(0,r.nSR)(1,a),(0,r.nSR)(-1,1,[0])*(0,r.nSR)(1,a));switch(t[s]){case 1:e=`$ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]} et $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}.`,i+=`<br> ${l.setRegleSigneProduit(l.relatifs[0],l.relatifs[1])}`,i+=`<br>Donc $ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1]))}.`;break;case 2:e=`$ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]}, $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}`,i+=` et $ ${(0,r.GCJ)(l.relatifs[2])} $ est ${l.getSigneString()[2]}.`,i+=`<br> ${l.setRegleSigneProduit(l.relatifs[0],l.relatifs[1],l.relatifs[2])}`,i+=`<br>Donc $ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1],l.relatifs[2]))}.`;break;case 3:e=`$ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])} \\times ${(0,r.GCJ)(l.relatifs[3])} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]}, $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}, `,i+=`$ ${(0,r.GCJ)(l.relatifs[2])} $ est ${l.getSigneString()[2]} et $ ${(0,r.GCJ)(l.relatifs[3])} $ est ${l.getSigneString()[3]}.`,i+=`<br> ${l.setRegleSigneProduit(l.relatifs[0],l.relatifs[1],l.relatifs[2],l.relatifs[3])}`,i+=`<br>Donc $ ${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])} \\times ${(0,r.GCJ)(l.relatifs[3])} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1],l.relatifs[2],l.relatifs[3]))}.`;break;case 4:e=`$ \\dfrac{${(0,r.GCJ)(l.relatifs[0])}}{${(0,r.GCJ)(l.relatifs[1])}} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]} et $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}.`,i+=`<br> ${l.setRegleSigneQuotient(l.relatifs[0],l.relatifs[1])}`,i+=`<br>Donc $ \\dfrac{${(0,r.GCJ)(l.relatifs[0])}}{${(0,r.GCJ)(l.relatifs[1])}} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1]))}.`;break;case 5:e=`$ \\dfrac{${(0,r.GCJ)(l.relatifs[0])}}{${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])}} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]}, $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}`,i+=` et $ ${(0,r.GCJ)(l.relatifs[2])} $ est ${l.getSigneString()[2]}.`,i+=`<br> ${l.setRegleSigneQuotient(l.relatifs[0],l.relatifs[1],l.relatifs[2])}`,i+=`<br>Donc $ \\dfrac{${(0,r.GCJ)(l.relatifs[0])}}{${(0,r.GCJ)(l.relatifs[1])} \\times ${(0,r.GCJ)(l.relatifs[2])}} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1],l.relatifs[2]))}.`;break;case 6:e=`$ \\dfrac{${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])}}{${(0,r.GCJ)(l.relatifs[2])}} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]}, $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}`,i+=` et $ ${(0,r.GCJ)(l.relatifs[2])} $ est ${l.getSigneString()[2]}.`,i+=`<br> ${l.setRegleSigneQuotient(l.relatifs[0],l.relatifs[1],l.relatifs[2])}`,i+=`<br>Donc $ \\dfrac{${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])}}{${(0,r.GCJ)(l.relatifs[2])}} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1],l.relatifs[2]))}.`;break;case 7:e=`$ \\dfrac{${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])}}{${(0,r.GCJ)(l.relatifs[2])} \\times ${(0,r.GCJ)(l.relatifs[3])}} $`,i=`$ ${(0,r.GCJ)(l.relatifs[0])} $ est ${l.getSigneString()[0]}, $ ${(0,r.GCJ)(l.relatifs[1])} $ est ${l.getSigneString()[1]}, `,i+=`$ ${(0,r.GCJ)(l.relatifs[2])} $ est ${l.getSigneString()[2]} et $ ${(0,r.GCJ)(l.relatifs[3])} $ est ${l.getSigneString()[3]}.`,i+=`<br> ${l.setRegleSigneQuotient(l.relatifs[0],l.relatifs[1],l.relatifs[2],l.relatifs[3])}`,i+=`<br>Donc $ \\dfrac{${(0,r.GCJ)(l.relatifs[0])} \\times ${(0,r.GCJ)(l.relatifs[1])}}{${(0,r.GCJ)(l.relatifs[2])} \\times ${(0,r.GCJ)(l.relatifs[3])}} $ est ${(0,r.MZ9)(l.getSigneProduitString(l.relatifs[0],l.relatifs[1],l.relatifs[2],l.relatifs[3]))}.`}-1===this.liste_questions.indexOf(e)&&(this.liste_questions.push(e),this.liste_corrections.push(i),s++),n++}(0,r.KsX)(this)}}},57665:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>r,default:()=>n});var s=i(11141);const r="Signe d’un quotient de nombres relatifs";function n(){s.default.call(this),this.titre=r,this.beta="",this.exo=this.beta+"4C10-2",this.sup=5,this.besoin_formulaire_numerique=["Niveau de difficulté",5,"1 : quotient de deux nombres\n2 : quotient d'un nombre sur un produit de deux facteurs\n3 : quotient d'un produit de deux factueurs sur un nombre\n4 : Quotient de deux produits de deux facteurs\n5 : Mélange"]}},67567:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}i.r(t),i.d(t,{default:()=>s})}}]);