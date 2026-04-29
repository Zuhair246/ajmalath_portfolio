import React from 'react';

const whatsappLink =
  'https://wa.me/971567580029/?text=Hello%20Ajmalath%2C%20I%20would%20like%20to%20connect.';

const StickyWhatsApp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <svg
        className="h-8 w-8 md:h-9 md:w-9"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3.2C9.03 3.2 3.35 8.78 3.35 15.64c0 2.38.69 4.66 1.99 6.64L3.2 28.8l6.78-2.1a12.86 12.86 0 0 0 6.04 1.5c6.99 0 12.67-5.58 12.67-12.44S23.01 3.2 16.02 3.2Zm0 22.86c-1.92 0-3.79-.52-5.41-1.51l-.39-.23-4.02 1.24 1.29-3.85-.25-.4a10.15 10.15 0 0 1-1.64-5.56c0-5.68 4.67-10.3 10.42-10.3s10.42 4.62 10.42 10.3-4.67 10.31-10.42 10.31Zm5.72-7.7c-.31-.15-1.85-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.81 1-.99 1.2-.18.21-.36.23-.67.08-.31-.15-1.32-.48-2.51-1.52-.93-.82-1.55-1.82-1.73-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.15-.18.21-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.71-1.68-.97-2.3-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.54.08-.83.38-.28.31-1.09 1.05-1.09 2.56s1.12 2.97 1.27 3.18c.15.2 2.19 3.29 5.3 4.61.74.31 1.32.5 1.77.64.74.23 1.42.2 1.95.12.59-.09 1.85-.74 2.11-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.59-.36Z" />
      </svg>
    </a>
  );
};

export default StickyWhatsApp;
