const { Users } = require('../models');

class Controller{
    static async getAllUsers(_, res, next) {
        try{
            const allUsers = await Users.findAll()

            res.status(200).json({message: 'success', data: allUsers})
        }catch (err) {
            next(err)
        }
    }

    static async getUsersDetail(req, res, next) {
        try{
            const { id } = req.params
            const allUsers = await Users.findByPk(id)

            res.status(200).json({message: 'success', data: allUsers})
        }catch (err) {
            next(err)
        }
    }
    
    static async deleteUsers(req, res, next) {
        const { id } = req.params
        
        Users.destroy({
            where: { id }
        })
        .then(() => {
            res.status(200).json({message: 'Users deleted success'})
        }).catch(err => next(err))
    }

    static async editUsers(req, res, next) {
        const { id } = req.params
        const { name } = req.body
        
        Users.update({name},{  
            where: { id }
        })
        .then(Users => {
            res.status(201).json({message: 'Users edit success', Users})
        }).catch(err => next(err))
    }
    
}

module.exports = Controller;