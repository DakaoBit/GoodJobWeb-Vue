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
});

// createApp(StickyHeader).mount('#sticky-header')
createApp(SignIn).mount('#signin')