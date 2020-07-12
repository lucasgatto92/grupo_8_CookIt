const mainController = {
    home: (req, res) => {
        res.render('home')
    },
    carrito: (req, res) => {
        res.render('carrito')
    }

}

module.exports = mainController;