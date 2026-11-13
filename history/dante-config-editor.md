# Dante Config Editor — Notes de version / Release notes

## v2027.3 · 2026-11-12 · all · original

# Dante Config Editor 2027.3

DCE 2027.3 démarre avec un essai gratuit de 30 jours à compter du premier lancement. Ensuite, une licence permanente est requise pour utiliser l’éditeur. Elle est vendue **49 € TTC** en paiement unique. Les licences DCE valides déjà activées restent utilisables.

## Windows x64

- **Hors ligne.** Créez un projet depuis zéro ou ouvrez un XML Dante. Préparez les machines, les noms de canaux et le patch, puis exportez le XML.
- **En ligne.** Dans **Patch DCE**, choisissez **Passer en ligne** et sélectionnez l’interface Dante. Les points de patch entre deux machines détectées s’appliquent sur le réseau local. **Démarrer la simulation** permet de découvrir ce parcours avec des appareils fictifs.
- **Mode mixte.** Les appareils détectés côtoient les machines prévues dans le projet. Une liaison préparée reste grise tant qu’un appareil manque. À son arrivée, DCE signale les écarts. Ouvrez **Remplacer / Synchroniser des machines** pour vérifier les correspondances et choisir les écarts et leur sens. Une application sur le réseau peut interrompre l’audio.
- **Grille.** Filtres, dépliage global, renommage et séries, Flip à axes fixes et repérage de la case exacte depuis une liste de destinations ou de sources. Les points connectés distinguent l’unicast vert du multicast bleu. Le clic droit propose un changement de transport lorsque le flux s’y prête. La liste des destinations se ferme avec **Fermer** en français et **Close** en anglais.

## macOS Apple Silicon et Intel

La 2027.3 comprend la préparation XML hors ligne avec la banque de machines, le renommage, la matrice et l’export pour Dante Controller. La grille intégrée de contrôle réseau et le mode mixte sont proposés sur Windows dans cette version.

## Mise à jour Windows du 13 novembre 2026

- **Patch Windows.** Easy patch permet de changer la destination. La matrice propose Ctrl+clic entre groupes, un avertissement de remplacement facultatif et les séries L/R avec ou sans espace. Le clic droit sur un point actif indique le transport disponible. La fiche machine propose de déconnecter tous les RX ou tous les TX après confirmation.

## Mise à jour macOS du 13 novembre 2026

- **Patch XML hors ligne.** Easy Patch permet de choisir l’émetteur TX et le récepteur RX. L’avertissement avant de remplacer un RX est facultatif.
- Dans **Actions → Groupes de canaux**, utilisez **⌘+clic** au croisement de deux groupes de même taille pour les connecter dans l’ordre. Répétez le geste pour retirer le bloc complet.
- Les séries L/R préservent l’écriture des noms, avec ou sans espace. La fiche machine permet de préparer la déconnexion de tous ses RX ou TX après confirmation.

---

# Dante Config Editor 2027.3

DCE 2027.3 starts with a 30-day free trial from first launch. After the trial, a permanent license is required to use the editor. The one-time price is **€49 including VAT**. Existing valid activated DCE licenses still work.

## Windows x64

- **Offline.** Create a project from scratch or open a Dante XML file. Prepare devices, channel labels and routing, then export the XML.
- **Online.** In **DCE Patch**, select **Go online** and choose the Dante interface. Patch points between two discovered devices apply to the local network. **Start simulation** lets you explore this workflow with simulated devices.
- **Mixed mode.** Discovered devices appear alongside devices planned in the project. A prepared route stays grey while a device is missing. When it arrives, DCE flags differences. Open **Replace / Synchronize devices** to review the assignments and choose which differences to apply in each direction. Applying changes to the network may interrupt audio.
- **Matrix.** Filters, global expand and collapse, channel renaming and series, fixed-axis Flip, and navigation to the exact patch cell from a source or destination list. Green marks connected unicast and blue marks connected multicast. Right-click offers a transport change when the flow supports it. The destination list uses **Close** in English and **Fermer** in French.

## macOS Apple Silicon and Intel

2027.3 includes offline XML preparation with the device library, channel renaming, the patch matrix, and export for Dante Controller. The integrated network matrix and mixed mode are available on Windows in this release.

## Windows update, November 13, 2026

- **Windows patching.** Easy patch lets you change the destination. The matrix offers Ctrl-click routing between groups, an optional replacement warning, and L/R series with or without a space. Right-click an active patch point to see the available transport change. Device details lets you disconnect all RX or TX routes after confirmation.

## macOS update, November 13, 2026

- **Offline XML patching.** Easy Patch lets you choose both TX and RX devices. The existing RX replacement warning is optional.
- Enable **Actions → Channel groups** and **Command-click** where two equal-sized groups intersect to connect them in order. Repeat to disconnect the complete block.
- L/R naming series preserve the format, including the optional space. Device details lets you prepare to disconnect all RX or all TX routes after confirmation.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.3

## v2027.3 · 2026-11-12 · all · en

# Dante Config Editor 2027.3

DCE 2027.3 starts with a 30-day free trial from first launch. After the trial, a permanent license is required to use the editor. The one-time price is **€49 including VAT**. Existing valid activated DCE licenses still work.

## Windows x64

- **Offline.** Create a project from scratch or open a Dante XML file. Prepare devices, channel labels and routing, then export the XML.
- **Online.** In **DCE Patch**, select **Go online** and choose the Dante interface. Patch points between two discovered devices apply to the local network. **Start simulation** lets you explore this workflow with simulated devices.
- **Mixed mode.** Discovered devices appear alongside devices planned in the project. A prepared route stays grey while a device is missing. When it arrives, DCE flags differences. Open **Replace / Synchronize devices** to review the assignments and choose which differences to apply in each direction. Applying changes to the network may interrupt audio.
- **Matrix.** Filters, global expand and collapse, channel renaming and series, fixed-axis Flip, and navigation to the exact patch cell from a source or destination list. Green marks connected unicast and blue marks connected multicast. Right-click offers a transport change when the flow supports it. The destination list uses **Close** in English and **Fermer** in French.

## macOS Apple Silicon and Intel

2027.3 includes offline XML preparation with the device library, channel renaming, the patch matrix, and export for Dante Controller. The integrated network matrix and mixed mode are available on Windows in this release.

## Windows update, November 13, 2026

- **Windows patching.** Easy patch lets you change the destination. The matrix offers Ctrl-click routing between groups, an optional replacement warning, and L/R series with or without a space. Right-click an active patch point to see the available transport change. Device details lets you disconnect all RX or TX routes after confirmation.

## macOS update, November 13, 2026

- **Offline XML patching.** Easy Patch lets you choose both TX and RX devices. The existing RX replacement warning is optional.
- Enable **Actions → Channel groups** and **Command-click** where two equal-sized groups intersect to connect them in order. Repeat to disconnect the complete block.
- L/R naming series preserve the format, including the optional space. Device details lets you prepare to disconnect all RX or all TX routes after confirmation.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.3

## v2027.3 · 2026-11-12 · all · fr

# Dante Config Editor 2027.3

DCE 2027.3 démarre avec un essai gratuit de 30 jours à compter du premier lancement. Ensuite, une licence permanente est requise pour utiliser l’éditeur. Elle est vendue **49 € TTC** en paiement unique. Les licences DCE valides déjà activées restent utilisables.

## Windows x64

- **Hors ligne.** Créez un projet depuis zéro ou ouvrez un XML Dante. Préparez les machines, les noms de canaux et le patch, puis exportez le XML.
- **En ligne.** Dans **Patch DCE**, choisissez **Passer en ligne** et sélectionnez l’interface Dante. Les points de patch entre deux machines détectées s’appliquent sur le réseau local. **Démarrer la simulation** permet de découvrir ce parcours avec des appareils fictifs.
- **Mode mixte.** Les appareils détectés côtoient les machines prévues dans le projet. Une liaison préparée reste grise tant qu’un appareil manque. À son arrivée, DCE signale les écarts. Ouvrez **Remplacer / Synchroniser des machines** pour vérifier les correspondances et choisir les écarts et leur sens. Une application sur le réseau peut interrompre l’audio.
- **Grille.** Filtres, dépliage global, renommage et séries, Flip à axes fixes et repérage de la case exacte depuis une liste de destinations ou de sources. Les points connectés distinguent l’unicast vert du multicast bleu. Le clic droit propose un changement de transport lorsque le flux s’y prête. La liste des destinations se ferme avec **Fermer** en français et **Close** en anglais.

## macOS Apple Silicon et Intel

La 2027.3 comprend la préparation XML hors ligne avec la banque de machines, le renommage, la matrice et l’export pour Dante Controller. La grille intégrée de contrôle réseau et le mode mixte sont proposés sur Windows dans cette version.

## Mise à jour Windows du 13 novembre 2026

- **Patch Windows.** Easy patch permet de changer la destination. La matrice propose Ctrl+clic entre groupes, un avertissement de remplacement facultatif et les séries L/R avec ou sans espace. Le clic droit sur un point actif indique le transport disponible. La fiche machine propose de déconnecter tous les RX ou tous les TX après confirmation.

## Mise à jour macOS du 13 novembre 2026

- **Patch XML hors ligne.** Easy Patch permet de choisir l’émetteur TX et le récepteur RX. L’avertissement avant de remplacer un RX est facultatif.
- Dans **Actions → Groupes de canaux**, utilisez **⌘+clic** au croisement de deux groupes de même taille pour les connecter dans l’ordre. Répétez le geste pour retirer le bloc complet.
- Les séries L/R préservent l’écriture des noms, avec ou sans espace. La fiche machine permet de préparer la déconnexion de tous ses RX ou TX après confirmation.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.3

## v2027.3 · 2026-11-12 · all · original

# Dante Config Editor 2027.3

DCE 2027.3 démarre avec un essai gratuit de 30 jours à compter du premier lancement. Ensuite, une licence permanente est requise pour utiliser l’éditeur. Elle est vendue **49 € TTC** en paiement unique. Les licences DCE valides déjà activées restent utilisables.

## Windows x64

- **Hors ligne.** Créez un projet depuis zéro ou ouvrez un XML Dante. Préparez les machines, les noms de canaux et le patch, puis exportez le XML.
- **En ligne.** Dans **Patch DCE**, choisissez **Passer en ligne** et sélectionnez l’interface Dante. Les points de patch entre deux machines détectées s’appliquent sur le réseau local. **Démarrer la simulation** permet de découvrir ce parcours avec des appareils fictifs.
- **Mode mixte.** Les appareils détectés côtoient les machines prévues dans le projet. Une liaison préparée reste grise tant qu’un appareil manque. À son arrivée, DCE signale les écarts. Ouvrez **Remplacer / Synchroniser des machines** pour vérifier les correspondances et choisir les écarts et leur sens. Une application sur le réseau peut interrompre l’audio.
- **Grille.** Filtres, dépliage global, renommage et séries, Flip à axes fixes et repérage de la case exacte depuis une liste de destinations ou de sources. Les points connectés distinguent l’unicast vert du multicast bleu. Le clic droit propose un changement de transport lorsque le flux s’y prête. La liste des destinations se ferme avec **Fermer** en français et **Close** en anglais.

## macOS Apple Silicon et Intel

La 2027.3 comprend la préparation XML hors ligne avec la banque de machines, le renommage, la matrice et l’export pour Dante Controller. La grille intégrée de contrôle réseau et le mode mixte sont proposés sur Windows dans cette version.

## Mise à jour Windows du 13 novembre 2026

- **Patch Windows.** Easy patch permet de changer la destination. La matrice propose Ctrl+clic entre groupes, un avertissement de remplacement facultatif et les séries L/R avec ou sans espace. Le clic droit sur un point actif indique le transport disponible. La fiche machine propose de déconnecter tous les RX ou tous les TX après confirmation.

## Mise à jour macOS du 13 novembre 2026

- **Patch XML hors ligne.** Easy Patch permet de choisir l’émetteur TX et le récepteur RX. L’avertissement avant de remplacer un RX est facultatif.
- Dans **Actions → Groupes de canaux**, utilisez **⌘+clic** au croisement de deux groupes de même taille pour les connecter dans l’ordre. Répétez le geste pour retirer le bloc complet.
- Les séries L/R préservent l’écriture des noms, avec ou sans espace. La fiche machine permet de préparer la déconnexion de tous ses RX ou TX après confirmation.

---

# Dante Config Editor 2027.3

DCE 2027.3 starts with a 30-day free trial from first launch. After the trial, a permanent license is required to use the editor. The one-time price is **€49 including VAT**. Existing valid activated DCE licenses still work.

## Windows x64

- **Offline.** Create a project from scratch or open a Dante XML file. Prepare devices, channel labels and routing, then export the XML.
- **Online.** In **DCE Patch**, select **Go online** and choose the Dante interface. Patch points between two discovered devices apply to the local network. **Start simulation** lets you explore this workflow with simulated devices.
- **Mixed mode.** Discovered devices appear alongside devices planned in the project. A prepared route stays grey while a device is missing. When it arrives, DCE flags differences. Open **Replace / Synchronize devices** to review the assignments and choose which differences to apply in each direction. Applying changes to the network may interrupt audio.
- **Matrix.** Filters, global expand and collapse, channel renaming and series, fixed-axis Flip, and navigation to the exact patch cell from a source or destination list. Green marks connected unicast and blue marks connected multicast. Right-click offers a transport change when the flow supports it. The destination list uses **Close** in English and **Fermer** in French.

## macOS Apple Silicon and Intel

2027.3 includes offline XML preparation with the device library, channel renaming, the patch matrix, and export for Dante Controller. The integrated network matrix and mixed mode are available on Windows in this release.

## Windows update, November 13, 2026

- **Windows patching.** Easy patch lets you change the destination. The matrix offers Ctrl-click routing between groups, an optional replacement warning, and L/R series with or without a space. Right-click an active patch point to see the available transport change. Device details lets you disconnect all RX or TX routes after confirmation.

## macOS update, November 13, 2026

- **Offline XML patching.** Easy Patch lets you choose both TX and RX devices. The existing RX replacement warning is optional.
- Enable **Actions → Channel groups** and **Command-click** where two equal-sized groups intersect to connect them in order. Repeat to disconnect the complete block.
- L/R naming series preserve the format, including the optional space. Device details lets you prepare to disconnect all RX or all TX routes after confirmation.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.3

## v2027.2.15 · 2026-11-09 · all · en

# Dante Config Editor 2027.2.15

## 2027.2.15 — updated patch matrix

