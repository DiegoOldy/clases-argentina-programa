import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { title } from 'process';
import { Item } from '../../models/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

items:Item[]=[];
total:number=0;
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        id:0,
        title:"manzana ",
        precio:10.5,
        cantidad:4,
        completado:false
      },
      {
        id:1,
        title:"pan ",
        precio:100.5,
        cantidad:8,
        completado:true,
      },
      {
        id:2,
        title:"chamarra ",
        precio:300,
        cantidad:1,
        completado:false,
      },
    ];
  //this.getTotal();
  }

   deleteItem(item:Item){
     this.items=this.items.filter(x=>x.id !=item.id);
   }
 
   /*getTotal()
   {
    this.total =this.items
    //.filter(Item => !Item.completado)
   // map(Item => items.cantidad *items.precio)
    //.reduce((acc: any,item: any)=>acc+=item,0);
    }*/
  }
