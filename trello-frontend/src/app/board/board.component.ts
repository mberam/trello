import {Component, Input, OnInit} from '@angular/core';
import {Board} from "../types";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit(): void {
  }

}
