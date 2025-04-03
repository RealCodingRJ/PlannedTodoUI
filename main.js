import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    height: 330,
    width: 1000,
  });

  win.setMenu(null);
  win.resizable = false;

  win.loadFile("main.html");
};

app.whenReady().then((e) => {
  createWindow();
});
