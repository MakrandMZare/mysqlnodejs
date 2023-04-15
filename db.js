const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: '162.241.85.223',
    port: '3306',
    user: 'gopaljng_swami',
    password: 'Swami#2832',
    database: 'gopaljng_swami'
})

module.exports = mysqlPool