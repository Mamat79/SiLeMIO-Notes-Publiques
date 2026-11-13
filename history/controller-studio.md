# Controller Studio — Notes de version / Release notes

## v2026.7 · 2026-10-17 · unspecified · original

# Controller Studio for LiveProfessor 2026.7 — Windows

Livraison Windows2026.7 construite et vérifiée localement.

Cette version renforce la conservation des réglages et la gestion des connexions :

- récupération des anciennes préférences et des profils personnels, en donnant la priorité aux fichiers actuels et en conservant les sources historiques ;
- conservation d'une copie exacte d'une configuration moteur invalide avant récupération ;
- sauvegardes AutoMap et réparation distinctes, y compris pour plusieurs opérations dans la même seconde ;
- gestion des arrêts, reconnexions et ouvertures MIDI tardives, avec maintien de l'état d'arrêt incomplet lorsque le moteur refuse de fermer un ancien port ;
- correction de la détection Windows de LiveProfessor et ajout des propriétés de version dans l'exécutable ; le fabricant du Setup refuse désormais un EXE d'une autre version.

Construction locale Windows depuis le commit privé `00f2831590802279c509548af0d69a358188680c`, avec la recette officielle PyInstaller/Inno et les dépendances imposées par le projet. Les sources de cette version restent privées ; le tag du dépôt de distribution ne représente pas ce commit source. Aucun code privé n'est ajouté à ce dépôt public.

Contrôles réalisés sur Windows : 287 tests et 3 sous-tests réussis ; diagnostic de l'EXE construit réussi sans interface pour la configuration, OSC, les messages EC4 et le chargement du moteur MIDI ; deux installations de qualification isolées avec comparaison des fichiers installés et conservation des données de test.

Le démarrage graphique Windows a été observé dans un profil isolé : fenêtre2026.7, catalogue33contrôleurs, menuAide, boîteÀpropos et fermeture normale, moteur arrêté et démarrage automatique désactivé. Le fonctionnement avec un contrôleur MIDI et les échanges réels avec LiveProfessor restent à qualifier. Le diagnostic énumère les ports sans les ouvrir ni envoyer de messages. Les installations de test ont une identité distincte et retirent les actions visant les anciens raccourcis et les entrées personnelles de registre. L'installeur est non signé. La livraison Windows ci-dessus est construite localement ; les paquets macOS ajoutés à cette release sont construits par Codemagic et détaillés ci-dessous.

Fichiers : `Controller-Studio-for-LiveProfessor-Setup-v2026.7.exe` et son fichier `.sha256`.

SHA-256 de l'installeur : `f3790d9100bedce70330556610d11c2fa3849d59fe3e923aa7428ae471e194da`.

## Ajout macOS — 18 octobre 2026

Deux paquets macOS 2026.7 sont disponibles : Apple Silicon (arm64) et Intel (x86_64), chacun accompagné de son SHA-256. Ils ont été construits par Codemagic depuis le commit source privé ce77e1b70ae674a3c8e29b5568b2aa8185bbc0b2. Le tag de ce dépôt public de distribution conserve sa cible existante ; il ne désigne pas le commit source privé.

Contrôles du job Mac : 287 tests portables et 3 sous-tests réussis, 19 contrôles de contrat de workflow réussis, contrôle des sources avant/après, vérification des paquets montés et démarrages de diagnostic arm64 et x86_64 sous Rosetta sur le runner Apple Silicon. Les architectures et métadonnées des 59 images natives sélectionnées par architecture ont été inspectées. Ces résultats Mac sont distincts des contrôles Windows décrits plus haut.

macOS 11 ou ultérieur est requis par les métadonnées de distribution. La signature ad hoc stricte a été vérifiée sur le runner ; ces applications n'ont pas de signature Apple Developer ID et ne sont pas notarisées. Le minimum macOS indiqué n'est pas une matrice d'exécution validée. Aucun essai sur un Mac Intel physique, aucune recette visuelle complète, aucun périphérique MIDI externe ni intégration réelle LiveProfessor n'est qualifié ; les diagnostics ont signalé zéro port MIDI. Aucun contournement des protections macOS n'est fourni.

