import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import KnowMe from '../components/KnowMe';
import FeaturedProjects from '../components/FeaturedProjects';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
                <KnowMe/>
                <FeaturedProjects/>
            </main>
        </>
    );
};

export default MainLayout;
