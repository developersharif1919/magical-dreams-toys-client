
const GallerySection = () => {
  const images = [
    { id: 1, src: 'https://img.freepik.com/free-vector/yellow-sports-car_1308-96215.jpg?w=996&t=st=1684670152~exp=1684670752~hmac=f8cc38e7a0cd3863f0b32b69ad5073694a0b26307b5ab00fd623db122ffd3db6', alt: 'Image 1' },
    { id: 2, src: 'https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?w=740', alt: 'Image 2' },
    { id: 3, src: 'https://img.freepik.com/free-vector/sticker-design-with-side-view-ambulance-car-isolated_1308-75938.jpg?w=996&t=st=1684670899~exp=1684671499~hmac=623fa033d49ac0de474c81c352b60a9ffd64e6361b4dbcef36af8c3ca48f7181', alt: 'Image 3' },
    { id: 4, src: 'https://img.freepik.com/free-vector/racing-car-orange-color-isolated-background_1308-69652.jpg?w=996&t=st=1684670326~exp=1684670926~hmac=3d5a47f2df8087cf114a392c23d0b7a1df2fa85d370eedf03241cf88af663cda', alt: 'Image 1' },
    { id: 5, src: 'https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?w=740&t=st=1684596662~exp=1684597262~hmac=32d32654326a89d102730b61335c1fadf1a64b02a10bb3233e7311051c3bb841', alt: 'Image 2' },
    { id: 6, src: 'https://img.freepik.com/free-vector/green-vintage-convertible-car-cartoon-style_1308-107078.jpg?w=996&t=st=1684670691~exp=1684671291~hmac=66d283e8a8e633e44c6c9b59c3876893bf375cdf14f0feae67c9b0078dba73e0', alt: 'Image 3' },
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
