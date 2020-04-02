export class TicketController {

    static getTicket = (ticketId) => {
        let tickets = JSON.parse(localStorage.getItem("tickets"));
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] === ticketId)
                return tickets[i];
        }
        return {};
    }

    static updateTicket(ticket) {
        this.deleteTicket(ticket.index);
        let tickets = JSON.parse(localStorage.getItem("tickets"));
        tickets.push(ticket);
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }

    static deleteTicket(idTicket) {
        let tickets = JSON.parse(localStorage.getItem("tickets"));
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].index === idTicket) {
                tickets.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }
}