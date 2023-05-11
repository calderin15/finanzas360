import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '@/components/inicio/PaginaInicio.vue'
import PaginaLogin from '@/components/inicio/PaginaLogin.vue'
import PaginaRegistrar from '@/components/inicio/PaginaRegistrar.vue'
import InicioUser from '@/components/dashboard/InicioUser.vue'
import PerfilUser from '@/components/dashboard/PerfilUser.vue'
import MetasUser from '@/components/dashboard/MetasUser.vue'
import MovimientosUser from '@/components/dashboard/MovimientosUser.vue'

const routes = [
    {
        path: '/',
        name: 'PaginaInicio',
        component: PaginaInicio
    },
    {
        path: '/login',
        name: 'PaginaLogin',
        component: PaginaLogin
    },
    {
        path: '/registrate',
        name: 'PaginaRegistrar',
        component: PaginaRegistrar
    },
    {
        path: '/user',
        name: 'InicioUser',
        component: InicioUser
    },
    {
        path: '/user/metas',
        name: 'MetasUser',
        component: MetasUser
    },
    {
        path: '/user/perfil',
        name: 'PerfilUser',
        component: PerfilUser
    },
    {
        path: '/user/movimientos',
        name: 'MovimientosUser',
        component: MovimientosUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router