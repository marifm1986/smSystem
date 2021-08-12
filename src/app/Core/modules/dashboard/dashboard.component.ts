import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { DataPassService } from '../../services/data-pass.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMorInforToggle = false;


  todaysSale = 125530;
  totalSale = 12000225;
  todaysPurchase = 823530;
  totalPurchase = 53550225;

  constructor(private DataPassService: DataPassService, private ProductService: ProductService) { }
  totalCompanies: any;
  reorders: any;
  intervalId: any;
  time = new Date();
  selectedSupplierName: string | undefined;;

  products: IProduct[] = [];

  activeOrders: any[] = [{
    id: 1,
    orderNumber: "09-903-0846",
    customer: "Alisha Clute",
    date: "2/17/2021",
    status: false
  }, {
    id: 2,
    orderNumber: "43-579-3915",
    customer: "Emmy Christescu",
    date: "9/5/2020",
    status: false
  }, {
    id: 3,
    orderNumber: "95-810-4438",
    customer: "Cosetta Paulack",
    date: "4/18/2021",
    status: true
  }, {
    id: 4,
    orderNumber: "87-571-8992",
    customer: "Jarret Haugen",
    date: "4/22/2021",
    status: false
  }, {
    id: 5,
    orderNumber: "87-661-8770",
    customer: "Julee Innot",
    date: "5/1/2021",
    status: false
  }, {
    id: 6,
    orderNumber: "40-849-7355",
    customer: "Bentlee Hennington",
    date: "9/14/2020",
    status: false
  }, {
    id: 7,
    orderNumber: "53-298-3693",
    customer: "Bartholomeo McDunlevy",
    date: "6/26/2021",
    status: false
  }, {
    id: 8,
    orderNumber: "46-090-8323",
    customer: "Alain Michal",
    date: "9/23/2020",
    status: true
  }, {
    id: 9,
    orderNumber: "71-496-7354",
    customer: "Haily Trulock",
    date: "8/22/2020",
    status: true
  }, {
    id: 10,
    orderNumber: "68-125-3610",
    customer: "Carmine Chavez",
    date: "9/5/2020",
    status: true
  }, {
    id: 11,
    orderNumber: "56-743-4205",
    customer: "Bevin Frisel",
    date: "2/8/2021",
    status: false
  }, {
    id: 12,
    orderNumber: "25-529-0483",
    customer: "Sophie Ferrarin",
    date: "1/5/2021",
    status: true
  }, {
    id: 13,
    orderNumber: "73-647-1452",
    customer: "Vincent Royste",
    date: "10/3/2020",
    status: false
  }, {
    id: 14,
    orderNumber: "35-544-6333",
    customer: "Lorry Duns",
    date: "9/13/2020",
    status: true
  }, {
    id: 15,
    orderNumber: "90-528-9562",
    customer: "Ruggiero Baum",
    date: "9/29/2020",
    status: true
  }, {
    id: 16,
    orderNumber: "93-555-1699",
    customer: "Ozzie Ruggiero",
    date: "9/22/2020",
    status: true
  }, {
    id: 17,
    orderNumber: "61-112-5098",
    customer: "Jarib Domenc",
    date: "1/5/2021",
    status: false
  }, {
    id: 18,
    orderNumber: "41-507-9859",
    customer: "Nelli Elcott",
    date: "6/16/2021",
    status: true
  }, {
    id: 19,
    orderNumber: "54-126-3981",
    customer: "Pier Clampe",
    date: "11/18/2020",
    status: false
  }, {
    id: 20,
    orderNumber: "04-438-4273",
    customer: "Cary Betham",
    date: "3/31/2021",
    status: true
  }, {
    id: 21,
    orderNumber: "35-755-5680",
    customer: "Zsa zsa Provost",
    date: "12/22/2020",
    status: true
  }, {
    id: 22,
    orderNumber: "13-085-8312",
    customer: "Matty Kaaskooper",
    date: "9/21/2020",
    status: false
  }, {
    id: 23,
    orderNumber: "18-033-6883",
    customer: "Lela Bickerdike",
    date: "6/18/2021",
    status: true
  }, {
    id: 24,
    orderNumber: "78-792-3638",
    customer: "Tommie Gwalter",
    date: "6/29/2021",
    status: true
  }, {
    id: 25,
    orderNumber: "66-713-4179",
    customer: "Nealson Womack",
    date: "4/28/2021",
    status: false
  }, {
    id: 26,
    orderNumber: "74-236-2317",
    customer: "Steven Rosenfeld",
    date: "1/15/2021",
    status: true
  }, {
    id: 27,
    orderNumber: "25-190-7799",
    customer: "Tandie Oxbe",
    date: "7/27/2020",
    status: true
  }, {
    id: 28,
    orderNumber: "61-884-1851",
    customer: "Alard Sparhawk",
    date: "4/1/2021",
    status: false
  }, {
    id: 29,
    orderNumber: "20-957-9642",
    customer: "Claudio Dymock",
    date: "6/18/2021",
    status: false
  }, {
    id: 30,
    orderNumber: "62-054-0708",
    customer: "Nicolle Lendon",
    date: "8/21/2020",
    status: false
  }, {
    id: 31,
    orderNumber: "50-786-1199",
    customer: "Thaine Volkers",
    date: "11/30/2020",
    status: true
  }, {
    id: 32,
    orderNumber: "59-010-8667",
    customer: "Milzie Prine",
    date: "3/14/2021",
    status: false
  }, {
    id: 33,
    orderNumber: "77-236-1627",
    customer: "Windham Rowlands",
    date: "8/27/2020",
    status: false
  }, {
    id: 34,
    orderNumber: "02-244-5963",
    customer: "Wyn Goldthorp",
    date: "11/27/2020",
    status: true
  }, {
    id: 35,
    orderNumber: "33-818-8556",
    customer: "Daron Vivyan",
    date: "11/23/2020",
    status: false
  }, {
    id: 36,
    orderNumber: "83-879-5956",
    customer: "Roseann Hampstead",
    date: "4/25/2021",
    status: true
  }, {
    id: 37,
    orderNumber: "28-506-7474",
    customer: "Gillan Stringer",
    date: "2/15/2021",
    status: false
  }, {
    id: 38,
    orderNumber: "61-925-3253",
    customer: "Kandace Wilfing",
    date: "10/15/2020",
    status: false
  }, {
    id: 39,
    orderNumber: "11-616-9514",
    customer: "Arvin Kubicki",
    date: "10/23/2020",
    status: true
  }, {
    id: 40,
    orderNumber: "25-389-9045",
    customer: "Corey Losano",
    date: "7/2/2021",
    status: true
  }, {
    id: 41,
    orderNumber: "72-216-9672",
    customer: "Mirabel Boyen",
    date: "8/4/2020",
    status: true
  }, {
    id: 42,
    orderNumber: "86-915-5581",
    customer: "Eulalie Pinnell",
    date: "12/4/2020",
    status: false
  }, {
    id: 43,
    orderNumber: "40-171-4565",
    customer: "Hailee Crummey",
    date: "6/20/2021",
    status: false
  }, {
    id: 44,
    orderNumber: "20-067-4714",
    customer: "Wallie Moulster",
    date: "10/13/2020",
    status: false
  }, {
    id: 45,
    orderNumber: "65-815-4903",
    customer: "Bendick Ridgedell",
    date: "12/29/2020",
    status: false
  }, {
    id: 46,
    orderNumber: "03-222-9251",
    customer: "Fionnula Traske",
    date: "5/7/2021",
    status: true
  }, {
    id: 47,
    orderNumber: "59-778-1763",
    customer: "Padraig Wormald",
    date: "11/24/2020",
    status: false
  }, {
    id: 48,
    orderNumber: "16-852-1690",
    customer: "Josi O' Meara",
    date: "12/11/2020",
    status: true
  }, {
    id: 49,
    orderNumber: "30-127-5869",
    customer: "Allis Cullip",
    date: "12/7/2020",
    status: true
  }, {
    id: 50,
    orderNumber: "90-813-9012",
    customer: "Cassius Speers",
    date: "2/22/2021",
    status: true
  }, {
    id: 51,
    orderNumber: "06-713-4080",
    customer: "Damita Waudby",
    date: "8/28/2020",
    status: false
  }, {
    id: 52,
    orderNumber: "55-049-8292",
    customer: "Robinson Janusik",
    date: "10/3/2020",
    status: true
  }, {
    id: 53,
    orderNumber: "59-089-6501",
    customer: "Cornall MacKeever",
    date: "10/7/2020",
    status: true
  }, {
    id: 54,
    orderNumber: "30-309-1179",
    customer: "Diane Disbrey",
    date: "12/12/2020",
    status: true
  }, {
    id: 55,
    orderNumber: "97-371-5191",
    customer: "Dacey Elsmere",
    date: "11/16/2020",
    status: true
  }, {
    id: 56,
    orderNumber: "42-044-7875",
    customer: "Lauraine Cobden",
    date: "9/19/2020",
    status: false
  }, {
    id: 57,
    orderNumber: "42-359-7135",
    customer: "Mellie Lalevee",
    date: "3/30/2021",
    status: true
  }, {
    id: 58,
    orderNumber: "67-843-7040",
    customer: "Stanly Zanitti",
    date: "3/22/2021",
    status: false
  }, {
    id: 59,
    orderNumber: "10-035-8727",
    customer: "Dena Westphalen",
    date: "11/8/2020",
    status: false
  }, {
    id: 60,
    orderNumber: "16-775-3312",
    customer: "Gilberte Meysham",
    date: "1/31/2021",
    status: true
  }, {
    id: 61,
    orderNumber: "10-201-2021",
    customer: "Isabelle Ayscough",
    date: "10/10/2020",
    status: false
  }, {
    id: 62,
    orderNumber: "98-133-2930",
    customer: "Colet Casetta",
    date: "2/28/2021",
    status: true
  }, {
    id: 63,
    orderNumber: "58-394-6968",
    customer: "Major McKerley",
    date: "7/11/2021",
    status: true
  }, {
    id: 64,
    orderNumber: "83-294-8247",
    customer: "Jamal Tregido",
    date: "12/19/2020",
    status: false
  }, {
    id: 65,
    orderNumber: "72-319-9154",
    customer: "Garold Jan",
    date: "11/20/2020",
    status: true
  }, {
    id: 66,
    orderNumber: "84-102-5177",
    customer: "Constantine Gianolo",
    date: "1/25/2021",
    status: true
  }, {
    id: 67,
    orderNumber: "42-102-5538",
    customer: "Fraser Marians",
    date: "6/28/2021",
    status: true
  }, {
    id: 68,
    orderNumber: "42-658-4449",
    customer: "Oates Batalini",
    date: "2/12/2021",
    status: false
  }, {
    id: 69,
    orderNumber: "63-319-4550",
    customer: "Albertine Watson",
    date: "6/9/2021",
    status: false
  }, {
    id: 70,
    orderNumber: "16-072-6063",
    customer: "Maryellen Bergin",
    date: "6/3/2021",
    status: false
  }, {
    id: 71,
    orderNumber: "80-062-0014",
    customer: "Llywellyn Stoppard",
    date: "5/23/2021",
    status: true
  }, {
    id: 72,
    orderNumber: "05-938-1858",
    customer: "Buffy Sangwine",
    date: "7/3/2021",
    status: true
  }, {
    id: 73,
    orderNumber: "55-860-3570",
    customer: "Judith Whithorn",
    date: "8/9/2020",
    status: true
  }, {
    id: 74,
    orderNumber: "25-825-6928",
    customer: "Royal Pirouet",
    date: "4/17/2021",
    status: false
  }, {
    id: 75,
    orderNumber: "99-422-2673",
    customer: "Tristam Gath",
    date: "4/30/2021",
    status: false
  }, {
    id: 76,
    orderNumber: "64-796-5485",
    customer: "Albina Von Salzberg",
    date: "5/23/2021",
    status: false
  }, {
    id: 77,
    orderNumber: "60-569-0556",
    customer: "Rowney Lording",
    date: "8/9/2020",
    status: true
  }, {
    id: 78,
    orderNumber: "28-336-7394",
    customer: "Ardene Lebarree",
    date: "8/20/2020",
    status: false
  }, {
    id: 79,
    orderNumber: "63-568-4897",
    customer: "Michale Curtayne",
    date: "10/5/2020",
    status: true
  }, {
    id: 80,
    orderNumber: "01-495-9642",
    customer: "Ema Calvard",
    date: "9/9/2020",
    status: true
  }, {
    id: 81,
    orderNumber: "40-847-8829",
    customer: "Cliff Croxall",
    date: "1/18/2021",
    status: true
  }, {
    id: 82,
    orderNumber: "08-203-2982",
    customer: "Aida Giacomuzzi",
    date: "2/4/2021",
    status: false
  }, {
    id: 83,
    orderNumber: "06-398-9144",
    customer: "Anne-marie Hagergham",
    date: "2/11/2021",
    status: false
  }, {
    id: 84,
    orderNumber: "62-450-6797",
    customer: "Rhona Whitland",
    date: "9/3/2020",
    status: false
  }, {
    id: 85,
    orderNumber: "48-416-8795",
    customer: "Megen Dugan",
    date: "3/11/2021",
    status: false
  }, {
    id: 86,
    orderNumber: "60-160-3115",
    customer: "Aldridge Rawling",
    date: "7/29/2020",
    status: true
  }, {
    id: 87,
    orderNumber: "38-694-1085",
    customer: "Skipton Trainor",
    date: "5/10/2021",
    status: false
  }, {
    id: 88,
    orderNumber: "67-794-2402",
    customer: "Salome Gaydon",
    date: "8/28/2020",
    status: false
  }, {
    id: 89,
    orderNumber: "40-915-1961",
    customer: "Mabel Voyce",
    date: "3/9/2021",
    status: true
  }, {
    id: 90,
    orderNumber: "03-760-6289",
    customer: "Tremayne MacAdie",
    date: "6/9/2021",
    status: true
  }, {
    id: 91,
    orderNumber: "04-305-1458",
    customer: "Tamera Episcopi",
    date: "10/11/2020",
    status: false
  }, {
    id: 92,
    orderNumber: "64-074-5580",
    customer: "Brendon Simkovich",
    date: "12/19/2020",
    status: false
  }, {
    id: 93,
    orderNumber: "11-568-6932",
    customer: "Martelle Belvin",
    date: "4/7/2021",
    status: false
  }, {
    id: 94,
    orderNumber: "86-846-6494",
    customer: "Matthaeus Rapley",
    date: "5/26/2021",
    status: true
  }, {
    id: 95,
    orderNumber: "46-281-4031",
    customer: "Dorelia Maginn",
    date: "12/16/2020",
    status: true
  }, {
    id: 96,
    orderNumber: "42-662-4880",
    customer: "Janet Mansion",
    date: "7/31/2020",
    status: true
  }, {
    id: 97,
    orderNumber: "95-174-7549",
    customer: "Conrade Whiteson",
    date: "1/16/2021",
    status: false
  }, {
    id: 98,
    orderNumber: "26-874-7214",
    customer: "Ginny Pharaoh",
    date: "9/14/2020",
    status: false
  }, {
    id: 99,
    orderNumber: "67-612-8073",
    customer: "Staci Esposita",
    date: "7/15/2021",
    status: true
  }, {
    id: 100,
    orderNumber: "72-945-7304",
    customer: "Carlyn Deener",
    date: "1/14/2021",
    status: false
  }];

  ngOnInit() {
    this.getSharedData();

    this.getProdList();

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  getSharedData(){
    this.DataPassService.showSupplierName.subscribe(message =>{
      console.log(message);
    
    });
  }

  getProdList(){
    this.ProductService.getAllProducts().subscribe(data  => {
        this.products = data;
    })
}

  toggleMoreInfo() {
    this.isMorInforToggle = !this.isMorInforToggle;
  }


}
