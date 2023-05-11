<template>
    <span class="absolute text-white text-2xl top-5 left-4 cursor-pointer z-0" @click="Openbar">
        <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
    </span>
    <article class="sidebar duration-1000 w-[300px] z-50  dark:border-r dark:border-gray-300">
        <div class=" sidebar2
        p-2 w-max overflow-y-auto text-center bg-gray-900 shadow h-screen ">
            <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center rounded-md ">
                    <img src="@/assets/img/logo.png" alt="" class="w-[150px]">
                    <i class="bi bi-x ml-20 cursor-pointer 2xl:hidden" @click="Openbar"></i>
                </div>
                <hr class="my-2 text-gray-600">

                <div>


                    <RouterLink to="/user" exact-active-class="bg-blue-600"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-house-door-fill"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Inicio</span>
                    </RouterLink>
                    <RouterLink to="/user/movimientos" exact-active-class="bg-blue-600"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-cash-coin"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Movimientos</span>
                    </RouterLink>
                    <RouterLink to="/user/metas" exact-active-class="bg-blue-600"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-piggy-bank-fill"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Metas</span>
                    </RouterLink>
                    <RouterLink to="/user/perfil" exact-active-class="bg-blue-600"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-person-fill"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Perfil</span>
                    </RouterLink>
                    <hr class="my-4 text-gray-600">
                    <!-- <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-envelope-fill"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Messages</span>
                    </div> -->


                    <div @click="cerrar_sesion"
                        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-box-arrow-in-right"></i>
                        <span class="text-[15px] ml-4 text-gray-200">Cerrar sesión</span>
                    </div>

                </div>
            </div>
        </div>
    </article>
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
        dropDown() {
            document.querySelector('#submenu').classList.toggle('hidden')
            document.querySelector('#arrow').classList.toggle('rotate-0')
        },
        Openbar() {
            document.querySelector('.sidebar').classList.toggle('w-0')
            document.querySelector('.sidebar').classList.toggle('hidden')
            document.querySelector('.sidebar2').classList.toggle('w-0')
            document.querySelector('.sidebar2').classList.toggle('hidden')
        },
        cerrar_sesion() {
            localStorage.setItem("usuario", null);
            this.$router.push('/');
        }
    }
};

</script>