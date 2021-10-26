const router = require("express").Router();
const { addUser, getUser, getUsers, editUser, deleteUser } = require("../utils/user");

//getting all users
router.get("/", (req, res) => {
    res.status(200).json(getUsers);
});

//creating a user
router.post("/", (req, res) => {
    addUser(req.body);
    res.status(201).json({body: req.body});
});

//getting user id
router.get("/:id", (req, res) => {
    res.status(200).json(getUser(req.params.id));
});

//reset user database/update object in the entirety
router.put("/:id", (req, res) => {
    const user = {id: req.params.id, ...req.body};
    editUser(user, req.params.id);
    res.status(201).json({user});
});

//deleting a user
router.delete("/:id", (req, res) => {
    deleteUser(req.params.id);
    res.status(200).json({"msg": `Deleted user: ${req.params.id}`});
});



//getting all orders from specific user
router.get("/:id/orders", (req, res) => {
    try {
    res.status(200).json(getUser(req.params.id).orders)
    }catch (error) {
        res.status(404).json({msg: `user: ${req.params.id} not found`});
    }

});

//getting a specific order from specific user
router.get("/:id/orders/:ordersId", (req, res) => {
    try {
        const findOrder = (order) => order.id == req.params.orderId;
        res.status(200).json(getUser(req.params.id).orders.find(findOrder));
    } catch (error) {
        res.status(404).json({msg: `${req.params.id} not found, or ${req.params.orderId} not found`});
    }
});



module.exports = router;