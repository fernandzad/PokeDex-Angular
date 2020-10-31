import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from '@components/pokemon-list/pokemon-list.component';
import { TitleComponent } from '@components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonComponent } from '@components/pokemon/pokemon.component';
import { PokeformComponent } from '@components/pokeform/pokeform.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TitleComponent,
    PokemonComponent,
    PokeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
