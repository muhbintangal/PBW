// Definisi fungsi operasi menggunakan Arrow Functions
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali   = (a, b) => a * b;
const bagi   = (a, b) => (b !== 0 ? a / b : "Error: Bagi nol!");
const persen = (a, b) => a % b;

// Fungsi utama kalkulator
const kalkulator = (operator, ...angka) => {
  // Destructuring dari spread operator untuk mengambil 2 angka pertama
  const [val1, val2] = angka;

  switch (operator) {
    case '+': return tambah(val1, val2);
    case '-': return kurang(val1, val2);
    case '*': return kali(val1, val2);
    case '/': return bagi(val1, val2);
    case '%': return persen(val1, val2);
    default: return "Operator tidak valid";
  }
};

// --- Contoh Eksekusi ---
console.log("Hasil Tambah (10 + 5) :", kalkulator('+', 10, 5));
console.log("Hasil Kurang (20 - 7) :", kalkulator('-', 20, 7));
console.log("Hasil Kali (4 * 5)    :", kalkulator('*', 4, 5));
console.log("Hasil Bagi (10 / 2)   :", kalkulator('/', 10, 2));
console.log("Hasil Modulus (10 % 3):", kalkulator('%', 10, 3));// Definisi fungsi operasi menggunakan Arrow Functions


