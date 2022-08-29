import { createApp } from 'vue'
import './style.css'
import { loadJob } from "./LoadJob.vue";
import App from './App.vue'



document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  document.getElementById("stcky-header").innerHTML = headerTemplate();
  window.onscroll = function () {
    fixedHeader();
  };

  loadJob();
});

export function headerTemplate() {
  var txtHeader = `
        <div class="j_border col p-3 bg_basic btn_basic">
        <a href="/Index.html" class="h2">
            Find Job
        </a>
      </div>
      <div class="j_border col p-3 bg_premium btn_premium">
        <a href="/PostJob.html" class="h2">
            Post Job
        </a>
      </div>
    `;

  return txtHeader;
}

/**
 * 固定Header
 */
export function fixedHeader() {
  // Get the header
  var header = document.getElementById("stcky-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

createApp(App).mount('#app')
