import express from 'express';
import pgPromise from 'pg-promise';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public/'));
app.use(express.json());
import cors from 'cors'
app.use(cors());

// Postgres Setup
const pgp = pgPromise({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },
    disconnect(client) {
        console.log('Disconnected from database:', client.connectionParameters.database);
    }

});

// Local PostgreSQL credentials
const username = 'postgres';
const password = 'postgres';

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp(url);


async function connectAndRun(task) {
    let connection = null;

    try {
        connection = await db.connect();
        return await task(connection);
    } finally {
        try {
            connection.done();
        } catch (ignored) {
            // ignore 
        }
    }
}

// Table initialization

// (async () => {
//     await connectAndRun(db => db.none('create table if not exists driver (id serial primary key,password varchar (255),first_name varchar(255),last_name varchar (255),age integer,phone varchar (20),email varchar (255),car_make varchar (255),car_type varchar(255),car_model varchar (255),car_color varchar (255),car_plate varchar (255),verified boolean);'));

//     await connectAndRun(db => db.none('create table if not exists patient (id serial primary key,password varchar (255),first_name varchar(255),last_name varchar (255),age integer,phone varchar (20),email varchar (255),emergency_phone varchar (20),home_address varchar (255),pickup varchar (255),driver_id integer,current_status varchar (30), pickup_time varchar (50), foreign key (driver_id) references driver(id) on delete set null);'));

//     await connectAndRun(db => db.none('create table if not exists hospital (id serial primary key,name varchar(255),driver_id int,foreign key (driver_id) references driver(id) on delete set null);'));
// })();

// Helper functions 

async function postFamily(id, username, pid, ppid, title, img, main_user, tag) {
    await connectAndRun(db => db.none('INSERT INTO family(id, username, pid, ppid, title, img, main_user, tag) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [id, username, pid, ppid, title, img, main_user, tag]));
}

app.get('/family', async (req, res) => {
    let result = await connectAndRun(db => db.any('select * from family order by id'))
    console.log(result)
    res.send(JSON.stringify(result))
})

app.post('/family', async (req, res) => {
    const data = req.body
    for(let i in data) {
        
        if(data[i]['name'].length != 0) {
            console.log(data[i])
            
            if(data[i]['pid'].length != 0 && data[i]['ppid'].length == 0) {
                postFamily(data[i]['id'], data[i]['name'], data[i]['pid'], null, data[i]['nickname'], data[i]['img'], data[i]['main_user'], 'partner')
            }
            else if(data[i]['pid'].length == 0 && data[i]['ppid'].length != 0) {
                let pid1 = data[i]['ppid'].split(',')[0]
                let pid2 = data[i]['ppid'].split(',')[1]
                postFamily(data[i]['id'], data[i]['name'], pid1, pid2, data[i]['nickname'], data[i]['img'], data[i]['main_user'], null)
            }
            else {
                postFamily(data[i]['id'], data[i]['name'], null, null, data[i]['nickname'], data[i]['img'], data[i]['main_user'], null)
            }
        }
    }
    res.send({
        'message': 'success'
    });
})

app.get('/partner', async (req, res) =>{
    let result = await connectAndRun(db => db.any('select * from family where id = 2'))
    console.log(result)
    res.send(JSON.stringify(result))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});