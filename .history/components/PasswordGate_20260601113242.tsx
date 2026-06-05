'use client';
import { useState } from 'react';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem('rsvp_unlocked', 'true'); // remembers within the tab session
        onUnlock();
      } else {
        setError(data.message);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl font-serif mb-1">You're Invited</h2>
        <p className="text-gray-400 text-sm mb-6">
          Enter your invitation code to access the RSVP form.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Invitation code"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-3 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Open RSVP Form'}
          </button>
        </form>
      </div>
    </div>
  );
}