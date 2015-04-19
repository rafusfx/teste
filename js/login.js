function login() {


    var email = $$("#emailtx").val();
    var senha = $$("#passwordtx").val();
    var senhasec = calcMD5(senha);

    if (email != "" && senha != "") {

        $$.getJSON("http://samespace.hospedagemdesites.ws/app/services/login.php?email=" + email + "&senha=" + senhasec + "", function (dados) {
            //$$.getJSON("/sys/lg.php?email=contato@thiago.ws&senha=123456", function(dados) {

            if (dados.retorno == "1") {

                //##### CREATE COOKIE WITH ID  #######///
                window.localStorage.setItem("userID", dados[0].id);
                window.localStorage.setItem("nome", dados[0].nome);
                window.localStorage.setItem("email", dados[0].email);
                window.localStorage.setItem("senha", dados[0].senha);
                window.localStorage.setItem("picUrl", dados[0].picUrl);
                window.localStorage.setItem("tipoCadastro", dados[0].tipoCadastro);
                window.localStorage.setItem("idade", dados[0].idade);
                window.localStorage.setItem("status", dados[0].status);
                window.localStorage.setItem("interestedIn", dados[0].interestedIn);
                window.localStorage.setItem("likes", dados[0].likes);
                window.localStorage.setItem("lat", dados[0].lat);
                window.localStorage.setItem("long", dados[0].long);
                window.localStorage.setItem("userscanseeme", dados[0].userscanseeme);
                window.localStorage.setItem("contactscanseeme", dados[0].contactscanseeme);
                //console.log(dados[0].idpessoa);

                window.location = "services.html";

            } else if (dados.retorno == "0") {

                myApp.hidePreloader();
               // navigator.vibrate(20);
                myApp.alert("E-mail ou senha inválidos", "Erro!");

            }
        })

    } else {
        myApp.hidePreloader();
        //navigator.vibrate(20);
        myApp.alert("Todos os campos são obrigatórios.", "Erro!");

    }



}

function newcadastro() {
    myApp.hidePreloader();
    var nome = $$("#nometxc").val();
    var email = $$("#emailtxc").val();
    var datanasc = $$("#datanasc").val();
    var senha = $$("#senhatxc").val();
    var senha2 = $$("#confsenhatxc").val();
    var lat;
    var long;
        
    if(senha != senha2){
        myApp.hidePreloader();
        $$("#senhatxc").val("");
        $$("#confsenhatxc").val("");
        //navigator.vibrate(20);
        myApp.alert("Senha não confirmada!", "Ops!");

        return false;
    }

    var senhasec = calcMD5(senha);

    $$.getJSON("http://samespace.hospedagemdesites.ws/app/services/newUser.php?nome=" + nome + "&email=" + email + "&senha=" + senhasec + "&picurl=/img/user.svg&tipo=normal", function (dados) {
        //$$.getJSON("/sys/lg.php?email=contato@thiago.ws&senha=123456", function(dados) {

        if (dados.retorno == "1") {

            //##### CREATE COOKIE WITH ID  #######///
            window.localStorage.setItem("userID", dados[0].id);
                window.localStorage.setItem("nome", dados[0].nome);
                window.localStorage.setItem("email", dados[0].email);
                window.localStorage.setItem("senha", dados[0].senha);
                window.localStorage.setItem("picUrl", dados[0].picUrl);
                window.localStorage.setItem("tipoCadastro", dados[0].tipoCadastro);
                window.localStorage.setItem("idade", dados[0].idade);
                window.localStorage.setItem("status", dados[0].status);
                window.localStorage.setItem("interestedIn", dados[0].interestedIn);
                window.localStorage.setItem("likes", dados[0].likes);
                window.localStorage.setItem("lat", dados[0].lat);
                window.localStorage.setItem("long", dados[0].long);
                window.localStorage.setItem("userscanseeme", dados[0].userscanseeme);
                window.localStorage.setItem("contactscanseeme", dados[0].contactscanseeme);

            //console.log(dados[0].idpessoa);
            //console.log(dados[0].idpessoa);
            //mainView.router.back();
            
            window.location = "services.html";

        } else {

            myApp.hidePreloader();
            navigator.vibrate(20);
            myApp.alert("E-mail ou senha inválidos", "Ops!");

        }
    })

} 
