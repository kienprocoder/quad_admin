<template>
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-10">

        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-block btn-success float-sm-right">Import CSV</button>
        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-block btn-success float-sm-right">Regist</button>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!--  search-->
  <section class="content pl-3 pr-3">

    <!-- Default box -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Search</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="card-body p-0" style="display: block;">
        <form action="#">
          <div class="c-member-search">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Result Type:</label>
                  <input class="form-control" type="search"
                         tabindex="0" autocomplete="off"
                         autocorrect="off" autocapitalize="none"
                         spellcheck="false" role="searchbox"
                         aria-autocomplete="list" placeholder="Any">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label>Sort Order:</label>
                  <Select2 v-model="myValue" :options="myOptions"
                           :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)"
                           @select="mySelectEvent($event)"/>
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label>Order By:</label>
                  <Select2 v-model="myValue" :options="myOptions"
                           :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)"
                           @select="mySelectEvent($event)"/>
                </div>
              </div>
            </div>

            <div class="row justify-content-between">
              <div class="col-1">
                <button type="button" class="btn btn-block bg-gradient-primary">Search</button>
              </div>
              <div class="col-1 align-self-end">
                <button type="button" class="btn btn-outline-secondary" style="padding-left: 21px; padding-right: 21px">
                  Export File
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->

  </section>
  <!--  end search-->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card" style="margin-bottom: 5rem">
            <div class="card-body">
              <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="row">
                  <div class="col-sm-12 col-md-6"></div>
                  <div class="col-sm-12 col-md-6"></div>
                  <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of
                      57 entries
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table id="example2" class="table table-bordered table-hover dataTable dtr-inline"
                           aria-describedby="example2_info">
                      <thead>
                      <tr>
                        <th class="sorting sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                            aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                          Rendering engine
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                            aria-label="Browser: activate to sort column ascending">Browser
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                            aria-label="Platform(s): activate to sort column ascending">Platform(s)
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                            aria-label="Engine version: activate to sort column ascending">Engine version
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                            aria-label="CSS grade: activate to sort column ascending">CSS grade
                        </th>
                      </tr>
                      </thead>
                      <tbody>


                      <tr class="odd">
                        <td class="dtr-control sorting_1" tabindex="0">Gecko</td>
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control sorting_1" tabindex="0">Gecko</td>
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd">
                        <td class="dtr-control sorting_1" tabindex="0">Gecko</td>
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control sorting_1" tabindex="0">Gecko</td>
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                        <td>1.9</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Camino 1.5</td>
                        <td>OSX.3+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Netscape 7.2</td>
                        <td>Win 95+ / Mac OS 8.6-9.2</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Netscape Browser 8</td>
                        <td>Win 98SE+</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Netscape Navigator 9</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 dtr-control">Gecko</td>
                        <td>Mozilla 1.0</td>
                        <td>Win 95+ / OSX.1+</td>
                        <td>1</td>
                        <td>A</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row justify-content-between">
                  <div class="col-sm-12 col-md-12 align-self-end">
                    <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                      <ul class="pagination" style="justify-content: center">
                        <li class="paginate_button page-item previous disabled" id="example2_previous"><a href="#"
                                                                                                          aria-controls="example2"
                                                                                                          data-dt-idx="0"
                                                                                                          tabindex="0"
                                                                                                          class="page-link">Previous</a>
                        </li>
                        <li class="paginate_button page-item active"><a href="#" aria-controls="example2"
                                                                        data-dt-idx="1" tabindex="0"
                                                                        class="page-link">1</a></li>
                        <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="2"
                                                                  tabindex="0" class="page-link">2</a></li>
                        <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="3"
                                                                  tabindex="0" class="page-link">3</a></li>
                        <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="4"
                                                                  tabindex="0" class="page-link">4</a></li>
                        <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="5"
                                                                  tabindex="0" class="page-link">5</a></li>
                        <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="6"
                                                                  tabindex="0" class="page-link">6</a></li>
                        <li class="paginate_button page-item next" id="example2_next"><a href="#"
                                                                                         aria-controls="example2"
                                                                                         data-dt-idx="7" tabindex="0"
                                                                                         class="page-link">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</template>

<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import axios from "axios";
// import {Form, Field} from 'vee-validate';
// import * as Yup from 'yup';
// import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css'
import Select2 from 'vue3-select2-component';

export default {
  components: {
    // Form,
    // Field
    Select2
  },
  name: "UserList",
  data() {
    return {
      myValue: '',
      myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
    }
  },
};
</script>
<style>
.c-member-search {
  padding: 1rem 1.25rem;
}
</style>
