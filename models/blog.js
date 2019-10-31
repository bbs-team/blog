module.exports =(sequelize, DataTypes) => {
    return sequelize.define('blog', {
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