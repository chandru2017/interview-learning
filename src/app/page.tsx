import type { Metadata } from 'next';

import { HomeDashboard } from '@/components/HomeDashboard';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const HomePage = () => {
    return <HomeDashboard />;
};

export default HomePage;
