module.exports = ({ name, subApp, app }) => {
  subApp.inherit(app.render);

  return (req, res, next) => {
    req.subdomain = req.hostname.split('.')[0];

    if (name === '*' || req.subdomain === name) {
      return subApp.handle(req, res, next);
    }

    next();
  }
}
