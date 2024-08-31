<template>
    <aside class="sidebar bg-white rounded-xl shadow-md w-full md:w-72 flex flex-col items-center p-4">
      <nav class="flex flex-col items-center gap-4 flex-1">
        <ul class="flex flex-col items-center gap-4">
          <li>
            <button @click="navigateTo('index.html')" class="btn-sidebar flex items-center">
              <img src="../assets/home-2.svg" class="h-6 w-6" alt="">
              <span class="ml-2">Главная</span>
            </button>
          </li>
          <li>
            <button @click="navigateTo('requests.html')" class="btn-sidebar flex items-center">
              <img src="../assets/directbox-notif.svg" class="h-6 w-6" alt="">
              <span class="ml-2">Заявки</span>
            </button>
          </li>
          <li>
            <button @click="navigateTo('reports.html')" class="btn-sidebar flex items-center">
              <img src="../assets/activity.svg" class="h-6 w-6" alt="">
              <span class="ml-2">Отчеты</span>
            </button>
          </li>
          <li>
            <button @click="navigateTo('workers.html')" class="btn-sidebar flex items-center">
              <img src="../assets/profile-2user.svg" class="h-6 w-6" alt="">
              <span class="ml-2">Рабочие</span>
            </button>
          </li>
        </ul>
        <div class="login-button mt-auto">
          <button @click="navigateTo('login.html')" class="btn-sidebar flex items-center">
            <img src="../assets/exit.svg" class="h-6 w-6" alt="">
            <span class="ml-2" style="color: #FF6B00;">Войти</span>
          </button>
        </div>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'TheSidebar',
    methods: {
      navigateTo(page) {
        window.location.href = page;
      }
    }
  }
  </script>
  
  <style scoped>
  .btn-sidebar {
    font-size: 24px;
    width: 241px;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    display: flex;
    color: #123E63;
    text-decoration: none;
    padding: 10px;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.09);
  }
  
  .btn-sidebar:hover {
    background-color: #FF6B00;
    color: white;
  }
  
  .btn-sidebar:hover img {
    filter: brightness(0) invert(1);
  }
  </style>
  