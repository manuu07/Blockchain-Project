const axios=require('axios')
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
        //console.log(data[0])
        const len = data.length
        console.log(len)

            const deletedbData = await coinModel.deleteMany()
            const createData = await coinModel.create(data)

        const sortedData = data.sort((a,b)=>a.changePercent24Hr - b.changePercent24Hr)
        res.status(201).send({ status: true,msg: sortedData })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getCoins=getCoins