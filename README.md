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
   cd Datan-visualisointi-ChartJS-<oma-tunnus>
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
   Siirry osoitteeseen [`http://localhost:8080`](http://localhost:8080) nähdäksesi sovelluksen.

5. **Hae data:**
   Lataa tiedosto osoitteesta [https://gapm.io/dl_popv8](https://gapm.io/dl_popv8). Tiedosto sisältää maiden väkilukuja ja on XLSX-muodossa, joten avaa se Excel-ohjelmalla. Olemme kiinnostuneita välilehden **data-pop-gmv8-in-columns** datasta. Poista datasta ylimääräiset rivit: kaksi ylintä riviä sekä seitsemän alinta riviä, joissa on maanosien ja koko maailman väkiluvut. Tallenna kyseisen välilehden sisältämä data CSV-muodossa tiedostoon `data.csv`, joka sijoitetaan `public`-kansioon. Muokkaa dataa tarvittaessa, jotta voit käyttää sitä kuvaajien piirtämiseen Chart.js:n avulla.  
   Data on lisensoitu [Creative Commons License CC BY 4.0](https://docs.google.com/document/d/1-RmthhS2EPMK_HIpnPctcXpB0n7ADSWnXa5Hb3PxNq4/edit?usp=sharing).

6. **Käytä chart-container-tyyliä kaavioiden ympärillä:**
   Tiedostossa [`main.css`](public/styles/main.css) on määritelty tyyli `.chart-container`, jota tulisi käyttää kaavioiden asettelussa. Lisää [`index.html`](public/index.html)-tiedostoon uusi `<div class="chart-container">`, jonka sisälle sijoitat kaikki kaavioiden `<canvas>`-elementit. Tämä parantaa kaavioiden ulkoasua ja keskittää ne.

7. **Uusi canvas-elementti viivadiagrammille:**
   Nimeä myChart nimellä oleva komponentti barChart:iksi ja tee uusi canvas-elementti `<canvas id="lineChart" width="400" height="200">`, johon piirretään viivadiagrammi sovelluksen JavaScript-koodissa.

8. **Käytä D3-kirjastoa CSV-tiedoston parsimiseen**
   D3 on kattava kirjasto laajojen raportointi sovellusten tekemiseen. Tässä tehtävässä tarvitaan kirjastosta CSV-tiedoston parsintaan funktiota. Tuo D3-kirjasto mukaan projektiin:
   ```
   npm install d3
   ```
   Tämän jälkeen [`package.json`](package.json)-tiedostossa tulisi olla seuraava riippuvuus
   ```
   "dependencies": {
     "chart.js": "^3.7.0",
     "d3": "^7.9.0"
   }
   ```
   Sekä lisäksi [`app.js`](src/app.js)-tiedostoon tms. alkuun import-komennolla esimerkiksi:
   `import * as d3 from 'd3';`

   Seuraavan koodin avulla saat varmistettua että HTML-tiedostosta muodostettava DOM-puu on kokonaisuudessaan luettu ja poimittua CSV-tiedostosta numeerisen datan ja X-akselille tarvittavat vuodet. Parsimisen ja kontekstien luonnit voidaan tehdä [`app.js`](src/app.js)-tiedostossa tai jossain muussa JavaScript-tiedostossa seuraavasti:
   ```document.addEventListener('DOMContentLoaded', () => {
      const semicolonParser = d3.dsvFormat(";");

      fetch('data.csv')
         .then(response => response.text())
         .then(text => {
            const data = semicolonParser.parse(text);
            const years = Object.keys(data[0]).filter(k => /^\d{4}$/.test(k));
            ...
            const barctx = document.getElementById('barChart').getContext('2d');
            ...
            const linectx = document.getElementById('lineChart').getContext('2d');
            ...
         });
      });
   ```
   bar ja lineChart tulee olla samannimiset kuin `canvas`-elementin id HTML-sivulla. Näitä tarvitaan jokaista piirrettävää kaaviota varten omansa. CSV-tiedostosta saatu data on varsin moniulotteista, koska jokaisesta maasta on jokaiselle vuodelle oma lukuarvonsa. Label on valtion nimi, X-akselille tulee vuodet ja Y-akselille tulee väkiluvut seuraavalla datan mäppäyksellä:
   ```
      const datasets = data.map((row, idx) => ({
        label: row.name,
        data: years.map(y => row[y]),
        borderColor: `hsl(${(idx * 60) % 360}, 80%, 60%)`,
        fill: false,
        tension: 0.1
      }));
   ```
   

9. **Muokkaa ja käytä JSON-dataa:**
   Lataa Suomen kaupunkien tiedot (väkiluku, pinta-ala jne.) esimerkiksi Wikipedia-sivulta [https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista](https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista). Tallenna tiedot JSON-muotoon tiedostoon `data.json` ja sijoita se `public`-kansioon. Voit käyttää tätä dataa esimerkiksi scatter plot -kaavion piirtämiseen Chart.js:llä, jossa vertaillaan kaupunkien pinta-alaa ja väkilukua. 

   Koska Suomessa on hyvin erikokoisia kaupunkeja väkiluvultaan ja kooltaan kannattaa kaaviota luotaessa käyttää Y ja X-asteikossa logaritmista asteikkoa. Esimerkiksi näin:
   ```
      scales: {
        x: {
          type: 'logarithmic',
          title: {
            display: true,
            text: 'Maapinta-ala (km²)'
          }
        },
        y: {
          type: 'logarithmic',
          title: {
            display: true,
            text: 'Väkiluku'
          }
        }
      }   
   ```

10. **Kaavioiden piirtäminen omaksi komponentikseen**

   Tiedosto [`app.js`](src/app.js) on kasvanut kolmen kaavion piirtämisestä suureksi ja kaavion piirtäminen on selvästi erilainen toiminto kuin muu tiedostossa oleva toteutus. Tämän vuoksi kannattaa tehdä erillinen tiedosto jossa kaavioiden piirto on jaettu omiin funktioihin. Tee tiedosto `chartDrawer.js` hakemistoon `src/components` ja tee tiedostoon kolme funktiota, jotka importoit [`app.js`](src/app.js)-tiedostoon:
   ```
   export function drawBarChart(ctx, labels, latestValues, latestYear)
   ...
   export function drawLineChart(ctx, years, datasets)
   ...
   export function drawScatterChart(ctx, scatterData)
   ```
