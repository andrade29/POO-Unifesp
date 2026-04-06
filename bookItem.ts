import { Book } from './book.ts'

//enum é utilizado para criar propriedades para o book
enum bookStatus{
    available = 'AVAILABLE',
    loaned = 'LOANED',
}

export class BookItem{
    public statusBook: bookStatus = bookStatus.available

    constructor(public id: string, public book: Book){}

    //verifica se o livro está disponível para empréstimo 
    isAvailable(): boolean {
        return this.statusBook === bookStatus.available
    }

    //marca o livro como emprestado
    markLoaned(){
        this.statusBook = bookStatus.loaned
    }

    //marca o livro como disponível
    markAvailable(){
        this.statusBook = bookStatus.available
    }

    set status(s: bookStatus){
        this.statusBook = s
    }

    get status(){
        return this.statusBook
    }
}
