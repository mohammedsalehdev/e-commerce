import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
      useEffect(() => {
        function handelOnline() {
          setIsOnline(true);
        }
    
        function handelOffline() {
          setIsOnline(false);
        }
    
        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffline);
    
        return function () {
          window.removeEventListener("online", handelOnline);
          window.removeEventListener("offline", handelOffline);
        };
      }, []);
  
  return isOnline
}