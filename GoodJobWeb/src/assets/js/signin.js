import { createApp } from 'vue'
import '../css/style.css'
import {fixedHeader} from '../../components/StickyHeader.vue'
import StickyHeader from '../../components/StickyHeader.vue'
import SignIn from '../../views/SignIn.vue'

document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  window.onscroll = function () {
    fixedHeader();
  };

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
});

// createApp(StickyHeader).mount('#sticky-header')
createApp(SignIn).mount('#signin')

