import MainLayout from './layouts/MainLayout.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';
import Home from "@/pages/Home.vue";
import Coach from "@/pages/Coach.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";


const routes = [
    {
        path: '/pages',
        component: MainLayout,
        children: [
            {
                path: '',
                // pathToRegexpOptions: { strict: true },
                name: 'home',
                component: Home
            },
            {
                path: 'coach',
                name: 'coach',
                component: Coach
            }
        ]
    },
    {
        path: '/',
        component: PublicLayout,
        children: [
            {
                path: 'sign-in',
                name: 'sign-in',
                component: SignIn
            },
            {
                path: 'sign-up',
                name: 'sign-up',
                component: SignUp,
                // pathToRegexpOptions: { strict: true }
            }
        ]
    },
    {
        path: '*'
    }
];

export default routes;