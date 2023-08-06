#[macro_use]
extern crate rocket;

use rocket::routes;
use routes::router::*;

mod routes {
    pub mod router;
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, music, games, about])
        .mount("/music", routes![film])
        .attach(catchers![not_found]) // Corrected 'register' to 'attach'
}
