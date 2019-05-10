<template>
  <div id="header_wrap">
    <!-- s:logo -->
    <div class="logo_box">
      <h1>
        <img src="../assets/images/mul_cam.png" alt="서울대학교" />
        <!--<img src="resource/images/logo.png" alt="서울대학교" />-->
      </h1>
    </div>
    <!-- e:logo -->

    <!-- s:header_box -->
    <div id="header_box">
      <div class="info_box">
        <span class="info_member ico ico_util_member"><i>icon</i><a href="#" class="fs_b"><span class="people">Y4123456</span> 홍길동님</a> (기숙사 팀)</span>
        <a href="#" class="btnu_login">로그아웃</a>
      </div>

      <!-- s:topmenu_wrap -->
      <!--
      <div class="topmenu_wrap">
          <ul>
              <li><a href="#">통합시스템</a></li>
              <li><a href="#">s-card 시스템</a></li>
              <li><a href="#">강의출결 시스템</a></li>
              <li class="on"><a href="#">출입통제 시스템</a></li>
          </ul>
      </div>
      -->
      <!-- E:topmenu_wrap -->

    </div>
    <!-- e:header_box -->
  </div>
  <!-- e:header_wrap -->
</template>

<script>
export default {
  name: 'head',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
