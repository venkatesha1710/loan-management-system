package com.finance.loan.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.finance.loan.model.LoanInfo;
import com.finance.loan.repository.LoanRepository;
import com.finance.loan.service.LoanService;
import com.finance.loan.vo.LoanInfoRequestVO;
//import com.finance.loan.vo.LoanSearchRequestVO;
import com.finance.loan.vo.LoanupdateRequestVO;

public class LoanServiceImpl implements LoanService {
	@Autowired
    LoanRepository loanRepository;

	@Override
	public List<LoanInfo> getloans() {
		return loanRepository.findAll();
	}

	@Override
	public LoanInfo generateLoan(LoanInfoRequestVO loan) throws ParseException {
		LoanInfo l = new LoanInfo();
		l.setFirstName(loan.getFirstName());
		l.setLastName(loan.getLastName());
		l.setLoanAmount(loan.getLoanAmount());
		Date lDate =new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss").parse(loan.getLoanDate());  
		l.setLoanDate(lDate);
		l.setLoanStatus(loan.getLoanStatus());
		l.setLoanTerm(loan.getLoanTerm());
		return loanRepository.save(l);
	}

//	@Override
//	public LoanInfo getLoanByAccount(LoanSearchRequestVO searchLloan) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public LoanInfo modifyLoan(LoanupdateRequestVO loanDetails) {
		// TODO Auto-generated method stub
		return null;
	}

}
