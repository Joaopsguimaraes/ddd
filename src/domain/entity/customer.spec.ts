import Address from "./address";
import Customer from "./customer";

describe("customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("ID is required");
  });
  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });
  it("should change name", () => {
    // Arrange
    const customer = new Customer("123", "John");
    // Act
    customer.changeName("Joao Guimaraes");
    // Assert
    expect(customer.name).toBe("Joao Guimaraes");
  });
  it("should activate customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Av. 123 teste", 2, "75131-009", "Anapolis");
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });
  it("should deactivate customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Av. 123 teste", 2, "75131-009", "Anapolis");
    customer.Address = address;
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });
  it("should throw error when address is undefined when you activate", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });
});
