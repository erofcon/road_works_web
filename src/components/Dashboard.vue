<template>

  <ProgressBar v-if="loading" mode="indeterminate" style="height: 6px"></ProgressBar>
  <div v-else class="grid">
    <div class="col-12 lg:col-6 xl:col-3 cursor-pointer" @click="$router.push('/task_list/is_done')">
      <div class="card mb-0 bg-green-100">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block font-medium mb-3 text-black-alpha-90">Выполненные задачи</span>
            <div class="text-900 font-medium text-black-alpha-90 text-3xl">{{ taskStatistic.done_tasks }}</div>
          </div>
          <div class="flex align-items-center justify-content-center bg-green-200 border-round"
               style="width:2.5rem;height:2.5rem">
            <span class="material-icons-outlined text-green-800">verified</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3 cursor-pointer" @click="$router.push('/task_list/is_expired')">
      <div class="card mb-0 bg-red-100">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block font-medium mb-3 text-black-alpha-90">Просроченные задачи</span>
            <div class="text-900 font-medium text-3xl text-black-alpha-90">{{ taskStatistic.expired_tasks }}</div>
          </div>
          <div class="flex align-items-center justify-content-center bg-red-200 border-round"
               style="width:2.5rem;height:2.5rem">
            <span class="material-icons-outlined text-red-800">report</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3 cursor-pointer" @click="$router.push('/task_list/on_execution')">
      <div class="card mb-0 bg-cyan-100">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block font-medium mb-3 text-black-alpha-90">Задачи на исполнении</span>
            <div class="text-900 font-medium text-3xl text-black-alpha-90">{{ taskStatistic.current_tasks }}</div>
          </div>
          <div class="flex align-items-center justify-content-center bg-cyan-200 border-round"
               style="width:2.5rem;height:2.5rem">
            <span class="material-icons-outlined text-cyan-800">model_training</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3 cursor-pointer" @click="$router.push('/task_list/all_tasks')">
      <div class="card mb-0 bg-purple-100">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block font-medium mb-3 text-black-alpha-90">Все задачи</span>
            <div class="text-900 font-medium text-3xl text-black-alpha-90">{{ taskStatistic.all_tasks }}</div>
          </div>
          <div class="flex align-items-center justify-content-center bg-purple-200 border-round"
               style="width:2.5rem;height:2.5rem">
            <span class="material-icons-outlined text-purple-800">bookmark_added</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Последние задачи</h5>
        <div v-if="lastTasks.length===0">
          <h6>Список задачи пуст</h6>
        </div>
        <DataTable :value="lastTasks" :rows="4" responsiveLayout="scroll">
          <Column header="Создано" :sortable="true" style="width:35%">
            <template #body="slotProps">
              {{ moment(new Date(slotProps.data.create_datetime)).format('DD.MM.YYYY HH:mm') }}
            </template>
          </Column>
          <Column field="creator_username" header="Куратор" :sortable="true" style="width:35%"/>
          <Column field="executor_username" header="Исполнитель" :sortable="true" style="width:35%"/>
          <Column style="width:15%">
            <template #body="slotProps">
              <Button type="button" class="p-button-text" @click="$router.push('/task/'+slotProps.data.id)">
                <span class="material-icons-outlined">open_in_new</span>
              </Button>
            </template>
          </Column>
        </DataTable>
      </div>
      <div class="card">
        <div class="flex justify-content-between align-items-center mb-5">
          <h5>Best Selling Products</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                    @click="$refs.menu2.toggle($event)"></Button>
            <Menu ref="menu2" :popup="true" :model="items"></Menu>
          </div>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
              <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-orange-500 h-full" style="width:50%"></div>
              </div>
              <span class="text-orange-500 ml-3 font-medium">%50</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-cyan-500 h-full" style="width:16%"></div>
              </div>
              <span class="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-pink-500 h-full" style="width:67%"></div>
              </div>
              <span class="text-pink-500 ml-3 font-medium">%67</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
              <div class="mt-1 text-600">Office</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-green-500 h-full" style="width:35%"></div>
              </div>
              <span class="text-green-500 ml-3 font-medium">%35</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-purple-500 h-full" style="width:75%"></div>
              </div>
              <span class="text-purple-500 ml-3 font-medium">%75</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
              <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-teal-500 h-full" style="width:40%"></div>
              </div>
              <span class="text-teal-500 ml-3 font-medium">%40</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Sales Overview</h5>
        <Chart type="line" :data="lineData" :options="lineOptions"/>
      </div>
      <div class="card">
        <div class="flex align-items-center justify-content-between mb-4">
          <h5>Notifications</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                    @click="$refs.menu1.toggle($event)"></Button>
            <Menu ref="menu1" :popup="true" :model="items"></Menu>
          </div>
        </div>

        <span class="block text-600 font-medium mb-3">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-4 list-none">
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3">Richard Jones
						<span class="text-700">has purchased a blue t-shirt for <span class="text-blue-500">79$</span></span>
					</span>
          </li>
          <li class="flex align-items-center py-2">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-download text-xl text-orange-500"></i>
            </div>
            <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-blue-500 font-medium">2500$</span> has been initiated.</span>
          </li>
        </ul>

        <span class="block text-600 font-medium mb-3">YESTERDAY</span>
        <ul class="p-0 m-0 list-none">
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3">Keyser Wick
						<span class="text-700">has purchased a black jacket for <span class="text-blue-500">59$</span></span>
					</span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-question text-xl text-pink-500"></i>
            </div>
            <span class="text-900 line-height-3">Jane Davis
						<span class="text-700">has posted a new questions about your product.</span>
					</span>
          </li>
        </ul>
      </div>
      <div class="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
           style="border-radius: 1rem; background: linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)">
        <div>
          <div class="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
          <div class="text-white font-medium text-5xl">Try PrimeBlocks</div>
        </div>
        <div class="mt-4 mr-auto md:mt-0 md:mr-0">
          <a href="https://www.primefaces.org/primeblocks-vue"
             class="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import EventBus from '@/AppEventBus';
