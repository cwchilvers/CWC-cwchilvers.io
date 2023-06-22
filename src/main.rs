#[macro_use]
extern crate rocket;

use rocket::fs::NamedFile;
use std::path::PathBuf;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, music, games, about])
        .mount("/music", routes![film])
        .register("/", catchers![not_found])
}

#[get("/")]
async fn index() -> Option<NamedFile> {
    serve_static_file("index.html").await
}

#[get("/music")]
async fn music() -> Option<NamedFile> {
    serve_static_file("music.html").await
}

#[get("/film")]
async fn film() -> Option<NamedFile> {
    serve_static_file("film.html").await
}

#[get("/games")]
async fn games() -> Option<NamedFile> {
    serve_static_file("games.html").await
}

#[get("/about")]
async fn about() -> Option<NamedFile> {
    serve_static_file("about.html").await
}

#[catch(404)]
async fn not_found() -> Option<NamedFile> {
    serve_static_file("404.html").await
}

async fn serve_static_file(file_name: &str) -> Option<NamedFile> {
    NamedFile::open(PathBuf::from(format!("public/html/{}", file_name))).await.ok()
}