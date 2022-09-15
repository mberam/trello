package com.demo.trollo.controllers;

import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trollo-api/board/")
@AllArgsConstructor
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

}
