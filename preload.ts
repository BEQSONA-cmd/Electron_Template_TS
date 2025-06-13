import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  // Your exposed APIs here
  example: () => ipcRenderer.invoke('example')
})