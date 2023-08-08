use crate::controllers::views_ctrl;

#[get("/")]
pub fn index() {
    views_ctrl::index_view();
}

#[get("/music")]
pub fn music() {
    views_ctrl::music_view();
}

#[get("/games")]
pub fn games() {
    views_ctrl::games_view();
}

#[get("/misc")]
pub fn about() {
    views_ctrl::about_view();
}

#[get("/archive")]
pub fn archive() {
    views_ctrl::archive_view();
}

#[catch(404)]
pub fn error_404() {
    views_ctrl::error_404_view();
}
