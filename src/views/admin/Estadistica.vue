<template>
    <div>
        <navbar />
        <v-container class="container_principal">
            <v-row>
                <v-col>
                    <template>
                        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
                    </template>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';


import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'Estadistica',
    components: {
        navbar: () => import("/src/components/admin/navbarAdmin.vue"),
        Bar
    },
    data() {
        return {
            user: '',
            si: 10,
            no: 30,
            desserts: [
                //{label: ['Les gusto la aplicacio?']}
            ],
            chartData: {
                labels: ['SI', 'NO'],
                datasets: [{
                    label: '¿LES GUSTO LA APLICACIÓN?',
                    data: [],
                    backgroundColor: ['#c8e6c9', '#ffcdd2']
                }]

            },
            chartOptions: {
                responsive: true
            }
        }
    },
    methods: {
        readUser: function() {
            var i = 0;
            const ref = firebase.database().ref('DATOS_ENCUESTA')
            const querySi = ref.orderByChild('gustoSiNo').equalTo('SI')
            querySi.once('value').then((snapshot) => {
                const count1 = snapshot.numChildren()
                this.chartData.datasets[0].data.push(count1)
            })
            const queryNo = ref.orderByChild('gustoSiNo').equalTo('NO')
            queryNo.once('value').then((snapshot) => {
                const count2 = snapshot.numChildren()
                this.chartData.datasets[0].data.push(count2)
            })
        }
    },
    mounted() {
        // invocar los métodos
        this.readUser();
    }
}
</script>