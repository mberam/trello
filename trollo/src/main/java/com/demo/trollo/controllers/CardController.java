package com.demo.trollo.controllers;

import com.demo.trollo.service.CardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/trollo-api/card/")
@AllArgsConstructor@CrossOrigin(origins = "http://localhost:4200/", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class CardController {

    private CardService cardService;

    @PostMapping("/add")
    public void addCard(@RequestParam String name, @RequestParam Long listId) {
        cardService.addCard(name, listId);
    }

    @DeleteMapping("/delete")
    public void deleteCard(@RequestParam Long cardId) {
        cardService.deleteCard(cardId);
    }
}