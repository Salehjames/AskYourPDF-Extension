document.addEventListener("DOMContentLoaded", function () {
  var eyeIcon = document.querySelector(".eye");
  eyeIcon.addEventListener("click", function () {
    togglePasswordVisibility();
  });

  var unlockText = document.querySelector(".unlock-text");
  unlockText.addEventListener("click", function () {
    redirectToLoginPage();
  });

  var forgotPassword = document.querySelector(".forgot-password");
  forgotPassword.addEventListener("click", function () {
    redirectToResetPasswordPage();
  });

  var twitterLink = document.querySelector(".Twitter");
  twitterLink.addEventListener("click", function () {
    redirectToTwitterPage("https://twitter.com/askyourpdf");
  });

  var discordLink = document.querySelector(".Discord");
  discordLink.addEventListener("click", function () {
    redirectToDiscordPage("https://discord.com/invite/bt6SCGEtu9");
  });
});

function redirectToLoginPage() {
  // Check if the user is logged in (you need to implement this logic)
  var isLoggedIn = true; // Set this to true if the user is logged in, otherwise false

  // Redirect the user if they are logged in
  if (isLoggedIn) {
    window.open("https://auth.askyourpdf.com/login");
  }
}

function redirectToResetPasswordPage() {
  window.open("https://auth.askyourpdf.com/reset-password");
}

function redirectToTwitterPage(url) {
  openLinkInNewTab(url);
}

function redirectToDiscordPage(url) {
  openLinkInNewTab(url);
}

function openLinkInNewTab(url) {
  chrome.tabs.create({ url: url });
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("myInput");
  var hide1Icon = document.getElementById("hide1");
  var hide2Icon = document.getElementById("hide2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    hide1Icon.style.display = "block";
    hide2Icon.style.display = "none";
  } else {
    passwordInput.type = "password";
    hide1Icon.style.display = "none";
    hide2Icon.style.display = "block";
  }
}
