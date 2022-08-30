import { createApp } from 'vue'
import '../css/style.css'
import {fixedHeader} from '../../components/StickyHeader.vue'
import StickyHeader from '../../components/StickyHeader.vue'
import PostJob from '../../views/PostJob.vue'

document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  window.onscroll = function () {
    fixedHeader();
  };
});

createApp(StickyHeader).mount('#sticky-header')
createApp(PostJob).mount('#postjob')