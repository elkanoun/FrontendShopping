import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Domain } from '../models/Domain.model';
import { Category } from '../models/Category.model';
import { SubCategory } from '../models/SubCategory.model';
import { DomainGlobModel } from '../models/DomainGlob.model';
import { CategoryGlobModel } from '../models/CategoryGlob.model';
import { SubCategoryGlobModel } from '../models/SubCategoryGlob.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  
  private domainsMenu:Domain[];
  private categoriesMenu:Array<Category[]>;
  private categoriesMenuTmp:Category[];
  private subCategoriesMenu:Array<SubCategory[]>;
  private subCategoriesMenuTmp:SubCategory[];
  private domain:Domain;
  private domainGlob:DomainGlobModel;
  private categories;
  private category:Category;
  private categoryGlob:CategoryGlobModel;
  private subCategories;
  private subCategory:SubCategory;
  private subCategoryGlob:SubCategoryGlobModel;

  private domGlob: DomainGlobModel[];
  private catGlob: CategoryGlobModel[];
  private sCatGlob: SubCategoryGlobModel[];
  menu: DomainGlobModel[];
  private domains;

  constructor(private globalService:GlobalService) { 
    this.domainsMenu = [];
    this.categoriesMenu = [];
    this.categoriesMenuTmp = [];
    this.subCategoriesMenu = [];
    this.subCategoriesMenuTmp = [];
    this.domGlob = [];
    this.catGlob = [];
    this.sCatGlob = [];
  }

  getMenu() {
    this.globalService.getRessource("http://localhost:8080/domains")
      .subscribe(data => {
        this.domains = data;
        for (var domain of this.domains._embedded.domains) {
          let id = domain.id;
          let name = domain.name;
          let principal = domain.principal
          this.domain = new Domain(id, name, principal);
          this.domainsMenu.push(this.domain);
        }
        for (let domain of this.domains._embedded.domains) {
          this.globalService.getRessource(domain._links.categories.href)
            .subscribe(data => {
              this.categories = data;
              for (let category of this.categories._embedded.categories) {
                let id = category.id;
                let name = category.name;
                let domainId = domain.id;
                this.category = new Category(id, name, domainId);
                this.categoriesMenuTmp.push(this.category);
              }
              for (let category of this.categories._embedded.categories) {
                this.globalService.getRessource(category._links.subCategories.href)
                  .subscribe(data => {
                    this.subCategories = data;
                    for (let subcategory of this.subCategories._embedded.subCategories) {
                      let id = subcategory.id;
                      let name = subcategory.name;
                      let categoryId = category.id;
                      this.subCategory = new SubCategory(id, name, categoryId);
                      this.subCategoriesMenuTmp.push(this.subCategory);
                    }
                    this.subCategoriesMenu.push(this.subCategoriesMenuTmp)
                    this.subCategoriesMenuTmp = []
                  });
              }
              this.categoriesMenu.push(this.categoriesMenuTmp);
              this.categoriesMenuTmp = [];
            });
        }
        setTimeout(()=>{
          this.getMenuTable();
        },6000)
      });
  }

  getMenuTable(){
    this.domGlob = [];
    for (let domain of this.domainsMenu) {
      for (let i = 0, catLen = this.categoriesMenu.length; i < catLen; i++) {
        for(let j = 0, objCatLen = this.categoriesMenu[i].length; j < objCatLen; j++){
          for (let k = 0, subCatLen = this.subCategoriesMenu.length; k < subCatLen; k++) {
            for (let z = 0 , objSubCatLen = this.subCategoriesMenu[k].length; z < objSubCatLen; z++){
              if (this.subCategoriesMenu[k][z].categoryId == this.categoriesMenu[i][j].id) {
                let id = this.subCategoriesMenu[k][z].id;
                let name = this.subCategoriesMenu[k][z].name;
                this.subCategoryGlob = new SubCategoryGlobModel(id, name);
                this.sCatGlob.push(this.subCategoryGlob);
              }
            }
          }
          if (this.categoriesMenu[i][j].domainId == domain.id) {
            let id = this.categoriesMenu[i][j].id;
            let name = this.categoriesMenu[i][j].name;
            this.categoryGlob = new CategoryGlobModel(id, name, this.sCatGlob);
            this.catGlob.push(this.categoryGlob);
          }
          this.sCatGlob = [];
        }
      }
      let id = domain.id;
      let name = domain.name;
      let principal = domain.principal
      this.domainGlob = new DomainGlobModel(id, name, principal,this.catGlob);
      this.domGlob.push(this.domainGlob);
      this.catGlob = [];
    }
    this.globalService.menuGlobal.emit(this.domGlob);
    this.menu = this.domGlob;
    this.globalService.menu = this.domGlob;
    // console.log(this.menu)
    localStorage.setItem('Menu',JSON.stringify(this.menu));
  }
}
