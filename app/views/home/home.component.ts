import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {OrderService} from 'app/services/order-service';

@Component({
    selector: 'home',
    templateUrl: 'app/views/home/home.html',
    providers: [OrderService]
})
export class Home {

    public orders:Array = [];

    private offset:number = 0;

    private limit:number = 10;

    private loading:boolean = true;

    constructor(private orderService: OrderService, private router: Router) {
        this.loadMoreOrders();
    }

    loadMoreOrders() {
        this.orderService.list(this.offset, this.limit).then(orders => {
            this.orders = this.orders.concat(orders);
            this.offset += orders.length;
            this.loading = false;
        });
    }

    route(name, params) {
        this.router.parent.navigate([name, params]);
    }
}