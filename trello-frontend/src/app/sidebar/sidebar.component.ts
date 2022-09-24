import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Board} from "../types";
import {BoardService} from "../board.service";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('input') inputElement: ElementRef;
  @Input() boards: Board[];
  @Input() currentIndex : number = 0;

  addBoardName: string = '';
  showInput: boolean = false;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {

  }

  onSelectBoard(index : number, boardName: string){
    this.boardService.setIndex(index);
    //this.router.navigate([boardName], {relativeTo: this.route});
  }

  onDeleteBoard(index: number) {
    let boardId= this.boards[index].id;
    this.boardService.deleteBoard(boardId).subscribe(
      () => this.boardService.fetchBoards().subscribe(
        boards =>{
          this.boardService.setIndex(0);
          this.boardService.setBoards(boards);
        }
      )
    );
  }

  onAddBoard(){
    this.boardService.addBoard(this.addBoardName).subscribe(
      () => this.boardService.fetchBoards().subscribe(
        boards =>{ 
          this.boardService.setBoards(boards);
          this.addBoardName = '';
          this.showInput = false;
          this.boardService.setIndex(boards.length-1);
        }
      )
    );
  
    //this.router.navigate([boardName], {relativeTo: this.route});
  }

  onShowInput() {
    this.showInput = true;
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.inputElement.nativeElement.focus();
    }, 0);
  }

  onCancel() {
    this.showInput = false;
  }

}
