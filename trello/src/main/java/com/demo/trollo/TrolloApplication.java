package com.demo.trollo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.demo.trollo")
public class TrolloApplication {
	public static void main(String[] args) {
		SpringApplication.run(TrolloApplication.class, args);
	}
}
