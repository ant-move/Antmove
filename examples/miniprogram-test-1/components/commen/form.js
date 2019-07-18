module.exports= Behavior ({
    lifetimes: {
        created () {
            console.log("1.初始化",this.data);
           
        }
    }
    
    // ...
  });