The **Transmitters (TX)** and **Receivers (RX)** filters independently find
devices and channels in the offline preset. The **Patch point** panel shows the
receiver, its current source and the target source during a gesture.

An existing connection fills its cell in green with a dark check mark. A new
target appears in amber. Escape cancels the gesture before applying it. Density,
zoom, keyboard navigation, Easy patch and the RX-to-TX list remain available.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.15

## v2027.2.15 · 2026-11-09 · all · fr

# Dante Config Editor 2027.2.15

## 2027.2.15 — nouvelle matrice de patch

Les filtres **Émetteurs (TX)** et **Récepteurs (RX)** cherchent séparément
les machines et les canaux du preset hors ligne. Le panneau **Point de patch**
affiche le récepteur, sa source actuelle et la source visée pendant le geste.

Une liaison existante remplit sa case en vert avec une coche sombre. Un nouveau
point visé apparaît en orange. Échap annule le geste avant application. Les
densités, le zoom, le clavier, Easy patch et la liste RX vers TX restent disponibles.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.15

## v2027.2.15 · 2026-11-09 · all · original

# Dante Config Editor 2027.2.15

Les filtres **Émetteurs (TX)** et **Récepteurs (RX)** cherchent séparément dans le preset. Le panneau **Point de patch** distingue la source actuelle de la source visée. Les liaisons en place s’affichent en vert et l’aperçu en orange.

Installeurs Windows x64, macOS Apple Silicon et macOS Intel, avec sommes SHA-256 et notices FR/EN. Consultez les rapports de qualification Windows et Mac pour le périmètre des essais.

TX and RX filters search the preset independently. Patch details distinguish the current source from the target. Existing connections are green, and proposed connections are amber.

Windows x64, macOS Apple Silicon and Intel packages include SHA-256 checksums and French/English guides. See the Windows and Mac qualification reports for test coverage.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.15

## v2027.2.14 · 2026-11-06 · all · en

# Dante Config Editor 2027.2.14

## 6 November 2026 visual update — matrix

Patched connections now fill their entire cell in green. The preview fills the
cell in amber before committing. The fill and check mark follow grid density
and zoom on Windows and macOS; hover and selection outlines remain visible.
Patch gestures and XML data retain their existing behavior. Release version: 2027.2.14.

## 2027.2.14 fix — creation and device bank, 2 November 2026

**Create a configuration** and **Open a configuration** are now equally visible
starting choices in the main toolbar. Create opens an empty draft without requiring
a destination file: add devices from the bank, edit as needed, then export the XML
for Dante Controller. Existing confirmations protect unsaved work and pending
configuration additions.

Adding CL3, QL5, HY144-D or RU-LB4 was blocked because their supplied templates had
channels without `mediaType`. These four entries now use explicit generic audio
roles with catalog channel counts and no technical hardware identity. They are
marked **structurally validated**; this correction does not claim new hardware
testing. XML guards remain active and personal banks are preserved. A regression
test adds, exports and reloads each of the 85 currently supplied models.

Windows and Mac checks and their limits are documented separately in this release qualification reports.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.14

## v2027.2.14 · 2026-11-06 · all · fr

# Dante Config Editor 2027.2.14

## Ajustement visuel du 6 novembre 2026 — matrice

Les liaisons de patch remplissent désormais toute leur case en vert. L’aperçu
avant application remplit la case en orange. Le remplissage et la coche suivent
la densité de la grille et le zoom, sur Windows et macOS ; le survol et le contour
de sélection restent visibles. Les gestes de patch et les données XML conservent
leur fonctionnement. Version livrée : 2027.2.14.

## Correctif 2027.2.14 — création et banque de machines, 2 novembre 2026

**Créer une configuration** et **Ouvrir une configuration** sont désormais deux
choix de départ au même niveau dans la barre principale. Créer ouvre un brouillon
vide, sans fichier imposé : ajoutez les machines de la banque, modifiez-les si
nécessaire puis exportez le XML pour Dante Controller. Les confirmations protègent
le projet non enregistré et les configurations encore en attente.

L'ajout de CL3, QL5, HY144-D et RU-LB4 était refusé parce que leurs modèles fournis
avaient des canaux sans `mediaType`. Ces quatre entrées utilisent maintenant des
rôles audio génériques explicites, avec les nombres de canaux du catalogue et sans
identité technique matérielle. Leur statut est **validé structurellement** ; cette
correction ne revendique aucun nouveau test sur matériel. Les contrôles XML restent
actifs et la banque personnelle n'est pas remplacée. Un test couvre l'ajout,
l'export et la relecture de chacun des 85 modèles actuellement fournis.

Les contrôles Windows, Mac et les limites sont détaillés dans les documents de qualification de cette livraison.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.14

## v2027.2.14 · 2026-11-06 · all · original

# Dante Config Editor 2027.2.14 — Windows et macOS

Créer une configuration ouvre maintenant un brouillon vide, sans imposer de fichier. Vous pouvez ensuite ajouter les modèles de la banque et exporter une copie XML pour Dante Controller.

Les modèles CL3, QL5, HY144-D et RU-LB4 corrigés s’ajoutent à nouveau. Ce sont des rôles audio génériques validés structurellement, sans identité matérielle ; cette correction ne revendique pas de nouveau test sur ces appareils. Le catalogue des banques téléchargées depuis GitHub est actualisé avec les mêmes corrections.

Les liaisons remplissent toute leur case en vert et l’aperçu avant application remplit la case en orange. Le remplissage et la coche suivent la densité et le zoom ; le survol et le contour de sélection restent visibles. Les protections XML et les banques personnelles sont conservées.

L’installateur Windows autonome a été installé et lancé sur Windows 11. Les contrôles source et les observations de l’application installée sont distingués dans [la qualification Windows](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.14/QUALIFICATION-WINDOWS-2027.2.14.md), notamment les limites de capture de la fenêtre principale, du zoom et de l’aperçu orange natifs. Les contrôles Mac et leurs limites sont détaillés dans [la qualification macOS](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.14/QUALIFICATION-MACOS-2027.2.14.md).

Téléchargez l’installateur Windows ou le DMG correspondant à votre processeur Mac, puis vérifiez son SHA-256. Les notices FR/EN et les guides de démarrage de chaque plateforme sont fournis. Les anciennes publications et leurs fichiers sont conservés. DCE prépare des fichiers hors ligne ; cette livraison ne constitue pas une validation d’un réseau Dante réel.

---

Create a configuration now opens an empty draft without requiring a file. Add bank templates, then export a separate XML copy for Dante Controller.

Corrected CL3, QL5, HY144-D and RU-LB4 templates can be added again. They are structurally validated generic audio roles without hardware identity; no new physical-device test is claimed. The GitHub bank catalog includes the same corrections.

Patched connections fill their entire cell in green; pre-commit preview fills the cell in amber. Fill and check marks follow density and zoom, while hover and selection outlines remain visible. XML safeguards and personal banks are retained.

The self-contained Windows installer was installed and launched on Windows 11. Source tests and native installed observations are documented separately in [Windows qualification](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.14/QUALIFICATION-WINDOWS-2027.2.14.md). See [macOS qualification](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.14/QUALIFICATION-MACOS-2027.2.14.md) for Mac checks and limitations. Download the matching installer or DMG and verify its SHA-256. Platform-specific French and English manuals and quick starts are included. Previous releases and assets remain preserved; no live Dante network qualification is claimed.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.14

## v2027.2.13 · 2026-10-28 · all · en

# Dante Config Editor 2027.2.13 — Windows

## Windows 2027.2.13 — configuration preparation, 28 October 2026

The configuration name stays above four actions: **Open a configuration**,
**Add configurations** (optional), **Edit** (optional), and **Export for Dante
Controller**. You can go directly from opening to exporting, without combining
files or saving a DCE project. In Devices and Patch, the bar becomes compact and
existing tools remain available, including the dense matrix, Flip, renaming and
Multicast.

Additional files appear in a list separate from the starting file. Resolve
duplicates by keeping existing devices or renaming imported ones, then add the
whole batch. DCE also checks conflicts between queued files. A format, version
or namespace error, a file changed since selection, or cancellation leaves the
current project untouched. One undo removes the complete applied batch. Global
settings from the starting file remain authoritative; combining files imports
devices and their compatible structures without controlling the Dante network.

**Save preparation… (.dceproj)** is separate and optional. The DCE project retains
applied additions, their provenance and source protections, without automatically
reading external XML files on reopening. The pending list belongs to the session:
a warning precedes closing it or saving/exporting without those additions. Export
creates an XML copy under another name and retains existing validation.

Windows WPF and Mac Avalonia sources are synchronized. Windows delivery goes
through the Workshop with a backup before installation. Mac builds are planned
after the free quota renewal on 1 November; public 2027.2.12 Mac packages remain
available until their replacements qualify.

[Qualification Windows FR/EN](QUALIFICATION-WINDOWS-2027.2.13.md). macOS reste / remains 2027.2.12 : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.13

## v2027.2.13 · 2026-10-28 · all · fr

# Dante Config Editor 2027.2.13 — Windows

## Windows 2027.2.13 — préparation de configurations, 28 octobre 2026

Le nom de la configuration reste affiché au-dessus de quatre actions :
**Ouvrir une configuration**, **Ajouter des configurations** (facultatif),
**Modifier** (facultatif), **Exporter pour Dante Controller**. Vous pouvez passer
directement de l'ouverture à l'export, sans fusionner ni enregistrer un projet DCE.
Dans Machines et Patch, la barre devient compacte et les outils actuels restent
accessibles, notamment la grille dense, Flip, le renommage et Multicast.

Les fichiers à ajouter apparaissent dans une liste distincte du fichier de départ.
Résolvez les doublons en conservant les appareils existants ou en renommant ceux
de l'import, puis ajoutez tout le lot. DCE vérifie aussi les conflits entre les
fichiers de la liste. Une erreur de format, de version ou de namespace, un fichier
modifié depuis sa sélection ou une annulation laisse le projet courant intact.
Une seule annulation retire tout le lot appliqué. Les réglages globaux du fichier
de départ restent la référence ; la fusion porte sur les appareils et leurs
structures compatibles, sans commander le réseau Dante.

**Enregistrer la préparation… (.dceproj)** est une action séparée et facultative.
Le projet DCE conserve les ajouts appliqués, leur provenance et les protections
des sources ; il ne relit pas automatiquement les XML externes à la réouverture.
La liste encore en attente appartient à la session : un avertissement précède
sa fermeture ou une sauvegarde/export qui l'exclut. L'export produit une copie
XML sous un autre nom et conserve les validations existantes.

Sources Windows WPF et Mac Avalonia synchronisées. La livraison Windows passe par
l'Atelier avec sauvegarde avant installation. La construction Mac est prévue
après renouvellement gratuit du 1er novembre ; les Mac publics 2027.2.12 restent
disponibles jusqu'à qualification de leurs remplaçants.

[Qualification Windows FR/EN](QUALIFICATION-WINDOWS-2027.2.13.md). macOS reste / remains 2027.2.12 : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.13

## v2027.2.13 · 2026-10-28 · all · original

# Dante Config Editor 2027.2.13 — Windows

## Windows 2027.2.13 — préparation de configurations, 28 octobre 2026

Le nom de la configuration reste affiché au-dessus de quatre actions :
**Ouvrir une configuration**, **Ajouter des configurations** (facultatif),
**Modifier** (facultatif), **Exporter pour Dante Controller**. Vous pouvez passer
directement de l'ouverture à l'export, sans fusionner ni enregistrer un projet DCE.
Dans Machines et Patch, la barre devient compacte et les outils actuels restent
accessibles, notamment la grille dense, Flip, le renommage et Multicast.

Les fichiers à ajouter apparaissent dans une liste distincte du fichier de départ.
Résolvez les doublons en conservant les appareils existants ou en renommant ceux
de l'import, puis ajoutez tout le lot. DCE vérifie aussi les conflits entre les
fichiers de la liste. Une erreur de format, de version ou de namespace, un fichier
modifié depuis sa sélection ou une annulation laisse le projet courant intact.
Une seule annulation retire tout le lot appliqué. Les réglages globaux du fichier
de départ restent la référence ; la fusion porte sur les appareils et leurs
structures compatibles, sans commander le réseau Dante.

**Enregistrer la préparation… (.dceproj)** est une action séparée et facultative.
Le projet DCE conserve les ajouts appliqués, leur provenance et les protections
des sources ; il ne relit pas automatiquement les XML externes à la réouverture.
La liste encore en attente appartient à la session : un avertissement précède
sa fermeture ou une sauvegarde/export qui l'exclut. L'export produit une copie
XML sous un autre nom et conserve les validations existantes.

Sources Windows WPF et Mac Avalonia synchronisées. La livraison Windows passe par
l'Atelier avec sauvegarde avant installation. Les paquets Mac 2027.2.13 et leurs
quatre notices sont maintenant disponibles ; les anciens paquets sont conservés.

[Qualification Windows FR/EN](QUALIFICATION-WINDOWS-2027.2.13.md). macOS 2027.2.13 — anciens paquets / previous packages 2027.2.12 : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12.


# Dante Config Editor 2027.2.13 — Windows

## Windows 2027.2.13 — configuration preparation, 28 October 2026

The configuration name stays above four actions: **Open a configuration**,
**Add configurations** (optional), **Edit** (optional), and **Export for Dante
Controller**. You can go directly from opening to exporting, without combining
files or saving a DCE project. In Devices and Patch, the bar becomes compact and
existing tools remain available, including the dense matrix, Flip, renaming and
Multicast.

Additional files appear in a list separate from the starting file. Resolve
duplicates by keeping existing devices or renaming imported ones, then add the
whole batch. DCE also checks conflicts between queued files. A format, version
or namespace error, a file changed since selection, or cancellation leaves the
current project untouched. One undo removes the complete applied batch. Global
settings from the starting file remain authoritative; combining files imports
devices and their compatible structures without controlling the Dante network.

**Save preparation… (.dceproj)** is separate and optional. The DCE project retains
applied additions, their provenance and source protections, without automatically
reading external XML files on reopening. The pending list belongs to the session:
a warning precedes closing it or saving/exporting without those additions. Export
creates an XML copy under another name and retains existing validation.

Windows WPF and Mac Avalonia sources are synchronized. Windows delivery goes
through the Workshop with a backup before installation. Mac 2027.2.13 packages
and four manuals are now available; previous packages are preserved.

[Qualification Windows FR/EN](QUALIFICATION-WINDOWS-2027.2.13.md). macOS 2027.2.13 — anciens paquets / previous packages 2027.2.12 : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12.


