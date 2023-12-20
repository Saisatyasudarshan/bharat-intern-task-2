document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');
    const transactionItems = document.getElementById('transactionItems');
    const totalIncomeElement = document.getElementById('totalIncome');
    const totalExpenseElement = document.getElementById('totalExpense');
  
    let transactions = [];
  
    transactionForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const description = document.getElementById('description').value;
      const amount = +document.getElementById('amount').value;
      const type = document.getElementById('type').value;
  
      const transaction = {
        description,
        amount,
        type
      };
  
      transactions.unshift(transaction);
      updateTransactionsList();
      updateTotalAmounts();
      transactionForm.reset();
    });
  
    function updateTransactionsList() {
      transactionItems.innerHTML = '';
      transactions.slice(0, 5).forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${transaction.description} - ${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`;
        transactionItems.appendChild(listItem);
      });
    }
  
    function updateTotalAmounts() {
      const totalIncome = transactions.reduce((total, transaction) => {
        return transaction.type === 'income' ? total + transaction.amount : total;
      }, 0);
  
      const totalExpense = transactions.reduce((total, transaction) => {
        return transaction.type === 'expense' ? total + transaction.amount : total;
      }, 0);
  
      totalIncomeElement.textContent = totalIncome.toFixed(2);
      totalExpenseElement.textContent = totalExpense.toFixed(2);
    }
  });