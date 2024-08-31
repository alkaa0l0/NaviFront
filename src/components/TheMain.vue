<template>
    <div class="main-content flex flex-col md:flex-1 md:ml-4 mt-6 md:mt-0">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Главная</h1>
      <div class="breadcrumbs flex flex-col text-gray-600 mb-4">
        <a href="#" class="inline-block">● Главная</a>
        <h2 class="text-lg md:text-xl font-bold" style="color: #5B5B5B;">Анализируем и бережно храним данные</h2>
      </div>
      <div class="container-card flex flex-col md:flex-row gap-4 justify-center items-center">
        <div class="card1 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4" style="width: 25%; height: 232px;">
          <h3 style="color: #123E63;" class="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">Аналитика</h3>
          <div class="chart-container w-full flex justify-center items-center">
            <canvas id="myPieChart" class="w-28 h-28"></canvas>
          </div>
          <p style="color: #FF6B00;" class="text-lg text-orange-500 font-bold mt-2 text-center">57% 😢</p>
        </div>
        <div class="card2 bg-white rounded-xl shadow-md flex flex-col justify-center p-4" style="width: 75%; height: 232px;">
          <div class="card2-content">
            <div class="card2-text">
              <h3 style="color: #123E63;" class="text-xl font-bold text-gray-800 mb-2 text-left">Топ 3 работника месяца</h3>
            </div>
            <div class="card2-images flex justify-center items-center mt-4">
              <img src="../assets/Portret.jpg" alt="" class="w-157 h-155 rounded-[19px]">
              <img src="../assets/Portret.jpg" alt="" class="w-157 h-155 rounded-[19px] ml-4">
              <img src="../assets/Portret.jpg" alt="" class="w-157 h-155 rounded-[19px] ml-4">
            </div>
          </div>
        </div>
      </div>
      <div class="googleCart mt-6">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb454c5a3af7c56714d0b5184577a034a780ced88594fc2cb071ac1f5e2d5b50&amp;source=constructor" width="100%" height="400" frameborder="0" class="rounded-2xl shadow-md"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  export default {
    name: 'Main',
    setup() {
      onMounted(() => {
        const data = {
          datasets: [{
            data: [43, 57],
            backgroundColor: ['#EDF2F7', '#FF6B00'],
            hoverBackgroundColor: ['#EDF2F7', '#FF6B00']
          }]
        };
  
        const options = {
          responsive: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.raw.toFixed(2) + '%';
                }
              }
            }
          }
        };
  
        const ctx = document.getElementById('myPieChart').getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: options
        });
      });
    }
  };
  </script>
  