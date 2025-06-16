const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const imgFile = fs.readFileSync(path.resolve(__dirname, "image.png"));

function methodNotAllowed(route) {
  route.all((req, res) =>
    res.status(405).send(`${req.method} is not supported on ${req.path}`)
  );
}

const root = app.route("/");
root.get((req, res) => res.redirect(303, "/hello-world"));
methodNotAllowed(root);

const hello = app.route("/hello-world");
hello.get((req, res) => res.redirect(303, "/hello-world.json"));
methodNotAllowed(hello);

const jsonRoute = app.route("/hello-world.json");
jsonRoute.get((req, res) => res.status(200).json({ message: "hello world" }));
methodNotAllowed(jsonRoute);

const imgRoute = app.route("/hello-world.png");
imgRoute.get((req, res) => res.status(200).type("png").send(imgFile));
methodNotAllowed(imgRoute);

app.use((req, res) => res.status(404).send(`Cannot ${req.method} ${req.path}`));

app.listen(3000, () => console.log("Listening on 3000"));
