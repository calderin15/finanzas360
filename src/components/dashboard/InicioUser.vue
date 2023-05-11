<script setup>
import MenuUno from '../template/MenuUno.vue'
import PiePagina from '../template/PiePagina.vue'
</script>

<template>
    <article class="flex">
        <MenuUno />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="p-20">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5 dark:text-white">Bienvenido a Finanzas 360</h1>
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
        if(usuario == null){
            this.$router.push('/login');
        }
    }
};

</script>