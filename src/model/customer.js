const Sequelize = require('sequelize')
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRE } = require('../config/env')

const model = Sequelize.Model

const customerModel = (sequelize, DataTypes) => {
    class Customer extends model {

        passwordMatch(password) {
            return bcrypt.compareSync(password, this.password)
        }

        createToken() {
            return jwt.sign({ id: this.customerId }, JWT_SECRET, { expiresIn: JWT_EXPIRE })
        }

    }

    Customer.init(
        {
            customerId: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuid.v4()
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            bvn: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },

            dob: {
                type: DataTypes.DATE,
                allowNull: false
            },

            address: {
                type: DataTypes.STRING,
                allowNull: false
            },

            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                enum: ['male', 'female']
            },

            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            nin: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },

            accountNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },

            accountBalance: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },

            verified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
                hooks: {
                    beforeCreate: (user) => {
                        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
                    },
                    beforeUpdate: (user) => {
                        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
                    }
                }
            }

        }, {
        sequelize,
        modelName: 'customer',
        tableName: 'customer',
        timestamps: true
    })
    return Customer;
}

module.exports = customerModel;
