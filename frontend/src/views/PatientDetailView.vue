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
    error.value = 'User not found.';
    router.push({ name: 'NotFound' });
  }

 
});
</script>

<!--
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
-->

<template>
  <div class="detail-container" v-if="patient">
    <div class="detail-card">
      <h2>👤 Patient Profile</h2>
      <div class="detail-grid">
        <div class="detail-item"><strong>Name:</strong> {{ patient.name }}</div>
        <div class="detail-item"><strong>Email:</strong> {{ patient.email }}</div>
        <div class="detail-item"><strong>Age:</strong> {{ patient.age ?? '—' }}</div>
        <div class="detail-item"><strong>Gender:</strong> {{ patient.gender }}</div>
        <div class="detail-item"><strong>Height:</strong> {{ patient.heightCm ?? '—' }} cm</div>
        <div class="detail-item"><strong>Weight:</strong> {{ patient.weightKg ?? '—' }} kg</div>
        <div class="detail-item"><strong>Blood Type:</strong> {{ patient.bloodType }}</div>
        <div class="detail-item"><strong>Smoker:</strong> {{ patient.smoker ? 'Yes' : 'No' }}</div>
        <div class="detail-item" v-if="patient.gender === 'female'">
          <strong>Pregnant:</strong> {{ patient.pregnant ? 'Yes' : 'No' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.detail-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  color: #2c3e50;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.detail-item {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  color: #34495e;
}

/* Dark mode */
.dark .detail-card {
  background-color: #2c2c3c;
  color: #eee;
}

.dark .detail-item {
  background-color: #3a3a4a;
  color: #eee;
}
</style>
