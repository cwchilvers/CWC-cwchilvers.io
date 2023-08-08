use rocket_dyn_templates::Template;
use tera::Tera;
use tera::Context;

// cwchilvers.io/
pub fn index_view() -> Template {
    let tera = match Tera::new("templates/**/*.tera") {
        Ok(t) => t,
        Err(e) => {
            println!("Parsing error(s): {}", e);
            ::std::process::exit(1);
        }
    };
    let context = "";
    Template::render("index", &context)
}

// cwchilvers.io/music
pub fn music_view() {

}

// cwchilvers.io/games
pub fn games_view() {

}

// cwchilvers.io/misc
pub fn about_view() {

}

// cwchilvers.io/archive
pub fn archive_view() {

}

// Error 404
pub fn error_404_view() {

}
