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
        <li class="has-sub" v-bind:class="{ here: cngActive }">
          <a href="#" :class="{sideM_on : cngActive}">
            출입 관리
            <i class="ico_m_sub" :class="{ico_m_sub_on : cngActive}">열기</i>
          </a>
          <ul class="sub_menu">
            <li v-for="userList in userLinklist">
              <router-link :to="userList.link">{{userList.content}}</router-link>
            </li>
          </ul>
        </li>

        <li class="has-sub" v-bind:class="{ here: deviceActive }">
          <a href="#" :class="{sideM_on : deviceActive}">단말기 관리<i class="ico_m_sub"  v-bind:class="{ ico_m_sub_on: deviceActive }">열기</i></a>
          <ul class="sub_menu">
            <li v-for="deviceList in deviceLinklist">
              <router-link :to="deviceList.link">{{deviceList.content}}</router-link>
            </li>
          </ul>
        </li>
        <li class="has-sub" v-bind:class="{ here: roomActive }">
          <a href="#" :class="{sideM_on : roomActive}">강의실 관리<i class="ico_m_sub" v-bind:class="{ ico_m_sub_on: roomActive }">열기</i></a>
          <ul class="sub_menu">
            <li v-for="roomList in roomLinklist">
              <router-link :to="roomList.link">{{roomList.content}}</router-link>
            </li>
          </ul>
        </li>
        <li class="has-sub" :class="{ here: waterActive }">
          <a href="#" :class="{sideM_on : waterActive}">식수 관리<i class="ico_m_sub" :class="{ ico_m_sub_on: waterActive }">열기</i></a>
          <ul class="sub_menu">
            <li v-for="waterList in waterLinklist">
              <router-link :to="waterList.link">{{waterList.content}}</router-link>
            </li>
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
      cngActive: true,
      deviceActive: false,
      roomActive: false,
      waterActive: false,
      userLinklist: [
        {content: 'ㆍ출입인원 등록', link: '/cng/reg'},
        {content: 'ㆍ출입인원 관리', link: '/cng/manage'},
        {content: 'ㆍ출입내역 조회', link: '/cng/view'},
        {content: 'ㆍ출입권한 관리', link: '/cng/auth'}
      ],
      deviceLinklist: [
        {content: 'ㆍ단말기 등록/조회', link: '/device/reg'},
        {content: 'ㆍ단말기 상태조회', link: '/device/statusView'},
        {content: 'ㆍ스케줄 설정', link: '/device/confSchedule'}
      ],
      roomLinklist: [
        {content: 'ㆍ강의실 등록', link: '/room/reg'},
        {content: 'ㆍ강의실 조회', link: '/room/view'}
      ],
      waterLinklist: [
        {content: 'ㆍ식수 내역 조회', link: '/water/view'}
      ]
    }
  },
  watch: {
    '$route': 'watchTest'
  },
  methods: {
    watchTest: function () {
      console.log(window.location.pathname.split('/')[1])
      switch (window.location.pathname.split('/')[1]) {
        case 'cng' :
          this.cngActive = true
          this.deviceActive = false
          this.roomActive = false
          this.waterActive = false
          break
        case 'device' :
          this.cngActive = false
          this.deviceActive = true
          this.roomActive = false
          this.waterActive = false
          break
        case 'room' :
          this.cngActive = false
          this.deviceActive = false
          this.roomActive = true
          this.waterActive = false
          break
        case 'water' :
          this.cngActive = false
          this.deviceActive = false
          this.roomActive = false
          this.waterActive = true
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
