package com.finance.loan.controller;

import com.finance.loan.exception.ResourceNotFoundException;
import com.finance.loan.model.LoanInfo;
import com.finance.loan.repository.LoanRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 
 */
@RestController
@RequestMapping("/api")
public class LoanController {

    @Autowired
    LoanRepository loanRepository;

    @GetMapping("/loans")
    public List<LoanInfo> getAllLoans() {
        return loanRepository.findAll();
    }

    @PostMapping("/loans")
    public LoanInfo createLoan(@Valid @RequestBody LoanInfo loan) {
        return loanRepository.save(loan);
    }

    @GetMapping("/loans/{loanNumber}")
    public LoanInfo getLoanByNumber(@PathVariable(value = "loanNumber") Long loanNumber) {
        return loanRepository.findById(loanNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Loan", "loannumber", loanNumber));
    }

    @PutMapping("/loans/{loanNumber}")
    public LoanInfo updateLoan(@PathVariable(value = "loanNumber") Long loanNumber,
                                           @Valid @RequestBody LoanInfo loanDetails) {

    	LoanInfo loan = loanRepository.findById(loanNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Loan", "updatedLoan", loanNumber));

        //TODO set the values


        LoanInfo updatedLoan = loanRepository.save(loan);
        return updatedLoan;
    }

    @DeleteMapping("/loans/{loanNumber}")
    public ResponseEntity<?> deleteLoan(@PathVariable(value = "loanNumber") Long loanNumber) {
        LoanInfo loan = loanRepository.findById(loanNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Loan", "loannumber", loanNumber));

        loanRepository.delete(loan);

        return ResponseEntity.ok().build();
    }
}
