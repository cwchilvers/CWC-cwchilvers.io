#[macro_use]
extern crate rocket;
extern crate tera;

use rocket::routes;
use routes::router::*;

mod routes {
    pub mod router;
}

mod controllers {
    pub mod views_ctrl;
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, music, games, about, archive])
        .register("/", catchers![error_404])
}