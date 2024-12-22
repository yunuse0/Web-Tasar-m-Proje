    document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/images/welcome-hero/aa3.JPG",  // İlk resmin yolu
        "assets/images/welcome-hero/aa2.JPG",  // İkinci resmin yolu
        "assets/images/welcome-hero/aa4.JPG"   // Üçüncü resmin yolu
    ];

    let currentIndex = 0; // Şu anki resim

    function changeBackground() {
        const heroSection = document.querySelector(".welcome-hero");
        if (heroSection) {

            heroSection.style.backgroundImage = `url(${images[currentIndex]})`;    
            // Sonraki resme geç
            currentIndex = (currentIndex + 1) % images.length; l
        }
    }

    setInterval(changeBackground, 4000);
    changeBackground();
  
});
document.addEventListener("DOMContentLoaded", () => {
    // Araç bilgileri
    const carDetails = {
        1: {
            model: "BMW M5 Serisi",
            motor: "4.4L V8 TwinTurbo",
            beygir: "600 HP",
            fiyat: "₺6,500,000"
        },
        2: {
            model: "Seat Cupra Leon",
            motor: "2.0L TSI",
            beygir: "300 HP",
            fiyat: "₺1,750,000"
        },
        3: {
            model: "Honda Civic",
            motor: "1.5L Turbo",
            beygir: "182 HP",
            fiyat: "₺900,000"
        }
    };


    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            // Hangi araca ait
            const carId = button.getAttribute("data-car");
            const parentDiv = button.closest(".car-container");
            const detailsDiv = parentDiv.querySelector(".car-details");

            // Detay alanı doldurma veya gizleme
            if (detailsDiv.innerHTML === "") {
                // Detayları göster
                const details = carDetails[carId];
                detailsDiv.innerHTML = `
                    <div style="background-color: black; color: white; padding: 30px; border-radius: 5px; margin-top: 10px;">
                        <p><strong>Model:</strong> ${details.model}</p>
                        <p><strong>Motor:</strong> ${details.motor}</p>
                        <p><strong>Beygir:</strong> ${details.beygir}</p>
                        <p><strong>Fiyat:</strong> ${details.fiyat}</p>
                    </div>
                `;
                button.innerText = "Detayları Gizle";
            } else {
                // Detayları sil
                detailsDiv.innerHTML = "";
                button.innerText = "Özellikleri Göster";
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDetail = document.getElementById('modal-detail');
    const closeModal = document.querySelector('.close');
    const duyurular = document.querySelectorAll('.duyuru');

    // Her duyuruya tıklanabilirlik ekle
    duyurular.forEach(duyuru => {
        duyuru.addEventListener('click', () => {
            const title = duyuru.querySelector('h2').innerText;
            const detail = duyuru.getAttribute('data-detail');

            // Modal içeriklerini güncelle
            modalTitle.innerText = title;
            modalDetail.innerText = detail;

            // Modal'ı göster
            modal.style.display = 'flex';
        });
    });

    // Modal kapatma
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // bir yere tıklanınca kapat
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

