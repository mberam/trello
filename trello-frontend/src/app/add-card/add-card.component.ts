import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  @ViewChild('input') inputElement: ElementRef;
  //@Input() boardId: number;
  @Input() listId: number;

  showInput: boolean = false;
  cardName: string = '';

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

  onAddCard() {
    this.boardService.addCard(this.cardName,this.listId).subscribe(
      () => this.boardService.fetchBoards().subscribe(
        boards => this.boardService.setBoards(boards)
      )
    );
    

}

}
