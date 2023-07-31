// kiem tra so nguyen duong(lon hon 0 va chia het cho 1)
let SND = (Number) =>{
    if (typeof Number == 'number' && Number > 0 && Number %1 == 0){ // truyền vào 1 chuỗi thì ko phải số dương
        console.log(' so nguyen duong');
    }else {
        console.log( ' ko phai so nguyen duong');
    }
};
SND("3");