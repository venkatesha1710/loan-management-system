package com.finance.loan.vo;

import lombok.Data;

@Data
public class LoanupdateRequestVO {
	private String loanNumber;
	private String loanStatus;
	private long loanTerm;
	private long loanAmount;
}
