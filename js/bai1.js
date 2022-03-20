/**
 * ĐẦU VÀO: Ngày tháng năm
 * XỬ LÝ:
 *    B1: Tạo biến và gán giá trị ngày tháng năm, kiểm tra số liệu có hợp lệ không
 *    B2: Viết hàm kiểm tra năm nhuận và hàm tính số ngày trong 1 tháng
 *    B3: Tính ngày tiếp theo dựa trên các trường hợp sau:
 *          - Nếu ngày nhập vào bé hơn số ngày trong tháng đó thì tính bình thường
 *          - Nếu ngày nhập vào là ngày cuối cùng trong tháng thì ngày tiếp theo là ngày 1 của
 *          tháng kế tiếp, riêng trường hợp tháng 12 thì là ngày đầu tiên của năm mới, còn tháng
 *          2 thì kiểm tra xem có phải là năm nhuận hay không.
 *    B4: In kết quả
 * ĐẦU RA: Ngày ( tháng, năm) tiếp theo
 */

var day = 20;
var month = 3;
var year = 2022;

if (day > 0 && month > 0 && year > 0) {
	var nextDay = nextDayCalc(day, month, year);
	console.log(nextDay);
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

function nextDayCalc(day, month, year) {
	var nextDay = day;
	var nextMonth = month;
	var nextYear = year;
	var result = "";

	// Check if day and month is valid
	if (month < 13 && day <= daysInMonth(month, year)) {
		nextDay += 1;

		// If 'month' is not december and 'day' is the last day of the month
		if (month != 12 && month != 2 && day == daysInMonth(month, year)) {
			nextDay = 1;
			nextMonth += 1;
		}

		// If it's december and 'day' is the last day of the month, happy new year :))
		if (month == 12 && day == daysInMonth(month, year)) {
			nextDay = 1;
			nextMonth = 1;
			nextYear += 1;
		}

		// If it's february and 'day' is the last day of the month
		if (month == 2) {
			if (checkLeapYear(year)) {
				if (day == 29) {
					nextDay = 1;
					nextMonth += 1;
				}
			} else {
				if (day == 28) {
					nextDay = 1;
					nextMonth += 1;
				}
			}
		}
	}

	result = "Ngay ke tiep la: ngay " + nextDay;
	result += " thang " + nextMonth;
	result += " nam " + nextYear;

	return result;
}
