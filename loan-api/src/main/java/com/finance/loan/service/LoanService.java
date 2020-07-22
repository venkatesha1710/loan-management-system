package com.finance.loan.service;

import java.text.ParseException;
import java.util.List;
import org.springframework.stereotype.Service;

import com.finance.loan.model.LoanInfo;
import com.finance.loan.vo.LoanInfoRequestVO;
//import com.finance.loan.vo.LoanSearchRequestVO;
import com.finance.loan.vo.LoanupdateRequestVO;

@Service
public interface LoanService {

	public List<LoanInfo> getloans();
	public LoanInfo generateLoan(LoanInfoRequestVO loan) throws ParseException;
	//public LoanInfo getLoanByAccount(LoanSearchRequestVO searchLloan);
	public LoanInfo modifyLoan(LoanupdateRequestVO loanDetails);
}
