import { createRouter, createWebHistory } from 'vue-router';
import PatientListView from '../views/PatientListView.vue';
import PatientDetailView from '../views/PatientDetailView.vue';
import PatientFormView from '../views/PatientFormView.vue';

const routes = [
  { path: '/', name: 'PatientList', component: PatientListView },
  { path: '/patient/:id', name: 'PatientDetail', component: PatientDetailView },
  { path: '/create', name: 'CreatePatient', component: PatientFormView },
  { path: '/edit/:id', name: 'EditPatient', component: PatientFormView }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
