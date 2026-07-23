# Welche Datei gehört wohin

Es gibt zwei Repositories. Nichts davon wird auf dem Handy geöffnet – alles
läuft am PC über github.com. Das Handy ruft am Ende nur eine Adresse auf.

---

## Repository 1: `pkm-scanner` (hast du schon)

Hier läuft der tägliche Scan. Drei Dateien sind zu ersetzen, damit der neue
Reiter „Alle" funktioniert.

**Ins Hauptverzeichnis** (die Ebene, auf der `scan.py` und `alerts.json` liegen):

| Datei | ersetzt die alte |
|---|---|
| `scan.py` | ja |
| `app.html` | ja |

**In den Ordner `docs/`** (im Repository auf `docs` klicken, dann hochladen):

| Datei | ersetzt die alte |
|---|---|
| `app.html` | ja |
| `index.html` | ja |

Beide Dateien in `docs/` sind inhaltlich gleich – GitHub braucht sie nur unter
zwei Namen.

**Danach:** Reiter **Actions** → **Täglicher Pokémon-Scan** → **Run workflow**.
Erst dieser Lauf erzeugt `products.json`, also den Gesamtkatalog.

---

## Repository 2: `plasma19911.github.io` (neu anzulegen)

Das ist der Starter mit den zwei Kacheln. Der Name muss exakt so lauten,
sonst landet er nicht auf der Wurzel deiner Adresse.

**Alles ins Hauptverzeichnis, keine Unterordner:**

| Datei | wofür |
|---|---|
| `index.html` | die Startseite mit den Kacheln |
| `apps.json` | welche Kacheln erscheinen |
| `manifest.json` | macht sie installierbar |
| `sw.js` | hält sie offline verfügbar |
| `icon-192.png` | Symbol auf dem Homescreen |
| `icon-512.png` | Symbol in groß |
| `.nojekyll` | leere Datei, verhindert GitHubs Seitengenerator |

`Starter_einrichten.md` und `make_icons.py` sind nur Beiwerk und müssen nicht
hochgeladen werden.

**Danach:** **Settings → Pages** → *Source*: **Deploy from a branch** →
Branch **main**, Ordner **/ (root)** → **Save**.

---

## So lädst du hoch

1. Repository auf github.com öffnen
2. Soll die Datei in einen Unterordner, diesen vorher anklicken
3. **Add file → Upload files**
4. Dateien aus deinem Download-Ordner ins Fenster ziehen
5. Unten **Commit changes**

Gleichnamige Dateien werden dabei überschrieben – das ist so gewollt.

---

## Und dann das Handy

Erst wenn beides steht, am Handy im Browser aufrufen:

```
https://plasma19911.github.io/
```

Dort erscheinen die zwei Kacheln. Über das Browsermenü auf den Homescreen
legen:

- **Android (Chrome):** Menü ⋮ → „App installieren"
- **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm"

Die heruntergeladenen Dateien direkt am Handy anzutippen bringt nichts – dann
zeigt Android nur den Quelltext. Es braucht den Umweg über GitHub, weil erst
dort ein Server daraus eine Webseite macht.
