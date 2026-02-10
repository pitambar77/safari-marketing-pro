const agency = [
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/k-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/nus-brand.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/neo-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/smg-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/only-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/touch-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/sozo-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/cs-logo.png",

  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/luxe.webp",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/ntuc-logo.webp",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/nets-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/nuf-ogo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/mega-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/darwn-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/phs-logo.webp",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/jeep-logo.png",

  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/am-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/cr-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/mc-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/sph-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/jcu-logo.webp",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/n-logo.webp",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/x-logo.png",
  "https://www.heroesofdigital.com/wp-content/uploads/2025/06/nanyang.webp",
];

const AgencyBrand = () => {
  return (
    <>
     
      <div className="agency_brand_pic">
        {agency.map((img, index) => (
          <img key={index} src={img} alt={`agency-${index + 1}`} />
        ))}
      </div>
    </>
  );
};

export default AgencyBrand;
