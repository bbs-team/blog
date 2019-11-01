module.exports =(sequelize, DataTypes) => {
    return sequelize.define('blog', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        },
        {
        timestamps: true,
        });
};