import { useEffect } from "react";

export function useOutsideClick(ref : any, handle : Function) {
  useEffect(() => {
    function clickOutside(event : any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handle(true);
      }
    }

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    }
  }, [ref])
}