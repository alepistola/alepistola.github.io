# picture.md — linee guida per immagini, illustrazioni, grafici e animazioni

Regole per tutto ciò che è visivo e non è testo: figure negli articoli, grafici, illustrazioni, immagini satellitari, animazioni. L'obiettivo è che ogni figura sembri uscita dallo stesso strumento che ha prodotto il sito. Le regole generali del sito sono in [stile.md](stile.md).

## 1. Principio

Una figura del sito è una **schermata di uno strumento di lavoro**, non un'illustrazione decorativa. Ha un'intestazione, mostra un dato o un'immagine reale, e ha una didascalia che dice cosa si sta guardando.

Prima di creare una figura, rispondi a una domanda: cosa deve capire il lettore guardandola per tre secondi? Se non c'è risposta, la figura non serve.

## 2. Palette

Si usano solo i colori del sito. I valori esatti sono in `stile.md`; qui i ruoli nelle figure.

| Ruolo | Scuro | Chiaro |
|---|---|---|
| Fondo della figura | `#0f1619` | `#fbfaf6` |
| Griglia, assi | `#1f2b30` | `#dcd9cc` |
| Testo, etichette | `#8c9ba0` | `#566267` |
| Serie principale | verde `#6fe3a1` | `#0c7641` |
| Serie di confronto, soglie, evidenze | ambra `#f0b54a` | `#99560a` |
| Serie secondarie, contesto | grigio `#5f6e73` | `#7d878a` |

- Massimo **due serie colorate** per grafico (verde e ambra). Dalla terza in poi si usa il grigio e si distingue con il tratteggio o con un'etichetta diretta.
- Il verde è "il nostro modello" o "il dato principale". L'ambra è "il riferimento", "la soglia" o "il punto da notare".
- Per mappe di calore e maschere: scala a un solo colore, dal fondo al verde. Per scale divergenti: ambra ↔ verde con il fondo al centro.
- Mai rosso/verde come coppia di significato: non si distingue per chi è daltonico.

## 3. Grafici

- **Formato**: SVG scritto a mano o esportato, incorporato nella pagina, con i colori presi dalle variabili CSS (`var(--green)`, `var(--amber)`, `var(--line)`, `var(--mute)`). Così il grafico cambia da solo tra scuro e chiaro.
- **Cornice**: riquadro con bordo 1px, raggio 8px, intestazione in mono 11.5px con il nome della figura a sinistra (stile nome di funzione o di file: `career.fit()`, `iou_by_epoch.csv`) e la legenda a destra.
- **Testo**: JetBrains Mono, 9.5–11px nel disegno. Minuscolo. Niente titolo dentro il grafico: il titolo è nell'intestazione.
- **Linee**: 1.6–1.8px, giunzioni arrotondate. La serie di confronto è tratteggiata (`5 3`). Le soglie sono puntinate (`1 5`).
- **Griglia**: solo orizzontale, 1px in `--line`. Niente cornice attorno all'area del grafico.
- **Etichette dirette**: scrivi il valore accanto al punto che conta, invece di costringere a leggere l'asse. L'ultimo punto di una serie ha un cerchio pieno.
- **Assi**: solo i valori che servono. Unità nell'etichetta dell'asse o nell'intestazione.
- **Barre**: piene, senza bordo, raggio 0. Meglio orizzontali, con il valore a destra della barra.
- **Didascalia**: sotto, in mono 11px grigio, formato `fig. N — cosa mostra`. Se il grafico è illustrativo e non mostra dati reali, la didascalia lo dice esplicitamente.

Con matplotlib o simili: fondo `#0f1619`, niente bordi superiore e destro, font JetBrains Mono, colori della tabella sopra, esportazione SVG. Va prodotta anche la versione chiara, oppure si accetta che la figura resti scura in entrambe le modalità (come i blocchi di codice).

## 4. Immagini satellitari e fotografie

Sono il materiale più forte del sito: vanno mostrate come dati, non come sfondo.

- **Cornice**: stessa del grafico. Nell'intestazione il nome della scena e la fonte (`corona_ds1039_1968.tif`, `sentinel-2 · 2024-06-12`).
- **Sovrapposizioni**: le previsioni del modello in verde, le annotazioni di riferimento in ambra, linea da 1.5px, riempimento al 15% di opacità al massimo. Mai coprire l'immagine.
- **Sempre presenti**: barra di scala, nord se l'immagine non è orientata a nord, coordinate o nome del luogo nella didascalia.
- **Confronti prima/dopo**: affiancati con la stessa inquadratura e la stessa scala, oppure un cursore. Etichetta dell'anno in alto a sinistra di ogni riquadro, in mono.
- **Trattamento**: nessun filtro, nessuna saturazione aumentata. Le immagini in bianco e nero (CORONA) restano in bianco e nero. Se serve contrasto, dichiaralo nella didascalia.
- **Licenze**: CORONA è declassificata e di pubblico dominio (USGS). Sentinel e Landsat sono liberi con attribuzione. Le immagini di Bing, Google o Maxar **non** si pubblicano. La fonte va sempre nella didascalia.
- **Fotografie personali**: bordo 1px, raggio 8px, nessuna cornice con intestazione. Didascalia con luogo e anno.

