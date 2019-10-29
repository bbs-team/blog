module.exports =(sequelize, DataTypes) => {
    return sequelize.define('blog', {
        id: {
            type: DataTypes.INT(10),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        },
        {
        timestamps: true,
        });
};