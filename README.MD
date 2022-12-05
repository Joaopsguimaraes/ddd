# DDD - POC examples


## DOMAIN SERVICES
Um serviço de domínio é uma operação sem estado que cumpre uma tarefa especifica do domínio. Muitas vezes, a melhor indicação de que voce deve criar um serviço no modelo de domínio é quando a operação que voce precisa executar parece não se encaixar como um método em um agregado ou um objeto de valor.
Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma ENTIDADE ou OBJETOR DE VALOR, adicione uma operação ao modelo como uma interface autónoma declarada como um SERVIÇO. Defina a interface baseada na linguagem no modelo de domínio e certifique-se de que o nome da operação faça parte dos UBIQUITOUS LANGUAGE. Torne o SERVIÇO sem estado.
### CUIDADOS
- Quando houver muitos Domain Services em seu projeto, TALVEZ, isso pode indicar que seus agregados estão anêmicos
- Domain services são stateless (geralmente os métodos do domain service são estáticos)

## Repositories
Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. QUando voce armazena algo em um repositório e depois retorna para recuperá-lo, voce espera que ele esteja no mesmo estado quando voce colocou la. Em algum momento, voce pode optar por remover o item armazenado do repositório.

Esses objetos semelhantes a coleções são sobre persistência. Todo tipo AGREGADO persiste terá um REPOSITÓRIO. De um modo geral, existe uma relação UM PARA UM entre um tipo AGREGADO e um REPOSITÓRIO.