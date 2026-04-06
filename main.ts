import { Loan } from './loaned.ts'
import { Library } from './library.ts'
import { Member } from './member.ts'
import { Book } from './book.ts'
import { BookItem } from './bookItem.ts'

//criando os livros
const livro = new Book('0001', 'George Orwell', '1984')
const livro2 = new Book('0002', 'George Orwell', 'Revolução dos Bichos')
const livro3 = new Book('0003', 'Daniel Keyes', 'Flores para Algernon')

//criando cópia dos livros
//1984
const copiaLivro1 = new BookItem('0001', livro)
const copiaLivro2 = new BookItem('0001', livro)
//Revolução dos bichos
const copiaLivro3 = new BookItem('0002', livro2)
const copiaLivro4 = new BookItem('0002', livro2)
//Flores para Algernon
const copiaLivro5 = new BookItem('0003', livro3)
const copiaLivro6 = new BookItem('0003', livro3)

//criando o membro e a biblioteca 
const membro1 = new Member('333-666-999', 'Caio', 'Regular')
const membro2 = new Member('222-444-666', 'Maria', 'Premium')
const biblioteca = new Library


//add os livros na biblioteca
biblioteca.addBookItem(copiaLivro1)
biblioteca.addBookItem(copiaLivro2)
biblioteca.addBookItem(copiaLivro3)
biblioteca.addBookItem(copiaLivro4)
biblioteca.addBookItem(copiaLivro6)

//emprestando livros
const emprestimo1 = biblioteca.borrowBook('0001', membro1)
const emprestimo2 = biblioteca.borrowBook('0003', membro2)
const emprestimo3 = biblioteca.borrowBook('0002', membro2)
const emprestimo4 = biblioteca.borrowBook('0001', membro2)
biblioteca.returnBook(emprestimo2, membro2)
const emprestimo5 = biblioteca.borrowBook('0002', membro2)

//devolvendo livro
biblioteca.returnBook(emprestimo2, membro2)

// === tentando emprestar um livro emprestado ===
//const membro3 = new Member('Juarez', '313-424-636')
//const emprestimo3 = biblioteca.borrowBook('0003', membro3)
// === saída-> Mensagem de erro "No available copy" ===

console.log(membro1)
console.log(membro2)


 