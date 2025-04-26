const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const dataPath = path.join(app.getPath("userData"), "data.json");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
}

ipcMain.handle("load-data", () => {
  if (!fs.existsSync(dataPath)) return { chargers: {}, notes: "" };
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
});

ipcMain.on("save-data", (event, data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
