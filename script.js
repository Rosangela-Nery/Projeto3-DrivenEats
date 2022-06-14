function selecionarComida(prato1) {
    let clicar1 = document.querySelector(".linha1 .selecionado");
    
  
    if (clicar1 !== null) {
      clicar1.classList.remove("selecionado");
    } else {
      prato1.classList.add("selecionado");    
    }

    let iconeClicado = document.querySelector(".linha1 .selecionado .icone");
    let icone = document.querySelector(".comida .icone");
    let icone1 = document.querySelector(".comida1 .icone");
    let icone2 = document.querySelector(".comida2 .icone");

    if (iconeClicado !== null) {
        iconeClicado.classList.remove("invisivel1")
    } else {
        icone.classList.add("invisivel1")
        icone1.classList.add("invisivel1")
        icone2.classList.add("invisivel1")
    }

    botaoVerde();
  }
  
  selecionarComida();
  
  function selecionarRefri(prato1) {
    let clicar1 = document.querySelector(".seleciona .selecionado");
  
    if (clicar1 !== null) {
      clicar1.classList.remove("selecionado");
    } else {
      prato1.classList.add("selecionado");
    }

    let iconeClicado = document.querySelector(".linha2 .selecionado .icone");
    let icone = document.querySelector(".bebida .icone");
    let icone1 = document.querySelector(".bebida1 .icone");
    let icone2 = document.querySelector(".bebida2 .icone");

    if (iconeClicado !== null) {
        iconeClicado.classList.remove("invisivel1")
    } else {
        icone.classList.add("invisivel1")
        icone1.classList.add("invisivel1")
        icone2.classList.add("invisivel1")
    }

    botaoVerde();
  }
  
  selecionarRefri();
  
  function selecionarSobremesa(prato1) {
    let clicar1 = document.querySelector(".seleciona1 .selecionado");
  
    if (clicar1 !== null) {
      clicar1.classList.remove("selecionado");
    } else {
      prato1.classList.add("selecionado");
    }

    let iconeClicado = document.querySelector(".linha3 .selecionado .icone");
    let icone = document.querySelector(".pudim .icone");
    let icone1 = document.querySelector(".pudim1 .icone");
    let icone2 = document.querySelector(".pudim2 .icone");

    if (iconeClicado !== null) {
        iconeClicado.classList.remove("invisivel1")
    } else {
        icone.classList.add("invisivel1")
        icone1.classList.add("invisivel1")
        icone2.classList.add("invisivel1")
    }

    botaoVerde();
  }
  
  selecionarSobremesa();
  
  function botaoVerde() {
    let clicar1 = document.querySelector(".linha1 .selecionado");
    let clicar2 = document.querySelector(".seleciona .selecionado");
    let clicar3 = document.querySelector(".seleciona1 .selecionado");
    let botaoSelecionado = document.querySelector(".botao");

    if (clicar1 !== null && clicar2 !== null && clicar3 !== null) {
      console.log("verde");
      botaoSelecionado.classList.add("botao2");
      botaoSelecionado.innerHTML = "Fechar pedido";
    } else {
      console.log("cinza");
      botaoSelecionado.classList.remove("botao2");
      botaoSelecionado.innerHTML = "Selecione os 3 ítens para fechar o pedido";
    }

  }
  botaoVerde();

  function fecharPedido() {
    let painel = document.querySelector(".fundoBranco");
    let verificaPedido = document.querySelector(".botao2");

    if (verificaPedido !== null){
        painel.classList.add("invisivel");
        let painelRemovido = document.querySelector(".pedido");
        painelRemovido.classList.remove("invisivel");
        console.log("azul");
    }

    let nomeDoPrato = document.querySelector(".linha1 > .selecionado h6").innerHTML;
    let precoDoPrato = Number(document.querySelector(".linha1 > .selecionado span").innerHTML.replace(",","."));
    let nomeDaBebida = document.querySelector(".linha2 > .selecionado h6").innerHTML;
    let precoDaBebida = Number(document.querySelector(".linha2 > .selecionado span").innerHTML.replace(",","."));
    let nomeDaSobremesa = document.querySelector(".linha3 > .selecionado h6").innerHTML;
    let precoDaSobremesa = Number(document.querySelector(".linha3 > .selecionado span").innerHTML.replace(",","."));
    let precoTotal = (precoDoPrato + precoDaBebida + precoDaSobremesa).toFixed(2).replace(".",",");

    document.querySelector(".nomeDaComida1").innerHTML=nomeDoPrato;
    document.querySelector(".nomeDaBebida1").innerHTML=nomeDaBebida;
    document.querySelector(".nomeDaSobremesa1").innerHTML=nomeDaSobremesa;
    document.querySelector(".precoDaComida1").innerHTML=precoDoPrato.toFixed(2).replace(".",",");
    document.querySelector(".precoDaBebida1").innerHTML=precoDaBebida.toFixed(2).replace(".",",");
    document.querySelector(".precoDaSobremesa1").innerHTML=precoDaSobremesa.toFixed(2).replace(".",",");
    document.querySelector(".valor2 h6").innerHTML=`R$ ${precoTotal}`;
  }
  
  fecharPedido();

  function ConfirmarPedido() {
    let nomeDoPrato = document.querySelector(".linha1 > .selecionado h6").innerHTML;
    let precoDoPrato = Number(document.querySelector(".linha1 > .selecionado span").innerHTML.replace(",","."));
    let nomeDaBebida = document.querySelector(".linha2 > .selecionado h6").innerHTML;
    let precoDaBebida = Number(document.querySelector(".linha2 > .selecionado span").innerHTML.replace(",","."));
    let nomeDaSobremesa = document.querySelector(".linha3 > .selecionado h6").innerHTML;
    let precoDaSobremesa = Number(document.querySelector(".linha3 > .selecionado span").innerHTML.replace(",","."));
    let precoTotal = (precoDoPrato + precoDaBebida + precoDaSobremesa).toFixed(2);

    let fraseDoPedido = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n - Prato: ${nomeDoPrato}  \n - Bebida: ${nomeDaBebida} \n - Sobremesa: ${nomeDaSobremesa} \n - Total: R$ ${precoTotal}`);
    window.open(`https://wa.me/5538988120419?text=${fraseDoPedido}`);
  }

  function cancelarPedido() {
      let painel = document.querySelector(".fundoBranco");
      let verificaPedido = document.querySelector(".invisivel");

      if (verificaPedido !== null) {
          painel.classList.remove("invisivel"); 
          
          let painelVerde = document.querySelector(".pedido");
          painelVerde.classList.add("invisivel");
          console.log("vermelho");
      }

  }
  cancelarPedido();
