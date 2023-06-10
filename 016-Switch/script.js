document.write("<br> Escolha seu pedido: <br>");
document.write("<br> 0 - Sorvete / 1 - Suco <br>");
document.write("<br> 2 - Coca-cola / 3 - Agua gelada <br><br>");

//Switch
function pedir(){

    x = prompt("O que deseja pedir?");

    switch(x){
    
        case "0":
            alert("Você pediu sorvete:)");
            break;
        case "1":
            alert("Você pediu um suco");
            break;    
        case "2":
            alert("Você pediu uma coca gelada");
            break;
        case "3":
            alert("Você pediu uma Agua natural");
            break; 
        default:    
            alert("Ops, não temos essa opção!");
            break;                      
            
    }    

}