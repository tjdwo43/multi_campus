<template>
  <div>
    <div id="rightContainer">
      <div class="inner_container">

        <!-- s:con_box -->
        <div class="con_box">

          <h3>출입내역 조회</h3>

          <form id="frm_sch" method="POST" name="frm_sch" onsubmit="return false;" role="form">
            <input id="IDNo" name="IDNo" type="hidden" value="P0038493"><!-- 학번연동 필요-->
            <input id="pagenum" name="pagenum" type="hidden" value="1">
            <input id="pagesize" name="pagesize" type="hidden" value="10">
            <input name="admin_yn" type="hidden" value="N">
          </form>

          <div class="gap10"></div>

        </div>
        <!-- e:con_box -->

        <!-- s:con_box -->
        <div class="con_box con_bon_line">

          <div class="fl"><h4>전체 <span id="totalRow">0</span>건</h4></div>

          <div class="gap5"></div>

          <table class="tbl_col_in tbl_col_td tblTd">
            <colgroup>
              <col style="width:20%;">
              <col>
              <col>
            </colgroup>
            <thead>
            <tr>
              <th scope="col">출입일자</th>
              <th scope="col">구분</th>
              <th scope="col">위치</th>
            </tr>
            </thead>
            <tbody id="tbody_list">
            <tr>
              <td>2019.03.07 20:13:11</td>
              <td>USIM</td>
              <td>법과대학 15동</td>
            </tr>
            <tr>
              <td>2019.03.07 13:26:43</td>
              <td>USIM</td>
              <td>관정관</td>
            </tr>
            <tr>
              <td>2019.03.07 13:20:36</td>
              <td>USIM</td>
              <td>관정관</td>
            </tr>
            <tr>
              <td>2019.03.07 13:13:40</td>
              <td>USIM</td>
              <td>관정관</td>
            </tr>
            <tr>
              <td>2019.03.07 12:38:12</td>
              <td>USIM</td>
              <td>관정관</td>
            </tr>
            </tbody>
          </table>

        </div>
        <!-- e:con_box -->

      </div>
    </div>
  </div>
</template>

<script>
import incHead from '@/components/inc/incHead'
import Left from '@/components/inc/left'

export default {
  name: 'userManage',
  components: {Left, incHead}
}
</script>

<style scoped>

</style>
