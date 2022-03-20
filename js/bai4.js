/**
 * ĐẦU VÀO: Tên và toạ độ nhà 3 sinh viên, toạ độ trường
 * XỬ LÝ:
 *    B1: Tạo những biến cần thiết theo yêu cầu đề bài, gán giá trị
 *    B2: Tính toán lần lượt khoảng cách từ nhà tới trường của 3 sinh viên
 *    B3: Tạo biến max để lưu trữ khoảng cách xa nhất, tiến hành so sánh lần lượt
 *       3 khoảng cách với max và cập nhật biến max
 *    B4: In tên sinh viên ở xa trường nhất tương ứng với max
 * ĐẦU RA: Tên sinh viên ở xa trường nhất
 */

var student1 = "A";
var student2 = "B";
var student3 = "C";

var locationX_1 = 2;
var locationY_1 = 4;

var locationX_2 = 1;
var locationY_2 = 1;

var locationX_3 = 7;
var locationY_3 = 8;

var uniLocationX = 9;
var uniLocationY = 10;

var distance1 = parseInt(
	Math.sqrt(
		Math.pow(uniLocationX - locationX_1, 2) +
			Math.pow(uniLocationY - locationY_1, 2)
	)
);

var distance2 = parseInt(
	Math.sqrt(
		Math.pow(uniLocationX - locationX_2, 2) +
			Math.pow(uniLocationY - locationY_2, 2)
	)
);

var distance3 = parseInt(
	Math.sqrt(
		Math.pow(uniLocationX - locationX_3, 2) +
			Math.pow(uniLocationY - locationY_3, 2)
	)
);

var max = distance1;
if (distance2 > max) {
	max = distance2;
} else if (distance3 > max) {
	max = distance3;
}

var result = "Sinh vien xa truong nhat la: ";

if (max == distance1) {
	result += student1;
} else if (max == distance2) {
	result += student2;
} else if (max == distance3) {
	result += student3;
}

console.log(result);
