<script setup>
import MenuDos from '../template/MenuDos.vue'
import PiePagina from '../template/PiePagina.vue'
</script>
<template>
    <MenuDos />

    <section class="bg-center bg-cover bg-[url(@/assets/img/fondo.jpg)] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Finanzas
                360</h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Ten el control total de tus
                finanzas personales</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <RouterLink to="/login"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Inicia sesión
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </RouterLink>
                <a href="#acerca_de_nosotros"
                    class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Leer mas
                </a>
            </div>
        </div>
    </section>

    <section class="min-h-screen" id="acerca_de_nosotros">
        <h1 class="text-center font-bold text-3xl pt-20 dark:text-white">Acerca de nosotros</h1>
        <div class="flex flex-wrap justify-center items-center flex-row px-4 py-10 md:px-20">
            <figure class="max-w-lg sm:mr-10">
                <img class="h-auto max-w-full rounded-lg" src="@/assets/img/fondo2.jpg"
                    alt="image description">
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Finanzas</figcaption>
            </figure>
            <article class="sm:w-1/2">
                <p class="mb-3 text-gray-700 dark:text-gray-400">En Finanzas 360, nos dedicamos a simplificar la gestión
                    financiera de nuestros clientes, brindándoles una plataforma fácil de usar y poderosa para controlar sus
                    ingresos y egresos.</p>
                <p class="mb-3 text-gray-700 dark:text-gray-400">Somos un equipo apasionado de expertos en finanzas y
                    tecnología, comprometidos en ofrecer una solución integral y eficiente para el control de gastos
                    personales
                    y empresariales. Creemos que una gestión financiera efectiva es esencial para alcanzar los objetivos a
                    largo
                    plazo y estamos aquí para ayudar a nuestros clientes a tomar decisiones financieras informadas.</p>
                <p class="mb-3 text-gray-700 dark:text-gray-400">En Finanzas 360, nos esforzamos por hacer que el
                    seguimiento de
                    los ingresos y egresos sea lo más simple y efectivo posible. Nuestra plataforma cuenta con herramientas
                    y
                    características únicas para que nuestros usuarios puedan mantener un registro de sus gastos, establecer
                    presupuestos, crear informes detallados, y mucho más.</p>
                <p class="mb-3 text-gray-700 dark:text-gray-400">Estamos comprometidos en proporcionar a nuestros clientes
                    un
                    servicio excepcional y una experiencia de usuario inigualable. Siempre estamos en constante evolución,
                    incorporando las últimas tecnologías y mejorando nuestros servicios para brindar una solución financiera
                de
                vanguardia. En Finanzas 360, estamos aquí para ayudarte a tomar el control de tus finanzas.
            </p>
        </article>
    </div>
</section>
<PiePagina />
</template>