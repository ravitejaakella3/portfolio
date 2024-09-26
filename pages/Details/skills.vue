<template>
  <div>
    <header class="bg-blue-900 text-white text-center p-4 shadow-md">
      <h1 class="text-3xl font-extrabold mb-1 tracking-wide">My Skills</h1>
    </header>

    <main class="p-6">
      <section class="bg-gray-100 p-8 mt-4 rounded-lg shadow-md">
        <p class="mb-2"><strong>Programming Languages:</strong> Java, Python, SQL</p>
        <p class="mb-2"><strong>Front-End Technologies:</strong> JavaScript, HTML, CSS</p>
        <p class="mb-2"><strong>Front-End Framework:</strong> vue js, nuxtjs, tailwind css</p>
        <p class="mb-2"><strong>Cloud:</strong> AWS</p>
        <p class="mb-2"><strong>Tools:</strong> VS Code, MS Office</p>
        <p class="mb-2"><strong>Soft Skills:</strong> Communication, Problem Solving, Team Work</p>
      </section>
    </main>
  </div>
</template>


<script setup>
definePageMeta({
  layout: 'default'  // Specify the layout if not default
});
</script>