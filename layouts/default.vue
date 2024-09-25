<template>
  <div class="cursor-default select-none min-h-screen flex flex-col">
    <!-- Header Section -->
    <header class="bg-blue-900 text-white text-center p-4 shadow-md">
      <h1 class="text-4xl font-extrabold mb-1 tracking-wide">My Portfolio</h1>
      <p class="text-lg mb-3">Akella Venkata Subrahmanya Ravi Teja</p>
      <img src="/Ravi Teja.jpg" alt="my Photo" class="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-blue-400 transition-transform duration-300 hover:transform hover:scale-105" />

      <!-- Navigation Links -->
      <nav class="flex justify-center space-x-3">
        <nuxt-link to="/" class="text-white hover:text-blue-300 transition duration-300">Home</nuxt-link>
        <nuxt-link to="/details/projects" class="text-white hover:text-blue-300 transition duration-300">Projects</nuxt-link>
        <nuxt-link to="/details/internship" class="text-white hover:text-blue-300 transition duration-300">Internship</nuxt-link>
        <nuxt-link to="/details/skills" class="text-white hover:text-blue-300 transition duration-300">Skills</nuxt-link>
        <nuxt-link to="/details/certifications" class="text-white hover:text-blue-300 transition duration-300">Certifications</nuxt-link>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow">
      <NuxtPage /> <!-- Ensure this is included -->
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-100 text-center text-sm text-gray-500 p-4 border-t mt-auto"">
      © 2024 Ravi Teja. All rights reserved.
    </footer>
  </div>
</template>






