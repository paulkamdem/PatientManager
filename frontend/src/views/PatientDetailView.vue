<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getPatient } from '../services/patientService';

import type { Patient } from '../../../backend/src/models/Patient';
const route = useRoute();
const patient = ref<Patient | null>(null);

onMounted(async () => {
  const res = await getPatient(Number(route.params.id));
  patient.value = res.data;
});
</script>

<template>
  <div v-if="patient">
    <h2>Patient Detail</h2>
    <p><strong>Name:</strong> {{ patient.name }}</p>
    <p><strong>Email:</strong> {{ patient.email }}</p>
  </div>
</template>
