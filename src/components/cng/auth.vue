<template>
  <div>
    <!-- s:rightContainer -->
    <div id="rightContainer">
      <!-- s:inner_container -->
      <div class="inner_container">

        <!-- s:con_box -->
        <div class="con_box">

          <h3>기본 출입권한 관리</h3>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_col_2type">
              <colgroup>
                <col style="width:20%;"/>
                <col/>
                <col/>
                <col/>
              </colgroup>
              <thead>
              <tr>
                <th>구분</th>
                <th colspan="3">단말기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row" rowspan="3">간호대학</th>
                <td><a href="#" @click="popup_access_app">입구</a></td>
                <td>자동문</td>
                <td>1층 수정체입구</td>
              </tr>
              <tr>
                <td>본관동 1층 현관</td>
                <td>본관동 3층 구름다리 출입구</td>
                <td>본관동 지하 주차장 출입구</td>
              </tr>
              <tr>
                <td>연구동 1층 현관</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th scope="row" rowspan="2">공과대학</th>
                <td>1층 출입구</td>
                <td>2층 출입구</td>
                <td>3층 출입구</td>
              </tr>
              <tr>
                <td>1층 정문</td>
                <td>4층 출입구</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th scope="row" rowspan="3">농업생명과학대학</th>
                <td>1층 현관</td>
                <td>2층 현관</td>
                <td>3층 현관</td>
              </tr>
              <tr>
                <td>지하1층 남측</td>
                <td>지하1층 북측</td>
                <td>지하2층 남측</td>
              </tr>
              <tr>
                <td>지하2층 북측</td>
                <td>2층 현관(I)</td>
                <td>3층 현관(I)</td>
              </tr>
              <tr>
                <th scope="row" rowspan="3">법과대학</th>
                <td><a href="#" @click="popup_access_app">체력단련실</a></td>
                <td>5층 제2열람실 앞문</td>
                <td>5층 제1열람실</td>
              </tr>
              <tr>
                <td>유민홀 우측</td>
                <td>유민홀 좌측</td>
                <td>5층 제2열람실 뒷문</td>
              </tr>
              <tr>
                <td>4층 1열람실</td>
                <td>4층 2열람실 앞문</td>
                <td>4층 2열람실 뒷문</td>
              </tr>
              <tr>
                <td colspan="4">&nbsp;</td>
              </tr>
              <tr>
                <th scope="row" rowspan="2">사범대</th>
                <td><span class="tc_red">9동 1층 출입문</span></td>
                <td><span class="tc_red">10동 1층 현관(경비실)</span></td>
                <td><span class="tc_red">10동 2층 출입문</span></td>
              </tr>
              <tr>
                <td><span class="tc_red">12동 2층 작은문</span></td>
                <td><span class="tc_red">1층 출입구</span></td>
                <td><span class="tc_red">1층 출입문</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- e:tbl_row_wrap -->

          <div class="gap10"></div>

          <!-- S:: 버튼  -->
          <div class="fr">
            <a href="javascript:;" class="btn_pos" @click="popup_access_app"><span>등록</span></a>
          </div>
          <!-- E:: 버튼  -->

          <div class="gap10"></div>

        </div>
        <!-- e:con_box -->

      </div>
      <!-- e:inner_container -->

    </div>
    <!-- e:rightContainer -->

    <!-- // 출입인원 조회 레이어팝업끝 -->
    <div class="popup_access_app popup_person_app" style="display:none;" id="popup_conts_view">
      <div class="popup_layer_wrap">
        <div class="show_popup_ttl"><span>출입 기본 권한</span> 설정</div>
        <div class="close_x"><a href="#" @click="popup_access_app">
          <img src="@/assets/images/popup_close.png" alt="닫기"/></a></div>
        <div class="popup_access_box">
          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row">
              <colgroup>
                <col style="width:20%;"/>
                <col/>
              </colgroup>
              <tbody>
              <tr>
                <th scope="col">설정권한</th>
                <td>
                  <select class="ui_sel w100p">
                    <option>농업생명과학대학</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>학과/부서</th>
                <td>
                  <select class="ui_sel w50p">
                    <option>농업생명과학대학</option>
                  </select>
                  <select class="ui_sel w48p fr">
                    <option>지하 1층 북측</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>학번/사번</th>
                <td>
                  <select class="ui_sel w100p">
                    <option>사용</option>
                    <option>중지</option>
                  </select>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- E:tbl_row_wrap -->

          <div class="gap15"></div>

        </div>
        <!-- E:popup_box -->

        <div class="gap15"></div>

        <div class="ac">
          <a href="javascript:;" class="btn_pos"><span>수정</span></a>
          <a href="javascript:;" class="btn_gray" @click="popup_access_app"><span>닫기</span></a>
        </div>

        <div class="gap10"></div>

      </div>
    </div>
    <!-- // 출입신청 조회 레이어팝업끝 -->
  </div>
</template>

<script>
import incHead from '@/components/inc/incHead'
import Left from '@/components/inc/left'

var ck = 0
export default {
  name: 'auth',
  components: {incHead, Left},
  methods: {
    popup_access_app: function () {
      var cNum = ck++

      cNum = cNum % 2
      if (cNum === 0) {
        document.getElementById('popup_conts_view').style.display = 'inline'
      } else {
        document.getElementById('popup_conts_view').style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>

</style>
