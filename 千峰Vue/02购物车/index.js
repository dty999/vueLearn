

var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'苹果7',
                price:1000,
                count:1
            },
            {
                id:2,
                name:'苹果8',
                price:2000,
                count:2
            },
            {
                id:3,
                name:'苹果9',
                price:3000,
                count:4
            }
        ],
        
    },
    methods:{
        handleSub(index){
            if(this.list[index].count)
            --this.list[index].count
            // console.log(index);
        },
        handleAdd(index){
            
            ++this.list[index].count
            // console.log(index);
        },
        deleteOne(index){
            this.list.splice(index,1)
        },
        checked(e){
            console.log(e.target.checked);
        }
    },
    computed:{
        prices:function(){
            var prices = 0
            for(var i = 0;i<this.list.length;i++){
                prices+= this.list[i].count * this.list[i].price
            }
            return prices
        }
    }
})