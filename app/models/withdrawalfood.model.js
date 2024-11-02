const { DataTypes } = require('@sequelize/core');

module.exports = (sequelize) => {
    const Withdrawal = sequelize.define("Withdrawal", {
        id_withdeawal:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity_withdrawal:{
            type: DataTypes.DECIMAL(7,3),
            allowNull: false,
        },
        timestamp:{
            type: DataTypes.DATE
        }
    },{
        tableName: 'withdrawal'
    })

    return Withdrawal;
};
