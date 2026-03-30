const generateFibonacci = (n) => {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    // Mengambil dua angka terakhir dan menjumlahkannya
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  // Mengambil sesuai jumlah n (jika n=1, hanya muncul [0])
  return sequence.slice(0, n);
};

// Contoh penggunaan: Mencetak 10 angka pertama
const hasilFibonacci = generateFibonacci(10);
console.log("Deret Fibonacci:", hasilFibonacci.join(", "));