# Chart.js Web-sovellus

Tämä on yksinkertainen web-sovellus, joka hyödyntää Chart.js-kirjastoa interaktiivisten kaavioiden luomiseen. Sovellus on rakennettu siten, että HTML, JavaScript ja CSS on eroteltu omiin tiedostoihinsa.

## Projektin rakenne

```
Data-visualization-ChartJS
├── public
│   └── index.html          # Pääasiallinen HTML-tiedosto
├── src
│   ├── app.js              # Pääasiallinen JavaScript-tiedosto
│   ├── components          # Komponentit
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

## Käyttö

Sovelluksella voit luoda ja näyttää erilaisia kaavioita Chart.js:n avulla. Voit muokata tiedostoa `src/components/ChartComponent.js` räätälöidäksesi kaavioita tarpeidesi mukaan.

[Data](https://gapm.io/dl_popv8)