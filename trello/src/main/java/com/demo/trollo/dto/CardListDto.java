package com.demo.trollo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardListDto {
    private Long id;
    private String name;
    private List<CardDto> cards;
}
