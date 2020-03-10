---
title: "Comment utiliser MathALEA ?"
niveau:
description: "Générateur d'exercices de mathématiques à données aléatoires"
---


{{< liste >}}
  {{% item "Je veux vidéoprojeter des exercices" "#video" %}}
  {{% item "Je veux donner un lien de révision à mes élèves" "#lien" %}}
	{{% item "Je veux créer un fichier d'exercices PDF" "#pdf" %}}
	{{% item "Je veux vidéoprojeter des questions flash" "#flash" %}}
	{{% item "Je veux créer une évaluation différente par élève" "#alacarte" %}}
  {{% item "Je veux voir un diaporama qui résume l'usage par les élèves" "#eleves" %}}
{{< /liste >}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

<h3 class="ui horizontal divider header" id="video">Vidéoprojeter des exercices</h3>

- Se rendre sur MathALEA > Exercices en ligne.
- Cliquer sur les titres d'exercices choisis.
- Les exercices apparaissent automatiquement sous la liste.
- En dessous des exercices, on peut cliquer sur "paramètres" pour modifier le nombre ou la difficulté des questions.
- On peut cliquer sur "corrections" pour faire apparaitre le corrigé détaillé.
- On peut actualiser la page pour faire disparaitre la liste des exercices proposés.
- On peut cliquer sur le bouton de zoom pour ajuster la taille des exercices.

{{% video "/mp4/exercices.mp4"  %}}


<h3 class="ui horizontal divider header" id="lien">Lien de révisions pour les élèves</h3>

- Se rendre sur MathALEA > Exercices en ligne.
- Cliquer sur les titres d'exercices choisis.
- Les exercices apparaissent automatiquement sous la liste.
- En dessous des exercices, on peut cliquer sur paramètres pour modifier le nombre ou la difficulté des questions.
- L'adresse du site internet s'est mise à jour avec tous les réglages que l'on peut copier et transmettre aux élèves.

On peut aussi donner un lien vers un unique exercice si on connait son identifiant. Par exemple pour l'exercice 6M20, le lien est :  [coopmaths.fr/ex6M20](https://coopmaths.fr/ex6M20)


<h3 class="ui horizontal divider header" id="pdf">Créer une fiche d'exercices PDF</h3>

Tous les exercices de **MathALEA** sont générés en LaTeX. Avant d'imprimer la fiche d'exercices, il faut transformer le fichier LaTeX en fichier PDF, c'est ce qu'on appelle la compilation. 

Si vous n'êtes pas habitué·e à utiliser LaTeX, vous pouvez vous créer un compte sur **[Overleaf](https://www.overleaf.com/register)** qui s'occupera pour vous de la compilation.

- Se rendre sur MathALEA > Générateur LaTeX.
- Choisir des exercices.
- Paramétrer sa fiche (titre, niveau de difficulté des exercices...).
- Cliquer sur "Compiler sur Overleaf.com".
- Télécharger le PDF.

{{% video "/mp4/generateur.mp4"  %}}



<h3 class="ui horizontal divider header" id="flash">Questions flash - Diaporama</h3>

- Se rendre sur MathALEA > Diaporama.
- Choisir le temps pour chaque questions.
- Cliquer sur le titre de l'exercice choisi.
- Choisir le nombre de questions.
- Appuyer sur le bouton de lecture.

On peut donner un lien vers ce diaporama aux élèves en recopiant l'adresse internet qui comprend tous les réglages.

{{% video "/mp4/diaporama.mp4"  %}}


<h3 class="ui horizontal divider header" id="alacarte">Créer une évaluation différente pour chaque élève</h3>

Pour pouvoir mettre en place la boucle évaluative, il peut être utile de préparer une évaluation individualisée avec les besoins de chaque élève.

- Se rendre sur MathALEA > Évaluation à la carte.
- Chaque ligne correspond à un élève et doit être de la forme "Nom;Prénom;6N10;6C12;6C30".
- Choisir son en-tête.
- Cliquer sur "Complier avec Overleaf"

{{% video "/video/alacarte.mp4"  %}}

<h3 class="ui horizontal divider header" id="eleves">Utilisation pour l'élève - Présentation interactive</h3>

<div class="container-wrapper-genially" style="position: relative; min-height: 400px; max-width: 100%;"><img src="https://genially.blob.core.windows.net/genially/version3.0/loader.gif" class="loader-genially" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; z-index: 1;width: 80px; height: 80px;"/><div id="5e3569f66bbd27220c6058b1" class="genially-embed" style="margin: 0px auto; position: relative; height: auto; width: 100%;"></div></div><script>(function (d) { var js, id = "genially-embed-js", ref = d.getElementsByTagName("script")[0]; if (d.getElementById(id)) { return; } js = d.createElement("script"); js.id = id; js.async = true; js.src = "https://view.genial.ly/static/embed/embed.js"; ref.parentNode.insertBefore(js, ref); }(document));</script>



<script type="text/javascript">
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
</script>

