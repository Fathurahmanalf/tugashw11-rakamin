'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'Fathur',
      job: 'Entrepreneur',
      email: 'fathur@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Dyas',
      job: 'Content Creator',
      email: 'dyas@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Angga',
      job: 'Actor',
      email: 'angga@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Zaki',
      job: 'Engineer',
      email: 'Zaki@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Radian',
      job: 'Singer',
      email: 'Radian@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Doni',
      job: 'Chef',
      email: 'Doni@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Radja',
      job: 'Doctor',
      email: 'Radja@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Adjie',
      job: 'Artist',
      email: 'Adjie@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Fawas',
      job: 'Psychologist ',
      email: 'Fawas@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: 'Alfaridzi',
      job: 'Minister  ',
      email: 'alfaridzi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
