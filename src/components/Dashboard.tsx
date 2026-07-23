import React from 'react';
import MouseControls from './MouseControls';
import KeyboardControls from './KeyboardControls';
import MotherboardControls from './MotherboardControls';

export default function Dashboard() {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">RGB Unifier</h1>
      <div className="space-y-8">
        <MouseControls />
        <KeyboardControls />
        <MotherboardControls />
      </div>
    </div>
  );
}
