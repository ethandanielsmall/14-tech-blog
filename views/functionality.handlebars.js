function fill_template() {
    var data = {
        title: "why handlebars is vool",
        list: [
            {name: "you ca generate stuff"},
            {name: "you can stuff"}
        ],
        footer: "this is the footer"
    };
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}