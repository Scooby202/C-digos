function Validação () {

const form = document.querySelector("#form");
const nameIpunt = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const CPFInput = document.querySelector("#CPF");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#passwordCheck");
const ContinuaInfo = document.querySelector("#Continua");
const ContinuaInfo2 = document.querySelector("#Continua2");
const ContinuaInfo3 = document.querySelector("#Continua3");
const ContinuaInfo4 = document.querySelector("#Continua4");

    // Verificar o nome

    if(nameIpunt) {
        if(nameIpunt.value === "") {
            alert("Por favor, insira seu nome");
            return false;
        };

    };

    //Verificar o e-mail

    if(emailInput) {
        if(emailInput.value === "" || !VerificarEmail(emailInput.value)) {
            alert("Por favor, insira o seu E-mail")
            return false;
        };

    };

    //Verificar o CPF

    if(CPFInput){
        if(CPFInput.value === "") {
            alert("Por favor, insira seu CPF");
            return false;
        };
    };

    //Verificar a senha
    if(passwordInput) {
        if(!VerificarSenha(passwordInput.value, 8)) {
            alert("Senha tem menos de 8 digitos")
            return false;
        };
    };
    //Verificar se as senhas são iguais

    if(passwordCheckInput) {
        if(passwordInput.value !== passwordCheckInput.value) {
            alert("Senhas não são iguais")
            return false;
        };
    };

    //Se todos estiverem preenchindo
    if(ContinuaInfo) {
        ContinuaInfo.setAttribute('href', 'Login.jsx');
        ContinuaInfo2.setAttribute('href', 'Login.jsx');
    };

    if(ContinuaInfo3) {
        ContinuaInfo3.setAttribute('href', 'SuaConta.jsx');
        ContinuaInfo4.setAttribute('href', 'SuaConta.jsx');
    };

        form.submit();
        return;

        function VerificarEmail (email) {
            //regex para validar
            const emailRegex = new RegExp(
                // exemplo@gmail.com
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

            );

            if(emailRegex.test(email)) {
                return true
            };
            return false;
        };
    
        function VerificarSenha(password, minDigitos) {
            if(password.length >= minDigitos) {
                return true;
            };
            
            return false;
            
        };

}


export default Validação