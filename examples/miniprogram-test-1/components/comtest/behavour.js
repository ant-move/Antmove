module.exports = Behavior({
    properties: {
        myProperty: { // 属性名
            type: String,
            value: ''
        }
    },
    data:{
        age:13
    },
    lifetimes: {
        created(){
             console.log("1.初始化", this.data);
        },
        attached(){
            console.log("2.初始化", this.data);
        },
        ready() {
            console.log("3.初始化", this.data);
        }
    } ,// ...
    ready(){
        console.log("3.初始化", this.properties);
    }

    
});