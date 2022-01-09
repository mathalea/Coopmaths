"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[81343,25523],{81343:(e,t,$)=>{$.r(t),$.d(t,{titre:()=>ce,dateDePublication:()=>ue,default:()=>he});var r=$(25523),i=$(71250),n=$(22380),s=$(25482),a=$(56018),o=$(77074);let l,c,u,h,p,g,m,d,A,O,b,S,k,f,w,B,x,C,q,D,P,j,R,J,v,F,W,Z,U,I,Y,M,N,K,Q,y,L,G,T,V,H,E,X,z,_,ee,te,$e,re,ie,ne,se,ae,oe,le=e=>e;const ce="Homothétie (calculs)",ue="28/11/2021";function he(){r.default.call(this),this.consigne="",this.nbQuestions=11,this.nbCols=0,this.nbColsCorr=0,this.tailleDiaporama=1,this.video="",this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,n.Do.isHtml?this.spacing=2.5:this.spacing=0,n.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=0,this.sup=0,this.sup2=3,this.sup3=1,this.sup4=!0,this.besoinFormulaireNumerique=["Type de question",10,["0 : Mélange des types de questions","1 : Calculer le rapport","2 : Calculer une longueur image","3 : Calculer une longueur antécédent","4 : Calculer une longueur image (deux étapes)","5 : Calculer une longueur antécédent (deux étapes)","6 : Calculer une aire image","7 : Calculer une aire antécédent","8 : Calculer le rapport à partir des aires","9 : Calculer le rapport connaissant OA et AA'","10: Encadrer le rapport k","11: Encadrer le rapport k connaissant OA et AA'"].join("\n")],this.besoinFormulaire2Numerique=["Signe du rapport",3,"1 : positif\n2 : négatif\n3 : mélange"],this.besoinFormulaire3Numerique=["Choix des valeurs",3,"1 : k est décimal (0.1 < k < 4) \n2 : k est une fraction k = a/b avec (a,b) in [1;9]\n3 : k est une fraction et les mesures sont des entiers"],this.besoinFormulaire4CaseACocher=["Figure dans l`énoncé (1-6,9-11)",!1],this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[];let t=[];t=0===this.sup?["rapport","image","antécédent","image2etapes","antecendent2etapes","aireImage","aireAntécédent","aireRapport","rapport2","encadrerk","encadrerk2"]:[["rapport","image","antécédent","image2etapes","antecendent2etapes","aireImage","aireAntécédent","aireRapport","rapport2","encadrerk","encadrerk2"][this.sup-1]];const $=(0,s.SRM)(t,this.nbQuestions),r=this.sup3>1,ce=3===this.sup3;for(let ue,he,pe,ge,me,de,Ae,Oe,be,Se=0,ke=0;Se<this.nbQuestions&&ke<50;){const e=(0,s.GVn)(5,["P","Q","U","V","W","X","Y","Z"]),t=e[0],fe=e[1],we=e[2],Be=e[3],xe=e[4],Ce=(0,a.Pj$)((0,s.q$q)([[1],[-1],[-1,1]][this.sup2-1]));let qe=(0,a.Pj$)(1,1);for(;"1"===(0,a.WnP)(qe).toString();)qe=r?(0,a.JpY)((0,a.Pj$)((0,s.nSR)(1,9),(0,s.nSR)(1,9)),Ce):(0,a.JpY)((0,a.Pj$)((0,s.q$q)([(0,s.nSR)(15,40)/10,(0,s.nSR)(1,9)/10])),Ce);let De=(0,a.WnP)(qe);const Pe=(0,o.ku)(De>1),je=(0,o.ku)(qe>0),Re=ce?(0,a.Pj$)((0,s.nSR)(1,19)):(0,a.Pj$)((0,s.nSR)(11,99));let Je=(0,a.JpY)(Pe?(0,a.csF)(Re,10):Re,10**ce*De.d**r),ve=(0,a.JpY)(qe,Je),Fe=(0,a.JpY)((0,a.csF)((0,s.nSR)(10,99,[parseInt(Re.toString())]),(0,a.Pj$)(10)),10**ce*De.d**r),We=(0,a.JpY)(qe,Fe),Ze=(0,a.$XF)(ve,Je),Ue=(0,a.Pj$)((0,s.q$q)([(0,s.nSR)(1,4)+.5+(0,s.q$q)([0,.5]),(0,s.nSR)(1,9)/10])),Ie=ce?(0,a.Pj$)((0,s.nSR)(10,99)):(0,a.Pj$)((0,s.nSR)(100,999)/10),Ye=(0,a.JpY)((0,a.sQ3)(Ue,2),Ie),Me=(0,a.NMM)(Ye,2);const Ne=Pe?">":"<",Ke=Pe?"un agrandissement":"une réduction",Qe=Pe?je?"$k > 1$":"$k < -1$":je?"$0 < k < 1$":"$-1 < k < 0$",ye=je?"positif":"négatif",Le=je?"":"-",Ge=je?"":"l'opposé de ",Te=je?"le":"l'opposé du ",Ve=this.sup4?"":`de rapport ${ye} et `,He=je?"\\in":"\\notin",Ee=this.sup4?"":"Illustrer la situation par une figure à main levée.<br>";let Xe=(0,a.WnP)((0,a.csF)(1,qe));const ze=(0,s.AZj)((0,a.WnP)((0,a.csF)(ve,Xe.d))),_e=(0,s.AZj)((0,a.WnP)((0,a.csF)(We,Xe.d))),et=(0,a.csF)(10,(0,a.Fp7)((0,a.WnP)(Je),(0,a.WnP)(ve),(0,a.WnP)(Ze)));let tt=!0,$t=ve,rt=Je;(0,o.ku)((0,a.WnP)(qe)<.3)?$t=(0,a.JpY)((0,a.JpY)((0,a.Pj$)(3,10),Je),(-1)**(0,o.ku)(qe<0)):(0,o.ku)((0,a.WnP)(qe)<1&&(0,a.WnP)(qe)>.7)?$t=(0,a.JpY)((0,a.JpY)((0,a.Pj$)(7,10),Je),(-1)**(0,o.ku)(qe<0)):(0,o.ku)((0,a.WnP)(qe)>1&&(0,a.WnP)(qe)<1.3)?$t=(0,a.JpY)((0,a.JpY)((0,a.Pj$)(13,10),Je),(-1)**(0,o.ku)(qe<0)):(0,o.ku)((0,a.WnP)(qe)>4)?rt=(0,a.JpY)((0,a.Pj$)(2,1),Je):tt=!1;const it=tt&&this.sup4&&![4,5,6,7,8].includes($[Se])?"(La figure n'est pas à l'échelle)":"",nt=this.sup4?"(La figure n'est pas à l'échelle)":"";let st={O:(0,i.xmu)(0,0,`${we}`),A:(0,i.xmu)((0,a.JpY)(rt,et),0,`${t}`,"below"),hA:(0,i.xmu)((0,a.JpY)($t,et),0,`${fe}`,je?"below":"above")};st=Object.assign({},st,{B:(0,i.xcw)((0,i.Wnp)(st.A,st.O,40),st.O,1.2,`${Be}`),hB:(0,i.xcw)((0,i.Wnp)(st.hA,st.O,40),st.O,1.2,`${xe}`,je?"above":"below")}),Xe={tex:(0,s.AZj)(Xe,r),n:Xe.n,d:Xe.d},ve=(0,s.AZj)((0,a.WnP)(ve));const at=ce&&!(0,a.UaK)(De)?`=${ve}\\times ${Xe.tex}`+(1!==Xe.d?`=\\dfrac{${ve}}{${Xe.d}}\\times ${Xe.n}=${ze}\\times ${Xe.n}`:""):"";We=(0,s.AZj)((0,a.WnP)(We));const ot=ce&&!(0,a.UaK)(De)?`=${We}\\times ${Xe.tex}`+(1!==Xe.d?`=\\dfrac{${We}}{${Xe.d}}\\times ${Xe.n}=${_e}\\times ${Xe.n}`:""):"";Ye=(0,s.AZj)(Ye),Me=(0,s.AZj)(Me),qe=(0,s.AZj)(qe,r),Ue=(0,s.AZj)(Ue,r);const lt=1!==De.d&&1!==this.sup3||!je?String.raw(l||(l=le`\left(${0}${0}\right)`),Le,Ue):Le+Ue;De=(0,s.AZj)(De,r),Je=(0,s.AZj)(Je),Ze=(0,s.AZj)((0,a.WnP)(Ze)),Fe=(0,s.AZj)(Fe),Ie=(0,s.AZj)(Ie);const ct=je?Pe?`${we}${t} + ${t}${fe} = ${Je} + ${Ze} `:`${we}${t} - ${t}${fe} = ${Je} - ${Ze}`:`${fe}${t} - ${we}${t} = ${Ze} - ${Je}`;st=Object.assign({},st,{segmentOA:(0,i.PGN)(st.O,st.A),segmentOhA:(0,i.PGN)(st.O,st.hA),segmentOB:(0,i.PGN)(st.O,st.B),segmentOhB:(0,i.PGN)(st.O,st.hB)}),st=Object.assign({},st,{arcOA:Pe||!je?st.A:(0,i.vZI)(st.O,st.A,60,!1),arcOhA:Pe&&je?(0,i.vZI)(st.O,st.hA,60,!1):st.hA,arcOB:Pe||!je?st.B:(0,i.vZI)(st.B,st.O,60,!1),arcOhB:Pe&&je?(0,i.vZI)(st.hB,st.O,60,!1):st.hB,arcAhA:je?st.A:(0,i.vZI)(st.hA,st.A,60,!1),legendeOA:Pe||!je?(0,i.DJq)(`${Je.replace("{,}",",")} cm`,st.A,st.O,"black",.3):(0,i.KU6)(`${Je.replace("{,}",",")} cm`,st.O,st.A,60,"black",.3),legendeOhA:Pe&&je?(0,i.KU6)(`${ve.replace("{,}",",")} cm`,st.O,st.hA,60,"black",.3):(0,i.DJq)(`${ve.replace("{,}",",")} cm`,st.hA,st.O,"black",.3),legendeOB:Pe||!je?(0,i.DJq)(`${Fe.replace("{,}",",")} cm`,st.O,st.B,"black",.3):(0,i.KU6)(`${Fe.replace("{,}",",")} cm`,st.B,st.O,60,"black",.3),legendeOhB:Pe&&je?(0,i.KU6)(`${We.replace("{,}",",")} cm`,st.hB,st.O,60,"black",.3):(0,i.DJq)(`${We.replace("{,}",",")} cm`,st.O,st.hB,"black",.3),legendeAhA:je?(0,i.DJq)(`${Ze.replace("{,}",",")} cm`,st.hA,st.A,"black",.3):(0,i.KU6)(`${Ze.replace("{,}",",")} cm`,st.hA,st.A,60,"black",.3)}),st=Object.assign({},st,{legendeOAi:Pe||!je?(0,i.DJq)("?",st.O,st.A,"black",.3):(0,i.KU6)("?",st.O,st.A,60,"black",.3),legendeOhAi:Pe&&je?(0,i.KU6)("?",st.O,st.hA,60,"black",.3):(0,i.DJq)("?",st.O,st.hA,"black",.3),legendeOBi:Pe||!je?(0,i.DJq)("?",st.O,st.B,"black",.3):(0,i.KU6)("?",st.B,st.O,60,"black",.3),legendeOhBi:Pe&&je?(0,i.KU6)("?",st.hB,st.O,60,"black",.3):(0,i.DJq)("?",st.O,st.hB,"black",.3)}),st.arcOA.pointilles=!0,st.arcOhA.pointilles=!0,st.arcOB.pointilles=!0,st.arcOhB.pointilles=!0,st.arcAhA.pointilles=!0;const ut=n.Do.isHtml?1:je?.7:.6,ht=(0,i.BD1)(st.O,st.A,st.hA);let pt=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.segmentOA,st.segmentOhA,st.legendeOA,st.legendeOhA]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.arcOA,st.arcOhA,st.legendeOA,st.legendeOhA,ht);pt={enonce:this.sup4?"<br>"+pt:"",solution:pt};const gt=(0,i.BD1)(st.O,st.A,st.hA);let mt=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.A,st.O,st.hA,st.segmentOA,st.segmentOhA,st.legendeOA,st.legendeOhA]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.arcOA,st.arcOhA,st.legendeOA,st.legendeOhAi,gt);mt={enonce:this.sup4?mt:"",solution:mt};const dt=(0,i.BD1)(st.O,st.A,st.hA);let At=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.A,st.O,st.hA,st.segmentOA,st.segmentOhA,st.legendeOA,st.legendeOhA]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.arcOA,st.arcOhA,st.legendeOAi,st.legendeOhA,dt);At={enonce:this.sup4?At:"",solution:At};const Ot=(0,i.BD1)(st.O,st.A,st.hA,st.B,st.hB);let bt=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.A,st.O,st.hA,st.segmentOA,st.segmentOhA,st.B,st.hB,st.segmentOB,st.segmentOhB,st.legendeOA,st.legendeOhA,st.legendeOB,st.legendeOhB]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.segmentOB,st.segmentOhB,st.legendeOB,st.arcOB,st.legendeOhBi,st.arcOhB,st.legendeOA,st.arcOA,st.legendeOhA,st.arcOhA,Ot);bt={enonce:this.sup4?bt:"",solution:bt};const St=(0,i.BD1)(st.O,st.A,st.hA,st.B,st.hB);let kt=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.A,st.O,st.hA,st.segmentOA,st.segmentOhA,st.B,st.hB,st.segmentOB,st.segmentOhB,st.legendeOA,st.legendeOhA,st.legendeOB,st.legendeOhB]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.segmentOB,st.segmentOhB,st.legendeOBi,st.arcOB,st.legendeOhB,st.arcOhB,st.legendeOA,st.arcOA,st.legendeOhA,st.arcOhA,St);kt={enonce:this.sup4?kt:"",solution:kt};let ft=(0,i.iR9)(Object.assign({},(0,i.$pI)([st.segmentOA,st.segmentOhA,st.legendeOA,st.legendeAhA,ht]),{style:"inline",scale:ut}),st.segmentOA,st.segmentOhA,st.arcOA,st.arcAhA,st.legendeOA,st.legendeAhA,ht);switch(ft={enonce:this.sup4?"<br>"+ft:"",solution:ft},$[Se]){case"rapport":Ae=[String.raw(c||(c=le`${0}${0}=${0}\text{ cm}`),we,fe,ve),String.raw(u||(u=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1]),ge=Ae[pe[0]],me=Ae[pe[1]],Oe=String.raw(h||(h=le`
                    $${0}$ est l'image de $${0}$
                    par une homothétie ${0}
                    de centre $${0}$ tel que $ {${0}}$ et $ {${0}}$.
                    <br>
                    ${0}
                    Calculer le rapport $k$ de cette homothétie ${0}.
                    ${0}
                    `),fe,t,Ve,we,ge,me,Ee,it,pt.enonce),be=String.raw(p||(p=le`
                $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                `),Le,we,fe,we,t,Le,ve,Je,qe),this.correctionDetaillee&&(be=String.raw(g||(g=le`
                  $[${0}${0}]$ est l'image de $[${0}${0}]$
                  et $${0} ${0} ${0} ${0} ${0}$
                  donc c'est ${0} et on a ${0}.
                  <br> ${0}
                  `),we,fe,we,t,we,fe,Ne,we,t,Ke,Qe,pt.solution),be+=String.raw(m||(m=le`
                  <br>
                  Le rapport de cette homothétie est ${0} quotient
                  de la longueur d'un segment "à l'arrivée"
                  par sa longueur "au départ".
                  <br>
                  Soit $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                  `),Te,Le,we,fe,we,t,Le,ve,Je,qe));break;case"image":Oe=String.raw(d||(d=le`
                $${0}$ est l'image de $${0}$ par une homothétie
                de centre $${0}$ et de rapport $k=${0}$
                tel que $ {${0}${0}=${0}\text{ cm}}$.
                <br>
                ${0}
                Calculer $${0}${0}$  ${0}.
                <br>${0}
                `),fe,t,we,qe,we,t,Je,Ee,we,fe,it,mt.enonce),be=String.raw(A||(A=le`
                $${0}${0}= ${0} \times ${0} =  ${0}~\text{cm}$.
                `),we,fe,De,Je,ve),this.correctionDetaillee&&(be=String.raw(O||(O=le`
                ${0} donc $[${0}${0}]$ est ${0} de $[${0}${0}]$.
                <br>${0}
                `),Qe,we,fe,Ke,we,t,mt.solution),be+=String.raw(b||(b=le`
                <br>
                Une homothétie de rapport ${0} est
                une transformation qui multiplie
                toutes les longueurs par ${0} son rapport.
                <br>
                Soit $${0}${0}=${0}k \times ${0}${0}$.
                <br>
                Donc $${0}${0}= ${0} \times ${0} =  ${0}~\text{cm}$.
                `),ye,Ge,we,fe,Le,we,t,we,fe,De,Je,ve));break;case"antécédent":Oe=String.raw(S||(S=le`
                $${0}$ est l'image de $${0}$ par une
                homothétie de centre $${0}$ et de rapport
                $k=${0}$ tel que $ {${0}${0}=${0}\text{ cm}}$.
                <br>
                ${0}
                Calculer $${0}${0}$  ${0}.
                <br>${0}
                `),fe,t,we,qe,we,fe,ve,Ee,we,t,it,At.enonce),be=String.raw(k||(k=le`
                $${0}${0}=\dfrac{${0}${0}}{${0}}=\dfrac{${0}}{${0}} = ${0}~\text{cm}$.
                `),we,t,we,fe,De,ve,De,Je),this.correctionDetaillee&&(be=String.raw(f||(f=le`
                ${0} donc $[${0}${0}]$ est ${0} de $[${0}${0}]$.
                <br>${0}
                `),Qe,we,fe,Ke,we,t,At.solution),be+=String.raw(w||(w=le`
              <br>
              Une homothétie de rapport ${0} est
              une transformation qui multiplie
              toutes les longueurs par ${0} son rapport.
              <br>
              Soit $${0}${0}=${0}k \times  ${0}${0}$.
              <br>
              Donc $${0}${0}=\dfrac{${0}${0}}{${0}k}=\dfrac{${0}}{${0}} ${0} = ${0}~\text{cm}$.
              `),ye,Ge,we,fe,Le,we,t,we,t,we,fe,Le,ve,De,at,Je));break;case"image2etapes":Ae=[String.raw(B||(B=le`${0}${0}=${0}\text{ cm}`),we,Be,Fe),String.raw(x||(x=le`${0}${0}=${0}\text{ cm}`),we,fe,ve),String.raw(C||(C=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1,2]),ge=Ae[pe[0]],me=Ae[pe[1]],de=Ae[pe[2]],Oe=String.raw(q||(q=le`
                    $${0}$ et $${0}$ sont les images respectives
                    de $${0}$ et $${0}$ par une homothétie
                    ${0} de centre $${0}$ tel que
                    $ {${0}}$, $ {${0}}$ et $ {${0}}$.
                    <br>
                    ${0}
                    Calculer $${0}${0}$ ${0}.
                    <br>${0}
                    `),fe,xe,t,Be,Ve,we,ge,me,de,Ee,we,xe,nt,bt.enonce),be=String.raw(D||(D=le`
                    $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$ et $${0}${0}= ${0} \times ${0} = ${0}~\text{cm}$.
                    `),Le,we,fe,we,t,Le,ve,Je,qe,we,xe,De,Fe,We),this.correctionDetaillee&&(be=String.raw(P||(P=le`
                    $[${0}${0}]$ est l'image de $[${0}${0}]$
                    et $${0} ${0} ${0} ${0} ${0}$
                    donc c'est ${0} et on a ${0}.
                    <br>${0}
                    `),we,fe,we,t,we,fe,Ne,we,t,Ke,Qe,bt.solution),be+=String.raw(j||(j=le`
                    <br>        
                    Le rapport de cette homothétie est
                    ${0} quotient de la longueur d'un segment
                    "à l'arrivée" par sa longueur "au départ".
                    <br>
                    Soit $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                    <br>
                    $[${0}${0}]$ est l'image de $[${0}${0}]$.
                    <br>
                    Or une homothétie de rapport ${0}
                    est une transformation qui multiplie
                    toutes les longueurs par ${0} son rapport.
                    <br>
                    Soit $${0}${0}= ${0}k \times ${0}${0}$.
                    <br>
                    Donc $${0}${0}= ${0} \times ${0} = ${0}~\text{cm}$.
                    `),Te,Le,we,fe,we,t,Le,ve,Je,qe,we,xe,we,Be,ye,Ge,we,xe,Le,we,Be,we,xe,De,Fe,We));break;case"antecendent2etapes":Ae=[String.raw(R||(R=le`${0}${0}=${0}\text{ cm}`),we,xe,We),String.raw(J||(J=le`${0}${0}=${0}\text{ cm}`),we,fe,ve),String.raw(v||(v=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1,2]),ge=Ae[pe[0]],me=Ae[pe[1]],de=Ae[pe[2]],Oe=String.raw(F||(F=le`
                      $${0}$ et $${0}$ sont les images respectives
                      de $${0}$ et $${0}$ par une homothétie ${0}
                      de centre $${0}$ tel que
                      $ {${0}}$, $ {${0}}$ et $ {${0}}$.
                      <br>
                      ${0}
                      Calculer $${0}${0}$ ${0}.
                      <br>${0}
                      `),fe,xe,t,Be,Ve,we,ge,me,de,Ee,we,Be,nt,kt.enonce),be=String.raw(W||(W=le`
                      $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$ et $${0}${0}=\dfrac{${0}${0}}{${0}}=\dfrac{${0}}{${0}} = ${0}~\text{cm}$.
                      `),Le,we,fe,we,t,Le,ve,Je,qe,we,Be,we,xe,De,We,De,Fe),this.correctionDetaillee&&(be=String.raw(Z||(Z=le`
                    $[${0}${0}]$ est l'image de $[${0}${0}]$
                    et $${0} ${0} ${0} ${0} ${0}$
                    donc c'est ${0} et on a ${0}.
                    <br>${0}
                    `),we,fe,we,t,we,fe,Ne,we,t,Ke,Qe,kt.solution),be+=String.raw(U||(U=le`
                      <br>
                      Le rapport d'une homothétie est ${0} quotient
                      de la longueur d'un segment "à l'arrivée" par sa longueur "au départ".
                      <br>
                      Soit $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                      <br>
                      $[${0}${0}]$ est l'image de $[${0}${0}]$.
                      <br>
                      Or une homothétie de rapport ${0} est
                      une transformation qui multiplie
                      toutes les longueurs par ${0} son rapport.
                      <br>
                      Soit $${0}${0}=${0}k \times ${0}${0}$.
                      <br>
                      Donc $${0}${0}=\dfrac{${0}${0}}{${0}k}=\dfrac{${0}}{${0}} ${0} = ${0}~\text{cm}$.
                      `),Te,Le,we,fe,we,t,Le,ve,Je,qe,we,xe,we,Be,ye,Ge,we,xe,Le,we,Be,we,Be,we,xe,Le,We,De,ot,Fe));break;case"aireImage":he=Ye===Me?"":"environ",ue="environ"===he?"\\approx":"=",Oe=String.raw(I||(I=le`
                Une figure a pour aire $ {${0}\text{ cm}^2}$.
                <br>
                Calculer l'aire de son image par une homothétie de rapport $${0}${0}$ (arrondir au $ {\text{mm}^2}$ près si besoin).
                `),Ie,Le,Ue),be=String.raw(Y||(Y=le`
                $ {${0}^2 \times ${0} ${0} ${0}~\text{cm}^2}$
                `),lt,Ie,ue,Me),this.correctionDetaillee&&(be=String.raw(M||(M=le`
                Une homothétie de rapport ${0} est une transformation qui multiplie toutes les aires par le carré de son rapport.
                <br>
                $${0}^2 \times ${0} = ${0}$
                <br>
                Donc l'aire de l'image de cette figure est ${0} $ {${0}~\text{cm}^2}$.
                `),ye,lt,Ie,Ye,he,Me));break;case"aireAntécédent":Oe=String.raw(N||(N=le`
                  L'image d'une figure par une homothétie de rapport $${0}${0}$ a pour aire $ {${0}\text{ cm}^2}$.
                  <br>
                  Calculer l'aire de la figure de départ.
                  `),Le,Ue,Ye),be=String.raw(K||(K=le`
                  $ {\dfrac{${0}}{${0}^2} = ${0}~\text{cm}^2}$
                  `),Ye,lt,Ie),this.correctionDetaillee&&(be=String.raw(Q||(Q=le`
                  Une homothétie de rapport ${0} est une transformation qui multiplie toutes les aires par le carré de son rapport.
                  <br>
                  Notons $\mathscr{A}$ l'aire de la figure de départ.
                  <br>
                  D'où $${0}^2 \times \mathscr{A} = ${0}$.
                  <br>
                  Puis $\mathscr{A}=\dfrac{${0}}{${0}^2}=${0}$.
                  <br>
                  Donc l'aire de la figure de départ est $ {${0}~\text{cm}^2}$.
                  `),ye,lt,Ye,Ye,lt,Ie,Ie));break;case"aireRapport":Oe=String.raw(y||(y=le`
                    Une figure et son image par une homothétie de rapport ${0} ont respectivement pour aires $ {${0}\text{ cm}^2}$ et $ {${0}\text{ cm}^2}$.
                    <br>
                    Calculer le rapport de l'homothétie.
                    `),ye,Ie,Ye),be=String.raw(L||(L=le`
                    $ {k=${0}\sqrt{\dfrac{${0}}{${0}}} = ${0}${0}}$
                    `),Le,Ye,Ie,Le,Ue),this.correctionDetaillee&&(be=String.raw(G||(G=le`
                    Une homothétie de rapport ${0} est une transformation qui multiplie toutes les aires par le carré de son rapport.
                    <br>
                    Notons $k$ le rapport de cette homothétie.
                    On a donc $k^2 \times ${0} = ${0}$,
                    ou encore $k^2=\dfrac{${0}}{${0}}$.
                    <br>
                    D'où $ {k=${0}\sqrt{\dfrac{${0}}{${0}}} = ${0}${0}}$.
                    `),ye,Ie,Ye,Ye,Ie,Le,Ye,Ie,Le,Ue));break;case"rapport2":Ae=[String.raw(T||(T=le`${0}${0}=${0}\text{ cm}`),t,fe,Ze),String.raw(V||(V=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1]),ge=Ae[pe[0]],me=Ae[pe[1]],Oe=String.raw(H||(H=le`
                    $${0}$ est l'image de $${0}$
                    par une homothétie ${0}
                    de centre $${0}$ tel que $ {${0}}$ et $ {${0}}$.
                    <br>
                    ${0}
                    Calculer le rapport $k$ de cette homothétie ${0}.
                    ${0}
                    `),fe,t,Ve,we,ge,me,Ee,it,ft.enonce),be=String.raw(E||(E=le`
                $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                `),Le,we,fe,we,t,Le,ve,Je,qe),this.correctionDetaillee&&(be=String.raw(X||(X=le`
                  $${0}${0} = ${0} = ${0}\text{ cm}$
                  <br>
                  $[${0}${0}]$ est l'image de $[${0}${0}]$
                  et $${0} ${0} ${0} ${0} ${0}$
                  donc c'est ${0} et on a ${0}.
                  <br> ${0}
                  `),we,fe,ct,ve,we,fe,we,t,we,fe,Ne,we,t,Ke,Qe,pt.solution),be+=String.raw(z||(z=le`
                  <br>
                  Le rapport de cette homothétie est ${0} quotient
                  de la longueur d'un segment "à l'arrivée"
                  par sa longueur "au départ".
                  <br>
                  Soit $k=${0}\dfrac{${0}${0}}{${0}${0}}=${0}\dfrac{${0}}{${0}}=${0}$.
                  `),Te,Le,we,fe,we,t,Le,ve,Je,qe));break;case"encadrerk":Ae=[String.raw(_||(_=le`${0}${0}=${0}\text{ cm}`),we,fe,ve),String.raw(ee||(ee=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1]),ge=Ae[pe[0]],me=Ae[pe[1]],Oe=String.raw(te||(te=le`
                    $${0}$ est l'image de $${0}$
                    par une homothétie ${0}
                    de centre $${0}$ tel que $ {${0}}$ et $ {${0}}$.
                    <br>
                    ${0}
                    Sans effectuer de calculs, encadrer $k$ le plus précisément possible ${0}.
                    ${0}
                    `),fe,t,Ve,we,ge,me,Ee,it,pt.enonce),be=String.raw($e||($e=le`
                $${0}$.
                `),Qe),this.correctionDetaillee&&(be=String.raw(re||(re=le`
                  $[${0}${0}]$ est l'image de $[${0}${0}]$
                  et $${0} ${0} ${0} ${0} ${0}$
                  donc c'est ${0}.
                  <br>
                  De plus $${0}${0}[${0};${0})$ donc ${0}.
                  <br> ${0}
                  `),we,fe,we,t,we,fe,Ne,we,t,Ke,fe,He,we,t,Qe,pt.solution));break;case"encadrerk2":Ae=[String.raw(ie||(ie=le`${0}${0}=${0}\text{ cm}`),t,fe,Ze),String.raw(ne||(ne=le`${0}${0}=${0}\text{ cm}`),we,t,Je)],pe=(0,s.SRM)([0,1]),ge=Ae[pe[0]],me=Ae[pe[1]],Oe=String.raw(se||(se=le`
                      $${0}$ est l'image de $${0}$
                      par une homothétie ${0}
                      de centre $${0}$ tel que $ {${0}}$ et $ {${0}}$.
                      <br>
                      ${0}
                      Sans effectuer de calculs, encadrer $k$ le plus précisément possible ${0}.
                      ${0}
                      `),fe,t,Ve,we,ge,me,Ee,it,ft.enonce),be=String.raw(ae||(ae=le`
                  $${0}$.
                  `),Qe),this.correctionDetaillee&&(be=String.raw(oe||(oe=le`
                    $${0}${0} = ${0} = ${0}\text{ cm}$
                    <br>
                    $[${0}${0}]$ est l'image de $[${0}${0}]$
                    et $${0} ${0} ${0} ${0} ${0}$
                    donc c'est ${0}.
                    <br>
                    De plus $${0}${0}[${0};${0})$ donc ${0}.
                    <br> ${0}
                    `),we,fe,ct,ve,we,fe,we,t,we,fe,Ne,we,t,Ke,fe,He,we,t,Qe,pt.solution))}this.questionJamaisPosee(Se,qe)&&(this.listeQuestions.push(Oe),this.listeCorrections.push(be),Se++),ke++}(0,s.K1R)(this)}}},25523:(e,t,$)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let $="";for(const r of t)void 0!==r&&($+=r.toString());return!(this.listeArguments.indexOf($)>-1)&&(this.listeArguments.push($),!0)}}$.r(t),$.d(t,{default:()=>r})}}]);
//# sourceMappingURL=81343.c7fe45dc34b5bf9e55ca.js.map