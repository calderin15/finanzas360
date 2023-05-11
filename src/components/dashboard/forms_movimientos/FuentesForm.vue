<template>
    <article id="form_fuentes" class="mt-6 mb-6 duration-500">
        <p class="mt-10 mb-4 text-xl font-medium dark:text-white">Completa los siguientes campos para crear su fuentes</p>
        <div class="relative z-0 w-full mb-6 group">
            <input v-model="fuentes.nombre" type="text" name="nombre" id="nombre"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" " required />
            <label for="nombre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">

            <label for="message" class="block mb-2 text-sm font-medium text-green-900 dark:text-white">Descripción</label>
            <textarea v-model="fuentes.descripcion" id="message" rows="4"
                class="block p-2.5 w-full text-sm text-green-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escriba aqui..."></textarea>

        </div>

        <button type="button" @click="newFuente"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>

        

    </article>
</template>



<script>
import axios from 'axios'

export default {
    beforeMount() {
    },
    data() {
        return {
            fuentes: {
                id_user: null,
                nombre: null,
                descripcion: null
            }
        };
    },
    methods: {
        newFuente() {
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            this.fuentes.id_user = usuario.id_user;
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/O1JnK9a_/fuentes',
                data: this.fuentes,
                responseType: 'json',
            })
                .then(response => {
                    this.fuentes.nombre = null
                    this.fuentes.descripcion = null

                    if (response.statusText == "Created") {
                        alert("Fuente registrada")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
};

</script>