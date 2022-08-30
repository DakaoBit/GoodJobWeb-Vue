<template>
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
</template>

<script> 
/**
 * 固定Header
 */
 export function fixedHeader() {
  // Get the header
  var header = document.getElementById("sticky-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}
</script>