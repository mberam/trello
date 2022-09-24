import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @ViewChild('input') inputElement: ElementRef;
  @Input() boardId: number;

  showInput: boolean = false;
  cardListName: string = '';

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
  }

  onShowEdit() {
    this.showInput = true;
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.inputElement.nativeElement.focus();
    }, 0);
  }


  onCancel() {
    this.showInput = false;
  }

  onAddCardList() {
    this.boardService.addCardList(this.cardListName, this.boardId).subscribe(
      () => {
        return this.boardService.fetchBoards().subscribe(
          boards => this.boardService.setBoards(boards)
        );
      }
    );
    this.showInput = false;
    this.cardListName = '';
  }

}
