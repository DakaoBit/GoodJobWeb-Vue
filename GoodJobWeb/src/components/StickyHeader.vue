<template>
  <div class="row">
    <div class="j_border col p-3 bg_dark btn_dark">
      <a href="/SignIn.html" class="h2"> Company Sign In </a>
    </div>
  </div>
  <div class="row">
    <div class="j_border col p-3 bg_basic btn_basic">
      <a href="/Index.html" class="h2"> Find Job </a>
    </div>
    <div class="j_border col p-3 bg_premium btn_premium">
      <a @click="PostJob" class="h2"> Post Job </a>
    </div>
  </div>
</template>

<script setup>
// var obj = {
//   name: "userToken",
//   value: "GJGTTAAGG",
//   day: 1,
// };
// setCookie(obj);

const PostJob = async () => {
  //必須拿到userToken
  if (_.isEmpty(getCookie("userToken"))) {
    swalTip("Warning", "You must be sign in!");
  } else {
    location.href = "/PostJob.html";
  }
};
</script>
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