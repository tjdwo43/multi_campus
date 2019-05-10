<template>
  <div>
  <head></head>
  <left></left>
  <!-- s:rightContainer -->
  <div id="rightContainer">
    <!-- s:inner_container -->
    <div class="inner_container">

      <!-- s:con_box -->
      <div class="con_box">

        <h3>출입신청 관리</h3>

        <div class="gap5"></div>

        <div class="fl tc_bc f13">※ 출입통제 문의 : 학생지원과 880-5249 전수환</div>

        <div class="gap2"></div>

        <div class="tbl_row_wrap">
          <!-- s:tbl_row -->
          <table class="tbl_row">
            <colgroup>
              <col style="width:15%;" />
              <col style="width:35%;" />
              <col style="width:13%;" />
              <col style="width:37%;" />
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">신청일자</th>
              <td class="input">
                                        <span class="calandar_group prevwidht">
                                            <span class="cal1 cal_normal"><input data-type="date" id="date7" name="" class="ui_cal" style="width:85px;" /></span>
                                            <span class="tt">~</span>
                                            <span class="cal2 cal_normal"><input data-type="date" id="date8" name="" class="ui_cal" style="width:85px;" /></span>
                                        </span>
              </td>
              <th scope="row">신청상태</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>전체</option>
                  <option>반려</option>
                  <option>신청중</option>
                  <option>승인</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">이름</th>
              <td class="input">
                <input type="text" class="w100p" />
              </td>
              <th scope="row">학번</th>
              <td class="input">
                <input type="text" class="w100p" />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- e:tbl_row_wrap -->

        <div class="gap10"></div>

        <!-- S:: 버튼  -->
        <div class="btn_group">
          <div class="tc"><a href="javascript:;" class="btn_pos"><span>조회</span></a> <a href="javascript:;" class="btn_gray"><span>초기화</span></a></div>
        </div>
        <!-- E:: 버튼  -->
      </div>
      <!-- e:con_box -->

      <!-- s:con_box -->
      <div class="con_box con_bon_line">

        <div class="fl"><h4>전체 10건</h4></div>

        <div class="gap5"></div>

        <table class="tbl_col_in tbl_col_td tblTd">
          <colgroup>
            <col style="width:5%;">
            <col>
            <col style="width:11%;">
            <col style="width:11%;">
            <col style="width:11%;">
            <col>
            <col>
            <col style="width:12%;">
            <col style="width:8%;">
            <col>
          </colgroup>
          <thead>
          <tr>
            <th scope="col">
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </th>
            <th scope="col">신청일자</th>
            <th scope="col">대학</th>
            <th scope="col">학과</th>
            <th scope="col">학번</th>
            <th scope="col">이름</th>
            <th scope="col">종료일자</th>
            <th scope="col">신청건물</th>
            <th scope="col">상태</th>
            <th scope="col">처리일자</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" checked="checked" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>의과대학</td>
            <td>의예과</td>
            <td><a href="#" onclick="javascript:popup_access_app();">2018-05708</a></td>
            <td>김태희</td>
            <td>2019-01-31</td>
            <td>사범관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>수의과대학</td>
            <td>수의에과</td>
            <td>2018-05708</td>
            <td>김혜빈</td>
            <td>2019-01-31</td>
            <td>문화관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>공과대학</td>
            <td>컴퓨터공학부</td>
            <td>2018-05708</td>
            <td>김혜지</td>
            <td>2019-01-31</td>
            <td>두례학생문예관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>생활과학대학</td>
            <td>의류학과</td>
            <td>2018-05708</td>
            <td>김화민</td>
            <td>2019-01-31</td>
            <td>인문관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>미술대학</td>
            <td>경영학과</td>
            <td>2018-05708</td>
            <td>김회승</td>
            <td>2019-01-31</td>
            <td>법학도서관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>경영대학</td>
            <td>심리학과</td>
            <td>2018-05708</td>
            <td>나정연</td>
            <td>2019-01-31</td>
            <td>LG경영관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>사회과학대학</td>
            <td>생명과학부</td>
            <td>2018-05708</td>
            <td>노혜지</td>
            <td>2019-01-31</td>
            <td>BK국제관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>자연과학대학</td>
            <td>의예과</td>
            <td>2018-05708</td>
            <td>문수현</td>
            <td>2019-01-31</td>
            <td>공학관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>음악대학</td>
            <td>성악과</td>
            <td>2018-05708</td>
            <td>민근희</td>
            <td>2019-01-31</td>
            <td>약학관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          <tr>
            <td>
              <label class="checkbox_css_C">
                <input type="checkbox" />
                <span class="checkmark_C"></span>
              </label>
            </td>
            <td>2018-12-01</td>
            <td>약학대학</td>
            <td>약학과</td>
            <td>2018-05708</td>
            <td>박서윤</td>
            <td>2019-01-31</td>
            <td>복지관</td>
            <td><span class="tc_blue">신청중</span></td>
            <td>2018-12-01</td>
          </tr>
          </tbody>
        </table>

        <!-- s:paging -->
        <div class="ac">
          <!-- s:paging -->
          <div class="paging">

            <div class="fl">
              <select class="ui_sel w100">
                <option>상태 선택</option>
                <option>반려</option>
                <option>신청중</option>
                <option>승인</option>
                <option>삭제</option>
              </select>
            </div>

            <a href="#" class="ico btn_page_frist disabled"><i>맨앞으로</i></a><a href="#" class="ico btn_page_prve disabled"><i>이전</i></a>
            <span class="page_num">
                                <a href="javascript:;" class="here">1</a>
                                <a href="javascript:;">2</a>
                                <a href="javascript:;">3</a>
                                <a href="javascript:;">4</a>
                                <a href="javascript:;">5</a>
                            </span>
            <a href="#" class="ico btn_page_next"><i>다음</i></a><a href="#" class="ico btn_page_last"><i>맨뒤으로</i></a>

            <div class="fr">
              <a href="javascript:;" class="btn_pos"><span>처리</span></a>
            </div>

          </div>
          <!-- e:paging -->
        </div>
        <!-- e:paging -->
        <div class="gap10"></div>

      </div>
      <!-- e:con_box -->

    </div>
    <!-- e:inner_container -->

  </div>
  <!-- e:rightContainer -->
  </div>
</template>

<script>
import Left from './Left.vue'
import Head from './head.vue'

export default {
  name: 'manage',
  components: {
    Left, Head
  }
}
</script>

<style scoped>

</style>
