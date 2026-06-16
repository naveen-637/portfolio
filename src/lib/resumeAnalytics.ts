export type ResumeAnalyticsEvent = "resume_download" | "resume_view";

export function trackResumeEvent(eventName: ResumeAnalyticsEvent) {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    const eventLabel = "Naveenkumar_P_Resume.pdf";
    gtag("event", eventName, {
      event_category: "Resume",
      event_label: eventLabel,
      value: eventName === "resume_download" ? 1 : 0,
    });
  }
}
