<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPatients, deletePatient } from '../services/patientService';
import type { Patient } from '../../../backend/src/models/Patient';
import { useRouter } from 'vue-router';

const patients = ref<Patient[]>([]);
const router = useRouter();

onMounted(async () => {
  const res = await getPatients();
  patients.value = res.data;

});

const handleDelete = async (id: number) => {
  await deletePatient(id);
  patients.value = patients.value.filter(u => u.id !== id);
};
</script>

<template>
  <div>
    <h2>Patient List</h2>
    <button @click="router.push('/create')">Create New Patient</button>
    <ul>
      <li v-for="patient in patients" :key="patient.id">
        {{ patient.name }} - {{ patient.email }}
        <button @click="router.push(`/patient/${patient.id}`)">View</button>
        <button @click="router.push(`/edit/${patient.id}`)">Edit</button>
        <button @click="handleDelete(patient.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
