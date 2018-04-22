(function() {
  const socialMedia = [
    "Facebook",
    "Instagram",
    "Twitter",
    "Snapchat",
    "YouTube",
    "Twitch"
  ];

  function cycleSocialMedia() {
    const elem = document.getElementById("social-media");
    const newIndex = Math.floor(Math.random() * 5);
    elem.classList.replace("visible", "hidden");
    setTimeout(function() {
      elem.innerHTML = socialMedia[newIndex];
      elem.classList.replace("hidden", "visible");
    }, 500);
  }

  setInterval(function() {
    cycleSocialMedia();
  }, 3000);
})();
