document.addEventListener("DOMContentLoaded", function() {
    // Menu Mobile
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Máscara de CPF e Telefone
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('phone');

    cpfInput.addEventListener('input', function() {
        let cpf = cpfInput.value.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = cpf;
    });

    phoneInput.addEventListener('input', function() {
        let phone = phoneInput.value.replace(/\D/g, "");
        phone = phone.replace(/(\d{2})(\d)/, "($1) $2");
        phone = phone.replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
        phoneInput.value = phone;
    });

    // Exibir número de telefone ao clicar
    const phoneButtons = document.querySelectorAll(".phone-btn");

    phoneButtons.forEach(button => {
        button.addEventListener("click", function() {
            const phoneNumber = this.nextElementSibling;
            phoneNumber.style.display = "inline";
        });
    });

    // Função de cálculo
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', function() {
        const valueA = parseFloat(document.getElementById('valueA').value);
        const valueB = parseFloat(document.getElementById('valueB').value);
        const valueC = parseFloat(document.getElementById('valueC').value);
        const result = (valueB * valueC) / valueA;

        document.getElementById('result').textContent = `Resultado: ${result}`;
    });

    // Modal de imagem
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = "foto.jpg"; // Exemplo: Substitua com o caminho correto da imagem
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Download da imagem usando html2canvas
    const downloadImageBtn = document.getElementById("downloadImageBtn");
    downloadImageBtn.addEventListener("click", function() {
        html2canvas(document.querySelector(".image-container")).then(canvas => {
            const link = document.createElement("a");
            link.download = "imagem.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });
});


//ver telefone
function toggleTelefone(button) {
    const telefone = button.nextElementSibling;
    telefone.style.display = telefone.style.display === 'none' || telefone.style.display === '' ? 'block' : 'none';
}