import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any[] = [
    {
        
        id: 577,
        productCode: "bts300",
        productName: "Alin baby toast 300gm",
        description: "12pcs per Carton",
        cost: 527.16,
        price: 527.16,
        reoder: 20,
        qty: 12,
        active: false,
        category: "Food"
        
    },
    {
        
        id: 578,
        productCode: "bcm14",
        productName: "Alin Box cake .milk 14gm",
        description: "20pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 20,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 579,
        productCode: "cc13",
        productName: "Alin choco cake foil pack 13gm",
        description: "72pcs per Carton",
        cost: 269.28,
        price: 269.28,
        reoder: 20,
        qty: 72,
        active: false,
        category: "Food"
        
    },
    {
        
        id: 580,
        productCode: "cp14",
        productName: "Alin cup cake 14gm",
        description: "72pcs per Carton",
        cost: 269.28,
        price: 269.28,
        reoder: 20,
        qty: 72,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 581,
        productCode: "dc40",
        productName: "Alin Dry cake  F/P 40gm",
        description: "48pcs per Carton",
        cost: 359.04,
        price: 359.04,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 582,
        productCode: "fc14",
        productName: "Alin fruitti cake f/p 14 gm",
        description: "72pcs per Carton",
        cost: 269.28,
        price: 269.28,
        reoder: 20,
        qty: 72,
        active: false,
        category: "Food"
        
    },
    {
        
        id: 583,
        productCode: "g300",
        productName: "Alin ghee Rusk f/p 300gm",
        description: "12pcs per Carton",
        cost: 538.32,
        price: 538.32,
        reoder: 20,
        qty: 12,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 584,
        productCode: "stb50",
        productName: "Alin salted biscuits 50gm",
        description: "48pcs per Carton",
        cost: 362.40,
        price: 362.40,
        reoder: 20,
        qty: 48,
        active: false,
        category: "Food"
        
    },
    {
        
        id: 585,
        productCode: "sr20",
        productName: "Alin sweet rusk 20 gm",
        description: "48pcs per Carton",
        cost: 179.52,
        price: 179.52,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 586,
        productCode: "ts24",
        productName: "Alin Tea toast 24 gm",
        description: "48pcs per Carton",
        cost: 179.52,
        price: 179.52,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 587,
        productCode: "st300",
        productName: "Alin toast 300gm",
        description: "6pcs per Carton",
        cost: 224.28,
        price: 224.28,
        reoder: 20,
        qty: 6,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 588,
        productCode: "m1000",
        productName: "Alin Mango  Drinks 1000 L/t",
        description: "12pcs per Carton",
        cost: 684.72,
        price: 684.72,
        reoder: 20,
        qty: 12,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 589,
        productCode: "m250",
        productName: "Mango Drinks  250 ml",
        description: "24pcs per Carton",
        cost: 414.72,
        price: 414.72,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 590,
        productCode: "m500",
        productName: "Mango drinks 500 ml",
        description: "24pcs per Carton",
        cost: 768.24,
        price: 768.24,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 591,
        productCode: "l250",
        productName: "Litchi Drinks 250 ml",
        description: "24pcs per Carton",
        cost: 269.04,
        price: 269.04,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 592,
        productCode: "ol200",
        productName: "Alin oil 200 ml",
        description: "24pcs per Carton",
        cost: 986.88,
        price: 986.88,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 593,
        productCode: "ol500",
        productName: "Alin Oil 500 ml",
        description: "24pcs per Carton",
        cost: 213096,
        price: 213096,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 594,
        productCode: "ol80",
        productName: "Alin Oil 80 ml",
        description: "48pcs per Carton",
        cost: 114300,
        price: 114300,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 595,
        productCode: "ts10",
        productName: "Alin tomato sauce 10gm",
        description: "48pcs per Carton",
        cost: 944.64,
        price: 944.64,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 596,
        productCode: "pr400",
        productName: "Alin puffed rice 400gm",
        description: "24pcs per Carton",
        cost: 785.04,
        price: 785.04,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 597,
        productCode: "ls200",
        productName: "Alin Lascha shemai 200gm",
        description: "25pcs per Carton",
        cost: 588.75,
        price: 588.75,
        reoder: 20,
        qty: 25,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 598,
        productCode: "n180",
        productName: "Stick Noodles 180 gm",
        description: "24pcs per Carton",
        cost: 336.48,
        price: 336.48,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 599,
        productCode: "n80",
        productName: "stick Noodles 80 gm",
        description: "36pcs per Carton",
        cost: 269.28,
        price: 269.28,
        reoder: 20,
        qty: 36,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 600,
        productCode: "vs200",
        productName: "Alin Vermicelli  200gm",
        description: "24pcs per Carton",
        cost: 516.00,
        price: 516.00,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 602,
        productCode: "fp20",
        productName: "Alin bbq fried peas 20gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 603,
        productCode: "cb18",
        productName: "Alin chira bujia 18gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 604,
        productCode: "ffd15",
        productName: "Alin fried dal 15gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 605,
        productCode: "ffp",
        productName: "Alin fried peas 20 gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 606,
        productCode: "ch20",
        productName: "Alin chanachur 20 gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 607,
        productCode: "ch300",
        productName: "Alin chanachur 300 gm",
        description: "24pcs per Carton",
        cost: 986.88,
        price: 986.88,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 608,
        productCode: "ppr35",
        productName: "Alin puffed rice 35gm",
        description: "240pcs per Carton",
        cost: 147360,
        price: 147360,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 609,
        productCode: "mch20",
        productName: "Alin savoury mix chanachur 20gm",
        description: "240pcs per Carton",
        cost: 897.60,
        price: 897.60,
        reoder: 20,
        qty: 240,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 610,
        productCode: "bm40",
        productName: "Alin Biryani masala 40 gm",
        description: "24pcs per Carton",
        cost: 886.08,
        price: 886.08,
        reoder: 20,
        qty: 24,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 611,
        productCode: "cm20",
        productName: "Alin chiken curry powder 20gm",
        description: "144pcs per Carton",
        cost: 148032,
        price: 148032,
        reoder: 20,
        qty: 144,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 612,
        productCode: "cp50",
        productName: "Alin chilli powder 50gm",
        description: "96pcs per Carton",
        cost: 179424,
        price: 179424,
        reoder: 20,
        qty: 96,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 613,
        productCode: "mc20",
        productName: "Alin meat curry powder 20gm",
        description: "144pcs per Carton",
        cost: 148032,
        price: 148032,
        reoder: 20,
        qty: 144,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 614,
        productCode: "tp50",
        productName: "Alin turmeric powder 50gm",
        description: "96pcs per Carton",
        cost: 179424,
        price: 179424,
        reoder: 20,
        qty: 96,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 615,
        productCode: "cm24",
        productName: "Alin muffin cake cho 24gm",
        description: "48pcs per Carton",
        cost: 358.56,
        price: 358.56,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    },
    {
        
        id: 616,
        productCode: "ch150",
        productName: "Alin chanachur 150 gm",
        description: "48pcs per Carton",
        cost: 996.00,
        price: 996.00,
        reoder: 20,
        qty: 48,
        active: true,
        category: "Food"
        
    }
];

}
