package com.wracce.bibliography.module.payment;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/payment")
public class PaymentController {
    private final PaymentService paymentService;
    private final PaymentMapper mapper;

    @GetMapping
    public List<PaymentDto> getAll() {
        return mapper.toDto(paymentService.findAll());
//        return paymentService.findAll().stream().map(paymentMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public PaymentDto create(@RequestBody PaymentDto paymentDto) {
        return mapper.toDto(paymentService.create(mapper.toEntity(paymentDto)));
    }

    @PutMapping
    public PaymentDto update(@RequestBody PaymentDto paymentDto) {
        return mapper.toDto(paymentService.update(mapper.toEntity(paymentDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        paymentService.delete(id);
    }

}
