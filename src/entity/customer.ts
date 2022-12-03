// Uma entidade por padrao ela deve sempre se auto validar
import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
  }

  public changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  public activate(): void {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  public deactivate(): void {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  isActive(): boolean {
    return this._active;
  }
}
