(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6335,7567],{6335:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>$,default:()=>o});var s=e(67567),n=e(24477);const $="Mutliplier des fractions";function o(){s.default.call(this),this.sup=1,this.titre=$,this.consigne="Calculer et donner le résultat sous forme irréductible",this.spacing=2,this.spacing_corr=2,this.nb_questions=5,this.nb_cols_corr=1,this.sup2=!1,this.nouvelle_version=function(){let i;this.liste_questions=[],this.liste_corrections=[];let t,e=(0,n.Ca8)();i=1==this.sup?[1,2,2,2]:2==this.sup?[2,2,3,3]:[3];let s=(0,n._97)(i,this.nb_questions);for(let i,a,u,f,m,_,J,x,K,b,p,d,g,q,S,v,k,M,R=0,W=0;R<this.nb_questions&&W<50;){if(M=s[R],i=(0,n.q$q)(e),a=(0,n.q$q)(e),u=i[0],f=i[1],m=a[0],_=a[1],0==this.sup2)switch(M){case 1:1==u&&(u=(0,n.nSR)(2,9)),u==m&&(u+=1),v=`$${(0,n.KxJ)(u,1)}\\times${(0,n.KxJ)(m,_)}=$`,k=`$${(0,n.KxJ)(u,1)}\\times${(0,n.KxJ)(m,_)}$`,k+=`$=\\dfrac{${u}}{1}\\times${(0,n.KxJ)(m,_)}$`,k+=`$=${(0,n.KxJ)(u+"\\times"+m,"1\\times"+_)}$`,k+=`$=${(0,n.KxJ)(u*m,_)}$`,1!=(0,n.Md9)(u*m,_)&&(k+=`$=${(0,n.Im8)(u*m,_)}$`);break;case 2:J=(0,n.Md9)(u*m,f*_),v=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}=$`,k=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,k+=`$=${(0,n.KxJ)(u+"\\times"+m,f+"\\times"+_)}$`,k+=`$=${(0,n.KxJ)(u*m,f*_)}$`,1!=J&&(k+=`$=${(0,n.KxJ)(u*m/J+"\\times\\cancel{"+J+"}",f*_/J+"\\times\\cancel{"+J+"}")}$`,k+=`$=${(0,n.KxJ)(u*m/J,f*_/J)}$`);break;case 3:u*=(0,n.nSR)(-1,1,[0]),f*=(0,n.nSR)(-1,1,[0]),m*=(0,n.nSR)(-1,1,[0]),_*=(0,n.nSR)(-1,1,[0]),t=(u<0)+(f<0)+(m<0)+(_<0),d=1==Math.pow(-1,t)?"":"-",v=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,k=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,x=(0,n.WnP)(u),K=(0,n.WnP)(f),b=(0,n.WnP)(m),p=(0,n.WnP)(_),J=(0,n.Md9)(x*b,K*p),k+=`$=${d}${(0,n.KxJ)(x,K)}\\times${(0,n.KxJ)(b,p)}$`,k+=`$=${d}${(0,n.KxJ)(x+"\\times"+b,K+"\\times"+p)}$`,1==J?k+=`$=${d}${(0,n.KxJ)(x*b,K*p)}$`:(k+=`$=${d}${(0,n.KxJ)(x*b,K*p)}$`,x*b!=K*p?(k+=`$=${d}${(0,n.KxJ)(x*b/J+"\\times\\cancel{"+J+"}",K*p/J+"\\times\\cancel{"+J+"}")}$`,k+=`$=${d}${(0,n.KxJ)(x*b/J,K*p/J)}$`):k+=`$=${d}1$`)}else{u==m&&u++,x=(0,n.WEc)()[(0,n.nSR)(1,5)],K=(0,n.WEc)()[(0,n.nSR)(1,5,[x])],u*=x,_*=x,f*=K,m*=K;var $,o,r=(0,n.SIv)(u),c=(0,n.SIv)(f),l=(0,n.SIv)(m),h=(0,n.SIv)(_);switch(M){case 1:v=`$${u}\\times${(0,n.KxJ)(m,_)}=$`,k=`$${u}\\times${(0,n.KxJ)(m,_)}$`,k+=`$=${(0,n.KxJ)(u+"\\times"+m,_)}$`,k+=`$=${(0,n.KxJ)((0,n.BgJ)(u)+"\\times"+(0,n.BgJ)(m),(0,n.BgJ)(_))}$`;for(let i in l)r.push(l[i]);for(c=h,$=[],o=[],r.forEach((function(i){$.push([i,!0])})),c.forEach((function(i){o.push([i,!0])})),S=0;S<c.length;){for(let i=0;i<=r.length;){if(c[S]==r[i]){o[S]=[c[S],!1],$[i]=[r[i],!1],r[i]=1,c[S]=1;break}i++}S++}u=1,f=1;for(let i in r)u*=r[i];for(let i in c)f*=c[i];g="",q="";for(let i in $)1==$[i][1]?g+=$[i][0]+"\\times":g+="\\cancel{"+$[i][0]+"}\\times";g=g.substr(0,g.length-6);for(let i in o)1==o[i][1]?q+=o[i][0]+"\\times":q+="\\cancel{"+o[i][0]+"}\\times";q=q.substr(0,q.length-6),k+=`$=\\dfrac{${g}}{${q}}$`,k+=`$=${(0,n.KxJ)(u,f)}$`;break;case 2:v=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}=$`,k=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,k+=`$=${(0,n.KxJ)(u+"\\times"+m,f+"\\times"+_)}$`;for(let i in l)r.push(l[i]);for(let i in h)c.push(h[i]);for($=[],o=[],r.forEach((function(i){$.push([i,!0])})),c.forEach((function(i){o.push([i,!0])})),S=0;S<c.length;){for(let i=0;i<=r.length;){if(c[S]==r[i]){o[S]=[c[S],!1],$[i]=[r[i],!1],r[i]=1,c[S]=1;break}i++}S++}u=1,f=1;for(let i in r)u*=r[i];for(let i in c)f*=c[i];g="",q="";for(let i in $)1==$[i][1]?g+=$[i][0]+"\\times":g+="\\cancel{"+$[i][0]+"}\\times";g=g.substr(0,g.length-6);for(let i in o)1==o[i][1]?q+=o[i][0]+"\\times":q+="\\cancel{"+o[i][0]+"}\\times";q=q.substr(0,q.length-6),k+=`$=\\dfrac{${g}}{${q}}$`,k+=`$=${(0,n.KxJ)(u,f)}$`;break;case 3:u*=(0,n.nSR)(-1,1,[0]),f*=(0,n.nSR)(-1,1,[0]),m*=(0,n.nSR)(-1,1,[0]),_*=(0,n.nSR)(-1,1,[0]),t=(u<0)+(f<0)+(m<0)+(_<0),d=1==Math.pow(-1,t)?"":"-",v=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,k=`$${(0,n.KxJ)(u,f)}\\times${(0,n.KxJ)(m,_)}$`,x=(0,n.WnP)(u),K=(0,n.WnP)(f),b=(0,n.WnP)(m),p=(0,n.WnP)(_),k+=`$=${d}${(0,n.KxJ)(x,K)}\\times${(0,n.KxJ)(b,p)}$`,k+=`$=${d}${(0,n.KxJ)(x+"\\times"+b,K+"\\times"+p)}$`;for(let i in l)r.push(l[i]);for(let i in h)c.push(h[i]);for($=[],o=[],r.forEach((function(i){$.push([i,!0])})),c.forEach((function(i){o.push([i,!0])})),S=0;S<c.length;){for(let i=0;i<=r.length;){if(c[S]==r[i]){o[S]=[c[S],!1],$[i]=[r[i],!1],r[i]=1,c[S]=1;break}i++}S++}u=1,f=1;for(let i in r)u*=r[i];for(let i in c)f*=c[i];g="",q="";for(let i in $)1==$[i][1]?g+=$[i][0]+"\\times":g+="\\cancel{"+$[i][0]+"}\\times";g=g.substr(0,g.length-6);for(let i in o)1==o[i][1]?q+=o[i][0]+"\\times":q+="\\cancel{"+o[i][0]+"}\\times";q=q.substr(0,q.length-6),k+=`$=${d}\\dfrac{${g}}{${q}}$`,k+=`$=${d}${(0,n.KxJ)(u,f)}$`}}-1==this.liste_questions.indexOf(v)&&(this.liste_questions.push(v),this.liste_corrections.push(k),R++),W++}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",3,"1 : Fractions à numérateurs et dénominateurs positifs \n 2 : Type 1 et type 3 pour 50%/50%\n 3 : Ecritures fractionnaires à numérateur et dénominateur entiers relatifs"],this.besoin_formulaire2_case_a_cocher=["Avec décomposition"]}},67567:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}e.r(t),e.d(t,{default:()=>s})}}]);