'use strict';
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.STRING(126).BINARY,
      primaryKey: true,
      defaultValue: () => uuidv4()
    },
    email: DataTypes.STRING
  }, {});
  Member.associate = function(models) {
  };
  return Member;
};