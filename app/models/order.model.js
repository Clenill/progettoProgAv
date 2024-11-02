const { DataTypes } = require('@sequelize/core');

module.exports = (sequelize) => {
    const Order = sequelize.define("Order", {
        id_order:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        order_state:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'order'
    });
    return Order;
};
