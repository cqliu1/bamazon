const mysql = require("mysql");
const inquirer = require("inquirer");
const Product = require("./product");

const products = [];

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) throw err;
	displayMenu();
});

function displayMenu() {
	// use inquirer to display menu options for manager
}

function getAllProducts() {
	connection.query("SELECT * FROM products", function(err,res) {
		for(let i = 0; i < res.length; i++) {
			// console.log(res[i]);
			let newProduct = Product(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
			console.log(newProduct.print());
		}
	});
}

function getLowInventory() {
	connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err,res) {
		for(let i = 0; i < res.length; i++) {
			// console.log(res[i]);
			let newProduct = Product(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
			console.log(newProduct.print());
		}
	});
}

function AddToInventory() {
	// query to update qty for specified product to include new units
}

function AddNewProduct() {
	// query insert new product into products database
}