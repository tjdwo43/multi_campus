<template>
  <!-- s:leftContainer -->
  <div id="leftContainer">
    <div id="leftTTl">전자 출결 시스템</div>

    <!-- s:menu_box -->
    <div class="menu_box">
      <ul class="left_menu">
        <!--
        <li class="nonhas-sub home_icon">
            <a href="#">HOME </a>
        </li>
        -->
        <li class="has-sub here smart_icon smart_icon_on">
          <a href="#" class="sideM_on">출입 관리<i class="ico_m_sub_on">열기</i></a>
          <ul class="sub_menu">
            <li v-for="userList in userLinklist">
              <router-link to="userList.link">{{userList.content}}</router-link>
            </li>
          </ul>
        </li>
        <li class="has-sub law_icon">
          <a href="#">단말기 관리<i class="ico_m_sub">열기</i></a>
          <ul class="sub_menu">

            <li><a href="#">ㆍ단말기 등록</a></li>
            <li><a href="#">ㆍ단말기 조회 </a></li>
            <li><a href="#">ㆍ단말기 상태 조회</a></li>
            <li><a href="#">ㆍ스케줄 설정</a></li>

          </ul>
        </li>
        <li class="has-sub serv_icon">
          <a href="#">강의실 관리<i class="ico_m_sub">열기</i></a>
          <ul class="sub_menu">
            <li><a href="#">ㆍ강의실 등록</a></li>
            <li><a href="#">ㆍ강의실 조회</a></li>
          </ul>
        </li>
        <li class="has-sub serv_icon">
          <a href="#">식수 관리<i class="ico_m_sub">열기</i></a>
          <ul class="sub_menu">
            <li><a href="#">ㆍ식수 내역 조회</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- e:menu_box -->
  </div>
  <!-- e:leftContainer -->
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      toggle: this.enter,
      userLinklist: [
        {content: 'ㆍ출입신청 관리', link: '/user/manage'},
        {content: 'ㆍ출입인원 등록', link: '/user/reg'},
        {content: 'ㆍ출입내역 조회', link: '/user/view'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
