<template>
    <article id="form_movimientos" class="mt-6 mb-6 duration-500">
        <p class="mt-10 mb-4 text-xl font-medium dark:text-white">Completa los siguientes campos</p>
        <div class="relative z-0 w-full mb-6 group">
            <input v-model="movimientos.tipo" type="text" name="nombre" id="nombre"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" " required />
            <label for="nombre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo
                de movimiento</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">

            <div class="relative z-0 w-full mb-6 group">
                <input v-model="movimientos.numero" type="number" name="transferencia" id="transferencia"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" " required />
                <label for="transferencia"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero
                    de transferencia</label>
            </div>


            <div class="relative z-0 w-full mb-6 group">
                <input v-model="movimientos.metodo" type="text" name="metodo" id="metodo"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" " required />
                <label for="metodo"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Metodo
                    de pago</label>
            </div>

        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="movimientos.monto" type="number" name="monto" id="monto"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" " required />
                <label for="monto"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Monto</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input  v-model="movimientos.descripcion" type="text" name="descripcion" id="descripcion"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" " required />
                <label for="descripcion"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción</label>
            </div>
        </div>

        <p class=" dark:text-white">Recuerda que debes primero crear fuentes y categorias para que se cargen aqui <span
                class="text-red-700 font-bold text-xl">*</span></p>
        <br>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="fuente" class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fuente</label>
                    <select id="fuente"  v-model="movimientos.fuente"
                        class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                        <option v-for="fuente in fuentes" :key="fuente.id" :value="fuente.nombre">
                            {{ fuente.nombre }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="categoria"
                        class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Categoria</label>
                    <select id="categoria"  v-model="movimientos.categoria"
                        class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nombre">
                            {{ categoria.nombre }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="fecha_inicio"
                    class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fecha</label>
                <input v-model="movimientos.fecha" type="date" id="fecha_inicio"
                    class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>

        </div>

        <button type="button" @click="newMovimiento"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>



    </article>
</template>

<script>
import axios from 'axios'

export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        axios.get('https://apigenerator.dronahq.com/api/O1JnK9a_/fuentes?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
            .then(response => (
                this.fuentes = response.data
            ))

        axios.get('https://apigenerator.dronahq.com/api/I4p61D3-/categorias?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
            .then(response => (
                this.categorias = response.data
            ))


    },
    data() {
        return {
            fuentes: [],
            categorias: [],
            movimientos: {
                id_user: null,
                tipo: null,
                numero: null,
                metodo: null,
                monto: null,
                descripcion: null,
                fuente: null,
                categoria: null,
                fecha: null
            }
        };
    },
    methods: {
        newMovimiento() {
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            this.movimientos.id_user = usuario.id_user;
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/9ASpE96G/movimientos',
                data: this.movimientos,
                responseType: 'json',
            })
                .then(response => {
                    this.movimientos.tipo= null
                    this.movimientos.numero= null
                    this.movimientos.metodo= null
                    this.movimientos.monto= null
                    this.movimientos.descripcion= null
                    this.movimientos.fuente= null
                    this.movimientos.categoria= null
                    this.movimientos.fecha= null

                    if (response.statusText == "Created") {
                        alert("Movimiento registrada")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
};

</script>