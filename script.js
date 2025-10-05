function showChoice() {
      const account1 = document.querySelector('input[name="account1"]:checked')?.value || '(none)';
      const account2 = document.getElementById('account2').value;
      const msg = `You chose Account #1: ${account1} and Account #2: ${account2}.`;
      document.getElementById('choiceResult').textContent = msg;
    }