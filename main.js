new Vue({
    el:"#app",
    data:{
        tasks:[{
            text:"test 1",
            isCompleted: false
        },
        {
            text:"test 2",
            isCompleted: true
        }
        ],
        txtadd: ''
    },
    methods:{
        addTask: function(){
            this.tasks.push({
                text: this.txtadd,
                isCompleted: false
            })
            this.txtadd = ""
        }
    }
})