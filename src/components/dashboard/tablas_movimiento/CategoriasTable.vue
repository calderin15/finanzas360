<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase text-white bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 w-20">
                        Tipo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descripción
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categoria in categorias" :key="categoria.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ categoria.tipo }}
                    </th>
                    <td class="px-6 py-4">
                        {{ categoria.nombre }}
                    </td>
                    <td class="px-6 py-4">
                        {{ categoria.descripcion }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        axios.get('https://apigenerator.dronahq.com/api/I4p61D3-/categorias?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
            .then(response => (
                this.categorias = response.data
            ))


    },
    data() {
        return {
            categorias: []
        };
    },
    methods: {
        /* eliminar(id) {
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
        } */
    }
};

</script>