document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.getElementById('whatsapp-button');

    // NÚMERO DE TELEFONE DO WHATSAPP (com código do país e DDD, sem formatação)
    const phoneNumber = '5521986560887'; // Substitua pelo seu número

    // Mensagem que o cliente enviará
    const message = "Olá! Gostaria de agendar um corte de cabelo delivery. Poderia me enviar os horários disponíveis e valores?";
    
    // Codifica a mensagem para ser usada na URL do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Cria o link completo do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${5521986560887}&text=${encodedMessage}`;

    whatsappButton.addEventListener('click', () => {
        // Redireciona o usuário para o WhatsApp
        window.location.href = whatsappLink;
    });
});