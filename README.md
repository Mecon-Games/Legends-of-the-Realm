# Legends of the Realm – Projekt-Prompt & Stand

Digitales Brettspiel (HeroQuest-Mechanik 1:1, eigene Texte/Grafiken), 2–5 Spieler, jeder am Handy.
Start: Repo auf GitHub Pages veröffentlichen, `index.html` öffnen, "Installieren" im Browser für die PWA.

## Netzwerk
Erzähler-Browser = Server (PeerJS/WebRTC). QR-Code enthält `?join=<PeerID>`. Nur der Verbindungsaufbau läuft über den öffentlichen PeerJS-Broker, danach direkt P2P.

## Regeln (Original, zu übernehmen)
- Erzähler = Zargon (Spielleiter), 1–4 Helden: Barbar (Angr. 3, Vert. 2, KK 8, INT 2), Zwerg (2/2, KK 7, INT 3, entschärft Fallen ohne Werkzeug), Alb (2/2, KK 6, INT 4, 3 Zaubergruppen), Zauberer (1/2, KK 4, INT 6, 9 Zauber/3 Gruppen).
- Zug: Marsch (2 rote Würfel, Feld für Feld, nicht diagonal, nicht durch Monster, durch Helden erlaubt, Felder nicht teilen) UND 1 Aktion – davor oder danach.
- Aktionen: Angreifen, Zauber, Schatz suchen, Geheimtüren suchen, Fallen suchen, Falle entschärfen. Türen öffnen/Erkunden ist keine Aktion.
- Kampf: weiße Würfel = 3 Totenköpfe, 2 weiße Schilde, 1 schwarzer Schild. Held verteidigt mit weißen Schilden, Monster mit schwarzen. Körperkraft 0 = tot.
- Monster: Goblin, Ork, Abscheulichkeit, Schreckens-Krieger, Skelett, Zombie, Mumie, Gargoyle – Werte laut Monstertabelle; bewegen feste Felderzahl; Zargon-Zug nach allen Helden.
- Fallen: Fallgrube, Schlagfalle, Speerfalle, Schatztruhen-/Möbelfalle. Zwischen Spielen: Waffenkammer, Gold, Artefakte bleiben. 14 Herausforderungen.

## Bereits umgesetzt
Startmenü, Einstellungen (Gametag, Wappenfarbe, Sicherung), QR-Lobby, Heldenwahl, Bereit-Status, Rundenablauf, Würfeln, Marsch, Nahkampf, Monster-KI, Sichtfeld-Begrenzung (Prototyp), Sieg/Niederlage, PWA.

## TODO (erledigte Punkte hier löschen)
1. Echte Lagekarten der Herausforderungen 1–14 (Wände, Türen, Möbel, Treppe, Monsterstartpositionen) + Anmerkungen A–E, Pergamenttexte neu formuliert.
2. Kampagnen-Auswahl und Kampagnen-Editor für den Erzähler (leere Karte + Symbole, wie Seite 33).
3. Türen (öffnen), echte Sichtlinie (Wände/Türen blockieren), Erkundung.
4. Aktionen 2–6: Zauber (Luft/Feuer/Wasser/Erde, Schreckenszauber), Schätze (Schatzkarten, streunende Monster, Gefahren), Geheimtüren, Fallen suchen/auslösen/überspringen/entschärfen.
5. Persönlichkeits-Paß (Körperkraft, Intelligenz, Erfolge, Gold), Ausrüstung, Waffenkammer, Artefakte, Tränke, Hero-Speicherstand.
6. Held-Editor: eigenes Wappen (Formen/Farben), Namen, 5. Heldenkarte laut Anleitung ergänzen.
7. Alle 8 Monstertypen inkl. Sonderregeln (Totenköpfe-Marker, Stein, Schreckenszauber), Zargons Zauber.
8. 3D-Würfel (Three.js oder CSS) unter dem Spielfeld, Animationen.
9. Echtes Verstecken der Daten (Server schickt nur Sicht des Helden), Wiederverbinden nach Verbindungsabbruch.
10. Mittelalterliches Design ausbauen (Pergament, Fonts, eigene gezeichnete Figuren-SVGs statt Emojis), Sound.
11. Zwischen-den-Spielen-Ablauf, tote Helden, Spielstand laden/speichern des Erzählers.
12. Offline-Cache der Bibliotheken (PeerJS, qrcode) lokal ablegen.
