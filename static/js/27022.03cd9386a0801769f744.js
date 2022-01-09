"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[27022,25523],{25523:(r,e,t)=>{function o(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(r){},this.questionJamaisPosee=function(r,...e){0===r&&(this.listeArguments=[]);let t="";for(const o of e)void 0!==o&&(t+=o.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>o})},27022:(r,e,t)=>{t.r(e),t.d(e,{titre:()=>s,interactifReady:()=>a,interactifType:()=>$,dateDePublication:()=>v,default:()=>h});var o=t(25523),i=t(25482),n=t(11945);const s="Reconnaître des vecteurs colinéaires (V/F)",a=!0,$="qcm",v="30/10/2021";function h(){o.default.call(this),this.nbQuestions=1,this.nouvelleVersion=function(){let r,e,t,o,s,a,$,v;switch(this.listeQuestions=[],this.listeCorrections=[],(0,i.q$q)([1,2,3,4,5])){case 1:r=(0,i.n0o)(2*(0,i.nSR)(-3,3,0)),e=(0,i.n0o)(2*(0,i.nSR)(-3,3,[0,r/2])),s=(0,i.n0o)((0,i.q$q)([.5,1.5,3,2.5,3.5])*(0,i.q$q)([-1,1])),t=s*r,o=s*e,a=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${r} \\\\ ${e} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${t} \\\\ ${o} \\end{pmatrix}$<br>\n        Les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires. `,this.autoCorrection[0]={enonce:a,propositions:[{texte:"V",statut:r*o==e*t},{texte:"F",statut:50===r}],options:{ordered:!0}},v=(0,n.l3)(this,0),a+=v.texte,$=v.texteCorr+`<br>Deux vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$\n        sont colinéaires si et seulement si leur déterminant det($\\overrightarrow{u};\\overrightarrow{v})=0$.<br>\n        Si  $\\overrightarrow{u}\\begin{pmatrix}x_{\\overrightarrow{u}} \\\\ x_{\\overrightarrow{v}} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}x_{\\overrightarrow{v}} \\\\ y_{\\overrightarrow{v}} \\end{pmatrix}$, \n        alors det$(\\overrightarrow{u};\\overrightarrow{v})=x_{\\overrightarrow{u}}\\times y_{\\overrightarrow{v}}-y_{\\overrightarrow{u}}\\times x_{\\overrightarrow{v}}$.<br>\n        En utilisant les données de l'énoncé, on obtient : <br>\n        det$(\\overrightarrow{u};\\overrightarrow{v})=\n        ${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}-${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}\n        =${r*o}-${(0,i.PMY)(e*t)}=${r*o-e*t}\n        $.<br>\n        On en déduit que les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires.`,$+=(0,i.pRK)(`\n        <br> Mentalement : <br>\n        On compare les produits en croix : $${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}=${r*o}$ et $${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}=${e*t}$.<br>\n        Ils sont égaux, donc les vecteurs sont colinéaires.\n         `);break;case 2:t=(0,i.n0o)(2*(0,i.nSR)(-3,3,0)),o=(0,i.n0o)(2*(0,i.nSR)(-3,3,[0,t/2])),s=(0,i.n0o)((0,i.q$q)([.5,1.5,3,2.5,3.5])*(0,i.q$q)([-1,1])),r=s*t,e=s*o,a=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${r} \\\\ ${e} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${t} \\\\ ${o} \\end{pmatrix}$<br>\n        Les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires. `,this.autoCorrection[0]={enonce:a,propositions:[{texte:"V",statut:r*o==e*t},{texte:"F",statut:50===r}],options:{ordered:!0}},v=(0,n.l3)(this,0),a+=v.texte,$=v.texteCorr+`<br>Deux vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$\n        sont colinéaires si et seulement si leur déterminant det($\\overrightarrow{u};\\overrightarrow{v})=0$.<br>\n        Si  $\\overrightarrow{u}\\begin{pmatrix}x_{\\overrightarrow{u}} \\\\ x_{\\overrightarrow{v}} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}x_{\\overrightarrow{v}} \\\\ y_{\\overrightarrow{v}} \\end{pmatrix}$, \n        alors det$(\\overrightarrow{u};\\overrightarrow{v})=x_{\\overrightarrow{u}}\\times y_{\\overrightarrow{v}}-y_{\\overrightarrow{u}}\\times x_{\\overrightarrow{v}}$.<br>\n        En utilisant les données de l'énoncé, on obtient : <br>\n        det$(\\overrightarrow{u};\\overrightarrow{v})=\n        ${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}-${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}\n        =${r*o}-${(0,i.PMY)(e*t)}=${r*o-e*t}\n        $.<br>\n        On en déduit que les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires.`,$+=(0,i.pRK)(`\n        <br> Mentalement : <br>\n        On compare les produits en croix : $${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}=${r*o}$ et $${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}=${e*t}$.<br>\n        Ils sont égaux, donc les vecteurs sont colinéaires.\n         `);break;case 3:r=(0,i.n0o)(2*(0,i.nSR)(-3,3,0)),e=(0,i.n0o)(2*(0,i.nSR)(-3,3,[0,r/2])),s=(0,i.n0o)((0,i.q$q)([.5,1.5,3,2.5,3.5])*(0,i.q$q)([-1,1])),t=s*r,o=s*e+1,a=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${r} \\\\ ${e} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${t} \\\\ ${o} \\end{pmatrix}$<br>\n            Les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires. `,this.autoCorrection[0]={enonce:a,propositions:[{texte:"V",statut:100===r},{texte:"F",statut:r*o!=e*t}],options:{ordered:!0}},v=(0,n.l3)(this,0),a+=v.texte,$=v.texteCorr+`<br>Deux vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$\n            sont colinéaires si et seulement si leur déterminant det($\\overrightarrow{u};\\overrightarrow{v})=0$.<br>\n            Si  $\\overrightarrow{u}\\begin{pmatrix}x_{\\overrightarrow{u}} \\\\ x_{\\overrightarrow{v}} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}x_{\\overrightarrow{v}} \\\\ y_{\\overrightarrow{v}} \\end{pmatrix}$, \n            alors det$(\\overrightarrow{u};\\overrightarrow{v})=x_{\\overrightarrow{u}}\\times y_{\\overrightarrow{v}}-y_{\\overrightarrow{u}}\\times x_{\\overrightarrow{v}}$.<br>\n            En utilisant les données de l'énoncé, on obtient : <br>\n            det$(\\overrightarrow{u};\\overrightarrow{v})=\n            ${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}-${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}\n            =${r*o}-${(0,i.PMY)(e*t)}=${r*o-e*t}\n            $.<br>\n            On en déduit que les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ ne sont pas colinéaires.`,$+=(0,i.pRK)(`\n            <br> Mentalement : <br>\n            On compare les produits en croix : $${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}=${r*o}$ et $${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}=${e*t}$.<br>\n            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.\n             `);break;case 4:r=(0,i.n0o)(2*(0,i.nSR)(-3,3,0)),e=(0,i.n0o)(2*(0,i.nSR)(-3,3,[0,r/2])),s=(0,i.n0o)((0,i.q$q)([.5,1.5,3,2.5,3.5])*(0,i.q$q)([-1,1])),t=s*r+1,o=s*e,a=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${r} \\\\ ${e} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${t} \\\\ ${o} \\end{pmatrix}$<br>\n            Les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires. `,this.autoCorrection[0]={enonce:a,propositions:[{texte:"V",statut:100===r},{texte:"F",statut:r*o!=e*t}],options:{ordered:!0}},v=(0,n.l3)(this,0),a+=v.texte,$=v.texteCorr+`<br>Deux vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$\n            sont colinéaires si et seulement si leur déterminant det($\\overrightarrow{u};\\overrightarrow{v})=0$.<br>\n            Si  $\\overrightarrow{u}\\begin{pmatrix}x_{\\overrightarrow{u}} \\\\ x_{\\overrightarrow{v}} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}x_{\\overrightarrow{v}} \\\\ y_{\\overrightarrow{v}} \\end{pmatrix}$, \n            alors det$(\\overrightarrow{u};\\overrightarrow{v})=x_{\\overrightarrow{u}}\\times y_{\\overrightarrow{v}}-y_{\\overrightarrow{u}}\\times x_{\\overrightarrow{v}}$.<br>\n            En utilisant les données de l'énoncé, on obtient : <br>\n            det$(\\overrightarrow{u};\\overrightarrow{v})=\n            ${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}-${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}\n            =${r*o}-${(0,i.PMY)(e*t)}=${r*o-e*t}\n            $.<br>\n            On en déduit que les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ ne sont pas colinéaires.`,$+=(0,i.pRK)(`\n            <br> Mentalement : <br>\n            On compare les produits en croix : $${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}=${r*o}$ et $${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}=${e*t}$.<br>\n            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.\n             `);break;case 5:r=(0,i.n0o)(2*(0,i.nSR)(-3,3,0)),e=(0,i.n0o)(2*(0,i.nSR)(-3,3,[0,r/2])),s=(0,i.n0o)((0,i.q$q)([.5,1.5,3,2.5,3.5])*(0,i.q$q)([-1,1])),t=s*r,o=s*e*-1,a=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${r} \\\\ ${e} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${t} \\\\ ${o} \\end{pmatrix}$<br>\n            Les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ sont colinéaires. `,this.autoCorrection[0]={enonce:a,propositions:[{texte:"V",statut:100===r},{texte:"F",statut:r*o!=e*t}],options:{ordered:!0}},v=(0,n.l3)(this,0),a+=v.texte,$=v.texteCorr+`<br>Deux vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$\n            sont colinéaires si et seulement si leur déterminant det($\\overrightarrow{u};\\overrightarrow{v})=0$.<br>\n            Si  $\\overrightarrow{u}\\begin{pmatrix}x_{\\overrightarrow{u}} \\\\ x_{\\overrightarrow{v}} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}x_{\\overrightarrow{v}} \\\\ y_{\\overrightarrow{v}} \\end{pmatrix}$, \n            alors det$(\\overrightarrow{u};\\overrightarrow{v})=x_{\\overrightarrow{u}}\\times y_{\\overrightarrow{v}}-y_{\\overrightarrow{u}}\\times x_{\\overrightarrow{v}}$.<br>\n            En utilisant les données de l'énoncé, on obtient : <br>\n            det$(\\overrightarrow{u};\\overrightarrow{v})=\n            ${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}-${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}\n            =${r*o}-${(0,i.PMY)(e*t)}=${r*o-e*t}\n            $.<br>\n            On en déduit que les vecteurs $\\overrightarrow{u}$ et $\\overrightarrow{v}$ ne sont pas colinéaires.`,$+=(0,i.pRK)(`\n            <br> Mentalement : <br>\n            On compare les produits en croix : $${(0,i.PMY)(r)}\\times ${(0,i.PMY)(o)}=${r*o}$ et $${(0,i.PMY)(e)}\\times ${(0,i.PMY)(t)}=${e*t}$.<br>\n            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.\n             `)}this.listeQuestions.push(a),this.listeCorrections.push($),(0,i.K1R)(this)}}}}]);
//# sourceMappingURL=27022.03cd9386a0801769f744.js.map