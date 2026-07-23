// Placeholder HID module for HP G360 mouse
import HID from 'node-hid';

export function listDevices() {
  return HID.devices().filter(d => d.product && d.product.includes('HP G360'));
}

export function setDPI(devicePath: string, dpi: number) {
  // Implementation would send a feature report to the device
  console.log(`Setting DPI to ${dpi} on ${devicePath}`);
}

export function setPollingRate(devicePath: string, rate: number) {
  console.log(`Setting polling rate to ${rate}Hz on ${devicePath}`);
}

export function setLighting(devicePath: string, mode: string) {
  console.log(`Setting lighting mode ${mode} on ${devicePath}`);
}
