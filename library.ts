import { Member } from "./member.ts"
import { BookItem } from "./bookItem.ts"
import { Loan } from "./loaned.ts"

export class Library{
    bookItems: BookItem[] = []
    loans: Loan[] = []

    addBookItem(item: BookItem){
        this.bookItems.push(item)
    }

    borrowBook(bookId: string, member: Member): Loan{
        
        if(!member.canBorrow()){
            throw new Error ('Member has three books or is blocked!')
        }
        const copies = this.bookItems.filter(bi => bi.book.id === bookId)

        if(copies.length === 0){
            throw new Error("Library does not contain a book item for this title")
        }

        const availableCopy = copies.find(c => c.isAvailable())

        if(!availableCopy){
            throw new Error('No available copy')
        }


        const now = new Date()
        const dueDate = new Date(now)
        
        //penalidade de acordo com a categoria do membro
        if(member.category == 'Regular'){
            dueDate.setDate(dueDate.getDate() + 14)
        }
        
           else if(member.category == 'Premium'){
                dueDate.setDate(dueDate.getDate() + 30)
        }
    
    


        const loan = new Loan(availableCopy, member, now, dueDate)

        availableCopy.markLoaned()
        member.addLoan(loan)
        this.loans.push(loan);

        return loan

    }

    returnBook(loan: Loan, member: Member){

        const now = new Date();

        loan.returnBook(now);
        loan.member.removeLoan(loan);
        const dayslate = Math.ceil(now.getTime() - loan.dueDate.getTime()) / (1000 * 60 * 60 * 24);
        const blockUntil = new Date(now);

        //valida se o membro é premium ou regular e penaliza de acordo
        if(now > loan.dueDate){
            if(member.category == 'Regular'){

                blockUntil.setDate(blockUntil.getDate() + dayslate);
                
                loan.member.blockUntil(blockUntil);
            }
            else if(member.category == 'Premium'){
                if(dayslate > 3){

                    blockUntil.setDate(blockUntil.getDate() + dayslate);
                    loan.member.blockUntil(blockUntil);
                }
            }
        }

    }

    // verifyBooks(member: Member){
    //     const verify = member.getLoans()
    //     if(verify.length >= 3){
    //         throw new Error("Maximum limit reached! ")

    //     }
    // }
}