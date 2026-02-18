# GEMINI.md

## Project Overview
**ADA Pool Europe** is a multi-language landing page for a Cardano stake pool (ticker: `EUR`). It provides real-time pool statistics (ROA, pledge, stake, etc.) by fetching data from the CExplorer API and offers a professional, interactive interface for potential delegators.

### Core Technologies
- **Bundler:** [Parcel](https://parceljs.org/)
- **Language:** TypeScript
- **Styling:** SCSS / Sass (based on HTML5 UP "Stellar" template)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Interactivity:** jQuery (inherited from template), Particles.js, TradingView Widgets

---

## Building and Running

### Development
To start the local development server with hot-reloading:
```bash
npm start
# or
pnpm start
```

### Production Build
To generate a production-ready build in the `dist/` directory:
```bash
npm run build
# or
pnpm build
```

---

## Project Structure & Architecture

### Key Directories
- `assets/ts/`: Contains the core logic and internationalization setup.
- `assets/ts/content/`: Language-specific content files (English, French, etc.).
- `assets/ts/models/`: TypeScript interfaces for data structures.
- `assets/sass/`: SCSS source files for the project's styling.
- `assets/js/`: Static and vendor JavaScript files.
- `images/`: Project assets including logos and banners.

### Important Files
- `assets/ts/controller.ts`: Main logic for fetching pool data from the API and updating the DOM.
- `assets/ts/config.ts`: Configuration constants like `API_Url` and `TIMEOUT_SECONDS`.
- `assets/ts/i18n.ts`: Internationalization logic, language detection, and content updating.
- `index.html`: The main entry point for the application.
- `poolMetaData.json`: On-chain metadata for the Cardano stake pool.

---

## Development Conventions

### Internationalization (i18n)
Translations are managed via TypeScript files in `assets/ts/content/`. When adding new UI elements, ensure they are added to all language files and linked in `assets/ts/i18n.ts`'s `updateContent` function.

### Data Fetching
The application uses the `fetch` API wrapped in an `AJAX` helper (in `controller.ts`) to handle timeouts and errors when interacting with the Cardano pool API.

### Styling
Avoid modifying `assets/css/` directly as it may be overwritten or ignored. Make styling changes in `assets/sass/` and let Parcel handle the compilation.
