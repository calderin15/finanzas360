<template>
    <section class="bg-white bg-cover dark:bg-gray-900 bg-[url(@/assets/img/fondo5.jpg)] h-full">

        <article class="bg-gray-900 min-h-screen sm:w-96 z-50 flex justify-center items-center flex-col">
            <figure class="max-w-lg">
                <img class="h-auto max-w-full rounded-lg" src="@/assets/img/logo.png" alt="image description">
            </figure>
            <div class="m-10 w-80">
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="data.email" type="email" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                        electronico</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="data.password" type="password" name="floating_password" id="floating_password"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>

                    <button type="button" @click="validar"
                        class="mt-10 w-80 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Iniciar
                        sesión</button>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        ¿No tienes cuenta?

                        <RouterLink to="/registrate" class="font-semibold leading-6 text-green-600 hover:text-green-500">
                            Registrate</RouterLink>
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
            data: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        validar() {

            axios.get('https://apigenerator.dronahq.com/api/2XTcZbsl/user?email=' + this.data.email)
                .then(response => {
                    if (response.data.length > 0) {
                        if (response.data[0].password == this.data.password) {
                            alert("Acceso conseguido");
                            const newObj = Object.assign({}, response.data[0]);

                            localStorage.setItem("usuario", JSON.stringify(newObj));
                            this.$router.push('/user');
                        } else {
                            alert("Usuario o contraseña incorrectos");
                            localStorage.setItem("usuario", null)
                        }
                    } else {
                        alert("Usuario o contraseña incorrectos");
                        localStorage.setItem("usuario", null)
                    }
                })
        }
    },
}
</script>

