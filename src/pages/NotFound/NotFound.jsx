import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

// 404 Page (Static UI) - Designed for React + Vite + Tailwind
// Note: Uses your custom `btn` class for buttons

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-primary-50)] p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Right side - Text */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-extrabold tracking-tight text-[var(--color-primary-700)]">404</span>
            <div className="h-0.5 flex-1 bg-[var(--color-primary-200)] rounded" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</h1>

          <p className="text-gray-600 leading-relaxed">
            Sorry, the page you are looking for doesn’t exist or has been moved. You can try searching or go back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="/"
              className="btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl shadow-sm text-white bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)]"
            >
              <FontAwesomeIcon icon={faHome} />
              Go Home
            </a>

            <div className="flex items-center gap-2 bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-2xl px-3 py-2">
              <FontAwesomeIcon icon={faSearch} />
              <input
                className="bg-transparent outline-none placeholder-gray-400 text-gray-700"
                placeholder="Search for a page or article"
                readOnly
              />
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            If you need help, you can contact support or return to the important links in the site menu.
          </div>
        </div>

        {/* Left side - Illustration */}
        <div className="relative bg-[linear-gradient(135deg,var(--color-primary-100),var(--color-primary-300))] p-8 flex items-center justify-center">
          {/* Decorative shapes */}
          <svg
            className="absolute -left-10 -top-10 opacity-20"
            width="220"
            height="220"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="rgba(34,197,94,0.12)" strokeWidth="18" />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-56 h-40 md:w-72 md:h-56 flex items-center justify-center bg-white/60 rounded-2xl shadow-md">
              {/* Big icon */}
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M11 5h2v6h-2z" fill="currentColor" className="text-[var(--color-primary-700)]" />
                <path d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" className="text-[var(--color-primary-700)]" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
                  fill="currentColor"
                  className="text-[var(--color-primary-500)] opacity-90"
                />
              </svg>
            </div>

            <p className="text-sm text-[var(--color-primary-800)] font-semibold">Looks like we got lost...</p>

            <div className="flex gap-3 text-xs text-gray-700">
              <span className="px-3 py-1 bg-white/30 rounded-full">Home</span>
              <span className="px-3 py-1 bg-white/30 rounded-full">Blog</span>
              <span className="px-3 py-1 bg-white/30 rounded-full">Help</span>
            </div>
          </div>

          {/* Background effects */}
          <div className="absolute right-6 bottom-6 w-24 h-24 rounded-full blur-3xl opacity-30 bg-[var(--color-primary-400)]"></div>
          <div className="absolute left-6 top-6 w-16 h-16 rounded-full blur-xl opacity-25 bg-[var(--color-primary-600)]"></div>
        </div>
      </div>
    </div>
  );
}
