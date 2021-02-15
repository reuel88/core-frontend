import {CreateReactApp, Invoices, SinglePayment, PaymentHistory} from '../components/Pages/Pages';

const routes = [
    {
        path: '/invoices',
        name: 'Invoices',
        component: Invoices,
    },
    {
        path: '/single-payment',
        name: 'One-off Payment',
        component: SinglePayment,
    },
    {
        path: '/payment-history',
        name: 'Payment History',
        component: PaymentHistory,
    },
    {
        path: '/statements',
        name: 'Payment History',
        component: CreateReactApp,
    },
];

export default routes;