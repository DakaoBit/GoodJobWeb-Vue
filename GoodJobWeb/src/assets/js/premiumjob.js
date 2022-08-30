import { createApp } from 'vue'
import '../lib/tom-select/tom-select.css'
import '../css/style.css'
import { fixedHeader } from '../../components/StickyHeader.vue'
import StickyHeader from '../../components/StickyHeader.vue'
import PremiumJob from '../../views/PremiumJob.vue'

document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  window.onscroll = function () {
    fixedHeader();
  };

  new TomSelect("#type", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  new TomSelect("#level", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });
});

createApp(StickyHeader).mount('#sticky-header')
createApp(PremiumJob).mount('#premiumjob')