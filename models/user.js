module.exports =(sequelize, DataTypes) => {
  return sequelize.define('user', {
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      name:{
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
    },
    {
      timestamps: true,
    });
};