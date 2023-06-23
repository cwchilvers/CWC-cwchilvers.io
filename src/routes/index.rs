use rocket::fs::NamedFile;
use std::path::PathBuf;

macro_rules! static_file_route {
    ($route:expr, $fn_name:ident, $file:expr) => {
        #[get($route)]
        pub async fn $fn_name() -> Option<NamedFile> {
            serve_static_file(concat!("templates/html/", $file, ".html")).await
        }
    };
}

static_file_route!("/", index, "index");
static_file_route!("/music", music, "music");
static_file_route!("/film", film, "film");
static_file_route!("/games", games, "games");
static_file_route!("/about", about, "about");

#[catch(404)]
pub async fn not_found() -> Option<NamedFile> {
    serve_static_file("templates/html/404.html").await
}

async fn serve_static_file(file_path: &str) -> Option<NamedFile> {
    NamedFile::open(PathBuf::from(file_path)).await.ok()
}