[Qualification Windows FR/EN](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.13/QUALIFICATION-WINDOWS-2027.2.13.md). Windows x64 non signé / unsigned. Installation existante et données contrôlées ; aucune qualification matérielle physique. macOS 2027.2.13 — anciens paquets / previous packages 2027.2.12: https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12. Les anciens paquets et tags sont conservés / previous packages and tags preserved.


## Qualification macOS 2027.2.13

Les paquets Apple Silicon et Intel ainsi que les quatre PDF macOS correspondent à cette version. Les 1 021 tests automatisés ont réussi (915 moteur, 81 interface Mac, 25 outillage). Sur Apple Silicon, les essais depuis le DMG monté en lecture seule couvrent le démarrage, les scènes XML/StageFlow et la fermeture normale ; ils sont non visuels. Le moteur livré a également passé le Trousseau natif en trois processus, la reprise hors ligne et le nettoyage des clés de test. Les échanges d’activation sont simulés : aucune activation commerciale réelle n’est revendiquée.

Intel est compilé et contrôlé statiquement, sans essai sur Mac Intel physique ni exécution du Trousseau Intel. **macOS 15 minimum déclaré** dans les métadonnées, sans matrice d’exécution des versions de macOS. Signature ad hoc, sans Developer ID ni notarisation. Aucune recette visuelle complète, installation personnelle ou validation Dante/audio/réseau matériels. Travaillez sur des copies et contrôlez l’export dans Dante Controller. Les anciens paquets 2027.2.12 restent conservés dans leur release.

[Notice Mac FR](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.13/Notice_DanteConfigEditor_macOS_FR.pdf) · [Démarrage rapide Mac FR](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.13/QuickStart_DanteConfigEditor_macOS_FR.pdf).

## macOS 2027.2.13 qualification

The Apple Silicon and Intel packages and four macOS PDFs correspond to this version. All 1,021 automated tests passed (915 Core, 81 Mac interface, 25 tooling). On Apple Silicon, checks from the read-only mounted DMG cover startup, XML/StageFlow scenes and graceful exit; these checks are nonvisual. The shipped Core also passed native Keychain checks across three processes, offline restart and scoped test-key cleanup. Activation exchanges are synthetic: no real commercial activation is claimed.

Intel is cross-built and statically checked, without physical Intel Mac execution or Intel Keychain runtime checks. **macOS 15 is the declared minimum** in package metadata, without a macOS version execution matrix. Ad-hoc signing, without Developer ID or notarization. No full visual acceptance, personal installation or real Dante/audio/network hardware validation. Work on copies and review the export in Dante Controller. Previous 2027.2.12 packages remain preserved in their release.

[Mac manual EN](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.13/Notice_DanteConfigEditor_macOS_EN.pdf) · [Mac quick start EN](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.13/QuickStart_DanteConfigEditor_macOS_EN.pdf).

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.13

## v2027.2.12 · 2026-10-26 · all · en

# Dante Config Editor 2027.2.12 — Windows and macOS

The main matrix uses square18px cells and vertical TX labels, with separate Dante numbers. Fine14 shows more channels, Airy24 enlarges targets and Comfort retains horizontal labels. Zoom, scrolling, row/column highlighting and full-name detail follow this geometry. Framed +/− group controls support keyboard navigation.

TX/RX filters, Flip, Find, direct/bulk rename, Multicast, Easy Patch and RX→TX List remain available. Patch gestures retain preview, Escape, RX-replacement confirmation and undo. OFFLINE describes the preset, without measuring a live Dante network. Light/dark themes and XML/StageFlow workflows are retained. V1 remains default; V2 is an explicit local copy, without qualified network/LIVE/AutoCAD exchange.

Windows was locally built, installed and checked after verified private backups, preserving compared personal files. The actual matrix was observed using a private copy. The first bounded observation timed out and remains ATTENTION. After interruption, actual exit code zero was measured against the exact process, but its UI close action and final in-memory state were not observed. A recorded recovery snapshot with two changed assignments and the intact original copy are separately preserved. This is not full UI-close acceptance or attribution of the gestures. See Windows qualification.

Mac:1000 fresh passing tests on this product. Nonvisual Apple Silicon startup/XML/StageFlow scenes and shipped-Core Keychain checks passed. Intel was cross-built and structurally inspected, not run natively on Intel hardware. Declared minimum macOS15; ad-hoc signing without Developer ID/notarization. No real commercial activation or physical Dante/audio/network acceptance. Previous releases, tags and assets are preserved; eight product PDFs match their respective packages. Licensing, free use, trial and existing rights remain unchanged.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12

## v2027.2.12 · 2026-10-26 · all · fr

# Dante Config Editor 2027.2.12 — Windows et macOS

La matrice principale utilise des cellules carrées de 18 pixels et des labels TX verticaux, avec les numéros Dante séparés. Fin14 affiche davantage de canaux, Aéré24 agrandit les cibles et Confort conserve les labels horizontaux. Zoom, défilement, surbrillance de ligne/colonne et détail des noms complets suivent la géométrie. Les boutons +/− des groupes sont encadrés et accessibles au clavier.

Filtres TX/RX, Flip, Retrouver, renommage direct et en série, Multicast, Easy Patch et Liste RX→TX restent disponibles. Les gestes de patch gardent leur aperçu, Échap, confirmation de remplacement RX et annulation. HORS LIGNE décrit le preset ; l'application ne mesure pas le réseau Dante réel. Les thèmes clair/sombre et les parcours XML/StageFlow sont conservés. Projets V1 par défaut ; V2 reste limité à la copie locale explicite, sans échanges réseau/LIVE/AutoCAD qualifiés.

Windows a été construit localement, installé et contrôlé après sauvegardes privées vérifiées, avec conservation des fichiers personnels comparés. La vraie grille a été observée sur une copie privée. La première observation bornée a expiré et reste ATTENTION ; après interruption, le code de sortie réel zéro a été mesuré sur le processus exact, mais le geste de fermeture et l'état final en mémoire n'ont pas été observés. Un snapshot de récupération contenant deux affectations différentes et la copie d'origine intacte sont préservés séparément. Ce n'est pas une qualification complète de fermeture UI ni une attribution de ces gestes. Voir la qualification Windows.

Mac : 1000 tests réussis sur le nouveau produit. Les scènes démarrage/XML/StageFlow du paquet Apple Silicon et les contrôles Trousseau du moteur livré ont réussi dans une recette non visuelle. Intel est compilé et inspecté structurellement, sans exécution native Intel. macOS15 minimum déclaré, signature ad hoc sans Developer ID ni notarisation. Pas d'activation commerciale réelle, ni recette physique Dante/audio/réseau. Les anciennes releases, tags et fichiers sont conservés ; les huit PDF produit correspondent aux paquets respectifs. Licence, utilisation gratuite, essai et droits existants inchangés.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12

## v2027.2.12 · 2026-10-26 · all · original

# Dante Config Editor 2027.2.12 — Windows et macOS

La matrice principale utilise des cellules carrées de 18 pixels et des labels TX verticaux, avec les numéros Dante séparés. Fin14 affiche davantage de canaux, Aéré24 agrandit les cibles et Confort conserve les labels horizontaux. Zoom, défilement, surbrillance de ligne/colonne et détail des noms complets suivent la géométrie. Les boutons +/− des groupes sont encadrés et accessibles au clavier.

Filtres TX/RX, Flip, Retrouver, renommage direct et en série, Multicast, Easy Patch et Liste RX→TX restent disponibles. Les gestes de patch gardent leur aperçu, Échap, confirmation de remplacement RX et annulation. HORS LIGNE décrit le preset ; l'application ne mesure pas le réseau Dante réel. Les thèmes clair/sombre et les parcours XML/StageFlow sont conservés. Projets V1 par défaut ; V2 reste limité à la copie locale explicite, sans échanges réseau/LIVE/AutoCAD qualifiés.

Windows a été construit localement, installé et contrôlé après sauvegardes privées vérifiées, avec conservation des fichiers personnels comparés. La vraie grille a été observée sur une copie privée. La première observation bornée a expiré et reste ATTENTION ; après interruption, le code de sortie réel zéro a été mesuré sur le processus exact, mais le geste de fermeture et l'état final en mémoire n'ont pas été observés. Un snapshot de récupération contenant deux affectations différentes et la copie d'origine intacte sont préservés séparément. Ce n'est pas une qualification complète de fermeture UI ni une attribution de ces gestes. Voir la qualification Windows.

Mac : 1000 tests réussis sur le nouveau produit. Les scènes démarrage/XML/StageFlow du paquet Apple Silicon et les contrôles Trousseau du moteur livré ont réussi dans une recette non visuelle. Intel est compilé et inspecté structurellement, sans exécution native Intel. macOS15 minimum déclaré, signature ad hoc sans Developer ID ni notarisation. Pas d'activation commerciale réelle, ni recette physique Dante/audio/réseau. Les anciennes releases, tags et fichiers sont conservés ; les huit PDF produit correspondent aux paquets respectifs. Licence, utilisation gratuite, essai et droits existants inchangés.


# Dante Config Editor 2027.2.12 — Windows and macOS

The main matrix uses square18px cells and vertical TX labels, with separate Dante numbers. Fine14 shows more channels, Airy24 enlarges targets and Comfort retains horizontal labels. Zoom, scrolling, row/column highlighting and full-name detail follow this geometry. Framed +/− group controls support keyboard navigation.

TX/RX filters, Flip, Find, direct/bulk rename, Multicast, Easy Patch and RX→TX List remain available. Patch gestures retain preview, Escape, RX-replacement confirmation and undo. OFFLINE describes the preset, without measuring a live Dante network. Light/dark themes and XML/StageFlow workflows are retained. V1 remains default; V2 is an explicit local copy, without qualified network/LIVE/AutoCAD exchange.

Windows was locally built, installed and checked after verified private backups, preserving compared personal files. The actual matrix was observed using a private copy. The first bounded observation timed out and remains ATTENTION. After interruption, actual exit code zero was measured against the exact process, but its UI close action and final in-memory state were not observed. A recorded recovery snapshot with two changed assignments and the intact original copy are separately preserved. This is not full UI-close acceptance or attribution of the gestures. See Windows qualification.

Mac:1000 fresh passing tests on this product. Nonvisual Apple Silicon startup/XML/StageFlow scenes and shipped-Core Keychain checks passed. Intel was cross-built and structurally inspected, not run natively on Intel hardware. Declared minimum macOS15; ad-hoc signing without Developer ID/notarization. No real commercial activation or physical Dante/audio/network acceptance. Previous releases, tags and assets are preserved; eight product PDFs match their respective packages. Licensing, free use, trial and existing rights remain unchanged.


