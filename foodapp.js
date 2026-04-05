/**
 * ============================================
 * FOOD ORDERING SYSTEM (OOP IMPLEMENTATION)
 * ============================================
 * This program models a simple food ordering system.
 * Customers can add menu items to an order and calculate
 * the total price of the order.
 *
 * Concepts demonstrated:
 * - Classes
 * - Constructors
 * - Instance properties
 * - Static properties
 * - Static methods
 * - Object interaction
 */


/**
 * CLASS: MenuItem
 * Represents a food item in the restaurant menu
 */
class MenuItem {

  // Static property shared across all menu items
  static totalItems = 0;

  /**
   * Constructor
   * Creates a new menu item
   */
  constructor(id, name, price) {

    // Instance attributes
    this.id = id;
    this.name = name;
    this.price = price;

    // Increase total menu items count
    MenuItem.totalItems++;
  }

  /**
   * Method to display menu item details
   */
  displayItem() {
    console.log(`Item ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }

  /**
   * Method to update the price of the menu item
   */
  updatePrice(newPrice) {
    this.price = newPrice;
    console.log(`Price updated for ${this.name} to $${newPrice}`);
  }

  /**
   * Static method
   * Returns the total number of menu items created
   */
  static getTotalItems() {
    return MenuItem.totalItems;
  }
}



/**
 * CLASS: Order
 * Represents a customer's order
 */
class Order {

  // Static variable to generate unique order IDs
  static currentOrderId = 1000;

  /**
   * Constructor
   * Creates a new order
   */
  constructor() {

    // Generate unique order ID
    this.orderId = Order.generateOrderId();

    // List of menu items in the order
    this.items = [];

    // Capture date and time of the order
    this.orderDate = new Date().toLocaleString();
  }

  /**
   * Method to add a menu item to the order
   */
  addItem(item) {

    this.items.push(item);

    console.log(`${item.name} added to order.`);
  }

  /**
   * Method to calculate the total cost of the order
   */
  calculateTotal() {

    let total = 0;

    // Loop through items and sum prices
    for (let item of this.items) {
      total += item.price;
    }

    return total;
  }

  /**
   * Method to display order details
   */
  displayOrder() {

    console.log(`\nOrder ID: ${this.orderId}`);
    console.log(`Order Date: ${this.orderDate}`);

    console.log("\nItems Ordered:");

    this.items.forEach((item) => {
      console.log(`- ${item.name} ($${item.price})`);
    });

    console.log(`Total: $${this.calculateTotal()}`);
  }

  /**
   * Static method
   * Generates a unique order ID
   */
  static generateOrderId() {

    return ++Order.currentOrderId;
  }
}



/**
 * ============================================
 * USAGE EXAMPLE
 * ============================================
 * This section demonstrates how the classes work
 */

// Create some menu items
const burger = new MenuItem(1, "Burger", 8);
const pizza = new MenuItem(2, "Pizza", 12);
const drink = new MenuItem(3, "Soft Drink", 3);


// Display menu items
console.log("\nMENU ITEMS");
burger.displayItem();
pizza.displayItem();
drink.displayItem();


// Create a new order
const order1 = new Order();


// Add items to order
order1.addItem(burger);
order1.addItem(pizza);
order1.addItem(drink);


// Display order summary
order1.displayOrder();


// Show total menu items created
console.log(`\nTotal Menu Items: ${MenuItem.getTotalItems()}`);