document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});




function showChoice() {
      const account1 = document.querySelector('input[name="account1"]:checked')?.value || '(none)';
      const account2 = document.getElementById('account2').value;
      const msg = `You chose Account #1: ${account1} and Account #2: ${account2}.`;
      document.getElementById('choiceResult').textContent = msg;
}


function addTask() {
  const input = document.getElementById('newTask');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <div class="task-btns">
      <button class="complete">✓</button>
      <button class="delete">×</button>
    </div>
  `;

  li.querySelector('.complete').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}