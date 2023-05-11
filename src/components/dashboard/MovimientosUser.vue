<script setup>
import MenuUno from '../template/MenuUno.vue'
import PiePagina from '../template/PiePagina.vue'
import MovimientosTable from './tablas_movimiento/MovimientosTable.vue'
import CategoriasTable from './tablas_movimiento/CategoriasTable.vue'
import FuentesTable from './tablas_movimiento/FuentesTable.vue'
import FuentesForm from './forms_movimientos/FuentesForm.vue'
import CategoriasForm from './forms_movimientos/CategoriasForm.vue'
import MovimientosForm from './forms_movimientos/MovimientosForm.vue'
</script>

<template>
    <article class="flex">
        <MenuUno />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="p-5 mt-10 sm:p-20">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5 dark:text-white">Tus movimientos</h1>

                <article class="flex flex-wrap sm:justify-end">
                    <button type="button" @click="form = 0"
                        class="mt-2 sm:mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i class="bi bi-plus-circle"></i>
                        Agregar movimientos
                    </button>
                    <button type="button" @click="form = 1"
                        class="mt-2 sm:mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i class="bi bi-plus-circle"></i>
                        Agregar fuentes
                    </button>
                    <button type="button" @click="form = 2"
                        class="mt-2 sm:mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i class="bi bi-plus-circle"></i>
                        Agregar categorias
                    </button>
                    <button type="button" @click="form = -1"
                        class="mt-2 sm:mr-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Cerrar formularios</button>

                </article>


                <div v-if="form == 0">
                    <MovimientosForm />
                </div>
                <div v-if="form == 1">
                    <FuentesForm />
                </div>
                <div v-if="form == 2">
                    <CategoriasForm />
                </div>




                <article class="mt-10">


                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                            data-tabs-toggle="#myTabContent" role="tablist">
                            <li class="mr-2" role="presentation">
                                <button @click="selected = 0"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  dark:text-white"
                                    id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                                    aria-controls="dashboard" aria-selected="false">Movimientos</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button @click="selected = 1"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:text-white"
                                    id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                                    aria-controls="settings" aria-selected="false">Fuentes</button>
                            </li>
                            <li role="presentation">
                                <button @click="selected = 2"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:text-white"
                                    id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                                    aria-controls="contacts" aria-selected="false">Categorias</button>
                            </li>
                            <li role="presentation">
                                <button @click="selected = -1"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:text-white"
                                    id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                                    aria-controls="contacts" aria-selected="false">Ocultar tablas</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div v-if="selected == 0">
                            <MovimientosTable />
                        </div>
                        <div v-if="selected == 1">
                            <FuentesTable />
                        </div>
                        <div v-if="selected == 2">
                            <CategoriasTable />
                        </div>
                    </div>


                </article>

            </section>



            <section class="bg-cover dark:bg-gray-900 bg-[url(@/assets/img/fondo.svg)] overflow-x-hidden p-40">
            </section>
            <PiePagina />
        </div>
    </article>
</template>



<script>
export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        if (usuario == null) {
            this.$router.push('/login');
        }
    },
    components: {
        MovimientosTable,
        FuentesTable,
        CategoriasTable,
        MovimientosForm,
        CategoriasForm,
        FuentesForm
    },
    data() {
        return {
            selected: 0,
            form: -1
        };
    },
    methods: {

    }
};

</script>

<style></style>