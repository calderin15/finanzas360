<script setup>
import MenuUno from '../template/MenuUno.vue'
import PiePagina from '../template/PiePagina.vue'
</script>

<template>
    <article class="flex">
        <MenuUno />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="px-3 py-4 sm:px-36 sm:py-10 dark:text-white">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5">Tu perfil</h1>
                <p class="mt-10 mb-4 text-xl font-medium">Datos personales</p>
                <article class="mt-6 mb-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="user.id_user" type="number" name="floating_id" id="floating_id"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="floating_id"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificacion</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="user.nombres" type="text" name="floating_name" id="floating_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="floating_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres
                            y apellidos</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <label for="fecha" class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fecha de
                            nacimiento</label>
                        <input v-model="user.fecha_nacimiento" type="date" id="fecha"
                            class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                            required>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <label for="sexo" class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Sexo</label>
                        <select id="sexo" v-model="user.genero"
                            class="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option selected>Selecione una opción</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                            <option value="3">Otro</option>
                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input v-model="user.direccion" type="text" name="direccion" id="direccion"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="direccion"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="user.ocupacion" type="text" name="ocupacion" id="ocupacion"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" " required />
                            <label for="ocupacion"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ocupacion</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="user.telenofo" type="number" name="telefono" id="telefono"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" " required />
                            <label for="telefono"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="user.email" type="email" name="email" id="email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" " required />
                            <label for="email"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                electronico</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="user.password" type="password" name="password" id="password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" " required />
                            <label for="password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                        </div>
                    </div>
                    <button type="button" @click="update"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Actualizar
                        datos</button>


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
            this.user = usuario;
        }
    },
    data() {
        return {
            user: {
                email: null,
                password: null,
                id_user: null,
                nombres: null,
                fecha_nacimiento: null,
                direccion: null,
                genero: null,
                telenofo: null,
                ocupacion: null,
            }
        }
    },
    methods: {
        update() {
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            axios({
                method: 'put',
                url: 'https://apigenerator.dronahq.com/api/2XTcZbsl/user/'+usuario.id,
                data: this.user,
                responseType: 'json',
            })
                .then(response => {
                    if (response.statusText == "OK") {
                        alert("Usuario actualizado")
                        localStorage.setItem("usuario", JSON.stringify(this.user));
                    } 
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>