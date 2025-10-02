import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

export default function OfflineScreen({ children }) {
  const isOnline = useOnlineStatus();
  if (isOnline) {
    return children;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="text-center">
        <div className="inline-block relative">
          <FontAwesomeIcon icon={faWifi} className="text-6xl text-gray-400 mb-6 motion-safe:animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 transform -rotate-45">
            <div
              className="absolute w-full h-1 bg-red-500 rounded-full animate-line-fade-out"
              style={{ top: "25%", left: "-5%", transform: "rotate(45deg)" }}
            ></div>
            <div
              className="absolute w-full h-1 bg-red-500 rounded-full animate-line-fade-out"
              style={{ top: "75%", left: "5%", transform: "rotate(45deg)" }}
            ></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Connection Lost</h1>
        <p className="text-lg text-gray-600 mb-6">It seems you're offline. Please check your internet connection and try again.</p>

        <button
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
