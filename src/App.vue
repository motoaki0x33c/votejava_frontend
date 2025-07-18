<template>
  <div class="min-h-screen flex flex-col">
    <header class="shadow-md bg-blue-950">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <nav class="flex space-x-6">
            <router-link to="/" class="text-white hover:text-blue-300 font-medium">投票首頁</router-link>
            <router-link to="/manage" class="text-white hover:text-blue-300 font-medium">後台控制</router-link>
          </nav>
        </div>
      </div>
    </header>

    <router-view class="flex-1" />

    <footer class="shadow-md bg-blue-950">
      <div class="container mx-auto px-4 py-4">
      </div>
    </footer>
  </div>
</template>