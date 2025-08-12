<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPatient, createPatient, updatePatient } from '../services/patientService';

const route = useRoute();
const router = useRouter();
const isEdit = route.name === 'EditPatient';
const name = ref('');
const email = ref('');
const age = ref(0);
const gender = ref<'male' | 'female' | 'other' | 'not_specified'>('not_specified'); 
const heightCm = ref<number | undefined>(undefined);
const weightKg = ref<number | undefined>(undefined);
const bloodType = ref<'A' | 'B' | 'AB' | "O"| 'not_specified'>('not_specified');
const smoker = ref<boolean | undefined>(undefined);
const pregnant = ref<boolean | undefined>(undefined);

onMounted(async () => {
  if (isEdit) {
    const res = await getPatient(Number(route.params.id));
    name.value = res.data.name;
    email.value = res.data.email;
    gender.value = res.data.gender;
    bloodType.value = res.data.bloodType
    age.value = res.data.age;
    heightCm.value = res.data.heightCm;
    weightKg.value = res.data.weightKg;
    smoker.value = res.data.smoker;
    pregnant.value = res.data.pregnant;
  }
});

const handleSubmit = async () => {
  const payload = { 
    name: name.value, 
    email: email.value,
    age: age.value,
    gender: gender.value,
    heightCm: heightCm.value,
    weightKg: weightKg.value,
    smoker: smoker.value,
    pregnant: pregnant.value,
    bloodType: bloodType.value
};
  if (isEdit) {
    await updatePatient(Number(route.params.id), payload);
  } else {
    await createPatient(payload);
  }
  router.push('/');
};
</script>

<template>
  <div>
    <h2>{{ isEdit ? 'Edit Patient' : 'Create Patient' }}</h2>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input v-model="name" required />
      <label>Email:</label>
      <input v-model="email" required />
      <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>
