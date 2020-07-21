package com.finance.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finance.loan.model.LoanInfo;

/**
 * 
 */

@Repository
public interface LoanRepository extends JpaRepository<LoanInfo, Long> {

}
