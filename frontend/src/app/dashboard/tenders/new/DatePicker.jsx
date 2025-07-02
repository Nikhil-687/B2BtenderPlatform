import { useState } from 'react';
import { format } from 'date-fns';

export default function DateSelector() {
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="column-layout">
      <label className="deadline-label">Application Deadline *</label>

      <button
        className={`deadline-button ${!date ? 'deadline-button-muted' : ''}`}
        onClick={() => setShowPicker(!showPicker)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="calendar-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date ? format(date, "PPP") : "Pick a date"}
      </button>

      {showPicker && (
        <div className="popover-content">
          <input
            type="date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </div>
      )}
    </div>
  );
}
