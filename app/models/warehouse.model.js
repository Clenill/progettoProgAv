const { DataTypes } = require('@sequelize/core');

module.exports = (sequelize) => {
    const Warehouse = sequelize.define("Warehouse", {
        id_warehouse: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        food:{
            type: DataTypes.STRING
        },
        quantity_stored:{
            type: DataTypes.DECIMAL(7,3)
        }
    },{
        tableName: 'warehouse'
    })

    return Warehouse;
};
