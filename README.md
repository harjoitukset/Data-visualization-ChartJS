# Chart.js Web-sovellus

Tämä on yksinkertainen web-sovellus, joka hyödyntää Chart.js-kirjastoa interaktiivisten kaavioiden luomiseen. Sovellus on rakennettu siten, että HTML, JavaScript ja CSS on eroteltu omiin tiedostoihinsa.

## Projektin rakenne

```
Data-visualization-ChartJS
├── public
│   └── index.html          # Pääasiallinen HTML-tiedosto
├── src
│   ├── app.js              # Pääasiallinen JavaScript-tiedosto
│   ├── components          # Komponentit jos tarvitaan
kaavioiden näyttämiseen
│   └── styles
│       └── main.css        # Appin CSS-tyylit
├── package.json            # npm-konfiguraatiot
└── README.md               # Appin dokumentaatio
```

## Aloitusohjeet

Aloittaaksesi projektin käytön, toimi seuraavasti:

1. **Kloonaa repositorio:**
   ```
   git clone <repository-url>
   cd chartjs-web-app
   ```

2. **Asenna riippuvuudet:**
   ```
   npm install
   ```

3. **Käynnistä sovellus:**
   ```
   npm start
   ```

4. **Avaa selain:**
   Siirry osoitteeseen `http://localhost:8080` nähdäksesi sovelluksen.

5. **Hae data:**
   Lataa tiedosto osoitteesta [https://gapm.io/dl_popv8](https://gapm.io/dl_popv8). Tiedosto sisältää maiden väkilukuja ja on XLSX-muodossa, joten avaa se Excel-ohjelmalla. Olemme kiinnostuneita välilehden **data-pop-gmv8-in-columns** datasta. Poista datasta ylimääräiset rivit: kaksi ylintä riviä sekä seitsemän alinta riviä, joissa on maanosien ja koko maailman väkiluvut. Tallenna kyseisen välilehden sisältämä data CSV-muodossa tiedostoon `data.csv`, joka sijoitetaan `public`-kansioon. Muokkaa dataa tarvittaessa, jotta voit käyttää sitä kuvaajien piirtämiseen Chart.js:n avulla.
