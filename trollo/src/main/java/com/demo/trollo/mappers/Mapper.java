package com.demo.trollo.mappers;

import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.dto.CardDto;
import com.demo.trollo.dto.CardListDto;
import com.demo.trollo.entity.Board;
import com.demo.trollo.entity.Card;
import com.demo.trollo.entity.CardList;

import java.util.ArrayList;
import java.util.List;

public class Mapper {


    public static Board mapToBoard(BoardDto dto) {

        List<CardList> lists = new ArrayList<>();
        List<CardListDto> list = dto.getList();
        for (CardListDto ldto : list) {
            CardList newList = new CardList();
            newList.setName(ldto.getName());
            newList.setId(ldto.getId());
            List<Card> cards = new ArrayList<>();

            for (CardDto cdto : ldto.getCards()) {
                cards.add(new Card(cdto.getId(), newList, cdto.getName(), cdto.getDescription()));
            }
            newList.setCards(cards);

            lists.add(newList);
        }

        return new Board(dto.getId(), dto.getName(), lists);

    }

    public static BoardDto mapToBoardDto(Board board) {

        List<CardList> cardList = board.getCardLists();
        List<CardListDto> lists = new ArrayList<>();

        for (CardList cl : cardList) {
            CardListDto newDtoList = new CardListDto();
            newDtoList.setName(cl.getName());
            newDtoList.setId(cl.getId());
            List<CardDto> cardDtos = new ArrayList<>();
            for (Card c : cl.getCards()) {
                cardDtos.add(new CardDto(c.getId(), c.getName(), c.getDescription()));
            }
            newDtoList.setCards(cardDtos);
            lists.add(newDtoList);
        }

        return new BoardDto(board.getId(), board.getName(), lists);

    }

}
