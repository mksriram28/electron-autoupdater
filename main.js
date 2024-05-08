const { app, BrowserWindow,ipcMain } = require('electron')
const os = require('os');
const path = require('path');

let win;

const createWindow = () => {
     win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        devTools:true,
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
      },
    })
  
    win.loadFile(path.join(__dirname,'index.html'))
  }

  app.whenReady().then(() => {
    createWindow()
  })

  ipcMain.on("senddata:tomain",(event,data)=>{
    console.log(data)
    win.webContents.send("sendingdatafrombackend",{
        "msg":"sending data"
    })
  })