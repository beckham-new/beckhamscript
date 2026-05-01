AOS.init({
    duration: 1000,
    once: false, // Animasi akan muncul kembali saat scroll naik/turun
});

const starContainer = document.getElementById('star-container');
const starCount = 130; 
const starColors = ['#FBB45E', '#C99379', '#FFFFFF', '#FBC02D'];

if (starContainer) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Ukuran bervariasi agar ada efek kedalaman (depth)
        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posisi acak di seluruh layar
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Pilih warna acak dari palet sunset/elegant
        const randomColor = starColors[Math.floor(Math.random() * starColors.length)];
        star.style.background = randomColor;
        
        // Berikan cahaya lembut (glow) pada bintang
        star.style.boxShadow = `0 0 ${size * 2}px ${randomColor}`;
        
        // Animasi kelap-kelip dengan durasi dan delay acak agar tidak seragam
        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 5; 
        star.style.animation = `twinkle ${duration}s infinite ease-in-out ${delay}s`;
        
        star.style.opacity = Math.random();
        
        starContainer.appendChild(star);
    }
}

// 3. --- Fungsi Popup untuk Solar System (Things I Love) ---
function showPopup(title, msg) {
    // Popup elegan sederhana
    alert(`${title}\n\n"${msg}"`);
}

// 4. --- Real-time Countdown Relationship ---
// Format: YYYY-MM-DD
const anniversaryDate = new Date("2024-01-12T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - anniversaryDate;

    const dElement = document.getElementById("countdown");
    if (dElement) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dElement.innerHTML = `${days} Days | ${hours}h | ${minutes}m | ${seconds}s`;
    }
}

const song = document.getElementById("mySong");
const icon = document.getElementById("music-icon");

// Fungsi untuk memutar musik otomatis pada interaksi pertama
function playMusicOnInteraction() {
    const song = document.getElementById("mySong");
    
    // Coba putar musik
    song.play().then(() => {
        // Jika berhasil diputar, hapus event listener agar tidak terpanggil berulang kali
        document.removeEventListener('click', playMusicOnInteraction);
        document.removeEventListener('touchstart', playMusicOnInteraction);
        document.removeEventListener('scroll', playMusicOnInteraction);
    }).catch(error => {
        console.log("Menunggu interaksi user untuk memutar musik...");
    });
}

// Pantau klik, sentuhan (HP), atau scroll pertama kali
document.addEventListener('click', playMusicOnInteraction);
document.addEventListener('touchstart', playMusicOnInteraction);
document.addEventListener('scroll', playMusicOnInteraction, { once: true });

// Update setiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown();

const letters = {
    1: "Terima kasih sudah menjadi bagian dari rasi bintang yang paling indah dalam hidupku sejak awal kita bertemu...",
    2: "Di detik ini, aku bersyukur karena semesta masih memberikan kita waktu untuk saling menjaga dan menyayangi...",
    3: "Dan di masa depan nanti, biarlah rasi bintang kita tetap bersinar, meski langit malam berganti musim."
};

let typingTimer;

function openLetter(id) {
    const overlay = document.getElementById('letter-overlay');
    const textElement = document.getElementById('letter-text');
    const fullText = letters[id];
    
    // Reset konten & tampilkan overlay
    textElement.innerHTML = "";
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Jalankan efek mengetik
    let index = 0;
    clearInterval(typingTimer); // Bersihkan timer jika ada yang sedang berjalan
    
    typingTimer = setInterval(() => {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
        } else {
            clearInterval(typingTimer);
        }
    }, 50); // Kecepatan mengetik (50ms per karakter)
}

function closeLetter() {
    const overlay = document.getElementById('letter-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(typingTimer); // Hentikan proses ketik jika ditutup paksa
}

function updateOdyssey() {
    // Tanggal Awal (15 Februari) - Sesuaikan tahunnya jika perlu
    const startDate = new Date("February 15, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    // Kalkulasi Waktu
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update Digital
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Update Jarum Jam Analog (Visual Saja)
    const nowTime = new Date();
    const secDeg = (nowTime.getSeconds() / 60) * 360;
    const minDeg = (nowTime.getMinutes() / 60) * 360;
    const hrDeg = (nowTime.getHours() / 12) * 360;

    document.querySelector(".second").style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    document.querySelector(".minute").style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    document.querySelector(".hour").style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateOdyssey, 1000);
updateOdyssey(); // Jalankan langsung

// Data pesan tetap sama
const mensiveMessages = {
    1: { khadafi: "Happy mensiversary, sayang.🤍 I’m really grateful for you and for every moment we’ve shared together, being with you has taught me many things, especially how important it is to understand and support each other. I hope as time goes on, we can keep being more open, more honest, and always comfortable telling each other what we feel, no matter what happens, i want us to keep learning and growing together. I love you, and I’m thankful to have you in my life abang. 🤍", raph: "Hey sayang, happy mensiversary for us. It’s only been a month, but somehow it already feels like you’ve become a really meaningful part of my days. The way you listen, care, and the little things you do… they make everything feel a bit warmer. I’m really grateful for every conversation, every laugh, and every quiet moment we’ve shared so far. Thankyou so much sayang 🤍" },
    2: { khadafi: "Happy mensiversary abang 😚 Thank you for being with me these past two months, thank you for always being patient with me, okay? I really love you abang kedepannya kita saling terbuka aja ya abang kalau ada sesuatu.", raph: "Happy mensive adek, let’s hope everything goes our way. May God bless you and be a good child for me baby" },
    3: { khadafi: "Happy mensive ke-3! I'm so lucky to have you in my galaxy.", raph: "Me too! Yuk buat lebih banyak cerita lagi bareng-bareng." }
};

function openLetter(id) {
    const overlay = document.getElementById('letter-overlay');
    
    // Elemen Khadafi
    const typeKhadafi = document.getElementById('typing-khadafi');
    const bubbleKhadafi = document.getElementById('bubble-khadafi');
    const pKhadafi = document.getElementById('chat-khadafi');

    // Elemen Raph
    const typeRaph = document.getElementById('typing-raph');
    const bubbleRaph = document.getElementById('bubble-raph');
    const pRaph = document.getElementById('chat-raph');
    
    const msg = mensiveMessages[id];
    
    // 1. Reset Tampilan Awal (Hanya Tampilkan Overlay)
    pKhadafi.innerText = msg.khadafi;
    pRaph.innerText = msg.raph;
    
    bubbleKhadafi.style.display = 'none';
    bubbleRaph.style.display = 'none';
    typeRaph.style.display = 'none';
    typeKhadafi.style.display = 'block'; // Mulai dengan Khadafi mengetik
    
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // 2. Jeda 2 Detik: Khadafi Mengetik -> Muncul Chat
    setTimeout(() => {
        typeKhadafi.style.display = 'none'; // Selesai mengetik
        bubbleKhadafi.style.display = 'block'; // Munculkan chat
        
        // 3. Jeda 2 Detik LAGI: Mulai Raph Mengetik
        setTimeout(() => {
            typeRaph.style.display = 'block'; // Raph mulai mengetik
            
            // 4. Jeda 2 Detik TERAKHIR: Raph Mengetik -> Muncul Chat
            setTimeout(() => {
                typeRaph.style.display = 'none'; // Selesai mengetik
                bubbleRaph.style.display = 'block'; // Munculkan chat
            }, 2000); // Jeda Raph mengetik

        }, 500); // Sedikit jeda setelah chat Khadafi muncul sebelum Raph mulai ngetik

    }, 2000); // Jeda Khadafi mengetik
}