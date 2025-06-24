import CircularGallery from './CircularGallery'

const Gallery = () => {
    return (
        <div className='h-[600px] relative'>
            <CircularGallery bend={3} textColor="#880808" borderRadius={0.05}/>
        </div>
    );
};

export default Gallery;