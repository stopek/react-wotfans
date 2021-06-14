export const pushGA = (location) => {
  window.gtag('event', {
    category: 'pageview',
    action: 'pageview',
    value: location
  });
}