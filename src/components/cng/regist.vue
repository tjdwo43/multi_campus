<template>
  <div>
    <!-- s:rightContainer -->
    <div id="rightContainer">
      <!-- s:inner_container -->
      <div class="inner_container">

        <!-- s:con_box -->
        <div class="con_box">

          <h3>출입인원 등록</h3>
          <div class="gap2"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row">
              <colgroup>
                <col style="width:15%;"/>
                <col/>
              </colgroup>
              <tbody>
              <tr>
                <th scope="row">출입인원</th>
                <td class="input">
                  <input type="text" style="width:77%;"/>
                  <a href="javascript:;" class="roundBox_Btn" @click="popup_access_app"><span>조회</span></a>
                  <a href="javascript:;" class="roundBox_gray_Btn"><span>전송</span></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- e:tbl_row_wrap -->

          <div class="gap15"></div>

          <table class="tbl_col_in tbl_col_td">
            <colgroup>
              <col>
              <col>
              <col>
              <col>
              <col>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
            <tr>
              <th scope="col">소속</th>
              <th scope="col">부서/학과</th>
              <th scope="col">학번</th>
              <th scope="col">이름</th>
              <th scope="col">카드구분</th>
              <th scope="col">차수</th>
              <th scope="col">출입종료일</th>
              <th scope="col">비고</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            </tbody>
          </table>

          <div class="gap20"></div>

          <div class="ac">
            <a href="javascript:;" class="btn_pos"><span>전송</span></a>
          </div>

          <div class="gap10"></div>

        </div>
        <!-- e:con_box -->

      </div>
      <!-- e:inner_container -->

    </div>
    <!-- e:rightContainer -->

    <!-- // 출입인원 조회 레이어팝업끝 -->
    <div class="popup_person_app" style="display:none;" id="popup_conts_view">
      <div class="popup_layer_wrap">
        <div class="show_popup_ttl"><span>출입인원</span> 조회</div>
        <div class="close_x"><a href="#" @click="popup_access_app"><img src="@/assets/images/popup_close.png" alt="닫기"/></a>
        </div>

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
                <th scope="row">대학/부서</th>
                <td class="input">
                  <select class="ui_sel w50p">
                    <option>대학/부서</option>
                  </select>
                  <select class="ui_sel w48p fr">
                    <option>신분</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">성명/학번/사번</th>
                <td class="input">
                  <input type="text" class="w100p"/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- e:tbl_row_wrap -->

          <div class="gap10"></div>

          <!-- S:: 버튼  -->
          <div class="btn_group">
            <div class="tc"><a href="javascript:;" class="btn_pos"><span>조회</span></a> <a href="javascript:;"
                                                                                          class="btn_gray"><span>초기화</span></a>
            </div>
          </div>
          <!-- E:: 버튼  -->

          <div class="gap15"></div>

          <table class="tbl_col_in tbl_col_td">
            <colgroup>
              <col style="width:7%;">
              <col style="width:10%;">
              <col>
              <col>
              <col>
              <col>
              <col>
              <col style="width:15%;">
            </colgroup>
            <thead>
            <tr>
              <th scope="col">
                <label class="checkbox_css_C">
                  <input type="checkbox"/>
                  <span class="checkmark_C"></span>
                </label>
              </th>
              <th scope="col">대학</th>
              <th scope="col">학과/부서</th>
              <th scope="col">학번/사번</th>
              <th scope="col">성명</th>
              <th scope="col">카드종류</th>
              <th scope="col">차수</th>
              <th scope="col">출입종료일</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <label class="checkbox_css_C">
                  <input type="checkbox"/>
                  <span class="checkmark_C"></span>
                </label>
              </td>
              <td>교직원</td>
              <td>경영대학</td>
              <td>50006700</td>
              <td>이성빈</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label class="checkbox_css_C">
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark_C"></span>
                </label>
              </td>
              <td>교직원</td>
              <td>경영대학</td>
              <td>50006700</td>
              <td>이성빈</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label class="checkbox_css_C">
                  <input type="checkbox"/>
                  <span class="checkmark_C"></span>
                </label>
              </td>
              <td>교직원</td>
              <td>경영대학</td>
              <td>50006700</td>
              <td>이성빈</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label class="checkbox_css_C">
                  <input type="checkbox"/>
                  <span class="checkmark_C"></span>
                </label>
              </td>
              <td>교직원</td>
              <td>경영대학</td>
              <td>50006700</td>
              <td>이성빈</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            </tbody>
          </table>

          <!-- s:paging -->
          <div class="ac">
            <!-- s:paging -->
            <div class="paging">
              <a href="#" class="ico btn_page_frist disabled"><i>맨앞으로</i></a><a href="#"
                                                                                class="ico btn_page_prve disabled"><i>이전</i></a>
              <span class="page_num">
                        <a href="javascript:;" class="here">1</a>
                        <a href="javascript:;">2</a>
                        <a href="javascript:;">3</a>
                        <a href="javascript:;">4</a>
                        <a href="javascript:;">5</a>
                    </span>
              <a href="#" class="ico btn_page_next"><i>다음</i></a><a href="#" class="ico btn_page_last"><i>맨뒤으로</i></a>
            </div>
          </div>
          <!-- e:paging -->
          <div class="gap15"></div>

        </div>
        <!-- E:popup_box -->

        <div class="gap15"></div>

        <div class="ac">
          <a href="javascript:;" class="btn_pos"><span>등록</span></a>
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
  name: 'regist',
  components: {incHead, Left},
  methods: {
    popup_access_app: function () {
      let sg = document.banner
      let cNum = ck++

      cNum = cNum % 2
      if (cNum == 0) {
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