SHA-256 des DMG :

| Architecture | SHA-256 |
|---|---|
| Apple Silicon | 903d0fc40441d5fe90daa288cb744fe1e0de6f684e45453fd8166c03a8855427 |
| Intel | 6bbea3522406ae9d21a42851cca5e266f23210a4c9fd299441716aab4ef4443a |

Source : https://github.com/Mamat79/Controller-Studio-for-LiveProfessor/releases/tag/v2026.7

## v2026.6 · 2026-09-09 · unspecified · original

## Controller Studio for LiveProfessor V.2026.6

Première version publique commune à Windows et macOS.

### Nouveautés

- applications macOS natives séparées pour Apple Silicon et Intel, produites et vérifiées sur Codemagic ;
- dossiers utilisateur, ouverture de fichiers, détection de LiveProfessor et lancement à l'ouverture de session adaptés à macOS ;
- mise à jour intégrée capable de choisir automatiquement le DMG correspondant au Mac ;
- comportement Windows, AutoMap, Plugin Studio, profils de contrôleurs et pilote EC4 conservés et retestés ;
- notices française et anglaise actualisées.

### Installation macOS

Ouvrez le DMG correspondant à votre Mac, puis glissez **Controller Studio for LiveProfessor** dans **Applications**. Cette première diffusion macOS est signée localement mais n'est pas encore notariée par Apple : si macOS affiche un avertissement au premier lancement, faites un clic droit sur l'application, puis choisissez **Ouvrir**.

### Vérification

- 252 tests automatisés réussis ;
- exécutable Apple Silicon vérifié `arm64` et test de démarrage réussi ;
- exécutable Intel vérifié `x86_64` et test de démarrage réussi sous Rosetta ;
- installateur et version portable Windows vérifiés ;
- sommes SHA-256 disponibles dans `SHA256SUMS.txt`.

---

## English

First public release shared by Windows and macOS.

- separate native macOS applications for Apple Silicon and Intel, built and verified with Codemagic;
- macOS-specific user folders, file opening, LiveProfessor detection, and login startup;
- integrated updater selects the correct DMG for the Mac architecture;
- Windows behavior, AutoMap, Plugin Studio, controller profiles, and the EC4 driver remain intact and retested.

Open the DMG for your Mac and drag **Controller Studio for LiveProfessor** into **Applications**. This first macOS release is ad-hoc signed but not yet Apple-notarized. If macOS warns on first launch, right-click the application and choose **Open**.

Source : https://github.com/Mamat79/Controller-Studio-for-LiveProfessor/releases/tag/v2026.6

## v2026.5 · 2026-08-12 · unspecified · original

## Français

Controller Studio V.2026.5 rend l’interface plus claire et plus fluide sans retirer de fonction :

- navigation latérale stable entre Live, Banque de contrôleurs, Plug-ins et Bibliothèque ;
- AutoMap accessible immédiatement depuis toutes les pages ;
- page Live simplifiée avec démarrage Windows et connexion automatique toujours visibles ;
- raccourcis adaptés et configurables séparément pour chaque contrôleur, y compris l’EC4 ;
- détection prudente du projet actuellement ouvert dans LiveProfessor, avec demande de sauvegarde avant AutoMap ;
- choix conservé d’un projet `.rack2` manuel et création systématique d’une copie AutoMap sûre ;
- réglages avancés, apprentissage MIDI et fonctions EC4 conservés ;
- identité SiLeMI/O et visuel Controller Studio plus net dans l’application ;
- notices française et anglaise actualisées avec une police agrandie.

AutoMap travaille uniquement sur une copie et ne modifie jamais le projet `.rack2` source.

## English

Controller Studio V.2026.5 makes the interface clearer and smoother without removing features:

