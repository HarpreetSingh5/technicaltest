import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {  
  private games:Game[];
  private jackpots:Jackpot[];

  private newgame;
  
  constructor( private apiServicec: ApiService) {
   }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      this.games = data
      console.log(this.games);
      this.newgame = this.games.filter(cat=>{
        return cat.categories.includes("new");
      })
      console.log(this.newgame)
    });

    this.apiServicec.getJackpot().subscribe((jackpot)=>{
      this.jackpots = jackpot;
    });
  }
}
