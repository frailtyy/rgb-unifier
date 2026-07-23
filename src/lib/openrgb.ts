// Simple OpenRGB TCP client (port 6742)
import net from 'net';

export class OpenRGBClient {
  private socket: net.Socket;
  constructor(public host: string = '127.0.0.1', public port: number = 6742) {
    this.socket = new net.Socket();
    this.socket.connect(this.port, this.host, () => {
      console.log('Connected to OpenRGB daemon');
    });
  }

  sendCommand(command: string) {
    this.socket.write(command + '\n');
  }

  // add methods for setting colors, modes etc.
}
