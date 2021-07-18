import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  reorders: any[] = [{
    id: 1,
    prodName: "Truffle - Peelings",
    prodQty: "4"
  }, {
    id: 2,
    prodName: "Vacuum Bags 12x16",
    prodQty: "8186"
  }, {
    id: 3,
    prodName: "Waffle Stix",
    prodQty: "4"
  }, {
    id: 4,
    prodName: "Vinegar - White Wine",
    prodQty: "6"
  }, {
    id: 5,
    prodName: "Chocolate Bar - Coffee Crisp",
    prodQty: "10"
  }, {
    id: 6,
    prodName: "Tomatoes",
    prodQty: "95"
  }, {
    id: 7,
    prodName: "Soup - French Onion",
    prodQty: "8"
  }, {
    id: 8,
    prodName: "Olives - Kalamata",
    prodQty: "8"
  }, {
    id: 9,
    prodName: "Squeeze Bottle",
    prodQty: "7"
  }, {
    id: 10,
    prodName: "Wine - Red, Wolf Blass, Yellow",
    prodQty: "54"
  }, {
    id: 11,
    prodName: "Juice - Lemon",
    prodQty: "0"
  }, {
    id: 12,
    prodName: "Yogurt - Cherry, 175 Gr",
    prodQty: "5"
  }, {
    id: 13,
    prodName: "Soup Campbells Turkey Veg.",
    prodQty: "5"
  }, {
    id: 14,
    prodName: "Pastry - Trippleberry Muffin - Mini",
    prodQty: "9"
  }, {
    id: 15,
    prodName: "Pepper Squash",
    prodQty: "13"
  }, {
    id: 16,
    prodName: "Muffin - Carrot Individual Wrap",
    prodQty: "26"
  }, {
    id: 17,
    prodName: "Bay Leaf",
    prodQty: "37"
  }, {
    id: 18,
    prodName: "Wine - White, Pinot Grigio",
    prodQty: "7"
  }, {
    id: 19,
    prodName: "Sprouts - Alfalfa",
    prodQty: "16"
  }, {
    id: 20,
    prodName: "Water - Green Tea Refresher",
    prodQty: "30"
  }, {
    id: 21,
    prodName: "Beer - Moosehead",
    prodQty: "12"
  }, {
    id: 22,
    prodName: "Vinegar - Balsamic, White",
    prodQty: "15"
  }, {
    id: 23,
    prodName: "Fish - Halibut, Cold Smoked",
    prodQty: "5"
  }, {
    id: 24,
    prodName: "Beer - Steamwhistle",
    prodQty: "8"
  }, {
    id: 25,
    prodName: "Asparagus - Green, Fresh",
    prodQty: "4"
  }, {
    id: 26,
    prodName: "Oil - Truffle, White",
    prodQty: "82"
  }, {
    id: 27,
    prodName: "Broom And Brush Rack Black",
    prodQty: "61"
  }, {
    id: 28,
    prodName: "Tandoori Curry Paste",
    prodQty: "7"
  }, {
    id: 29,
    prodName: "Apple - Macintosh",
    prodQty: "77"
  }, {
    id: 30,
    prodName: "Chips - Miss Vickies",
    prodQty: "6"
  }, {
    id: 31,
    prodName: "Squash - Acorn",
    prodQty: "4"
  }, {
    id: 32,
    prodName: "Filling - Mince Meat",
    prodQty: "9"
  }, {
    id: 33,
    prodName: "Gatorade - Cool Blue Raspberry",
    prodQty: "1"
  }, {
    id: 34,
    prodName: "Beer - Fruli",
    prodQty: "20"
  }, {
    id: 35,
    prodName: "Cheese - Brie Roitelet",
    prodQty: "8"
  }, {
    id: 36,
    prodName: "Papadam",
    prodQty: "16"
  }, {
    id: 37,
    prodName: "Onions - Green",
    prodQty: "6"
  }, {
    id: 38,
    prodName: "Water - Aquafina Vitamin",
    prodQty: "44"
  }, {
    id: 39,
    prodName: "Gelatine Leaves - Bulk",
    prodQty: "836"
  }, {
    id: 40,
    prodName: "Hickory Smoke, Liquid",
    prodQty: "5"
  }, {
    id: 41,
    prodName: "Cheese - Feta",
    prodQty: "33"
  }, {
    id: 42,
    prodName: "Salt - Sea",
    prodQty: "44"
  }, {
    id: 43,
    prodName: "Red Snapper - Fresh, Whole",
    prodQty: "0"
  }, {
    id: 44,
    prodName: "Flavouring - Orange",
    prodQty: "17"
  }, {
    id: 45,
    prodName: "Wine - Tribal Sauvignon",
    prodQty: "33"
  }, {
    id: 46,
    prodName: "Horseradish Root",
    prodQty: "21"
  }, {
    id: 47,
    prodName: "Cookie - Oatmeal",
    prodQty: "55"
  }, {
    id: 48,
    prodName: "Creamers - 10%",
    prodQty: "15"
  }, {
    id: 49,
    prodName: "Oil - Avocado",
    prodQty: "3"
  }, {
    id: 50,
    prodName: "Shrimp - Black Tiger 16/20",
    prodQty: "79"
  }, {
    id: 51,
    prodName: "Grenadillo",
    prodQty: "99"
  }, {
    id: 52,
    prodName: "Paste - Black Olive",
    prodQty: "916"
  }, {
    id: 53,
    prodName: "Baking Powder",
    prodQty: "54"
  }, {
    id: 54,
    prodName: "Chocolate Bar - Smarties",
    prodQty: "9"
  }, {
    id: 55,
    prodName: "Soup - Knorr, Veg / Beef",
    prodQty: "7"
  }, {
    id: 56,
    prodName: "Sugar Thermometer",
    prodQty: "21"
  }, {
    id: 57,
    prodName: "Muffin Batt - Choc Chk",
    prodQty: "88"
  }, {
    id: 58,
    prodName: "Sauce - Demi Glace",
    prodQty: "44"
  }, {
    id: 59,
    prodName: "Grapes - Red",
    prodQty: "0"
  }, {
    id: 60,
    prodName: "Macaroons - Homestyle Two Bit",
    prodQty: "72"
  }, {
    id: 61,
    prodName: "Corn Syrup",
    prodQty: "4"
  }, {
    id: 62,
    prodName: "Beef Cheek Fresh",
    prodQty: "7"
  }, {
    id: 63,
    prodName: "Onions - Cippolini",
    prodQty: "4"
  }, {
    id: 64,
    prodName: "Hagen Daza - Dk Choocolate",
    prodQty: "4"
  }, {
    id: 65,
    prodName: "Oil - Olive",
    prodQty: "56"
  }, {
    id: 66,
    prodName: "Peach - Halves",
    prodQty: "2"
  }, {
    id: 67,
    prodName: "Apricots - Halves",
    prodQty: "1"
  }, {
    id: 68,
    prodName: "Wine - Rioja Campo Viejo",
    prodQty: "21"
  }, {
    id: 69,
    prodName: "Kiwi",
    prodQty: "27"
  }, {
    id: 70,
    prodName: "Poppy Seed",
    prodQty: "71"
  }, {
    id: 71,
    prodName: "Sauce - Caesar Dressing",
    prodQty: "41"
  }, {
    id: 72,
    prodName: "Soup - Campbells Broccoli",
    prodQty: "5"
  }, {
    id: 73,
    prodName: "Wine - Rosso Toscano Igt",
    prodQty: "10"
  }, {
    id: 74,
    prodName: "Turkey - Breast, Boneless Sk On",
    prodQty: "5"
  }, {
    id: 75,
    prodName: "Syrup - Monin, Amaretta",
    prodQty: "76"
  }, {
    id: 76,
    prodName: "Cookies - Englishbay Oatmeal",
    prodQty: "4"
  }, {
    id: 77,
    prodName: "Wine - Vidal Icewine Magnotta",
    prodQty: "29"
  }, {
    id: 78,
    prodName: "Wine - Magnotta - Red, Baco",
    prodQty: "3"
  }, {
    id: 79,
    prodName: "White Baguette",
    prodQty: "8"
  }, {
    id: 80,
    prodName: "Wine - White, Ej Gallo",
    prodQty: "31"
  }, {
    id: 81,
    prodName: "Tequila Rose Cream Liquor",
    prodQty: "7"
  }, {
    id: 82,
    prodName: "Longos - Lasagna Beef",
    prodQty: "8"
  }, {
    id: 83,
    prodName: "Mustard - Dry, Powder",
    prodQty: "31"
  }, {
    id: 84,
    prodName: "Wine - White, Colubia Cresh",
    prodQty: "27"
  }, {
    id: 85,
    prodName: "Emulsifier",
    prodQty: "22"
  }, {
    id: 86,
    prodName: "The Pop Shoppe - Black Cherry",
    prodQty: "41"
  }, {
    id: 87,
    prodName: "Cape Capensis - Fillet",
    prodQty: "52"
  }, {
    id: 88,
    prodName: "Mustard - Dry, Powder",
    prodQty: "15"
  }, {
    id: 89,
    prodName: "Sobe - Tropical Energy",
    prodQty: "5"
  }, {
    id: 90,
    prodName: "Pasta - Elbows, Macaroni, Dry",
    prodQty: "13"
  }, {
    id: 91,
    prodName: "Mint - Fresh",
    prodQty: "8"
  }, {
    id: 92,
    prodName: "Foil - Round Foil",
    prodQty: "58"
  }, {
    id: 93,
    prodName: "Asparagus - Mexican",
    prodQty: "4"
  }, {
    id: 94,
    prodName: "Soup - Knorr, Veg / Beef",
    prodQty: "8"
  }, {
    id: 95,
    prodName: "Spring Roll Wrappers",
    prodQty: "9"
  }, {
    id: 96,
    prodName: "Juice - Ocean Spray Kiwi",
    prodQty: "28"
  }, {
    id: 97,
    prodName: "Coffee - Beans, Whole",
    prodQty: "38"
  }, {
    id: 98,
    prodName: "Onion - Dried",
    prodQty: "23"
  }, {
    id: 99,
    prodName: "Papadam",
    prodQty: "32"
  }, {
    id: 100,
    prodName: "Tarts Assorted",
    prodQty: "36"
  }]

  ngOnInit(): void {
  }



}
