package com.finance.loan.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
    public LoanInfo createLoan(@Valid @RequestBody LoanInfoRequestVO loan) throws ParseException {
        return loanservice.generateLoan(loan);
    }

//    @PostMapping("/searchloan")
//    public LoanInfo getLoanByNumber(@Valid @RequestBody LoanSearchRequestVO searchLoan) {
//        return loanservice.getLoanByAccount(searchLoan);
//    }

    @PostMapping("/updateloan")
    public LoanInfo updateLoan(@Valid @RequestBody LoanupdateRequestVO loanDetails) {
        return loanservice.modifyLoan(loanDetails);
    }

}
