"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3663,17007],{17007:(t,s,i)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...s){0===t&&(this.listeArguments=[]);let i="";for(const e of s)void 0!==e&&(i+=e.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>e})},44187:(t,s,i)=>{i.d(s,{Ut:()=>a,SS:()=>p,O7:()=>f,sq:()=>m,JP:()=>b,r1:()=>y,RP:()=>k,Nd:()=>D,oO:()=>R,sV:()=>_,VY:()=>w,y$:()=>A,kO:()=>$,Kf:()=>E,ee:()=>T,WD:()=>V});var e=i(92329),o=i(39908),n=i(66170);const h={matrix:o.pIu,multiply:o.JpY,norm:o.KOy,cross:o.kCc,dot:o.AKD};let r=0;function l(){this.positionLabel="above",this.isVisible=!0,this.color="black",this.style="",this.styleTikz="",this.epaisseur=1,this.opacite=1,this.pointilles=!1,this.id=r,r++,n.Do.objets2D.push(this)}class c{constructor(t,s,i,o,r,l){const c=n.Do.anglePerspective*Math.PI/180,a=n.Do.coeffPerspective,u=h.matrix([[1,a*Math.cos(c),0],[0,a*Math.sin(c),1]]);this.x=t,this.y=s,this.z=i,this.visible=o,this.label=r,this.typeObjet="point3d";const p=h.matrix([this.x,this.y,this.z]),d=h.multiply(u,p);this.p2d=(0,e.xmu)(d._data[0],d._data[1],this.label,l)}}function a(t,s,i=0,e=!0,o="",n="above left"){return new c(t,s,i,e,o,n)}class u{constructor(...t){const s=n.Do.anglePerspective*Math.PI/180,i=n.Do.coeffPerspective,o=h.matrix([[1,i*Math.cos(s),0],[0,i*Math.sin(s),1]]);2===t.length?(this.x=t[1].x-t[0].x,this.y=t[1].y-t[0].y,this.z=t[1].z-t[0].z):"number"==typeof t[0]?(this.x=t[0],this.y=t[1],this.z=t[2]):1===t.length&&(this.x=t[0]._data[0],this.y=t[0]._data[1],this.z=t[0]._data[2]),this.matrice=h.matrix([this.x,this.y,this.z]),this.norme=Math.sqrt(this.x**2+this.y**2+this.z**2);const r=h.multiply(o,this.matrice);this.p2d=(0,e.tno)(r._data[0],r._data[1]),this.representant=function(t){const s=X(t,this);return(0,e.tno)(t.p2d,s.p2d).representant(t.p2d)}}}function p(...t){return new u(...t)}class d{constructor(t,s,i,o){this.extremite1=t,this.extremite2=s,this.color=i,t.visible&&s.visible&&o?this.visible=!0:this.visible=!1,this.p2d=(0,e.EXn)(t.p2d,s.p2d,i),this.visible?this.p2d.pointilles=!1:this.p2d.pointilles=2}}function f(t,s,i="black",e=!0){return new d(t,s,i,e)}class g{constructor(t,s){s.constructor===u?this.directeur=s:s.constructor===c&&(this.directeur=p(t,s)),this.origine=t;const i=X(this.origine,this.directeur);this.point=i,this.p2d=(0,e.VTK)(this.origine.p2d,i.p2d),this.p2d.isVisible=!1}}function m(t,s){return new g(t,s)}function b(t,s,i,o,h,r=n.Do.anglePerspective){let l;const c=[],a=[];l="caché"===o?1:-1;const u=m(t,s);c.push(T(X(t,i),u,r)),a.push(c[0].p2d);for(let e=1;e<19;e++)c.push(T(c[e-1],u,10*l)),a.push(c[e].p2d);const p=(0,e.RxL)(a,h);return"caché"===o&&(p.pointilles=2,p.opacite=.3),p}class P{constructor(...t){Array.isArray(t[0])?(this.listePoints=t[0],t[1]&&(this.color=t[1])):(this.listePoints=t,this.color="black");const s=[];let i;const e=[];i=this.listePoints[0];for(let o=1;o<this.listePoints.length;o++)s.push(f(i,this.listePoints[o],this.color)),e.push(s[o-1].p2d),i=this.listePoints[o];s.push(f(i,this.listePoints[0],this.color)),e.push(s[this.listePoints.length-1].p2d),this.aretes=s,this.p2d=e}}function y(...t){return new P(...t)}function v(t,s,i,e,o){l.call(this),this.centre=t,this.rayon=p(s,0,0),this.normal=p(0,0,1),this.color=o,this.nbMeridiens=e,this.nbParalleles=i;const r=[];let c,u,d,f,g,m;const P=p(h.cross(this.normal.matrice,this.rayon.matrice)),y=p(h.cross(this.rayon.matrice,h.multiply(P.matrice,1/h.norm(P.matrice)))),v=s,k="caché",z="visible";for(let h,l=0;l<1;l+=1/(this.nbParalleles+1))g=a(t.x,t.y,t.z+v*Math.sin(l*Math.PI/2)),m=a(t.x,t.y,t.z+v*Math.sin(-l*Math.PI/2)),h=p(v*Math.cos(l*Math.PI/2),0,0),c=b(g,this.normal,h,k,this.color,n.Do.anglePerspective),u=b(g,this.normal,h,z,this.color,n.Do.anglePerspective),d=b(m,this.normal,h,k,this.color,n.Do.anglePerspective),f=b(m,this.normal,h,z,this.color,n.Do.anglePerspective),r.push(c,u,d,f);for(let h,l,a=0;a<1;a+=1/this.nbMeridiens)h=E(P,this.normal,90+n.Do.anglePerspective+90*a),l=E(P,this.normal,90+n.Do.anglePerspective-90*(a+1/this.nbMeridiens)),c=b(this.centre,h,y,z,this.color,0),u=b(this.centre,h,y,k,this.color,0),d=b(this.centre,l,y,z,this.color,0),f=b(this.centre,l,y,k,this.color,0),r.push(c,u,d,f);this.svg=function(t){let s="";for(const i of r)s+="\n\t"+i.svg(t);return s},this.tikz=function(){let t="";for(const s of r)t+="\n\t"+s.tikz();return t}}function k(t,s,i,e,o="black"){return new v(t,s,i,e,o)}function z(t,s,i,o,n,r){l.call(this),this.centrebase1=t,this.centrebase2=s,this.normal=i,this.rayon1=o,this.rayon2=n,this.color=r;const c=[];let a,u,d;const f=p(h.cross(this.normal.matrice,this.rayon1.matrice));let g,m;h.dot(f.matrice,p(0,1,0).matrice)>0?(g="caché",u=this.color,m="visible",d=this.color):(m="caché",g="visible",u=this.color,d=this.color);const P=b(this.centrebase1,this.normal,this.rayon1,g,u),y=b(this.centrebase2,this.normal,this.rayon2,g,u),v=b(this.centrebase1,this.normal,this.rayon1,m,d),k=b(this.centrebase2,this.normal,this.rayon2,m,d);y.pointilles=!1,y.color=this.color;for(let h=0;h<P.listePoints.length;h+=2)a=(0,e.EXn)(y.listePoints[h],P.listePoints[h]),"caché"===g?(a.pointilles=2,a.color=this.color,a.opacite=.3):a.color=this.color,c.push(a);for(let h=0;h<v.listePoints.length;h+=2)a=(0,e.EXn)(k.listePoints[h],v.listePoints[h]),"caché"===m?(a.pointilles=2,a.color=this.color,a.opacite=.3):a.color=this.color,c.push(a);c.push(P,v,y,k),this.svg=function(t){let s="";for(const i of c)s+="\n\t"+i.svg(t);return s},this.tikz=function(){let t="";for(const s of c)t+="\n\t"+s.tikz();return t}}function D(t,s,i,e,o,n="black"){return new z(t,s,i,e,o,n)}class x{constructor(t,s,i,o,n="black"){l.call(this);const h=a(t,s,i),r=p(o,0,0),c=p(0,o,0),u=p(0,0,o),d=X(h,r),f=X(d,u),g=X(h,u),m=X(h,c),b=X(m,r),P=X(b,u),y=X(g,c),v=(0,e.R_h)([h.p2d,d.p2d,f.p2d,g.p2d],n),k=(0,e.R_h)([d.p2d,b.p2d,P.p2d,f.p2d],n),z=(0,e.R_h)([g.p2d,f.p2d,P.p2d,y.p2d],n);v.couleurDeRemplissage="lightgray",z.couleurDeRemplissage="white",k.couleurDeRemplissage="darkgray",this.svg=function(t){return v.svg(t)+"\n"+z.svg(t)+"\n"+k.svg(t)},this.tikz=function(){return v.tikz()+"\n"+z.tikz()+"\n"+k.tikz()}}}function R(t,s,i,e){return new x(t,s,i,e)}class M{constructor(t,s,i,o,n,h="black"){let r,c,u,d,f,g,m,b,P;l.call(this);const y=[],v=p(o,0,0),k=p(0,o,0),z=p(0,0,o);let D=a(t,s,i);for(let l=0;l<n;l++)r=X(D,v),c=X(r,z),u=X(D,z),d=X(D,k),f=X(d,v),g=X(f,z),m=X(u,k),b=(0,e.R_h)([D.p2d,r.p2d,c.p2d,u.p2d],h),P=(0,e.R_h)([u.p2d,c.p2d,g.p2d,m.p2d],h),b.couleurDeRemplissage="lightgray",P.couleurDeRemplissage="white",y.push(b,P),D=X(D,v);const x=(0,e.R_h)([r.p2d,f.p2d,g.p2d,c.p2d],h);x.couleurDeRemplissage="darkgray",y.push(x),this.svg=function(t){let s="";for(const i of y)s+=i.svg(t)+"\n";return s=`<g id="${this.id}">${s}</g>`,s},this.tikz=function(){let t="";for(const s of y)t+=s.tikz()+"\n";return t}}}function _(t,s,i,e,o,n="black"){return new M(t,s,i,e,o,n)}class C{constructor(t,s,i,o,n,h,r="black"){let c,u,d,f,g,m,b,P,y,v;l.call(this);const k=[],z=p(o,0,0),D=p(0,o,0),x=p(0,0,o);for(let l=0;l<n;l++)for(let p=0;p<h;p++)c=a(t+l*o,s+p*o,i),u=X(c,z),d=X(u,x),f=X(c,x),g=X(u,D),m=X(g,x),b=X(f,D),0===p&&(P=(0,e.R_h)([c.p2d,u.p2d,d.p2d,f.p2d],r),P.couleurDeRemplissage="lightgray",k.push(P)),l===n-1&&(v=(0,e.R_h)([u.p2d,g.p2d,m.p2d,d.p2d],r),v.couleurDeRemplissage="darkgray",k.push(v)),y=(0,e.R_h)([f.p2d,d.p2d,m.p2d,b.p2d],r),y.couleurDeRemplissage="white",k.push(y);this.svg=function(t){let s="";for(const i of k)s+=i.svg(t)+"\n";return s=`<g id="${this.id}">${s}</g>`,s},this.tikz=function(){let t="";for(const s of k)t+=s.tikz()+"\n";return t}}}function w(t,s,i,e,o,n,h="black"){return new C(t,s,i,e,o,n,h)}class I{constructor(t,s,i,o,n,h,r,c="black"){let u,d,f,g,m,b,P,y,v,k;l.call(this);const z=[],D=p(o,0,0),x=p(0,o,0),R=p(0,0,o);for(let l=0;l<n;l++)for(let p=0;p<h;p++)for(let h=0;h<r;h++)u=a(t+l*o,s+p*o,i+h*o),d=X(u,D),f=X(d,R),g=X(u,R),m=X(d,x),b=X(m,R),P=X(g,x),0===p&&(y=(0,e.R_h)([u.p2d,d.p2d,f.p2d,g.p2d],c),y.couleurDeRemplissage="lightgray",z.push(y)),l===n-1&&(k=(0,e.R_h)([d.p2d,m.p2d,b.p2d,f.p2d],c),k.couleurDeRemplissage="darkgray",z.push(k)),h===r-1&&(v=(0,e.R_h)([g.p2d,f.p2d,b.p2d,P.p2d],c),v.couleurDeRemplissage="white",z.push(v));this.svg=function(t){let s="";for(const i of z)s+=i.svg(t)+"\n";return s=`<g id="${this.id}">${s}</g>`,s},this.tikz=function(){let t="";for(const s of z)t+=s.tikz()+"\n";return t}}}function A(t,s,i,e,o,n,h="black"){return new I(t,s,i,e,o,n,h)}class F{constructor(t,s,i,o,n,h,r,c){function a(t,s,i,o,n){const h=Math.cos(o*Math.PI/180),r=Math.sin(o*Math.PI/180),l=Math.cos(n*Math.PI/180),c=Math.sin(n*Math.PI/180);return(0,e.xmu)(h*t-r*s,-r*c*t-h*c*s+l*i)}let u;l.call(this),this.x=t,this.y=s,this.z=i,this.alpha=o,this.beta=n,this.colorD=h,this.colorG=c,this.colorT=r,this.lstPoints=[],this.lstPolygone=[],this.lstPoints.push(a(this.x,this.y,this.z,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y,this.z,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y+1,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y+1,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y+1,this.z,this.alpha,this.beta)),u=(0,e.R_h)([this.lstPoints[0],this.lstPoints[1],this.lstPoints[2],this.lstPoints[3]],"black"),u.opaciteDeRemplissage=1,u.couleurDeRemplissage=this.colorD,this.lstPolygone.push(u),u=(0,e.R_h)([this.lstPoints[2],this.lstPoints[4],this.lstPoints[5],this.lstPoints[3]],"black"),u.couleurDeRemplissage=this.colorG,u.opaciteDeRemplissage=1,this.lstPolygone.push(u),u=(0,e.R_h)([this.lstPoints[3],this.lstPoints[5],this.lstPoints[6],this.lstPoints[0]],"black"),u.couleurDeRemplissage=this.colorT,u.opaciteDeRemplissage=1,this.lstPolygone.push(u),this.svg=function(t){let s="";for(let i=0;i<3;i++)s+="\n\t"+this.lstPolygone[i].svg(t);return s=`<g id="${this.id}">${s}</g>`,s},this.tikz=function(){let t="";for(let s=0;s<3;s++)t+="\n\t"+this.lstPolygone[s].tikz();return t},this.svgml=function(t,s){let i="";for(let e=0;e<3;e++)i+="\n\t"+this.lstPolygone[e].svgml(t,s);return i},this.tikzml=function(t){let s="";for(let i=0;i<3;i++)s+="\n\t"+this.lstPolygone[i].tikzml(t);return s}}}function $(t=0,s=0,i=0,e=45,o=-35,{colorD:n="green",colorT:h="white",colorG:r="gray"}={}){return new F(t,s,i,e,o,n,r,h)}function E(t,s,i){let e,o;const n=h.norm(s.matrice),r=h.multiply(s.matrice,1/n),l=r._data[0],d=r._data[1],f=r._data[2],g=Math.cos(i*Math.PI/180),m=Math.sin(i*Math.PI/180),b=1-g,P=h.matrix([[l*l*b+g,l*d*b-f*m,l*f*b+d*m],[l*d*b+f*m,d*d*b+g,d*f*b-l*m],[l*f*b-d*m,d*f*b+l*m,f*f*b+g]]);return t.constructor===c?(e=h.matrix([t.x,t.y,t.z]),o=h.multiply(P,e),a(o._data[0],o._data[1],o._data[2])):t.constructor===u?(e=t,o=h.multiply(P,e.matrice),p(o._data[0],o._data[1],o._data[2])):void 0}function T(t,s,i,e){const o=s.directeur,n=s.origine,h=[];if(t.constructor===c){const s=p(n,a(0,0,0)),e=p(a(0,0,0),n),h=X(t,s);return X(E(h,o,i),e)}if(t.constructor===u)return E(t,o,i);if(t.constructor===P){for(let e=0;e<t.listePoints.length;e++)h.push(T(t.listePoints[e],s,i));return y(h,void 0!==e?e:t.color)}}function O(t,s,i,o,n){let h,r,c;l.call(this),this.epaisseur=o,this.color=n;const a=[];h=X(t.origine,s);for(let l=0;l<i;l+=5)r=T(h,t,5),c=(0,e.EXn)(h.p2d,r.p2d),c.color=this.color,c.epaisseur=this.epaisseur,a.push(c),h=r;r=T(h,t,5),c=(0,e.EXn)(h.p2d,r.p2d),c.color=this.color,c.epaisseur=this.epaisseur,a.push(c);const u=m(r,t.directeur),p=T(h,u,30),d=T(h,u,-30);c=(0,e.EXn)(r.p2d,p.p2d),c.color=this.color,c.epaisseur=this.epaisseur,a.push(c),c=(0,e.EXn)(r.p2d,d.p2d),c.color=this.color,c.epaisseur=this.epaisseur,a.push(c),this.svg=function(t){let s="";for(const i of a)s+="\n\t"+i.svg(t);return s},this.tikz=function(){let t="";for(const s of a)t+="\n\t"+s.tikz();return t}}function V(t,s,i,e,o){return new O(t,s,i,e,o)}function X(t,s){if(t.constructor===c){return a(t.x+s.x,t.y+s.y,t.z+s.z)}if(t.constructor===P){const i=[];for(let e=0;e<t.listePoints.length;e++)i.push(X(t.listePoints[e],s));return y(i,t.color)}}}}]);
//# sourceMappingURL=3663.2f123062c4b8507a5959.js.map