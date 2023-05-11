<template>
    <nav class="bg-gray-900 border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-evenly sm:justify-between max-w-screen-xl mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="@/assets/img/logo.png" class="mr-3 sm:h-10" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center md:order-2">
                <RouterLink to="/login"
                    class="text-white dark:text-white hover:bg-gray-50 hover:text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Iniciar sesión</RouterLink>
                <RouterLink to="/registrate"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrate</RouterLink>
                <button data-collapse-toggle="mega-menu-icons" type="button" @click="openMenu"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-icons" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <a to="/"
                            class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">Inicio</a>
                    </li>
                    <li>
                        <a href="#acerca_de_nosotros"
                            class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Acerca de nosotros</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    beforeMount() {
        /*  if (localStorage.getItem("user") == 1) {
           this.user = 1
         }  */
    },
    data() {
        return {
            /* user: 0 */
        };
    },
    methods: {
        openMenu() {
            document.querySelector('#mega-menu-icons').classList.toggle('hidden')
        }
    }
};

</script>