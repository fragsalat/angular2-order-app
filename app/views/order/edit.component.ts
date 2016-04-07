import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Create} from './create.component';
import {OrderService} from "../../services/order-service";

@Component({
    selector: 'order-edit',
    templateUrl: 'app/views/order/create.html',
    providers: [OrderService]
})
export class Edit extends Create implements OnInit {

    method:string = 'edit';

    id:number = 0;

    constructor(private orderService: OrderService, private router: Router, private params: RouteParams) {
        super(orderService, router);
    }

    ngOnInit() {
        this.id = parseInt(this.params.get('id'));
        this.orderService.get(this.id).then(order => {
            this.id = order.id;
            this.articleName = order.articleName;
            this.sku = order.sku;
            this.quantity = order.quantity;
            this.price = order.price;
        });
    }

    sendData(data) {
        this.orderService.edit(this.id, data).then(order => {
            alert('The order was updated.');
            this.router.parent.navigate(['Home']);
        });
    }
}