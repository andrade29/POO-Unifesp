import { Member } from './member.ts'
import { BookItem } from './bookItem.ts'

export class Loan{
    
    returnedAt?: Date

    constructor(public bookItem: BookItem, public member: Member, public borrewAt: Date, public dueDate: Date){}

    returnBook(date: Date){
        this.returnedAt = date 
        this.bookItem.markAvailable();
    }

    isLate(currentDate: Date): boolean{
        return currentDate > this.dueDate && !this.returnedAt
    }
}
