use rocket::fs::NamedFile;
use std::path::PathBuf;

#[get("/")]
pub async fn index() -> Option<NamedFile> {
    serve_static_file("index.html").await
}

#[get("/music")]
pub async fn music() -> Option<NamedFile> {
    serve_static_file("music.html").await
}

#[get("/film")]
pub async fn film() -> Option<NamedFile> {
    serve_static_file("film.html").await
}

#[get("/games")]
pub async fn games() -> Option<NamedFile> {
    serve_static_file("games.html").await
}

#[get("/about")]
pub async fn about() -> Option<NamedFile> {
    serve_static_file("about.html").await
}

#[catch(404)]
pub async fn not_found() -> Option<NamedFile> {
    serve_static_file("404.html").await
}

async fn serve_static_file(file_name: &str) -> Option<NamedFile> {
    NamedFile::open(PathBuf::from(format!("templates/html/{}", file_name))).await.ok()
}