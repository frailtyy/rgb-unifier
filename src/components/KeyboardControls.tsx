import React, { useState } from 'react';
import { Keyboard } from 'lucide-react';

export default function KeyboardControls() {
  const [zone, setZone] = useState('all');
  const [mode, setMode] = useState('static');
  const [color, setColor] = useState('#ff0000');
  const [brightness, setBrightness] = useState(80);

  const handleApply = () => {
    // @ts-ignore
    window.api.setOpenRGBColor(0, color);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 flex items-center"><Keyboard className="mr-2" />Keyboard Settings</h2>
      <div className="space-y-4">
        <label>Zone:</label>
        <select value={zone} onChange={e=>setZone(e.target.value)} className="bg-gray-700 text-white p-2 rounded">
          <option value="all">All</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        <label>Mode:</label>
        <select value={mode} onChange={e=>setMode(e.target.value)} className="bg-gray-700 text-white p-2 rounded">
          <option value="static">Static</option>
          <option value="wave">Wave</option>
          <option value="pulse">Pulse</option>
        </select>

        <label>Color:</label>
        <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-16 h-8 rounded border-0" />

        <label>Brightness: {brightness}%</label>
        <input type="range" min={0} max={100} value={brightness} onChange={e=>setBrightness(Number(e.target.value))} className="w-full" />

        <button onClick={handleApply} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded">Apply Keyboard Settings</button>
      </div>
    </section>
  );
}
