var tanya = true;
while (tanya){

// pilihan player
var player = prompt('pilih : gajah, semut, orang');


// pilihan komputer - random
var compt = Math.random();

if (compt < 0.34 )
	compt = 'gajah';
else if (compt >= 0.34 && compt < 0.67) {
	compt = 'orang';
} else {
	compt = 'semut';
}

var hasil = '';
// menentukan ruler
if ( player == compt ){
	hasil = 'SERI';
} else if (player == 'gajah') {
	// if (compt == 'orang'){
	// 	hasil = 'MENANG!';
	// } else {
	// 	hasil = 'KALAH!';
	// }
	hasil = (compt == 'orang') ? 'MENANG!' : 'KALAH!';
} else if (player == 'orang') {
	// if (compt == 'gajah') {
	// 	hasil = 'KALAH!';
	// } else {
	// 	hasil = 'MENANG!';
	// }
	hasil = (compt == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (player == 'semut') {
	hasil = (compt == 'orang') ? 'KALAH!' : 'MENANG!';
} else {
	hasil = 'Memasukan pilihan yang salah !';
}

// tampilkan hasil
alert('Kamu memilih : ' + player + ' dan komputer memilih : ' + compt + '\nMaka hasilnya kamu : ' + hasil);

tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain ;)');