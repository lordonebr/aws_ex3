exports.getCompras = (req, res, next) => {
    res.json('Lista de produtos do carrinho de compras foi recuperado com sucesso!');
};

exports.getComprasById = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' do carrinho de compras foi recuperado com sucesso!');
};

exports.postCompras = (req, res, next) => {
    res.json('Produto adicionado no carrinho de compras com sucesso!');
};

exports.putCompras = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' atualizado no carrinho de compras com sucesso!');
};

exports.deleteCompras = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' deletado do carrinho de compras com sucesso!');
};