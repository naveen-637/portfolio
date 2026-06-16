import { useEffect, useState } from "react";

const RESUME_URL = "/resume/Naveenkumar_P_Resume.pdf";

export function useResumeAvailability() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const controller = new AbortController();
    fetch(RESUME_URL, {
      method: "HEAD",
      cache: "no-cache",
      signal: controller.signal,
    })
      .then((response) => setAvailable(response.ok))
      .catch(() => setAvailable(false));

    return () => controller.abort();
  }, []);

  return available;
}
