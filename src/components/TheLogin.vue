<template>
    <div class="login-container w-full max-w-sm">
      <div class="login-form bg-white rounded-2xl shadow-md p-8">
        <img src="../assets/logo 75.svg" alt="Logo" class="block mx-auto mb-6 max-w-xs">
        <h2 class="text-2xl font-bold mb-4" style="color: #123E63;">Вход</h2>
        <form>
          <label for="email" class="text-left block text-gray-700 mb-1">Email пользователя</label>
          <input placeholder="Email" type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500">
          <label for="password" class="text-left block text-gray-700 mb-1">Пароль</label>
          <input placeholder="Пароль" type="password" id="password" name="password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500">
          <button type="submit" style="display: block; width: 100%; background-color: #FF6B00; color: white; padding: 10px; border-radius: 502.31px;">
            Войти
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login'
  }
  </script>
  