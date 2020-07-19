#!/bin/bash
#///////////////////////////////////////////////////////////////////////
# ATTENTION impossible de rendre executable un script bash lorsqu'il se
#trouve sur une partition dont le système de fichiers est NTFS
#///////////////////////////////////////////////////////////////////////

#maj du 19 jullet 2020

# Contient fonctions perso et autres définitions de couleurs pour les affichages
source Zed_PreambuleBash.txt

#Copyright
Titre="SCRIPT DE SAUVEGARDE INCREMENTIELLE"
copyright

#Ameliorations possibles
                     

#Change le nom de la fenêtre Shell
echo -en '\e]0;Lance Hugo serveur\a'

#/////////////////////Début de région modifiable////////////////////
cd /var/www/prod/Coopmaths
echo "vers le répertoire du projet "
6points
okzed
echo -e "Lancement du serveur Hugo"
6points
okzed
echo -e 
#lsb_release -i
/var/www/prod/Coopmaths/hugo server --disableFastRender --noHTTPCache
pause
