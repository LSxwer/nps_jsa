 function chia3(num){
 // Lấy giá trị

   
  // Kiểm tra số chẵn hay lẻ
  if (num % 3 == 0 && num % 2 == 0  ){  
      console.log(num + ' Chia het cho 3,2 ');
  }
 
  
  if (num % 3 != 0 && num % 2 != 0) {
      console.log(num + ' k  Chia het cho 3,2 ');

  
  }
  if (num % 3 == 0 && num % 2 != 0){
       console.log(num + 'chia het cho 3 nhung ko chia het cho 2');
  }    







}
chia3();
function tinh(a,b,c){
    let Delta = b * b - 4 * a * c
    console.log(Delta) 
     x1 = (-b - Math.sqrt(Delta)) / 2 * a    
     x2 = (-b + Math.sqrt(Delta)) / 2 * a
     console.log(x1)
     console.log(x2)
    
          
}
tinh(1,1,-2);
