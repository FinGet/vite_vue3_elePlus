<template>
  <el-card>
    <u-table
      :options="options"
      :data="tableData"
      elementLoadingText="加载中..."
      elementLoadingBackground="rgba(0,0,0,.8)"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      isEditRow
      pagination
      stripe
      :total="total"
      :currentPage="current"
      :pageSize="pageSize"
      v-model:editRowIndex="editRowIndex"
      @confirm="confirm"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <template #date="{ scope }">
        <div class="flex-center">
          <el-icon :size="20"><Timer></Timer></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
      <template #name="{ scope }">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="small">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
      <template #editRow="scope">
        <el-button size="small" type="primary" @click="sure(scope.scope)">确认</el-button>
        <el-button size="small" type="danger">取消</el-button>
      </template>
      <template #action="scope">
        <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </u-table>
    <el-button class="mt-4 marginT10 width100" @click="onAddItem">Add Item</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { TableOptions } from '@/components/UTable/types/types';

const now = new Date();
let options: TableOptions[] = [
  {
    prop: 'date',
    label: '日期',
    slot: 'date',
    editable: true
  },
  {
    prop: 'name',
    label: '姓名',
    slot: 'name'
  },
  {
    prop: 'state',
    label: '地区',
  },
  {
    prop: 'city',
    label: '城市',
  },
  {
    prop: 'address',
    label: '地址',
    editable: true
  },
  {
    label: '操作',
    action: true,
  }
]
let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)
const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]);

let editRowIndex = ref<string>('')
let svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1);
};
let handleSizeChange = (val: number) => {
  pageSize.value = val
  // getData()
}
let handleCurrentChange = (val: number) => {
  current.value = val
  // getData()
}

let edit = (scope: any) => {
  // console.log(scope)
  editRowIndex.value = 'edit'
}
let sure = (scope: any) => {
  console.log(scope)
}
const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  });
};
</script>