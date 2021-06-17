(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6593,7567],{86593:(e,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>a,default:()=>o});var r=s(67567),i=s(24477);const a="Calculer des probabilités dans une expérience aléatoire à deux épreuves";function o(){r.default.call(this),this.titre=a,this.consigne="",this.nb_questions=2,this.nb_questions_modifiable=!0,this.nb_cols=1,this.nb_cols_corr=1,sortie_html,this.spacing=2,sortie_html?this.spacing_corr=3:this.spacing_corr=2,this.sup=1,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let e=(0,i._97)([0,1,2,3],this.nb_questions),t=[[]],s=[],r=["red","green","blue","gray","brown","orange","magenta","pink","black","lightgray"];t[0]=["à la fraise","à la vanille","à l'abricot","à la cerise","à la banane"],t[1]=["trèfle","carreau","coeur","pique"],t[2]=["rouges","vertes","bleues","noires","blanches"],t[3]=["gris","cyans","roses","jaunes","violets"],t[4]=["rouges","verts","bleus","noirs","jaunes"],t[5]=["rouges","verts","bleus","noirs","blancs"],t[6]=["rouges","verts","bleus","noirs","jaunes"];for(let a,o,l,$,n,u,b,d,c,m,p,h,x,f,q=0,J=[],K=[],g=[],_=[],y=[],v=[],V=[],I=0;q<this.nb_questions&&I<50;){switch(c=(0,i.sTI)(),m=(0,i.nHh)(),e[q]){case 0:s[0]="F",s[1]="V",s[2]="A",s[3]="C",s[4]="B",a=(0,i.nSR)(0,4),o=(0,i.nSR)(0,4,[a]),l=(0,i.nSR)(0,4,[a,o]),J[a]=(0,i.nSR)(2,5),J[o]=(0,i.nSR)(1,6)+2,J[l]=2*(0,i.nSR)(1,3),b=J[a]+J[o]+J[l],x=`Dans le frigo il y a ${b} yaourts. ${J[a]} sont ${t[0][a]}, ${J[o]} sont ${t[0][o]} et ${J[l]} sont ${t[0][l]}.<br>`,x+=`${c} en choisit un au hasard. Son frère ${m} en choisit un au hasard à son tour.<br>`,x+=(0,i.Vb9)(0)+" Combien d'issues possède cette experience aléatoire ? donne un exemple d'issue.<br>",x+=(0,i.Vb9)(1)+" Est-ce une expérience en situation d'équiprobabilité ? Justifie.<br>",x+=(0,i.Vb9)(2)+` Calcule la probabilité que ${c} et ${m} aient choisi tous les deux un yaourt ${t[0][a]}.<br>`,x+=(0,i.Vb9)(3)+" Calcule la probabilité qu'ils aient choisi des yaourts aux parfums identiques.<br>",x+=(0,i.Vb9)(4)+" Calcule la probabilité qu'ils aient choisi des yaourts aux parfums différents.<br>",f="",f+=(0,i.Vb9)(0)+` ${c} peut avoir choisi un yaourt ${t[0][a]}, ${t[0][o]} ou ${t[0][l]}. Une fois qu'elle a choisi, et comme il y a au moins 2 yaourts de chaque sorte, ${m} a les mêmes 3 possibilités. Il y a donc $3\\times3=9$ issues possibles.<br>`,f+=`Par exemple : ${c} a pris un yaourt ${t[0][a]} et ${m} un yaourt ${t[0][o]}. Ce qu'on peut noter (${s[a]},${s[o]}).<br>`,f+="Les 9 issues sont : ";for(let e of[a,o,l])for(let t of[a,o,l])f+=`(${s[e]},${s[t]}) `;f+="<br>",J[0]==J[1]&&J[1]==J[2]?(f+=(0,i.Vb9)(1)+` Comme le nombre de yaourts de chaque sorte est le même, alors ${c} a la même probabilité de choisir n'importe quel parfum, mais ensuite son frère aura un yaourt de moins de l'un des parfums. Il est donc moins probable qu'il choisisse le même parfum que sa soeur que l'un des deux autres parfums.<br>`,f+=`l'issue (${s[a]},${s[a]}) est donc moins probable que l'issue (${s[a]},${s[o]}). Ce n'est donc pas une situation d'équiprobabilité.`):f+=(0,i.Vb9)(1)+` Comme le nombre de yaourt est différent d'un parfum à l'autre, ${c} n'a pas la même probabilité de choisir n'importe quel parfum. On en déduit qu' il est impossible que les issues (${s[a]},${s[a]}), (${s[o]},${s[o]}) et (${s[l]},${s[l]}) aient la même probabilité.<br>`,f+=(0,i.Vb9)(2)+` Il y a ${J[a]} yaourts ${t[0][a]}, et ${b} yaourts en tout, la probabilité que ${c} choisisse un yaourt ${t[0][a]} est de : $${(0,i.KxJ)(J[a],b)}${(0,i.A99)(J[a],b)}$.<br>`,f+=`Ensuite il reste ${J[a]-1} yaourts ${t[0][a]} pour ${m} sur un total de ${b-1} yaourts.<br> La probabilité qu'il choisisse à son tour et dans ces conditions ce parfum est de $${(0,i.KxJ)(J[a]-1,b-1)}${(0,i.A99)(J[a]-1,b-1)}$.<br>`,f+=`La probabilité de l'issue (${s[a]},${s[a]}) est le produit de ces deux probabilités, donc : $${(0,i.KxJ)(J[a],b)}\\times${(0,i.KxJ)(J[a]-1,b-1)}=${(0,i.KxJ)(J[a]*(J[a]-1),b*(b-1))}${(0,i.A99)(J[a]*(J[a]-1),b*(b-1))}$.<br>`,f+=(0,i.Vb9)(3)+` a probabilité des issues (${s[o]},${s[o]}) et (${s[l]},${s[l]}) peuvent être calculées de la même façon qu'au c) :<br>`,f+=`$${(0,i.KxJ)(J[o],b)}\\times${(0,i.KxJ)(J[o]-1,b-1)}=${(0,i.KxJ)(J[o]*(J[o]-1),b*(b-1))}$.<br>`,f+=`$${(0,i.KxJ)(J[l],b)}\\times${(0,i.KxJ)(J[l]-1,b-1)}=${(0,i.KxJ)(J[l]*(J[l]-1),b*(b-1))}$.<br>`,f+=`La probabilité qu'ils choisissent le même parfum est la somme des probabilités des issues (${s[a]},${s[a]}), (${s[o]},${s[o]}) et (${s[l]},${s[l]}), soit :<br>`,f+=`$${(0,i.KxJ)(J[a]*(J[a]-1),b*(b-1))}+${(0,i.KxJ)(J[o]*(J[o]-1),b*(b-1))}+${(0,i.KxJ)(J[l]*(J[l]-1),b*(b-1))}=${(0,i.KxJ)(J[a]*(J[a]-1)+J[o]*(J[o]-1)+J[l]*(J[l]-1),b*(b-1))}${(0,i.A99)(J[a]*(J[a]-1)+J[o]*(J[o]-1)+J[l]*(J[l]-1),b*(b-1))}$<br>`,f+=(0,i.Vb9)(4)+" choisir des parfums différents est l'événement contraire de l'événement dont on a calculé la probabilité à la question 4).<br>",g=(0,i.tJd)(J[a]*(J[a]-1)+J[o]*(J[o]-1)+J[l]*(J[l]-1),b*(b-1)),f+=`La probabilité de cet événement est donc : $1-${(0,i.KxJ)(g[0],g[1])}=${(0,i.KxJ)(g[1],g[1])}-${(0,i.KxJ)(g[0],g[1])}=${(0,i.KxJ)(g[1]-g[0],g[1])}${(0,i.A99)(g[1]-g[0],g[1])}$`;break;case 1:a=(0,i.nSR)(0,3),o=0==(0,i.nSR)(0,1)?32:52,l=Math.floor(o/33),s[0]=(0,i.q$q)(["sept","huit","neuf","dix","valet","roi","as"]),s[1]=(0,i.q$q)(["deux","trois","quatre","cinq","six","sept","huit","neuf","dix","valet","roi","as"]),x=`On considère l'expérience consistant à tirer deux cartes dans un jeu de ${o} cartes.<br>`,x+="Partie 1 : On effectue le tirage de la deuxième carte après remise de la première dans le jeu.<br>",x+=(0,i.Vb9)(0)+" Quelle est la probabilité de tirer 2 cartes de la même couleur (Rouge/Rouge ou Noire/Noire)?<br>",x+=(0,i.Vb9)(1)+` Quelle est la probabilité de tirer 2 ${s[l]}`,"valet"!=s[l]&&"roi"!=s[l]||(x+="s"),x+=" ?<br>",x+=(0,i.Vb9)(2)+` Quelle est la probabilité de tirer 2 carte de ${t[1][a]} ?<br>`,x+="Partie 2 : On effectue le tirage de la deuxième carte sans remise de la première dans le jeu.<br>",x+="\tReprendre les 3 questions de la partie 1 dans cette nouvelle expérience.",f="Partie 1.<br>\t",f+=(0,i.Vb9)(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a deux couleurs rouge et noire et le nombre de carte rouge est le même que le nombre de carte noire : ${o/2}.<br>`,f+=`\tLa probabilité que la deuxième carte soit de la même couleur que la première est donc : $${(0,i.KxJ)(o/2,o)}=${(0,i.KxJ)(1,2)}$.<br>`,f+=(0,i.Vb9)(1)+` Il y a 4 ${s[l]}`,"valet"!=s[l]&&"roi"!=s[l]||(x+="s"),f+=` dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${s[l]} est donc de $${(0,i.KxJ)(4,o)}=${(0,i.Im8)(4,o)}$.<br>`,f+=`\tComme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${s[l]} est la même pour cette carte.<br>`,f+=`\tLa probabilité de tirer 2 ${s[l]}`,"valet"!=s[l]&&"roi"!=s[l]||(x+="s"),f+=` est donc : $${(0,i.Im8)(4,o)}\\times${(0,i.Im8)(4,o)}=${(0,i.Im8)(16,o*o)}$.<br>`,f+=(0,i.Vb9)(2)+` Il y a ${o/4} cartes de ${t[1][a]} dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${t[1][a]} est donc de $${(0,i.KxJ)(o/4,o)}=${(0,i.KxJ)(1,4)}$.<br>`,f+=`\tComme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${t[1][a]} est la même pour cette carte.<br>`,f+=`\tLa probabilité de tirer 2 ${t[1][a]}s est donc $${(0,i.KxJ)(1,4)}\\times${(0,i.KxJ)(1,4)}=${(0,i.KxJ)(1,16)}$.<br>`,f+="Partie 2.<br>",f+=(0,i.Vb9)(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a maintenant une carte en moins dans la couleur désirée soit  ${o/2-1} et il y a une carte en moins dans le jeu soit ${o-1}.<br>`,f+=`\tLa probabilité que la deuxième carte soit de la même couleur que la première est donc : $${(0,i.KxJ)(o/2-1,o-1)}$.<br>`,f+=(0,i.Vb9)(1)+` Il y a 4 ${s[l]}`,"valet"!=s[l]&&"roi"!=s[l]||(x+="s"),f+=` dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${s[l]} est donc de $${(0,i.KxJ)(4,o)}=${(0,i.Im8)(4,o)}$.<br>`,f+=`\tPour que l'événement se réalise la deuxième carte est tirée dans les ${o-1} cartes restantes dans lesquelles il manque un ${s[l]}.<br>`,f+=`\tLa probabilité de tirer un deuxième ${s[l]} est donc : $${(0,i.KxJ)(3,o-1)}$`,52==o&&(f+=`$=${(0,i.KxJ)(1,17)}$.`),f+=`<br> La probabilité de tirer 2 ${s[l]}`,"valet"!=s[l]&&"roi"!=s[l]||(x+="s"),f+=` est donc : $${(0,i.Im8)(4,o)}\\times${(0,i.Im8)(3,o-1)}=${(0,i.Im8)(12,o*(o-1))}$.<br>`,f+=(0,i.Vb9)(2)+` Il y a ${o/4} cartes de ${t[1][a]} dans le jeu sur ${o} cartes possibles. La probabilité de tirer un ${t[1][a]} est donc de $${(0,i.KxJ)(o/4,o)}=${(0,i.KxJ)(1,4)}$.<br>`,f+=`\tPour que l'événement se réalise la deuxième carte est tirée dans les ${o-1} cartes restantes dans lesquelles il manque un ${t[1][a]}.<br>`,f+=`\tLa probabilité de tirer un deuxième ${t[1][a]} est donc : $${(0,i.KxJ)(o/4-1,o-1)}$`,f+=52==o?`$=${(0,i.KxJ)(4,17)}$<br>La probabilité de tirer 2 ${t[1][a]}s est donc $${(0,i.KxJ)(1,4)}\\times${(0,i.KxJ)(4,17)}=${(0,i.KxJ)(1,17)}$.`:`<br>La probabilité de tirer 2 ${t[1][a]}s est donc $${(0,i.KxJ)(1,4)}\\times${(0,i.Im8)(7,31)}=${(0,i.KxJ)(7,124)}$`;break;case 2:J[0]=(0,i.nSR)(2,5),K[0]=(0,i.nSR)(2,5),J[1]=(0,i.nSR)(1,6)+1,K[1]=(0,i.nSR)(1,6)+1,J[2]=2*(0,i.nSR)(1,3),K[2]=2*(0,i.nSR)(1,3),J[3]=(0,i.nSR)(1,4)+2,K[3]=(0,i.nSR)(1,4)+2,J[4]=(0,i.nSR)(2,5),K[4]=(0,i.nSR)(2,5),b=J[0]+J[1]+J[2]+J[3]+J[4],d=K[0]+K[1]+K[2]+K[3]+K[4],l=(0,i.nSR)(0,4),a=(0,i.nSR)(0,4,[l]),o=(0,i.nSR)(0,4,[a,l]),x=`Dans sa commode, ${m} a mis dans le premier tiroir des paires de chaussettes. Il y a `;for(let e=0;e<3;e++)x+=`${J[e]} paires de chaussettes ${t[2][e]}, `;x+=`${J[3]} paires de chaussettes ${t[2][3]} et ${J[4]} paires de chaussettes ${t[2][4]}.<br>`,x+=`Dans le deuxième tiroir, ${m} a mis des T-shirt. Il y a `;for(let e=0;e<3;e++)x+=`${K[e]} T-shirts ${t[5][e]}, `;x+=`${K[3]} T-shirts ${t[5][3]} et ${K[4]} T-shirts ${t[5][4]}.<br>`,x+=`Un matin, il y a une panne de courant et ${m} prend au hasard une paire de chaussettes dans le premier tiroir et un T-shirt dans le deuxième.<br>`,x+=(0,i.Vb9)(0)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt ${t[2][l]} ?<br>`,x+=(0,i.Vb9)(1)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt de la même couleur ?<br>`,x+=(0,i.Vb9)(2)+` Quelle est la probabilité que ${m} ait choisi des chaussettes et un T-shirt de couleurs différentes ?`,f=(0,i.Vb9)(0)+` Il y a ${J[l]} paires de chaussettes ${t[2][l]} et il y a ${b} paires de chaussettes possibles. `,f+=`La probabilité de chosir une paire de chaussettes ${t[2][l]} est de : $${(0,i.KxJ)(J[l],b)}${(0,i.A99)(J[l],b)}$.<br>`,f+=`Il y a ${K[l]} T-shirts ${t[5][l]} et il y a ${d} T-shirts possibles. `,f+=`La probabilité de chosir un des T-shirt ${t[5][l]} est de : $${(0,i.KxJ)(K[l],d)}${(0,i.A99)(K[l],d)}$.<br>`,f+=`${m} a donc $${(0,i.Im8)(K[l],d)}$ de `,g=(0,i.tJd)(J[l],b),_=(0,i.tJd)(K[l],d),1==g[0]?f+="une chance ":f+=`$${g[0]}$ chances `,f+=`sur $${g[1]}$ de choisir des chaussettes et un T-shirt ${t[5][l]}.<br>`,f+=`Soit $${(0,i.Im8)(K[l],d)}\\times${(0,i.Im8)(J[l],b)}=\\dfrac{${_[0]}\\times${g[0]}}{${_[1]}\\times${g[1]}}=${(0,i.KxJ)(g[0]*_[0],g[1]*_[1])}${(0,i.A99)(g[0]*_[0],g[1]*_[1])}$.<br>`,y=(0,i.tJd)(g[0]*_[0],g[1]*_[1]),g=(0,i.tJd)(J[a],b),_=(0,i.tJd)(K[a],d),f+=(0,i.Vb9)(1)+` La probabilité de chosir une paire de chaussettes ${t[2][a]} est de : $${(0,i.KxJ)(J[a],b)}${(0,i.A99)(J[a],b)}$ et `,f+=`la probabilité de chosir l'un des T-shirt ${t[5][a]} est de : $${(0,i.KxJ)(K[a],d)}${(0,i.A99)(K[a],d)}$.<br>`,f+=`Donc la probabilité de chosir des chaussettes un T-shirt ${t[5][a]} est de : $${(0,i.Im8)(K[a],d)}\\times${(0,i.Im8)(J[a],b)}=\\dfrac{${_[0]}\\times${g[0]}}{${_[1]}\\times${g[1]}}=${(0,i.KxJ)(g[0]*_[0],g[1]*_[1])}${(0,i.A99)(g[0]*_[0],g[1]*_[1])}$.<br>`,v=(0,i.tJd)(g[0]*_[0],g[1]*_[1]),g=(0,i.tJd)(J[o],b),_=(0,i.tJd)(K[o],d),f+=`La probabilité de chosir une paire de chaussettes ${t[2][o]} est de : $${(0,i.KxJ)(J[o],b)}${(0,i.A99)(J[o],b)}$ et `,f+=`la probabilité de chosir l'un des T-shirt ${t[5][o]} est de : $${(0,i.KxJ)(K[o],d)}${(0,i.A99)(K[o],d)}$.<br>`,f+=`Donc la probabilité de chosir des chaussettes un T-shirt ${t[5][o]} est de : $${(0,i.Im8)(K[o],d)}\\times${(0,i.Im8)(J[o],b)}=\\dfrac{${_[0]}\\times${g[0]}}{${_[1]}\\times${g[1]}}=${(0,i.KxJ)(g[0]*_[0],g[1]*_[1])}${(0,i.A99)(g[0]*_[0],g[1]*_[1])}$.<br>`,V=(0,i.tJd)(g[0]*_[0],g[1]*_[1]),f+="On en déduit que la probabilité de choisir des chaussettes et un T-shirt de la même couleur est :<br>",f+=`$${(0,i.KxJ)(y[0],y[1])}+${(0,i.KxJ)(v[0],v[1])}+${(0,i.KxJ)(V[0],V[1])}=`,y[1]==v[1]&&v[1]==V[1]?(f+=`\\dfrac{${y[0]}+${v[0]}+${V[0]}}{${y[1]}}=${(0,i.KxJ)(y[0]+v[0]+V[0],y[1])}${(0,i.A99)(y[0]+v[0]+V[0],y[1])}$<br>`,g=(0,i.tJd)(y[0]+v[0]+V[0],y[1])):(p=(0,i.U8t)(y[1],(0,i.U8t)(v[1],V[1])),$=p/y[1],n=p/v[1],u=p/V[1],f+=`${(0,i.KxJ)(y[0]*$,p)}+${(0,i.KxJ)(v[0]*n,p)}+${(0,i.KxJ)(V[0]*u,p)}=${(0,i.KxJ)(y[0]*$+v[0]*n+V[0]*u,p)}${(0,i.A99)(y[0]*$+v[0]*n+V[0]*u,p)}$<br>`,g=(0,i.tJd)(y[0]*$+v[0]*n+V[0]*u,p)),f+=(0,i.Vb9)(2)+' L\'événement "choisir des chaussettes et un T-shirt de couleurs différentes" est l\'événement contraire de l\'événement "choisir des chaussettes et un T-shirt de même couleur".<br>',f+=`Donc sa probabilité est : $1-${(0,i.KxJ)(g[0],g[1])}=\\dfrac{${g[1]}-${g[0]}}{${g[1]}}=${(0,i.KxJ)(g[1]-g[0],g[1])}${(0,i.A99)(g[1]-g[0],g[1])}$<br>`;break;case 3:m=(0,i.nHh)(),c=(0,i.sTI)(),a=(0,i.q$q)([4,6,8,10,12]),o=(0,i.q$q)([4,6,8,10,12],[a]),J[0]=Math.min(a,o),K[0]=Math.max(a,o),y[0]=J[0]*K[0],a=(0,i.q$q)([4,6,8,12]),o=(0,i.q$q)([4,6,8,12],[a]),J[1]=Math.min(a,o),K[1]=Math.max(a,o),y[1]=J[1]*K[1],b=J[0]+K[0],d=J[1]+K[1],l=Math.min(b,d);for(let e=0;e<J[0]+K[0]-1;e++)g[e]=0;for(let e=1;e<=J[0];e++)for(let t=1;t<=K[0];t++)g[e+t-2]++;for(let e=0;e<J[1]+K[1]-1;e++)_[e]=0;for(let e=1;e<=J[1];e++)for(let t=1;t<=K[1];t++)_[e+t-2]++;for(let e=0;e<l-1;e++)v[e]=_[e]/y[1]-g[e]/y[0];x=`${m} dispose d'un dé à ${J[0]} faces numérotées de 1 à ${J[0]} et d'un dé à ${K[0]} faces numérotées de 1 à ${K[0]}.<br>`,x+="Il lance ses deux dés et en fait la somme.<br>",x+=(0,i.Vb9)(0)+" Reporte dans un tableau les issues possibles de cette expérience aléatoire et leurs probabilités respectives.<br>",x+=(0,i.Vb9)(1)+` ${c} dispose d'un dé à ${J[1]} faces numérotées de 1 à ${J[1]} et d'un dé à ${K[1]} faces numérotées de 1 à ${K[1]}.<br>`,x+=`Elle décide de proposer un défi à ${m} : "On choisit un nombre cible entre 2 et ${l}, on lance nos deux dés en même temps. Le premier dont la somme des dés est la cible a gagné."<br>`,x+=(0,i.Vb9)(2)+` ${m} qui connaît les probabilités calculées au 1) propose alors de choisir ${J[0]+1} comme nombre cible. Il pense avoir plus de chances de gagner que ${c}. A-t-il raison ?<br>`,x+=`Si oui, quel nombre doit choisir ${c} pour avoir un défi qui lui soit favorable et si non, y a-t-il un meilleur choix pour ${m} ?<br>`,x+=(0,i.Vb9)(3)+" Y a-t-il un nombre cible qui donne un jeu équitable où chacun aura la même probabilité de gagner ?<br>",x+="$\\textit {Exercice inspiré des problèmes DuDu (mathix.org)}$",f=(0,i.Vb9)(0)+` les différents résultats de l'éxpérience de ${m} sont présentés dans cette table :<br>`,f+="$\\def\\arraystretch{1.5}\\begin{array}{|c";for(let e=0;e<=K[0];e++)f+="|c";f+="} \\hline  \\text{Dé 1/Dé 2}";for(let e=1;e<=K[0];e++)f+="&"+e;for(let e=1;e<=J[0];e++){f+=" \\\\\\hline "+e;for(let t=1;t<=K[0];t++)f+=`& \\textcolor {${r[(t+e)%10]}}{${t+e}}`}f+="\\\\\\hline\\end{array}$<br>",f+="Les probabilités de chaque issue sont données par ce tableau :<br>",f+="$\\def\\arraystretch{2.5}\\begin{array}{|c";for(let e=1;e<=b;e++)f+="|c";f+="} \\hline  \\text{résultats}";for(let e=2;e<=b;e++)f+="&"+e;f+=" \\\\\\hline \\text{Probabilité}";for(let e=2;e<=b;e++)f+=`& \\textcolor {${r[e%10]}}{\\dfrac{${g[e-2]}}{${y[0]}}}`;f+="\\\\\\hline\\end{array}$<br>",f+=(0,i.Vb9)(1)+` Les probabilités en ce qui concerne ${c} sont données par le tableau ci-dessous :<br>`,f+="$\\def\\arraystretch{2.5}\\begin{array}{|c";for(let e=1;e<=d;e++)f+="|c";f+="} \\hline  \\text{Résultats}";for(let e=2;e<=d;e++)f+="&"+e;f+=" \\\\\\hline \\text{Probabilité}";for(let e=2;e<=d;e++)f+=`& \\textcolor {${r[e%10]}}{\\dfrac{${_[e-2]}}{${y[1]}}}`;if(f+="\\\\\\hline\\end{array}$<br>",f+=`La probabilité qu'a ${c} de faire ${J[0]+1} est : $\\textcolor {${r[(J[0]+1)%10]}}{${(0,i.KxJ)(_[J[0]-1],y[1])}}${(0,i.A99)(_[J[0]-1],y[1])}$.<br>`,f+=`La probabilité qu'a ${m} de faire ${J[0]+1} est : $\\textcolor {${r[(J[0]+1)%10]}}{${(0,i.KxJ)(g[J[0]-1],y[0])}}${(0,i.A99)(g[J[0]-1],y[0])}$.<br>`,v[J[0]-1]>0){f+=`${m} se trompe en croyant avoir plus de chances de gagner car $${(0,i.Im8)(_[J[0]-1],y[1])}>${(0,i.Im8)(g[J[0]-1],y[0])}$.<br>`,h=!1;for(let e=l-2;e>=0&&(v[e]<0&&(f+=(0,i.Vb9)(2)+` ${m} aurait du choisir ${e+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(g[e],y[0])}}${(0,i.A99)(g[e],y[0])}$ et celle de ${c} serait de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(_[e],y[1])}}${(0,i.A99)(_[e],y[1])}$.<br>`,h=!0),1!=h);e--);0==h&&(f+=(0,i.Vb9)(2)+` Il n'existe pas de choix qui permette à ${m} d'avoir plus de chance que ${c} de gagner.`)}else if(v[J[0]-1]<0){f+=`${m} a raison de penser avoir plus de chances de gagner car $${(0,i.Im8)(_[J[0]-1],y[1])}<${(0,i.Im8)(g[J[0]-1],y[0])}$.<br>`,h=!1;for(let e=l-2;e>=0&&(v[e]>0&&(f+=(0,i.Vb9)(2)+` ${c} devrait choisir ${e+2} comme nombre cible.<br>Sa probabilité de réussir serait alors de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(_[e],y[1])}}${(0,i.A99)(_[e],y[1])}$<br>Celle de ${m} serait de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(g[e],y[0])}}${(0,i.A99)(g[e],y[0])}$ et $${(0,i.Im8)(g[e],y[0])}<${(0,i.KxJ)(_[e],y[1])}.$<br>`,h=!0),1!=h);e--);0==h&&(f+=(0,i.Vb9)(2)+` Il n'existe pas de choix qui permette à ${c} d'avoir plus de chance que ${m} de gagner.<br>`)}else{f+=`${m} et ${c} ont autant de chances de gagner car ils ont tous deux la même probabilité de faire ${J[0]+1}, ce qui répond à la question ${(0,i.Vb9)(3)}.<br>`,h=!1;for(let e=l-2;e>=0&&(v[e]<0&&(f+=(0,i.Vb9)(2)+` ${m} aurait du choisir ${e+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(g[e],y[0])}}${(0,i.A99)(g[e],y[0])}$ et celle de ${c} serait de $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(_[e],y[1])}}${(0,i.A99)(_[e],y[1])}$.<br>`,h=!0),1!=h);e--);0==h&&(f+=(0,i.Vb9)(2)+` Il n'existe pas de choix qui permette à ${m} d'avoir plus de chance que ${c} de gagner.<br>`)}if(0==v[J[0]-1])f+=(0,i.Vb9)(3)+` Il a été déjà répondu à cette question à la question ${(0,i.Vb9)(1)}.<br>`;else{h=!1;for(let e=l-2;e>=0&&(0==v[e]&&(f+=(0,i.Vb9)(3)+` En choisissant ${e+2} comme cible, ${m} et ${c} ont la même probabilité de gagner.<br>\n\t\t\t\t\t\t\t\tPour ${m} la probabilité est : $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(g[e],y[0])}}${(0,i.A99)(g[e],y[0])}$ tout comme pour ${c} : $\\textcolor {${r[(e+2)%10]}}{${(0,i.KxJ)(_[e],y[1])}}${(0,i.A99)(_[e],y[1])}$.<br>`,h=!0),1!=h);e--);if(0==h){f+=(0,i.Vb9)(3)+` Il n'existe pas de choix qui permette à ${m}et à ${c} d'avoir la même probabilité de gagner car : <br>`;for(let e=2;e<l/2;e++)f+=`$\\textcolor {${r[e%10]}}{${(0,i.KxJ)(g[e-2],y[0])}}\\ne \\textcolor {${r[e%10]}}{${(0,i.KxJ)(_[e-2],y[1])}}$ ; `;f+=`et $\\textcolor {${r[l/2%10]}}{${(0,i.KxJ)(g[l/2],y[0])}}\\ne \\textcolor {${r[l/2%10]}}{${(0,i.KxJ)(_[l/2],y[1])}}$.`}}}-1==this.liste_questions.indexOf(x)&&(this.liste_questions.push(x),this.liste_corrections.push(f),q++),I++}(0,i.KsX)(this)}}},67567:(e,t,s)=>{"use strict";function r(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}s.r(t),s.d(t,{default:()=>r})}}]);