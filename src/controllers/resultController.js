const pool = require('../../dbConfig')


class ResultController {
    
    static async getResult (req, res) {
        const {checked} = req.body;

        try {
            let resp = []
            checked.forEach(async (ele, index) => {
                const data = await pool.query('SELECT * FROM public.response WHERE public.response.category = $1', [ele]).then(res => res.rows)
                resp = [...resp, ...data]
                if (index === checked.length - 1) res.status(200).json(resp)
            })
        } catch (error) {
            return res.status(500).json("Server error")
        }
    }
}

module.exports = ResultController