import {createApp} from 'vue';
import router from "@/router/index";
import App from '@/App.vue';
import store from "@/store/index.js";

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';

//css
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';

import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import "@/assets/layout/styles/layout/global.css";

import "leaflet/dist/leaflet.css";

//

// PrimeVue components

import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import ProgressSpinner from "primevue/progressspinner";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Dialog from "primevue/dialog";
import ScrollTop from "primevue/scrolltop";
import TabMenu from "primevue/tabmenu";
import ProgressBar from "primevue/progressbar";
import Toast from "primevue/toast";
import Image from "primevue/image";
import RadioButton from "primevue/radiobutton";
import Chip from "primevue/chip";
import Galleria from "primevue/galleria";
import ConfirmDialog from 'primevue/confirmdialog';
import ScrollPanel from "primevue/scrollpanel";
//

// Leaflet components
import {LMap} from "@vue-leaflet/vue-leaflet";
import {LTileLayer} from "@vue-leaflet/vue-leaflet";
import {LMarker} from "@vue-leaflet/vue-leaflet";
import {LControlLayers} from "@vue-leaflet/vue-leaflet";
import {LGeoJson} from "@vue-leaflet/vue-leaflet";
import {LPopup} from "@vue-leaflet/vue-leaflet";
import {LControl} from "@vue-leaflet/vue-leaflet";
import {LPolyline} from "@vue-leaflet/vue-leaflet";


//


const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.use(ToastService);
app.use(ConfirmationService);
app.use(router);
app.use(store);

app.component('Sidebar', Sidebar);
app.component('Menu', Menu);
app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('ProgressSpinner', ProgressSpinner);
app.component('LMap', LMap);
app.component('LTileLayer', LTileLayer);
app.component('LMarker', LMarker);
app.component('LControlLayers', LControlLayers);
app.component('LGeoJson', LGeoJson);
app.component('LPopup', LPopup);
app.component('LPolyline', LPolyline);
app.component('LControl', LControl);
app.component('Textarea', Textarea);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);
app.component('FileUpload', FileUpload);
app.component('Dialog', Dialog);
app.component('ScrollTop', ScrollTop);
app.component('TabMenu', TabMenu);
app.component('ProgressBar', ProgressBar);
app.component('Toast', Toast);
app.component('Image', Image);
app.component('RadioButton', RadioButton);
app.component('Chip', Chip);
app.component('Galleria', Galleria);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ScrollPanel', ScrollPanel);

app.directive('ripple', Ripple);

app.mount('#app');
