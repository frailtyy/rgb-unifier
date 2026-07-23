import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  setDPI: (dpi: number) => ipcRenderer.invoke('hid-set-dpi', dpi),
  setOpenRGBColor: (deviceId: number, color: string) => ipcRenderer.invoke('openrgb-set-color', deviceId, color)
});