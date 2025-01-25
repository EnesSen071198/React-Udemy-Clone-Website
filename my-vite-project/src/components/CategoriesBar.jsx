import "../styles/CategoriesBar.css";
import Tooltip from "@mui/material/Tooltip";

const CategoriesBar = () => {
  const categories = [
    "Yazılım Geliştirme",
    "İşletme",
    "Finans ve Muhasebe",
    "BT ve Yazılım",
    "Ofiste Verimlilik",
    "Kişisel Gelişim",
    "Tasarım",
    "Pazarlama",
    "Sağlık ve Fitness",
    "Müzik"
  ];

  const subcategories = [
    ["Web Geliştirme", "Mobil Geliştirme", "Programlama Dilleri"],
    ["Stratejik Planlama", "Proje Yönetimi"],
    ["Muhasebe Temelleri", "Finansal Analiz"],
    ["Veri Bilimi", "Siber Güvenlik"],
    ["Microsoft Office", "Google Workspace"],
    ["Kariyer Gelişimi", "Kişisel Verimlilik"],
    ["UI/UX Tasarım", "Grafik Tasarım"],
    ["Dijital Pazarlama", "SEO"],
    ["Fitness Egzersizleri", "Sağlık Beslenme"],
    ["Enstrüman Çalma", "Şarkı Söyleme"]
  ];

  return (
    <div className='categories-bar-container'>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className='category-group'>
          <h3 className='category-title'>{category}</h3>
          <div className='subcategory-container'>
            {subcategories[catIndex]?.map((subcategory, subIndex) => (
              <Tooltip
                key={`${catIndex}-${subIndex}`}
                title={subcategory}
                arrow
                placement='top' // Okun nereye gösterileceğini seçin
              >
                <div className='subcategory'>{subcategory}</div>
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
