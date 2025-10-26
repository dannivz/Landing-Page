import { useEffect } from 'react' // ✅ AGREGADO

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const styles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slideUp">
      <div className={`${styles[type]} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3`}>
        <span className="text-2xl">
          {type === 'success' && '✅'}
          {type === 'error' && '❌'}
          {type === 'info' && 'ℹ️'}
        </span>
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  )
}

export default Toast