# Datan visualisointi Chart.js:llä ja D3:lla

Tässä harjoituksessa rakennat vaiheittain saavutettavan ja responsiivisen
visualisointisivun. Kaaviot piirretään Chart.js 4:llä ja aineistot luetaan sekä
muokataan D3 7:llä.

## Käytetyt teknologiat

- [Chart.js 4](https://www.chartjs.org/docs/latest/): interaktiiviset kaaviot
- [D3 7](https://d3js.org/): CSV- ja JSON-aineistojen käsittely
- [Webpack 5](https://webpack.js.org/): kehityspalvelin ja tuotantokäännös

## Aloitus

```sh
npm install
npm start
```

Avaa selainosoite <http://localhost:8080>. Tuotantoversion voit tarkistaa
komennolla `npm run build`.

## Harjoitus: 10 vaihetta

Tee vaiheet järjestyksessä ja varmista selaimessa, että kunkin vaiheen tulos
toimii ennen seuraavaa vaihetta.

1. **Tutustu lähtökohtaan.** Käynnistä sovellus ja lue `src/app.js`,
   `public/index.html` sekä `public/styles/main.css`. Tunnista, miten
   `chart.js/auto` tuodaan ES-moduulina ja mihin `barChart`-canvas piirtyy.

2. **Tee pylväskaaviosta ymmärrettävä.** Muokkaa lähtökaavion otsikko,
   aineiston nimi ja akselien otsikot kuvaamaan valitsemaasi pientä
   aineistoa. Käytä Chart.js 4:n `plugins.title`- ja `scales`-asetuksia.

3. **Tee ensimmäisestä kaaviosta responsiivinen.** Sijoita canvas
   `.chart-container`-elementtiin ja määritä kaavion asetukset niin, että se
   mukautuu näytön leveyteen. Lisää canvasille kuvaava otsikko tai sitä
   vastaava saavutettava nimi.

4. **Lisää viivakaavion rakenne.** Lisää `lineChart`-canvas samaan
   kaaviokonttiin ja luo sille oma 2D-konteksti. Piirrä aluksi pienellä
   kovakoodatulla aineistolla viivakaavio, jotta HTML-rakenne ja Chart.js 4
   -asetukset ovat kunnossa.

5. **Lisää väestöaineisto.** Lataa
   [Gapminderin väestöaineisto](https://gapm.io/dl_popv8), poista otsikko- ja
   alaviiterivit sekä maanosien ja maailman summat. Tallenna jäljelle jäävä
   välilehti puolipiste-eroteltuna tiedostoon `public/data.csv`. Aineisto on
   lisensoitu [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

6. **Lue ja validoi CSV D3:lla.** Hae `data.csv` `fetch`-kutsulla, tarkista
   vastaus ja parsea teksti `d3.dsvFormat(';')`-parserilla. Johda
   vuosikentät säännöllisellä lausekkeella, muunna väestöarvot numeroiksi ja
   käsittele tyhjä tai virheellinen aineisto käyttäjälle näkyvällä virheellä.

7. **Piirrä väestökaaviot datasta.** Käytä uusimman vuoden arvoja
   pylväskaavion sarjoina. Muodosta viivakaavioihin maakohtaiset datasetit
   vuosista ja arvoista; käytä selkeitä värejä, pisteiden hover-tietoja ja
   otsikkoa, joka kertoo valitun ajanjakson.

8. **Lisää kaupunkiaineisto ja hajontakaavio.** Luo `public/data.json`, joka
   sisältää vähintään kaupungin nimen, väkiluvun ja maapinta-alan. Hae se
   `fetch`-kutsulla, muunna havainnot `{ x, y }`-muotoon D3:n avulla ja piirrä
   `scatterChart`-canvasiin hajontakaavio. Käytä molemmilla akseleilla
   logaritmista asteikkoa, jotta pienet ja suuret kaupungit näkyvät samalla
   kaaviolla.

9. **Paranna käytettävyyttä.** Lisää kaavioille kuvaavat otsikot ja
   saavutettavat canvas-nimet, yksiköt akselien otsikoihin sekä tooltipit,
   joissa näkyy kaupungin tai maan nimi ja muotoiltu arvo. Varmista, että
   legenda ja värit ovat luettavia myös pienellä näytöllä.

10. **Jaa vastuut ja viimeistele.** Siirrä kaavioiden luonti
    `src/components/chartDrawer.js`-moduuliin (`drawBarChart`,
    `drawLineChart` ja `drawScatterChart`). Pidä `app.js`:ssä aineistojen
    haku ja muuntaminen. Laske D3:lla kaupunkien väkiluvun mediaani ja esitä
    se hajontakaaviossa selkeästi nimettynä viivana tai annotaationa. Tarkista
    lopuksi tuotantokäännös komennolla `npm run build`.

## Projektin rakenne

```text
public/
  index.html
  styles/main.css
  data.csv                 # vaiheessa 5 lisättävä väestöaineisto
  data.json                # vaiheessa 8 lisättävä kaupunkiaineisto
src/
  app.js
  components/chartDrawer.js # vaiheessa 10 lisättävä moduuli
```
