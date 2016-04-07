export class Order {

    /**
     * @type {number}
     */
    id:number = null;

    /**
     * @type {string}
     */
    articleName:string = null;

    /**
     * @type {string}
     */
    sku:string = null;

    /**
     * @type {number}
     */
    quantity:number = 0;

    /**
     * @type {number}
     */
    price:number = 0;

    /**
     * @type {string}
     */
    status:string = 'pending';

    /**
     * Simply assign data to instance
     *
     * @param data object
     */
    constructor(data: Object) {
        Object.assign(this, data);
    }
}
