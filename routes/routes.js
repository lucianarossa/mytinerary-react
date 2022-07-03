
const Router = require ("express").Router(); // le pido a express que me traiga router para definir las rutas
const validator = require ("../config/validator")
const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require ('../controllers/itinerariesControllers');
const usersControllers = require ('../controllers/usersControllers')
const countriesControllers = require ("../controllers/countriesControllers")

const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers;
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, multiplesItineraries, getItinerariesByCity} = itinerariesControllers; 
const {signUpUsers, logInUser, logOutUser, verifyMail, verifyToken} = usersControllers
const {getCountries, addCountry, multiplesCountries} = countriesControllers
const passport = require("../config/passport");




//RUTAS CITIES

Router.route('/cities') 
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route("/multiplesCities")
.post(multiplesCities)


//RUTAS ITINERARIES

Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route("/multiplesitineraries")
.post(multiplesItineraries) 

Router.route("/itinerarybycity/:id")
.get(getItinerariesByCity)

// RUTAS USERS

Router.route('/auth/signup')
.post(validator, signUpUsers)

Router.route ('/auth/login')
.post(logInUser)

Router.route ('/auth/logoutuser')
.post(logOutUser)

Router.route("/verify/:string") 
.get(verifyMail)

Router.route('/auth/token')
.get(passport.authenticate('jwt', {session: false}),verifyToken)

// RUTAS COUNTRIES

Router.route('/countries') 
.get(getCountries)
.post(addCountry)

Router.route("/multiplesCountries")
.post(multiplesCountries)


module.exports = Router