import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import { StudentsComponent } from './basics/students/students.component';
import { HighlightDirective } from './highlight.directive';
import { ItemsComponent } from './basics/items/items.component';
import { NewIteamComponent } from './basics/new-iteam/new-iteam.component';
import { E2eTestComponent } from './e2e-test/e2e-test.component';
import { UserDetailsComponent } from './basics/task1/user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './newRecipe/recipes/recipes.component';
import { RecipeListComponent } from './newRecipe/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './newRecipe/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './newRecipe/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './newRecipe/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './newRecipe/shopping-list/shopping-list.component';
import { NewStudentsComponent } from './basics/new-students/new-students.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './databinding/server-element/server-element.component';
import { PCComponent } from './databinding/p-c/p-c.component';
import { ChComponent } from './databinding/p-c/ch/ch.component';
import { CPComponent } from './databinding/c-p/c-p.component';
import { ChiComponent } from './databinding/c-p/chi/chi.component';

import { PpComponent } from './databinding/pp/pp.component';
import { CaComponent } from './databinding/pp/ca/ca.component';
import { MainComponent } from './databinding/main/main.component';
import { CaaComponent } from './databinding/main/caa/caa.component';
import { NewMainComponent } from './databinding/new-main/new-main.component';
import { CaaaComponent } from './databinding/new-main/caaa/caaa.component';
import { StoreComponent } from './databinding/store/store.component';
import { StoreItemComponent } from './databinding/store/store-item/store-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    StudentsComponent,
    HighlightDirective,
    ItemsComponent,
    NewIteamComponent,
    E2eTestComponent,
    UserDetailsComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    NewStudentsComponent,
    CockpitComponent,
    ServerElementComponent,
    PCComponent,
    ChComponent,
    CPComponent,
    ChiComponent,
    PpComponent,
    CaComponent,
    MainComponent,
    CaaComponent,
    NewMainComponent,
    CaaaComponent,
    StoreComponent,
    StoreItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
