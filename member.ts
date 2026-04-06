import { Loan } from "./loaned.ts";

export type MemberCategory = "Regular" | "Premium";

export class Member {
    activeLoans: Loan[] = []
    blockedUntil?: Date

    constructor(
        public id: string,
        public name: string,
        public category: MemberCategory 
    ) {}
    
    //verifica se pode emprestar. Condições: menos de 3 livros ou não bloqueado
    canBorrow(): boolean {
        if(this.activeLoans.length >= 3){
            return false
        }
        if (!this.blockedUntil) return true;
        return new Date() > this.blockedUntil;
    }

    addLoan(loan: Loan) {
        this.activeLoans.push(loan)
    }

    removeLoan(loan: Loan) {
        this.activeLoans = 
            this.activeLoans.filter(l => l !== loan)
    }

    blockUntil(date: Date) {
        this.blockedUntil = date
    }

    getLoans(): Loan[] {
        return [...this.activeLoans]
    }
}