[Qualification Windows FR/EN](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.12/QUALIFICATION-WINDOWS-2027.2.12.md) · [Qualification macOS](https://github.com/Mamat79/Dante-Config-Editor/blob/v2027.2.12/QUALIFICATION-MACOS-2027.2.12.md). Windows unsigned; native grid observed and actual exit0 measured after interruption, UI close action/final QA memory unobserved. ARM Mac nonvisual; Intel static; ad-hoc/no Developer ID/notarization. No physical Dante/audio/network or real commercial activation qualification. Previous releases, tags and assets preserved.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.12

## v2027.2.10 · 2026-10-25 · macos · original

# Dante Config Editor — macOS 2027.2.10

Cette mise à jour concerne macOS Apple Silicon et Intel, à partir de macOS 15. Windows reste en **2027.2.9** et sa publication demeure « Latest » : [installateur et guides Windows](https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.9).

Les codes permanents V2 achetés ou offerts peuvent être activés sur Mac. La clé propre à cette installation est protégée dans le Trousseau macOS. Internet sert à activer ou désactiver ce Mac ; après activation, la vérification de la licence reste locale et hors ligne, y compris après redémarrage. Déverrouillez le Trousseau et autorisez DCE si macOS le demande. Si une réponse est perdue, réessayez avec le même code. Un remplacement échoué conserve la licence active. Ne copiez pas de clé Windows ni de fichiers de licence.

Les codes V1 compatibles restent acceptés. L’utilisation gratuite reste complète sans code ni activation en ligne : 30 jours sans rappel, puis un rappel avec cinq secondes d’attente au démarrage. La licence reste facultative, à 29 € TTC en France en paiement unique ; prix et droits inchangés. Les projets et réglages doivent être conservés lors de la mise à jour.

Les deux DMG sont accompagnés de leurs fichiers `.sha256` et des quatre notices et démarrages rapides Mac FR/EN, identiques aux guides embarqués.

| Paquet | SHA-256 |
|---|---|
| Apple Silicon | `9a375e5bb3971c1c0b1a32a334442d06e26b3cba3b5f21473818a9c5f40f4ed5` |
| Intel | `acb2859b5c542230cab2c4a381f4f13c6fca1270fed223d51d38c7e6d94bcd48` |

La qualification Mac réutilise 953 tests produit réussis (896 Core et 57 interface Mac, code produit inchangé) et ajoute 25 contrôles Python réussis. Sur Apple Silicon, le moteur réellement livré a passé l’écriture et la relecture du Trousseau dans des processus distincts, la reconnaissance de la licence après redémarrage hors connexion, la preuve de désactivation et le nettoyage des clés QA. Les échanges HTTP d’activation, refus et échecs de sauvegarde sont **simulés**, sans activation commerciale réelle. Trois scènes de démarrage/XML/StageFlow avec fermeture normale sont **non visuelles**. Intel est compilé et contrôlé structurellement ; le Trousseau Intel et un Mac Intel physique n’ont pas été testés. Signature ad hoc vérifiée sur le runner, sans Developer ID ni notarisation ; aucune recette visuelle complète, installation personnelle ou validation Dante/audio/réseau réels. macOS 15 minimum déclaré, sans matrice d’exécution des anciens systèmes. Le premier run arrêté par le vérificateur QA reste enregistré en échec ; le DMG Apple Silicon a été réemployé octet pour octet et qualifié dans la reprise.



---

## English

This update is for macOS Apple Silicon and Intel, requiring macOS 15 or later. Windows remains at **2027.2.9**, and its release remains GitHub “Latest”: [Windows installer and guides](https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.9).

Purchased or gifted V2 permanent codes can be activated on Mac. The key for this installation is protected in macOS Keychain. Internet access is needed to activate or deactivate this Mac; after activation, license verification remains local and offline, including after restart. Unlock Keychain and allow DCE if macOS prompts you. If a response is lost, retry with the same code. A failed replacement keeps the active license. Do not copy Windows keys or license files.

Compatible V1 codes remain accepted. Full free use remains available without a code or online activation: 30 days without a reminder, then a five-second startup reminder. The license remains optional, at a one-time price of EUR 29 including French VAT; price and rights are unchanged. Projects and settings must be preserved during the update.

The two DMGs have individual `.sha256` files and four French and English Mac manuals and quick starts identical to the embedded guides.

Mac qualification reuses 953 passing product tests (896 Core and 57 Mac interface tests, unchanged product code), with 25 additional passing Python checks. On Apple Silicon, the actually shipped Core passed Keychain write/read across separate processes, offline license recognition after restart, deactivation proof and scoped QA key cleanup. Activation HTTP, refusals and save failures are **synthetic**, without a real commercial activation. Three startup/XML/StageFlow scenes with graceful exit are **nonvisual**. Intel is cross-built and structurally inspected; Intel Keychain and physical Intel hardware were not tested. Ad-hoc signing was verified on the runner, without Developer ID or notarization; no full visual acceptance, personal installation or real Dante/audio/network validation. macOS 15 is the declared minimum, without an oldest-OS execution matrix. The first run stopped by the QA verifier remains failed; its Apple Silicon DMG was reused byte for byte and qualified during recovery.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.10

## v2027.2.9 · 2026-10-24 · all · original

## Windows 2027.2.9

Utilisation gratuite sans code ou licence permanente facultative achetée/offerte : les deux parcours sont maintenant clairement séparés. La commande **Continuer avec DCE** reste accessible. Les 30 jours sans rappel, puis le rappel avec attente de 5 secondes, restent inchangés ; toutes les fonctions restent disponibles.

Free use without a code and optional purchased/gifted permanent licensing are now clearly separated. **Continue with DCE** remains accessible. The existing 30-day period and subsequent 5-second startup reminder are unchanged; all features remain available.

- Installateur Windows x64 autonome, runtime .NET 10 fourni / self-contained Windows x64 installer with .NET 10.
- 938 tests source réussis réutilisés, 20 nouveaux contrôles de version ; 283 fichiers installés vérifiés, démarrage réel et fermeture normale réussis. Sauvegardes et conservation des données mesurées vérifiées.
- Quatre notices Windows FR/EN mises à jour dans les fichiers joints. Vérifiez `DanteConfigEditor2027_Installer.exe.sha256` ou `SHA256SUMS-2027.2.9-Windows.txt`.
- Source privée / private source: `153d63e681190339b9cb579f783c723a4a094d0b`.

[Contrôles et limites / checks and limits](https://github.com/Mamat79/Dante-Config-Editor/blob/main/QUALIFICATION-2027.2.9.md) · [Notes FR](https://github.com/Mamat79/Dante-Config-Editor/blob/main/RELEASE_NOTES_2027.2.9.md) · [English notes](https://github.com/Mamat79/Dante-Config-Editor/blob/main/RELEASE_NOTES_2027.2.9_EN.md)

## macOS 2027.2.9 — ajouté le 25 octobre 2026 / added 25 October 2026

L'utilisation gratuite sans code et la commande Continuer sont explicites. Le rappel existant de cinq secondes après 30 jours, les prix et les droits ne changent pas. L'activation permanente V2 liée à Windows DPAPI reste non prise en charge sur Mac ; la compatibilité locale V1 et l'utilisation gratuite sont conservées. Aucun achat ou code V2 n'est nécessaire pour continuer gratuitement.

Free use without a code and Continue are explicit. The existing five-second reminder after 30 days, prices and rights are unchanged. Windows-DPAPI-bound V2 permanent activation remains unsupported on Mac; local V1 compatibility and free use are preserved. A purchase or V2 code is not required to continue for free.

### Mac downloads and guides

- [DanteConfigEditor2027_macOS_AppleSilicon.dmg](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/DanteConfigEditor2027_macOS_AppleSilicon.dmg), 82036846 bytes, SHA-256 `8912647ad65b970378c2170669d9fc7536000afe9972c90340384df7ae36dbb2`.
- [DanteConfigEditor2027_macOS_AppleSilicon.dmg.sha256](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/DanteConfigEditor2027_macOS_AppleSilicon.dmg.sha256), 111 bytes, SHA-256 `5ddfe188b67b0d582de44fa40e96984226f1773a8dcd12b04fb404a765c9fd04`.
- [DanteConfigEditor2027_macOS_Intel.dmg](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/DanteConfigEditor2027_macOS_Intel.dmg), 83730054 bytes, SHA-256 `f8f6473e35fa9c492bf94d5b67e8aa5e5fd5b7c7f0d7eae3f33a97272884234f`.
- [DanteConfigEditor2027_macOS_Intel.dmg.sha256](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/DanteConfigEditor2027_macOS_Intel.dmg.sha256), 104 bytes, SHA-256 `0bd860d685171c05ea6672d340a44665fbd907607da77c4b5341923fafdd6b39`.
- [Notice_DanteConfigEditor_macOS_FR.pdf](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/Notice_DanteConfigEditor_macOS_FR.pdf), 1041728 bytes, SHA-256 `9350b9ce6b29fa35f41ffe4656f26d6527588a81f6b54eb29fb534249ee6dedb`.
- [QuickStart_DanteConfigEditor_macOS_FR.pdf](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/QuickStart_DanteConfigEditor_macOS_FR.pdf), 133004 bytes, SHA-256 `3e04424f85534252ef53a7b2d6ce96b2520de3c451a72229bd34c4572a9d83d3`.
- [Notice_DanteConfigEditor_macOS_EN.pdf](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/Notice_DanteConfigEditor_macOS_EN.pdf), 996431 bytes, SHA-256 `182990b9648bd827bef4e9275d0588eaf6a15b6e480e73f2123fd4a519be8d1d`.
- [QuickStart_DanteConfigEditor_macOS_EN.pdf](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.9/QuickStart_DanteConfigEditor_macOS_EN.pdf), 132090 bytes, SHA-256 `088ad99b161748e52be8084d41021c962ce7e74c61096bcb2ce598eaaf5333b7`.

### Mac verification scope

950 tests actuels réussis : 882 Core, 55 Mac headless et 13 contrôles Python de version, sans échec ni test ignoré. Ces comptes sont distincts des 938 tests Windows historiques ci-dessus. Trois scènes Apple Silicon de démarrage/XML/StageFlow ont été exécutées avec stabilité du processus et fermeture normale, en mode non visuel ; cinq fichiers d'entrée synthétiques sont restés inchangés. Les deux versions de bundle sont 2027.2.9, avec macOS 15 minimum et runtime .NET 10.0.12 autonome. Les quatre PDF Mac publics sont identiques aux guides embarqués dans les deux DMG et aux sources qualifiées ; les sept fichiers Windows existants et l'ancienne release Mac 2027.2.8 sont préservés.

The current Mac lot passed 950 checks, distinct from the reused historical Windows count above. Apple Silicon process startup/XML/StageFlow and graceful exit are NONVISUAL checks. Intel is cross-built and structurally verified only. Requires macOS 15 or later; includes self-contained .NET 10.0.12. Ad-hoc signing was verified on the runner, without Developer ID or notarization. No complete visual acceptance, physical Intel or macOS 15 runtime matrix, personal install/upgrade, commercial activation, Dante/audio hardware, phone or LAN acceptance is claimed. The historical detach helper suppresses errors, so independent clean unmount is not established by this receipt.

Mac source `938075d78c99e7e46c895727aa160338041437d2`, branch `fix/mac-trial-license-clarity-20261025`, workflow `dante-config-editor-macos-release`, Codemagic job `6adde121b4d94704f2e084a4`. This was a private branch validation, without CI publication. Private sources and QA files are not published; Windows provenance and public tag target remain unchanged.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.9

## v2027.2.8 · 2026-10-17 · all · original

# Dante Config Editor 2027.2.8 — Windows et macOS

# Dante Config Editor 2027.2.8 — contrôles et limites / checks and limits

La livraison Windows x64 inclut le runtime .NET 10. Source privée : `9b83b712fa4f89b989b0a9341c84ea4d58d461ba`. Le dépôt public contient uniquement la distribution et sa documentation.

L’installeur Windows standard a été exécuté pour une mise à jour en place depuis 2027.2.6, après sauvegardes vérifiées. Les 283 fichiers attendus correspondent au paquet qualifié. Les profils, activations, banque personnelle et états contrôlés ont été conservés. Le registre et le binaire indiquent 2027.2.8 ; le démarrage depuis l’installation personnelle et la fermeture normale ont été observés. Ce contrôle local ne constitue pas une matrice de toutes les versions de Windows ou de toutes les mises à niveau.

Une recette native a ouvert un XML synthétique avec namespace, Unicode, deux interfaces et une extension inconnue, l’a sauvegardé dans un nouveau fichier puis l’a rouvert. Structure, attributs, ordre des éléments et valeurs sont conservés. Le XML d’origine est inchangé. La validation DCE affichait zéro erreur bloquante et un avertissement attendu pour l’identifiant matériel volontairement fictif du test, conservé sans inventer d’identité réelle.

La fenêtre française sombre a été observée. La matrice complète langues, thèmes, focus et DPI 125/150/200 % n’a pas été exécutée. Aucun import dans Dante Controller, réseau Dante actif, matériel audio ni transfert de licence n’est qualifié par cette livraison. L’installeur Windows n’est pas signé Authenticode. La date locale de dernière utilisation de la licence évolue normalement au démarrage ; les autres champs et fichiers d’activation contrôlés sont conservés.

Les quatre PDF Windows sont les fichiers exacts du paquet source et de l’installation vérifiée. Ils n’ont pas été régénérés par l’atelier de publication ; aucune nouvelle recette visuelle de mise en page n’est revendiquée. Le fichier `SHA256SUMS-2027.2.8-Windows.txt` couvre les fichiers Windows joints. Les anciens téléchargements restent disponibles pour retour arrière.

Les quatre fichiers macOS 2027.2.8 déjà publiés restent strictement inchangés. Minimum macOS 15 déclaré ; applications autonomes .NET 10.0.12. Le reçu Mac rapporte 934 tests réussis, sans échec ni test ignoré, et trois scènes de démarrage/fermeture ARM depuis DMG monté, sans observation visuelle. Intel a été cross-compilé et inspecté, sans exécution native Intel. Signature ad hoc, sans Developer ID ni notarisation. Le détachement propre du DMG n’est pas établi indépendamment ; aucun import Dante Controller, profil personnel, matériel ou mise à niveau Mac n’est validé.

V1 reste le parcours de projet par défaut. V2 exige une nouvelle copie locale explicite, sans migration sur place. Les échanges V2 réseau/LIVE/AutoCAD ne sont pas qualifiés dans cette tranche. Conserver une copie V1 pour les applications anciennes.

---

The Windows x64 delivery includes .NET 10. Private source commit: `9b83b712fa4f89b989b0a9341c84ea4d58d461ba`. Only distribution files and documentation are published.

The standard Windows installer was used for an in-place upgrade from 2027.2.6 after verified backups. All 283 expected payload files match. Checked profiles, activation files, the personal device bank and stored states were preserved. The executable and uninstall registry report 2027.2.8; startup from the actual personal installation and normal shutdown were observed. This local check is not a complete Windows-version or upgrade matrix.

The native XML check loaded a synthetic fixture with namespaces, Unicode, two interfaces and an unknown extension, saved it to a new file and reopened it. Structure, attributes, element order and values were preserved, with the original unchanged. DCE reported no blocking errors and one expected warning for the deliberately fake test device identifier; the value was retained without inventing a real hardware identity.

French dark-mode windows were observed. The full language, theme, keyboard-focus and 125/150/200% DPI matrix was not executed. Actual Dante Controller import, live Dante networks, physical audio hardware and licence transfer remain unqualified. The Windows installer is unsigned. The local licence's last-seen time changes normally on startup; other checked licence fields and activation files were preserved.

The four Windows PDFs are byte-for-byte copies of the pinned source payload and verified installation. Publication did not regenerate them or perform new visual layout QA. `SHA256SUMS-2027.2.8-Windows.txt` covers the attached Windows files. Older downloads remain available for rollback.

The four previously published macOS files are unchanged. They declare macOS 15 minimum and bundle .NET 10.0.12. The Mac receipt reports 934 passing tests and three ARM startup/shutdown scenes from a mounted DMG without visual acceptance. Intel was cross-built and inspected, without native Intel execution. Ad-hoc signing is not Developer ID signing or Apple notarization. Clean DMG detachment is not independently proven; actual Dante Controller import, personal profiles, hardware and Mac upgrades remain unqualified.

V1 remains the default project workflow. V2 requires an explicit new local copy, without in-place migration. V2 network/LIVE/AutoCAD exchange is not qualified in this tranche; retain a V1 copy for older applications.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.8

## v2027.2.7 · 2026-10-11 · all · original

Dante Config Editor **2027.2.7** — Windows x64, macOS Apple Silicon and macOS Intel.

Source exacte / exact source: `257fd4594b149be4b25307d74e9539e8d0becc3a`. Windows ships the .NET 10 runtime; macOS minimum 15.0, bundled .NET 10.0.12. Installer version aligns with the executable. Unreadable XML/JSON recovery remains preserved with diagnostics. Existing license codes and local data are retained.

**Windows checks:** 770 Windows tests and 51 Mac-core tests run on Windows, 5 licensing-worker tests, 20 installer version-contract checks, 283 packaged files verified; standard Setup contents extracted and compared. Actual commercial QA launch was performed, but native capture/keyboard remain inconclusive. Standard Windows install/upgrade, DPI 125/150/200, shortcuts, hardware and rollback were not exercised. 124 internal renders and six dispatcher reminder scenarios are separate technical evidence.

**Limites examinées par le propriétaire / owner-reviewed limitations:**

Windows : dans une fenêtre compacte, le libellé « Sombre » peut être tronqué. Avec navigation et inspecteur ouverts, certaines commandes de Patch/Easy Patch peuvent dépasser la zone visible. Repliez un panneau latéral ou agrandissez la fenêtre ; la matrice peut aussi être ouverte dans sa fenêtre détachée.

Windows: in a compact window, the selected Dark theme label may be clipped in French. With navigation and inspector panels open, some Patch/Easy Patch controls can extend beyond the visible area. Collapse a side panel or enlarge the window; the matrix can also be opened in its detached window.

These compact-window observations were accepted with reservations, without changing source 257fd or rebuilding. Horizontal scrolling alone does not restore offscreen toolbar controls. See QUALIFICATION-2027.2.7.md.

**macOS checks:** 821 tests passed; both architectures and package versions checked. Apple Silicon launched nonvisually from the mounted DMG for startup/XML/StageFlow scenes; no interactive desktop or keyboard qualification. Intel is cross-built and structurally checked, not executed on physical Intel hardware. Ad-hoc signing only; no Apple Developer ID or notarization. See QUALIFICATION-MACOS-2027.2.7.md.

Windows Setup and application are unsigned. No real Dante Controller import or Dante hardware was tested. Do not infer compatibility from compilation alone. Preserve project/personal-bank backups before updating; this delivery does not change payments or activation requirements. No additional personal PC installation was performed as part of publication. Manuals and exact checksums are attached.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.7

## v2027.2.6 · 2026-10-04 · all · original

## Français

Dante Config Editor 2027.2.6 réduit le décompte du rappel de licence après les
30 jours d'essai complet : 5 secondes au démarrage au lieu de 60. Ce rappel
ne revient pas pendant la session. Après le décompte, toutes les fonctions
restent accessibles. Une licence valide supprime le rappel et toute attente.

Les activations existantes, la vérification hors ligne, les projets XML/DCE/
StageFlow, les banques personnelles et les réglages sont conservés.
Les notices et démarrages rapides Windows/macOS, en français et en anglais,
décrivent le comportement actuel. Les anciennes notes de versions restent
historiques. StageFlow reste gratuit et facultatif.

Version commune Windows, macOS Apple Silicon et macOS Intel. Les trois paquets
et les huit guides FR/EN sont vérifiés par leurs tailles et sommes SHA-256.
Le manifeste `SHA256SUMS-2027.2.6-all-platforms.txt` couvre les trois paquets et
les guides ; `SHA256SUMS.txt` couvre Windows et les guides.

Qualification : 755 tests communs, 50 tests de l'interface Mac et 5 tests de
licence réussis. Le décompte Windows natif a été vérifié en FR/EN. Le démarrage
Apple Silicon et l'architecture Intel ont été contrôlés. Aucun essai natif
Intel, essai manuel de l'interface, décompte natif Mac ou essai sur un réseau
Dante réel n'est revendiqué. Les paquets Mac ne sont ni signés Developer ID
ni notarisés. Les anciennes versions restent disponibles.

## English

Dante Config Editor 2027.2.6 reduces the license reminder countdown after the
full 30-day trial: 5 seconds at startup instead of 60. The reminder does not
repeat during the session. Every feature remains available after the countdown.
A valid license removes the reminder and all waiting.

Existing activations, offline verification, XML/DCE/StageFlow projects,
personal machine banks and settings are preserved. The French and English
Windows/macOS manuals and quick starts describe the current behavior.
Older release notes remain historical. StageFlow remains free and optional.

Shared release for Windows, macOS Apple Silicon and macOS Intel. All three
packages and eight FR/EN guides have verified sizes and SHA-256 checksums.
`SHA256SUMS-2027.2.6-all-platforms.txt` covers all packages and guides;
`SHA256SUMS.txt` covers Windows and guides.

Qualification: 755 shared tests, 50 Mac interface tests and 5 licensing tests
passed. The native Windows countdown was checked in French and English.
Apple Silicon startup and Intel architecture were checked. No native Intel
runtime, manual GUI, native Mac countdown or live Dante network acceptance
is claimed. Mac packages are not Developer ID signed or notarized.
Previous releases remain available.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.6

## v2027.2.5 · 2026-10-02 · all · original

## Français

### Dante Config Editor 2027.2.5
- Restaure les modifications récupérables à l'ouverture d'un projet StageFlow, y compris avant son premier attachement Dante.
- Permet de récupérer un nouveau projet non enregistré sans disposer d'un XML original.
- Compense un premier attachement Dante interrompu par un échec ou une annulation.
- Distingue les changements du patch StageFlow des conflits touchant le document Dante et préserve les modifications locales.
- Conserve l'historique courant lors des sauvegardes et réouvertures sous Windows et macOS.
- Permet d'enregistrer un brouillon éditable vide au format interne .dceproj ou dans un projet StageFlow. L'export XML Dante exige toujours des appareils ; aucune acceptation d'un XML vide par Dante Controller n'est revendiquée.
- Clarifie les états fichier/LIVE/révision adoptée, les préférences, l'aide et les informations À propos. Les diagnostics sont volontaires et assainis.

Dante Config Editor reste un outil de préparation hors ligne et ne démarre ni audio ni projection. La génération commerciale v2027 et les contrats de licence restent inchangés. Les notices PDF existantes sont conservées. Paquets Windows et macOS (Apple Silicon et Intel) inclus.

## English

### Dante Config Editor 2027.2.5
- Restores recoverable edits when opening a StageFlow project, including before its first Dante attachment.
- Recovers a new unsaved project without requiring an original XML file.
- Compensates a first Dante attachment interrupted by failure or cancellation.
- Distinguishes StageFlow patch changes from conflicts affecting the Dante document and preserves local edits.
- Retains current session history when saving and reopening on Windows and macOS.
- Saves an empty editable draft in the internal .dceproj format or a StageFlow project. Dante XML export still requires devices; no claim is made that Dante Controller accepts empty XML.
- Clarifies file/LIVE/adopted-revision states, preferences, help and About information. Diagnostics are voluntary and sanitized.

Dante Config Editor remains an offline preparation tool and does not start audio or projection. The v2027 commercial generation and licensing contracts remain unchanged. Existing PDF guides are retained. Windows and macOS packages (Apple Silicon and Intel) are included.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.5

## v2027.2.4 · 2026-09-29 · all · en

## UX20261001 update - published October 1, 2026

The version remains 2027.2.4. Windows and Mac menus follow File, Edit, View, Tools, Help; device commands are grouped under Tools > Devices. File > Recent projects opens, locates or removes entries and clears only the history. Moved projects remain visible. Tools > Settings groups language, theme and StageFlow LIVE options. History handles access failures without overwriting existing entries and respects case-sensitive Mac paths.

Private source: Mamat79/Dante-Config-Editor-Source, branch suite-ux-20261001, commit 7724233961c076b149bed357503780a900cac601. Existing v2027.2.4 tags are preserved and do not identify this new commit.
Windows: the corrected installer previously installed and verified by the maintainer is retained without rebuilding. Mac: Codemagic build 6abe30c721294323637341c7 from this commit, manually triggered on a branch with no tag. The receipt records successful shared/Mac interface tests, both DMGs, checksum checks, nonvisual Apple Silicon launch and Intel architecture verification.

These checks do not establish physical or visual Mac acceptance, native Intel execution, or live Dante audio/network operation. Apple Developer ID signing and notarization are not claimed. Approved PDFs remain unchanged. DOWNLOADS.json and SHA256SUMS.txt record the three current packages. Newly published files are downloaded again and checked by SHA-256; asset IDs and backups are retained in the publication handoff.

---

### History: previous content preserved

# Dante Config Editor v2027

## Windows and macOS 2027.2.4

- Open a Dante XML directly or drop one or more XML files into DCE. Choose
  separate opening or addition to the current project. A `.stageflow`
  directory can also be dropped on its own.
- When XML versions differ, DCE offers to open the file separately; it does
  not alter the current project without confirmation.
- Six generic roles for XML 2.1.0 projects, with no production device names,
  labels, identities, network settings, flows or subscriptions.

[Notes de version en français](RELEASE_NOTES.md)

## Windows and macOS 2027.2.3

- Flip swaps the two devices at the selected intersection: TX stays at the top
  and RX on the left. A device with no TX displays a "0 TX" header; that
  intersection cannot be patched.
- Moving the pointer to Flip no longer changes the selected pair. Expanded
  channels stay open, and another Flip reverses the pair again.
- Two-finger trackpad scrolling moves vertically through the matrix. Pinch
  (or Ctrl + wheel) zooms around the pointer without changing assignments.
- XML formats and validation rules are unchanged. Always check the exported
  file in Dante Controller before using it on a network.

## Windows and macOS 2027.2.2

- Combines the version detection fix below with GitHub rate-limit handling.
- On temporary 403/429 rate limits, DCE respects the server deadline, even
  after restarting. Manual checks show an informational retry time; automatic
  startup checks remain silent.

### Version detection fix

- Fix the update prompt offering 2027.2.0 when it is already installed.
  Update checks use the running Windows or Mac application's version.

## Windows and macOS 2027.2.0

- The project-wide matrix starts with devices collapsed and separates device
  headers from channel headers.
- Drag gestures automatically preview a diagonal or column. Amber previews
  remain visible for imprecise diagonals. Release applies; Escape cancels.
  The complete gesture is one undoable transaction.
- Patching retains the matrix and avoids drawing a hidden synoptic. XML guards
  and transaction history remain enabled.
- Double-click channel labels to rename inline; drag the fill handle to extend
  a series. Batch rename, Flip, source/destination lookup, and device settings
  on double-click remain available.
- Multicast lists every project flow. Choose a device, check audio TX channels,
  and create, update, or delete a flow.
- On Windows, Synoptic stays under Tools. A gear beside Workspace customizes navigation.

Multicast editing supports simple Dante audio flows in 3.0.0 presets. Unknown
forms are preserved without editing. Removing every preset flow does not
guarantee network removal: verify in Dante Controller. DCE remains offline.
The same matrix is ported to the native Avalonia Mac interface, including
automatic gestures, previews, inline rename and fill handles, connection lookup,
device settings, and the multicast manager. Apple Silicon and Intel packages
are built from the same sources.

## Windows and macOS 2027.1.1

This release simplifies daily work and automatically adapts DCE to smaller
screens without shrinking text or adding a setting users need to manage.

- DCE selects a wide, compact, or narrow layout from the actual available
  space. The header compacts, Devices and Easy Patch panels reflow, and
  scrolling remains a fallback.
- Words are no longer split inside buttons and labels. Commands remain readable
  in French and English on a 1024×640 display.
- Primary navigation now reflects six clear intents: **Project**, **Overview**,
  **Devices**, **DCE Patch**, **Synoptic**, and **Tools**. Import/export,
  validation, history, banks, reports, and training remain available in
  **Tools**.
- **New DCE project** is now a two-step assistant. The first step defines the
  file, name, and description; the second prepares the first device and its
  configuration.
- Easy Patch separates device selection, **Source / destination**, and the
  **Recommended hybrid** mode. Existing multi-selection and drag-and-drop patch
  rules are unchanged.
- The same principles apply to Windows, Apple Silicon macOS, and Intel macOS.
  XML/DCE/StageFlow formats, banks, and DCEP1, DCEF1, and V2 licenses are
  unchanged.

## Windows and macOS 2027.1.0

This release improves compact-screen use and aligns the license reminder while
keeping the application fully usable.

- Devices, Patch, Easy Patch, and Synoptic reflow with the available width.
  Scrolling is a fallback; text is not shrunk or split inside words.
- Footer commands can wrap to another row. Compact navigation displays complete
  labels, including Validation center.
- Theme choices and disabled buttons remain legible in light and dark themes.
- **New DCE project** immediately opens an empty in-memory configuration,
  without asking for a name, path, XML file, or first device. Devices can then
  be added from the bank and the destination is selected when saving.
- Before replacing modified work, DCE offers Save, Don't save, or Cancel.
  `Ctrl+N`, `Ctrl+S`, and `Ctrl+Shift+S` are aligned across Windows and macOS.
- For Yamaha console and I/O-rack templates, the bank suggests `Y001-`,
  `Y002-`, and subsequent device names. The sequence avoids collisions,
  supports multi-digit identifiers, and remains fully editable. Existing or
  imported equipment is never renamed.
- During the 30-day trial, the reminder can be dismissed immediately. Once the
  trial has expired, DCE waits 60 seconds at startup and then enables every
  feature; valid activation releases the interface immediately.
- The delay does not restart when another main window opens in the same process.
  Existing DCEP1, DCEF1, and V2 licenses remain compatible.
- A Codemagic retry accepts an already published macOS `DMG + SHA-256` pair
  when it is complete and consistent, even if a rebuilt DMG has different
  metadata. An incomplete pair is repaired without overwriting the DMG.

## Windows and macOS 2027.0.7

This corrective release makes StageFlow export reliable and extends sequential
patching without changing XML, project, bank, or license formats.

- **Export Dante XML** now works from a `.stageflow` project: the internal DCE
  package entry is no longer passed to the Windows Save As dialog.
- File dialogs propose a valid physical folder and file name, with a safe retry
  if Windows still rejects the initial path.
- In **Easy Patch**, several Tx channels dropped on the first Rx feed successive
  Rx channels. In the other direction, several Rx channels dropped on the first
  Tx receive that Tx and the following Tx channels in sequence.
- Each Rx keeps exactly one source. The sequence stops cleanly at the end of the
  device and DCE reports channels that could not be assigned.
- A reference to a device or Tx channel missing from a partial preset is now
  information. It remains preserved in XML and no longer requires warning
  acknowledgement.
- Guides and behavior are aligned in French and English on Windows and macOS.

## Windows and macOS 2027.0.6

This corrective release restores network controls that are genuinely described
by some presets and speeds up sequential patching without changing XML
compatibility rules, licenses, personal banks, or project formats.

- **Redundant** and **Daisychain** remain editable when a device contains a
  `redundancy` element, even when it has no `ipv4_address` element.
- The IP tab deliberately remains disabled when the role has no IPv4 section.
  A visible explanation states that DCE preserves the original document and
  never invents a missing technical capability.
- In **Easy Patch**, select one or more Tx channels with Ctrl or Shift, then
  drop them on the first Rx. The first Tx is assigned to that Rx and the
  remaining Tx channels to successive Rx channels, immediately.
- Replacing an already patched Rx keeps the user's warning preference. Several
  Tx channels can never feed the same Rx.
- The behavior and explanations are available in French and English on Windows
  and macOS.

## Windows and macOS 2027.0.5

This release clarifies DCE and StageFlow projects, makes synoptic persistence
reliable, and keeps validation focused on issues that matter before export.

- A standalone DCE project remains a Dante XML file: it can be created from
  scratch, opened, edited, and exported for Dante Controller without StageFlow.
- In a `.stageflow` project, **Save** now preserves synoptic locations, ordering,
  visibility, and manual positions inside the Dante domain. These workspace data
  are never added to exported Dante XML.
- **Import / Export** directly exposes Dante Controller XML import and export,
  in addition to the File menu.
- The validation center no longer reports unused Rx channels or legitimate
  devices with no Tx or no Rx. Blocking structure, identity, and reference checks
  remain active.
- Synoptic storage uses a portable identity to find each device again after a
  StageFlow project is closed and reopened.
- Labels, tests, guides, and version numbers are aligned across Windows, macOS
  Apple Silicon, and macOS Intel.

## Windows 2027.0.4

This Windows correction improves field legibility and access to the training
and synoptic commands. Existing project data, licenses, banks, and formats are
unchanged.

- Shared dropdowns and input fields regain consistent vertical centering,
  including after a theme change.
- The StageFlow connection title remains legible in the light theme.
- Atomic Bomb is reachable from navigation again; its key, cover, ARM, LOCK,
  FIRE sequence is unchanged. The key and open-cover label are no longer
  clipped in the standard layout.
- The synoptic view exposes explicit Detach and Reattach commands, preserves
  its layout, and applies the theme correctly in its separate window.

## Windows 2027.0.2

This update clarifies project preparation, suite connection, and export commands.
DCE remains a standalone application for preparing Dante configurations offline.

### A consistent, accessible header

- The DCE icon and product name remain visible alongside the application menus.
- Commands follow this order: StageFlow connection, Alerts, Theme, Language,
  DCE guide, and DCE help. They move onto a second row when space is limited.
- Theme shows the current Light or Dark choice. Theme and language preferences
  are saved. Commands have accessible names and tooltips.
- Theme and language fields align vertically with the adjacent buttons, without
  inherited inner margins shifting their backgrounds.
- Undo and Redo remain in the header. Atomic Bomb is under **Tools > Training**,
  with its safety sequence unchanged.

### Help and manuals

- **Guide** now opens DCE's full manual in the selected language. **Help**
  opens **Discover DCE**; the shared guide is available only through
  **Help > SiLeMI/O suite guide**, without an additional dedicated button.
- Product manuals in both languages have a compact, single-page contents
  section, preserving links and bookmarks. Captions explain the screens,
  user links lead to the SiLeMI/O website, and group-specific values are explained.
- Procedures distinguish Save, Save as, and Export to Dante Controller, preserving the
  working project while producing the preset intended for the installation.

### StageFlow connection and alerts

- The **StageFlow connection** button keeps its name; a separate line shows
  its state and the joined session when connected.
- The center uses the common **StageFlow LIVE / Dante Config Editor remote**
  side rail, current project, and **Back to project**. It remains non-modal;
  local editing is temporarily protected during connection transitions.
- The mobile section identifies the **StageFlow suite** as its target. Manage
  the QR, its state and permissions in StageFlow on the host: DCE does not invent
  a standalone mobile server, link, or activation button. If no session is found,
  open StageFlow and share the project on this PC or the local network.
- **StageFlow connection** distinguishes local projects from LIVE sessions.
  Standalone mode, connection progress, connection loss, and errors are explicit.
  The full project name remains available.
- The center can open a local `.stageflow` folder without running StageFlow.
  Disconnect an active LIVE session first; opening another project warns about
  unsaved changes.
- Discovery, six-digit pairing codes, and explicit disconnect are retained.
  The IPv4 address and technical details are in an expandable section.
- **Alerts** separates XML validation from unacknowledged StageFlow changes.
  Opening the list neither acknowledges changes nor disables future reception.

### Prepare, validate, export

- The Project page gives direct access to devices, patching, validation, and export.
- Counters share a single row on wider windows. Recent files use the remaining
  height and scroll within their own list; smaller windows retain a page-level
  scrolling fallback so commands are never cut off.
- **File > Export to Dante Controller** and **Import / Export > Export to Dante Controller** open
  the pre-export checks, then save a separate XML copy.
- The copy preserves the open project, pending edits, and undo history. It does
  not overwrite the source. Existing destinations retain the confirmation and
  backup protections of the existing writer.
- Export refuses extensions other than `.xml` and destinations inside the current
  StageFlow folder, including directory junctions and symbolic links.
- **Save** still saves the StageFlow project. Exporting an XML copy does not
  replace saving that project.

The XML mutation engine is not rewritten. Banks, patching, series renaming, XML
merging, synoptic views, and existing licenses are preserved. StageFlow is free
and optional. A LIVE suite connection does not control Dante hardware or the
physical Dante network.

## Documentation and upgrading

The Windows installer includes French/English manuals and quick starts, plus
the exact shared SiLeMI/O 2027.3 guide pair approved by its owner.

From a 2026.10 installation that does not offer v2027, download the Windows
installer manually from the public repository. Recent versions select updates
for their platform and check the download size and SHA-256.

Upgrading preserves profiles, personal banks, projects, and licenses. One desktop
shortcut is used: **Dante Config Editor v2027**. A historical installation folder
name such as `Dante Config Editor 2026.3` may remain; About and the executable
report the effective version.

## Windows and Mac

This release targets **2027.1.1**, binary version **2027.1.1.0**, with separate
packages for Windows, macOS Apple Silicon, and macOS Intel.

Avalonia headless tests run on Windows are not native Mac acceptance tests.
Installation checks and visual verification are reported separately from
automated tests. This update claims no new Dante Controller or physical hardware
trial. Commercial Windows signing and Apple notarization are outside this update.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.4

## v2027.2.4 · 2026-09-29 · all · fr

## Mise a jour UX20261001 - publication du 1 octobre 2026

La version reste 2027.2.4. Les menus Windows et Mac suivent Fichier, Edition, Affichage, Outils, Aide ; les commandes de machines sont regroupees dans Outils > Machines. Fichier > Projets recents permet d'ouvrir, retrouver ou retirer un projet et d'effacer uniquement son historique. Les projets deplaces restent visibles. Outils > Preferences regroupe langue, theme et options StageFlow LIVE. L'historique gere les erreurs d'acces sans ecraser les entrees existantes et distingue les chemins sensibles a la casse sur Mac.

Source privee : Mamat79/Dante-Config-Editor-Source, branche suite-ux-20261001, commit 7724233961c076b149bed357503780a900cac601. Les tags existants v2027.2.4 sont conserves et ne designent pas ce nouveau commit.
Windows : installateur corrige deja installe et verifie par le mainteneur, conserve sans reconstruction. Mac : build Codemagic 6abe30c721294323637341c7 sur ce commit, lancement manuel de branche sans tag. Les tests communs/interface Mac, les deux DMG, les sommes, le lancement non visuel Apple Silicon et la verification d'architecture Intel ont reussi d'apres le recu.

Ces controles ne prouvent ni une recette physique ou graphique Mac, ni l'execution native Intel, ni un essai audio/reseau Dante. Aucune signature Apple Developer ID ou notarisation n'est revendiquee. Les PDF approuves restent inchanges. Les tailles et sommes des trois paquets courants figurent dans DOWNLOADS.json et SHA256SUMS.txt. Les nouveaux fichiers publies sont retélécharges et controles par SHA-256 ; les identifiants d'assets et sauvegardes sont consignes dans le relais de publication.

---

### Historique : contenu anterieur conserve

# Dante Config Editor v2027

[English release notes](RELEASE_NOTES_EN.md)

## Windows et macOS 2027.2.4

- Ouvrir un XML Dante directement ou le déposer dans DCE, seul ou en lot.
  Choisir l'ouverture séparée ou l'ajout au projet courant. Un dossier
  `.stageflow` peut aussi être déposé pour l'ouvrir.
- Une fusion entre versions XML différentes propose l'ouverture séparée ; elle
  ne modifie pas le projet courant sans confirmation.
- Banque de six rôles génériques pour les projets XML 2.1.0. Aucun identifiant,
  nom de machine, label, réseau, flux ou abonnement de production n'est repris.

## Windows et macOS 2027.2.3

- Flip échange les deux machines du carré choisi : les TX restent en haut et les
  RX à gauche. Sur une machine sans TX, un en-tête « 0 TX » indique qu'aucun
  patch n'est possible depuis cette intersection.
- Le déplacement du pointeur vers Flip ne change plus la paire choisie. Les
  canaux déjà dépliés restent ouverts ; un second Flip inverse de nouveau la paire.
- Dans la matrice, le pavé tactile défile verticalement à deux doigts. Un
  pincement (ou Ctrl + molette) zoome autour du pointeur sans modifier le patch.
- Les formats XML et les règles de validation ne changent pas. Contrôlez toujours
  le fichier exporté dans Dante Controller avant de l'utiliser sur le réseau.

## Windows et macOS 2027.2.2

- Reunit la correction de detection ci-dessous et la gestion des limites GitHub.
- En cas de 403/429 temporaire, DCE respecte le delai du serveur, meme apres
  relancement. La recherche manuelle donne une information avec l'heure de
  reprise ; la verification automatique reste silencieuse.

### Correction de detection

- Correction du rappel de mise a jour qui reproposait la 2027.2.0 deja installee.
  Le controle utilise la version de l'application Windows ou Mac lancee.

## Windows et macOS 2027.2.0

- La matrice montre tout le projet, avec les machines repliées au départ et
  des en-têtes distincts pour les machines et leurs canaux.
- Un glissement propose une diagonale ou une colonne automatiquement. L'aperçu
  orange reste visible même si le pointeur ne suit pas une diagonale parfaite.
  Relâchez pour appliquer, Échap pour annuler ; une action annule tout le geste.
- Les clics conservent la matrice en place et ne redessinent plus le synoptique
  masqué. Les contrôles XML et l'historique transactionnel restent actifs.
- Double-cliquez un label pour le renommer directement ; tirez sa poignée pour
  prolonger une série. Le renommage en série, Flip, la recherche des sources et
  destinations, et le double-clic sur une machine restent disponibles.
- Multicast récapitule les flux de tout le projet : choisissez une machine,
  cochez les TX audio, puis créez, modifiez ou supprimez un flux.
- Sous Windows, le synoptique reste dans Outils. Une roue dentée à côté d'Espace de travail
  permet de choisir les raccourcis de navigation.

Le multicast concerne les flux Dante audio simples des presets 3.0.0. Les
formes inconnues restent intactes et non modifiables. Supprimer tous les flux
d'un preset ne garantit pas leur suppression sur le réseau : contrôlez ce point
dans Dante Controller. DCE reste un éditeur hors ligne.

La même matrice est portée dans l'interface native Avalonia sur Mac, avec ses
gestes automatiques, l'aperçu, le renommage direct, la poignée de série, la
recherche des liaisons, l'ouverture des machines et le gestionnaire multicast.
Les paquets Apple Silicon et Intel sont fabriqués depuis les mêmes sources.

## Windows et macOS 2027.1.1

Cette version simplifie le travail quotidien et adapte automatiquement DCE aux
écrans plus petits, sans réduire la taille du texte ni ajouter un réglage à
gérer.

- DCE choisit une disposition large, compacte ou étroite selon l'espace
  réellement disponible. Le bandeau se compacte, les panneaux Machines et
  Easy Patch se réorganisent et le défilement reste un dernier recours.
- Les mots ne sont plus coupés au milieu dans les boutons et les libellés. Les
  commandes restent lisibles en français et en anglais sur un écran 1024×640.
- La navigation principale est ramenée à six intentions claires : **Projet**,
  **Vue d'ensemble**, **Machines**, **Patch DCE**, **Synoptique** et **Outils**.
  Import/export, validation, historique, banques, rapports et formation restent
  accessibles dans **Outils**.
- **Nouveau projet DCE** devient un assistant en deux étapes. La première
  définit le fichier, le nom et la description ; la seconde prépare la première
  machine et sa configuration.
- Easy Patch distingue la sélection des appareils, le parcours
  **Source / destination** et le mode **Hybride recommandé**. Les sélections et
  glisser-déposer multiples conservent les règles de patch existantes.
- Les mêmes principes sont appliqués à Windows, macOS Apple Silicon et macOS
  Intel. Les formats XML/DCE/StageFlow, les banques et les licences DCEP1,
  DCEF1 et V2 ne changent pas.

## Windows et macOS 2027.1.0

Cette version améliore l'utilisation sur les écrans compacts et harmonise le
rappel de licence sans bloquer durablement le travail.

- Les zones Machines, Patch, Easy Patch et Synoptique se réorganisent selon la
  largeur disponible. Le défilement n'apparaît qu'en recours, sans réduire le
  texte ni couper les mots.
- Les commandes de bas de page peuvent revenir à la ligne. La navigation
  compacte affiche entièrement ses libellés, y compris Centre de validation.
- Les choix de thème et les boutons désactivés restent lisibles dans les thèmes
  clair et sombre.
- **Nouveau projet DCE** ouvre immédiatement une configuration vide en mémoire,
  sans demander de nom, de chemin, de XML ni de première machine. Les machines
  s'ajoutent ensuite depuis la banque et la destination est choisie à
  l'enregistrement.
- Avant de remplacer un travail modifié, DCE propose Enregistrer, Ne pas
  enregistrer ou Annuler. `Ctrl+N`, `Ctrl+S` et `Ctrl+Maj+S` sont alignés entre
  Windows et macOS.
- Pour les modèles Yamaha de type console ou boîtier d'entrées/sorties, la
  banque propose des noms machine `Y001-`, `Y002-`, etc. La séquence évite les
  collisions, accepte les identifiants à plusieurs chiffres et reste entièrement
  modifiable. Elle ne renomme jamais un équipement existant ou importé.
- Pendant les 30 jours d'essai, le rappel est immédiatement refermable. Après
  expiration, DCE attend 60 secondes au démarrage puis rend toutes les fonctions
  accessibles ; une activation valide libère immédiatement l'interface.
- Le délai ne recommence pas lors de l'ouverture d'une seconde fenêtre dans le
  même processus. Les licences DCEP1, DCEF1 et V2 restent compatibles.
- Une reprise Codemagic accepte une paire macOS `DMG + SHA-256` déjà publiée
  lorsqu'elle est complète et cohérente, même si le DMG reconstruit contient
  des métadonnées différentes. Une paire incomplète est réparée sans écrasement.

## Windows et macOS 2027.0.7

Cette corrective fiabilise l'export d'un projet StageFlow et étend le patch
séquentiel, sans modifier le format XML, les projets, les banques ni les licences.

- **Exporter le XML Dante** fonctionne depuis un projet `.stageflow` : le chemin
  interne du paquet DCE n'est plus transmis à la fenêtre Windows Enregistrer sous.
- Les boîtes de dialogue proposent un nom et un dossier physiques valides, avec
  un repli sûr si Windows refuse malgré tout le chemin initial.
- Dans **Easy Patch**, plusieurs TX déposés sur le premier RX alimentent les RX
  suivants ; dans l'autre sens, plusieurs RX déposés sur le premier TX reçoivent
  successivement ce TX puis les TX suivants.
- Chaque RX conserve exactement une source. La série s'arrête proprement à la
  fin de la machine et DCE indique les canaux restés sans affectation.
- Une référence vers une machine ou un canal TX absent d'un preset partiel est
  désormais classée comme information. Elle reste conservée dans le XML et ne
  demande plus d'acquittement comme un avertissement.
- Les notices et comportements sont alignés en français et en anglais sous
  Windows et macOS.

## Windows et macOS 2027.0.6

Cette corrective rétablit les réglages réseau réellement décrits par certains
presets et accélère le patch séquentiel sans modifier les règles de compatibilité
XML, les licences, les banques personnelles ni les formats de projet.

- **Redondant** et **Daisychain** restent modifiables lorsque la machine contient
  une balise `redundancy`, même si elle ne contient aucune balise `ipv4_address`.
- L'onglet IP reste volontairement désactivé lorsqu'aucune section IPv4 n'existe
  dans le rôle. Un texte explique la limite : DCE préserve le document d'origine
  et n'invente jamais une capacité technique absente.
- Dans **Easy Patch**, sélectionnez un ou plusieurs TX avec Ctrl ou Maj, puis
  déposez-les sur le premier RX. Le premier TX est affecté au RX visé et les
  suivants aux RX successifs, immédiatement.
- Les remplacements de RX déjà patchés conservent l'avertissement choisi par
  l'utilisateur. Plusieurs TX ne peuvent jamais alimenter le même RX.
- Le comportement et les explications sont disponibles en français et en
  anglais sous Windows et macOS.

## Windows et macOS 2027.0.5

Cette version clarifie les projets DCE et StageFlow, fiabilise le synoptique et
recentre la validation sur les problèmes réellement utiles avant export.

- Un projet autonome DCE reste un fichier XML Dante : il peut être créé de zéro,
  ouvert, modifié puis exporté pour Dante Controller sans dépendre de StageFlow.
- Dans un projet `.stageflow`, **Enregistrer** conserve désormais dans le domaine
  Dante les emplacements, l'ordre, la visibilité et les positions manuelles du
  synoptique. Ces données de travail ne sont jamais ajoutées au XML Dante exporté.
- **Import / Export** expose directement l'import d'un XML Dante Controller et
  l'export vers Dante Controller, en plus du menu Fichier.
- Le centre de validation ne signale plus les RX libres ni les machines légitimes
  sans TX ou sans RX. Les contrôles bloquants de structure, d'identités et de
  références restent actifs.
- Le stockage du synoptique utilise une identité portable pour retrouver chaque
  machine après fermeture et réouverture du projet StageFlow.
- Les libellés, tests, notices et numéros de version sont alignés entre Windows,
  macOS Apple Silicon et macOS Intel.

## Windows 2027.0.4

Cette corrective Windows rend les champs plus lisibles et les commandes de
formation et de synoptique plus accessibles. Les données de projet, licences,
banques et formats existants restent inchangés.

- Les listes déroulantes et champs de saisie partagés retrouvent un centrage
  vertical cohérent, y compris après un changement de thème.
- Le titre Connexion StageFlow reste contrasté dans le thème clair.
- Atomic Bomb est à nouveau accessible depuis la navigation ; son pupitre
  conserve la séquence clé, capot, ARM, LOCK, FIRE. La clé et le capot ne sont
  plus rognés dans la disposition standard.
- Le synoptique rend explicites les commandes Détacher et Rattacher, conserve
  sa disposition et applique correctement le thème dans sa fenêtre séparée.

## Windows 2027.0.2

Cette mise à jour clarifie les commandes de préparation, de connexion à la suite
et d'export. DCE reste autonome et prépare les configurations Dante hors ligne.

### Un bandeau commun, toujours accessible

- L'icône et le nom de DCE restent visibles avec les menus métier.
- Les commandes suivent l'ordre Connexion StageFlow, Alertes, Thème, Langue,
  Guide DCE et Aide de DCE. Elles passent sur une seconde ligne lorsque
  la largeur disponible ne suffit pas.
- Le thème indique le choix courant, Clair ou Sombre. Le thème et la langue
  sont mémorisés. Les commandes disposent de noms accessibles et d'infobulles.
- Les champs de thème et de langue ont le même centrage vertical que les
  boutons voisins, sans marge interne héritée qui décale leur fond.
- Annuler et Rétablir restent dans le bandeau. Atomic Bomb se trouve dans
  **Outils > Formation** et conserve sa séquence de sécurité.

### Aide et notices

- **Guide** ouvre désormais la notice complète de DCE dans la langue choisie.
  **Aide** ouvre **Découvrir DCE** ; le guide commun est disponible uniquement
  dans **Aide > Guide de la suite SiLeMI/O**, sans bouton dédié supplémentaire.
- Les notices produit FR/EN ont un sommaire compact sur une page, avec liens
  et signets conservés. Les légendes expliquent les écrans, les liens utilisateur
  conduisent au site SiLeMI/O et les valeurs spécifiques à un groupe sont expliquées.
- Les procédures distinguent Enregistrer, Enregistrer sous et Exporter le XML
  Dante, pour conserver le projet tout en produisant le preset destiné au matériel.

### Connexion StageFlow et alertes

- Le bouton **Connexion StageFlow** conserve son nom ; son état s'affiche sur
  une seconde ligne, avec la session rejointe lorsqu'elle est connectée.
- Le centre reprend le menu latéral commun **StageFlow LIVE / Télécommande
  Dante Config Editor**, le projet courant et **Retour au projet**. Il reste
  non modal ; l'édition locale est temporairement protégée pendant la connexion.
- La rubrique mobile identifie la cible **suite StageFlow**. Le QR, son état et
  ses droits se gèrent dans StageFlow sur l'hôte : DCE n'invente ni serveur mobile
  autonome, ni lien, ni bouton d'activation. Sans session détectée, le centre
  invite à ouvrir StageFlow et à diffuser le projet sur ce PC ou le réseau local.
- **Connexion StageFlow** distingue le projet local de la session LIVE. L'état
  autonome, la connexion en cours, la perte de connexion et les erreurs sont
  indiqués explicitement. Le nom complet du projet reste consultable.
- Le centre permet d'ouvrir un dossier `.stageflow` local sans lancer StageFlow.
  Une session LIVE doit être déconnectée avant cette ouverture ; les changements
  non enregistrés font l'objet d'un avertissement.
- La découverte, le code à six chiffres et la déconnexion sont conservés.
  L'adresse IPv4 et les détails techniques se trouvent dans une zone dépliable.
- **Alertes** sépare la validation XML des changements StageFlow non acquittés.
  Consulter les alertes ne les acquitte pas et ne désactive pas leur réception.

### Préparer, vérifier, exporter

- La page Projet donne accès aux machines, au patch, à la validation et à l'export.
- Les compteurs tiennent sur une ligne en grande largeur. Les fichiers récents
  utilisent la hauteur restante et défilent dans leur propre liste ; la page
  conserve un défilement de secours dans une petite fenêtre, sans couper les commandes.
- **Fichier > Exporter vers Dante Controller** et **Import / Export > Exporter le XML
  Dante** ouvrent le contrôle avant export, puis enregistrent une copie XML.
- Cette copie conserve le projet ouvert, ses modifications et son historique
  d'annulation. Le fichier source n'est pas écrasé. Une destination existante
  reste protégée par la confirmation et les sauvegardes du moteur existant.
- L'export refuse les extensions autres que `.xml` et les chemins à l'intérieur
  du dossier StageFlow courant, y compris les jonctions et liens symboliques.
- **Enregistrer** conserve son rôle de sauvegarde du projet StageFlow. Une
  exportation XML ne remplace pas cette sauvegarde.

Le moteur de modification XML n'est pas réécrit. Les banques, le patch, le
renommage en série, la fusion XML, le synoptique et les licences sont préservés.
StageFlow est gratuit et facultatif. Une connexion LIVE à la suite ne constitue
pas un contrôle du réseau ou du matériel Dante.

## Documentation et mise à niveau

L'installateur Windows inclut les notices et démarrages rapides FR/EN ainsi que
la paire exacte des guides communs SiLeMI/O 2027.3 validés par leur propriétaire.

Depuis une version 2026.10 qui ne propose pas v2027, téléchargez manuellement
l'installateur Windows depuis le dépôt public. Les versions récentes choisissent
la mise à jour correspondant à leur plateforme et vérifient taille et SHA-256.

La mise à niveau conserve les profils, banques personnelles, projets et licences.
Un seul raccourci Bureau est utilisé : **Dante Config Editor v2027**. Un ancien
nom de dossier d'installation, tel que `Dante Config Editor 2026.3`, peut être
conservé ; la version effective figure dans À propos et dans l'exécutable.

## Windows et Mac

Cette livraison vise **2027.1.1**, version binaire **2027.1.1.0**, avec des
paquets distincts pour Windows, macOS Apple Silicon et macOS Intel.

Les tests Avalonia sans écran exécutés sous Windows ne constituent pas une
recette native Mac. Les vérifications d'installation et les contrôles visuels
sont rapportés séparément des tests automatisés. Aucun nouvel essai Dante
Controller ou matériel physique n'est revendiqué par ce lot. La signature
commerciale Windows et la notarisation Apple ne font pas partie de cette mise à jour.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.4

## v2027.2.4 · 2026-09-29 · all · original

## Mise a jour UX20261001 - publication du 1 octobre 2026

La version reste 2027.2.4. Les menus Windows et Mac suivent Fichier, Edition, Affichage, Outils, Aide ; les commandes de machines sont regroupees dans Outils > Machines. Fichier > Projets recents permet d'ouvrir, retrouver ou retirer un projet et d'effacer uniquement son historique. Les projets deplaces restent visibles. Outils > Preferences regroupe langue, theme et options StageFlow LIVE. L'historique gere les erreurs d'acces sans ecraser les entrees existantes et distingue les chemins sensibles a la casse sur Mac.

Source privee : Mamat79/Dante-Config-Editor-Source, branche suite-ux-20261001, commit 7724233961c076b149bed357503780a900cac601. Les tags existants v2027.2.4 sont conserves et ne designent pas ce nouveau commit.
Windows : installateur corrige deja installe et verifie par le mainteneur, conserve sans reconstruction. Mac : build Codemagic 6abe30c721294323637341c7 sur ce commit, lancement manuel de branche sans tag. Les tests communs/interface Mac, les deux DMG, les sommes, le lancement non visuel Apple Silicon et la verification d'architecture Intel ont reussi d'apres le recu.

Ces controles ne prouvent ni une recette physique ou graphique Mac, ni l'execution native Intel, ni un essai audio/reseau Dante. Aucune signature Apple Developer ID ou notarisation n'est revendiquee. Les PDF approuves restent inchanges. Les tailles et sommes des trois paquets courants figurent dans DOWNLOADS.json et SHA256SUMS.txt. Les nouveaux fichiers publies sont retélécharges et controles par SHA-256 ; les identifiants d'assets et sauvegardes sont consignes dans le relais de publication.

---

### Historique : contenu anterieur conserve

## UX20261001 update - published October 1, 2026

The version remains 2027.2.4. Windows and Mac menus follow File, Edit, View, Tools, Help; device commands are grouped under Tools > Devices. File > Recent projects opens, locates or removes entries and clears only the history. Moved projects remain visible. Tools > Settings groups language, theme and StageFlow LIVE options. History handles access failures without overwriting existing entries and respects case-sensitive Mac paths.

Private source: Mamat79/Dante-Config-Editor-Source, branch suite-ux-20261001, commit 7724233961c076b149bed357503780a900cac601. Existing v2027.2.4 tags are preserved and do not identify this new commit.
Windows: the corrected installer previously installed and verified by the maintainer is retained without rebuilding. Mac: Codemagic build 6abe30c721294323637341c7 from this commit, manually triggered on a branch with no tag. The receipt records successful shared/Mac interface tests, both DMGs, checksum checks, nonvisual Apple Silicon launch and Intel architecture verification.

These checks do not establish physical or visual Mac acceptance, native Intel execution, or live Dante audio/network operation. Apple Developer ID signing and notarization are not claimed. Approved PDFs remain unchanged. DOWNLOADS.json and SHA256SUMS.txt record the three current packages. Newly published files are downloaded again and checked by SHA-256; asset IDs and backups are retained in the publication handoff.

---

### History: previous content preserved

# Dante Config Editor v2027

[English release notes](https://github.com/Mamat79/Dante-Config-Editor/releases/download/v2027.2.4/RELEASE_NOTES_2027.2.4_EN.md)

## Windows et macOS 2027.2.4

- Ouvrir un XML Dante directement ou le déposer dans DCE, seul ou en lot.
  Choisir l'ouverture séparée ou l'ajout au projet courant. Un dossier
  `.stageflow` peut aussi être déposé pour l'ouvrir.
- Une fusion entre versions XML différentes propose l'ouverture séparée ; elle
  ne modifie pas le projet courant sans confirmation.
- Banque de six rôles génériques pour les projets XML 2.1.0. Aucun identifiant,
  nom de machine, label, réseau, flux ou abonnement de production n'est repris.

## Windows et macOS 2027.2.3

- Flip échange les deux machines du carré choisi : les TX restent en haut et les
  RX à gauche. Sur une machine sans TX, un en-tête « 0 TX » indique qu'aucun
  patch n'est possible depuis cette intersection.
- Le déplacement du pointeur vers Flip ne change plus la paire choisie. Les
  canaux déjà dépliés restent ouverts ; un second Flip inverse de nouveau la paire.
- Dans la matrice, le pavé tactile défile verticalement à deux doigts. Un
  pincement (ou Ctrl + molette) zoome autour du pointeur sans modifier le patch.
- Les formats XML et les règles de validation ne changent pas. Contrôlez toujours
  le fichier exporté dans Dante Controller avant de l'utiliser sur le réseau.

## Windows et macOS 2027.2.2

- Reunit la correction de detection ci-dessous et la gestion des limites GitHub.
- En cas de 403/429 temporaire, DCE respecte le delai du serveur, meme apres
  relancement. La recherche manuelle donne une information avec l'heure de
  reprise ; la verification automatique reste silencieuse.

### Correction de detection

- Correction du rappel de mise a jour qui reproposait la 2027.2.0 deja installee.
  Le controle utilise la version de l'application Windows ou Mac lancee.

## Windows et macOS 2027.2.0

- La matrice montre tout le projet, avec les machines repliées au départ et
  des en-têtes distincts pour les machines et leurs canaux.
- Un glissement propose une diagonale ou une colonne automatiquement. L'aperçu
  orange reste visible même si le pointeur ne suit pas une diagonale parfaite.
  Relâchez pour appliquer, Échap pour annuler ; une action annule tout le geste.
- Les clics conservent la matrice en place et ne redessinent plus le synoptique
  masqué. Les contrôles XML et l'historique transactionnel restent actifs.
- Double-cliquez un label pour le renommer directement ; tirez sa poignée pour
  prolonger une série. Le renommage en série, Flip, la recherche des sources et
  destinations, et le double-clic sur une machine restent disponibles.
- Multicast récapitule les flux de tout le projet : choisissez une machine,
  cochez les TX audio, puis créez, modifiez ou supprimez un flux.
- Sous Windows, le synoptique reste dans Outils. Une roue dentée à côté d'Espace de travail
  permet de choisir les raccourcis de navigation.

Le multicast concerne les flux Dante audio simples des presets 3.0.0. Les
formes inconnues restent intactes et non modifiables. Supprimer tous les flux
d'un preset ne garantit pas leur suppression sur le réseau : contrôlez ce point
dans Dante Controller. DCE reste un éditeur hors ligne.

La même matrice est portée dans l'interface native Avalonia sur Mac, avec ses
gestes automatiques, l'aperçu, le renommage direct, la poignée de série, la
recherche des liaisons, l'ouverture des machines et le gestionnaire multicast.
Les paquets Apple Silicon et Intel sont fabriqués depuis les mêmes sources.

## Windows et macOS 2027.1.1

Cette version simplifie le travail quotidien et adapte automatiquement DCE aux
écrans plus petits, sans réduire la taille du texte ni ajouter un réglage à
gérer.

- DCE choisit une disposition large, compacte ou étroite selon l'espace
  réellement disponible. Le bandeau se compacte, les panneaux Machines et
  Easy Patch se réorganisent et le défilement reste un dernier recours.
- Les mots ne sont plus coupés au milieu dans les boutons et les libellés. Les
  commandes restent lisibles en français et en anglais sur un écran 1024×640.
- La navigation principale est ramenée à six intentions claires : **Projet**,
  **Vue d'ensemble**, **Machines**, **Patch DCE**, **Synoptique** et **Outils**.
  Import/export, validation, historique, banques, rapports et formation restent
  accessibles dans **Outils**.
- **Nouveau projet DCE** devient un assistant en deux étapes. La première
  définit le fichier, le nom et la description ; la seconde prépare la première
  machine et sa configuration.
- Easy Patch distingue la sélection des appareils, le parcours
  **Source / destination** et le mode **Hybride recommandé**. Les sélections et
  glisser-déposer multiples conservent les règles de patch existantes.
- Les mêmes principes sont appliqués à Windows, macOS Apple Silicon et macOS
  Intel. Les formats XML/DCE/StageFlow, les banques et les licences DCEP1,
  DCEF1 et V2 ne changent pas.

## Windows et macOS 2027.1.0

Cette version améliore l'utilisation sur les écrans compacts et harmonise le
rappel de licence sans bloquer durablement le travail.

- Les zones Machines, Patch, Easy Patch et Synoptique se réorganisent selon la
  largeur disponible. Le défilement n'apparaît qu'en recours, sans réduire le
  texte ni couper les mots.
- Les commandes de bas de page peuvent revenir à la ligne. La navigation
  compacte affiche entièrement ses libellés, y compris Centre de validation.
- Les choix de thème et les boutons désactivés restent lisibles dans les thèmes
  clair et sombre.
- **Nouveau projet DCE** ouvre immédiatement une configuration vide en mémoire,
  sans demander de nom, de chemin, de XML ni de première machine. Les machines
  s'ajoutent ensuite depuis la banque et la destination est choisie à
  l'enregistrement.
- Avant de remplacer un travail modifié, DCE propose Enregistrer, Ne pas
  enregistrer ou Annuler. `Ctrl+N`, `Ctrl+S` et `Ctrl+Maj+S` sont alignés entre
  Windows et macOS.
- Pour les modèles Yamaha de type console ou boîtier d'entrées/sorties, la
  banque propose des noms machine `Y001-`, `Y002-`, etc. La séquence évite les
  collisions, accepte les identifiants à plusieurs chiffres et reste entièrement
  modifiable. Elle ne renomme jamais un équipement existant ou importé.
- Pendant les 30 jours d'essai, le rappel est immédiatement refermable. Après
  expiration, DCE attend 60 secondes au démarrage puis rend toutes les fonctions
  accessibles ; une activation valide libère immédiatement l'interface.
- Le délai ne recommence pas lors de l'ouverture d'une seconde fenêtre dans le
  même processus. Les licences DCEP1, DCEF1 et V2 restent compatibles.
- Une reprise Codemagic accepte une paire macOS `DMG + SHA-256` déjà publiée
  lorsqu'elle est complète et cohérente, même si le DMG reconstruit contient
  des métadonnées différentes. Une paire incomplète est réparée sans écrasement.

## Windows et macOS 2027.0.7

Cette corrective fiabilise l'export d'un projet StageFlow et étend le patch
séquentiel, sans modifier le format XML, les projets, les banques ni les licences.

- **Exporter le XML Dante** fonctionne depuis un projet `.stageflow` : le chemin
  interne du paquet DCE n'est plus transmis à la fenêtre Windows Enregistrer sous.
- Les boîtes de dialogue proposent un nom et un dossier physiques valides, avec
  un repli sûr si Windows refuse malgré tout le chemin initial.
- Dans **Easy Patch**, plusieurs TX déposés sur le premier RX alimentent les RX
  suivants ; dans l'autre sens, plusieurs RX déposés sur le premier TX reçoivent
  successivement ce TX puis les TX suivants.
- Chaque RX conserve exactement une source. La série s'arrête proprement à la
  fin de la machine et DCE indique les canaux restés sans affectation.
- Une référence vers une machine ou un canal TX absent d'un preset partiel est
  désormais classée comme information. Elle reste conservée dans le XML et ne
  demande plus d'acquittement comme un avertissement.
- Les notices et comportements sont alignés en français et en anglais sous
  Windows et macOS.

## Windows et macOS 2027.0.6

Cette corrective rétablit les réglages réseau réellement décrits par certains
presets et accélère le patch séquentiel sans modifier les règles de compatibilité
XML, les licences, les banques personnelles ni les formats de projet.

- **Redondant** et **Daisychain** restent modifiables lorsque la machine contient
  une balise `redundancy`, même si elle ne contient aucune balise `ipv4_address`.
- L'onglet IP reste volontairement désactivé lorsqu'aucune section IPv4 n'existe
  dans le rôle. Un texte explique la limite : DCE préserve le document d'origine
  et n'invente jamais une capacité technique absente.
- Dans **Easy Patch**, sélectionnez un ou plusieurs TX avec Ctrl ou Maj, puis
  déposez-les sur le premier RX. Le premier TX est affecté au RX visé et les
  suivants aux RX successifs, immédiatement.
- Les remplacements de RX déjà patchés conservent l'avertissement choisi par
  l'utilisateur. Plusieurs TX ne peuvent jamais alimenter le même RX.
- Le comportement et les explications sont disponibles en français et en
  anglais sous Windows et macOS.

## Windows et macOS 2027.0.5

Cette version clarifie les projets DCE et StageFlow, fiabilise le synoptique et
recentre la validation sur les problèmes réellement utiles avant export.

- Un projet autonome DCE reste un fichier XML Dante : il peut être créé de zéro,
  ouvert, modifié puis exporté pour Dante Controller sans dépendre de StageFlow.
- Dans un projet `.stageflow`, **Enregistrer** conserve désormais dans le domaine
  Dante les emplacements, l'ordre, la visibilité et les positions manuelles du
  synoptique. Ces données de travail ne sont jamais ajoutées au XML Dante exporté.
- **Import / Export** expose directement l'import d'un XML Dante Controller et
  l'export vers Dante Controller, en plus du menu Fichier.
- Le centre de validation ne signale plus les RX libres ni les machines légitimes
  sans TX ou sans RX. Les contrôles bloquants de structure, d'identités et de
  références restent actifs.
- Le stockage du synoptique utilise une identité portable pour retrouver chaque
  machine après fermeture et réouverture du projet StageFlow.
- Les libellés, tests, notices et numéros de version sont alignés entre Windows,
  macOS Apple Silicon et macOS Intel.

## Windows 2027.0.4

Cette corrective Windows rend les champs plus lisibles et les commandes de
formation et de synoptique plus accessibles. Les données de projet, licences,
banques et formats existants restent inchangés.

- Les listes déroulantes et champs de saisie partagés retrouvent un centrage
  vertical cohérent, y compris après un changement de thème.
- Le titre Connexion StageFlow reste contrasté dans le thème clair.
- Atomic Bomb est à nouveau accessible depuis la navigation ; son pupitre
  conserve la séquence clé, capot, ARM, LOCK, FIRE. La clé et le capot ne sont
  plus rognés dans la disposition standard.
- Le synoptique rend explicites les commandes Détacher et Rattacher, conserve
  sa disposition et applique correctement le thème dans sa fenêtre séparée.

## Windows 2027.0.2

Cette mise à jour clarifie les commandes de préparation, de connexion à la suite
et d'export. DCE reste autonome et prépare les configurations Dante hors ligne.

### Un bandeau commun, toujours accessible

- L'icône et le nom de DCE restent visibles avec les menus métier.
- Les commandes suivent l'ordre Connexion StageFlow, Alertes, Thème, Langue,
  Guide DCE et Aide de DCE. Elles passent sur une seconde ligne lorsque
  la largeur disponible ne suffit pas.
- Le thème indique le choix courant, Clair ou Sombre. Le thème et la langue
  sont mémorisés. Les commandes disposent de noms accessibles et d'infobulles.
- Les champs de thème et de langue ont le même centrage vertical que les
  boutons voisins, sans marge interne héritée qui décale leur fond.
- Annuler et Rétablir restent dans le bandeau. Atomic Bomb se trouve dans
  **Outils > Formation** et conserve sa séquence de sécurité.

### Aide et notices

- **Guide** ouvre désormais la notice complète de DCE dans la langue choisie.
  **Aide** ouvre **Découvrir DCE** ; le guide commun est disponible uniquement
  dans **Aide > Guide de la suite SiLeMI/O**, sans bouton dédié supplémentaire.
- Les notices produit FR/EN ont un sommaire compact sur une page, avec liens
  et signets conservés. Les légendes expliquent les écrans, les liens utilisateur
  conduisent au site SiLeMI/O et les valeurs spécifiques à un groupe sont expliquées.
- Les procédures distinguent Enregistrer, Enregistrer sous et Exporter le XML
  Dante, pour conserver le projet tout en produisant le preset destiné au matériel.

### Connexion StageFlow et alertes

- Le bouton **Connexion StageFlow** conserve son nom ; son état s'affiche sur
  une seconde ligne, avec la session rejointe lorsqu'elle est connectée.
- Le centre reprend le menu latéral commun **StageFlow LIVE / Télécommande
  Dante Config Editor**, le projet courant et **Retour au projet**. Il reste
  non modal ; l'édition locale est temporairement protégée pendant la connexion.
- La rubrique mobile identifie la cible **suite StageFlow**. Le QR, son état et
  ses droits se gèrent dans StageFlow sur l'hôte : DCE n'invente ni serveur mobile
  autonome, ni lien, ni bouton d'activation. Sans session détectée, le centre
  invite à ouvrir StageFlow et à diffuser le projet sur ce PC ou le réseau local.
- **Connexion StageFlow** distingue le projet local de la session LIVE. L'état
  autonome, la connexion en cours, la perte de connexion et les erreurs sont
  indiqués explicitement. Le nom complet du projet reste consultable.
- Le centre permet d'ouvrir un dossier `.stageflow` local sans lancer StageFlow.
  Une session LIVE doit être déconnectée avant cette ouverture ; les changements
  non enregistrés font l'objet d'un avertissement.
- La découverte, le code à six chiffres et la déconnexion sont conservés.
  L'adresse IPv4 et les détails techniques se trouvent dans une zone dépliable.
- **Alertes** sépare la validation XML des changements StageFlow non acquittés.
  Consulter les alertes ne les acquitte pas et ne désactive pas leur réception.

### Préparer, vérifier, exporter

- La page Projet donne accès aux machines, au patch, à la validation et à l'export.
- Les compteurs tiennent sur une ligne en grande largeur. Les fichiers récents
  utilisent la hauteur restante et défilent dans leur propre liste ; la page
  conserve un défilement de secours dans une petite fenêtre, sans couper les commandes.
- **Fichier > Exporter vers Dante Controller** et **Import / Export > Exporter le XML
  Dante** ouvrent le contrôle avant export, puis enregistrent une copie XML.
- Cette copie conserve le projet ouvert, ses modifications et son historique
  d'annulation. Le fichier source n'est pas écrasé. Une destination existante
  reste protégée par la confirmation et les sauvegardes du moteur existant.
- L'export refuse les extensions autres que `.xml` et les chemins à l'intérieur
  du dossier StageFlow courant, y compris les jonctions et liens symboliques.
- **Enregistrer** conserve son rôle de sauvegarde du projet StageFlow. Une
  exportation XML ne remplace pas cette sauvegarde.

Le moteur de modification XML n'est pas réécrit. Les banques, le patch, le
renommage en série, la fusion XML, le synoptique et les licences sont préservés.
StageFlow est gratuit et facultatif. Une connexion LIVE à la suite ne constitue
pas un contrôle du réseau ou du matériel Dante.

## Documentation et mise à niveau

L'installateur Windows inclut les notices et démarrages rapides FR/EN ainsi que
la paire exacte des guides communs SiLeMI/O 2027.3 validés par leur propriétaire.

Depuis une version 2026.10 qui ne propose pas v2027, téléchargez manuellement
l'installateur Windows depuis le dépôt public. Les versions récentes choisissent
la mise à jour correspondant à leur plateforme et vérifient taille et SHA-256.

La mise à niveau conserve les profils, banques personnelles, projets et licences.
Un seul raccourci Bureau est utilisé : **Dante Config Editor v2027**. Un ancien
nom de dossier d'installation, tel que `Dante Config Editor 2026.3`, peut être
conservé ; la version effective figure dans À propos et dans l'exécutable.

## Windows et Mac

Cette livraison vise **2027.1.1**, version binaire **2027.1.1.0**, avec des
paquets distincts pour Windows, macOS Apple Silicon et macOS Intel.

Les tests Avalonia sans écran exécutés sous Windows ne constituent pas une
recette native Mac. Les vérifications d'installation et les contrôles visuels
sont rapportés séparément des tests automatisés. Aucun nouvel essai Dante
Controller ou matériel physique n'est revendiqué par ce lot. La signature
commerciale Windows et la notarisation Apple ne font pas partie de cette mise à jour.

Source : https://github.com/Mamat79/Dante-Config-Editor/releases/tag/v2027.2.4
