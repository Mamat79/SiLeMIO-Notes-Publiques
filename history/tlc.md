# TLC — Track Latency Compensation — Notes de version / Release notes

## v2.16.0 · 2026-07-21 · unspecified · original

# TLC V2.16 Stable

## Français

Version stable de TLC - Track Latency Compensation pour Ableton Live / Max for Live.

Cette release contient :

- `TLC V2.16.amxd` : device principal de compensation de latence.
- `TLC Sonde V1.06.amxd` : sonde compagnon IN/OUT pour la mesure réelle.
- `TLC Impulse.wav` : impulsion audio optionnelle pour les tests/calibrations.

Fonctions principales :

- Sources `Rapide`, `Sonde`, `Manuel`.
- Groupes de compensation de `A` à `H`.
- Campagnes Sonde de 1, 3, 5 ou 10 mesures.
- PING automatiques depuis la Sonde IN.
- Affichage des valeurs brutes, rejetées, moyenne, médiane, min, max, dispersion et confiance.
- Diagnostic de latence interface audio informatif uniquement, non intégré à la compensation.

Installation :

Copie les fichiers `.amxd` dans ta User Library Ableton Live, par exemple :

`User Library/Presets/Audio Effects/Max Audio Effect/TLC - Track Latency Compensation/`

Pour le mode Sonde, installe les deux devices : `TLC V2.16.amxd` et `TLC Sonde V1.06.amxd`.

## English

Stable release of TLC - Track Latency Compensation for Ableton Live / Max for Live.

This release includes:

- `TLC V2.16.amxd`: main latency compensation device.
- `TLC Sonde V1.06.amxd`: companion IN/OUT probe for real measurement.
- `TLC Impulse.wav`: optional impulse sample for tests/calibration.

Main features:

- `Rapide`, `Sonde`, and `Manuel` latency sources.
- Compensation groups from `A` to `H`.
- Sonde campaigns with 1, 3, 5, or 10 measurements.
- Automatic PING impulses from the IN probe.
- Raw values, rejected values, average, median, min, max, dispersion, retained value, and confidence display.
- Audio-interface latency diagnostics are informational only and are not used for compensation.

Installation:

Copy the `.amxd` files into your Ableton Live User Library, for example:

`User Library/Presets/Audio Effects/Max Audio Effect/TLC - Track Latency Compensation/`

For Sonde mode, install both devices: `TLC V2.16.amxd` and `TLC Sonde V1.06.amxd`.

Source : https://github.com/Mamat79/TLC-Track-Latency-Compensation/releases/tag/v2.16.0
