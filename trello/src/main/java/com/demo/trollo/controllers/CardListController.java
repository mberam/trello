package com.demo.trollo.controllers;

import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.service.CardListService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trollo-api/card-list/")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class CardListController {
    private CardListService cardListService;




    @PostMapping("/add")
    public BoardDto addCardList(@RequestParam String name, @RequestParam Long id) {
        return cardListService.addCardList(name, id);
    }

    @DeleteMapping("/delete")
    public void deleteCardList( @RequestParam Long id) {
        cardListService.removeCardList(id);
    }


}