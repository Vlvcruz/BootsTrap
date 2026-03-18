const n1 = parseFloat(prompt("Digite o primeiro número:"));
const n2 = parseFloat(prompt("Digite o segundo número:"));
 
// Realizar operações
const soma = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n2 !== 0 ? (n1 / n2).toFixed(2) : "Erro: Divisão por zero";
 
// Mostrar no Console
console.log(`--- Resultados ---`);
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${sub}`);
console.log(`Multiplicação: ${mult}`);
console.log(`Divisão: ${div}`);
 
// Mostrar no document.write (Isso aparece no topo da página)
document.write(`
<div style="background: #343a40; color: white; padding: 15px; text-align: center; font-family: sans-serif;">
<strong>Operações Rápidas:</strong> 
        Soma: ${soma} | Subtração: ${sub} | Multiplicação: ${mult} | Divisão: ${div}
</div>
`);
 
// --- PARTE 2: LÓGICA DO PAINEL ---
 
document.addEventListener('DOMContentLoaded', function () {
 
    // Alert de Boas-vindas (Nova Regra)
    const btnWelcome = document.getElementById('btnWelcome');
    if (btnWelcome) {
        btnWelcome.addEventListener('click', () => {
            alert("Seja bem-vindo ao EduFlow! Esperamos que aproveite a experiência.");
        });
    }
 
    // Inicialização de Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
 
    // Validação de Formulário e Toast
    const formCurso = document.getElementById('formCurso');
    const toastSucesso = document.getElementById('liveToast');
 
    if (formCurso) {
        formCurso.addEventListener('submit', function (event) {
            if (!formCurso.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
 
                const modalElement = document.getElementById('modalAddCurso');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if(modalInstance) modalInstance.hide();
 
                const toastInstance = bootstrap.Toast.getOrCreateInstance(toastSucesso);
                toastInstance.show();
 
                formCurso.reset();
                formCurso.classList.remove('was-validated');
            }
            formCurso.classList.add('was-validated');
        }, false);
    }
 
    // Simulação de carregamento do Spinner
    const spinnerContainer = document.querySelector('.spinner-border')?.parentElement;
    if (spinnerContainer) {
        setTimeout(() => {
            spinnerContainer.innerHTML = `
<div class="card h-100 shadow-sm border-info w-100">
<div class="card-body">
<h5 class="card-title text-info">Novo: Aula do Brunão</h5>
<p class="card-text small">Conteúdo carregado via script.</p>
<span class="badge bg-info">Novo</span>
</div>
</div>`;
        }, 3000);
    }
});
