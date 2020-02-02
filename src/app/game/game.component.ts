import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';
import { from } from 'rxjs';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private jackpots:Jackpot[];
  jackpotValue:number;
  @Input() game:Game;
  @Input() jackpot:Jackpot[];
  constructor( private apiServicec: ApiService ) { }

  ngOnInit() {
    console.log(this.jackpot)
    this.jackpot.forEach(snap =>{
      if(snap.game === this.game.id){
        this.jackpotValue = snap.amount;
      }
    });
  }
}
