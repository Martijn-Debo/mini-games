# Eigen geluiden (optioneel)

Zonder bestanden maakt het spel de dierengeluiden zelf (synthesizer). Wil je echte opnames:

1. Zet de mp3's in deze map, bv. `hond-1.mp3`, `hond-2.mp3`, `hond-3.mp3`, `hond-4.mp3`.
2. Maak `manifest.json` in deze map met per dier de bestanden. Dieren zonder bestanden blijven de synthesizer gebruiken:

```json
{
  "hond": ["hond-1.mp3", "hond-2.mp3", "hond-3.mp3", "hond-4.mp3"],
  "koe": ["koe-1.mp3", "koe-2.mp3"]
}
```

Dier-namen: paard, kikker, poes, hond, vogeltje, koe, varken, muis, geit, olifant, kip, slang, leeuw, aap.
Per dier mogen het er meer of minder dan 4 zijn; er wordt er steeds willekeurig één gekozen.
