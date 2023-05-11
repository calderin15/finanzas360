<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase text-white bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Tipo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Metodo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        N° transferencia
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Monto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descripcion
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Categoria
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fuente
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mov in movimientos" :key="mov.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                        {{ mov.tipo }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.fecha }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.metodo }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.numero }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.monto }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.descripcion }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.categoria }}
                    </td>
                    <td class="px-6 py-4">
                        {{ mov.fuente }}
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
        axios.get('https://apigenerator.dronahq.com/api/9ASpE96G/movimientos?id_user=' + usuario.id_user + "&_sort=id&_order=desc")
            .then(response => (
                this.movimientos = response.data
            ))


    },
    data() {
        return {
            movimientos: []
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