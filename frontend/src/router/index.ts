import { createRouter, createWebHistory } from 'vue-router';
import PatientListView from '../views/PatientListView.vue';
import PatientDetailView from '../views/PatientDetailView.vue';
import PatientFormView from '../views/PatientFormView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import WrongUrlFormatView from '../views/WrongUrlFormatView.vue';

const routes = [
  { path: '/', name: 'PatientList', component: PatientListView },
  { path: '/patient/:id', name: 'PatientDetail', component: PatientDetailView },
  { path: '/create', name: 'CreatePatient', component: PatientFormView },
  { path: '/edit/:id', name: 'EditPatient', component: PatientFormView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  { path: '/:pathMatch(.*)*', name: 'WrongUrlFormat', component: WrongUrlFormatView }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
