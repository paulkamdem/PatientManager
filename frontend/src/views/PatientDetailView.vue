<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute, useRouter  } from 'vue-router';
import { getPatient } from '../services/patientService';
import '../assets/detailStyle.css';

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
