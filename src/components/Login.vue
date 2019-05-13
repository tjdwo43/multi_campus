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
        <form id="ssoForm" method="post" action="">
          <fieldset>
            <label for="ip_id">
              <input type="text" class="login_ip_id ip_id"  placeholder="아이디를 입력하세요" v-model="id">
            </label>
            <label for="ip_pw">
              <input type="password" class="login_ip_pw ip_pw" placeholder="비밀번호를 입력하세요" autocomplete="off" v-model="passwd">
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

      <div class="login_btn login_btn" style="cursor: pointer;" @click="formSubmit">LOGIN</div>

    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Login',
  data () {
    return {
      id: '',
      passwd: ''
    }
  },
  methods: {

    formSubmit (e) {
      e.preventDefault()

      let bPasswd = btoa(this.passwd)

      console.log(bPasswd)

      // Send a POST request
      axios({
        method: 'post',
        url: 'http://dev.sh-system.co.kr/ASTA-API/api/user/login',
        data: {
          id: this.id,
          passwd: bPasswd
        }
      })




    }

  }
}
</script>

<style scoped>
  fieldset, img {
    border : none;
  }
</style>
