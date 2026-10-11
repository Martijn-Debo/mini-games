# Mini-games voor kleine kinderen

Verzameling kleine spelletjes voor peuters/kleuters. Elk spel staat op zichzelf.

## Structuur
- Elk spel krijgt een eigen map: `games/<spelnaam>/` (kebab-case, bv. `games/dieren-geluiden/`).
- Spellen delen geen code met elkaar; kopiëren is prima. Een wijziging aan één spel mag een ander niet breken.
- Standaard: één `index.html` met inline CSS en JS, zonder build-stap of externe afhankelijkheden, zodat het offline werkt en direct te openen is.
- Wijk hiervan alleen af als het spel er echt om vraagt (bv. een framework of meerdere bestanden voor assets).
- `index.html` in de root is een simpel overzicht met grote knoppen/plaatjes naar elk spel.

## Doelgroep en ontwerp
- Primair gebruikt op een mobieltje (touch, staand scherm). Desktop hoeft alleen te werken, niet mooi te zijn.
- Kinderen kunnen nog niet of nauwelijks lezen: gebruik plaatjes, emoji, kleur en geluid in plaats van tekst.
- Grote tikdoelen (minimaal ~64px), geen kleine knoppen, geen dubbeltik of lang indrukken als vereiste.
- Geen falen of game over: altijd positieve feedback (geluid, animatie, confetti). Fout = zacht opnieuw proberen.
- Geen ads, tracking, accounts, externe links of in-app aankopen. Niets wat het kind uit het spel kan laten navigeren.
- Voorkom per ongeluk zoomen/scrollen/pull-to-refresh (`touch-action`, `user-scalable=no`, `overscroll-behavior: none`).
- Geluid pas starten na eerste tik (autoplay-regels van mobiele browsers). Maak geluiden met Web Audio of korte inline bestanden.
- Respecteer `prefers-reduced-motion` en houd animaties rustig, geen flitsen.

## Werkwijze
- Taal in code en commits: Engels voor code, Nederlands voor eventuele zichtbare tekst en documentatie.
- Houd spellen klein en simpel; liever één mechaniek goed dan veel half.
- Test op mobiel formaat (bv. 390x844) voordat je zegt dat iets klaar is.

## Instructies van de gebruiker
<!-- Voeg hier voorkeuren en beslissingen toe zodra ze duidelijk worden. -->
