import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject, pipe} from "rxjs";
import { tap } from 'rxjs/operators';
import {Board, Card, CardList} from "./types";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private serverUrl = 'http://localhost:8082';
  boards: Board[] = [];

  index: number = 0;
  boardsChanged = new Subject<Board[]>();
  selectedBoardIndex = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  setBoards(boards: Board[]) {
    this.boards = boards;
    this.boardsChanged.next(this.boards.slice());
  }

  setIndex(index : number) {
    this.index = index;
    this.selectedBoardIndex.next(index);
  }

  fetchBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.serverUrl + '/trollo-api/board/');
  }

  addBoard(boardName: string): Observable<Board> {
    return this.http.post<Board>(this.serverUrl + '/trollo-api/board/add',{},{
      params: {
        name: boardName
      }
    });
 } 

  addCardList(name: string, id: number): Observable<Board> {
    return this.http.post<Board>(this.serverUrl + '/trollo-api/card-list/add', {}, {
      params: {
        id: id,
        name: name
      }
    });
  }

  addCard(name: string, listid: number) {
    return this.http.post(this.serverUrl + '/trollo-api/card/add', {}, {
      params: {
        name: name,
        listId: listid
      }
    })
  }

  deleteBoard(boardId: number) {
    const options = {
      params: {
        id: boardId,
      }
    }
    return this.http.delete(this.serverUrl + '/trollo-api/board/delete', options);
  } 

 deleteCardList(cardListId: number) {
    return this.http
      .delete(this.serverUrl + '/trollo-api/card-list/delete', { 
        params: {
          id: cardListId
        }
      });
  }

  deleteCard(cardId: number ) {
    return this.http.delete(this.serverUrl + '/trollo-api/card/delete', { params: {cardId: cardId }});
  }



}


