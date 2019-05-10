<template>
  <div id="login_wrap">
    <div class="login_wrap_header">
      <div>
          <div class="login_top_logo"><img src="../assets/images/multiCam.png" alt="멀티캠퍼스" style="width: 317px;"></div>
      </div>
    </div>
    <div class="login_conts_body_box">
      <div class="gap10"></div>
      <div class="login_body_box">
        <form id="ssoForm" method="post" action="/home">
          <fieldset>
            <label for="ip_id">
              <input type="text" class="login_ip_id ip_id" name="si_id" placeholder="아이디를 입력하세요" value="">
            </label>
            <label for="ip_pw">
              <input type="password" class="login_ip_pw ip_pw" name="si_pwd" placeholder="비밀번호를 입력하세요" autocomplete="off">
            </label>
          </fieldset>
          <input type="submit" style="display: block;position: absolute;left: -99999px;">
        </form>
      </div>

      <div class="agree">
        <div class="all_agree">
          <input type="checkbox" id="a1" name="아이디 저장">
          <label for="a1"><span class="f13 tc_666">ID 정보저장</span></label>
        </div>
        <!-- <div class="login_agree_pw_txt"><a href="#" onclick="javascript:popup_div();">비밀번호 찾기</a></div> -->
      </div><!-- .agree -->

      <router-link to="/home">
        <div class="login_btn login_btn" style="cursor: pointer;" >LOGIN</div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {

  }
}
</script>

<style scoped>
  fieldset, img {
    border : none;
  }
</style>