## 5. Illustrazioni e schemi

Per spiegare un'architettura, una pipeline o un concetto.

- **Stile**: disegno al tratto, linee da 1.5px in `--mute` su fondo `--panel`. Niente riempimenti pieni tranne per l'elemento su cui si vuole l'attenzione (verde o ambra).
- **Forme**: rettangoli con raggio 4px per i moduli, frecce semplici con punta piccola. Niente icone, niente 3D, niente prospettiva isometrica.
- **Etichette**: mono minuscolo, 10–11px, dentro o accanto alla forma. I nomi dei tensori e delle dimensioni come nel codice (`[B, C, H, W]`).
- **Griglia**: allinea tutto a multipli di 8px. Uno schema ordinato si legge prima di uno bello.
- **Uno schema, un'idea.** Se servono più di sette blocchi, sono due schemi.
- Niente illustrazioni generate con stile pittorico, personaggi o metafore visive (cervelli, robot, lampadine).

## 6. Animazioni e figure interattive

Si usano solo quando il movimento spiega qualcosa che un'immagine ferma non può: un cambiamento nel tempo, un prima/dopo, l'effetto di un parametro.

- **Il primo fotogramma deve funzionare da solo.** La figura ferma, senza interazione, deve già comunicare il punto. Vale anche per chi ha il JavaScript disattivato.
- **Parte dal lettore, non da sola.** Niente riproduzione automatica in ciclo. Un pulsante `▶ play`, un cursore o il passaggio del mouse. Unica eccezione: le due animazioni di sistema del sito (pallino e cursore).
- **Durata**: transizioni tra 150 e 400ms, curva `ease-out`. Sequenze temporali: massimo 8 secondi, con un cursore per andare avanti e indietro.
- **`prefers-reduced-motion`**: l'animazione viene sostituita dallo stato finale o da una serie di fotogrammi affiancati.
- **Controlli**: in mono, stile etichetta (`epoch: 12`, `threshold: 0.50`), con il valore in ambra. Cursori e pulsanti usano i colori del sito, non quelli del browser.
- **Formato**: SVG o Canvas con poco JavaScript, senza librerie pesanti. Video solo per riprese reali (MP4, senza audio, con immagine di anteprima). Mai GIF: pesano troppo e non si possono mettere in pausa.
- **Peso**: una figura interattiva non deve aggiungere più di 100 KB alla pagina.

## 7. Formati, dimensioni e file

| Tipo | Formato | Larghezza | Note |
|---|---|---|---|
| Grafico, schema | SVG | fluida, `viewBox` | Colori da variabili CSS |
| Immagine satellitare, foto | WebP o AVIF, con PNG di riserva | 1280px (2× di una colonna da 640px) | Sotto i 300 KB |
| Immagine a tutta larghezza | WebP | 2160px | Solo se il dettaglio conta |
| Anteprima per i social | PNG 1200×630 | fissa | Fondo `#0a0f11`, titolo in JetBrains Mono 800, percorso `~/alepistola` in alto |

- I file vanno in `public/images/<nome-articolo>/`, con nomi in minuscolo e trattini: `corona-vs-sentinel.webp`.
- In Markdown: `![testo alternativo](/images/nome-articolo/file.webp)`.
- Proporzioni consigliate: 16:10 per i grafici, 3:2 per le foto, 1:1 per i ritagli satellitari.

## 8. Accessibilità

- **Testo alternativo sempre**, e deve dire cosa mostra la figura, non cosa è: "IoU sale da 0.6 a 0.85 in 40 epoche", non "grafico dell'IoU".
- Contrasto minimo 4.5:1 per il testo nelle figure, 3:1 per linee e forme che portano informazione.
- L'informazione non passa mai solo dal colore: aggiungi tratteggio, forma o etichetta.
- Le figure interattive si usano anche da tastiera.

## 9. Controllo prima di pubblicare

- [ ] Si capisce il punto in tre secondi?
- [ ] Usa solo verde, ambra e grigi del sito?
- [ ] Il testo è in JetBrains Mono, minuscolo?
- [ ] Ha intestazione, didascalia `fig. N —` e fonte?
- [ ] Funziona in scuro e in chiaro (o resta volutamente scura)?
- [ ] Ha il testo alternativo?
- [ ] Se è un'immagine satellitare: scala, luogo, licenza a posto?
- [ ] Se si muove: funziona da ferma e rispetta `prefers-reduced-motion`?
