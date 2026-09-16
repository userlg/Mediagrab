/// Pequeño helper para los pocos mensajes que arma el backend (errores,
/// textos de respaldo). El resto de la UI se traduce en el frontend;
/// esto solo cubre lo que efectivamente genera Rust.
pub fn tr(lang: &str, en: &str, es: &str) -> String {
    if lang == "en" {
        en.to_string()
    } else {
        es.to_string()
    }
}
