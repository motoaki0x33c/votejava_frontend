<template>
  <div>
    <div class="flex flex-col w-3/4 m-auto">
      <div class="w-full max-w-sm min-w-[200px] relative mt-4">
        <label class="block mb-2 text-sm text-slate-600"> 新增投票 </label>
        <div class="relative">
          <input type="text" v-model="newVoteName"
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow disabled:cursor-not-allowed"
            placeholder="請輸入投票內容" />
          <button type="button"
            class="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
            @click="addVoteItem()">
            新增
          </button>
        </div>
      </div>

      <div class="-m-1.5 overflow-x-auto mt-10">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    投票內容
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    票數
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="voteItem in voteItems" class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    <input type="text" v-model="voteItem.name"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow disabled:cursor-not-allowed"
                      placeholder="請輸入投票內容" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ voteItem.count }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button type="button"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      @click="updateVoteItem(voteItem)">
                      變更名稱
                    </button>
                    <button type="button"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ml-2"
                      @click="deleteVoteItem(voteItem)">
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import manageApi from "@/api/ManageVoteApi";
import toastr from 'toastr'

const voteItems = ref([]);
const newVoteName = ref('');

onMounted(() => {
  getVoteItems();
});

const getVoteItems = async () => {
  try {
    const getVoteItems = await manageApi.getVoteItems();
    voteItems.value = getVoteItems.data;
  } catch (error) {
    console.error("獲取數據失敗:", error);
    toastr.error("獲取數據失敗");
  }
};

const addVoteItem = async () => {
  if (newVoteName.value == '') return toastr.warning("請輸入新增的投票內容");

  try {
    await manageApi.addVoteItem(newVoteName.value);
    getVoteItems();
    toastr.success("新增成功");
  } catch (error) {
    console.error("新增失敗:", error);
    toastr.error("新增失敗");
  }
};

const updateVoteItem = async (voteItem) => {
  if (voteItem.name == '') return toastr.warning("請輸入修改的投票內容");

  try {
    await manageApi.updateVoteItem(voteItem.id, voteItem.name);
    getVoteItems();
    toastr.success("修改成功");
  } catch (error) {
    console.error("修改失敗:", error);
    toastr.error("修改失敗");
  }
};

const deleteVoteItem = async (voteItem) => {
  try {
    await manageApi.deleteVoteItem(voteItem.id);
    getVoteItems();
    toastr.success("刪除成功");
  } catch (error) {
    console.error("刪除失敗:", error);
    toastr.error("刪除失敗");
  }
};
</script>