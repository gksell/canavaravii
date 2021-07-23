new Vue ({

el: '#app',

data: {
health_player : 100,
health_monster : 100,
game : false,
logs: []
},
methods : {
    start_game : function(){
        this.game = true;
    },
    attack : function(){
        var point = Math.ceil(Math.random()*10);
        this.health_monster-=point;
        this.monster_attack();
        this.add_to_log({turn : "p" , text : "Oyuncu atağı ("+ point +")" });
    },
    special_attack : function(){
        var point = Math.ceil(Math.random()*20);
        this.health_monster-=point;
        this.monster_attack();
        this.add_to_log({turn : "p" , text : "Oyuncu Özel atağı ("+ point +")" });
    },
    heal_up : function(){
        var point = Math.ceil(Math.random()*10);
        this.health_player+=point;
        this.monster_attack();
        this.add_to_log({turn : "p" , text : "Oyuncu can dolduruyor ("+ point +") "});
    },
    give_up : function (){
    this.health_player=0;
    this.add_to_log({turn : "p" , text : "Oyuncu Pes ettii..."  });
    },
    monster_attack : function(){
        var point = Math.ceil(Math.random()*20) ;
        this.health_player-=point;
        this.add_to_log({turn : "M" , text : "Canavar atağı ("+ point +") "});
    },
    add_to_log : function(log){
        this.logs.push(log);
    }
},
watch : {
    health_player : function(value){
    if (value<=0){
    this.health_player = 0;
    if(confirm("Oyunu Kaybettiniz :( Tekrar Denemek İstermisiniz?"))
    { 
      this.health_player= 100;
      this.health_monster=100;
      this.logs=[];
    }
    }
    else if (value>=100)
    this.health_player=100;
        },

    health_monster : function(value){
        if (value<=0){
        this.health_monster = 0;
    if(confirm("Oyunu Kazandınız :) Tekrar Denemek İstermisiniz? ")){
      this.health_player= 100;
      this.health_monster=100;
      this.logs=[];
    }
      }  
        },
           }
})