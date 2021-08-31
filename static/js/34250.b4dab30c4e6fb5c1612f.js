"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[34250,17007],{34250:(e,t,s)=>{s.r(t),s.d(t,{titre:()=>o,default:()=>l});var i=s(17007),r=s(66170),a=s(30169);const o="Calculer des probabilités dans une expérience aléatoire à deux épreuves";function l(){i.default.call(this),this.titre=o,this.consigne="",this.nbQuestions=2,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,r.Do.isHtml,this.spacing=2,r.Do.isHtml?this.spacingCorr=3:this.spacingCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,a.SRM)([0,1,2,3],this.nbQuestions),t=[[]],s=[],i=["red","green","blue","gray","brown","orange","magenta","pink","black","lightgray"];t[0]=["à la fraise","à la vanille","à l'abricot","à la cerise","à la banane"],t[1]=["trèfle","carreau","coeur","pique"],t[2]=["rouges","vertes","bleues","noires","blanches"],t[3]=["gris","cyans","roses","jaunes","violets"],t[4]=["rouges","verts","bleus","noirs","jaunes"],t[5]=["rouges","verts","bleus","noirs","blancs"],t[6]=["rouges","verts","bleus","noirs","jaunes"];for(let r,o,l,n,$,u,b,d,c,m,h,p,f,q,x=0,g=[],k=[],y=[],v=[],C=[],S=[],L=[],R=0;x<this.nbQuestions&&R<50;){switch(c=(0,a.sTI)(),m=(0,a.nHh)(),e[x]){case 0:s[0]="F",s[1]="V",s[2]="A",s[3]="C",s[4]="B",r=(0,a.nSR)(0,4),o=(0,a.nSR)(0,4,[r]),l=(0,a.nSR)(0,4,[r,o]),g[r]=(0,a.nSR)(2,5),g[o]=(0,a.nSR)(1,6)+2,g[l]=2*(0,a.nSR)(1,3),b=g[r]+g[o]+g[l],f=`Dans le frigo il y a ${b} yaourts. ${g[r]} sont ${t[0][r]}, ${g[o]} sont ${t[0][o]} et ${g[l]} sont ${t[0][l]}.<br>`,f+=`${c} en choisit un au hasard. Son frère ${m} en choisit un au hasard à son tour.<br>`,f+=(0,a.bk1)(0)+" Combien d'issues possède cette experience aléatoire ? donne un exemple d'issue.<br>",f+=(0,a.bk1)(1)+" Est-ce une expérience en situation d'équiprobabilité ? Justifie.<br>",f+=(0,a.bk1)(2)+` Calcule la probabilité que ${c} et ${m} aient choisi tous les deux un yaourt ${t[0][r]}.<br>`,f+=(0,a.bk1)(3)+" Calcule la probabilité qu'ils aient choisi des yaourts aux parfums identiques.<br>",f+=(0,a.bk1)(4)+" Calcule la probabilité qu'ils aient choisi des yaourts aux parfums différents.<br>",q="",q+=(0,a.bk1)(0)+` ${c} peut avoir choisi un yaourt ${t[0][r]}, ${t[0][o]} ou ${t[0][l]}. Une fois qu'elle a choisi, et comme il y a au moins 2 yaourts de chaque sorte, ${m} a les mêmes 3 possibilités. Il y a donc $3\\times3=9$ issues possibles.<br>`,q+=`Par exemple : ${c} a pris un yaourt ${t[0][r]} et ${m} un yaourt ${t[0][o]}. Ce qu'on peut noter (${s[r]},${s[o]}).<br>`,q+="Les 9 issues sont : ";for(const e of[r,o,l])for(const t of[r,o,l])q+=`(${s[e]},${s[t]}) `;q+="<br>",g[0]===g[1]&&g[1]===g[2]?(q+=(0,a.bk1)(1)+` Comme le nombre de yaourts de chaque sorte est le même, alors ${c} a la même probabilité de choisir n'importe quel parfum, mais ensuite son frère aura un yaourt de moins de l'un des parfums. Il est donc moins probable qu'il choisisse le même parfum que sa soeur que l'un des deux autres parfums.<br>`,q+=`l'issue (${s[r]},${s[r]}) est donc moins probable que l'issue (${s[r]},${s[o]}). Ce n'est donc pas une situation d'équiprobabilité.`):q+=(0,a.bk1)(1)+` Comme le nombre de yaourt est différent d'un parfum à l'autre, ${c} n'a pas la même probabilité de choisir n'importe quel parfum. On en déduit qu' il est impossible que les issues (${s[r]},${s[r]}), (${s[o]},${s[o]}) et (${s[l]},${s[l]}) aient la même probabilité.<br>`,q+=(0,a.bk1)(2)+` Il y a ${g[r]} yaourts ${t[0][r]}, et ${b} yaourts en tout, la probabilité que ${c} choisisse un yaourt ${t[0][r]} est de : $${(0,a.qaf)(g[r],b)}${(0,a.t7m)(g[r],b)}$.<br>`,q+=`Ensuite il reste ${g[r]-1} yaourts ${t[0][r]} pour ${m} sur un total de ${b-1} yaourts.<br> La probabilité qu'il choisisse à son tour et dans ces conditions ce parfum est de $${(0,a.qaf)(g[r]-1,b-1)}${(0,a.t7m)(g[r]-1,b-1)}$.<br>`,q+=`La probabilité de l'issue (${s[r]},${s[r]}) est le produit de ces deux probabilités, donc : $${(0,a.qaf)(g[r],b)}\\times${(0,a.qaf)(g[r]-1,b-1)}=${(0,a.qaf)(g[r]*(g[r]-1),b*(b-1))}${(0,a.t7m)(g[r]*(g[r]-1),b*(b-1))}$.<br>`,q+=(0,a.bk1)(3)+` a probabilité des issues (${s[o]},${s[o]}) et (${s[l]},${s[l]}) peuvent être calculées de la même façon qu'au c) :<br>`,q+=`$${(0,a.qaf)(g[o],b)}\\times${(0,a.qaf)(g[o]-1,b-1)}=${(0,a.qaf)(g[o]*(g[o]-1),b*(b-1))}$.<br>`,q+=`$${(0,a.qaf)(g[l],b)}\\times${(0,a.qaf)(g[l]-1,b-1)}=${(0,a.qaf)(g[l]*(g[l]-1),b*(b-1))}$.<br>`,q+=`La probabilité qu'ils choisissent le même parfum est la somme des probabilités des issues (${s[r]},${s[r]}), (${s[o]},${s[o]}) et (${s[l]},${s[l]}), soit :<br>`,q+=`$${(0,a.qaf)(g[r]*(g[r]-1),b*(b-1))}+${(0,a.qaf)(g[o]*(g[o]-1),b*(b-1))}+${(0,a.qaf)(g[l]*(g[l]-1),b*(b-1))}=${(0,a.qaf)(g[r]*(g[r]-1)+g[o]*(g[o]-1)+g[l]*(g[l]-1),b*(b-1))}${(0,a.t7m)(g[r]*(g[r]-1)+g[o]*(g[o]-1)+g[l]*(g[l]-1),b*(b-1))}$<br>`,q+=(0,a.bk1)(4)+" choisir des parfums différents est l'événement contraire de l'événement dont on a calculé la probabilité à la question 4).<br>",y=(0,a.OlJ)(g[r]*(g[r]-1)+g[o]*(g[o]-1)+g[l]*(g[l]-1),b*(b-1)),q+=`La probabilité de cet événement est donc : $1-${(0,a.qaf)(y[0],y[1])}=${(0,a.qaf)(y[1],y[1])}-${(0,a.qaf)(y[0],y[1])}=${(0,a.qaf)(y[1]-y[0],y[1])}${(0,a.t7m)(y[1]-y[0],y[1])}$`;break;case 1:r=(0,a.nSR)(0,3),o=0===(0,a.nSR)(0,1)?32:52,l=Math.floor(o/33),s[0]=(0,a.q$q)(["sept","huit","neuf","dix","valet","roi","as"]),s[1]=(0,a.q$q)(["deux","trois","quatre","cinq","six","sept","huit","neuf","dix","valet","roi","as"]),f=`On considère l'expérience consistant à tirer deux cartes dans un jeu de ${o} cartes.<br>`,f+="Partie 1 : On effectue le tirage de la deuxième carte après remise de la première dans le jeu.<br>",f+=(0,a.bk1)(0)+" Quelle est la probabilité de tirer 2 cartes de la même couleur (Rouge/Rouge ou Noire/Noire)?<br>",f+=(0,a.bk1)(1)+` Quelle est la probabilité de tirer 2 ${s[l]}`,"valet"!==s[l]&&"roi"!==s[l]||(f+="s"),f+=" ?<br>",f+=(0,a.bk1)(2)+` Quelle est la probabilité de tirer 2 carte de ${t[1][r]} ?<br>`,f+="Partie 2 : On effectue le tirage de la deuxième carte sans remise de la première dans le jeu.<br>",f+="    Reprendre les 3 questions de la partie 1 dans cette nouvelle expérience.",q="Partie 1.<br>    ",q+=(0,a.bk1)(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a deux couleurs rouge et noire et le nombre de carte rouge est le même que le nombre de carte noire : ${o/2}.<br>`,q+=`    La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${(0,a.qaf)(o/2,o)}=${(0,a.qaf)(1,2)}$.<br>`,q+=(0,a.bk1)(1)+` Il y a 4 ${s[l]}`,"valet"!==s[l]&&"roi"!==s[l]||(f+="s"),q+=` dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${s[l]} est donc de $${(0,a.qaf)(4,o)}=${(0,a.xau)(4,o)}$.<br>`,q+=`    Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${s[l]} est la même pour cette carte.<br>`,q+=`    La probabilité de tirer 2 ${s[l]}`,"valet"!==s[l]&&"roi"!==s[l]||(f+="s"),q+=` est donc : $${(0,a.xau)(4,o)}\\times${(0,a.xau)(4,o)}=${(0,a.xau)(16,o*o)}$.<br>`,q+=(0,a.bk1)(2)+` Il y a ${o/4} cartes de ${t[1][r]} dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${t[1][r]} est donc de $${(0,a.qaf)(o/4,o)}=${(0,a.qaf)(1,4)}$.<br>`,q+=`    Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${t[1][r]} est la même pour cette carte.<br>`,q+=`    La probabilité de tirer 2 ${t[1][r]}s est donc $${(0,a.qaf)(1,4)}\\times${(0,a.qaf)(1,4)}=${(0,a.qaf)(1,16)}$.<br>`,q+="Partie 2.<br>",q+=(0,a.bk1)(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a maintenant une carte en moins dans la couleur désirée soit  ${o/2-1} et il y a une carte en moins dans le jeu soit ${o-1}.<br>`,q+=`    La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${(0,a.qaf)(o/2-1,o-1)}$.<br>`,q+=(0,a.bk1)(1)+` Il y a 4 ${s[l]}`,"valet"!==s[l]&&"roi"!==s[l]||(f+="s"),q+=` dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${s[l]} est donc de $${(0,a.qaf)(4,o)}=${(0,a.xau)(4,o)}$.<br>`,q+=`    Pour que l'événement se réalise la deuxième carte est tirée dans les ${o-1} cartes restantes dans lesquelles il manque un ${s[l]}.<br>`,q+=`    La probabilité de tirer un deuxième ${s[l]} est donc : $${(0,a.qaf)(3,o-1)}$`,52===o&&(q+=`$=${(0,a.qaf)(1,17)}$.`),q+=`<br> La probabilité de tirer 2 ${s[l]}`,"valet"!==s[l]&&"roi"!==s[l]||(f+="s"),q+=` est donc : $${(0,a.xau)(4,o)}\\times${(0,a.xau)(3,o-1)}=${(0,a.xau)(12,o*(o-1))}$.<br>`,q+=(0,a.bk1)(2)+` Il y a ${o/4} cartes de ${t[1][r]} dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${t[1][r]} est donc de $${(0,a.qaf)(o/4,o)}=${(0,a.qaf)(1,4)}$.<br>`,q+=`    Pour que l'événement se réalise la deuxième carte est tirée dans les ${o-1} cartes restantes dans lesquelles il manque un ${t[1][r]}.<br>`,q+=`    La probabilité de tirer un deuxième ${t[1][r]} est donc : $${(0,a.qaf)(o/4-1,o-1)}$`,q+=52===o?`$=${(0,a.qaf)(4,17)}$<br>La probabilité de tirer 2 ${t[1][r]}s est donc $${(0,a.qaf)(1,4)}\\times${(0,a.qaf)(4,17)}=${(0,a.qaf)(1,17)}$.`:`<br>La probabilité de tirer 2 ${t[1][r]}s est donc $${(0,a.qaf)(1,4)}\\times${(0,a.xau)(7,31)}=${(0,a.qaf)(7,124)}$`;break;case 2:g[0]=(0,a.nSR)(2,5),k[0]=(0,a.nSR)(2,5),g[1]=(0,a.nSR)(1,6)+1,k[1]=(0,a.nSR)(1,6)+1,g[2]=2*(0,a.nSR)(1,3),k[2]=2*(0,a.nSR)(1,3),g[3]=(0,a.nSR)(1,4)+2,k[3]=(0,a.nSR)(1,4)+2,g[4]=(0,a.nSR)(2,5),k[4]=(0,a.nSR)(2,5),b=g[0]+g[1]+g[2]+g[3]+g[4],d=k[0]+k[1]+k[2]+k[3]+k[4],l=(0,a.nSR)(0,4),r=(0,a.nSR)(0,4,[l]),o=(0,a.nSR)(0,4,[r,l]),f=`Dans sa commode, ${m} a mis dans le premier tiroir des paires de chaussettes. Il y a `;for(let e=0;e<3;e++)f+=`${g[e]} paires de chaussettes ${t[2][e]}, `;f+=`${g[3]} paires de chaussettes ${t[2][3]} et ${g[4]} paires de chaussettes ${t[2][4]}.<br>`,f+=`Dans le deuxième tiroir, ${m} a mis des T-shirt. Il y a `;for(let e=0;e<3;e++)f+=`${k[e]} T-shirts ${t[5][e]}, `;f+=`${k[3]} T-shirts ${t[5][3]} et ${k[4]} T-shirts ${t[5][4]}.<br>`,f+=`Un matin, il y a une panne de courant et ${m} prend au hasard une paire de chaussettes dans le premier tiroir et un T-shirt dans le deuxième.<br>`,f+=(0,a.bk1)(0)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt ${t[2][l]} ?<br>`,f+=(0,a.bk1)(1)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt de la même couleur ?<br>`,f+=(0,a.bk1)(2)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt de couleurs différentes ?`,q=(0,a.bk1)(0)+` Il y a ${g[l]} paires de chaussettes ${t[2][l]} et il y a ${b} paires de chaussettes possibles. `,q+=`La probabilité de chosir une paire de chaussettes ${t[2][l]} est de : $${(0,a.qaf)(g[l],b)}${(0,a.t7m)(g[l],b)}$.<br>`,q+=`Il y a ${k[l]} T-shirts ${t[5][l]} et il y a ${d} T-shirts possibles. `,q+=`La probabilité de chosir un des T-shirt ${t[5][l]} est de : $${(0,a.qaf)(k[l],d)}${(0,a.t7m)(k[l],d)}$.<br>`,q+=`${m} a donc $${(0,a.xau)(k[l],d)}$ de `,y=(0,a.OlJ)(g[l],b),v=(0,a.OlJ)(k[l],d),1===y[0]?q+="une chance ":q+=`$${y[0]}$ chances `,q+=`sur $${y[1]}$ de choisir des chaussettes et un T-shirt ${t[5][l]}.<br>`,q+=`Soit $${(0,a.xau)(k[l],d)}\\times${(0,a.xau)(g[l],b)}=\\dfrac{${v[0]}\\times${y[0]}}{${v[1]}\\times${y[1]}}=${(0,a.qaf)(y[0]*v[0],y[1]*v[1])}${(0,a.t7m)(y[0]*v[0],y[1]*v[1])}$.<br>`,C=(0,a.OlJ)(y[0]*v[0],y[1]*v[1]),y=(0,a.OlJ)(g[r],b),v=(0,a.OlJ)(k[r],d),q+=(0,a.bk1)(1)+` La probabilité de chosir une paire de chaussettes ${t[2][r]} est de : $${(0,a.qaf)(g[r],b)}${(0,a.t7m)(g[r],b)}$ et `,q+=`la probabilité de chosir l'un des T-shirt ${t[5][r]} est de : $${(0,a.qaf)(k[r],d)}${(0,a.t7m)(k[r],d)}$.<br>`,q+=`Donc la probabilité de chosir des chaussettes un T-shirt ${t[5][r]} est de : $${(0,a.xau)(k[r],d)}\\times${(0,a.xau)(g[r],b)}=\\dfrac{${v[0]}\\times${y[0]}}{${v[1]}\\times${y[1]}}=${(0,a.qaf)(y[0]*v[0],y[1]*v[1])}${(0,a.t7m)(y[0]*v[0],y[1]*v[1])}$.<br>`,S=(0,a.OlJ)(y[0]*v[0],y[1]*v[1]),y=(0,a.OlJ)(g[o],b),v=(0,a.OlJ)(k[o],d),q+=`La probabilité de chosir une paire de chaussettes ${t[2][o]} est de : $${(0,a.qaf)(g[o],b)}${(0,a.t7m)(g[o],b)}$ et `,q+=`la probabilité de chosir l'un des T-shirt ${t[5][o]} est de : $${(0,a.qaf)(k[o],d)}${(0,a.t7m)(k[o],d)}$.<br>`,q+=`Donc la probabilité de chosir des chaussettes un T-shirt ${t[5][o]} est de : $${(0,a.xau)(k[o],d)}\\times${(0,a.xau)(g[o],b)}=\\dfrac{${v[0]}\\times${y[0]}}{${v[1]}\\times${y[1]}}=${(0,a.qaf)(y[0]*v[0],y[1]*v[1])}${(0,a.t7m)(y[0]*v[0],y[1]*v[1])}$.<br>`,L=(0,a.OlJ)(y[0]*v[0],y[1]*v[1]),q+="On en déduit que la probabilité de choisir des chaussettes et un T-shirt de la même couleur est :<br>",q+=`$${(0,a.qaf)(C[0],C[1])}+${(0,a.qaf)(S[0],S[1])}+${(0,a.qaf)(L[0],L[1])}=`,C[1]===S[1]&&S[1]===L[1]?(q+=`\\dfrac{${C[0]}+${S[0]}+${L[0]}}{${C[1]}}=${(0,a.qaf)(C[0]+S[0]+L[0],C[1])}${(0,a.t7m)(C[0]+S[0]+L[0],C[1])}$<br>`,y=(0,a.OlJ)(C[0]+S[0]+L[0],C[1])):(h=(0,a.U8t)(C[1],(0,a.U8t)(S[1],L[1])),n=h/C[1],$=h/S[1],u=h/L[1],q+=`${(0,a.qaf)(C[0]*n,h)}+${(0,a.qaf)(S[0]*$,h)}+${(0,a.qaf)(L[0]*u,h)}=${(0,a.qaf)(C[0]*n+S[0]*$+L[0]*u,h)}${(0,a.t7m)(C[0]*n+S[0]*$+L[0]*u,h)}$<br>`,y=(0,a.OlJ)(C[0]*n+S[0]*$+L[0]*u,h)),q+=(0,a.bk1)(2)+' L\'événement "choisir des chaussettes et un T-shirt de couleurs différentes" est l\'événement contraire de l\'événement "choisir des chaussettes et un T-shirt de même couleur".<br>',q+=`Donc sa probabilité est : $1-${(0,a.qaf)(y[0],y[1])}=\\dfrac{${y[1]}-${y[0]}}{${y[1]}}=${(0,a.qaf)(y[1]-y[0],y[1])}${(0,a.t7m)(y[1]-y[0],y[1])}$<br>`;break;case 3:m=(0,a.nHh)(),c=(0,a.sTI)(),r=(0,a.q$q)([4,6,8,10,12]),o=(0,a.q$q)([4,6,8,10,12],[r]),g[0]=Math.min(r,o),k[0]=Math.max(r,o),C[0]=g[0]*k[0],r=(0,a.q$q)([4,6,8,12]),o=(0,a.q$q)([4,6,8,12],[r]),g[1]=Math.min(r,o),k[1]=Math.max(r,o),C[1]=g[1]*k[1],b=g[0]+k[0],d=g[1]+k[1],l=Math.min(b,d);for(let e=0;e<g[0]+k[0]-1;e++)y[e]=0;for(let e=1;e<=g[0];e++)for(let t=1;t<=k[0];t++)y[e+t-2]++;for(let e=0;e<g[1]+k[1]-1;e++)v[e]=0;for(let e=1;e<=g[1];e++)for(let t=1;t<=k[1];t++)v[e+t-2]++;for(let e=0;e<l-1;e++)S[e]=v[e]/C[1]-y[e]/C[0];f=`${m} dispose d'un dé à ${g[0]} faces numérotées de 1 à ${g[0]} et d'un dé à ${k[0]} faces numérotées de 1 à ${k[0]}.<br>`,f+="Il lance ses deux dés et en fait la somme.<br>",f+=(0,a.bk1)(0)+" Reporte dans un tableau les issues possibles de cette expérience aléatoire et leurs probabilités respectives.<br>",f+=(0,a.bk1)(1)+` ${c} dispose d'un dé à ${g[1]} faces numérotées de 1 à ${g[1]} et d'un dé à ${k[1]} faces numérotées de 1 à ${k[1]}.<br>`,f+=`Elle décide de proposer un défi à ${m} : "On choisit un nombre cible entre 2 et ${l}, on lance nos deux dés en même temps. Le premier dont la somme des dés est la cible a gagné."<br>`,f+=(0,a.bk1)(2)+` ${m} qui connaît les probabilités calculées au 1) propose alors de choisir ${g[0]+1} comme nombre cible. Il pense avoir plus de chances de gagner que ${c}. A-t-il raison ?<br>`,f+=`Si oui, quel nombre doit choisir ${c} pour avoir un défi qui lui soit favorable et si non, y a-t-il un meilleur choix pour ${m} ?<br>`,f+=(0,a.bk1)(3)+" Y a-t-il un nombre cible qui donne un jeu équitable où chacun aura la même probabilité de gagner ?<br>",f+="$\\textit {Exercice inspiré des problèmes DuDu (mathix.org)}$",q=(0,a.bk1)(0)+` les différents résultats de l'éxpérience de ${m} sont présentés dans cette table :<br>`,q+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=k[0];e++)q+="|c";q+="} \\hline  \\text{Dé 1/Dé 2}";for(let e=1;e<=k[0];e++)q+="&"+e;for(let e=1;e<=g[0];e++){q+=" \\\\\\hline "+e;for(let t=1;t<=k[0];t++)q+=`& \\textcolor {${i[(t+e)%10]}}{${t+e}}`}q+="\\\\\\hline\\end{array}$<br>",q+="Les probabilités de chaque issue sont données par ce tableau :<br>",q+="$\\def\\arraystretch{2.5}\\begin{array}{|c";for(let e=1;e<=b;e++)q+="|c";q+="} \\hline  \\text{résultats}";for(let e=2;e<=b;e++)q+="&"+e;q+=" \\\\\\hline \\text{Probabilité}";for(let e=2;e<=b;e++)q+=`& \\textcolor {${i[e%10]}}{\\dfrac{${y[e-2]}}{${C[0]}}}`;q+="\\\\\\hline\\end{array}$<br>",q+=(0,a.bk1)(1)+` Les probabilités en ce qui concerne ${c} sont données par le tableau ci-dessous :<br>`,q+="$\\def\\arraystretch{2.5}\\begin{array}{|c";for(let e=1;e<=d;e++)q+="|c";q+="} \\hline  \\text{Résultats}";for(let e=2;e<=d;e++)q+="&"+e;q+=" \\\\\\hline \\text{Probabilité}";for(let e=2;e<=d;e++)q+=`& \\textcolor {${i[e%10]}}{\\dfrac{${v[e-2]}}{${C[1]}}}`;if(q+="\\\\\\hline\\end{array}$<br>",q+=`La probabilité qu'a ${c} de faire ${g[0]+1} est : $\\textcolor {${i[(g[0]+1)%10]}}{${(0,a.qaf)(v[g[0]-1],C[1])}}${(0,a.t7m)(v[g[0]-1],C[1])}$.<br>`,q+=`La probabilité qu'a ${m} de faire ${g[0]+1} est : $\\textcolor {${i[(g[0]+1)%10]}}{${(0,a.qaf)(y[g[0]-1],C[0])}}${(0,a.t7m)(y[g[0]-1],C[0])}$.<br>`,S[g[0]-1]>0){q+=`${m} se trompe en croyant avoir plus de chances de gagner car $${(0,a.xau)(v[g[0]-1],C[1])}>${(0,a.xau)(y[g[0]-1],C[0])}$.<br>`,p=!1;for(let e=l-2;e>=0&&(S[e]<0&&(q+=(0,a.bk1)(2)+` ${m} aurait du choisir ${e+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(y[e],C[0])}}${(0,a.t7m)(y[e],C[0])}$ et celle de ${c} serait de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(v[e],C[1])}}${(0,a.t7m)(v[e],C[1])}$.<br>`,p=!0),!0!==p);e--);!1===p&&(q+=(0,a.bk1)(2)+` Il n'existe pas de choix qui permette à ${m} d'avoir plus de chance que ${c} de gagner.`)}else if(S[g[0]-1]<0){q+=`${m} a raison de penser avoir plus de chances de gagner car $${(0,a.xau)(v[g[0]-1],C[1])}<${(0,a.xau)(y[g[0]-1],C[0])}$.<br>`,p=!1;for(let e=l-2;e>=0&&(S[e]>0&&(q+=(0,a.bk1)(2)+` ${c} devrait choisir ${e+2} comme nombre cible.<br>Sa probabilité de réussir serait alors de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(v[e],C[1])}}${(0,a.t7m)(v[e],C[1])}$<br>Celle de ${m} serait de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(y[e],C[0])}}${(0,a.t7m)(y[e],C[0])}$ et $${(0,a.xau)(y[e],C[0])}<${(0,a.qaf)(v[e],C[1])}.$<br>`,p=!0),!0!==p);e--);!1===p&&(q+=(0,a.bk1)(2)+` Il n'existe pas de choix qui permette à ${c} d'avoir plus de chance que ${m} de gagner.<br>`)}else{q+=`${m} et ${c} ont autant de chances de gagner car ils ont tous deux la même probabilité de faire ${g[0]+1}, ce qui répond à la question ${(0,a.bk1)(3)}.<br>`,p=!1;for(let e=l-2;e>=0&&(S[e]<0&&(q+=(0,a.bk1)(2)+` ${m} aurait du choisir ${e+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(y[e],C[0])}}${(0,a.t7m)(y[e],C[0])}$ et celle de ${c} serait de $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(v[e],C[1])}}${(0,a.t7m)(v[e],C[1])}$.<br>`,p=!0),!0!==p);e--);!1===p&&(q+=(0,a.bk1)(2)+` Il n'existe pas de choix qui permette à ${m} d'avoir plus de chance que ${c} de gagner.<br>`)}if(0===S[g[0]-1])q+=(0,a.bk1)(3)+` Il a été déjà répondu à cette question à la question ${(0,a.bk1)(1)}.<br>`;else{p=!1;for(let e=l-2;e>=0&&(0===S[e]&&(q+=(0,a.bk1)(3)+` En choisissant ${e+2} comme cible, ${m} et ${c} ont la même probabilité de gagner.<br>\n                                Pour ${m} la probabilité est : $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(y[e],C[0])}}${(0,a.t7m)(y[e],C[0])}$ tout comme pour ${c} : $\\textcolor {${i[(e+2)%10]}}{${(0,a.qaf)(v[e],C[1])}}${(0,a.t7m)(v[e],C[1])}$.<br>`,p=!0),!0!==p);e--);if(!1===p){q+=(0,a.bk1)(3)+` Il n'existe pas de choix qui permette à ${m}et à ${c} d'avoir la même probabilité de gagner car : <br>`;for(let e=2;e<l/2;e++)q+=`$\\textcolor {${i[e%10]}}{${(0,a.qaf)(y[e-2],C[0])}}\\ne \\textcolor {${i[e%10]}}{${(0,a.qaf)(v[e-2],C[1])}}$ ; `;q+=`et $\\textcolor {${i[l/2%10]}}{${(0,a.qaf)(y[l/2],C[0])}}\\ne \\textcolor {${i[l/2%10]}}{${(0,a.qaf)(v[l/2],C[1])}}$.`}}}-1===this.listeQuestions.indexOf(f)&&(this.listeQuestions.push(f),this.listeCorrections.push(q),x++),R++}(0,a.K1R)(this)}}},17007:(e,t,s)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let s="";for(const i of t)void 0!==i&&(s+=i.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>i})}}]);
//# sourceMappingURL=34250.b4dab30c4e6fb5c1612f.js.map