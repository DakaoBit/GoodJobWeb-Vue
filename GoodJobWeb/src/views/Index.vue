<template>
 <div class="j_border row">
      <div class="col">
        <div class="marquee" style="font-size: 8rem;">
          <div class="marquee_group">
            <p>Find Good Job</p>
            <p aria-hidden="true">Find Good Job</p>
            <p aria-hidden="true">Find Good Job</p>
          </div>

          <div aria-hidden="true" class="marquee_group">
            <p>Find Good Job</p>
            <p aria-hidden="true">Find Good Job</p>
            <p aria-hidden="true">Find Good Job</p>
          </div>
        </div>
      </div>
    </div>
    <div class="j_border row">
      <div class="col">
        <div class="marquee marquee_reverse" style="padding-top: 10px; font-size: 2rem;--duration: 20s">
          <div class="marquee_group">
            <p>💼 666 Jobs 👍</p>
            <p aria-hidden="true">💼 666 Jobs👍</p>
            <p aria-hidden="true">💼 666 Jobs👍</p>
            <p aria-hidden="true">💼 666 Jobs👍</p>
            <p aria-hidden="true">💼 666 Jobs👍</p>
          </div>
          <div aria-hidden="true" class="marquee_group">
            <p>💼 666 Jobs</p>
            <p aria-hidden="true">💼 666 Jobs 👍</p>
            <p aria-hidden="true">💼 666 Jobs 👍</p>
            <p aria-hidden="true">💼 666 Jobs 👍</p>
            <p aria-hidden="true">💼 666 Jobs 👍</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Search Option -->
    <div class="row justify-content-center">
      <div class="j_search_wrap col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
        <!-- 自製 暫不使用 -->
        <!-- <label id="">Full-Time</label>
                          <button id="btnDropType" class="j_dropdown_btn">
                              Type <i class="bi bi-arrow-down-circle-fill"></i>
                          </button>
                          <div id="dropType" class="j_dropdown_content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                          </div> -->
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

      </div>
      <div class="j_search_wrap col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Skill</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="j_search_wrap col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Level</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="j_search_wrap col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
        <input class="form-control form-control-lg" type="text" placeholder="Location"
          aria-label=".form-control-lg example">
      </div>
    </div>
      <!-- content -->
      <div id="divJob"></div>
</template>