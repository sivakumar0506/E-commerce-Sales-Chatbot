export function formatTimestamp(timestamp) {
  if (!timestamp) return '';

  const parsed = Date.parse(timestamp);  // returns NaN if invalid
  if (isNaN(parsed)) return 'Invalid timestamp';

  const date = new Date(parsed);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
