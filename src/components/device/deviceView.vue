<template>
  <!-- s:rightContainer -->
  <div id="rightContainer">
    <!-- s:inner_container -->
    <div class="inner_container">

      <!-- s:con_box -->
      <div class="con_box">

        <h3>단말기 등록/조회</h3>

        <div class="gap10"></div>

        <div class="tc_666 f13">※ 50217~50344 까지 관정도서관에서 사용예정으로 해당 번호 등록 금지</div>

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

      <!-- s:con_box -->
      <div class="con_box con_bon_line">

        <div class="fl"><h4>전체 10건</h4></div>

        <div class="gap5"></div>

        <table class="tbl_col_in tbl_col_td">
          <colgroup>
            <col style="width:*;">
            <col style="width:20%;">
            <col style="width:14%;">
            <col style="width:*;">
            <col style="width:8%;">
            <col style="width:8%;">
            <col style="width:8%;">
            <col style="width:12%;">
          </colgroup>
          <thead>
          <tr>
            <th scope="col">단말기 ID</th>
            <th scope="col">IP</th>
            <th scope="col">건물</th>
            <th scope="col">설치장소</th>
            <th scope="col">앱버전</th>
            <th scope="col">스케줄</th>
            <th scope="col">로그수</th>
            <th scope="col">사용유무</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>43284</td>
            <td>184.37.238.217</td>
            <td>의과대학</td>
            <td>1층 후문</td>
            <td>1.5</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>49428</td>
            <td>103.222.177.198</td>
            <td>수의과대학</td>
            <td>2층 정문</td>
            <td>1.5</td>
            <td><span class="tc_blue">Y</span></td>
            <td>Y</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>46065</td>
            <td>54.8.87.114</td>
            <td>공과대학</td>
            <td>1층 정문</td>
            <td>&nbsp;</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>41284</td>
            <td>157.208.6.160</td>
            <td>생활과학대학</td>
            <td>2층 후문</td>
            <td>1.4</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>41296</td>
            <td>133.138.40.167</td>
            <td>미술대학</td>
            <td>1층 탁구장</td>
            <td>1.5</td>
            <td><span class="tc_blue">Y</span></td>
            <td>Y</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>44948</td>
            <td>1.134.88.224</td>
            <td>경영대학</td>
            <td>3층 후문</td>
            <td>4.2</td>
            <td><span class="tc_blue">Y</span></td>
            <td>Y</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>46470</td>
            <td>153.29.172.73</td>
            <td>사회과학대학</td>
            <td>1층 정문</td>
            <td>1.5</td>
            <td><span class="tc_blue">Y</span></td>
            <td>Y</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>48504</td>
            <td>133.61.255.60</td>
            <td>자연과학대학</td>
            <td>1층 정문</td>
            <td>&nbsp;</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>45363</td>
            <td>89.29.193.215</td>
            <td>음악대학</td>
            <td>4층 휴게실</td>
            <td>4.2</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          <tr>
            <td>43673</td>
            <td>118.186.94.248</td>
            <td>약학대학</td>
            <td>1층 정문</td>
            <td>1.3</td>
            <td><span class="tc_blue">N</span></td>
            <td>N</td>
            <td>사용(통합)</td>
          </tr>
          </tbody>
        </table>

        <!-- s:paging -->
        <div class="ac">
          <!-- s:paging -->
          <div class="paging">

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
              <a href="javascript:;" class="btn_pos"><span>등록</span></a>
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
</template>

<script>
  export default {
    name: "deviceView"
  }
</script>

<style scoped>

</style>
