package com.demo.trollo.service;


import com.demo.trollo.dto.BoardDto;
import com.demo.trollo.entity.Board;
import com.demo.trollo.mappers.Mapper;
import com.demo.trollo.repository.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class BoardService {

    private BoardRepository boardRepository;

    public List<BoardDto> getAll() {
        List<Board> boards = boardRepository.findAll();
        List<BoardDto> dtos = new ArrayList<>();
        for (Board b : boards) {
            dtos.add(Mapper.mapToBoardDto(b));
        }
        return dtos;
    }

    public BoardDto updateBoard(BoardDto dto) {
        Board board = Mapper.mapToBoard(dto);
        Board newBoard = boardRepository.save(board);
        return Mapper.mapToBoardDto(newBoard);
    }

    public BoardDto addBoard(String boardName) {
        Board board = new Board(null,boardName,new ArrayList<>());
        Board newBoard = boardRepository.save(board);
        return Mapper.mapToBoardDto(newBoard);
    }

    public void deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
    }


}
