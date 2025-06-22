import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import KnowMe from '../components/KnowMe';
import FeaturedProjects from '../components/FeaturedProjects';
import HowWeWork from '../components/HowWeWork';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
                <KnowMe/>
                <FeaturedProjects/>
                <HowWeWork/>
            </main>
        </>
    );
};

export default MainLayout;
