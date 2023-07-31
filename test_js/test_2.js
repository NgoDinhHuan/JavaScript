// số nguyên tố 
// n<2 "không phải SNT"
// n=2 "là số nguyên tố chẵn duy nhất"
// n % 2 =0 "ko phải SNT"

function SNT(n){
    var flag = true;
    // n<2 ko phải là snt
    if(n<2){
        flag = false;
    }
    else if(n==2){
        flag = true;
    }
    else if(n%2 == 0){
        flag = false;
    }
    // cho vòng lặp từ 3 tới n-1 với bước nhảy là 2
    else {
        for(var i=3; i < n-1; i+=2){
            if(n%i == 0){
                flag = false;
                break;
            }

        }
    }
    if(flag ==true){
        console.log("Số nguyên tố");
    }else
    console.log(" ko phải là số nguyên tố")
}
SNT(1);