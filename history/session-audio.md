# Session Audio — Notes de version / Release notes

## v1.0.2 · 2026-10-18 · unspecified · original

# Session Audio 1.0.2 — Windows

Livraison Windows construite localement, installée en place et vérifiée sur le poste personnel.

Cette version renforce la préparation et la récupération d'une session audio :

- application des réglages d'alimentation à une copie temporaire du plan, avec journalisation avant création et nettoyage après retour au plan original ;
- conservation des états anciens et sauvegardes, avec diagnostic lorsque certaines valeurs historiques sont inconnues ;
- contrôle des arguments du lanceur et des retours d'erreur PowerShell ;
- adaptation de la barre de commandes à la largeur de fenêtre ;
- conservation de la configuration, de l'état en attente et des sauvegardes lors d'une mise à niveau, sans restauration automatique ni désinstallation préalable.

Construction Windows depuis le commit source privé `6512c464058c812c8e252c28536d0d0ea0cf6c09`, avec la recette officielle `Build-Installer.ps1`. Ce commit reste dans l'historique de main ; l'intégration Mac ultérieure n'a changé aucun fichier Windows. Les sources restent privées et le tag public de distribution conserve sa cible documentaire existante, distincte du commit source privé.

Contrôles Windows : 97 contrôles source et fixtures réussis, puis deux installations de qualification isolées avec conservation des fichiers de test et comparaison des fichiers installés. Ces tests n'ont pas été rejoués pour la publication.

Le Setup standard a ensuite remplacé personnellement 1.0.1 par 1.0.2 dans le même dossier, avec le même AppId et le même périmètre all-users, sans désinstallation ni redémarrage. Dix fichiers du programme sont conformes au candidat. Les 27 fichiers personnels, dont la configuration et l'état de session en attente, sont restés identiques ; trois copies de sauvegarde antérieures ont été revérifiées, et le seul nouveau journal a également été sauvegardé.

Le lanceur installé a réellement démarré en version 1.0.2. L'état de restauration en attente a été conservé ; la fermeture normale a été confirmée par l'utilisateur, le journal indique un lancement annulé et les processus sont arrêtés. La fenêtre élevée n'était pas accessible à l'outil de contrôle : cette observation ne constitue pas une recette visuelle complète de l'interface.

Limites : aucun changement réel de réglages d'énergie, restauration Windows, lancement de session audio ou modification de sécurité n'a été effectué pour ces contrôles. Les essais sur source et fixtures restent distincts de ces opérations réelles. L'installeur et le lanceur sont non signés. Une restauration personnelle encore en attente n'est ni effacée ni exécutée automatiquement.

Fichiers : `Session-Audio-Setup-1.0.2.exe` et son fichier `.sha256`.

SHA-256 de l'installeur : `3d75f6a56f08f664e85ed2912fa0e6b36661804ead79fcbbc377c73b7d259d25`.

La préversion Mac 1.0.0 est publiée séparément sous `v1.0.0-macos` ; elle conserve ses propres fonctions, limites et statut de préversion.

Source : https://github.com/Mamat79/Session-Audio/releases/tag/v1.0.2

## v1.0.0-macos · 2026-10-18 · macos · original

# Session Audio Mac 1.0.0 — préversion

Cette préversion expérimentale est distincte de Session Audio pour Windows. Elle ne remplace pas la version stable Windows et ne revendique pas la parité fonctionnelle avec Windows.

Les deux paquets sont destinés à macOS 14 ou ultérieur : Apple Silicon (`arm64`) et Intel (`x86_64`). Les applications ne disposent pas d'une signature de distribution qualifiée et ne sont pas notarisées. Aucun contournement des protections de macOS n'est fourni.

La construction Codemagic provient du commit source privé `3dc1a6eb1b9bc63972256ee6eb19b731112857ff`, job `6ad4847c39dec384b1403796`. Les sources restent privées. Le tag du dépôt public désigne un commit de documentation publique, pas ce commit source privé.

Contrôles exécutés sur le runner Apple Silicon : **26 tests XCTest du cœur** et **11 tests natifs du sous-ensemble AppKit** réussis. Les versions internes des deux applications sont `1.0.0`. Les architectures, le minimum macOS 14 et la concordance entre le contenu des DMG montés et les applications empaquetées ont été vérifiés.

Les applications empaquetées **n'ont pas été lancées ni installées** pendant cette qualification. La recette graphique complète, l'exécution sur un Mac Intel physique et l'exécution sur macOS 14 restent à faire. Les 11 tests AppKit ne valent pas validation de toute l'interface ni du lancement par LaunchServices.

Le port Mac ne réalise pas les optimisations système de Session Audio Windows. Il conserve le statut de préversion et ne doit pas être présenté comme une version stable ou une validation du comportement Windows.

| Paquet | Taille | SHA-256 |
|---|---:|---|
| `Session-Audio-Mac-1.0.0-arm64-unsigned.dmg` | 200 843 octets | `f992412c226fc671c9528ddcfcd79db7bcb771523bdd42dd4a00fc7e98836668` |
| `Session-Audio-Mac-1.0.0-x86_64-unsigned.dmg` | 202 582 octets | `325470a6b072cdd924bd4067a14d63d0e2c2d7a5308d1a5c4ee4bad35cd69035` |

