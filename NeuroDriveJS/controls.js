class Controls{
    constructor(){
        this.forward=false;
        this.reverse=false;  //try with backwards too and see the difference between reverse and backward
        this.left=false;
        this.right=false;

        //after assigning the controls we add the keyboard lsiteners 
        this.#addKeyboardListeners();

    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'ArrowUp':
                    this.forward=true;
                    break;
                case 'ArrowDown':
                    this.reverse=true;
                    break;
                case 'ArrowLeft':
                    this.left=true;
                    break;
                case 'ArrowRight':
                    this.right=true;
                    break;
            }
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case 'ArrowUp':
                    this.forward=false;
                    break;
                case 'ArrowDown':
                    this.reverse=false;
                    break;
                case 'ArrowLeft':
                    this.left=false;
                    break;
                case 'ArrowRight':
                    this.right=false;
                    break;
           }
        }
    }
}