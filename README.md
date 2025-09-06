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

Tässä tehtävässä tehdään interaktiivisia kaavioita Chart.js:n avulla. Tehtävän ensimmäisessä osassa haetaan Excel-tiedostosta olevaa dataa ja piirretään kahden tyyppisiä kaavioita sen pohjalta. 
Aloittaaksesi projektin käytön, toimi seuraavasti:

1. **Kloonaa repositorio:**
   ```
   git clone <repository-url>
   cd Data-visualization-ChartJS-<oma-tunnus   .github/
   ├── classroom/
   │   └── assignment.md         # Ohjeet ja tehtävänanto opiskelijoille
   └── workflows/
       └── autograding.yml       # Autograding workflow-tiedosto>
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

6. **Käytä JSON-muotoista dataa:**
   Data tiedostossa [data.json](./data.json) on parsittu osoitteesta [https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista](https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista). Data on lisensoitu Creative Commons Attribution/Share-Alike -lisenssillä. Käytä tätä JSON-muotoista dataa kaavioiden piirtämiseen Chart.js:n avulla.

## Käytetyt teknologiat

- [Chart.js](https://www.chartjs.org/): Kaavioiden piirtämiseen
- [Node.js](https://nodejs.org/): Palvelimen puolen JavaScriptin suorittamiseen

## Ominaisuudet

- Interaktiiviset ja responsiiviset kaaviot Chart.js:n avulla
- Datan lataaminen ja käsittely palvelimen puolella Node.js:n ja Expressin avulla
- Tiedostojen lataaminen ja käsittely Multerin avulla
- Kehitysympäristössä automaattinen palvelimen uudelleenkäynnistys Nodemonin avulla

## Tulevat parannukset

- Lisää kaaviotyyppejä ja -vaihtoehtoja käyttäjän tarpeiden mukaan
- Käyttäjäystävällisempi käyttöliittymä ja käyttökokemus
- Mahdollisuus tallentaa ja jakaa luotuja kaavioita
- Laajempi valikoima datalähteitä ja integraatioita
- Monikielinen tuki ja saavutettavuuden parantaminen

