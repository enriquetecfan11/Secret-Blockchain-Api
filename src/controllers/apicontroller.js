const apiService = require('../services/apiservices');

const istWorks = (req, res) => {
    res.send('API works');
}

const getAllBlocks = (req, res) => {
    apiService.getAllBlocks()
        .then(blocks => {
            res.json(blocks);
            res.sendStatus(200);

        })
        .catch(err => {
            res.json(err);
            res.sendStatus(200);

        }
        );
}

const createBlock = (req, res) => {
    apiService.createBlock(req.body)
        .then(block => {
            res.json(block);
            res.sendStatus(200);
        }
        )
        .catch(err => {
            res.json(err);
        }
        );
}

const getOneBlock = (req, res) => {
    apiService.getOneBlock(req.params.id)
        .then(block => {
            res.json(block);
            res.sendStatus(200);

        }
        )
        .catch(err => {
            res.json(err);
        }
        );
}

const deleteBlock = (req, res) => {
    apiService.deleteBlock(req.params.id)
        .then(block => {
            res.json(block);
        }
        )
        .catch(err => {
            res.json(err);
        }
        );
}


const deleteAllBlocks = (req, res) => {
    apiService.deleteAllBlocks()
        .then(block => {
            res.json(block);
            res.sendStatus(200);

        }
        )
        .catch(err => {
            res.json(err);
        }
        );
}

const updateBlock = (req, res) => {
    apiService.updateBlock(req.params.id, req.body)
        .then(block => {
            res.json(block);
            res.sendStatus(200);
        }
        )
        .catch(err => {
            res.json(err);
        }
        );
}

module.exports = {
    getAllBlocks,
    createBlock,
    getOneBlock,
    deleteBlock,
    deleteAllBlocks,
    updateBlock,
    istWorks
}
