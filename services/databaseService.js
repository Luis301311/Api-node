const databaseService = ()=>{
    const knex = require('knex')({  
        client: 'mysql',
        connection:{
            host: process.env.BD_HOST,
            port:3306,    
            user: process.env.BD_USER,
            password: process.env.BD_PASSWORD,
            database: process.env.BD 
        }
    });

    //methods POST
    const createUser = ({Identification, First_name,Second_name,Surname, 
        Second_surname,Phone,Mail,Birthdate,State})=>{
        return knex('users').insert({
            Identification: Identification,
            First_name:  First_name,
            Second_name: Second_name,
            Surname: Surname,
            Second_surname: Second_surname,
            Phone: Phone,
            Mail: Mail,
            Birthdate: Birthdate,
            State: State
        }); //retorna una promesa
    };

    const createDrivers=({
        Identification, First_name,Second_name,Surname, 
        Second_surname,Phone,Vehicle_plate,Qualification,State
    })=>{
        return knex('drivers').insert({
            Identification: Identification,
            First_name:  First_name,
            Second_name: Second_name,
            Surname: Surname,
            Second_surname: Second_surname,
            Phone: Phone,
            Vehicle_plate: Vehicle_plate,
            Qualification: Qualification,
            State: State
        });
    }
 
    const createTravels =({Id_travel,Driver_Identification,User_Identification,Pick_up_place,
        Destination,Start_date,Final_date,Cost,State})=>{
        return knex('travels').insert({
            Id_travel : Id_travel,
            Driver_Identification: Driver_Identification,
            User_Identification : User_Identification,
            Pick_up_place : Pick_up_place,
            Destination : Destination,
            Start_date : Start_date,
            Final_date : Final_date, 
            Cost : Cost,
            State : State
        })
    }

    const createVehicles = ({Plate, Model})=>{
        return knex('vehicles').insert({
            Plate : Plate,
            Model : Model
        })
    }

    const createLocations = ({Id, Name, Latitude, Length })=>{
        return knex('locations').insert({
            Id : Id,
            Name : Name,
            Latitude : Latitude,
            Length : Length
        })
    }
    //methods GET
    const getAllUsers = ()=>{
        return knex('users').select("*");
    };  
    const getAllDrivers = ()=>{
        return knex('drivers').select("*");
    };  
    const getAllTravels = ()=>{
        return knex('travels').select("*");
    }; 
    const getAllLocations = ()=>{
        return knex('locations').select("*");
    };  
    const getAllvehicles = ()=>{
        return knex('vehicles').select("*");
    };   

    return{
        createUser,
        createDrivers,
        createTravels,
        createLocations,
        createVehicles,
        getAllUsers,
        getAllDrivers,
        getAllLocations,
        getAllvehicles,
        getAllTravels
    };
};
module.exports = {
    databaseService
};