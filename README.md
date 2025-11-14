# Login App

Ein von Grund auf neu erstelltes Angular-Projekt (`ng new login-app`) mit einem eigenständigen Login-Formular.

## Voraussetzungen

- Node.js 18 oder höher (getestet mit Node 22)
- npm 9 oder höher
- (Optional) Angular CLI global installiert (`npm install -g @angular/cli`)

## Installation & Nutzung

```bash
npm install
npm start
```

Der Development-Server läuft anschließend unter `http://localhost:4200/`.

## Projektstruktur

Das Projekt umfasst **5 aktuell vorhandene Ordner** und ist wie folgt gegliedert:

```
login-app/
├─ docs/
│  └─ .gitkeep
├─ src/
│  ├─ app/
│  │  ├─ login/
│  │  │  ├─ login.component.ts
│  │  │  ├─ login.component.html
│  │  │  ├─ login.component.css
│  │  │  └─ login.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.css
│  │  ├─ app.component.spec.ts
│  │  ├─ app.config.ts
│  │  └─ app.routes.ts
│  ├─ assets/
│  │  └─ .gitkeep
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.css
│  └─ test.ts
├─ angular.json
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
└─ tsconfig.spec.json
```

> Weitere Verzeichnisse wie `node_modules`, `dist` oder `coverage` entstehen automatisch durch die npm-Skripte.

## Wichtige Skripte (package.json)

- `npm start` – startet den lokalen Development-Server (`ng serve`).
- `npm run build` – erzeugt ein Produktionsbuild im Ordner `dist/login-app`.
- `npm test` – führt Unit-Tests mit Karma/Jasmine aus.
- `npm run watch` – buildet im Watch-Modus.

## Login-Komponente

Die Login-Komponente (`src/app/login/login.component.ts`) ist als Standalone-Komponente umgesetzt und nutzt das `ReactiveFormsModule`. Das Formular enthält zwei Felder:

- **Username** – Pflichtfeld, mindestens 3 Zeichen
- **Password** – Pflichtfeld, mindestens 6 Zeichen

Beim Absenden (`onSubmit`) wird der Formularstatus geprüft und bei gültigen Eingaben eine Meldung in der Konsole ausgegeben. Weitere Business-Logik war laut Vorgabe nicht erforderlich.

## Routing

Die Anwendung besteht aus einer Route (`/`), die direkt zur Login-Komponente führt. Die Routen werden in `src/app/app.routes.ts` definiert und über `app.config.ts` im Bootstrap-Prozess registriert.

## Styling

Globale Stile befinden sich in `src/styles.css`. Komponenten-spezifische Stile liegen in den jeweiligen `.css` Dateien. Das Layout setzt auf ein schlichtes Card-Design mit einem dunklen Hintergrund und farblichen Akzenten für Interaktions-Elemente.

## Tests

Für `AppComponent` und `LoginComponent` existieren einfache Unit-Tests, die das erfolgreiche Erzeugen der Komponenten sicherstellen.

Viel Erfolg beim weiteren Ausbau der Login-App!