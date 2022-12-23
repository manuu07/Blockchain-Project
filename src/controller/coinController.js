const axios = require('axios')
const coinModel = require('../model/coinModel')

const getCoins = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer ff012ab3-897c-43c2-a030-b493568c6278",
            }
        }
        const result = await axios(options);
        const data = result.data.data
        for (let i = 0; i < data.length; i++) {
            await coinModel.findOneAndUpdate({ symbol: data[i].symbol }, data[i], { upsert: true, new: true })
        }

        const sortedData = data.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr)
        res.status(201).send({ status: true, message: sortedData })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, message: err.message })
    }
}


module.exports.getCoins = getCoins