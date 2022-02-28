const app = new Vue(
    {
        el: '#carosello',
        data: {
            carte: [
                {
                    nome: 'Olanda',
                    img: 'img/01.jpg',
                    descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam!',
                },
                {
                    nome: 'Svizzera',
                    img: 'img/02.jpg',
                    descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam!',
                },
                {
                    nome: 'Francia',
                    img: 'img/03.jpg',
                    descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam!',
                },
                {
                    nome: 'Gambogia',
                    img: 'img/04.jpg',
                    descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam!',
                },
                {
                    nome: 'Mexico',
                    img: 'img/05.jpg',
                    descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam!',
                }
            ],

            currentIndex: 0

        },
        methods: {
            avanti: function(){
                if( this.currentIndex  < this.carte.length  - 1 ) 
                this.currentIndex++
                 else
                    this.currentIndex = 0 
            },
            indietro: function(){
                 if(this.currentIndex > 0 ) 
                this.currentIndex--
                else
                    this.currentIndex = this.carte.length  -1 
            }


        }
    
    
})