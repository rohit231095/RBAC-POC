import { Server, Model, Response } from "miragejs";

let server = new Server({
    models: {
        user: Model,
    },
    routes() {
        this.namespace = "api";
        this.get("/users", (schema, req) => {
            return new Response(200, {}, schema.users.all());
        });
        this.post("/login", (schema, req) => {
            const attributes = JSON.parse(req.requestBody);
            const user = schema.users.findBy({ username: attributes.username });
            if (user) {
                const { attrs } = user;
                const { password } = attrs;
                if (attributes.password === password) {
                    return new Response(200, {}, { user, error: false });
                } else {
                    return new Response(200, {}, { message: "Invalid Password", error: true });
                }
            } else {
                return new Response(200, {}, { message: "User Not Found", error: true });
            }
        })
    },
    seeds(server) {
        server.create("user", { username: "rohit", password: "rohit", role: "admin", firstName: "Rohit", lastName: "Khandelwal" })
        server.create("user", { username: "raj", password: "raj", role: "basic", firstName: "Raj", lastName: "Sharma" })
        server.create("user", { username: "upasana", password: "upasana", role: "guest", firstName: "Upasana", lastName: "Deka" })
        server.create("user", { username: "jesse", password: "jesse", role: "admin", firstName: "Jesse", lastName: "Goodall" })
    }
});

// if (process.env.REACT_APP_API_ENV !== "mock") {
//     server = {};
// }

export default server;