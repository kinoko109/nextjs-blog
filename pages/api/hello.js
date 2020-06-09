export default (req, res) => {
    console.log(req)
    console.log(res)
    res.status(200).json({ text: 'Hello' })
}