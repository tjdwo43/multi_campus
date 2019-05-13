<template>
  <!-- s:rightContainer -->
  <div id="rightContainer">
    <!-- s:inner_container -->
    <div class="inner_container">

      <!-- s:con_box -->
      <div class="con_box">

        <h3>강의실 등록</h3>

        <div class="gap10"></div>

        <div class="tbl_row_wrap">
          <!-- s:tbl_row -->
          <table class="tbl_row">
            <colgroup>
              <col style="width:15%;" /> <col style="width:35%;" /> <col style="width:15%;" /> <col style="width:35%;" />
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">권한부서</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>전체</option>
                </select>
              </td>
              <th scope="row">모델구분</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>전체</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">스케줄</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>Y</option>
                  <option>N</option>
                </select>
              </td>
              <th scope="row">로그수</th>
              <td class="input">
                <select class="ui_sel w100p">
                  <option>Y</option>
                  <option>N</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">단말기 ID</th>
              <td class="input" colspan="3">
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
          <div class="tc"><a href="javascript:;" class="btn_pos" onclick="javascript:popup_access_app();"><span>조회</span></a> <a href="javascript:;" class="btn_gray"><span>초기화</span></a></div>
        </div>
        <!-- E:: 버튼  -->

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
    name: "roomReg"
  }
</script>

<style scoped>

</style>
