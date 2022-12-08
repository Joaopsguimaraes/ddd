import OrderItem from "./order-item";

export default class Order {
  private _id: string = "";
  private _customerId: string = "";
  private _items: OrderItem[] = [];
  private _total: number;

  constructor(id: string, customerId: string, item: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = item;
    this._total = this.total();
    this.validate();
  }
  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._customerId.length === 0) {
      throw new Error("CustomerId is required");
    }
    if (this._items.length === 0) {
      throw new Error("Item quantity must be greater then zero");
    }
    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }
    return true;
  }
  total(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}
