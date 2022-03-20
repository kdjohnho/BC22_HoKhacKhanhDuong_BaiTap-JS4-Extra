/**
 * ĐẦU VÀO: Số nguyên có 3 chữ số
 * XỬ LÝ:
 *    B1: Tạo biến đại diện cho các chữ số và thực hiện phép tính tách các chữ số
 *    B2: Dùng switch case cho từng chữ số để gán cách đọc từng chữ số vào biến result
 *    B3: In ra biến result
 * ĐẦU RA: Cách đọc số có 3 chữ số
 */

var num = 200;

var hundredsDigit = Math.floor(num / 100);
var tensDigit = Math.floor((num / 10) % 10);
var unitDigit = Math.floor(num % 10);
var result = "";

if (100 <= num && num <= 999) {
	switch (hundredsDigit) {
		case 1:
			result = "Một trăm ";
			break;
		case 2:
			result = "Hai trăm ";
			break;
		case 3:
			result = "Ba trăm ";
			break;
		case 4:
			result = "Bốn trăm ";
			break;
		case 5:
			result = "Năm trăm ";
			break;
		case 6:
			result = "Sáu trăm ";
			break;
		case 7:
			result = "Bảy trăm ";
			break;
		case 8:
			result = "Tám trăm ";
			break;
		case 9:
			result = "Chín trăm ";
			break;
	}

	if (tensDigit == 0 && unitDigit != 0) {
		result += "lẻ ";
	}

	switch (tensDigit) {
		case 1:
			result += "mười ";
			break;
		case 2:
			result += "hai mươi ";
			break;
		case 3:
			result += "ba mươi ";
			break;
		case 4:
			result += "bốn mươi ";
			break;
		case 5:
			result += "năm mươi ";
			break;
		case 6:
			result += "sáu mươi ";
			break;
		case 7:
			result += "bảy mươi ";
			break;
		case 8:
			result += "tám mươi ";
			break;
		case 9:
			result += "chín mươi ";
			break;
	}

	switch (unitDigit) {
		case 1:
			result += "một ";
			break;
		case 2:
			result += "hai ";
			break;
		case 3:
			result += "ba ";
			break;
		case 4:
			result += "bốn ";
			break;
		case 5:
			result += "lăm ";
			break;
		case 6:
			result += "sáu ";
			break;
		case 7:
			result += "bảy ";
			break;
		case 8:
			result += "tám ";
			break;
		case 9:
			result += "chín ";
			break;
	}
	console.log(result);
}
