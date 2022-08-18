const pool = require('../../dbConfig')


class LikedQuesController {

    static async getLiked(req, res) {
        const { user_id } = req.body

        try {
            const response = await pool.query('SELECT * FROM public.favorites JOIN public.user ON public.favorites.user_id = public.user.id JOIN public.response ON public.favorites.response_id = public.response.id WHERE public.user.id = $1', [user_id]).then(res => res.rows);
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json("Server Error")
        }
    }

    static async sendLiked(req, res) {
        const { user_id, response_id } = req.body
        console.log(user_id, response_id)
        try {
            const resp = await pool.query('INSERT INTO public.favorites (user_id, response_id) VALUES ($1, $2) RETURNING *', [user_id, response_id]).then(res => res.rows[0])
            return res.status(200).json("Added to favorites")
        } catch (error) {
            console.log(error)
            return res.status(500).json("Server Error")
        }
    }
}

module.exports = LikedQuesController;