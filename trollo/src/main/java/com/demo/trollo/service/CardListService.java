package com.demo.trollo.service;


import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.entity.Board;
import com.demo.trollo.entity.CardList;
import com.demo.trollo.mappers.Mapper;
import com.demo.trollo.repository.BoardRepository;
import com.demo.trollo.repository.CardListRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Optional;

@AllArgsConstructor
@Service
public class CardListService {
    private BoardRepository boardRepository;
    private CardListRepository cardListRepository;

    public BoardDto addCardList(String name, Long boardId) {

        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        if (optionalBoard.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Board not found");
        }

        Board board = optionalBoard.get();
        CardList newCardList = new CardList(null, name, board, new ArrayList<>());
        board.getCardLists().add(newCardList);

        boardRepository.save(board);
        return Mapper.mapToBoardDto(board);
    }

    public void removeCardList(Long cardListId) {
        cardListRepository.deleteById(cardListId);
    }


}