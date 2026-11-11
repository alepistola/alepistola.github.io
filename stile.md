# stile.md — linee guida di stile, design, UI e UX

Questo file descrive le regole con cui è costruito il sito. Va letto prima di aggiungere una sezione, una pagina o un componente, da una persona o da un agente. Per immagini, grafici e animazioni vedi [picture.md](picture.md).

## 1. Idea

Il sito si chiama **Experiment Log**. La carriera è presentata come un registro di esperimenti di machine learning: le esperienze sono *run*, i risultati sono *metriche*, la pubblicazione è un *artifact*, gli articoli sono un *log* di commit.

La metafora serve a far capire in pochi secondi che lavoro fa chi scrive. Non deve mai rendere il contenuto più difficile da leggere. Tre regole la tengono a bada:

1. **È un sito, non un finto terminale.** I tocchi da riga di comando (`$ whoami`, `ls -l`, `./runs`) sono pochi e stanno solo in etichette e intestazioni, mai nel testo che si legge.
2. **Ogni numero è vero.** Metriche, date e conteggi vengono dai file in `content/`. Se un elemento è decorativo (il grafico `career.fit()`), la didascalia lo dice.
3. **Il testo lungo non è monospace.** La bio è in sans, gli articoli in serif.

## 2. Colori

Il sito nasce scuro. La variante chiara segue l'impostazione di sistema del lettore (`prefers-color-scheme`). Tutti i colori sono variabili CSS in `src/styles/global.css`: non si scrivono mai colori letterali nei componenti.

| Variabile | Scuro | Chiaro | Uso |
|---|---|---|---|
| `--bg` | `#0a0f11` | `#f5f4ee` | Fondo pagina |
| `--panel` | `#0f1619` | `#fbfaf6` | Fondo di tabelle, schede, riquadri |
| `--panel2` | `#131c20` | `#efeee6` | Intestazioni di riquadri, riga al passaggio del mouse |
| `--line` | `#1f2b30` | `#dcd9cc` | Bordi e filetti |
| `--line2` | `#2b3a40` | `#c6c3b4` | Bordi più marcati, tag |
| `--fg` | `#dfe6e4` | `#1a2124` | Testo principale |
| `--mute` | `#8c9ba0` | `#566267` | Testo secondario |
| `--dim` | `#5f6e73` | `#7d878a` | Didascalie, dettagli |
| `--green` | `#6fe3a1` | `#0c7641` | Link, stato "attivo", cose in corso o pubblicate |
| `--amber` | `#f0b54a` | `#99560a` | Metriche, evidenze, cose in bozza |

Regole d'uso dei due accenti:

- **Verde** significa *vivo o navigabile*: link, run in corso, articoli pubblicati, il cursore.
- **Ambra** significa *misura o attenzione*: valori delle metriche, il simbolo `#` delle sezioni, i badge di bozza, i numeri delle note a margine.
- Mai un terzo colore d'accento. I colori dei linguaggi nei progetti (`color` in `projects.yaml`) sono l'unica eccezione e restano confinati al pallino.
- Niente sfumature, niente ombre. La profondità si fa con `--panel` su `--bg` e un bordo da 1px.

Il fondo ha una griglia di punti a 24px in `--line`. È l'unica texture del sito.

## 3. Tipografia

Tre famiglie, ognuna con un ruolo fisso. I font sono serviti dal sito stesso (pacchetti `@fontsource`), senza richieste a server esterni.

| Ruolo | Font | Dove |
|---|---|---|
| Struttura | JetBrains Mono | Nome, titoli, etichette, tabelle, metadati, codice, note a margine |
| Lettura breve | IBM Plex Sans | Bio, descrizioni di run e progetti, titoli nel log |
| Lettura lunga | Source Serif 4 | Corpo degli articoli, sommario, citazioni |

Scala e misure:

- Nome in home: mono 800, da 2.5rem a 5.6rem, interlinea 0.92, spaziatura −0.055em.
- Titolo articolo: mono 800, da 1.9rem a 2.9rem.
- Titoli di sezione: mono 700, 13px, maiuscolo, spaziatura 0.08em, preceduti da `#` ambra e seguiti da un filetto.
- Bio: sans 16.5px, interlinea 1.7, massimo 62 caratteri per riga.
- Corpo articolo: serif 19px (18px su telefono), interlinea 1.65, colonna di 640px.
- Etichette e metadati: mono 11–12.5px.

Il grassetto negli articoli è per i termini, non per l'enfasi. Per l'enfasi si usa il corsivo.

