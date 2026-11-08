# Legends of the Realm – Projekt-Prompt & Stand

Digitales Brettspiel (HeroQuest-Mechanik 1:1, eigene Texte/Grafiken), 2–5 Spieler, jeder am Handy.
Start: Repo auf GitHub Pages veröffentlichen, `index.html` öffnen, "Installieren" im Browser für die PWA.

## Netzwerk
Erzähler-Browser = Server (PeerJS/WebRTC). QR-Code enthält `?join=<PeerID>`. Nur der Verbindungsaufbau läuft über den öffentlichen PeerJS-Broker, danach direkt P2P.

## Erzähler am PC im LAN (auch ohne Internet)
1. Node.js installieren, Ordner entpacken, `start-lan.bat` (Windows) bzw. `./start-lan.sh` starten.
2. Auf dem PC `http://localhost:8080` öffnen → „Erzähler“. Der QR-Code enthält automatisch die LAN-IP des PCs.
3. Handys im selben WLAN/LAN scannen den QR mit der Handykamera (die App-Kamera braucht HTTPS und geht im LAN nicht). Firewall: Port 8080 freigeben.
Ohne `server.js` (z. B. GitHub Pages) läuft der Online-Modus über die öffentliche PeerJS-Cloud; PC im LAN-Kabel funktioniert dort ebenfalls, solange er im selben Netz wie die Handys ist.

## Regeln (Original, zu übernehmen)
- Erzähler = Zargon (Spielleiter), 1–4 Helden: Barbar (Angr. 3, Vert. 2, KK 8, INT 2), Zwerg (2/2, KK 7, INT 3, entschärft Fallen ohne Werkzeug), Alb (2/2, KK 6, INT 4, 3 Zaubergruppen), Zauberer (1/2, KK 4, INT 6, 9 Zauber/3 Gruppen).
- Zug: Marsch (2 rote Würfel, Feld für Feld, nicht diagonal, nicht durch Monster, durch Helden erlaubt, Felder nicht teilen) UND 1 Aktion – davor oder danach.
- Aktionen: Angreifen, Zauber, Schatz suchen, Geheimtüren suchen, Fallen suchen, Falle entschärfen. Türen öffnen/Erkunden ist keine Aktion.
- Kampf: weiße Würfel = 3 Totenköpfe, 2 weiße Schilde, 1 schwarzer Schild. Held verteidigt mit weißen Schilden, Monster mit schwarzen. Körperkraft 0 = tot.
- Monster: Goblin, Ork, Abscheulichkeit, Schreckens-Krieger, Skelett, Zombie, Mumie, Gargoyle – Werte laut Monstertabelle; bewegen feste Felderzahl; Zargon-Zug nach allen Helden.
- Fallen: Fallgrube, Schlagfalle, Speerfalle, Schatztruhen-/Möbelfalle. Zwischen Spielen: Waffenkammer, Gold, Artefakte bleiben. 14 Herausforderungen.

## Bereits umgesetzt
Erzähler auf PC (Kabel-LAN): breites Layout, LAN-Modus mit eigenem Server (server.js), Online-Modus bleibt.
Spielerzahl: 1 Erzähler + 1 bis 4 Helden (2–5 Spieler), jeder Held nur einmal wählbar; Bibliotheken liegen lokal in lib/ (offlinefähig, kein CDN); Fehlermeldungen beim Verbinden.
In-App-QR-Scanner für Helden (BarcodeDetector, Fallback jsQR, Code-Eingabe als Notlösung). Startmenü, Einstellungen (Gametag, Wappenfarbe, Sicherung), QR-Lobby, Heldenwahl, Bereit-Status, Rundenablauf (nur der Held am Zug steuert; der Erzähler sieht alles und Zargons Zug läuft automatisch), Marsch, Nahkampf, Monster-KI.
Neu: Herausforderung 1 "Die Bewährung" als eigene, dem Original nachempfundene Karte (Flure, 4 Räume, 8 Türen, Treppe, Mumie, Goblins, Orks, Gargoyle Verag), Türen öffnen (kostenlos), echte Sichtlinie (Wände und geschlossene Türen blockieren), Schatzsuche mit Gold (84/120), Siegbedingung (Verag besiegen UND alle lebenden Helden zurück auf die Treppe), PWA.

## TODO (erledigte Punkte hier löschen)
1. Karten der Herausforderungen 2–14 mit allen Anmerkungen (A–E), Möbel, Pergamenttexte neu formuliert; Karte 1 exakter nachbauen (Möbel, Sarkophag, Waffenregal).
2. Kampagnen-Auswahl und Kampagnen-Editor (leere Karte + Symbole, Seite 33).
3. Aktionen: Zauber (Luft/Feuer/Wasser/Erde, Schreckenszauber), Geheimtüren, Fallen suchen/auslösen/überspringen/entschärfen, Schatzkarten (streunende Monster, Gefahren), diagonale Waffen.
4. Persönlichkeits-Paß-Ansicht, Ausrüstung, Waffenkammer, Artefakte, Tränke, Held speichern/laden, Zwischen-den-Spielen-Ablauf, tote Helden.
5. Held-Editor: eigenes Wappen (Formen/Farben), Namen; die fehlende 5. Heldenkarte laut Anleitung ergänzen.
6. Restliche Monster (Abscheulichkeit, Schreckens-Krieger, Skelett, Zombie) und Sonderregeln, Zargons Zauber, Monster erst aktiv, wenn Heldenblick sie trifft.
7. 3D-Würfel, Animationen, Sound.
8. Server sendet nur die Sicht des jeweiligen Helden (aktuell wird nur ausgeblendet); Wiederverbinden nach Abbruch.
9. Design: Pergament, Fonts, eigene gezeichnete Figuren-SVGs statt Emojis.
