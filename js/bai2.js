/**
 * ĐẦU VÀO: Ngày tháng năm
 * XỬ LÝ:
 *    B1: Tạo biến và gán giá trị tháng năm, kiểm tra số liệu có hợp lệ không
 *    B2: Viết hàm kiểm tra năm nhuận và hàm tính số ngày trong 1 tháng
 *    B3: In kết quả
 * ĐẦU RA: Số ngày trong tháng
 */

var month = 2;
var year = 2020;

if (month > 0 && year > 0) {
	var result = "Thang " + month + " co " + daysInMonth(month, year) + " ngay";
	console.log(result);
}

function checkLeapYear(y) {
	return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}

function daysInMonth(m, y) {
	switch (m) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12: {
			return 31;
			break;
		}
		case 2: {
			if (checkLeapYear(y)) {
				return 29;
				break;
			}
			return 28;
			break;
		}
		case 4:
		case 6:
		case 9:
		case 11: {
			return 30;
			break;
		}
	}
}
