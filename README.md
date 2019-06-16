# aws_ex3
Exercício 3 da disciplina API e Web Services (AWS), Prof: Marco Mendes; Curso: Desenvolvimento Web Full Stack

To run the server, run:  
    ```
    swagger project start
    ```

### To access web services:  

---- PRODUTOS------------------------------------------------------- 
   * Recupera todos os produtos:  
    ```
    GET http://127.0.0.1:10010/produtos
    ```  
   * Recupera um produto específico:  
    ```
    GET http://127.0.0.1:10010/produtos/{id}
    ```
   * Operação para adicionar um produto:  
    ```
    POST http://127.0.0.1:10010/produtos
    ```  
   * Operação para atualizar um produto:  
    ```   
    PUT http://127.0.0.1:10010/produtos/{id}
    ```
   * Operação para remover um produto:  
    ```   
    DELETE http://127.0.0.1:10010/produtos/{id}
    ```  
    
---- CARRINHO -------------------------------------------------------    
  * Recupera todos os produtos do carrinho:  
    ```
    GET http://127.0.0.1:10010/compras
    ```  
  * Recupera um produto específico do carrinho:
    ```
    GET http://127.0.0.1:10010/compras/{id}
    ```  
  * Operação para adicionar um produto no carrinho:
    ```
    POST http://127.0.0.1:10010/compras
    ```
  * Operação para alterar um produto no carrinho:
    ```
    PUT http://127.0.0.1:10010/compras/{id}
    ```
  * Operação para deletar um produto no carrinho:
    ```
    DELETE http://127.0.0.1:10010/compras/{id}
    ```  
---- PEDIDOS -------------------------------------------------------
   * Recupera todos os pedidos:  
    ```
    GET http://127.0.0.1:10010/pedidos
    ```  
   * Recupera um produto específico:  
    ```
    GET http://127.0.0.1:10010/pedidos/{id}
    ```
   * Operação para adicionar um produto:  
    ```
    POST http://127.0.0.1:10010/pedidos
    ```  
   * Operação para atualizar um produto:  
    ```   
    PUT http://127.0.0.1:10010/pedidos/{id}
    ```
   * Operação para remover um produto:  
    ```   
    DELETE http://127.0.0.1:10010/pedidos/{id}
    ```       
---- PAGAMENTOS -------------------------------------------------------
   * Recupera uma lista de pagamentos já realizados:  
    ```
    GET http://127.0.0.1:10010/pagamentos
    ``` 
   * Realiza o pagamento de um pedido:  
    ```
    POST http://127.0.0.1:10010/pagamentos/{idPedido}
    ``` 
    
