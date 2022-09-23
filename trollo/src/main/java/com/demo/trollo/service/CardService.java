package com.demo.trollo.service;


import com.demo.trollo.entity.Card;
import com.demo.trollo.entity.CardList;
import com.demo.trollo.repository.CardListRepository;
import com.demo.trollo.repository.CardRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@AllArgsConstructor
@Service
public class CardService {
    private CardRepository cardRepository;
    private CardListRepository cardListRepository;
    public void addCard(String name, Long cardListId) {
        Optional<CardList> optionalCardList = cardListRepository.findById(cardListId);
        if (optionalCardList.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "CardList not found");
        }

        CardList cardList = optionalCardList.get();
        Card newCard = new Card(null,cardList, name, "");
        cardList.getCards().add(newCard);

        cardListRepository.save(cardList);
    }
    public void deleteCard(Long cardId) {
        cardRepository.deleteById(cardId);
    }
}