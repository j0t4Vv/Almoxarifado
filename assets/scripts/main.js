// document.getElementById('departamento').addEventListener('focus', function(){
//     const inputDepartamaneto = document.getElementById('departamento');
//     inputDepartamaneto.style.backgroundColor="#90EE90"

// });

// document.getElementById('departamento').addEventListener('blur', function(){
//     const inputDepartamaneto = document.getElementById('departamento');
//     inputDepartamaneto.style.backgroundColor="#white"

// });

function adicionarCorAoFocarInput(){
    const listinput = document.querySelectorAll("input");

    // console.log(listinput.length);
    // console.log(listinput);

    // listinput[0].style.backgroundColor='#90EE90'
    // listinput[1].style.backgroundColor='#90EE90'

    // for (let i = 0; i < listinput.length; i++) {
    //     listinput[i].style.backgroundColor='#90EE90'
    // }

    // listinput.forEach(function(campo){
    //     campo.style.backgroundColor="#90EE90"
        
    // })

    
    listinput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.outlineColor = "#Add8e6";
        })
        
        item.addEventListener('blur', function(){
            item.style.outlineColor='white'
        })
    })

    
}
function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optfirst = document.createElement('option')
    optfirst.value=-1
    optfirst.text='';
    selectCategoria.add(optfirst);


    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descrição;

        selectCategoria.add(opt);


    })
}

document.getElementById('categoriaMotivo').addEventListener('change', function(){
    carregarMotivos();
})

document.getElementById('CodigoProduto').addEventListener("keyup", function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    
    let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

    if (produtosFiltrados.length > 0){
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
    }else{
        document.getElementById('DescricaoProduto').value="";
    }
})

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";

    const optfirst = document.createElement('option')
    optfirst.value=-1
    optfirst.text="";
    selectMotivo.add(optfirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecionada: "+ valorCategoria)
    const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria)

    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value=motivo.idCategoria;
        opt.text=motivo.Descrição;

        selectMotivo.add(opt);


    })
}

document.getElementById('categoriaMotivo').addEventListener('change', function(){
    carregarMotivos();
})


adicionarCorAoFocarInput();
carregarCategorias();
console.log(categorias)
carregarMotivos();
