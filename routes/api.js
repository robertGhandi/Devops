import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

router.get("/health", (req, res) => {
  res.status(200).json({ message: "healthy" });
});

router.get("/me", (req, res) => {
  res.status(200).json({
    name: "Nwoke Ghandi Robert",
    email: "robertzerah@gmail.com",
    github: "https://github.com/robertGhandi/",
  });
});

export default router;