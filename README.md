# D3-visualisointiharjoitukset

Tässä harjoituksessa rakennat neljä saavutettavaa ja responsiivista
visualisointia D3 7:llä. Aineistot luetaan, muunnetaan ja piirretään SVG:hen
D3:n moderneilla moduulirajapinnoilla.

## Käytetyt teknologiat

- [D3 7](https://d3js.org/): aineistojen käsittely ja SVG-visualisoinnit
- [Webpack 5](https://webpack.js.org/): kehityspalvelin ja tuotantokäännös

## Aloitus

```sh
npm install
npm start
```

Avaa selainosoite <http://localhost:8080>. Tuotantoversion voit tarkistaa
komennolla `npm run build`.

## Harjoitukset

Tee jokainen harjoitus omaan moduuliinsa `src/components`-hakemistossa ja tuo
moduuli `src/app.js`:ään. Lisää sivulle jokaiselle visualisoinnille otsikko,
kuvaava teksti ja oma SVG-elementti.

### 1. SVG-pylväskaavio

Luo pieni CSV-aineisto, jossa on vähintään viisi luokkaa ja numeerinen arvo
kullekin luokalle. Lue aineisto `d3.csv`-funktiolla ja piirrä SVG:hen
pylväskaavio.

- Muunna arvosarake numeroksi rivimuuntajalla.
- Johda x- ja y-asteikot `d3.scaleBand`- ja `d3.scaleLinear`-funktioilla.
- Lisää akselit `d3.axisBottom`- ja `d3.axisLeft`-funktioilla.
- Näytä arvo pylvään yhteydessä ja varmista, että asteikko alkaa nollasta.

### 2. Aikasarjan viivakaavio

Valitse vuosittainen aineisto, esimerkiksi lämpötila-, myynti- tai
väestötiedot, ja tallenna se CSV-muodossa. Visualisoi aineisto SVG:n
viivakaaviona.

- Muunna päivämäärät `d3.timeParse`-funktiolla ja arvot numeroiksi.
- Käytä `d3.scaleTime`- ja `d3.scaleLinear`-asteikkoja.
- Luo viiva `d3.line`-generaattorilla ja lisää molemmat akselit.
- Lisää hover-toiminto, joka näyttää lähimmän havainnon päivämäärän ja arvon.

### 3. Hajontakaavio ja ryhmittely

Luo JSON-aineisto, jossa jokaisella havainnolla on nimi, kaksi numeerista
mittaria ja luokka. Piirrä havainnot hajontakaaviona.

- Hae aineisto `d3.json`-funktiolla ja validoi, että numeeriset arvot ovat
  kelvollisia.
- Käytä jatkuvia asteikkoja x- ja y-akseleilla sekä
  `d3.scaleOrdinal`-väriasteikkoa luokille.
- Ryhmittele havainnot `d3.group`-funktiolla ja luo legenda ryhmille.
- Näytä tooltipissä havainnon nimi, mittarit ja luokka.

### 4. Interaktiivinen jakaumakaavio

Käytä vähintään 30 numeerisen havainnon aineistoa ja esitä sen jakauma
histogrammina.

- Johda luokat `d3.bin`-funktiolla ja piirrä pylväät SVG:hen.
- Lisää liukusäädin tai valintalista, jolla käyttäjä voi muuttaa luokkien
  määrää.
- Päivitä pylväät D3:n data join -mallilla (`selection.join`) ja animoi
  muutos `transition`-toiminnolla.
- Laske `d3.mean` ja `d3.median`, piirrä niiden kohdalle merkinnät ja kerro
  niiden merkitys sivun tekstissä.

## Yhteiset viimeistelyvaatimukset

- Käytä `viewBox`-attribuuttia ja CSS:ää, jotta SVG:t toimivat eri kokoisilla
  näytöillä.
- Lisää SVG:lle `role="img"` sekä `title`- ja `desc`-elementit.
- Käytä värejä, tekstiä ja muotoja niin, ettei tieto ole vain värin varassa.
- Tarkista lopuksi tuotantokäännös komennolla `npm run build`.

## Projektin rakenne

```text
public/
  index.html
  styles/main.css
  data.csv                 # harjoitusten 1 ja 2 aineistot
  data.json                # harjoituksen 3 aineisto
src/
  app.js
  components/              # harjoitusten visualisointimoduulit
```
