# QuickAudit

**QuickAudit** is a simple, local-first audit tracker tool.  
Track item types, counts, notes, and audit titles — all saved automatically.

---

## Features

- Add, edit, and delete item types
- Adjust counts easily (+ / -)
- Custom audit title
- Notes section
- Save/load automatically (local file storage)
- Export results to clipboard
- "Danger Zone" to clear counts or delete the list

---

## How to Use

1. Open the app.
2. Enter an audit title (optional).
3. Add item types and update counts.
4. Write notes if needed.
5. Click **Export** to copy the audit to clipboard.
6. Use **Clear All Counts** or **Delete List** when needed.

---

## Technology

- **HTML / CSS / JavaScript**
- **Electron** (for packaging into a desktop app)
- Saves data locally as `data.json`

---

## Build Locally (Optional)

If you want to create a standalone app:

```bash
npm install
npm start
# or
npm run make
```

Electron Forge will package it for your OS.

---

## License

MIT License.  
Free to use, customize, and share.

