import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {OrderService} from "../../services/order-service";

@Component({
    selector: 'order-delete',
    templateUrl: 'app/views/order/delete.html',
    providers: [OrderService]
})
export class Delete implements OnInit {

    id:number = 0;

    deleting:boolean = false;

    constructor(private orderService: OrderService, private router: Router, private params: RouteParams) {

    }

    ngOnInit() {
        this.id = parseInt(this.params.get('id'));
    }

    abort() {
        this.router.parent.navigate(['Home']);
    }

    proceed() {
        this.deleting = true;
        this.orderService.remove(this.id).then(() => {
            this.router.parent.navigate(['Home']);
        });
    }
}