import Product from "./product";
/**
 * Agregados:
 * - Customer => Address
 * - Order => OrderItem;
 * - Product
 */

describe("Product unit test", () => {
  it("should throw new error when id is empty", () => {
    expect(() => {
      let product = new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });
  it("should throw new error when name is empty", () => {
    expect(() => {
      let product = new Product("123111", "", 100);
    }).toThrowError("Name is required");
  });
  it("should throw new error when price is equal to zero", () => {
    expect(() => {
      let product = new Product("123111", "Product 01", 0);
    }).toThrowError("Price must be greater than zero");
  });
  it("should change name", () => {
    let product = new Product("123111", "Product 01", 150);
    product.changeName("Product 02");
    expect(product.name).toBe("Product 02");
  });
  it("should change price", () => {
    let product = new Product("123111", "Product 01", 150);
    product.changePrice(139.9);
    expect(product.price).toBe(139.9);
  });
});
