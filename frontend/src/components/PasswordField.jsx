import { Eye, EyeOff } from 'lucide-react';

// ponytail: 密码输入框 + 眼睛切换按钮，闪电直连表单中复用
export default function PasswordField({ value, onChange, placeholder, showPassword, onToggleShow }) {
  return (
    <div style={{ position: 'relative' }}>
      <input className="input-compact" type={showPassword ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', paddingRight: 32 }} />
      <button onClick={onToggleShow} style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', background: 'none', border: 'none', padding: '2px 4px', display: 'flex', alignItems: 'center', color: 'var(--text-tertiary)' }}>
        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
      </button>
    </div>
  );
}
