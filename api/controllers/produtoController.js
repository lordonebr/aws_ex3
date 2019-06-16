
let prodList = { items: [] }
let lista = prodList.items;

exports.get = (req, res, next) => {
    res.json('Lista de produtos recuperado com sucesso!');
};

exports.getById = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' recuperado com sucesso!');
};

exports.post = (req, res, next) => {
    res.json('Produto adicionado com sucesso!');
};

exports.put = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' atualizado com sucesso!');
};

exports.delete = (req, res, next) => {
    var id = req.swagger.params['id'].value;
    res.json('Produto ' +  id.toString() + ' deletado com sucesso!');
};