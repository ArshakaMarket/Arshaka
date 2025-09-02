document.addEventListener('DOMContentLoaded', () => {
    // Menambahkan fungsionalitas klik pada tombol CTA
    const ctaButton = document.querySelector('.cta-button');
    const contactSection = document.querySelector('.contact');

    if (ctaButton && contactSection) {
        ctaButton.addEventListener('click', () => {
            // Gulir ke bagian kontak ketika tombol diklik
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Kode JavaScript lain dapat ditambahkan di sini untuk interaktivitas lebih lanjut
    console.log("Halaman Arshaka berhasil dimuat.");
});
