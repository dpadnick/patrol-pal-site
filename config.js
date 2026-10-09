// Single source of truth for site settings.
// SITE_URL is also repeated in index.html <head> (canonical, og:url), sitemap.xml and robots.txt,
// because static HTML can't read JS at render time. Change all of them together.
window.PATROL_PAL_CONFIG = {
  SITE_URL: 'https://patrol-pal.com',
  // Apps Script web app URL (ends in /exec). Paste after deploying apps-script/Code.gs.
  FORM_ENDPOINT: 'https://script.google.com/macros/s/AKfycbw5MqGoFE3p2M54STBSClOeGw_DPIIraHNxgHLTT2rmw1vPX04fwJ769FyZnK3jXITDdQ/exec'
};
