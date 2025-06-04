import { Component } from '@angular/core';
import { MenuTilte } from "../../components/menu-tilte/menu-tilte";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";
import { MenuBar } from "../../components/menu-bar/menu-bar";

@Component({
  selector: 'app-home',
  imports: [MenuTilte, BigCard, SmallCard, MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
