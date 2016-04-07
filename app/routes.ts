import {Home} from 'app/views/home/home.component';
import {Create} from 'app/views/order/create.component';
import {Edit} from 'app/views/order/edit.component';
import {Delete} from 'app/views/order/delete.component';

export const HomeRoute = {
    path: '/',
    name: 'Home',
    component: Home,
    useAsDefault: true,
};
export const CreateRoute = {
    path: '/create',
    name: 'CreateOrder',
    component: Create
};
export const EditRoute = {
    path: '/edit/:id',
    name: 'EditOrder',
    component: Edit
};
export const DeleteRoute = {
    path: '/delete/:id',
    name: 'DeleteOrder',
    component: Delete
};