import ProductService from '../service/ProductService';
import {DashboardAPi} from "@/api/api_routes/dashboard";


export default {
  data() {
    return {
      moment: moment,

      taskStatistic: null,
      relatedUsers: null,
      lastTasks: [],
      loading: true,

      products: null,
      lineData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
          },
          {
            label: 'Sales',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
          }
        ]
      },
      items: [
        {label: 'Add New', icon: 'pi pi-fw pi-plus'},
        {label: 'Remove', icon: 'pi pi-fw pi-minus'}
      ],
      lineOptions: null,
    }
  },
  productService: null,
  themeChangeListener: null,
  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.themeChangeListener = (event) => {
      if (event.dark)
        this.applyDarkTheme();
      else
        this.applyLightTheme();
    };
    EventBus.on('change-theme', this.themeChangeListener);

    if (this.isDarkTheme()) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }

    this.loadPage();
  },
  beforeUnmount() {
    EventBus.off('change-theme', this.themeChangeListener);
  },
  created() {
    this.productService = new ProductService();
  },
  methods: {

    async loadPage() {
      this.loading = true;
      await DashboardAPi.getTaskStatistic().then((value => this.taskStatistic = value.data))
      await DashboardAPi.getAllRelatedUsers().then(value => this.relatedUsers = value.data)
      await DashboardAPi.getAllTasks().then(value => this.lastTasks = value.data.items)

      this.loading = false;
    },

    formatCurrency(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    },
    isDarkTheme() {
      return this.$appState.darkTheme === true;
    },
    applyLightTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef',
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef',
            }
          },
        }
      };
    },
    applyDarkTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#ebedef'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)',
            }
          },
          y: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)',
            }
          },
        }
      };
    }
  },
}
</script>
