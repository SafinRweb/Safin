import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import KnowMe from '../components/KnowMe';
import FeaturedProjects from '../components/FeaturedProjects';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <body>
                <Navbar />
                <main>
                    <Outlet />
                    <KnowMe />
                    <FeaturedProjects />
                    <Timeline />
                </main>
            </body>
            <Footer />
        </>
    );
};

export default MainLayout;
