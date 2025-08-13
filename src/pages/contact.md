---
layout: ../layouts/AboutLayout.astro
title: "Get in Touch"
---

<img src="/cdh-contact-pic.jpeg" alt="Charles Hood" class="about-bio-image" style="float: right; margin: -60px 0 10px 10px; border-radius: 50%; width: 150px; height: 150px; object-fit: cover; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>

<style>
@media (min-width: 640px) {
  .about-bio-image {
    width: 200px !important;
    height: 200px !important;
    margin-top: -72px !important;
  }
}
</style>

Hello there! 👋 I'd love to hear from you. Whether you have questions, suggestions, or just want to say hi, feel free to reach out.

## Follow me on X 🐦

The best way to stay in touch is through X. Follow [@charleshood](https://twitter.com/charleshood) for tech insights, music recommendations, and random observations.

## Connect on LinkedIn 💼

For professional inquiries or to connect on a more formal platform, visit my [LinkedIn profile](https://www.linkedin.com/in/charleshood/). Let's build our professional network!

## Find me on Facebook 👥

Stay connected through [Facebook](https://www.facebook.com/charleshood) for updates and discussions.

## Drop Me an Email 📬

Have a more detailed inquiry or just prefer email? Reach me at <span id="email"></span>

<script>
// Email obfuscation to prevent spam bots
document.addEventListener('DOMContentLoaded', function() {
  var user = 'charles.hood';
  var domain = 'gmail.com';
  var element = document.getElementById('email');
  element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
});
</script>
<noscript>charles.hood [at] gmail [dot] com</noscript>