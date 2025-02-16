document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche la redirection

        var form = this;
        var formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { "Accept": "application/json" }
        }).then(response => {
            return response.json(); // Convertit la réponse en JSON
        }).then(() => {
            form.reset(); // Réinitialise le formulaire après envoi
        }).catch(() => {
            console.error("Erreur lors de l'envoi du formulaire."); // Affiche uniquement dans la console
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    
    // Réinitialiser le formulaire lors du rafraîchissement de la page
    form.reset();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche la redirection

        var formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { "Accept": "application/json" }
        }).then(response => {
            return response.json(); // Convertit la réponse en JSON
        }).then(() => {
            form.reset(); // Réinitialise le formulaire après envoi
        }).catch(() => {
            console.error("Erreur lors de l'envoi du formulaire."); // Affiche uniquement dans la console
        });
    });
});
