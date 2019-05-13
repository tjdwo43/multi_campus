<template>
<div>
  <!-- s:rightContainer -->
  <div id="rightContainer">
    <!-- s:inner_container -->
    <div class="inner_container">

      <!-- s:con_box -->
      <div class="con_box">

        <h3>스케줄 설정</h3>

        <div class="tbl_row_wrap">
          <!-- s:tbl_row -->
          <table class="tbl_row">
            <colgroup>
              <col style="width:15%;" /> <col style="width:*;" />
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">단말기</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>선택</option>
                </select>
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

        <div class="gap10"></div>

      </div>
      <!-- e:con_box -->

      <!-- s:con_box -->
      <div class="con_box con_bon_line relative_index">

        <div class="fl w48p">
          <h3>단말기 정보</h3>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <tbody>
              <tr>
                <th>IP</th>
                <td>000.00.00.000</td>
              </tr>
              <tr>
                <th>PORT</th>
                <td>7011</td>
              </tr>
              <tr>
                <th>설치일자</th>
                <td>2018년 1월 10일</td>
              </tr>
              <tr>
                <th>설치장소</th>
                <td>지하1층 남측</td>
              </tr>
              <tr>
                <th>스케쥴 설정</th>
                <td>2018년 10월 ~ 2019년 9월</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="gap30"></div>

          <div class="absolute_btm_index_schedule w45p">
            <!-- S:month_year 년 -->
            <div class="schedule_set_year">
              <span><a href="#"><img src="images/schedule_set_tbl_arrow_l.png" alt="이전 달" /></a></span>
              <span>2018년 10월</span>
              <span><a href="#"><img src="images/schedule_set_tbl_arrow_r.png" alt="다음 달" /></a></span>
            </div>
            <!-- E:month_year 년 -->

            <!-- s:schedule_tbl -->
            <table class="schedule_set_tbl">
              <colgroup>
                <col style="width:*;" /> <col style="width:*;" /> <col style="width:*;" /> <col style="width:*;" /> <col style="width:*;" /> <col style="width:*;" /> <col style="width:*;" />
              </colgroup>
              <thead>
              <tr>
                <th>일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td><span class="schedule_set_tbl_current">4</span></td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>
                  <div class="tooltip">
                    <div class="icon">
                      <span class="schedule_set_tbl_on">9</span>
                      <div class="hover">2018년 10월 09일<span class="arrow"> </span>
                        <ul>
                          <li><span class="schedule_holiday"></span>휴일설정</li>
                          <li><span class="schedule_half_holiday"></span>반휴일설정</li>
                          <li><span class="schedule_normal1_holiday"></span>사용자정의1</li>
                          <li><span class="schedule_normal2_holiday"></span>사용자정의2</li>
                          <li><span class="schedule_weekday_holiday"></span>평일설정</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
              <tr>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              </tbody>
            </table>
            <!-- e:schedule_tbl -->
            <div class="gap10"></div>

            <!-- S:: 버튼  -->
            <div class="btn_group">
              <div class="tc"><a href="javascript:;" class="btn_pos"><span>DB저장</span></a> <a href="javascript:;" class="btn_pos pad10lr"><span>단말기전송</span></a></div>
            </div>
            <!-- E:: 버튼  -->

            <div class="gap10"></div>

          </div>
          <!-- e:단말기 정보 왼쪽 -->

        </div>
        <!-- e:단말기 정보 왼쪽 -->

        <div class="fr w48p">
          <h3>단말기 스케줄</h3>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row schdule_td_s">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <thead>
              <tr>
                <th colspan="2" class="ac">평일</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>개방시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              <tr>
                <th>폐쇄시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap2"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row schdule_td_s">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <thead>
              <tr>
                <th colspan="2" class="ac">반휴일</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>개방시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              <tr>
                <th>폐쇄시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap2"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row schdule_td_s">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <thead>
              <tr>
                <th colspan="2" class="ac">휴일</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>개방시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              <tr>
                <th>폐쇄시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap2"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row schdule_td_s">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <thead>
              <tr>
                <th colspan="2" class="ac">사용자 정의1</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>개방시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              <tr>
                <th>폐쇄시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap2"></div>

          <div class="gap2"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row schdule_td_s">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <thead>
              <tr>
                <th colspan="2" class="ac">사용자 정의2</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>개방시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              <tr>
                <th>폐쇄시간</th>
                <td><input type="text" class="w45p" /> ~ <input type="text" class="w45p" /></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="gap10"></div>

          <!-- S:: 버튼  -->
          <div class="btn_group">
            <div class="tc"><a href="javascript:;" class="btn_pos pad10lr"><span>단말기전송</span></a></div>
          </div>
          <!-- E:: 버튼  -->

          <div class="gap10"></div>

        </div>
        <!-- e:단말기 스케줄 오른쪽 -->

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
  export default {
    name: "deviceConfSchedule"
  }
</script>

<style scoped>

</style>
