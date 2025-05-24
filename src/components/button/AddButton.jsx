export default function AddButton({ toggleMenu, customStyles = "" }) {
  return (
    <button 
      onClick={toggleMenu}
      className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.2)] text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer ${customStyles}`}
      aria-label="Add"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  );
}
