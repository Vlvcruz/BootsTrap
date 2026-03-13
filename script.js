document.addEventListener('DOMContentLoaded', function () {

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


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
                modalInstance.hide();

            
                const toastInstance = bootstrap.Toast.getOrCreateInstance(toastSucesso);
                toastInstance.show();

             
                formCurso.reset();
                formCurso.classList.remove('was-validated');
            }

            formCurso.classList.add('was-validated');
        }, false);
    }

    const spinnerContainer = document.querySelector('.spinner-border')?.parentElement;
    if (spinnerContainer) {
        setTimeout(() => {
            spinnerContainer.innerHTML = `
                <div class="card h-100 shadow-sm border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">Novo: Aula do Brunão</h5>
                        <p class="card-text small">Conteúdo carregado via script.</p>
                        <span class="badge bg-info">Novo</span>
                    </div>
                </div>`;
        }, 3000);
    }
});