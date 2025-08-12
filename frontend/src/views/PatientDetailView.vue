<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute, useRouter  } from 'vue-router';
import { getPatient } from '../services/patientService';

import type { Patient } from '../../../backend/src/models/Patient';
const route = useRoute();
const router = useRouter();

const patient = ref<Patient | null>(null);

const error = ref<string | null>(null);

onMounted(async () => {
  const id = Number(route.params.id);
  if (isNaN(id)) {
    error.value = 'Invalid patient ID.';
    router.push({ name: 'WrongUrlFormat' });
    return;
  }

  try {
    
    const res = await getPatient(Number(route.params.id));
    patient.value = res.data;

  } catch (e) {
    //error.value = 'User not found.';
    router.push({ name: 'NotFound' });
  }

 
});
</script>

<template>
  <div v-if="patient">
    <h2>Patient Detail</h2>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="patient">
      <p><strong>Name:</strong> {{ patient.name }}</p>
      <p><strong>Email:</strong> {{ patient.email }}</p>
    </div>
  </div>
</template>
