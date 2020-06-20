var router = require("express").Router();
import {
    FindAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser,
} from "./user.services";

// Base Get Route
router.get("/", async (req, res) => {
    try {
        let data = await FindAllUsers(req.db);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});

// Base GetOne Route
router.get("/:id", async (req, res) => {
    try {
        let data = await FindAllUsersById(req.db, req.params);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});

// Base Create Route
router.post("/", async (req, res) => {
    try {
        let data = await CreateUser(req.db, req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});

// Base Update Route
router.put("/:id", async (req, res) => {
    try {
        let data = await UpdateUser(req.db, req.params, req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});

// Base Delete Route
router.delete("/:id", async (req, res) => {
    try {
        await DeleteUser(req.db, req.params);
        res.status(204).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});

module.exports = router;
