export class TicketController {

    static getTickets = () => {
        let tickets = JSON.parse(localStorage.getItem("tickets"));
        tickets.sort((a, b) => {
            return a.index - b.index;
        });
        return tickets;
    }

    static getTicket = (ticketId) => {
        let tickets = this.getTickets();
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].index === parseInt(ticketId))
                return tickets[i];
        }
        return {};
    }

    static getNextId = () => {
        let tickets = this.getTickets();
        let indexes = [];
        for (let i = 0; i < tickets.length; i++) {
            indexes[i] = tickets[i].index;
        }
        return Math.max(...indexes) + 1;
    }

    static addTicket(ticket) {
        ticket.index = this.getNextId();
        let tickets = this.getTickets();
        tickets.push(ticket);
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }

    static updateTicket(ticket) {
        this.deleteTicket(ticket.index);
        let tickets = this.getTickets();
        tickets.push(ticket);
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }

    static deleteTicket(idTicket) {
        let tickets = this.getTickets();
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].index === idTicket) {
                tickets.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }

    static searchTicket(str) {
        let searchResult = [];
        let tickets = this.getTickets();
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].title.includes(str) || tickets[i].description.includes(str) || tickets[i].category.includes(str)) {
                searchResult.push(tickets[i]);
            }
        }
        return searchResult;
    }
}