import { createApp } from 'vue'
import '../css/style.css'
import { loadJob } from "../../views/components/LoadJob.vue";
import {fixedHeader} from '../../components/StickyHeader.vue'
import StickyHeader from '../../components/StickyHeader.vue'
import Index from '../../views/Index.vue'

document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  window.onscroll = function () {
    fixedHeader();
  };

  loadJob();
});

createApp(StickyHeader).mount('#sticky-header')
createApp(Index).mount('#index')
