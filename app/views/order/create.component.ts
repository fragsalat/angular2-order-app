import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {OrderService} from 'app/services/order-service';

@Component({
    selector: 'order-create',
    templateUrl: 'app/views/order/create.html',
    providers: [OrderService]
})
export class Create {

    method:string = 'create';
    
    articleName: string = '';
    
    sku: string = '';
    
    quantity: number = 0;
    
    price: number = 0;

    constructor(private orderService: OrderService, private router: Router) {

    }
    
    onSubmit(event) {
        let data = {
            articleName: this.articleName,
            sku: this.sku,
            quantity: this.quantity,
            price: this.price
        };

        this.sendData(data);
    }

    sendData(data) {
        this.orderService.create(data).then(order => {
            alert('The order was created.');
            this.router.parent.navigate(['Home']);
        });
    }
}