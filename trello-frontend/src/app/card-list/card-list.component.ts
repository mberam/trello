import {Component, Input, OnInit} from '@angular/core';
import { BoardService } from '../board.service';
import {CardList} from "../types";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() cardList: CardList;
  // @Input() boardId: number;

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
  }

  onDeleteCardList() {
    this.boardService.deleteCardList(this.cardList.id).subscribe(
      () => this.boardService.fetchBoards().subscribe(
        boards => this.boardService.setBoards(boards)
      )
    );
  }

}
