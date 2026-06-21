import { CheckCircle, XCircle, Info } from 'lucide-react';

const ICON_MAP = {
  success: <CheckCircle size={16} />,
  error: <XCircle size={16} />,
  info: <Info size={16} />,
};

export default function Toast({ toasts }) {
  if (toasts.length === 0) return null;
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>{ICON_MAP[t.type] || <Info size={16} />}</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
