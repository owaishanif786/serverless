module.exports = {
	sayHello: async(req, res, next) => {
		console.log(">>>hitting sayHello inside HelloController")
		res.send('hello hi');
	}
}