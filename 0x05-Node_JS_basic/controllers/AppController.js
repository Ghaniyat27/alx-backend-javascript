/**
 * Contains the miscellaneous route handlers.
 * @author: Ghaniyat Babalola <https://github.com/Ghaniyat>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
