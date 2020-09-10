var baseUrl = "";

if (process.env.NODE_ENV == "development") {
    baseUrl = "http://bitnewsapitest.huiagent.com/author";
} else if (process.env.NODE_ENV == "production") {
    baseUrl = "https://www.production.com";
}

export default baseUrl;
