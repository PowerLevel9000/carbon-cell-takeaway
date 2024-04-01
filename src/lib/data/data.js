export const navigationLinks = [
    { name: 'Home', path: '/', icon: 'fa fa-home' },
    { name: 'Contact', path: '/contact', icon: 'fa fa-phone' },
    { name: 'Organization', path: '/organization', icon: 'fa fa-industry' },
    { name: 'Services', path: '/services', icon: 'fa fa-cog' }
];

export const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Population Data',
        },
    },
};