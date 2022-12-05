import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order-item";
import OrderService from "./order-service";

describe("Order service unit test", () => {
  it("should get total of all orders", () => {
    const orderItem = new OrderItem("i1", "Item 1", 100, "p1", 1);
    const orderItem2 = new OrderItem("i2", "Item 2", 200, "p2", 2);

    const order = new Order("o1", "c1", [orderItem]);
    const order2 = new Order("o2", "c1", [orderItem2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(500);
  });

  it("should place an order", () => {
    const customer = new Customer("1", "Joao Guimaraes");
    const item = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Joao Guimaraes");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
