# SiLeMI/O — notes publiques cumulatives

Ce dépôt contient uniquement les textes publics des publications GitHub de SiLeMI/O. Un fichier dans `history/` rassemble l’historique de chaque logiciel, le plus récent d’abord ; les langues et plateformes sont étiquetées lorsqu’elles sont connues et chaque entrée conserve sa source. Les instantanés `data/` permettent de conserver les anciens textes même si une publication est ensuite modifiée ou retirée.

Le workflow utilise un runner standard GitHub et son seul jeton temporaire limité à ce dépôt. Il vérifie les publications toutes les heures, avec un délai supplémentaire possible ; il ne publie ni installateur ni données privées. En cas d’échec de source, il ne valide aucune mise à jour partielle ; les derniers fichiers restent disponibles et une exécution manuelle peut relancer la synchronisation. Les brouillons et préversions non prévues sont exclus. Toute mise à jour d’un historique passe par un commit, et les sorties sont recalculables.

Les exécutions planifiées des dépôts publics peuvent être désactivées après 60 jours sans activité. Il faut alors les réactiver. Les runners standard des dépôts publics sont gratuits selon les conditions GitHub en vigueur ; cette affirmation ne couvre pas d’éventuels services supplémentaires ou un changement de conditions.