- stable sidebar navigation across Live, Controller bank, Plug-ins, and Library;
- AutoMap immediately accessible from every page;
- simplified Live page with Windows startup and automatic connection kept visible;
- controller-specific shortcuts that can be configured independently, including EC4 shortcuts;
- conservative detection of the project currently open in LiveProfessor, with a save reminder before AutoMap;
- manual `.rack2` selection remains available and AutoMap always creates a safe copy;
- advanced settings, MIDI Learn, and EC4 features are preserved;
- SiLeMI/O identity and a sharper Controller Studio visual in the application;
- updated French and English manuals with larger text.

AutoMap works on a new copy only and never changes the source `.rack2` project.

Validation: 242 automated tests passed, Windows binaries and installer were built, inspected, installed locally, and hash-verified.

Source : https://github.com/Mamat79/Controller-Studio-for-LiveProfessor/releases/tag/v2026.5

## v2026.4 · 2026-08-10 · unspecified · original

## Écran d'attente EC4 / EC4 waiting screen

- Appuyer sur **Stop** ou quitter réellement Controller Studio efface l'écran avant la fermeture du port MIDI.

- Pressing **Stop** or fully quitting Controller Studio clears the screen before closing the MIDI port.

---

## Démarrage autonome du serveur / Autonomous server startup

- Deux options indépendantes permettent de lancer Controller Studio avec Windows dans la zone de notification et de connecter automatiquement le contrôleur sélectionné.
- L'EC4 affiche désormais un message localisé tant que LiveProfessor n'a pas démarré, puis reprend automatiquement les labels et valeurs dès le premier retour OSC.
- La fenêtre de réglages Live / MIDI / OSC conserve tous ses boutons entièrement visibles en français et en anglais.
- La désinstallation retire aussi l'entrée de démarrage Windows créée par l'application.

- Two independent options launch Controller Studio with Windows in the notification area and connect the selected controller automatically.
- The EC4 now shows a localized waiting message until LiveProfessor starts, then restores labels and values on the first OSC feedback.
- The Live / MIDI / OSC settings window keeps every button fully visible in French and English.
- Uninstalling also removes the Windows startup entry created by the application.

---

## Correctif AutoMap

- Corrige l'erreur lors de la création d'une copie AutoMap quand le projet ne contient pas encore de contrôleur Companion/OSC et que l'option **Créer un nouveau contrôleur depuis le profil choisi** est sélectionnée.
- Le projet source reste toujours inchangé : Controller Studio crée une copie distincte prête à ouvrir dans LiveProfessor.
- La sélection personnalisée permet d'exclure n'importe quel plug-in ou instance avant la génération.

## Validation réelle

Le correctif a été validé avec `BAXTER_DURY_RDR2026_LiveProfessor_v3.rack2` :

- 41 instances détectées ;
- 19 types de plug-ins ;
- 19/19 types mappés, aucun plug-in ignoré ;
- 529 rotatifs AutoMap générés à partir de 15 056 paramètres disponibles ;
- test d'exclusion de toutes les instances de Saturn 2 réussi ;
- empreinte du projet source identique avant et après la génération.

## Controller Studio V.2026.4

Cette version publique réunit AutoMap, la banque de contrôleurs intégrée, la création et l'apprentissage de contrôleurs, Plugin Studio, la bibliothèque communautaire, les notices française et anglaise, et les fonctions héritées d'EC4 Bridge.

---

## AutoMap fix

- Fixes AutoMap copy creation when the project has no Companion/OSC controller yet and **Create a new controller from the selected profile** is chosen.
- The source project always remains unchanged; Controller Studio creates a separate LiveProfessor-ready copy.
- Custom selection can exclude any plug-in or instance before generation.

Validated on the real 41-instance project: all 19 plug-in types mapped successfully, custom exclusion passed, and the source file hash remained unchanged.

Source : https://github.com/Mamat79/Controller-Studio-for-LiveProfessor/releases/tag/v2026.4
