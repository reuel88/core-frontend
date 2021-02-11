import {CreateReactApp} from '../components/Pages/Pages';

const routes = [
    {
        path: '/invoices',
        name: 'Invoices',
        component: CreateReactApp,
    },
    {
        path: '/invoices/checkout',
        name: 'Checkout',
        component: CreateReactApp,
    },
    {
        path: '/invoices/checkout/receipt',
        name: 'Receipt',
        component: CreateReactApp,
    },
    {
        path: '/single-payment',
        name: 'One-off Payment',
        component: CreateReactApp,
    },
    {
        path: '/single-payment/checkout',
        name: 'Checkout',
        component: CreateReactApp,
    },
    {
        path: '/single-payment/checkout/receipt',
        name: 'Receipt',
        component: CreateReactApp,
    },
    {
        path: '/payment-history',
        name: 'Payment History',
        component: CreateReactApp,
    },
    {
        path: '/statements',
        name: 'Payment History',
        component: CreateReactApp,
    },
];

export default routes;