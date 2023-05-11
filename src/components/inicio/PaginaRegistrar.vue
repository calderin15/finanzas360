<template>
    <section class="bg-white bg-cover dark:bg-gray-900 bg-[url(@/assets/img/fondo5.jpg)] h-full overflow-x-hidden">

        <article
            class="bg-gray-900 max-h-screen sm:w-96 z-50 flex justify-center items-center flex-col overflow-y-scroll overflow-x-hidden registrar">
            <figure class="max-w-lg mt-96">
                <img class="h-auto max-w-full rounded-lg" src="@/assets/img/logo.png" alt="image description">
            </figure>
            <div class="m-10 w-80">
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.id_user" type="number" name="floating_id" id="floating_id"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_id"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificación</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.nombres" type="text" name="floating_name" id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                        y apellidos</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label for="fecha" class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Fecha de
                        nacimiento</label>
                    <input v-model="user.fecha_nacimiento" type="date" id="fecha" 
                        class="bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label for="sexo" class="block mb-2 text-sm font-medium text-green-600 dark:text-white">Sexo</label>
                    <select v-model="user.genero" id="sexo"
                        class="bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Selecione una opción</option>
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                        <option value="3">Otro</option>
                    </select>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.direccion" type="text" name="floating_direccion" id="floating_direccion"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_direccion"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.ocupacion" type="text" name="floating_ocupacion" id="floating_ocupacion"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_ocupacion"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ocupacion</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.telenofo" type="number" name="floating_telefono" id="floating_telefono"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_telefono"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="user.email" type="email" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                        electronico</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input  v-model="user.password" type="password" name="floating_password" id="floating_password"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>

                    <button type="button" @click="crearUser"
                        class="mt-10 w-80 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Registrate</button>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        ¿Ya tienes cuenta?

                        <RouterLink to="/login" class="font-semibold leading-6 text-green-600 hover:text-green-500">
                            Inicia sesión</RouterLink>
                    </p>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-px my-8 bg-gray-700 border-0 dark:bg-gray-700">
                        <span
                            class="absolute px-3 font-medium text-white -translate-x-1/2 bg-gray-900 left-1/2 dark:text-white dark:bg-gray-900">ó</span>
                    </div>
                    <p class="mt-2 text-center text-sm text-gray-500">
                        <RouterLink to="/">
                            Regresar al inicio
                        </RouterLink>

                    </p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import axios from 'axios'
export default {
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
    crearUser() {
      axios({
        method: 'post',
        url: 'https://apigenerator.dronahq.com/api/2XTcZbsl/user',
        data: this.user,
        responseType: 'json',
      })
        .then(response => {

          this.user.id_user = null
          this.user.nombres = null
          this.user.email = null
          this.user.password = null
          this.user.fecha_nacimiento = null
          this.user.direccion = null
          this.user.genero = null
          this.user.telenofo = null
          this.user.ocupacion = null

          if (response.statusText == "Created") {
            alert("Usuario registrado")
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>

<style>
/* Ocultar barra de desplazamiento */
.registrar::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
}

/* Ajustar el color del riel */
.registrar::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Ajustar el color del thumb (cursor) */
.registrar::-webkit-scrollbar-thumb {
    background-color: #15803d;
}
</style>