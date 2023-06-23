#[macro_use]
extern crate rocket;

mod routes {
    pub mod index;
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![
            routes::index::index, 
            routes::index::music,
            routes::index::games, 
            routes::index::about
        ])
        .mount("/music", routes![routes::index::film])
        .register("/", catchers![routes::index::not_found])
}