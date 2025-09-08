# Chart.js Web-sovellus

Tämä on yksinkertainen web-sovellus, joka hyödyntää Chart.js-kirjastoa interaktiivisten kaavioiden luomiseen. Sovellus on rakennettu siten, että HTML ja CSS-tiedostot ovat public-kansiossa ja JavaScript-koodi on src-kansiossa.

## Käytetyt teknologiat

- [Chart.js](https://www.chartjs.org/): Kaavioiden piirtämiseen
- [Webpack](https://webpack.js.org/): Projektin kokoamiseen ja kehityspalvelimeen
- [D3.js](https://d3js.org/): Datan käsittelyyn ja


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

Tässä tehtävässä tehdään interaktiivisia kaavioita Chart.js:n avulla. Tehtävän ensimmäisessä osassa haetaan Excel-tiedostosta olevaa dataa ja piirretään kahden tyyppisiä kaavioita sen pohjalta. 
Aloittaaksesi projektin käytön, toimi seuraavasti:

1. **Kloonaa repositorio:**
   ```
   git clone <repository-url>
   cd Data-visualization-ChartJS-<oma-tunnus>
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
   Data on lisensoitu [Creative Commons License CC BY 4.0](https://docs.google.com/document/d/1-RmthhS2EPMK_HIpnPctcXpB0n7ADSWnXa5Hb3PxNq4/edit?usp=sharing).

6. **Käytä chart-container-tyyliä kaavioiden ympärillä:**
   Tiedostossa `main.css` on määritelty tyyli `.chart-container`, jota tulisi käyttää kaavioiden asettelussa. Lisää `index.html`-tiedostoon uusi `<div class="chart-container">`, jonka sisälle sijoitat kaikki kaavioiden `<canvas>`-elementit. Tämä parantaa kaavioiden ulkoasua ja keskittää ne.

7. **Uusi canvas-elementti viivadiagrammille:**
   Nimeä myChart nimellä oleva komponentti barChart:iksi ja tee uusi canvas-elementti `<canvas id="lineChart" width="400" height="200">`, johon piirretään viivadiagrammi sovelluksen JavaScript-koodissa.

8. **Muokkaa ja käytä JSON-dataa:**
   Lataa Suomen kaupunkien tiedot (väkiluku, pinta-ala jne.) esimerkiksi Wikipedia-sivulta [https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista](https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista). Tallenna tiedot JSON-muotoon tiedostoon `data.json` ja sijoita se `public`-kansioon. Voit käyttää tätä dataa esimerkiksi scatter plot -kaavion piirtämiseen Chart.js:llä, jossa vertaillaan kaupunkien pinta-alaa ja väkilukua.

9. **Käytä JSON-muotoista dataa:**
   Data tiedostossa [data.json](./data.json) on parsittu osoitteesta [https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista](https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista). Data on lisensoitu Creative Commons Attribution/Share-Alike -lisenssillä. Käytä tätä JSON-muotoista dataa kaavioiden piirtämiseen Chart.js:n avulla.


