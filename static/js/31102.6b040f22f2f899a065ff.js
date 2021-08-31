"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[31102,17007],{31102:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>o,default:()=>a});var t=i(17007),n=(i(66170),i(30169)),r=i(92329);const o="Nature de parallélogrammes";function a(){t.default.call(this),this.titre=o,this.consigne="",this.nbQuestions=7,this.nbCols=1,this.nbColsCorr=1,this.tailleDiaporama=50,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=(0,n.SRM)(["type1","type2","type3","type4","type5","type6","type7"],this.nbQuestions);for(let s,i,t,o,a,l,u,$,c,h,p,d,m,b,g,f,C,x,y,v,A,k,D,Q,F,K,S=0,I=0;S<this.nbQuestions&&I<50;){switch(v=(0,n.GVn)(5,"Q"),A=`$${v[0]+v[1]+v[2]+v[3]}$`,K=`$${v[4]}$`,s=[],i=(0,r.xmu)(0,0,v[4],"above left"),t=(0,r.Wnp)((0,r.xmu)(3,0),i,(0,n.nSR)(0,90),v[0]),o=(0,r.$7o)(t,i,80+(0,n.nSR)(0,20),.8+(0,n.nSR)(1,40)/100,v[1]),a=(0,r.$7o)(t,i,180,.9+(0,n.nSR)(1,20)/100,v[2]),l=(0,r.$7o)(o,i,180,.9+(0,n.nSR)(1,20)/100,v[3]),u=(0,r.uGk)(t,o,a,l),d=(0,r.EXn)(t,o),m=(0,r.EXn)(o,a),b=(0,r.EXn)(a,l),g=(0,r.EXn)(l,t),f=(0,r.EXn)(t,a),C=(0,r.EXn)(o,l),d.color="blue",b.color="blue",m.color="red",g.color="red",s.push(d,m,b,g,u[1]),e[S]){case"type1":F=`ses diagonales $[${v[0]+v[2]}]$ et $[${v[1]+v[3]}]$ ont la même longueur`,k="a des diagonales de même longueur",D=`$${v[0]+v[2]}=${v[1]+v[3]}$`,Q="rectangle",c=(0,r.KoI)("||","red",o,i,i,l),$=(0,r.KoI)("||","red",t,i,i,a),s.push($,c,f,C);break;case"type2":F=`ses diagonales $[${v[0]+v[2]}]$ et $[${v[1]+v[3]}]$ sont perpendiculaires`,k="a des diagonales perpendiculaires",D=`$[${v[0]+v[2]}]\\perp[${v[1]+v[3]}]$`,Q="losange",$=(0,r.KoI)("||","red",t,i,i,a),c=(0,r.lvA)(t,i,l),h=(0,r.KoI)("|||","blue",o,i,i,l),p=(0,r.BD1)(i),s.push($,c,h,p,f,C);break;case"type3":D=`$[${v[0]+v[2]}]\\perp[${v[1]+v[3]}]$ et $${v[0]+v[2]}=${v[1]+v[3]}$`,F=`ses diagonales $[${v[0]+v[2]}]$ et $[${v[1]+v[3]}]$ ont la même longueur et sont perpendiculaires`,k="a des diagonales perpendiculaires et de même longueur",$=(0,r.KoI)("||","red",t,i,i,a),c=(0,r.lvA)(t,i,l),h=(0,r.KoI)("||","red",o,i,i,l),p=(0,r.BD1)(i),s.push($,c,h,p,f,C),Q="carré";break;case"type4":D=`$${v[0]+v[1]}=${v[1]+v[2]}$`,F=`ses côtés $[${v[0]+v[1]}]$ et $[${v[1]+v[2]}]$ ont la même longueur`,k="a deux côtés consécutifs de même longueur",Q="losange",h=(0,r.KoI)("O","green",t,o,o,a),s.push(h);break;case"type5":D=`$[${v[0]+v[1]}]\\perp[${v[1]+v[2]}]$`,F=`ses côtés $[${v[0]+v[1]}]$ et $[${v[1]+v[2]}]$ sont perpendiculaires`,k="a deux côtés consécutifs perpendiculaires",h=(0,r.lvA)(t,o,a),s.push(h),Q="rectangle";break;case"type6":D=`$[${v[0]+v[1]}]\\perp[${v[1]+v[2]}]$ et $${v[0]+v[1]}=${v[1]+v[2]}$`,F=`ses côtés $[${v[0]+v[1]}]$ et $[${v[1]+v[2]}]$ sont perpendiculaires et de même longueur`,k="a deux côtés consécutifs perpendiculaires et de même longueur",c=(0,r.KoI)("O","green",t,o,o,a),h=(0,r.lvA)(t,o,a),s.push(c,h),Q="carré";break;case"type7":D=`$[${v[0]+v[1]}]\\perp[${v[1]+v[2]}]$ et $[${v[0]+v[2]}]\\perp[${v[1]+v[3]}]$`,F=`ses côtés $[${v[0]+v[1]}]$ et $[${v[1]+v[2]}]$ sont perpendiculaires et ses diagonales $[${v[0]+v[2]}]$ et $[${v[1]+v[3]}]$ aussi`,k="a deux côtés consécutifs perpendiculaires et des diagonales perpendiculaires",Q="carré",$=(0,r.lvA)(t,i,o),c=(0,r.lvA)(t,o,a),p=(0,r.BD1)(i),s.push($,c,p,f,C)}x=`${A} est un parallélogramme tel que ${F}.<br>`,x+=`Déterminer la nature de ${A} en justifiant la réponse.`,y="Les segments de même couleur sont parallèles sur le schéma suivant :<br>",y+=(0,r.iR9)({xmin:-5,ymin:-4.5,xmax:5,ymax:4.5,pixelsParCm:20,scale:.5,mainlevee:!0,amplitude:.3},s)+"<br>",y+=`On sait que ${D}.<br>`,y+=`Si un parralélogramme ${k}, alors c'est un ${Q}.<br>`,y+=`${A} est donc un ${Q}.`,-1===this.listeQuestions.indexOf(x)&&(this.listeQuestions.push(x),this.listeCorrections.push(y),S++),I++}(0,n.K1R)(this)}}},17007:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})}}]);
//# sourceMappingURL=31102.6b040f22f2f899a065ff.js.map