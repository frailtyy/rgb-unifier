import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export default function MotherboardControls() {
  const [header, setHeader] = useState('A');
  const [mode, setMode] = useState('static');
  const [color, setColor] = useState('#00ff00');

  const handleApply = () => {
    // @ts-ignore
    window.api.setOpenRGBColor(1, color);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 flex items-center"><Cpu className="mr-2" />Motherboard Settings</h2>
      <div className="space-y-4">
        <label>Header:</label>
        <select value={header} onChange={e=>setHeader(e.target.value)} className="bg-gray-700 text-white p-2 rounded">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>

        <label>Mode:</label>
        <select value={mode} onChange={e=>setMode(e.target.value)} className="bg-gray-700 text-white p-2 rounded">
          <option value="static">Static</option>
          <option value="rainbow">Rainbow</option>
        </select>

        <label>Color:</label>
        <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-16 h-8 rounded border-0" />

        <button onClick={handleApply} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded">Apply Motherboard Settings</button>
      </div>
    </section>
  );
}
