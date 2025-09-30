function findMissing(list) {  
   
    let step = list[1] - list[0];
    
    let step2 = list[2] - list[1];

    if (step > step2) {
        step = step2;
    }
    

    for (let i = 0; i < list.length - 1; i++) {
       
      let shouldBe = list[i] + step;
        
        if (list[i + 1] !== shouldBe) {
            return shouldBe;
        }
    }
    
  return list[0];
}