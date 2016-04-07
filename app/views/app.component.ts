import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeRoute, CreateRoute, EditRoute, DeleteRoute} from 'app/routes';

@Component({
    selector: 'order-app',
    templateUrl: 'app/views/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([HomeRoute, CreateRoute, EditRoute, DeleteRoute])
export class AppComponent { }
