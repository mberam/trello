import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardService } from '../board.service';
import {Board, Card} from "../types";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() card: Card;
  @Input() cardListId: number;
  boardId: number;
  boardIndexSubscription: Subscription;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardIndexSubscription = this.boardService.selectedBoardIndex.subscribe(
      index => {
        this.boardId = index;
      });
  }

  onDeleteCard(cardId: number) {
    this.boardService.deleteCard(cardId).subscribe(
      () => this.boardService.fetchBoards().subscribe(
        boards => this.boardService.setBoards(boards)
      )
    );
  }



  ngOnDestroy(): void {
    this.boardIndexSubscription.unsubscribe();
  }

}
