const pool = require('./postgres')

const query =  async (query, param) => {
    const db = await pool.connect()
    const data  = await db.query(query, param)
    return data.rows
}

module.exports = {query}


// const run = async () => {
//     const data1 = await query(`SELECT * FROM leetcode_posts WHERE post_id = $1`, [2])
//     const data2 = await query(`
//     INSERT INTO leetcode_posts (
//         post_name,
//         post_body
//     ) VALUES (
//         $1,
//         $2
//     )`, ['post_2', 'this is the body of post2'])
//     const data3 = await query(`SELECT * FROM leetcode_posts`)
//     console.log(data1)
//     console.log(data2)
//     console.log(data3)
// }

// run();
 