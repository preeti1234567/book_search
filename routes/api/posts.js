const router = require("express").Router();
const postsController = require("../../controllers/postsController");


//matches with the /api/books
router
    .route("/")
    .get(postsController.findAll)
    .post(postsController.create);

//matches with /api/books/:id
router
    .route("/:id")
    .get(postsController.findById)
    // .put(postsController.update)
    .delete(postsController.remove);



module.exports = router;