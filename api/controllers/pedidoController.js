exports.getPedidos = (req, res, next) => {
    res.json('Lista de pedidos foi recuperado com sucesso!');
};

exports.getPedidosById = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Pedido ' +  id.toString() + ' foi recuperado com sucesso!');
};

exports.postPedido = (req, res, next) => {
    res.json('Novo pedido adicionado com sucesso!');
};

exports.putPedido = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Pedido ' +  id.toString() + ' atualizado com sucesso!');
};

exports.deletePedido = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Pedido ' +  id.toString() + ' deletado com sucesso!');
};