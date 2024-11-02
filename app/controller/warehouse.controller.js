const db = require("../models");
const Warehouse = db.warehouse;
const Op = db.Sequelize.Op;

//Creazione e salvataggio di una nuova ricetta
exports.create = (req, res) => {
    // Validazione request
    if(!req.body.food || !req.body.quantity_stored){
        req.status(400).send({
            message: "Food and Quantity can not be empty."
        });
        return;
    }

    //Creazione di una ricetta
    const warehouse = {
        food: req.body.food,
        quantity_stored: req.body.quantity_stored
    };

    //Salva la ricetta nel DB
    Warehouse.create(warehouse)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating Recepie."
        });
    });


};

exports.findAll = (req, res) => { 
};

// Recupera l'food in base al suo nome
exports.findOne = (req, res) => {
    // l'food viene utilizzato nella query come condizione
    // req.body.food o req.query.food?
    const food = req.query.food;

    Recepie.findAll({where: {food: food} })
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving food."
        });
    });
};

// Aggiorna la ricetta con il della richiesta
exports.update = (req, res) => {
  const food = req.query.food;

  Recepie.update(req.body, {
    where: {food: food}
  }).then(num => {
    if (num == 1){
        res.send({
            message: "Food was updated successfully."
        });
    }else{
        res.send({
            message: `Cannot update Warehouse with food=${food}. Maybe Warehouse was not found or req.body is empty!`
        });
    }
  })
  .catch(err => {
    res.status(500).send({
        message: "Error updating Warehouse with food= "+food
    });
  });
};

// Cancella richiesta per id nella richiesta
exports.delete = (req, res) => {
    const food = req.params.food;

    Recepie.destroy({
        where: {food: food}
    }).then(num => {
        if (num == 1){
            res.send({
                message: "Warehouse was deleted successfully."
            });
        } else {
            res.send({
                message: `Cannot delete Warehouse with food=${food}. Maybe Warehouse was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Warehouse with food = "+ food
        });
    });
};

// Cancella tutte le ricette
exports.deleteAll = (req, res) => {
  Warehouse.destroy({
    where: {},
    truncate: false
  }).then(nums => {
    res.send({
        message: `${nums} Warehouse were deleted successfully!`
    });
  }).catch(err => {
    res.status(500).send({
        message: 
        err.message || "Some error occurred while removing all warehouse."
    });
  });
};
