package com.finance.loan.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finance.loan.model.LoanInfo;
import com.finance.loan.service.LoanService;
import com.finance.loan.vo.LoanInfoRequestVO;
//import com.finance.loan.vo.LoanSearchRequestVO;
import com.finance.loan.vo.LoanupdateRequestVO;
import com.finance.loan.vo.MessageResponseVO;

/**
 * 
 */
@RestController
@RequestMapping("/api")
public class LoanController {

	@Autowired
	LoanService loanservice;
    
    

    @GetMapping("/loanslist")
    public List<LoanInfo> getAllLoans() {
        return loanservice.getloans();
    }

    @PostMapping("/addloan")
    public ResponseEntity<?> createLoan(@Valid @RequestBody LoanInfoRequestVO loan) throws ParseException {
        loanservice.generateLoan(loan);
        return ResponseEntity.ok(new MessageResponseVO("Loan created successfully!"));
    }

    @PostMapping("/updateloan")
    public ResponseEntity<?> updateLoan(@Valid @RequestBody LoanupdateRequestVO loanDetails) {
        loanservice.modifyLoan(loanDetails);
        return ResponseEntity.ok(new MessageResponseVO("Loan updated successfully!"));
    }

}
