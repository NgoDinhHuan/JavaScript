// kiểm tra nếu ký tự n=n-1 thì công vào biến đếm
//nếu khác thì set lại biến n-1
//duyêt qua từng phần tử
//nếu phấn tử n+1 so sánh với n
//nếu giống tăng biến đếm
//nếu khong đúng thì đếm lại
//cho phần tư kia vào danh sach cộng string


function demchuoi(inputString) {
    var dem_String = '';
    var vChar = inputString[0];
    var charCount = 1;
  
    for (var i = 1; i < inputString.length; i++) {
      if (inputString[i] === vChar) {
        charCount++;
      } else {
        dem_String += vChar + charCount;
        vChar = inputString[i];
        charCount = 1;
      }
    }
    dem_String += vChar + charCount;
  
    return dem_String;
  }
  
  const chuoi_nhap = 'wwwbbaawwwaaqv';
  const chuoi_xuat = demchuoi(chuoi_nhap);
  console.log(chuoi_xuat);