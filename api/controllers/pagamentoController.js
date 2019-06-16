exports.getPagamentos = (req, res, next) => {
    res.json('Lista de pagamentos já realizados recuperado com sucesso!');
};

exports.postPagamentos = (req, res, next) => {
    var idPedido = req.swagger.params['idPedido'].value;
    res.json('Pagamento do pedido ' +  idPedido.toString() + ' foi realizado com sucesso!');
};