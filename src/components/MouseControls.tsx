import React, { useState } from 'react';
import { Monitor } from 'lucide-react';

export default function MouseControls() {
  const [dpi, setDpi] = useState(800);
  const [pollRate, setPollRate] = useState(500);

  const handleApply = () => {
    // @ts-ignore
    window.api.setDPI(dpi);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 flex items-center"><Monitor className="mr-2" />Mouse Settings</h2>
      <div className="space-y-4">
        <label className="block">DPI: {dpi}</label>
        <input type="range" min={200} max={6200} step={100} value={dpi} onChange={e => setDpi(Number(e.target.value))} className="w-full" />
        <label className="block">Polling Rate (Hz): {pollRate}</label>
        <select value={pollRate} onChange={e => setPollRate(Number(e.target.value))} className="bg-gray-700 text-white p-2 rounded">
          {[125,250,500,1000].map(v => (
            <option key={v} value={v}>{v} Hz</option>
          ))}
        </select>
        <button onClick={handleApply} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded">Apply Mouse Settings</button>
      </div>
    </section>
  );
}
