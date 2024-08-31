<template>
    <header class="header bg-white rounded-b-xl shadow-md flex justify-between items-center px-4 md:px-8 py-2">
      <div class="logo">
        <img src="../assets/logo 75.svg" alt="" class="h-12">
      </div>
      <nav class="top-nav">
        <ul class="flex gap-4">
          <li><a href="#" class="circle p-2 flex items-center justify-center"><img src="../assets/message-question.svg" alt=""></a></li>
          <li><a href="#" class="circle p-2 flex items-center justify-center"><img src="../assets/notification.svg" alt=""></a></li>
          <li><a href="#" class="circle p-2 flex items-center justify-center"></a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'TheHeader'
  }
  </script>
  
  <style scoped>
  .circle {
    display: block;
    width: 63px;
    height: 63px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.09);
  }
  
  .top-nav {
    justify-content: center;
    align-items: center;
  }
  </style>
  