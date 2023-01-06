let list = document.querySelectorAll('.list') //Seleciona todos os itens da lista//
let carditem = document.querySelectorAll('.card-item') // seleciona todos os cards//

for(let i=0; i<list.length;i++){
    list[i].addEventListener('click',function(){
        for(let j=0; j<list.length;j++){
            list[j].classList.remove('active') // Ao clicar no elemento,remove a classe active //
        }
        this.classList.add('active') // Ao clicar no novo elemento,adiciona a classe active no elemento.

        let dataFilter = this.getAttribute('data-filter')

        for(let k=0;k<carditem.length; k++){
            carditem[k].classList.remove('active')
            carditem[k].classList.add('hide')
        
            if(carditem[k].getAttribute('data-item')== dataFilter || dataFilter =='all'){
                carditem[k].classList.remove('hide')
                carditem[k].classList.add('active')
            }
        }
         
        
        
    })
}
