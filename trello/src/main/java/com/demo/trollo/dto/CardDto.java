package com.demo.trollo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CardDto {
    private Long id;
    private String name;
    private String description;
}
