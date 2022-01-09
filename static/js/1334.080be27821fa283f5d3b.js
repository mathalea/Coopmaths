"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1334,25523],{1334:(e,t,s)=>{s.r(t),s.d(t,{titre:()=>n,default:()=>a});var i=s(25523),l=s(22380),r=s(25482);const n="Résoudre des problèmes utilisant le théorème de Pythagore";function a(){i.default.call(this),this.titre=n,this.consigne="",this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.sup=3,l.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1.5,this.nouvelleVersion=function(){let e;this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.sup=parseInt(this.sup),e=1===this.sup?["losange","rectangle_diagonale_connue","rectangle_diagonale_a_trouver"]:2===this.sup?this.nbQuestions>2?["parallelogramme_est_losange","parallelogramme_n_est_pas_losange","parallelogramme_est_rectangle","parallelogramme_n_est_pas_rectangle"]:[(0,r.q$q)(["parallelogramme_est_losange","parallelogramme_n_est_pas_losange"]),(0,r.q$q)(["parallelogramme_est_rectangle","parallelogramme_n_est_pas_rectangle"])]:this.nbQuestions>=5?["losange","rectangle_diagonale_connue","rectangle_diagonale_a_trouver","parallelogramme_est_losange","parallelogramme_n_est_pas_losange","parallelogramme_est_rectangle","parallelogramme_n_est_pas_rectangle"]:["losange","rectangle_diagonale_connue","rectangle_diagonale_a_trouver",(0,r.q$q)(["parallelogramme_est_losange","parallelogramme_n_est_pas_losange"]),(0,r.q$q)(["parallelogramme_est_rectangle","parallelogramme_n_est_pas_rectangle"])];const t=(0,r.SRM)(e,this.nbQuestions),s=[[3,4,5],[5,12,13],[6,8,10],[7,24,25],[8,15,17],[9,12,15],[9,40,41],[10,24,26],[11,60,61],[12,16,20],[12,35,37],[13,84,85],[14,48,50],[15,20,25],[15,36,39],[16,30,34],[16,63,65],[18,24,30],[18,80,82],[20,21,29],[20,48,52],[21,28,35],[21,72,75],[24,32,40],[24,45,51],[24,70,74],[25,60,65],[27,36,45],[28,45,53],[28,96,100],[30,40,50],[30,72,78],[32,60,68],[33,44,55],[33,56,65],[35,84,91],[36,48,60],[36,77,85],[39,52,65],[39,80,89],[40,42,58],[40,75,85],[42,56,70],[45,60,75],[48,55,73],[48,64,80],[51,68,85],[54,72,90],[57,76,95],[60,63,87],[60,80,100],[65,72,97]],i=["L","M","N","O"];for(let n,a,o=0,g=0;o<this.nbQuestions&&g<50;){const e=(0,r.wnJ)(4,i);i.push(e);const $=e[0],y=e[1],d=e[2],x=e[3],h="O",b=(0,r.q$q)(s);(0,r.XzT)(s,b);let p=b[0],c=b[1],m=b[2];if("parallelogramme_n_est_pas_losange"===t[o]||"parallelogramme_n_est_pas_rectangle"===t[o])for(m+=(0,r.nSR)(-3,3,[0]);p**2+c**2===m**2;)m+=(0,r.nSR)(-3,3,[0]),c+=(0,r.nSR)(-3,3,[0]);switch(p>9&&(0,r.q$q)([!0,!0,!0,!1])&&(p=(0,r.n0o)(p/10),c=(0,r.n0o)(c/10),m=(0,r.n0o)(m/10)),t[o]){case"losange":n=`$${e}$ est un losange de centre $O$ tel que $${$+y}=${(0,r.euh)(m)}$ cm et $${$+d}=${(0,r.euh)(2*p)}$ cm.<br>`,n+=`Calculer $${x+y}$.`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id="mtg32svg#6"/><text x="185.5" y="32.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><text x="220.5" y="134.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><line x1="190.5" y1="43.44" x2="216.5" y2="129.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="144.54431444308477" y="133.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><line x1="190.5" y1="43.44" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="183.54431444308474" y="234.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><line x1="216.5" y1="129.44" x2="189.54431444308474" y2="215.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="189.54431444308474" y1="215.14525664249953" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><g  id=""><line x1="208.86483613904568" y1="86.9074753482156" x2="199.2927218660596" y2="89.80137036097884" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="207.7072781339404" y1="83.07862963902116" x2="198.13516386095432" y2="85.9725246517844" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="207.19175809011574" y1="175.70062312711323" x2="197.652449829911" y2="172.70035681946817" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="208.39186461317377" y1="171.88489982303136" x2="198.85255635296903" y2="168.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="171.1794783040391" y1="171.67778129428393" x2="180.75159257702518" y2="168.78388628152072" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="172.33703630914437" y1="175.50662700347834" x2="181.90915058213045" y2="172.61273199071513" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="181.19175809011574" y1="89.70062312711323" x2="171.652449829911" y2="86.7003568194682" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="182.39186461317377" y1="85.88489982303133" x2="172.85255635296903" y2="82.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><text x="176.02215722154236" y="144.29262832124977" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text><g  id=""><line x1="198.79500694133887" y1="129.34145667941502" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/><line x1="190.0709855797076" y1="120.51977860145324" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/></g><line x1="190.5" y1="43.44" x2="190.02215722154236" y2="129.29262832124977" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="189.54431444308474" y2="215.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="163.54431444308477" y2="129.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="216.5" y2="129.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g  id=""><line x1="193.7768798113023" y1="89.9214712483418" x2="186.74527741024002" y2="82.81115707290796" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.70592152305426" y1="89.88211536115601" x2="193.81623569848807" y2="82.85051296009375" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="193.2990370328447" y1="175.77409956959156" x2="186.2674346317824" y2="168.66378539415774" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.22807874459664" y1="175.7347436824058" x2="193.33839292003046" y2="168.7031412813435" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="176.75540701760488" y1="134.21886503698207" x2="176.81106464702222" y2="124.21901992676723" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="203.28890742547983" y1="124.36639160551746" x2="203.2332497960625" y2="134.3662367157323" style="stroke-width:1;stroke:rgb(255,0,0);" /></g></svg></p>`:"",a+=`$${e}$ est un losange donc ses diagonales se coupent en leur milieu : $${$+h}=${$+d}\\div2=${(0,r.euh)(2*p)}\\div2=${(0,r.euh)(p)}$ cm.<br>`,a+=`On sait que les diagonales d'un losange se coupent perpendiculairement donc $${$+h+d}$ est un triangle rectangle en $O$.<br>`,a+=`D'après le théorème de Pythagore, on a : $${$+h}^2+${h+y}^2=${$+y}^2$.<br>`,a+=`Donc $${h+y}^2=${$+y}^2-${$+h}^2=${(0,r.euh)(m)}^2-${(0,r.euh)(p)}^2=${(0,r.k$K)(c**2)}$.<br>`,a+=`On a alors $${h+y}=\\sqrt{${(0,r.k$K)(c**2)}}=${(0,r.euh)(c)}$ cm.<br>`,a+=`Finalement comme $O$ est aussi le milieu de $[${x+y}]$ : $${x+y}=2\\times ${h+y}=2\\times${(0,r.euh)(c)}=${(0,r.k$K)(2*c)}$ cm.`;break;case"rectangle_diagonale_connue":n=`$${e}$ est un rectangle tel que $${$+y}=${(0,r.euh)(p)}$ cm et $${$+d}=${(0,r.euh)(m)}$ cm.<br>`,n+=`Calculer $${y+d}$.`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`:"",a+=`$${e}$ est un rectangle donc il possède 4 angles droits et $${$+y+d}$ est un triangle rectangle en $${y}$.<br>`,a+=`D'après le théorème de Pythagore, on a : $${$+y}^2+${y+d}^2=${$+d}^2$.<br>`,a+=`Donc $${y+d}^2=${$+d}^2-${$+y}^2=${(0,r.euh)(m)}^2-${(0,r.euh)(p)}^2=${(0,r.euh)(c**2)}$.<br>`,a+=`Finalement, $${y+d}=\\sqrt{${(0,r.k$K)(c**2)}}=${(0,r.euh)(c)}$ cm.`;break;case"rectangle_diagonale_a_trouver":n=`$${e}$ est un rectangle tel que $${$+y}=${(0,r.euh)(p)}$ cm et $${y+d}=${(0,r.euh)(c)}$ cm.<br>`,n+=`Calculer $${$+d}$.`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`:"",a+=`$${e}$ est un rectangle donc il possède 4 angles droits et $${$+y+d}$ est un triangle rectangle en $${y}$.<br>`,a+=`D'après le théorème de Pythagore, on a : $${$+d}^2=${$+y}^2+${y+d}^2=${(0,r.k$K)(p)}^2+${(0,r.k$K)(c)}^2=${(0,r.k$K)(m**2)}$.<br>`,a+=`Finalement, $${$+d}=\\sqrt{${(0,r.k$K)(m**2)}}=${(0,r.euh)(m)}$ cm.`;break;case"parallelogramme_est_losange":n=`$${e}$ est un parallélogramme de centre $O$ tel que $${$+h}=${(0,r.euh)(p)}$ cm, $${$+y}=${(0,r.euh)(m)}$ cm et $${y+h}=${(0,r.euh)(c)}$ cm.<br>`,n+=`$${e}$ est-il un losange ?`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`:"",a+=`Dans le triangle $${$+h+y}$, le plus grand côté est $[${$+y}]$.<br>`,a+=`$${$+y}^2=${(0,r.euh)(m)}^2=${(0,r.k$K)(m**2)}$<br>`,a+=`$${$+h}^2+${h+y}^2=${(0,r.euh)(p)}^2+${(0,r.euh)(c)}^2=${(0,r.k$K)(p**2+c**2)}$<br>`,a+=`On constate que $${$+y}^2=${$+h}^2+${h+y}^2$, l'égalité de Pythagore est vérifiée donc $${$+h+y}$ est rectangle en $O$.<br>`,a+=`Finalement, comme $${e}$ est un parallélogramme qui a ses diagonales perpendiculaires alors c'est aussi un losange.`;break;case"parallelogramme_n_est_pas_losange":n=`$${e}$ est un parallélogramme de centre $O$ tel que $${$+h}=${(0,r.euh)(p)}$ cm, $${$+y}=${(0,r.euh)(m)}$ cm et $${y+h}=${(0,r.euh)(c)}$ cm.<br>`,n+=`$${e}$ est-il un losange ?`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`:"",a+=`Dans le triangle $${$+h+y}$, le plus grand côté est $[${$+y}]$.<br>`,a+=`$${$+y}^2=${(0,r.euh)(m)}^2=${(0,r.k$K)(m**2)}$<br>`,a+=`$${$+h}^2+${h+y}^2=${(0,r.euh)(p)}^2+${(0,r.euh)(c)}^2=${(0,r.k$K)(p**2+c**2)}$<br>`,a+=`On constate que $${$+y}^2\\not=${$+h}^2+${h+y}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${$+h+y}$ n'est pas un triangle rectangle.<br>`,a+=`Si $${e}$ était un losange alors ses diagonales devraient être perpendiculaires et $${$+h+y}$ devrait être un triangle rectangle.<br>`,a+=`Finalement comme $${$+h+y}$ n'est pas un triangle rectangle, $${e}$ n'est pas un losange.`;break;case"parallelogramme_est_rectangle":n=`$${e}$ est un parallélogramme de centre $O$ tel que $${$+y}=${(0,r.euh)(p)}$ cm, $${$+d}=${(0,r.euh)(m)}$ cm et $${y+d}=${(0,r.euh)(c)}$ cm.<br>`,n+=`$${e}$ est-il un rectangle ?`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`:"",a+=`Dans le triangle $${$+y+d}$, le plus grand côté est $[${$+d}]$.<br>`,a+=`$${$+d}^2=${(0,r.euh)(m)}^2=${(0,r.k$K)(m**2)}$<br>`,a+=`$${$+y}^2+${y+d}^2=${(0,r.euh)(p)}^2+${(0,r.euh)(c)}^2=${(0,r.k$K)(p**2+c**2)}$<br>`,a+=`On constate que $${$+d}^2=${$+y}^2+${y+d}^2$, l'égalité de Pythagore est vérifiée donc $${$+y+d}$ est rectangle en $${y}$.<br>`,a+=`Finalement, comme $${e}$ est un parallélogramme qui a un angle droit en $${y}$ alors c'est aussi un rectangle.`;break;case"parallelogramme_n_est_pas_rectangle":n=`$${e}$ est un parallélogramme de centre $O$ tel que $${$+y}=${(0,r.euh)(p)}$ cm, $${$+d}=${(0,r.euh)(m)}$ cm et $${y+d}=${(0,r.euh)(c)}$ cm.<br>`,n+=`$${e}$ est-il un rectangle ?`,a=l.Do.isHtml?`<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${$}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${y}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${d}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${x}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`:"",a+=`Dans le triangle $${$+y+d}$, le plus grand côté est $[${$+d}]$.<br>`,a+=`$${$+d}^2=${(0,r.euh)(m)}^2=${(0,r.k$K)(m**2)}$<br>`,a+=`$${$+y}^2+${y+d}^2=${(0,r.euh)(p)}^2+${(0,r.euh)(c)}^2=${(0,r.k$K)(p**2+c**2)}$<br>`,a+=`On constate que $${$+d}^2\\not=${$+y}^2+${y+d}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${$+y+d}$ n'est pas rectangle en $${y}$.<br>`,a+=`Finalement, comme $${e}$ n'a pas d'angle droit en $${y}$ ce n'est pas un rectangle.`}-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(a),o++),g++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Sens direct ou réciproque/contraposée",3,"1 : Sens direct\n2 : Réciproque/contraposée\n3 : Mélange"]}},25523:(e,t,s)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let s="";for(const i of t)void 0!==i&&(s+=i.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>i})}}]);
//# sourceMappingURL=1334.080be27821fa283f5d3b.js.map