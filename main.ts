import { app, BrowserWindow } from 'electron'
import path from 'path'

const isDevelopment = process.env.NODE_ENV === 'development'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDevelopment) {
    win.loadURL('http://localhost:5173')
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  if (isDevelopment) {
    win.webContents.openDevTools()
  }
}

if (isDevelopment) {
  try {
    const electronReload = require('electron-reload')
    electronReload(__dirname, {
      electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
      hardResetMethod: 'exit'
    })
  } catch (error) {
    console.error('Error setting up electron-reload:', error)
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})