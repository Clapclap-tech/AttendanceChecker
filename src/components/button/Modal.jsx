export default function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-20 ${isOpen ? 'animate-slide-in' : ''}`}>
      <div className="bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.25)] w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 md:p-6">
          <h2 className="text-xl font-medium">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
        {footer && <div className="flex justify-end p-3 md:p-4 bg-gray-100">{footer}</div>}
      </div>
    </div>
  );
}
