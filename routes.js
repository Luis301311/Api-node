module.exports=function(app,databaseService){
    app.get('/',(req, res)=>{
        res.status(200).json({"mensaje": " OK "});
    })

    app.post('/api/users', (req, res)=>{
        const NuevoUsuario=req.body;
        console.log(NuevoUsuario);
        databaseService.createUser(NuevoUsuario)
            .then(()=>{
                res.status(200).json({"message": "Added user."});
            }).catch((err)=>{
                res.status(500).json(err);
            })
    });
    app.post('/api/drivers', (req, res)=>{
        const newDrivers=req.body;
        console.log(newDrivers);
        databaseService.createDrivers(newDrivers)
            .then(()=>{
                res.status(200).json({"message": "Added driver"});
            }).catch((err)=>{
                res.status(500).json(err);
            })
    });
    app.post('/api/travels', (req, res)=>{
        const newTravels=req.body;
        console.log(newTravels);
        databaseService.createTravels(newTravels)
            .then(()=>{
                res.status(200).json({"message": "Added travels"});
            }).catch((err)=>{
                res.status(500).json(err);
            })
    });
    app.post('/api/vehicles', (req, res)=>{
        const newVehicles=req.body;
        console.log(newVehicles);
        databaseService.createVehicles(newVehicles)
            .then(()=>{
                res.status(200).json({"message": "Added vehicles"});
            }).catch((err)=>{
                res.status(500).json(err);
            })
    });

    
    //methods GET
    app.get('/api/users', (req, res)=>{  
        databaseService.getAllUsers()
            .then(users =>{
                res.status(200).json(users);
            }).catch((err)=>{
                res.status(500).json(err);
            })  
    })
    app.get('/api/drivers', (req, res)=>{  
        databaseService.getAllDrivers()
            .then(users =>{
                res.status(200).json(users);
            }).catch((err)=>{
                res.status(500).json(err);
            })  
    })
    app.get('/api/travels', (req, res)=>{  
        databaseService.getAllTravels()
            .then(users =>{
                res.status(200).json(users);
            }).catch((err)=>{
                res.status(500).json(err);
            })  
    })
    app.get('/api/locations', (req, res)=>{  
        databaseService.getAllLocations()
            .then(users =>{
                res.status(200).json(users);
            }).catch((err)=>{
                res.status(500).json(err);
            })  
    })
    app.get('/api/vehicles', (req, res)=>{  
        databaseService.getAllvehicles()
            .then(users =>{
                res.status(200).json(users);
            }).catch((err)=>{
                res.status(500).json(err);
            })  
    })

}