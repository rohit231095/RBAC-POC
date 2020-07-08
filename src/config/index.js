let API_URL = "";

if (process.env.REACT_APP_API_ENV === "dev") {
    API_URL = "http://c42d36ad5ed5.ngrok.io";
} else if (process.env.REACT_APP_API_ENV === "mock") {
    API_URL = "/api";
} else {
    API_URL = "/api";
}

const Config = {
    API_URL
};

export default Config;