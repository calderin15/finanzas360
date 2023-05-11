<script setup>
import MenuUno from '../template/MenuUno.vue'
import PiePagina from '../template/PiePagina.vue'
</script>

<template>
    <article class="flex">
        <MenuUno />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="p-5 sm:p-20">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5 dark:text-white">Mis metas</h1>
                <article class="flex justify-end">
                    <button type="button" @click="mostrarForm"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i class="bi bi-plus-circle"></i>
                        Crear meta
                    </button>
                </article>
                <article id="form_meta" class="mt-6 mb-6 hidden duration-500">
                    <p class="mt-10 mb-4 text-xl font-medium dark:text-white">Completa los siguientes campos</p>
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="data.nombres" type="text" name="nombre" id="nombre"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="nombre"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="data.descripcion" type="text" name="descripcion" id="descripcion"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="descripcion"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="data.monto" type="number" name="monto" id="monto"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="monto"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Monto</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="fecha_inicio"
                                class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fecha inicio</label>
                            <input v-model="data.fecha_inicio" type="date" id="fecha_inicio"
                                class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                required>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="fecha_fin"
                                class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fecha fin</label>
                            <input v-model="data.fecha_fin" type="date" id="fecha_fin"
                                class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                required>
                        </div>
                    </div>

                    <button type="button" @click="newMeta"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>

                    <button type="button" @click="mostrarForm"
                        class="mt-5 sm:ml-5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Cerrar</button>


                </article>
            </section>
            <section class="px-3 sm:px-20">
                <article v-for="meta in metas" :key="meta.id"
                    class=" dark:text-white dark:bg-gray-700 mb-3 border border-green-800 rounded-2xl p-5 flex justify-between items-center hover:bg-green-700 hover:text-white hover:scale-110 duration-1000">
                    <img class="w-20 h-20 rounded" src="@/assets/img/objetivo.png" alt="goal">
                    <div class="pl-4">
                        <h2 class="text-center font-bold text-lg mb-2">{{ meta.nombres }}</h2>
                        <p>{{ meta.descripcion }}</p>
                        <p class="mt-2"><span class="font-bold">Monto: </span>${{ meta.monto }}<span> pesos</span></p>
                        <div class="flex justify-around items-center flex-wrap mt-3">
                            <p><span class="font-bold">Fecha inicio: </span> {{ meta.fecha_inicio }}</p>
                            <p><span class="font-bold">Fecha fin: </span> {{ meta.fecha_fin }}</p>
                        </div>
                    </div>
                    <i @click="eliminar(meta.id)" class="bi bi-trash-fill text-red-700 text-xl cursor-pointer"></i>
                </article>

            </section>
            <section class="bg-cover dark:bg-gray-900 bg-[url(@/assets/img/fondo.svg)] overflow-x-hidden p-40">
            </section>

            <PiePagina />
        </div>
    </article>
</template>


<script>
import axios from 'axios'

export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        if(usuario == null){
            this.$router.push('/login');
        }else{
            axios.get('https://apigenerator.dronahq.com/api/nMEwq35n/metas?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
            .then(response => (
                this.metas = response.data
            ))
        }
        
    },
    data() {
        return {
            metas: [],
            data: {
                id_user: null,
                nombres: null,
                descripcion: null,
                fecha_inicio: null,
                fecha_fin: null,
                monto: null
            }
        };
    },
    methods: {
        mostrarForm() {
            document.getElementById('form_meta').classList.toggle('hidden');
        },
        newMeta() {
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            this.data.id_user = usuario.id_user;
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/nMEwq35n/metas',
                data: this.data,
                responseType: 'json',
            })
                .then(response => {
                    this.data.nombres = null
                    this.data.descripcion = null
                    this.data.fecha_inicio = null
                    this.data.fecha_fin = null
                    this.data.monto = null

                    if (response.statusText == "Created") {
                        alert("Meta registrada")
                        axios.get('https://apigenerator.dronahq.com/api/nMEwq35n/metas?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
                            .then(response => (
                                this.metas = response.data
                            ))
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        eliminar(id) {
            if (confirm('¿Esta seguro que desea eliminar esta meta?')) {
                let usuario = JSON.parse(localStorage.getItem('usuario'));
                axios({
                    method: 'delete',
                    url: 'https://apigenerator.dronahq.com/api/nMEwq35n/metas/' + id,
                    responseType: 'json',
                })
                    .then(response => {
                        if (response.status == 200) {
                            alert("Meta eliminado!")
                        }
                        axios.get('https://apigenerator.dronahq.com/api/nMEwq35n/metas?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
                            .then(response => (
                                this.metas = response.data
                            ))

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
};

</script>