// Bài tập 1
function ex1() {
// 1 : lấy thông tin số ngày làm và lương 1 ngày
    let workDays = +document.getElementById('workdays').value;
    let pay = +document.getElementById('pay').value;

    // 2 : tính lương = lương 1 ngày * số ngày làm
    let wage = workDays * pay;

    // 3 : in ra kết quả lương trên giao diện.
    document.getElementById('result1').value = wage;
}

function ex2() {
//1 : lấy thông tin các số thực người dùng nhập vào
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let number3 = +document.getElementById('number3').value;
    let number4 = +document.getElementById('number4').value;
    let number5 = +document.getElementById('number5').value;

//2 : tính giá trị trung bình 5 số
    let averate = (number1 + number2 + number3 + number4 + number5) / 5;

//3 : in ra kết quả trên giao diện
    document.getElementById('result2').value = averate;

    console.log(number1)
}
