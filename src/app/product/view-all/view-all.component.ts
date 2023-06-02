
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {

  allProductArray:any
  filterProductsData:any

  constructor(private ds:DataService) { }

  ngOnInit():void{


    

    this.ds.viewAllProducts().subscribe((result:any)=>{
      this.allProductArray=result
      console.log(this.allProductArray);
      this.filterProductsData=this.allProductArray
      
    })
  }

  filterProducts(catId:any){

    this.filterProductsData=this.allProductArray.filter(
      (item:any)=>item.categoryId==catId || catId==""
    )
  }

}
