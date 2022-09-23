import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Board} from "./types";
import {BoardService} from "./board.service";
import {Subscription} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  boardSubscription: Subscription;
  indexSubscription: Subscription;

  index: number = 0;

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.boardSubscription = this.boardService.boardsChanged
      .subscribe(
        (boards: Board[]) => {
          this.boards = boards;
        }
      );

    this.indexSubscription = this.boardService.selectedBoardIndex
      .subscribe(
        (index: number) => {
          this.index = index;
        }
      );

    this.boardService.fetchBoards()
      .subscribe(boards => {
        console.log(boards);
        this.boardService.setBoards(boards);
      });
  }

  ngOnDestroy() {
    this.boardSubscription.unsubscribe();
    this.indexSubscription.unsubscribe();
  }


  
}
