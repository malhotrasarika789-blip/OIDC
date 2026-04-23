import express from "express";

const app = express();

app.get("/.well-known/openid-configuration", (req, res) => {
    res.json({
        issuer: "http://localhost:8080",

        authorization_endpoint: "http://localhost:8080/authorize",
        token_endpoint: "http://localhost:8080/token",
        userinfo_endpoint: "http://localhost:8080/userinfo",
        jwks_uri: "http://localhost:8080/.well-known/jwks.json",

        response_types_supported: ["code"],
        grant_types_supported: ["authorization_code"],

        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["HS256"],

        scopes_supported: ["openid", "profile", "email"],

        token_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post"
        ],

        claims_supported: [
            "sub",
            "email",
            "name",
            "iat",
            "exp",
            "iss",
            "aud"
        ]
    });
});

app.listen(8080, () => {
    console.log("OIDC config running at http://localhost:8080");
});