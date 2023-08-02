var addTwoNumbers = function(l1,l2){
    let newNode = new ListNode(0);
    let head = newNode;
    let contain = 0;


    while(l1||l2){
        let a = l1 && l1.val;
        let b = l2 && l2.val;
        let sum = a + b + contain;

        contain = Math.floor(sum/10)
        head.next = new ListNode(sum%10);//tổng lớn hơn 10, đặt biến head trỏ đến chữ số cuối 

        if(l1) l1 =l1.next;
        if(l2) l2=l2.next;

        head = head.next
    }
    if(contain>0) head.next = new ListNode(contain);//sau khi thêm các chữ số cuối cùng của số thì nhận được 1 contail,
    return newNode.next
};

