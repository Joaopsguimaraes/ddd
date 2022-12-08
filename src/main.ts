import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order-item";

let customer = new Customer("123", "Joao Guimaraes");
const address = new Address("RUA 14", 0, "123-456", "SAO PAULO");

//relação de agregado por ID
customer.Address = address;
customer.activate();

// relação de agregado de objeto para entidade, pois estão no mesmo agregado.
const itemTest = new OrderItem("1", "Item teste 13", 10, "p1", 2);
const itemTest2 = new OrderItem("2", "Item teste 11", 12, "p2", 1);

const order = new Order("1", "123", [itemTest, itemTest2]);

console.log(order);
