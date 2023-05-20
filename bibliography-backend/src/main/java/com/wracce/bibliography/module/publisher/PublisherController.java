package com.wracce.bibliography.module.publisher;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/publisher")
public class PublisherController {
    private final PublisherService publisherService;
    private final PublisherMapper mapper;

    @GetMapping
    public List<PublisherDto> getAll() {
        return mapper.toDto(publisherService.findAll());
//        return publisherService.findAll().stream().map(publisherMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public PublisherDto create(@RequestBody PublisherDto publisherDto) {
        return mapper.toDto(publisherService.create(mapper.toEntity(publisherDto)));
    }

    @PutMapping
    public PublisherDto update(@RequestBody PublisherDto publisherDto) {
        return mapper.toDto(publisherService.update(mapper.toEntity(publisherDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        publisherService.delete(id);
    }

}
