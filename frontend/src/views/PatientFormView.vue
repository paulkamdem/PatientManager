<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPatient, createPatient, updatePatient } from '../services/patientService';
import '../assets/formsStyle.css';

const route = useRoute();
const router = useRouter();

const isEdit = route.name === 'EditPatient';

const name = ref('');
const email = ref('');
const age = ref<number | null>(null);
const gender = ref<'male' | 'female' | 'other' | 'not_specified'>('not_specified');
const heightCm = ref<number | null>(null);
const weightKg = ref<number | null>(null);
const bloodType = ref<'A' | 'B' | 'AB' | 'O' | 'not_specified'>('not_specified');
const smoker = ref(false);
const pregnant = ref(false);


const error = ref<string | null>(null);
const showPregnant = computed(() => gender.value === 'female');


onMounted(async () => {
  if (isEdit) {

    const id = Number(route.params.id);
    if (isNaN(id)) {
      error.value = 'Invalid patient ID.';
      router.push({ name: 'WrongUrlFormat' });
      return;
    }

    try {
      if (isEdit) {
        const res = await getPatient(Number(route.params.id));
        const user = res.data;
        name.value = user.name;
        email.value = user.email;
        age.value = user.age ?? null;
        gender.value = user.gender ?? 'not_specified';
        heightCm.value = user.heightCm ?? null;
        weightKg.value = user.weightKg ?? null;
        bloodType.value = user.bloodType ?? 'not_specified';
        smoker.value = user.smoker ?? false;
        pregnant.value = user.pregnant ?? false;
      }

    }catch(e) {
      error.value = 'Patient not found.';
      router.push({ name: 'NotFound' });
    }
    
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
    bloodType: bloodType.value,
    smoker: smoker.value,
    pregnant: showPregnant.value ? pregnant.value : undefined
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
  <div class="window-form">
    <div class="form-panel">
      <h2>{{ isEdit ? '✏️ Edit Patient' : '➕ Create Patient' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-grid">
          <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" required />
          </div>
          <div class="form-group">
            <label>Age</label>
            <input v-model="age" type="number" min="0" />
          </div>
          <div class="form-group">
            <label>Gender</label>
            <select v-model="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="not_specified">Not Specified</option>
            </select>
          </div>
          <div class="form-group">
            <label>Blood Type</label>
            <select v-model="bloodType">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
              <option value="not_specified">Not Specified</option>
            </select>
          </div>
          <div class="form-group">
            <label>Height (cm)</label>
            <input v-model="heightCm" type="number" min="0" />
          </div>
          <div class="form-group">
            <label>Weight (kg)</label>
            <input v-model="weightKg" type="number" min="0" />
          </div>
          <div class="form-group checkbox-group">
            <label>
              <input type="checkbox" v-model="smoker" />
              Smoker
            </label>
          </div>
          <div v-if="showPregnant" class="form-group checkbox-group">
            <label>
              <input type="checkbox" v-model="pregnant" />
              Pregnant
            </label>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit">{{ isEdit ? 'Update Patient' : 'Create Patient' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>
