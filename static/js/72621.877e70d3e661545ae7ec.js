"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[72621,25523],{25523:(t,s,i)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...s){0===t&&(this.listeArguments=[]);let i="";for(const e of s)void 0!==e&&(i+=e.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>e})},93661:(t,s,i)=>{i.d(s,{Ut:()=>a,SS:()=>d,O7:()=>b,sq:()=>P,JP:()=>f,r1:()=>y,RP:()=>D,Nd:()=>M,xS:()=>k,VP:()=>z,hd:()=>w,oO:()=>A,sV:()=>T,VY:()=>V,y$:()=>O,kO:()=>N,Kf:()=>K,ee:()=>Q,WD:()=>J,IJ:()=>G,NK:()=>L});var e=i(71250),o=i(56018),h=i(22380);const c={matrix:o.pIu,multiply:o.JpY,norm:o.KOy,cross:o.kCc,dot:o.AKD};let r=0;function l(){this.positionLabel="above",this.isVisible=!0,this.color="black",this.style="",this.styleTikz="",this.epaisseur=1,this.opacite=1,this.pointilles=!1,this.id=r,r++,h.Do.objets2D.push(this)}class n{constructor(t,s,i,o,r,l){const n=h.Do.anglePerspective*Math.PI/180,a=h.Do.coeffPerspective,u=c.matrix([[1,a*Math.cos(n),0],[0,a*Math.sin(n),1]]);this.x=t,this.y=s,this.z=i,this.visible=o,this.label=r,this.typeObjet="point3d";const d=c.matrix([this.x,this.y,this.z]),p=c.multiply(u,d);this.c2d=(0,e.xmu)(p._data[0],p._data[1],this.label,l)}}function a(t,s,i=0,e=!0,o="",h="above left"){return new n(t,s,i,e,o,h)}class u{constructor(...t){const s=h.Do.anglePerspective*Math.PI/180,i=h.Do.coeffPerspective,o=c.matrix([[1,i*Math.cos(s),0],[0,i*Math.sin(s),1]]);2===t.length?(this.x=t[1].x-t[0].x,this.y=t[1].y-t[0].y,this.z=t[1].z-t[0].z):"number"==typeof t[0]?(this.x=t[0],this.y=t[1],this.z=t[2]):1===t.length&&(this.x=t[0]._data[0],this.y=t[0]._data[1],this.z=t[0]._data[2]),this.matrice=c.matrix([this.x,this.y,this.z]),this.norme=Math.sqrt(this.x**2+this.y**2+this.z**2);const r=c.multiply(o,this.matrice);this.c2d=(0,e.tno)(r._data[0],r._data[1]),this.representant=function(t){const s=G(t,this);return(0,e.tno)(t.c2d,s.c2d).representant(t.c2d)}}}function d(...t){return new u(...t)}class p{constructor(t,s,i,o){this.extremite1=t,this.extremite2=s,this.color=i,t.visible&&s.visible&&o?this.visible=!0:this.visible=!1,this.c2d=(0,e.EXn)(t.c2d,s.c2d,i),this.visible?this.c2d.pointilles=!1:this.c2d.pointilles=2}}function b(t,s,i="black",e=!0){return new p(t,s,i,e)}class m{constructor(t,s){s.constructor===u?this.directeur=s:s.constructor===n&&(this.directeur=d(t,s)),this.origine=t;const i=G(this.origine,this.directeur);this.point=i,this.c2d=(0,e.VTK)(this.origine.c2d,i.c2d),this.c2d.isVisible=!1}}function P(t,s){return new m(t,s)}function f(t,s,i,o,c,r=h.Do.anglePerspective){let l;const n=[],a=[];l="caché"===o?1:-1;const u=P(t,s);n.push(Q(G(t,i),u,r)),a.push(n[0].c2d);for(let e=1;e<19;e++)n.push(Q(n[e-1],u,10*l)),a.push(n[e].c2d);const d=(0,e.RxL)(a,c);return"caché"===o&&(d.pointilles=2,d.opacite=.3),d}class g{constructor(...t){Array.isArray(t[0])?(this.listePoints=t[0],t[1]&&(this.color=t[1])):(this.listePoints=t,this.color="black");const s=[];let i;const e=[];i=this.listePoints[0];for(let o=1;o<this.listePoints.length;o++)s.push(b(i,this.listePoints[o],this.color)),e.push(s[o-1].c2d),i=this.listePoints[o];s.push(b(i,this.listePoints[0],this.color)),e.push(s[this.listePoints.length-1].c2d),this.aretes=s,this.c2d=e}}function y(...t){return new g(...t)}function x(t,s,i,e,o){let r,n,u,p,b,m;l.call(this),this.centre=t,this.rayon=d(s,0,0),this.normal=d(0,0,1),this.color=o,this.nbMeridiens=e,this.nbParalleles=i,this.c2d=[];const P=d(c.cross(this.normal.matrice,this.rayon.matrice)),g=d(c.cross(this.rayon.matrice,c.multiply(P.matrice,1/c.norm(P.matrice)))),y=s,x="caché",D="visible";for(let c,l=0;l<1;l+=1/(this.nbParalleles+1))b=a(t.x,t.y,t.z+y*Math.sin(l*Math.PI/2)),m=a(t.x,t.y,t.z+y*Math.sin(-l*Math.PI/2)),c=d(y*Math.cos(l*Math.PI/2),0,0),r=f(b,this.normal,c,x,this.color,h.Do.anglePerspective),n=f(b,this.normal,c,D,this.color,h.Do.anglePerspective),u=f(m,this.normal,c,x,this.color,h.Do.anglePerspective),p=f(m,this.normal,c,D,this.color,h.Do.anglePerspective),this.c2d.push(r,n,u,p);for(let c,l,a=0;a<1;a+=1/this.nbMeridiens)c=K(P,this.normal,90+h.Do.anglePerspective+90*a),l=K(P,this.normal,90+h.Do.anglePerspective-90*(a+1/this.nbMeridiens)),r=f(this.centre,c,g,D,this.color,0),n=f(this.centre,c,g,x,this.color,0),u=f(this.centre,l,g,D,this.color,0),p=f(this.centre,l,g,x,this.color,0),this.c2d.push(r,n,u,p)}function D(t,s,i,e,o="black"){return new x(t,s,i,e,o)}function R(t,s,i,o,h,r){let n,a,u;l.call(this),this.centrebase1=t,this.centrebase2=s,this.normal=i,this.rayon1=o,this.rayon2=h,this.color=r,this.c2d=[];const p=d(c.cross(this.normal.matrice,this.rayon1.matrice));let b,m;c.dot(p.matrice,d(0,1,0).matrice)>0?(b="caché",a=this.color,m="visible",u=this.color):(m="caché",b="visible",a=this.color,u=this.color);const P=f(this.centrebase1,this.normal,this.rayon1,b,a),g=f(this.centrebase2,this.normal,this.rayon2,b,a),y=f(this.centrebase1,this.normal,this.rayon1,m,u),x=f(this.centrebase2,this.normal,this.rayon2,m,u);g.pointilles=!1,g.color=this.color;for(let c=0;c<P.listePoints.length;c+=2)n=(0,e.EXn)(g.listePoints[c],P.listePoints[c]),"caché"===b?(n.pointilles=2,n.color=this.color,n.opacite=.3):n.color=this.color,this.c2d.push(n);for(let c=0;c<y.listePoints.length;c+=2)n=(0,e.EXn)(x.listePoints[c],y.listePoints[c]),"caché"===m?(n.pointilles=2,n.color=this.color,n.opacite=.3):n.color=this.color,this.c2d.push(n);this.c2d.push(P,y,g,x)}function M(t,s,i,e,o,h="black"){return new R(t,s,i,e,o,h)}class v{constructor(t,s,i){let e;l.call(this),this.color=i,t.color=i,this.base1=t,this.base2=G(t,s),this.base2.color=this.base1.color,this.aretes=[],this.c2d=[];for(let o=0;o<this.base1.listePoints.length;o++)this.c2d.push(this.base1.c2d[o]);for(let o=0;o<this.base2.listePoints.length;o++)this.c2d.push(this.base2.c2d[o]);for(let o=0;o<this.base1.listePoints.length;o++)e=b(this.base1.listePoints[o],this.base2.listePoints[o],this.color),this.c2d.push(e.c2d)}}function k(t,s,i="black"){return new v(t,s,i)}class _{constructor(t,s,i){let e;l.call(this),this.color=i,t.color=i,this.base=t,this.aretes=[],this.sommet=s,this.c2d=[];for(let o=0;o<this.base.listePoints.length;o++)e=this.base.c2d[o],this.base.listePoints[o].visible?e.pointilles=!1:e.pointilles=2,this.c2d.push(e);for(let o=0;o<this.base.listePoints.length;o++)e=b(this.base.listePoints[o],this.sommet,this.color,!0),this.base.listePoints[o].visible?e.c2d.pointilles=!1:e.c2d.pointilles=2,this.c2d.push(e.c2d)}}function z(t,s,i="black"){return new _(t,s,i)}class C{constructor(t,s,i=.5,e="black"){l.call(this),this.color=e,t.color=e,this.base=t,this.coeff=i,this.aretes=[],this.sommet=s,this.c2d=[];const o=[];for(let h,c=0;c<this.base.listePoints.length;c++)h=L(s,t.listePoints[c],i),h.visible=!0,o.push(h);this.base2=y(...o),this.c2d.push(...this.base.c2d);for(let h=0;h<t.listePoints.length;h++)this.aretes.push(b(t.listePoints[h],this.base2.listePoints[h],e,t.listePoints[h].visible)),this.c2d.push(this.aretes[h].c2d);this.c2d.push(...this.base2.c2d)}}function w(t,s,i=.5,e="black"){return new C(t,s,i,e)}class I{constructor(t,s,i,o,h="black"){l.call(this);const c=a(t,s,i),r=d(o,0,0),n=d(0,o,0),u=d(0,0,o),p=G(c,r),b=G(p,u),m=G(c,u),P=G(c,n),f=G(P,r),g=G(f,u),y=G(m,n),x=(0,e.R_h)([c.c2d,p.c2d,b.c2d,m.c2d],h),D=(0,e.R_h)([p.c2d,f.c2d,g.c2d,b.c2d],h),R=(0,e.R_h)([m.c2d,b.c2d,g.c2d,y.c2d],h);x.couleurDeRemplissage="lightgray",R.couleurDeRemplissage="white",D.couleurDeRemplissage="darkgray",this.c2d=[x,D,R]}}function A(t,s,i,e){return new I(t,s,i,e)}class F{constructor(t,s,i,o,h,c="black"){let r,n,u,p,b,m,P,f,g;l.call(this),this.c2d=[];const y=d(o,0,0),x=d(0,o,0),D=d(0,0,o);let R=a(t,s,i);for(let l=0;l<h;l++)r=G(R,y),n=G(r,D),u=G(R,D),p=G(R,x),b=G(p,y),m=G(b,D),P=G(u,x),f=(0,e.R_h)([R.c2d,r.c2d,n.c2d,u.c2d],c),g=(0,e.R_h)([u.c2d,n.c2d,m.c2d,P.c2d],c),f.couleurDeRemplissage="lightgray",g.couleurDeRemplissage="white",this.c2d.push(f,g),R=G(R,y);const M=(0,e.R_h)([r.c2d,b.c2d,m.c2d,n.c2d],c);M.couleurDeRemplissage="darkgray",this.c2d.push(M)}}function T(t,s,i,e,o,h="black"){return new F(t,s,i,e,o,h)}class E{constructor(t,s,i,o,h,c,r="black"){let n,u,p,b,m,P,f,g,y,x;l.call(this),this.c2d=[];const D=d(o,0,0),R=d(0,o,0),M=d(0,0,o);for(let l=0;l<h;l++)for(let d=0;d<c;d++)n=a(t+l*o,s+d*o,i),u=G(n,D),p=G(u,M),b=G(n,M),m=G(u,R),P=G(m,M),f=G(b,R),0===d&&(g=(0,e.R_h)([n.c2d,u.c2d,p.c2d,b.c2d],r),g.couleurDeRemplissage="lightgray",this.c2d.push(g)),l===h-1&&(x=(0,e.R_h)([u.c2d,m.c2d,P.c2d,p.c2d],r),x.couleurDeRemplissage="darkgray",this.c2d.push(x)),y=(0,e.R_h)([b.c2d,p.c2d,P.c2d,f.c2d],r),y.couleurDeRemplissage="white",this.c2d.push(y)}}function V(t,s,i,e,o,h,c="black"){return new E(t,s,i,e,o,h,c)}class q{constructor(t,s,i,o,h,c,r,n="black"){let u,p,b,m,P,f,g,y,x,D;l.call(this),this.c2d=[];const R=d(o,0,0),M=d(0,o,0),v=d(0,0,o);for(let l=0;l<h;l++)for(let d=0;d<c;d++)for(let c=0;c<r;c++)u=a(t+l*o,s+d*o,i+c*o),p=G(u,R),b=G(p,v),m=G(u,v),P=G(p,M),f=G(P,v),g=G(m,M),0===d&&(y=(0,e.R_h)([u.c2d,p.c2d,b.c2d,m.c2d],n),y.couleurDeRemplissage="lightgray",this.c2d.push(y)),l===h-1&&(D=(0,e.R_h)([p.c2d,P.c2d,f.c2d,b.c2d],n),D.couleurDeRemplissage="darkgray",this.c2d.push(D)),c===r-1&&(x=(0,e.R_h)([m.c2d,b.c2d,f.c2d,g.c2d],n),x.couleurDeRemplissage="white",this.c2d.push(x))}}function O(t,s,i,e,o,h,c="black"){return new q(t,s,i,e,o,h,c)}class X{constructor(t,s,i,o,h,c,r,n){function a(t,s,i,o,h){const c=Math.cos(o*Math.PI/180),r=Math.sin(o*Math.PI/180),l=Math.cos(h*Math.PI/180),n=Math.sin(h*Math.PI/180);return(0,e.xmu)(c*t-r*s,-r*n*t-c*n*s+l*i)}let u;l.call(this),this.x=t,this.y=s,this.z=i,this.alpha=o,this.beta=h,this.colorD=c,this.colorG=n,this.colorT=r,this.lstPoints=[],this.lstPolygone=[],this.lstPoints.push(a(this.x,this.y,this.z,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y,this.z,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x+1,this.y+1,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y+1,this.z+1,this.alpha,this.beta)),this.lstPoints.push(a(this.x,this.y+1,this.z,this.alpha,this.beta)),u=(0,e.R_h)([this.lstPoints[0],this.lstPoints[1],this.lstPoints[2],this.lstPoints[3]],"black"),u.opaciteDeRemplissage=1,u.couleurDeRemplissage=this.colorD,this.lstPolygone.push(u),u=(0,e.R_h)([this.lstPoints[2],this.lstPoints[4],this.lstPoints[5],this.lstPoints[3]],"black"),u.couleurDeRemplissage=this.colorG,u.opaciteDeRemplissage=1,this.lstPolygone.push(u),u=(0,e.R_h)([this.lstPoints[3],this.lstPoints[5],this.lstPoints[6],this.lstPoints[0]],"black"),u.couleurDeRemplissage=this.colorT,u.opaciteDeRemplissage=1,this.lstPolygone.push(u),this.c2d=this.lstPolygone}}function N(t=0,s=0,i=0,e=45,o=-35,{colorD:h="green",colorT:c="white",colorG:r="gray"}={}){return new X(t,s,i,e,o,h,r,c)}function K(t,s,i){let e,o;const h=c.norm(s.matrice),r=c.multiply(s.matrice,1/h),l=r._data[0],p=r._data[1],b=r._data[2],m=Math.cos(i*Math.PI/180),P=Math.sin(i*Math.PI/180),f=1-m,g=c.matrix([[l*l*f+m,l*p*f-b*P,l*b*f+p*P],[l*p*f+b*P,p*p*f+m,p*b*f-l*P],[l*b*f-p*P,p*b*f+l*P,b*b*f+m]]);return t.constructor===n?(e=c.matrix([t.x,t.y,t.z]),o=c.multiply(g,e),a(o._data[0],o._data[1],o._data[2])):t.constructor===u?(e=t,o=c.multiply(g,e.matrice),d(o._data[0],o._data[1],o._data[2])):void 0}function Q(t,s,i,e){const o=s.directeur,h=s.origine,c=[];if(t.constructor===n){const s=d(h,a(0,0,0)),e=d(a(0,0,0),h),c=G(t,s);return G(K(c,o,i),e)}if(t.constructor===u)return K(t,o,i);if(t.constructor===g){for(let e=0;e<t.listePoints.length;e++)c.push(Q(t.listePoints[e],s,i));return y(c,void 0!==e?e:t.color)}}function S(t,s,i,o,h){let c,r,n;l.call(this),this.epaisseur=o,this.color=h,this.c2d=[],c=G(t.origine,s);for(let l=0;l<i;l+=5)r=Q(c,t,5),n=(0,e.EXn)(c.c2d,r.c2d),n.color=this.color,n.epaisseur=this.epaisseur,this.c2d.push(n),c=r;r=Q(c,t,5),n=(0,e.EXn)(c.c2d,r.c2d),n.color=this.color,n.epaisseur=this.epaisseur,this.c2d.push(n);const a=P(r,t.directeur),u=Q(c,a,30),d=Q(c,a,-30);n=(0,e.EXn)(r.c2d,u.c2d),n.color=this.color,n.epaisseur=this.epaisseur,this.c2d.push(n),n=(0,e.EXn)(r.c2d,d.c2d),n.color=this.color,n.epaisseur=this.epaisseur,this.c2d.push(n)}function J(t,s,i,e,o){return new S(t,s,i,e,o)}function G(t,s){if(t.constructor===n){return a(t.x+s.x,t.y+s.y,t.z+s.z)}if(t.constructor===g){const i=[];for(let e=0;e<t.listePoints.length;e++)i.push(G(t.listePoints[e],s));return y(i,t.color)}}function L(t,s,i,e){let o;const h=[];if(t.constructor===n)return o=d(s,t),o.x*=i,o.y*=i,o.z*=i,G(s,o);if(t.constructor===u)return o=d(t.x,t.y,t.z),o.x*=i,o.y*=i,o.z*=i,o;if(t.constructor===g){for(let o=0;o<t.listePoints.length;o++)h.push(L(t.listePoints[o],s,i,e));return y(h,void 0!==e?e:t.color)}}}}]);
//# sourceMappingURL=72621.877e70d3e661545ae7ec.js.map