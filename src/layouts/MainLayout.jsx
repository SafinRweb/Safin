import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import KnowMe from '../components/KnowMe';
import FeaturedProjects from '../components/FeaturedProjects';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer'
import Gallery from '../components/Gallery';

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
                    <Gallery/>
                </main>
            </body>
            <Footer />
        </>
    );
};

export default MainLayout;
