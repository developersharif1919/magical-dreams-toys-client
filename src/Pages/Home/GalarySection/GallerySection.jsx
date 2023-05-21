
const GallerySection = () => {
  const images = [
    { id: 1, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/11/3-580x375.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/11/5-580x375.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/11/4-580x375.jpg', alt: 'Image 3' },
    { id: 4, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/12/1-580x375.jpg', alt: 'Image 1' },
    { id: 5, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/11/2-580x375.jpg', alt: 'Image 2' },
    { id: 6, src: 'https://kids.cmsmasters.net/wp-content/uploads/2015/11/4-580x375.jpg', alt: 'Image 3' },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl mt-12 text-center font-bold text-gray-800 mb-12">Car Toy Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {images.map((image) => (
            <div key={image.id} className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
