#[macro_use]
extern crate rocket;

use rocket::fs::NamedFile;
use std::path::{PathBuf};

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open(PathBuf::from("public/html/index.html")).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}