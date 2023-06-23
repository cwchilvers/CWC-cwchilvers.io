#[macro_use]
extern crate rocket;

use rocket::routes;
use routes::index::*;

mod routes {
    pub mod index;
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![
            index, 
            music,
            games, 
            about
        ])
        .mount("/music", routes![film])
        .register("/", catchers![not_found])
}