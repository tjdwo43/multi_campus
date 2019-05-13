<template>
  <!-- s:rightContainer -->
  <div id="rightContainer">
    <!-- s:inner_container -->
    <div class="inner_container">

      <!-- s:con_box -->
      <div class="con_box">

        <h3>단말기 상태 조회</h3>

        <div class="tbl_row_wrap">
          <!-- s:tbl_row -->
          <table class="tbl_row">
            <colgroup>
              <col style="width:15%;" /> <col style="width:*;" />
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">건물</th>
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
      <div class="con_box con_bon_line">

        <div class="terminal_menu">
          <ul>
            <li><span class="terminal_normal">정상</span></li>
            <li><span class="terminal_not">통신불가</span></li>
            <li><span class="terminal_open">강제개방</span></li>
            <li><span class="terminal_close">강제폐쇄</span></li>
          </ul>
        </div>

        <div class="gap10"></div>

        <div class="terminal_left">
          <div class="terminal_left_floor">
            <span class="terminal_left_box"><img src="images/cardreader_img_1.png" alt="카드리더기 이미지" /></span>
            <span class="terminal_normal">1층 휴면실</span>
          </div>
          <div class="terminal_left_floor">
            <span class="terminal_left_box"><img src="images/cardreader_img_2.png" alt="카드리더기 이미지" /></span>
            <span class="terminal_open">1층 휴면실</span>
          </div>
          <div class="terminal_left_floor">
            <span class="terminal_left_box"><img src="images/cardreader_img_3.png" alt="카드리더기 이미지" /></span>
            <span class="terminal_close">1층 휴면실</span>
          </div>
        </div>
        <!-- e:terminal_left -->

        <div class="terminal_right">
          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row tblTdH">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <tbody>
              <tr>
                <th>리더기 ID</th>
                <td>50371</td>
              </tr>
              <tr>
                <th>리더기 IP</th>
                <td>000.00.000.000</td>
              </tr>
              <tr>
                <th>리더기상태</th>
                <td>출입통제</td>
              </tr>
              <tr>
                <th>Polling 일시</th>
                <td>2018-12-19 오후 6:33:55</td>
              </tr>
              <tr>
                <th>Polling 시간</th>
                <td>1(분)</td>
              </tr>
              <tr>
                <th>Polling 상태</th>
                <td><span class="tc_blue">정상</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap5"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row tblTdH">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <tbody>
              <tr>
                <th>리더기 ID</th>
                <td>50371</td>
              </tr>
              <tr>
                <th>리더기 IP</th>
                <td>000.00.000.000</td>
              </tr>
              <tr>
                <th>리더기상태</th>
                <td>출입통제</td>
              </tr>
              <tr>
                <th>Polling 일시</th>
                <td>2018-12-19 오후 6:33:55</td>
              </tr>
              <tr>
                <th>Polling 시간</th>
                <td>1(분)</td>
              </tr>
              <tr>
                <th>Polling 상태</th>
                <td><span class="tc_blue">정상</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="gap5"></div>

          <div class="tbl_row_wrap">
            <!-- s:tbl_row -->
            <table class="tbl_row tblTdH">
              <colgroup>
                <col style="width:25%;"> <col style="width:*;">
              </colgroup>
              <tbody>
              <tr>
                <th>리더기 ID</th>
                <td>50371</td>
              </tr>
              <tr>
                <th>리더기 IP</th>
                <td>000.00.000.000</td>
              </tr>
              <tr>
                <th>리더기상태</th>
                <td>출입통제</td>
              </tr>
              <tr>
                <th>Polling 일시</th>
                <td>2018-12-19 오후 6:33:55</td>
              </tr>
              <tr>
                <th>Polling 시간</th>
                <td>1(분)</td>
              </tr>
              <tr>
                <th>Polling 상태</th>
                <td><span class="tc_blue">정상</span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- e:terminal_right -->

        <div class="gap10"></div>

      </div>
      <!-- e:con_box -->

    </div>
    <!-- e:inner_container -->

  </div>
  <!-- e:rightContainer -->
</template>

<script>
  export default {
    name: "deviceStausView"
  }
</script>

<style scoped>

</style>
