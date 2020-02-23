import routes from "./routes";

export const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next(); // request 전달. 다음 함수 혹은 라우터로 전달
};