## 4. Layout

- Larghezza massima 1080px, margine laterale 20px (14px sotto i 480px).
- Home: una colonna di sezioni, ognuna con intestazione `# NOME` e sottotitolo piccolo.
- Hero e blocco bio/`config.yaml` sono a due colonne sopra gli 860px, a una sotto.
- Riquadri: bordo 1px `--line`, raggio 8px, fondo `--panel`. Tag e badge: raggio 4px. Pillole: raggio pieno.
- Le tabelle scorrono dentro il loro contenitore. La pagina non scorre mai in orizzontale.
- Sotto i 760px la tabella dei run diventa una lista di schede: ogni riga si impila.

### Pagina articolo

- Colonna di testo stretta (640px) allineata a sinistra, con un margine destro di 230px riservato alle note.
- In testa: riga `$ cat writing/<nome>.md`, titolo, barra dei metadati (data, minuti di lettura, stato), sommario in corsivo serif.
- **Note a margine**: si scrivono come normali note a piè di pagina Markdown (`[^1]`). Il sito le sposta accanto alla frase a cui si riferiscono, in mono 12px, con il numero in ambra. Sotto i 1020px la nota si piega sotto il suo paragrafo, con un filetto a sinistra.
- I titoli interni all'articolo (`##`) usano lo stesso stile `# TITOLO` delle sezioni della home, così le due parti del sito si riconoscono come una cosa sola.
- Blocchi di codice: mono 13px, tema scuro in entrambe le modalità, scorrimento orizzontale interno.
- Citazioni: serif corsivo, filetto ambra a sinistra.
- Tabelle negli articoli: mono 13px, intestazioni piccole in maiuscolo, solo filetti orizzontali.

## 5. Componenti

| Componente | Regola |
|---|---|
| Barra in alto | Percorso `~/alepistola`, link di sezione con prefisso `./`, pillola "N run active" solo se c'è almeno un run in corso |
| Scheda `config.yaml` | Mostra le chiavi di `content/config.yaml` nell'ordine del file. Una chiave vuota o assente non compare. `now` è facoltativa |
| Tabella run | Il run in corso ha fondo verde tenue e pallino pulsante. Le metriche hanno la chiave in grigio e il valore in ambra |
| Artifact | Bordo sinistro ambra da 2px. Uno per pubblicazione |
| Progetti | Elenco stile `ls -l`: linguaggio con pallino, nome come link, descrizione in sans |
| Log degli articoli | Linea verticale con un punto per articolo: vuoto ambra per bozze, pieno verde per pubblicati |

## 6. UX e comportamento

- **Niente sezioni vuote.** Ogni sezione compare solo se ha contenuto: senza articoli visibili sparisce "Writing" e anche il suo link in alto. Lo stesso vale per pubblicazioni, progetti e per `now`.
- **Stati degli articoli.** `status` vale `draft`, `wip` o `published`. Solo i pubblicati hanno una pagina e un link. Bozze e lavori in corso compaiono come titoli. `visible: false` toglie l'articolo dal sito del tutto; con `npm run dev` lo si vede comunque, marcato "hidden (dev only)".
- **Il contenuto sta nei file.** Nessun testo del sito è scritto nei componenti: tutto viene da `content/`.
- **Link.** Verdi, con sottolineatura a puntini che diventa continua al passaggio. I link esterni non si aprono in una nuova scheda.
- **Tastiera.** Ogni elemento cliccabile ha un contorno ambra di 2px quando riceve il focus.
- **Movimento.** Solo due animazioni: il pallino che pulsa e il cursore che lampeggia. Entrambe si fermano con `prefers-reduced-motion`. Niente animazioni allo scorrimento.
- **Tono dei testi.** Inglese, prima persona, frasi brevi. Un po' di ironia nelle etichette (`side quests`, `exit code 0`), mai nel contenuto. Le etichette tecniche sono in minuscolo.
- **Prestazioni.** Sito statico, nessun JavaScript nelle pagine. Qualsiasi aggiunta interattiva va giustificata e deve funzionare anche se lo script non si carica.

## 7. Cosa non fare

- Non aggiungere un terzo accento, sfumature o ombre.
- Non usare il monospace per paragrafi di più di due righe.
- Non inventare metriche per riempire una riga della tabella.
- Non aggiungere emoji o icone: i simboli del sito sono caratteri (`#`, `$`, `✓`, `→`, `●`).
- Non trasformare tutto in comandi: un tocco da terminale per sezione è il massimo.
