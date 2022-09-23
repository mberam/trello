package com.demo.trollo.controllers;

import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trollo-api/board/")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@Log4j2
public class BoardController {
    private BoardService boardService;

    @GetMapping("/")
    public List<BoardDto> getAll() {
        return boardService.getAll();
    }

    @PostMapping("/update")
    public BoardDto update(@RequestBody BoardDto dto) {
        return boardService.updateBoard(dto);
    }

    @PostMapping("/add")
    public BoardDto addBoard(@RequestParam String name) {
        log.info("Add board : " + name);
        return boardService.addBoard(name);
    }

    @DeleteMapping("/delete")
    public void deleteBoard(@RequestParam Long id) {
        boardService.deleteBoard(id);
    }
}