Chaque DMG est accompagné d'un fichier `.dmg.sha256` portable contenant uniquement l'empreinte et le nom du DMG correspondant. Les journaux, rapports internes de qualification et sources privées ne font pas partie de la livraison publique.

Documentation et limites de cette préversion : https://github.com/Mamat79/Session-Audio/blob/914c1aa8dbcd631556c8e70ce4283590b4666c80/MACOS-1.0.0-PREVERSION.md

Source : https://github.com/Mamat79/Session-Audio/releases/tag/v1.0.0-macos

## v1.0.1 · 2026-10-10 · unspecified · original

Session Audio 1.0.1 est une maintenance Windows consacrée à la fiabilité de la restauration. Elle n'ajoute pas de nouvelle fonction audio.

### Ce qui change

- Un refus de restauration d'un service, du réseau, du pare-feu ou de Defender conserve maintenant l'état de session et les diagnostics. Le logiciel ne déclare plus une restauration terminée tant que les cibles ne sont pas vérifiées.
- Une nouvelle tentative vérifie les résultats déjà obtenus et reprend les éléments encore en attente. Un nouveau lancement réel est bloqué tant qu'un état précédent reste à restaurer.
- La simulation de restauration ne modifie ni les réglages Windows, ni l'état, ni la configuration.
- Les écritures de configuration et d'état utilisent un fichier temporaire validé et un remplacement atomique avec sauvegarde. Après succès vérifié, le snapshot reste disponible sous forme d'archive.

### Téléchargements

- **Session-Audio-Setup-1.0.1.exe** : installeur Windows.
- **Session-Audio-1.0.1-win-x64-portable.zip** : paquet portable neutre pour Windows x64, avec les fichiers nécessaires à l'exécution, dont le script PowerShell. Les options sensibles sont désactivées dans la configuration initiale.
- Les fichiers **.sha256.txt** et **Session-Audio-1.0.1-manifest.json** permettent de vérifier les deux paquets et leur provenance.

Le lanceur utilise .NET Framework AnyCPU et Windows PowerShell 5.1. L'installeur n'est pas signé ; Windows peut afficher un avertissement de signature/SmartScreen. Aucune version macOS n'est fournie.

### Mise à jour et récupération

Sauvegarder la configuration, les états de restauration, les journaux et les profils existants avant remplacement. Mettre à jour dans le dossier et le mode d'installation déjà utilisés. L'état en attente doit rester disponible pour la restauration ; ne pas l'effacer pour contourner un diagnostic incomplet.

Si Windows refuse une restauration, conserver le snapshot et les sauvegardes, lire les diagnostics, corriger la cause puis relancer la restauration. Les droits Windows, les protections Defender, les stratégies de groupe et le lien réseau physique peuvent maintenir certains éléments en attente.

### Validation et limites

Les 31 tests PowerShell 5.1 ont réussi sur les octets Git exacts, avec les commandes système interceptées. L'atelier a vérifié les 11 fichiers du payload et la conservation de fichiers de configuration, d'état et de journal dans une installation de test à identité distincte, ainsi qu'une installation vierge neutre.

Cette qualification ne constitue pas une restauration réelle du poste, une recette audio ou l'exécution de l'installeur standard sur le PC utilisateur. L'intégration standard des raccourcis et de l'enregistrement d'installation reste à vérifier lors de l'installation autorisée.

Le snapshot restaure le plan d'alimentation actif, pas ses valeurs internes de veille/CPU/USB. Les applications retrouvent leur exécutable, pas leur contenu de session ni leur nombre d'instances. Les tâches Defender retrouvent leur activation, sans relancer une exécution auparavant en cours.

### Provenance de cette distribution

Version : **1.0.1**. Source de développement privée, branche **main**, commit exact :

**d3d90e29da8d5c0b256e76f1f34742d8bbcf95b4**

Le tag public **v1.0.1** est un **tag de distribution des paquets qualifiés**. Il pointe sur le commit historique public **bc7b4a7a3cea5b7ea7d76a721ede8064fc8bc65b**, conservé sans nouveau push de source. Il ne représente pas le commit de développement privé indiqué ci-dessus.

Les archives automatiques **Source code** proposées par GitHub correspondent à cet historique public, et non à la source privée 1.0.1. Pour utiliser cette version, télécharger l'installeur ou le ZIP portable nommés ci-dessus.

Source : https://github.com/Mamat79/Session-Audio/releases/tag/v1.0.1

## v1.0.0 · 2026-08-09 · unspecified · original

# Session Audio 1.0.0

Premiere version installable de Session Audio pour Windows 10 et Windows 11.

Contenu principal :

- installeur avec desinstallation ;
- lanceur natif demandant les droits administrateur ;
- raccourcis Lancer, Restaurer et Configuration ;
- conservation des profils et reglages pendant les mises a jour ;
- blocage de la desinstallation si une restauration est en attente ;
- options pare-feu et Defender desactivees par defaut dans toute nouvelle installation ;
- checksum SHA-256 fourni avec l'installeur.

Important : cette version n'est pas signee par un certificat de signature de code. Windows SmartScreen peut afficher un avertissement.

Source : https://github.com/Mamat79/Session-Audio/releases/tag/v1.0.0
