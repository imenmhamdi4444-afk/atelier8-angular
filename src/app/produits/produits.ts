import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './produits.html',
})
export class Produits implements OnInit{
  produits! : Produit[];
 /* constructor() { this.produits = [
    {idProduit : 1,  nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
    {idProduit : 2,  nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
    {idProduit : 3,  nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}]; 
}*/
constructor(private produitService: ProduitService ) { 
  //this.produits = this.produitService.listeProduits();
 }
 /*ngOnInit(): void {  
  this.produitService.listeProduits().subscribe(prods => { 
    console.log(prods); this.produits = prods; 
  });
  }*/
  /*supprimerProduit(p: Produit) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
      this.produitService.supprimerProduit(p); 
    }*/

  ngOnInit(): void {
    this.chargerProduits();
  }

  
  chargerProduits(){ 
    this.produitService.listeProduit().subscribe(prods => { 
    console.log(prods); this.produits = prods; }); }
  supprimerProduit(p: Produit) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf && p.idProduit !== undefined) 
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => { 
      console.log("produit supprimé"); 
      this.chargerProduits();
      
    }); }

}