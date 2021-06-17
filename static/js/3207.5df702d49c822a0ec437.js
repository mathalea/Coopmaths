(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3207],{53207:(t,e,s)=>{"use strict";s.r(e),s.d(e,{titre:()=>l,default:()=>h});var i=s(67567),n=s(24477),o=s(77457),r=s(1328);const l="Déterminer les coordonnées (relatives) d’un point";function h(){i.default.call(this),this.titre=l,this.consigne="Donner les coordonnées des points représentés",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.sup=1,this.sup2=!0,this.quart_de_plan=!1,this.listePackages="tkz-euclide",this.nouvelleVersion=function(t){let e,s;this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let i,l,h,u,a,c,p,d,f,b,w=[],k=[];h=Math.round(.7*window.innerHeight),l=h,u=Math.pow(2,parseInt(this.sup)-1);const v=[];i=this.sup2,this.quart_de_plan?(a=0,p=0,c=10,d=10):(a=-5,p=-5,c=5,d=5);const z=[],g=[];for(let t=(0,n.n0o)(a+1/u);t<(0,n.n0o)(c-(parseInt(this.sup)-1)/u);t=(0,n.n0o)(t+1/u))z.push(t);for(let t=(0,n.n0o)(p+1/u);t<(0,n.n0o)(d-(parseInt(this.sup)-1)/u);t=(0,n.n0o)(t+1/u))g.push(t);let C=!1,m=!1;w=(0,n.RZ9)(z,g,10*u);for(let t=0;t<5;t++)k.push(w[t]),0==k[t][0]&&(C=!0),0==k[t][1]&&(m=!0);C||(k[0][0]=0),m||(k[1][1]=0),k=(0,n.TVQ)(k);for(let t=0,e=(0,n.nSR)(1,20);t<5;t++)v.push((0,n.Gag)(t+e));if(sortieHtml){const e=`div_svg${t}${Date.now()}`;this.consigne=`<div id="${e}" style="height: ${h}px"></div>`,window.SVGExist||(window.SVGExist={}),window.SVGExist[e]=setInterval((function(){if($(`#${e}`).length){$(`#${e}`).html("");const t=(0,r.Wj)().addTo(`#${e}`).viewbox(0,0,520,520).size("100%","100%"),s=(0,o.oE)(t,a,c,p,d,u,u,500,500,i);for(let e=0;e<5;e++)f=0==k[e][0]||.25==k[e][0]?20:0,b=0,-.5==k[e][1]&&(b=10),-.25==k[e][1]&&(b=20),(0,o.vv)(t,(0,n.n0o)(20+480*(k[e][0]-a)/(c-a)),(0,n.n0o)(480-480*(k[e][1]-p)/(d-p)),v[e],"blue",-10+f,10+b,[!0,s[0],s[1]]);clearInterval(SVGExist[e])}}),100)}else{e="\\begin{tikzpicture}",e+=(0,o.d1)(a,c,p,d,u,u,i);for(let t=0;t<5;t++)e+=`\n\t \\tkzDefPoint(${k[t][0]},${k[t][1]}){A}`,e+="\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)",e+=`\n\t \\tkzLabelPoint[above right=3pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${v[t]}$}`;e+="\n\t \\end{tikzpicture}",this.listeQuestions.push(e),s="\\begin{tikzpicture}",s+=(0,o.d1)(a,c,p,d,u,u,i);for(let t=0;t<5;t++)s+=`\n\t \\tkzDefPoint(${k[t][0]},${k[t][1]}){A}`,s+="\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)",s+=`\n\t \\tkzLabelPoint[above right=3pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${v[t]}$}`,s+="\n\t \\tkzPointShowCoord(A)";s+="\n\t \\end{tikzpicture}",this.listeCorrections.push(s)}e="Déterminer les coordonnées des points",s="Les coordonnées des points sont :<br>";for(let t=0;t<4;t++)e+=` $${v[t]}$,`,s+=` $${v[t]}(${(0,n.euh)(k[t][0])};${(0,n.euh)(k[t][1])})$, `;e+=` $${v[4]}$.`,s+=` $${v[4]}(${(0,n.euh)(k[4][0])};${(0,n.euh)(k[4][1])})$.`,this.listeQuestions.push(e),this.listeCorrections.push(s),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Coordonnées entières\n2 : Coordonnées 'en demis'\n3 : Coordonnées 'en quarts'"],this.besoin_formulaire2_case_a_cocher=["Grille de lecture"]}}}]);