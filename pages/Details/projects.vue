<template>
  <div>
    <header class="bg-blue-900 text-white text-center p-4 shadow-md">
      <h1 class="text-4xl font-extrabold mb-1 tracking-wide">Projects</h1>
    </header>

    <main class="p-6">
      <section class="bg-gray-100 p-8 mt-4 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">IoT based Air Pollution Monitoring System using NodeMCU</h2>
        <p class="text-gray-700 leading-relaxed mb-1">Collaborated on the development of an IoT based Air Pollution Monitoring System using NodeMCU.</p>
        <p class="text-gray-700 leading-relaxed mb-4">Contributing expertise in hardware integration to measure and report air pollution levels.</p>
      </section>

      <section class="bg-gray-100 p-8 mt-4 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Design and Implementation of FPGA using QPSK</h2>
        <p class="text-gray-700 leading-relaxed mb-1">Played a vital role in the research and documentation phase.</p>
        <p class="text-gray-700 leading-relaxed mb-4">Improved Modulation and Demodulation techniques in QPSK for enhanced application performance.</p>
      </section>

      <section class="bg-gray-100 p-8 mt-4 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">ABC Travels and Logistics Automation</h2>
        <p class="text-gray-700 leading-relaxed mb-1"><strong>Technologies Used:</strong> Java, JDBC, MySQL, Collections, Exception Handling</p>
        <p class="text-gray-700 leading-relaxed mb-1"><strong>User Authentication:</strong> Developed a login system that enables users to securely authenticate and access the application, ensuring data integrity and personalized user experience.</p>
        <p class="text-gray-700 leading-relaxed mb-4"><strong>Ticket Booking and Rescheduling:</strong> Implemented functionality for users to book tickets by selecting travel details (source, destination, and date) and reschedule existing bookings, with real-time validation and error handling.</p>
        <nuxt-link 
          to="https://github.com/ravitejaakella3/Java-Projects.git" 
          target="_blank"
          class="text-blue-500 underline hover:text-blue-700"
        >
          Project code link
        </nuxt-link>
      </section>
    </main>
  </div>
</template>



<script setup>
definePageMeta({
  layout: 'default'  // Specify the layout if not default
});
</script>