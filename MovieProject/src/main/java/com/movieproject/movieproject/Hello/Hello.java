package com.movieproject.movieproject.Hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messages")
public class Hello {
    @GetMapping("/hello")
    public String hello() {
        return "Hello Akinawoa";
    }
}
