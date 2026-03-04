const btn = document.getElementById('btn');
const form = document.getElementById('login-form');
const userInp = document.getElementById('username');
const passInp = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

function verifica() {
  const preenchidos = userInp.value.trim().length >= 1 && passInp.value.trim().length >= 6;
  btn.disabled = !preenchidos;
  btn.classList.toggle('ativo', preenchidos);
  toggleBtn.style.display = passInp.value.length > 0 ? 'inline' : 'none';
}

toggleBtn.addEventListener('click', () => {
  const isPassword = passInp.type === 'password';
  passInp.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? 'Ocultar' : 'Mostrar';
});

userInp.addEventListener('input', verifica);
passInp.addEventListener('input', verifica);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Impede clique duplo ou se o botao estiver inativo.
  if (btn.disabled || btn.classList.contains('loading')) return;

  // Ativa estado de carregamento.
  btn.classList.add('loading');
  btn.disabled = true;

  // Simula uma espera de rede de 2 segundos.
  setTimeout(() => {
    btn.classList.remove('loading');
    verifica();
    alert(`Login simulado com sucesso!\nUsuario: ${userInp.value}`);
  }, 2000);
});
