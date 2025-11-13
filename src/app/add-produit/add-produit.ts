import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  message! : string;
  router: any;
  constructor(private produitService: ProduitService){}

  ngOnInit(): void {
    
  }
 addProduit(){ 
    this.produitService.ajouterProduit(this.newProduit) 
    .subscribe(prod => { 
      console.log(prod); 
      this.router.navigate(['produits']); 
      });  
   }


}
