<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPatients, deletePatient } from '../services/patientService';
import type { Patient } from '../../../backend/src/models/Patient';
import { useRouter } from 'vue-router';
import '../assets/styles.css';

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
  <div class="patient-list">
    <h2>👥 All Patients</h2>
    <button class="create-btn" @click="router.push('/create')">➕ Create New Patient</button>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th class="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.id }}</td>
            <td>{{ patient.name }}</td>
            <td>{{ patient.email }}</td>
            <td class="actions">
              <button @click="router.push(`/patient/${patient.id}`)">🔍 View</button>
              <button @click="router.push(`/edit/${patient.id}`)">✏️ Edit</button>
              <button @click="handleDelete(patient.id)">🗑️ Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>