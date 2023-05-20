
const GallerySection = () => {
  const images = [
    { id: 1, src: 'https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684596619~exp=1684597219~hmac=11b868319db172225b99b1d75274d3e86b449fb5abf5ed99eb9f81f53373b3a7', alt: 'Image 1' },
    { id: 2, src: 'https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?w=740&t=st=1684596662~exp=1684597262~hmac=32d32654326a89d102730b61335c1fadf1a64b02a10bb3233e7311051c3bb841', alt: 'Image 2' },
    { id: 3, src: 'https://img.freepik.com/free-vector/emergency-ambulance-concept_23-2148539305.jpg?w=740&t=st=1684596714~exp=1684597314~hmac=7758af07fd953c0599273ca7b27e0ec40b7bdb65bfd0952f1de6c237a9b6ffb3', alt: 'Image 3' },
    { id: 4, src: 'https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684596619~exp=1684597219~hmac=11b868319db172225b99b1d75274d3e86b449fb5abf5ed99eb9f81f53373b3a7', alt: 'Image 1' },
    { id: 5, src: 'https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?w=740&t=st=1684596662~exp=1684597262~hmac=32d32654326a89d102730b61335c1fadf1a64b02a10bb3233e7311051c3bb841', alt: 'Image 2' },
    { id: 6, src: 'https://img.freepik.com/free-vector/emergency-ambulance-concept_23-2148539305.jpg?w=740&t=st=1684596714~exp=1684597314~hmac=7758af07fd953c0599273ca7b27e0ec40b7bdb65bfd0952f1de6c237a9b6ffb3', alt: 'Image 3' },
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
